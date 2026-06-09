# Repository Guidelines

## Description

- This repository is a website for the MNPS Alumni Foundation, a non-profit organization to connect alumni of the Metropoltian Nashville Public Schools (MNPS) district.

## Project Structure & Module Organization

- `src/pages/` holds route entry points (`.astro` files map to URLs by filename).
- `src/components/` contains reusable UI pieces, organized by feature (for example, `src/components/home/hero/`).
- `src/layouts/` defines shared page wrappers such as `layout.astro`.
- `src/styles/` stores global styles (`global.css`) and font definitions (`fonts.css`).
- `public/` is for static assets served as-is (images, icons, etc.).

## Build, Test, and Development Commands

- `pnpm install` installs dependencies.
- `pnpm dev` starts the Astro dev server (default: `http://localhost:4321`).
- `pnpm build` builds the production site into `dist/`.
- `pnpm preview` serves the built site locally for a production-like check.
- `pnpm lint` runs ESLint (with Prettier integration) over the repo.
- `pnpm lint:fix` auto-fixes lint and formatting issues when possible.
- `pnpm knip` checks for unused files/exports and dead code paths.

## Coding Style & Naming Conventions

- Component and file names use kebab-case (for example, `home-page.astro`, `footer-link.astro`).
- TypeScript rules are strict (explicit return types, no floating promises). Keep types explicit and consistent.

## Making Changes

- Before returning changes to the user, run `pnpm lint:fix` to auto-fix lint and formatting issues when possible.

## Testing Guidelines

- There are no tests currently configured for this repository.

## Agent-Specific Instructions

- This repository uses Astro with Tailwind CSS; prefer component composition over inline duplication.
- Keep edits localized to feature folders (for example, `src/components/home/`).
