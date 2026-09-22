import type { KnipConfig } from "knip";

const config: KnipConfig = {
    ignoreExportsUsedInFile: true, // reduces noise from re-exports inside index.ts
    ignoreBinaries: ["gitleaks"], // Installed on the host, not through pnpm.
    ignoreDependencies: ["typescript-language-server"],
    project: ["src/**/*.ts"],
    ignore: [],
};

export default config;
