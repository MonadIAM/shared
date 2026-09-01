#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
CATALOG_FILE="${CATALOG_FILE:-"$ROOT_DIR/catalog.json"}"
SCHEMA_DIR="${SCHEMA_DIR:-"$ROOT_DIR/src"}"
ENV_FILE="${ENV_FILE:-"$ROOT_DIR/.env"}"

if [ -f "$ENV_FILE" ]; then
    set -a
    . "$ENV_FILE"
    set +a
fi

REGISTRY_URL="${1:-${SCHEMA_REGISTRY_URL:-}}"
REGISTRY_API_PATH="${SCHEMA_REGISTRY_API_PATH:-/apis/registry/v3}"
REGISTRY_CCOMPAT_PATH="${SCHEMA_REGISTRY_CCOMPAT_PATH:-/apis/ccompat/v7}"

if [ -z "$REGISTRY_URL" ]; then
    echo "SCHEMA_REGISTRY_URL is required" >&2
    exit 1
fi

REGISTRY_API="${REGISTRY_URL%/}${REGISTRY_API_PATH}"
REGISTRY_CCOMPAT="${REGISTRY_URL%/}${REGISTRY_CCOMPAT_PATH}"

command -v curl >/dev/null 2>&1 || {
    echo "curl is required" >&2
    exit 1
}

command -v jq >/dev/null 2>&1 || {
    echo "jq is required" >&2
    exit 1
}

"$ROOT_DIR/scripts/check.sh" >/dev/null

create_group() {
    local group_id="$1"
    local status

    status="$(
        jq -n --arg groupId "$group_id" '{ groupId: $groupId }' \
            | curl -sS -o /dev/null -w "%{http_code}" \
                -X POST "$REGISTRY_API/groups" \
                -H "Content-Type: application/json" \
                --data-binary @-
    )"

    case "$status" in
        200 | 204 | 409) ;;
        *)
            echo "Failed to create registry group $group_id: HTTP $status" >&2
            exit 1
            ;;
    esac
}

publish_grpc_artifact() {
    local group_id="$1"
    local artifact_id="$2"
    local artifact_path="$SCHEMA_DIR/$3"
    local status

    create_group "$group_id"

    status="$(
        jq -n \
            --arg artifactId "$artifact_id" \
            --rawfile content "$artifact_path" \
            '{
                artifactId: $artifactId,
                artifactType: "PROTOBUF",
                firstVersion: {
                    content: {
                        content: $content,
                        contentType: "text/plain"
                    }
                }
            }' \
            | curl -sS -o /dev/null -w "%{http_code}" \
                -X POST "$REGISTRY_API/groups/$group_id/artifacts?ifExists=FIND_OR_CREATE_VERSION&canonical=true" \
                -H "Content-Type: application/json" \
                --data-binary @-
    )"

    case "$status" in
        200)
            echo "[SchemaRegistry]: applied - $group_id/$artifact_id"
            ;;
        *)
            echo "Failed to apply $group_id/$artifact_id: HTTP $status" >&2
            exit 1
            ;;
    esac
}

publish_kafka_subject() {
    local subject="$1"
    local artifact_path="$SCHEMA_DIR/$2"
    local status

    status="$(
        jq -n \
            --rawfile content "$artifact_path" \
            '{ schema: $content, schemaType: "JSON" }' \
            | curl -sS -o /dev/null -w "%{http_code}" \
                -X POST "$REGISTRY_CCOMPAT/subjects/$subject/versions" \
                -H "Content-Type: application/vnd.schemaregistry.v1+json" \
                --data-binary @-
    )"

    case "$status" in
        200)
            echo "[SchemaRegistry]: applied - $subject"
            ;;
        409)
            echo "Incompatible schema for subject $subject" >&2
            exit 1
            ;;
        *)
            echo "Failed to apply $subject: HTTP $status" >&2
            exit 1
            ;;
    esac
}

while IFS=$'\t' read -r group_id artifact_id protocol path; do
    if [ "$protocol" = "kafka" ]; then
        publish_kafka_subject "$artifact_id" "$path"
    else
        publish_grpc_artifact "$group_id" "$artifact_id" "$path"
    fi
done < <(jq -r '.artifacts[] | [.groupId, .artifactId, .protocol, .path] | @tsv' "$CATALOG_FILE")
