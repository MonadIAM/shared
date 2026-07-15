import type { KnipConfig } from "knip";

const config: KnipConfig = {
    ignoreExportsUsedInFile: true, // reduces noise from re-exports inside index.ts
    project: ["src/**/*.ts"],
    entry: ["src/index.ts"],
    ignore: [
        // Generated from .proto via ts-proto - not hand-authored
        "src/generated/**",
    ],
};

export default config;
