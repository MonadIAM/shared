# @monadiam/shared

Cross-service shared definitions that eliminate manual synchronization between MonadIAM services.

----

<details>
<summary><strong>Local Code Graph (Graphify)</strong></summary>

Install once with [uv](https://docs.astral.sh/uv/), then open a new terminal:

```sh
uv tool install graphifyy==0.9.65
uv tool update-shell
```

Run `make graphify` from the repository root to create or update the local code
graph and report. No API key is required. Outputs in `graphify-out/` are ignored
by Git. Agent guidance: [AGENTS.md](AGENTS.md).

</details>

----

<details>
<summary><strong>Local TypeScript Navigation (LSP-MCP)</strong></summary>

[lsmcp](https://github.com/mizchi/lsmcp) and TypeScript Language Server are pinned
dev dependencies. Install with `pnpm install` using the Node version from
`package.json`. Run `make lsp` from the repository root to start the stdio MCP
server; an MCP client must connect to it to issue queries.

For an MCP client, use command `node`, arguments
`["node_modules/@mizchi/lsmcp/dist/lsmcp.js", "--config", ".lsmcp/config.json"]`,
and set its working directory to this repository. Desktop clients may need an
absolute Node executable path. Configuration: [.lsmcp/config.json](.lsmcp/config.json).
Local indexes and caches are ignored by Git. Agent guidance: [AGENTS.md](AGENTS.md).

TypeScript navigation covers local declarations in `src`. Protobuf and Kafka
JSON schemas are checked separately with `make check`.

</details>

----

<details>
<summary><strong>Contracts</strong></summary>

The package keeps TypeScript contracts and the schema artifacts registered in the Schema Registry:

- TypeScript service contracts are written manually in `src/types.ts`.
- gRPC protobuf files in `src/grpc` are used by NestJS gRPC transport.
- Kafka JSON Schemas in `src/kafka` are registered from `catalog.json`.
- The build does not generate TypeScript types from `.proto` files.

Consumers should resolve gRPC protobuf files through package subpaths instead of importing path constants:

```ts
const protoPath = require.resolve("@monadiam/shared/grpc/access_control.proto");
```

Registry publication is performed by the scripts in this repository, not during service startup.

</details>

----

<details>
<summary><strong>Database seed datasets</strong></summary>

Seed datasets are compiled and shipped with this package, grouped by service:

```ts
import { dataset, bootstrap } from "@monadiam/shared/datasets/access-control";

dataset.Roles.redis;
bootstrap.ADMIN_PERMISSION_CODES;
```

Individual modules keep their original names and named exports, for example
`@monadiam/shared/datasets/identity/interface-client.dataset`.

Database connections, migrations, seed execution order, and Redis Lua scripts
remain in the consuming services. Import datasets through their subpaths; the
package root exports only common definitions and does not load seed data.

</details>

----

<details>
<summary><strong>Schema Registry</strong></summary>

Source: [catalog.json](catalog.json); artifact paths are relative to `src/`.

| Protocol | Format   | API                 | Group            | Artifact        |
| :------- | :------- | :------------------ | :--------------- | :-------------- |
| Kafka    | JSON     | `/apis/ccompat/v7`  | `default`        | `<topic>-value` |
| gRPC     | Protobuf | `/apis/registry/v3` | `monadiam.grpc`  | `<service>`     |

Kafka clients load schemas from Apicurio. gRPC loads `.proto` from `@monadiam/shared`;
registry publication stores the contract. Catalog `groupId` applies only to gRPC.

| Script / image                       | Responsibility                                        |
| :----------------------------------- | :---------------------------------------------------- |
| [check.sh](scripts/check.sh)         | Check catalog, files, JSON syntax and proto3 headers  |
| [verify.sh](scripts/verify.sh)       | Check compatibility; create no groups or artifacts    |
| [apply.sh](scripts/apply.sh)         | Publish schemas; identical content reuses its version |
| [registry.sh](scripts/registry.sh)   | Configuration, HTTP timeouts and error details        |
| [Dockerfile](Dockerfile)             | Catalog + scripts; Bash/curl/jq; UID/GID `65532`      |

```bash
# Local: configure .env first (see Environment).
make check
make verify
make apply

# Image: default command is scripts/apply.sh.
make image IMAGE=monadiam/shared-schemas:local
```

In containers, provide `SCHEMA_REGISTRY_URL`; select `scripts/verify.sh` or
`scripts/apply.sh`. Read-only filesystem is supported. Planned stand order:
`Apicurio Ready -> Job (verify -> apply) -> services`.

| Execution rule  | Behavior                                                          |
| :-------------- | :---------------------------------------------------------------- |
| New gRPC group  | Local check only; full server validity check on publication       |
| Partial failure | Previous writes remain; rerun after correcting the error          |
| HTTP failure    | Nonzero exit, status and response body; no automatic retries      |

</details>

----

<details>
<summary><strong>Container package (GHCR)</strong></summary>

Image: `ghcr.io/monadiam/shared-schemas` (`linux/amd64`).
Workflows: [CI](.github/workflows/ci.yml), [publish](.github/workflows/publish.yml), [release](.github/workflows/release.yml).
Publication and retention: [packages.sh](.github/scripts/packages.sh).

| Event / setting    | Behavior                                                       |
| :----------------- | :------------------------------------------------------------- |
| PR / merge queue   | Checks and image build; no publication                         |
| Merge into main    | Build and publish image as `sha-<full commit SHA>`             |
| Git tag `vX.Y.Z`   | Require `package.json.version = X.Y.Z`; add image tag `X.Y.Z`  |
| Release image      | Reuse published SHA digest; no rebuild or tag overwrite        |
| Stand              | Pin release as `<image>:<version>@sha256:<digest>`             |
| Retention          | Keep last 10 SHA builds and current commit                     |
| Protected images   | Keep releases, custom tags and untagged manifests              |
| Authentication     | CI uses `GITHUB_TOKEN`; public pulls require no credentials    |

</details>

----

<details>
<summary><strong>Environment</strong></summary>

Create local variables from the example file:

```bash
make env
```

| Variable                                  | Example                   | Purpose                                |
| :---------------------------------------- | :------------------------ | :------------------------------------- |
| `SCHEMA_REGISTRY_URL`                     | `http://localhost:8081`   | Apicurio Registry base URL             |
| `SCHEMA_REGISTRY_API_PATH`                | `/apis/registry/v3`       | Apicurio native API path               |
| `SCHEMA_REGISTRY_CCOMPAT_PATH`            | `/apis/ccompat/v7`        | Confluent compatibility API path       |
| `SCHEMA_REGISTRY_CONNECT_TIMEOUT_SECONDS` | `5`                       | Maximum connection time, seconds       |
| `SCHEMA_REGISTRY_REQUEST_TIMEOUT_SECONDS` | `30`                      | Maximum complete request time, seconds |

All five settings are required. Local scripts read `.env`; the image declares API
paths and timeouts through `ENV`, and requires `SCHEMA_REGISTRY_URL` at runtime.
Missing or empty values fail immediately; scripts do not supply fallback values.

</details>

----

<details>
<summary><strong>Commands</strong></summary>

| Makefile                | Description                                                                |
|:------------------------|:---------------------------------------------------------------------------|
| **Development**         |                                                                            |
| `make build`            | Compile the package into `dist`.                                           |
| `make lint`             | Run ESLint.                                                                |
| `make lint-fix`         | Fix only Prettier violations and print changed file paths.                 |
| `make tsc`              | Check TypeScript with tsc --noEmit.                                        |
| `make knip`             | Run Knip.                                                                  |
| `make secrets-check`    | Run the hook secret scan (staged changes).                                 |
| `make lsp`              | Start the local TypeScript MCP server over stdio.                          |
| `make graphify`         | Create or update the local code graph and Markdown report.                 |
| `make graphify-rebuild` | Rescan all code files and regenerate the report.                           |
| `make graphify-html`    | Update the graph and report, then export HTML visualization.               |
| **Schema Registry**     |                                                                            |
| `make env`              | Create `.env` from `.env.example`.                                         |
| `make check`            | Check catalog, artifact files, JSON syntax and proto3 headers; no network. |
| `make verify`           | Check schema compatibility; create no groups or artifacts.                 |
| `make apply`            | Publish schemas to Apicurio; identical content reuses its version.         |
| **Container / GHCR**    |                                                                            |
| `make image`            | Build catalog/scripts image; configurable `IMAGE` and `VCS_REF`.           |
| `make image-publish`    | Publish existing `monadiam/shared-schemas:ci` as `sha-<HEAD>` in GHCR.     |
| `make image-release`    | Assign the package version to the published SHA image; no rebuild.         |
| `make image-cleanup`    | Delete old SHA images according to the GHCR retention policy.              |

GHCR targets run in Actions with `GITHUB_TOKEN`; publish/release also require
`GITHUB_STEP_SUMMARY`, and release requires `GITHUB_REF_NAME`.

</details>

----

<details>
<summary><strong>Installation</strong></summary>

The package is distributed directly from git and is not published to npm. To install in a consuming project:

```bash
pnpm add git+https://github.com/MonadIAM/shared.git#v2.0.0
```
> A version tag after `#` is required. Without it, pnpm will resolve to the latest commit on the default branch.

</details>

----

<details>
<summary><strong>Releasing a new version</strong></summary>

1. Create a branch from current `main`:

   ```bash
   git switch main
   git pull --ff-only origin main
   git switch -c feat/message-templates
   ```

2. Make changes and update `package.json.version` to the next release version.
   Schema and TypeScript changes share this version.

3. Commit and push the branch:

   ```bash
   git add .
   git commit -m "feat: add new message templates"
   git push -u origin feat/message-templates
   ```

4. Open a PR into `main`. Wait for required checks, including **CI passed**, then
   merge. Wait for **Publish schema image** to succeed for the resulting commit:
   it builds and publishes `ghcr.io/monadiam/shared-schemas:sha-<commit SHA>`.

5. Update local `main`. Its latest commit should be your published release commit:

   ```bash
   git switch main
   git pull --ff-only origin main
   ```

6. Create and push the tag matching `package.json.version` (example: `2.0.20`):

   ```bash
   git tag v2.0.20
   git push origin v2.0.20
   ```

7. Wait for **Release schema image**. It verifies `vX.Y.Z` against
   `package.json.version` and adds image tag `X.Y.Z` to the published SHA image
   without rebuilding. Use the digest from the workflow summary in stand.

</details>

----
