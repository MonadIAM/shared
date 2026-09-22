.PHONY: build lint lint-fix tsc knip secrets-check lsp env check apply verify graphify graphify-rebuild graphify-html

GRAPHIFY ?= graphify

# Development
build:
	pnpm run build
lint:
	pnpm run lint
lint-fix:
	@pnpm --silent run lint:fix
tsc:
	pnpm run tsc
knip:
	pnpm run knip
secrets-check:
	pnpm run secrets:check
lsp:
	@pnpm --silent run lsp

# Contracts
env:
	[ -f .env.example ] && cp -f .env.example .env || echo '.env.example not found'
check:
	pnpm run check
apply:
	pnpm run apply
verify:
	pnpm run verify

# Local code graph
graphify:
	$(GRAPHIFY) extract . --code-only
	$(GRAPHIFY) cluster-only . --no-viz --no-label

graphify-rebuild:
	$(GRAPHIFY) extract . --code-only --force
	$(GRAPHIFY) cluster-only . --no-viz --no-label

graphify-html: graphify
	$(GRAPHIFY) export html
