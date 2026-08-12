#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

mkdir -p src/generated

grpc_tools_node_protoc \
    --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_out=src/generated \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=forceLong=string \
    --ts_proto_opt=useOptionals=messages \
    --ts_proto_opt=outputEncodeMethods=false \
    --ts_proto_opt=outputJsonMethods=false \
    --ts_proto_opt=outputClientImpl=false \
    --ts_proto_opt=stringEnums=true \
    --ts_proto_opt=unrecognizedEnum=false \
    -I src/proto \
    src/proto/access_control.proto
