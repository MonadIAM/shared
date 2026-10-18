#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ROOT_DIR/scripts/registry.sh"
registry_initialize "$@"

create_group() {
    local group_id="$1"
    local payload

    payload="$(jq -n --arg groupId "$group_id" '{ groupId: $groupId }')"
    registry_request POST "$REGISTRY_API/groups" application/json <<< "$payload"

    case "$REGISTRY_STATUS" in
        200 | 204 | 409) ;;
        *)
            registry_fail "Failed to create registry group $group_id" ;;
    esac
}

publish_grpc_artifact() {
    local group_id="$1"
    local artifact_id="$2"
    local artifact_path="$SCHEMA_DIR/$3"
    local payload

    create_group "$group_id"

    payload="$(
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
            }'
    )"
    registry_request POST "$REGISTRY_API/groups/$group_id/artifacts?ifExists=FIND_OR_CREATE_VERSION&canonical=true" application/json <<< "$payload"

    case "$REGISTRY_STATUS" in
        200)
            echo "[SchemaRegistry]: applied - $group_id/$artifact_id" ;;
        *)
            registry_fail "Failed to apply $group_id/$artifact_id" ;;
    esac
}

publish_kafka_subject() {
    local subject="$1"
    local artifact_path="$SCHEMA_DIR/$2"
    local payload

    payload="$(
        jq -n \
            --rawfile content "$artifact_path" \
            '{ schema: $content, schemaType: "JSON" }'
    )"
    registry_request POST "$REGISTRY_CCOMPAT/subjects/$subject/versions" \
        "application/vnd.schemaregistry.v1+json" <<< "$payload"

    case "$REGISTRY_STATUS" in
        200)
            echo "[SchemaRegistry]: applied - $subject" ;;
        409)
            registry_fail "Incompatible schema for subject $subject" ;;
        *)
            registry_fail "Failed to apply $subject" ;;
    esac
}

while IFS=$'\t' read -r group_id artifact_id protocol path; do
    if [ "$protocol" = "kafka" ]; then
        publish_kafka_subject "$artifact_id" "$path"
    else
        publish_grpc_artifact "$group_id" "$artifact_id" "$path"
    fi
done < <(jq -r '.artifacts[] | [.groupId, .artifactId, .protocol, .path] | @tsv' "$CATALOG_FILE")
