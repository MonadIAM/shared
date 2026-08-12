import type { KnipConfig } from "knip";

const config: KnipConfig = {
    ignoreExportsUsedInFile: true, // reduces noise from re-exports inside index.ts
    project: ["src/**/*.ts"],
    ignore: [],
    ignoreDependencies: [
        // Used only as a protoc plugin binary (proto:generate script), never imported
        "grpc-tools",
        "ts-proto",
    ],
};

export default config;
