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
<summary><strong>Schema Registry</strong></summary>

The catalog is applied through two APIs of the same Apicurio Registry.

Kafka artifacts are published through the Confluent compatibility API, because runtime clients
resolve schemas by subject name and that namespace is the registry default group:

| API                 | Subject shape   |
|:--------------------|:----------------|
| `/apis/ccompat/v7`  | `<topic>-value` |

gRPC artifacts use Protocol Buffers and the native API, since nothing resolves them at runtime:

| Group ID        | Artifact ID shape |
|:----------------|:------------------|
| `monadiam.grpc` | `<service>`       |

The `groupId` field in the catalog applies to native API artifacts only.

Ordinary consumers use bounded inline retries and publish terminal failures to shared dead-letter topics.
Only dispatch uses delayed retry: `message-dispatch-retry-notification-service-value`.
Realm bootstrap, membership join and ownership transfer requests and outcomes share `realm-value`.
The separate membership topic/schema is removed; all realm workflow payloads carry `realm` for partition routing.
Dead-letter topics have no automatic replay consumers.

Repeated runs are idempotent: the compatibility API returns the existing id for identical content, and native artifacts are created with `ifExists=FIND_OR_CREATE_VERSION`.

Artifact paths in `catalog.json` are resolved against `src`. Override with `SCHEMA_DIR` if needed.

</details>

----

<details>
<summary><strong>Environment</strong></summary>

Create local variables from the example file:

```bash
make env
```

| Variable                       | Example                 | Purpose                          |
|:-------------------------------|:------------------------|:---------------------------------|
| `SCHEMA_REGISTRY_URL`          | `http://localhost:8081` | Apicurio Registry base URL       |
| `SCHEMA_REGISTRY_API_PATH`     | `/apis/registry/v3`     | Apicurio native API path         |
| `SCHEMA_REGISTRY_CCOMPAT_PATH` | `/apis/ccompat/v7`      | Confluent compatibility API path |

</details>

----

<details>
<summary><strong>Commands</strong></summary>

| Makefile                | Description                                                  |
|:------------------------|:-------------------------------------------------------------|
| `make build`            | Compile the package into `dist`.                             |
| `make lint`             | Run ESLint.                                                  |
| `make lint-fix`         | Fix only Prettier violations and print changed file paths.   |
| `make tsc`              | Check TypeScript with tsc --noEmit.                          |
| `make knip`             | Run Knip.                                                    |
| `make secrets-check`    | Run the hook secret scan (repository history).               |
| `make lsp`              | Start the local TypeScript MCP server over stdio.            |
| `make graphify`         | Create or update the local code graph and Markdown report.   |
| `make graphify-rebuild` | Rescan all code files and regenerate the report.             |
| `make graphify-html`    | Update the graph and report, then export HTML visualization. |
| `make env`              | Create `.env` from `.env.example`.                           |
| `make check`            | Validate local catalog and referenced artifacts.             |
| `make apply`            | Publish catalog artifacts to Schema Registry.                |
| `make verify`           | Check catalog artifacts for compatibility.                   |

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

1. Update `version` field in `package.json`.
2. Commit changes:
```bash
git add .
git commit -m "feat: add new message templates"
```
3. Create tag and push:
```sh
git tag v2.0.0
git push origin main --tags
```

Schema changes and TypeScript changes share one version, so bump it for schema edits as well.

</details>

----
