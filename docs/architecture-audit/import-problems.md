# Import Problems

## Missing Or Case-Mismatched Internal Imports

| Importer | Import | Expected | Exists | Impact |
| --- | --- | --- | --- | --- |
| src/lib/components/layout/snippets/Footer.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | Build/check failure likely |
| src/lib/components/layout/snippets/Sidebar.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/lib/components/layout/snippets/helpers/NavTree.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/lib/components/layout/snippets/helpers/NavTree.svelte | $lib/wiki/icons | src/lib/wiki/icons | no | Build/check failure likely |
| src/lib/components/search/SearchFilterGroup.svelte | $lib/styles/mixins | src/lib/styles/mixins | no | Build/check failure likely |
| src/lib/data/ai-images.ts | ../wiki/registry.js | src/lib/wiki/registry.js | no | Build/check failure likely |
| src/lib/page/layout/navigation/snippets/AllowedIn-data.ts | $lib/config/parties-helper | src/lib/config/parties-helper | no | Build/check failure likely |
| src/lib/search/SearchInput.svelte | $lib/lib/assets/icons/util/search.svg | src/lib/lib/assets/icons/util/search.svg | no | Build/check failure likely |
| src/lib/styles/_buttons.scss | mixins | src/lib/styles/mixins | no | Build/check failure likely |
| src/lib/styles/_forms.scss | mixins | src/lib/styles/mixins | no | Build/check failure likely |
| src/lib/utils/wiki-preferences.ts | ../config/campaigns.js | src/lib/config/campaigns.js | no | Build/check failure likely |
| src/routes/+layout.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | Build/check failure likely |
| src/routes/about/About.scss | $lib/styles/mixins | src/lib/styles/mixins | no | Build/check failure likely |
| src/routes/classes/+layout.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | Build/check failure likely |
| src/routes/classes/+page.svelte | $lib/pages/PageSection.svelte | src/lib/pages/PageSection.svelte | no | Build/check failure likely |
| src/routes/classes/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/classes/artificer/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/classes/cleric/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/classes/rogue/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/legal/+page.svelte | $lib/config/site | src/lib/config/site | no | Build/check failure likely |
| src/routes/page.data.ts | $lib/wiki/registry | src/lib/wiki/registry | no | Build/check failure likely |
| src/routes/rules/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/rules/movement/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/species/+layout.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | Build/check failure likely |
| src/routes/species/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |
| src/routes/species/elf/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | Build/check failure likely |

## Imports Ending In .js

| Importer | Import | Expected | Exists | Impact |
| --- | --- | --- | --- | --- |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/config/campaigns.js | .svelte-kit/wiki-search-tests/src/lib/config/campaigns.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/data/availability.js | .svelte-kit/wiki-search-tests/src/lib/data/availability.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/data/ai-images.js | .svelte-kit/wiki-search-tests/src/lib/data/ai-images.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/classes/classes.js | .svelte-kit/wiki-search-tests/src/lib/wiki/classes/classes.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/species/species.js | .svelte-kit/wiki-search-tests/src/lib/wiki/species/species.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/utils/availability-metadata.js | .svelte-kit/wiki-search-tests/src/lib/utils/availability-metadata.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/utils/content-filters.js | .svelte-kit/wiki-search-tests/src/lib/utils/content-filters.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/registry.js | .svelte-kit/wiki-search-tests/src/lib/wiki/registry.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/static-pages.js | .svelte-kit/wiki-search-tests/src/lib/wiki/static-pages.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/icon-ids.js | .svelte-kit/wiki-search-tests/src/lib/wiki/icon-ids.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/search-index.js | .svelte-kit/wiki-search-tests/src/lib/wiki/search-index.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/utils/wiki-search.js | .svelte-kit/wiki-search-tests/src/lib/utils/wiki-search.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/utils/wiki-preferences.js | .svelte-kit/wiki-search-tests/src/lib/utils/wiki-preferences.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | ../.svelte-kit/wiki-search-tests/src/lib/wiki/navigation.js | .svelte-kit/wiki-search-tests/src/lib/wiki/navigation.js | yes | likely intentional TS-to-JS runtime import pattern |
| scripts/test-wiki-search.mjs | \.\/icon-ids\.js | \.\/icon-ids\.js | yes | likely intentional TS-to-JS runtime import pattern |
| src/lib/data/ai-images.ts | ../wiki/registry.js | src/lib/wiki/registry.js | no | missing target in current tree |
| src/lib/utils/wiki-preferences.ts | ../config/campaigns.js | src/lib/config/campaigns.js | no | missing target in current tree |

## `$lib/wiki` Imports

| Importer | Import | Expected | Exists | Impact |
| --- | --- | --- | --- | --- |
| src/lib/components/layout/snippets/Footer.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | deleted registry/wiki module dependency |
| src/lib/components/layout/snippets/Sidebar.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/lib/components/layout/snippets/helpers/NavTree.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/lib/components/layout/snippets/helpers/NavTree.svelte | $lib/wiki/icons | src/lib/wiki/icons | no | deleted registry/wiki module dependency |
| src/lib/data/ai-images.ts | ../wiki/registry.js | src/lib/wiki/registry.js | no | deleted registry/wiki module dependency |
| src/routes/+layout.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | deleted registry/wiki module dependency |
| src/routes/classes/+layout.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | deleted registry/wiki module dependency |
| src/routes/classes/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/classes/artificer/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/classes/cleric/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/classes/rogue/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/page.data.ts | $lib/wiki/registry | src/lib/wiki/registry | no | deleted registry/wiki module dependency |
| src/routes/rules/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/rules/movement/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/species/+layout.svelte | $lib/wiki/registry | src/lib/wiki/registry | no | deleted registry/wiki module dependency |
| src/routes/species/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |
| src/routes/species/elf/+page.svelte | $lib/wiki/navigation | src/lib/wiki/navigation | no | deleted registry/wiki module dependency |

## Base-Path-Sensitive Static Paths

| File | Path | Impact |
| --- | --- | --- |
| src/lib/components/layout/snippets/Footer.svelte | /dndportal_wiki-74x32.svg | May bypass SvelteKit base path unless resolved through `$app/paths` or path helper |
| src/lib/layout/Wiki.svelte | /dndportal_wiki-74x32.svg | May bypass SvelteKit base path unless resolved through `$app/paths` or path helper |
| src/routes/accessibility/+page.svelte | /classes/illrigger/card-female-l.webp | May bypass SvelteKit base path unless resolved through `$app/paths` or path helper |
| src/routes/accessibility/+page.svelte | /decorative-divider.svg | May bypass SvelteKit base path unless resolved through `$app/paths` or path helper |
| src/routes/classes/+page.svelte | /classes/quiz | May bypass SvelteKit base path unless resolved through `$app/paths` or path helper |