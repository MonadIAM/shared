# @monadiam/shared

Cross-service shared definitions that eliminate manual synchronization between MonadIAM services.

----

<details>
<summary><strong>Contracts</strong></summary>

The package keeps TypeScript contracts and Protocol Buffer schemas as separate sources:

- TypeScript service contracts are written manually in `src/types.d.ts`.
- Kafka protobuf files in `src/proto/kafka` are Schema Registry artifacts.
- gRPC protobuf files in `src/proto/grpc` are used by NestJS gRPC transport and Schema Registry.
- The build does not generate TypeScript types from `.proto` files.

The build only copies `src/proto` into `dist/proto`, so published packages contain the schema files required by services and the registry preload script.

Consumers should resolve protobuf files through package subpaths instead of importing path constants:

```ts
const protoPath = require.resolve("@monadiam/shared/proto/grpc/access_control.proto");
```

</details>

----

<details>
<summary><strong>Installation</strong></summary>

The package is distributed directly from git and is not published to npm. To install in a consuming project:

```bash
pnpm add git+https://github.com/MonadIAM/shared.git#v1.0.0
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
git tag v1.1.0
git push origin main --tags
```

</details>

----
