#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
CATALOG_FILE="${CATALOG_FILE:-"$ROOT_DIR/catalog.json"}"
SCHEMA_DIR="${SCHEMA_DIR:-"$ROOT_DIR/src"}"

command -v jq >/dev/null 2>&1 || {
    echo "jq is required" >&2
    exit 1
}

jq empty "$CATALOG_FILE"
jq -e '
    .artifacts
    | length > 0
    and ((map(.groupId + "/" + .artifactId) | unique | length) == length)
' "$CATALOG_FILE" >/dev/null

while IFS=$'\t' read -r schema_type path; do
    artifact_path="$SCHEMA_DIR/$path"

    test -f "$artifact_path" || {
        echo "Missing artifact file: $path" >&2
        exit 1
    }

    case "$schema_type" in
        JSON)
            jq empty "$artifact_path"
            ;;
        PROTOBUF)
            grep -Eq '^syntax = "proto3";' "$artifact_path" || {
                echo "Invalid protobuf syntax header: $path" >&2
                exit 1
            }
            ;;
        *)
            echo "Unsupported schema type: $schema_type" >&2
            exit 1
            ;;
    esac
done < <(jq -r '.artifacts[] | [.schemaType, .path] | @tsv' "$CATALOG_FILE")

echo "Contract catalog is valid."
