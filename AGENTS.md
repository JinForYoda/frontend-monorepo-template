# LLM Agent Guide

Use this repository as a clean starter for frontend monorepos built on Nx and Bun.

## Repository purpose

- This repo is a template, not a product codebase.
- Prefer generic examples and reusable building blocks over domain-specific implementations.
- Keep the workspace minimal unless the user explicitly asks for more apps or libraries.

## Stack expectations

- Nx is the single command entry point for workspace tasks.
- Bun is the package manager.
- The baseline stack includes React, Vite, Tailwind CSS, Storybook, Vitest, Zod and semantic-release.
- Do not add Docker, docker-compose files or Makefiles unless the user asks for them.

## Workspace map

- `apps/web`: main React + Vite starter app
- `libs/ui`: shared UI primitives and Storybook stories
- `libs/shared`: shared schemas and cross-project utilities
- `.agents/react-best-practices`: copied guidance for React and Next.js implementation quality

## Working rules

- Prefer generating new workspace pieces with Nx when practical.
- Keep examples framework-focused and product-agnostic.
- Favor shared libraries for reusable code instead of duplicating helpers across apps.
- When changing dependency versions, keep the template on the latest stable releases that still work together.
- If you add another app or library, update this file and the root README.
