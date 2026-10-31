# Agent instructions

## Changes and validation

- Read the full [Makefile](Makefile) before choosing commands. Prefer its targets;
  command implementations live in `package.json`. See README.md for usage.
- After changes, run `make tsc` and `make lint` before reporting completion.
  Lint checks the whole project. Report failed or blocked checks explicitly.
- `make lint-fix` (`pnpm run lint:fix`) is the only permitted automatic fix:
  it fixes Prettier violations and prints changed paths. Fix all other ESLint
  errors manually. Do not use full-config `eslint --fix` or loop automatic fixes.
- This package has no `utest`/`itest` scripts or targets. If tests change,
  report the missing runner rather than inventing commands.
- Other checks are manual tools for the user unless explicitly requested.

## Dependency navigation

- This repository is the source of `@monadiam/shared`; navigate local declarations.
  Consumers may use a different installed version. Inspect protobuf and Kafka JSON
  schemas directly; TypeScript declarations are in `src/**/*.ts`.
