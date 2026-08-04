# Repository Instructions

Don't bullshit me.

## Project

D&D Portal Wiki is a SvelteKit, Svelte 5, TypeScript, and SCSS static website.

The live site is hosted on GitHub Pages at:

```text
https://dnd-portal.com/
```

## Required Commands

Use pnpm, not npm:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

## Static Hosting Rules

These settings are intentional:

- Use `@sveltejs/adapter-static`.
- Keep `src/routes/+layout.ts` with `prerender = true`.
- Keep `src/routes/+layout.ts` with `trailingSlash = 'always'`.
- Do not add a repository base path such as `/dnd-wiki`.
- Keep GitHub Pages deployment through `actions/upload-pages-artifact` and `actions/deploy-pages`.

Only change those settings after confirming that hosting has moved away from GitHub Pages to a platform that supports a Node.js server.

## Data and Routing Rules

- Prefer central data files under `src/lib/typescript/data/`.
- Use central data paths for internal links.
- Do not hard-code internal hrefs when a data path exists.
- Do not create plain `<a>` elements for internal Wiki links when the existing Link or InlineContent components can be used.
- Do not duplicate titles, URLs, tags, image metadata, or route metadata.
- Do not invent content, routes, source claims, or fallback wording when data is missing.

## Svelte and Accessibility Rules

- Use semantic HTML.
- Add `id` or `name` attributes to form fields.
- Use SvelteKit `pushState` and `replaceState` from `$app/navigation`; do not call browser history APIs directly.
- Preserve keyboard navigation and visible focus states.

## Styling Rules

- Keep SCSS organized by component or page area.
- Do not put large unrelated styling blocks back into one monolithic file.
- Match existing visual hierarchy, spacing, cards, tables, filters, and page-header behavior.

## Content Rules

- Keep legal, privacy, cookie, contribution, and content-removal pages consistent with the public site.
- Do not add `LICENSE.md` unless the owner has chosen what applies to source code, written content, data, images, icons, and homebrew material.
- When adding D&D rules or class content, state gaps honestly instead of filling them with vague placeholder text.
