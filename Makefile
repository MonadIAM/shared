.PHONY: build lint lint-fix tsc knip secrets-check lsp env check apply verify image image-publish image-release image-cleanup graphify graphify-rebuild graphify-html

GRAPHIFY ?= graphify
IMAGE ?= monadiam/shared-schemas:local
VCS_REF ?= $(shell git rev-parse HEAD)

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
image:
	docker build --build-arg VCS_REF="$(VCS_REF)" --tag "$(IMAGE)" .

# GHCR (GitHub Actions)
image-publish:
	bash .github/scripts/packages.sh sha
image-release:
	bash .github/scripts/packages.sh release
image-cleanup:
	bash .github/scripts/packages.sh cleanup

# Local code graph
graphify:
	$(GRAPHIFY) extract . --code-only
	$(GRAPHIFY) cluster-only . --no-viz --no-label

graphify-rebuild:
	$(GRAPHIFY) extract . --code-only --force
	$(GRAPHIFY) cluster-only . --no-viz --no-label

graphify-html: graphify
	$(GRAPHIFY) export html
