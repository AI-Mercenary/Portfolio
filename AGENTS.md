# Portfolio

Sampath Varma Datla's portfolio — Next.js (App Router) + React 19 + Tailwind CSS v4 + Framer Motion.

## Development Server

Run `npm run dev` to start the Next.js dev server on port 8443 (Turbopack).

## Project Structure

- `app/layout.tsx` - Root layout; sets metadata/favicon and imports `app/globals.css`
- `app/page.tsx` - The single page ("use client"); composes every section in scroll order
- `app/globals.css` - Tailwind v4 import, design tokens (`@theme inline`), fonts, custom cursor/glow/web-pattern utility classes
- `src/data.ts` - All real content: profile, education, experience, achievements, projects, skills, nav links, socials
- `src/brandIcons.ts` - Inline SVG path data for tech/brand icons (simple-icons, CC0)
- `src/LoadingScreen.tsx` - Intro loading animation shown before the page fades in
- `src/components/` - One file per section (`Navbar`, `Hero`, `Education`, `Experience`, `Resume`, `Achievements`, `Projects`, `Skills`, `Footer`), plus shared primitives in `ui.tsx` (FadeIn, SectionLabel, RedBtn, Chip, ProgressRing, TimelineNode, AchCard, ProjectCard, SkillCard) and `icons.tsx` (BrandIcon, social icons, SpiderLogo)
- `public/` - Real assets: `Sampath.jpg`, `resume.pdf`, `exp/*` (education/experience/project images), `icons/*` (generic spider glyph + web-pattern SVG — see note below)
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Styling

Tailwind CSS v4 via the `@tailwindcss/postcss` PostCSS plugin (`postcss.config.mjs`). `app/globals.css` imports Tailwind with `@import 'tailwindcss';` and defines the red/black/white theme as `@theme inline` tokens. No `tailwind.config.js` needed.

## Content editing

All real content (name, bio, education, experience, projects, skills, achievements, socials) lives in `src/data.ts` — edit there rather than hardcoding strings in components.

## IP note on `public/icons/`

Only generic, non-trademarked spider/web SVGs are used (`spider-glyph.svg`, `web-pattern.svg`). Do NOT add Marvel-owned Spider-Man/Avengers character logos or likenesses (mask icons, superhero silhouettes, the Marvel "A" logo, etc.) — those are trademarked and unsafe to publish on a public site even when sourced from stock-icon sites, since those licenses cover the file, not the character depicted.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings.
- Ensure JSX tags are closed and braces are balanced.
- Export components as named exports (except `app/page.tsx` and `app/layout.tsx`, which use Next.js's required default export).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
