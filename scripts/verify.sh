#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
CATALOG_FILE="${CATALOG_FILE:-"$ROOT_DIR/catalog.json"}"
SCHEMA_DIR="${SCHEMA_DIR:-"$ROOT_DIR/src"}"
ENV_FILE="${ENV_FILE:-"$ROOT_DIR/.env"}"

if [ -f "$ENV_FILE" ]; then
    set -a
    # shellcheck disable=SC1090
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

verify_grpc_artifact() {
    local group_id="$1"
    local artifact_id="$2"
    local artifact_path="$SCHEMA_DIR/$3"
    local status

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
                -X POST "$REGISTRY_API/groups/$group_id/artifacts?ifExists=FIND_OR_CREATE_VERSION&canonical=true&dryRun=true" \
                -H "Content-Type: application/json" \
                --data-binary @-
    )"

    case "$status" in
        200)
            echo "[SchemaRegistry]: verified - $group_id/$artifact_id"
            ;;
        *)
            echo "Failed to verify $group_id/$artifact_id: HTTP $status" >&2
            exit 1
            ;;
    esac
}

verify_kafka_subject() {
    local subject="$1"
    local artifact_path="$SCHEMA_DIR/$2"
    local response
    local status

    response="$(
        jq -n \
            --rawfile content "$artifact_path" \
            '{ schema: $content, schemaType: "JSON" }' \
            | curl -sS -w "\n%{http_code}" \
                -X POST "$REGISTRY_CCOMPAT/compatibility/subjects/$subject/versions/latest" \
                -H "Content-Type: application/vnd.schemaregistry.v1+json" \
                --data-binary @-
    )"

    status="$(printf '%s' "$response" | tail -n1)"

    case "$status" in
        404)
            echo "[SchemaRegistry]: new subject - $subject"
            ;;
        200)
            if [ "$(printf '%s' "$response" | sed '$d' | jq -r '.is_compatible')" = "true" ]; then
                echo "[SchemaRegistry]: verified - $subject"
            else
                echo "Incompatible schema for subject $subject" >&2
                exit 1
            fi
            ;;
        *)
            echo "Failed to verify $subject: HTTP $status" >&2
            exit 1
            ;;
    esac
}

while IFS=$'\t' read -r group_id artifact_id protocol path; do
    if [ "$protocol" = "kafka" ]; then
        verify_kafka_subject "$artifact_id" "$path"
    else
        verify_grpc_artifact "$group_id" "$artifact_id" "$path"
    fi
done < <(jq -r '.artifacts[] | [.groupId, .artifactId, .protocol, .path] | @tsv' "$CATALOG_FILE")
