# Project Context

- Repository root: `C:/Users/toonv/Development/dnd-wiki/site`.
- Git revision: `60a73d6af599c4c97b58cd3dbd3617733b908761`.
- Pre-audit git status: 

```text
M docs/architecture-audit/README.md
 M docs/architecture-audit/components.md
 M docs/architecture-audit/data-and-config.md
 M docs/architecture-audit/dependency-map.md
 M docs/architecture-audit/functions-and-utilities.md
 M docs/architecture-audit/inventory.json
 M docs/architecture-audit/routes-and-pages.md
 M docs/architecture-audit/sources-of-truth.md
 D src/lib/config/parties-helper.ts
 M src/lib/pages/AccentDetailsCard/AccentDetailsCard-Types.ts
 M src/lib/pages/AccentDetailsCard/AccentDetailsCard.scss
 M src/lib/pages/AccentDetailsCard/AccentDetailsCard.svelte
 M src/lib/pages/StepList/StepList-Types.ts
 M src/lib/pages/StepList/StepList.scss
 M src/lib/pages/StepList/StepList.svelte
 D src/lib/wiki/classes/classes.ts
 D src/lib/wiki/classes/sub_classes-cleric.ts
 D src/lib/wiki/classes/sub_classes-rogues.ts
 D src/lib/wiki/domain.ts
 D src/lib/wiki/icon-ids.ts
 D src/lib/wiki/icons.ts
 D src/lib/wiki/navigation.ts
 D src/lib/wiki/registry.ts
 D src/lib/wiki/search-index.ts
 D src/lib/wiki/search-tags.ts
 D src/lib/wiki/species/species-elfs.ts
 D src/lib/wiki/species/species-humans.ts
 D src/lib/wiki/species/species.ts
 D src/lib/wiki/static-pages.ts
 M src/routes/page.data.ts
?? docs/architecture-audit/.summary.json
?? docs/architecture-audit/duplicates-and-conflicts.md
?? docs/architecture-audit/files/
?? docs/architecture-audit/import-problems.md
?? docs/architecture-audit/preliminary-findings.md
?? docs/architecture-audit/project-context.md
?? docs/architecture-audit/styles-and-assets.md
?? docs/architecture-audit/validation.md
?? src/lib/config/pages.ts
?? src/lib/helpers/parties-helper.ts
```
- Package manager: npm, per AGENTS.md and package lock.
- Framework: SvelteKit ^2.63.0, Svelte ^5.56.1, Vite ^8.0.16, TypeScript ^6.0.3.
- Svelte syntax style: Svelte 5 runes are present (`$props`, `$state`, `$derived`, `$effect`) with snippet children in newer components.
- TypeScript: strict mode, bundler module resolution in `tsconfig.json`; test config emits compiled JS into `.svelte-kit/wiki-search-tests`.
- Alias: `$lib` resolves to `src/lib`; no additional aliases were found in SvelteKit config.
- SCSS: `vitePreprocess()` enables SCSS in Svelte files; shared partials live under `src/lib/styles` and are imported with `@use`.
- Tests: `npm test` runs `tsc -p tsconfig.test.json` and `node scripts/test-wiki-search.mjs`.
- Build/deploy: `@sveltejs/adapter-static` writes to `build`; GitHub Actions uses Node 24, `BASE_PATH: /${{ github.event.repository.name }}`, `npm ci`, check, lint-if-present, build, verify pages, then deploys Pages artifact.
- Base path: `svelte.config.js` derives `kit.paths.base` from `BASE_PATH` and sets `paths.relative: true`; root-absolute asset paths must pass through path helpers or be documented as a risk.
- Existing architecture documentation was already present in `docs/architecture-audit/` before this run and has been superseded by this audit output.
- Important conflict: AGENTS.md describes `$lib/wiki/*` and `$lib/config/campaigns.ts` as authoritative, but those files are deleted or missing in the current working tree. This audit records current filesystem reality.