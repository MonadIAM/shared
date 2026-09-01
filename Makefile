.PHONY: build lint knip env check apply verify

# Development
build:
	pnpm run build
lint:
	pnpm run lint
knip:
	pnpm run knip

# Contracts
env:
	[ -f .env.example ] && cp -f .env.example .env || echo '.env.example not found'
check:
	./scripts/check.sh
apply:
	./scripts/apply.sh
verify:
	./scripts/verify.sh
