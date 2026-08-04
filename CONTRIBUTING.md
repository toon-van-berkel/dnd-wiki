# Contributing

Thanks for helping improve D&D Portal Wiki. Keep contributions focused, verifiable, and consistent with the existing data-driven structure.

## Before You Start

- Check existing issues and pull requests first.
- Keep changes scoped to one topic when possible.
- Do not add a license file or change legal wording unless the project owner explicitly asks for it.
- Do not add protected publications, copied commercial book text, subscription-only content, or assets without clear permission.
- Use the existing central data system for page links, metadata, tags, and images.

## Local Setup

```bash
pnpm install
pnpm dev
```

## Required Checks

Run these before submitting a pull request:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

If a check cannot be run, state that clearly in the pull request.

## Content Rules

- Prefer central TypeScript data modules under `src/lib/typescript/data/`.
- Use existing page, inline-content, link, card, table, and class-page components.
- Do not hard-code internal hrefs when a central data path exists.
- Do not invent content when source data is missing. Mark the gap clearly instead.
- Keep page-header descriptions useful and complete.
- Keep route, title, image, and link metadata in one source of truth.

## Code Rules

- Keep Svelte components semantic and accessible.
- Give form fields useful `id` and `name` attributes.
- Use SvelteKit navigation helpers from `$app/navigation`; do not call `history.pushState(...)` or `history.replaceState(...)` directly.
- Preserve the static GitHub Pages deployment model unless hosting changes.
- Keep SCSS organized by component or page area.

## Pull Request Expectations

Pull requests should include:

- A short summary of what changed.
- Screenshots for visible UI changes.
- Notes about content sources when content was added or rewritten.
- The commands you ran and their results.
- Any known limitations or follow-up work.

## Legal

By contributing, you agree that your contribution may be used in D&D Portal according to the site contribution terms.

See:

- [Legal Notice](https://dnd-portal.com/legal/)
- [Contribution Terms](https://dnd-portal.com/contribution-terms/)
- [Content Removal](https://dnd-portal.com/content-removal/)
