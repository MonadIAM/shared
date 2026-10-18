#!/usr/bin/env bash
set -euo pipefail

: "${GITHUB_TOKEN:?GITHUB_TOKEN is required}"

readonly RETAINED_BUILDS=10
readonly PACKAGE="shared-schemas"
readonly IMAGE="ghcr.io/monadiam/$PACKAGE"
readonly LOCAL_IMAGE="monadiam/shared-schemas:ci"
readonly PACKAGE_API="/orgs/MonadIAM/packages/container/$PACKAGE"
readonly VERSION_PATTERN='^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$'
readonly DIGEST_PATTERN='^sha256:[0-9a-f]{64}$'
readonly SHA_TAG_PATTERN='^sha-[0-9a-f]{40}$'

commit=$(git rev-parse HEAD)
sha_tag="sha-$commit"
versions='[]'
source_digest=''
published_tag=''

load_versions() {
    local packages

    packages=$(gh api --paginate --slurp \
        "/orgs/MonadIAM/packages?package_type=container&per_page=100")

    if jq -e --arg name "$PACKAGE" \
        'any(.[][]; .name == $name)' <<< "$packages" >/dev/null; then
        versions=$(gh api --paginate --slurp \
            "$PACKAGE_API/versions?per_page=100" | jq 'add')

        source_digest=$(jq -r --arg tag "$sha_tag" '
            .[] | select(.metadata.container.tags | index($tag)) | .name
        ' <<< "$versions")
    fi
}

publish_commit() {
    local revision

    if [[ -n "$source_digest" ]]; then
        printf 'Reusing %s:%s\n' "$IMAGE" "$sha_tag"
    else
        revision=$(docker inspect "$LOCAL_IMAGE" \
            --format '{{index .Config.Labels "org.opencontainers.image.revision"}}')

        if [[ "$revision" == "$commit" ]]; then
            docker tag "$LOCAL_IMAGE" "$IMAGE:$sha_tag"
            docker push "$IMAGE:$sha_tag"
        else
            printf 'Image revision does not match %s\n' "$commit" >&2
            exit 1
        fi
    fi

    published_tag="$sha_tag"
}

publish_release() {
    local version existing_digest

    : "${GITHUB_REF_NAME:?GITHUB_REF_NAME is required}"
    version=$(jq -er '.version' package.json)

    if [[ "$version" =~ $VERSION_PATTERN &&
          "$GITHUB_REF_NAME" == "v$version" &&
          "$source_digest" =~ $DIGEST_PATTERN ]]; then
        existing_digest=$(jq -r --arg tag "$version" '
            .[] | select(.metadata.container.tags | index($tag)) | .name
        ' <<< "$versions")

        if [[ -z "$existing_digest" ]]; then
            docker buildx imagetools create --prefer-index=false \
                --tag "$IMAGE:$version" "$IMAGE@$source_digest"
        elif [[ "$existing_digest" == "$source_digest" ]]; then
            printf 'Reusing release %s\n' "$version"
        else
            printf 'Release %s already points to another digest\n' "$version" >&2
            exit 1
        fi
    else
        printf 'Release requires a matching version tag and published SHA image\n' >&2
        exit 1
    fi

    published_tag="$version"
}

cleanup() {
    local candidates id

    candidates=$(jq -r \
        --arg pattern "$SHA_TAG_PATTERN" \
        --arg current "$sha_tag" \
        --argjson keep "$RETAINED_BUILDS" '
        map(select(
            .metadata.container.tags |
            length > 0 and all(.[]; test($pattern))
        ))
        | sort_by(.created_at) | reverse
        | .[$keep:][]
        | select(.metadata.container.tags | index($current) == null)
        | .id
    ' <<< "$versions")

    if [[ -n "$candidates" ]]; then
        while IFS= read -r id; do
            gh api --method DELETE "$PACKAGE_API/versions/$id"
            printf 'Deleted intermediate image %s\n' "$id"
        done <<< "$candidates"
    fi
}

verify_publication() {
    local digest

    digest=$(docker buildx imagetools inspect "$IMAGE:$published_tag" \
        --format '{{.Manifest.Digest}}')

    if [[ "$digest" =~ $DIGEST_PATTERN &&
          ( -z "$source_digest" || "$digest" == "$source_digest" ) ]]; then
        printf 'Image: %s:%s\nDigest: %s@%s\n' \
            "$IMAGE" "$published_tag" "$IMAGE" "$digest" \
            | tee -a "$GITHUB_STEP_SUMMARY"
    else
        printf 'Unexpected digest: %s\n' "$digest" >&2
        exit 1
    fi
}

case "${1:?Usage: packages.sh sha|release|cleanup}" in
    sha|release)
        : "${GITHUB_STEP_SUMMARY:?GITHUB_STEP_SUMMARY is required}"
        load_versions

        if [[ "$1" == "sha" ]]; then
            publish_commit
        else
            publish_release
        fi

        verify_publication ;;
    cleanup)
        load_versions
        cleanup ;;
    *)
        printf 'Unknown operation: %s\n' "$1" >&2
        exit 1 ;;
esac
