#!/usr/bin/env bash

registry_initialize() {
    if [ -f "$ROOT_DIR/.env" ]; then
        set -a
        . "$ROOT_DIR/.env"
        set +a
    fi

    CATALOG_FILE="$ROOT_DIR/catalog.json"
    SCHEMA_DIR="$ROOT_DIR/src"

    : "${SCHEMA_REGISTRY_URL:?SCHEMA_REGISTRY_URL is required}"
    : "${SCHEMA_REGISTRY_API_PATH:?SCHEMA_REGISTRY_API_PATH is required}"
    : "${SCHEMA_REGISTRY_CCOMPAT_PATH:?SCHEMA_REGISTRY_CCOMPAT_PATH is required}"
    : "${SCHEMA_REGISTRY_CONNECT_TIMEOUT_SECONDS:?SCHEMA_REGISTRY_CONNECT_TIMEOUT_SECONDS is required}"
    : "${SCHEMA_REGISTRY_REQUEST_TIMEOUT_SECONDS:?SCHEMA_REGISTRY_REQUEST_TIMEOUT_SECONDS is required}"

    REGISTRY_URL="$SCHEMA_REGISTRY_URL"
    if [ "$#" -gt 0 ]; then
        REGISTRY_URL="$1"
    fi

    REGISTRY_CONNECT_TIMEOUT="$SCHEMA_REGISTRY_CONNECT_TIMEOUT_SECONDS"
    REGISTRY_REQUEST_TIMEOUT="$SCHEMA_REGISTRY_REQUEST_TIMEOUT_SECONDS"

    local timeout
    for timeout in "$REGISTRY_CONNECT_TIMEOUT" "$REGISTRY_REQUEST_TIMEOUT"; do
        if [[ ! "$timeout" =~ ^[1-9][0-9]*$ ]]; then
            echo "Schema Registry timeouts must be positive integer seconds: $timeout" >&2
            exit 1
        fi
    done

    local program
    for program in curl jq; do
        command -v "$program" >/dev/null 2>&1 || {
            echo "$program is required" >&2
            exit 1
        }
    done

    REGISTRY_API="${REGISTRY_URL%/}${SCHEMA_REGISTRY_API_PATH}"
    REGISTRY_CCOMPAT="${REGISTRY_URL%/}${SCHEMA_REGISTRY_CCOMPAT_PATH}"

    "$ROOT_DIR/scripts/check.sh" >/dev/null

    registry_request GET "$REGISTRY_API/system/info" application/json
    if [ "$REGISTRY_STATUS" != 200 ] || ! jq -e '.version | type == "string"' <<< "$REGISTRY_BODY" >/dev/null; then
        registry_fail "Apicurio Registry is unavailable or its API path is incorrect"
    fi
}

registry_request() {
    local method="$1" url="$2" content_type="$3"
    local response result
    local arguments=(
        --silent --show-error
        --connect-timeout "$REGISTRY_CONNECT_TIMEOUT"
        --max-time "$REGISTRY_REQUEST_TIMEOUT"
        --request "$method"
        --write-out $'\n%{http_code}'
    )

    if [ "$method" = POST ]; then
        arguments+=(--header "Content-Type: $content_type" --data-binary @-)
    fi

    if response="$(curl "${arguments[@]}" "$url")"; then
        REGISTRY_STATUS="${response##*$'\n'}"
        REGISTRY_BODY="${response%$'\n'*}"
    else
        result=$?
        printf 'Registry request failed: %s %s; curl exit %s (connect timeout %ss, request timeout %ss)\n' \
            "$method" "$url" "$result" "$REGISTRY_CONNECT_TIMEOUT" "$REGISTRY_REQUEST_TIMEOUT" >&2
        exit "$result"
    fi
}

registry_fail() {
    printf '%s: HTTP %s\n%s\n' "$1" "$REGISTRY_STATUS" "${REGISTRY_BODY:0:4096}" >&2
    exit 1
}
