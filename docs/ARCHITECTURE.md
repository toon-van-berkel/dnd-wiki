# Architecture

D&D Portal Wiki is a static SvelteKit site. Most page content is defined in TypeScript data modules and rendered through reusable Svelte components.

## Main Areas

```text
src/lib/typescript/data/
```

Central source for internal pages, external links, social links, class data, spell data, rules pages, project pages, legal pages, route metadata, images, and tags.

```text
src/lib/typescript/pages/
```

Page-building helpers, current-page resolution, SEO metadata generation, and content types.

```text
src/lib/svelte/components/
```

Reusable Svelte components for links, page headers, content blocks, cards, tables, changelog entries, search, spell browsing, navigation, breadcrumbs, sidebars, and footer UI.

```text
src/lib/scss/
```

Global styling, tokens, layout styling, and component-specific SCSS partials.

```text
src/routes/
```

SvelteKit route entry points. Dynamic routes resolve pages from the central data system where possible.

```text
static/
```

Public static assets copied directly into the production build.

## Content Model

The project prefers structured page data over route-local page markup. A page should normally define:

- `href`
- `title`
- `subTitle`
- `description`
- optional `descriptions.long`
- image metadata
- content sections
- table-of-contents entries
- cards or child navigation where needed

Inline text that contains links should use the existing inline-content model instead of hand-written HTML.

## Links

Internal Wiki links should use central data paths and the existing Link or InlineContent components.

Avoid:

- hard-coded internal hrefs
- duplicated route strings
- plain internal `<a>` elements when a component exists
- invented routes for pages that do not exist

External links are also represented centrally where possible.

## Routing

The site is statically generated. Dynamic routes that need static output must provide prerender entries when SvelteKit cannot infer all pages automatically.

Current examples include:

- spell detail pages
- level-specific spellcasting pages
- central Wiki page routes
- class and subclass routes

## SEO

SEO metadata is generated centrally through `src/lib/typescript/pages/seo.ts`.

The layout emits:

- page title
- meta description
- canonical URL
- robots metadata
- Open Graph metadata
- Twitter card metadata
- icon and Apple touch icon links

Page-specific route data may override SEO values where needed, such as individual spell pages.

## Styling

The SCSS structure should remain component-oriented. Large page-level styles should be split into focused partials rather than being added back into one large file.

## Validation

Use:

```bash
pnpm check
pnpm build
pnpm audit:prelive:crawl
```

The pre-live audit checks central data paths, route shapes, static assets, spell slugs, placeholder markers, and built static output.
