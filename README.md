# frontend-monorepo-template

Minimal template repository for a frontend monorepo powered by Nx and Bun.

## What you get

- `apps/web`: React + Vite starter app
- `libs/ui`: reusable UI primitives with Storybook
- `libs/shared`: shared schemas and cross-project utilities
- `AGENTS.md`: repository guide for LLM agents
- `.agents/react-best-practices`: copied React/Next quality skill

## Stack

- Nx
- React
- Vite
- Tailwind CSS
- Storybook
- Vitest
- Zod
- semantic-release

## Workspace layout

```text
apps/
  web/          React + Vite application
libs/
  shared/       Shared schemas and cross-project utilities
  ui/           Reusable React UI components with Storybook
.agents/
  react-best-practices/
```

## Common commands

```bash
bun install
bunx nx serve web
bunx nx build web
bunx nx test web
bunx nx test ui
bunx nx test shared
bunx nx storybook ui
bunx nx build-storybook ui
bunx nx graph
```

## Release skeleton

`semantic-release` is prewired through `release.config.mjs` and can be adapted later when CI and publishing targets are defined.

## Publishing notes

- This repository intentionally does not include Docker, docker-compose files or Makefiles.
- The release setup is only a skeleton until CI secrets and publishing targets are configured.
- Before publishing a derived repository, update the package scope, repository metadata and release destinations if needed.
