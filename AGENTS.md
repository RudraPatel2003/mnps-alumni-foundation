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

## Design System & Visual Style

Continue refactoring the site toward a clean, simple, brand-driven aesthetic. New and updated UI should follow these conventions:

- **Brand colors via theme tokens.** Use the Tailwind tokens defined in `src/styles/global.css` — `primary` (`#0079a2`, teal) and `secondary` (`#f1b435`, gold). Reference them through utilities (`text-primary`, `bg-primary`, `text-secondary`, `hover:bg-secondary/80`). Do not hardcode hex values in markup; if a raw value is unavoidable (for example inside a `<style>` block), it must match a brand token.
- **Typography.** `font-serif` (`museo-slab`) for display headings; `font-sans` (`museo-sans`, the default) for body copy. Headings use `text-primary`; body copy uses a muted `text-primary/80` (or `/70`). For display headlines, prefer large sizes with tight leading/tracking, and emphasize a key word with italics plus a gold underline rather than a color swap (gold text fails contrast on white).
- **Layout & spacing.** Wrap sections in `mx-auto max-w-7xl px-6` and give them vertical rhythm with `py-16`. Favor generous whitespace and responsive grids over dense layouts.
- **Shape language.** `rounded-md` for buttons, `rounded-xl` for cards, and arch-style framing for hero imagery (`rounded-t-[5rem] rounded-b-4xl`).
- **Buttons.** Use the shared `src/components/ui/button.astro` component instead of hand-rolling anchor styles. It renders an `<a>` and takes a `variant` prop: `primary` (filled teal, white text) for the main call to action, and `secondary` (white background, teal text) for use on colored/`primary` surfaces such as the pillar cards. Pass-through attributes (`href`, `target`, `rel`, `class`, etc.) are forwarded.
- **Motion.** Keep interfaces static and uncluttered by default. Limit motion to subtle `transition-colors`/hover states unless richer animation is explicitly requested, and gate any non-trivial animation behind `prefers-reduced-motion`.
- **Reuse over duplication.** When a styled pattern appears more than once, extract it into a shared component under `src/components/ui/`.

## Making Changes

- Before returning changes to the user, run `pnpm lint:fix` to auto-fix lint and formatting issues when possible.

## Testing Guidelines

- There are no tests currently configured for this repository.

## Agent-Specific Instructions

- This repository uses Astro with Tailwind CSS; prefer component composition over inline duplication.
- Keep edits localized to feature folders (for example, `src/components/home/`).
