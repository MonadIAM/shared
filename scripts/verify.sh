#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ROOT_DIR/scripts/registry.sh"
registry_initialize "$@"

verify_grpc_artifact() {
    local group_id="$1"
    local artifact_id="$2"
    local artifact_path="$SCHEMA_DIR/$3"
    local payload

    registry_request GET "$REGISTRY_API/groups/$group_id" application/json
    case "$REGISTRY_STATUS" in
        200) ;;
        404)
            if jq -e '.name == "GroupNotFoundException"' <<< "$REGISTRY_BODY" >/dev/null; then
                echo "[SchemaRegistry]: new group - $group_id/$artifact_id"
                return
            fi

            registry_fail "Failed to find registry group $group_id" ;;
        *)
            registry_fail "Failed to find registry group $group_id" ;;
    esac

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
    registry_request POST "$REGISTRY_API/groups/$group_id/artifacts?ifExists=FIND_OR_CREATE_VERSION&canonical=true&dryRun=true" application/json <<< "$payload"

    case "$REGISTRY_STATUS" in
        200)
            echo "[SchemaRegistry]: verified - $group_id/$artifact_id" ;;
        *)
            registry_fail "Failed to verify $group_id/$artifact_id" ;;
    esac
}

verify_kafka_subject() {
    local subject="$1"
    local artifact_path="$SCHEMA_DIR/$2"
    local payload

    payload="$(
        jq -n \
            --rawfile content "$artifact_path" \
            '{ schema: $content, schemaType: "JSON" }'
    )"
    registry_request POST "$REGISTRY_CCOMPAT/compatibility/subjects/$subject/versions/latest" \
        "application/vnd.schemaregistry.v1+json" <<< "$payload"

    case "$REGISTRY_STATUS" in
        404)
            if jq -e '.error_code == 40401' <<< "$REGISTRY_BODY" >/dev/null; then
                echo "[SchemaRegistry]: new subject - $subject"
            else
                registry_fail "Failed to find subject $subject"
            fi ;;
        200)
            if jq -e '.is_compatible == true' <<< "$REGISTRY_BODY" >/dev/null; then
                echo "[SchemaRegistry]: verified - $subject"
            else
                registry_fail "Incompatible schema for subject $subject"
            fi ;;
        *)
            registry_fail "Failed to verify $subject" ;;
    esac
}

while IFS=$'\t' read -r group_id artifact_id protocol path; do
    if [ "$protocol" = "kafka" ]; then
        verify_kafka_subject "$artifact_id" "$path"
    else
        verify_grpc_artifact "$group_id" "$artifact_id" "$path"
    fi
done < <(jq -r '.artifacts[] | [.groupId, .artifactId, .protocol, .path] | @tsv' "$CATALOG_FILE")
