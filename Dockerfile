FROM alpine:3.23

ARG VCS_REF
RUN : "${VCS_REF:?VCS_REF build argument is required}" \
    && apk add --no-cache bash ca-certificates curl jq

LABEL org.opencontainers.image.source="https://github.com/MonadIAM/shared" \
    org.opencontainers.image.revision="${VCS_REF}" \
    org.opencontainers.image.description="MonadIAM schema catalog publisher"

WORKDIR /opt/shared
ENV SCHEMA_REGISTRY_API_PATH=/apis/registry/v3 \
    SCHEMA_REGISTRY_CCOMPAT_PATH=/apis/ccompat/v7 \
    SCHEMA_REGISTRY_CONNECT_TIMEOUT_SECONDS=5 \
    SCHEMA_REGISTRY_REQUEST_TIMEOUT_SECONDS=30
COPY catalog.json catalog.schema.json ./
COPY src/grpc ./src/grpc
COPY src/kafka ./src/kafka
COPY scripts/check.sh scripts/registry.sh scripts/verify.sh scripts/apply.sh ./scripts/
RUN chmod -R a+rX /opt/shared

USER 65532:65532
RUN ./scripts/check.sh
ENTRYPOINT ["/bin/bash"]
CMD ["scripts/apply.sh"]
