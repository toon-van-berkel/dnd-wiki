# Duplication

## Current State After Phase 7

The high-risk metadata/config duplication found in the original audit is resolved for current architecture:

- Class/subclass/species metadata is domain-owned and registry-derived.
- Static page metadata is owned by `src/lib/wiki/static-pages.ts`.
- Party and Dungeon Master identities are owned by `src/lib/config/campaigns.ts`.
- Availability decisions are owned by `src/lib/data/availability.ts`.
- Route pages no longer own structural PageHeader/document metadata.
- Footer/navigation/search/child cards derive from registry data.
- Shared styling foundations are consolidated into SCSS partials.

Remaining known duplication is intentionally deferred: legal/site-owner prose repeats human-readable names/contact details, image/assets remain convention-based, route folders physically mirror hrefs, and legal/information route style compositions remain local.

## Historical Duplication Audit

This table is the original duplication audit plus phase-result notes. Rows describing species child `PageHeader` duplication, inline availability props, local all-party helpers, legacy Party colour tokens, route-local metadata, and broad styling foundations are resolved unless repeated in the current-state list above.

| Priority | Concept | Locations | Intentional | Risk | Recommendation | Difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | Species child pages render route-local PageHeader/AvailabilityBadges while src/routes/species/+layout.svelte also owns them. | src/routes/species/+layout.svelte<br>src/routes/species/+page.svelte<br>src/routes/species/elf/+page.svelte<br>src/routes/species/elf/astral-elf/+page.svelte<br>src/routes/species/human/+page.svelte<br>src/lib/wiki/species/species.ts<br>src/lib/wiki/species/species-elfs.ts<br>src/lib/wiki/species/species-humans.ts | No/transitional | High drift risk for title, description, tags, and availability. | Let species layout render PageHeader and AvailabilityBadges from registry/domain data; child pages own body only. | Medium/High |
| P1 | Availability is split between src/lib/data/availability.ts and inline AvailabilityBadges props. | src/lib/data/availability.ts<br>src/routes/classes/mournbound/+page.svelte<br>src/routes/classes/vampyr/+page.svelte<br>src/routes/classes/rogue/arcane-trickster/+page.svelte<br>src/routes/species/elf/astral-elf/+page.svelte | No/transitional | Rendered availability can disagree with search metadata. | Make availability domain-owned and keyed by page id or href. | Medium/High |
| P1 | Nested availability lookup is inconsistent. | src/lib/data/availability.ts:188<br>src/lib/utils/availability-metadata.ts:61<br>src/lib/wiki/search-index.ts:77 | No/transitional | getAvailabilityByHref traverses nested children; availability metadata only reads availability[category][pageName]. | Use one exported availability lookup for UI and search metadata. | Medium/High |
| P1 | Party ids and labels are repeated as literals. | src/lib/config/campaigns.ts<br>src/lib/data/availability.ts<br>src/routes/+page.svelte<br>scripts/test-wiki-search.mjs<br>inline AvailabilityBadges props in route files | No/transitional | Adding i9 or renaming a party requires several manual edits. | Keep ids/order/names in campaign config and derive all-party selections. | Medium/High |
| P1 | Party color token ownership is split. | src/lib/config/campaigns.ts<br>src/lib/styles/tokens.scss<br>src/lib/components/CampaignNote.scss | No/transitional | Campaign config uses --party-iN while CampaignNote.scss uses --party-N. | Use campaign ids/tokens consistently and validate token existence. | Medium/High |
| P1 | Class/species metadata appears in domain data and route body/head markup. | src/lib/wiki/classes/classes.ts<br>src/lib/wiki/classes/sub_classes-cleric.ts<br>src/lib/wiki/classes/sub_classes-rogues.ts<br>src/lib/wiki/species/species-elfs.ts<br>src/routes/classes/rogue/+page.svelte<br>src/routes/classes/cleric/+page.svelte<br>src/routes/species/elf/+page.svelte | No/transitional | Search/navigation/layout can drift from route-visible prose. | Registry/domain data owns metadata; routes own body content. | Medium/High |
| P2 | Path and href normalization exists in multiple helpers. | src/lib/wiki/registry.ts:320<br>src/lib/data/availability.ts:133<br>src/lib/utils/paths.ts:8<br>scripts/verify-pages-build.mjs:51 | No/transitional | Slash/query/hash/base-path handling differs by caller. | Separate route href normalization from app asset/base path resolution. | Low/Medium |
| P2 | Panel/card surface styles are repeated despite shared _panels.scss. | src/lib/styles/_panels.scss<br>src/lib/components/PageSection.scss<br>src/lib/components/AvailabilityBadges.scss<br>src/routes/about/About.scss<br>src/routes/changelog/Changelog.scss<br>src/routes/search/Search.scss<br>src/routes/sources/Sources.scss | Partially resolved in Phase 6 | Border, radius, padding, background, and shadow drift across pages. | Continue migrating legal/information route compositions to shared panel/card mixins when touched. | Low/Medium |
| P2 | Form/button focus and sizing styles are repeated. | src/lib/styles/_forms.scss<br>src/lib/styles/_buttons.scss<br>src/routes/search/Search.scss<br>src/routes/changelog/Changelog.scss<br>src/routes/sources/Sources.scss | Partially resolved in Phase 6 | Focus rings and control heights become inconsistent. | Keep using shared form/button/focus mixins; migrate remaining route-local action links opportunistically. | Low/Medium |
| P2 | Legal/project constants repeat. | src/lib/config/site.ts<br>src/routes/about/+page.svelte<br>src/routes/legal/+page.svelte<br>src/routes/content-removal/+page.svelte<br>src/routes/contribution-terms/+page.svelte<br>src/routes/cookies/+page.svelte<br>src/routes/accessibility/+page.svelte | No/transitional | Owner, project name, contact email, and repo URLs drift. | Move legal/contact constants into config. | Low/Medium |

## Literal Trace Highlights

| Literal | Files/lines |
| --- | --- |
| Cleric | src/lib/data/ai-images.ts:61<br>src/lib/wiki/classes/classes.ts:1,34,39<br>src/lib/wiki/classes/sub_classes-cleric.ts:1<br>src/routes/classes/cleric/+page.svelte:14,25 |
| Life Domain | src/lib/wiki/classes/sub_classes-cleric.ts:3<br>src/routes/classes/cleric/life-domain/+page.svelte:1 |
| Rogue | scripts/test-wiki-search.mjs:362,367<br>src/lib/data/ai-images.ts:121<br>src/lib/data/changelog.ts:255,257,260<br>src/lib/data/classes.ts:5,6<br>src/lib/wiki/classes/classes.ts:2,78,84<br>src/lib/wiki/classes/sub_classes-rogues.ts:1<br>src/routes/classes/rogue/+page.svelte:40,43,48,53,55,79,80,82,133 |
| Assassin | src/lib/data/ai-images.ts:138<br>src/lib/wiki/classes/sub_classes-rogues.ts:11 |
| Elf | scripts/test-wiki-search.mjs:357<br>src/lib/wiki/species/species-elfs.ts:2,10<br>src/routes/species/elf/+page.svelte:15,17,27<br>src/routes/species/elf/astral-elf/+page.svelte:8,10 |
| Tiefling | - |
| Tiefling Hybrid | - |
| Party 1 | src/lib/config/campaigns.ts:17,18<br>src/routes/classes/mournbound/+page.svelte:5<br>src/routes/classes/rogue/arcane-trickster/+page.svelte:5<br>src/routes/classes/vampyr/+page.svelte:5<br>src/routes/locations/+page.svelte:13,14<br>src/routes/species/elf/astral-elf/+page.svelte:12,17,18<br>src/routes/species/human/+page.svelte:20,21 |
| Party 2 | src/lib/config/campaigns.ts:26<br>src/routes/classes/mournbound/+page.svelte:5<br>src/routes/classes/rogue/arcane-trickster/+page.svelte:5<br>src/routes/classes/vampyr/+page.svelte:5<br>src/routes/rules/fighting/+page.svelte:18,19<br>src/routes/species/elf/astral-elf/+page.svelte:12 |
| Party 3 | src/lib/config/campaigns.ts:35<br>src/routes/classes/mournbound/+page.svelte:5<br>src/routes/classes/rogue/arcane-trickster/+page.svelte:5<br>src/routes/classes/vampyr/+page.svelte:5<br>src/routes/rules/movement/+page.svelte:22,23<br>src/routes/species/elf/astral-elf/+page.svelte:12 |
| Party 4 | src/lib/config/campaigns.ts:44,45<br>src/routes/classes/mournbound/+page.svelte:5<br>src/routes/classes/rogue/arcane-trickster/+page.svelte:5<br>src/routes/classes/vampyr/+page.svelte:5<br>src/routes/species/elf/astral-elf/+page.svelte:12 |
| Party 5 | src/lib/config/campaigns.ts:53<br>src/routes/classes/mournbound/+page.svelte:5<br>src/routes/classes/rogue/arcane-trickster/+page.svelte:5<br>src/routes/classes/vampyr/+page.svelte:5 |
| Party 6 | src/lib/config/campaigns.ts:62<br>src/routes/classes/mournbound/+page.svelte:5<br>src/routes/classes/rogue/arcane-trickster/+page.svelte:5<br>src/routes/classes/vampyr/+page.svelte:5 |
| Party 7 | - |
| Party 8 | - |
| toon | scripts/test-wiki-search.mjs:93,94,206,208,217,226,231<br>src/lib/components/layout/snippets/Footer.svelte:37,42,47,110,120,128,136,262<br>src/lib/config/campaigns.ts:3,4,19,28,37,46,55,64<br>src/lib/config/site.ts:5<br>src/routes/about/+page.svelte:6,7,8,330<br>src/routes/accessibility/+page.svelte:6<br>src/routes/ai/+page.svelte:335,336<br>src/routes/changelog/+page.svelte:383<br>src/routes/content-removal/+page.svelte:8,12<br>src/routes/contribution-terms/+page.svelte:8,12,15,18<br>src/routes/cookies/+page.svelte:19,50<br>src/routes/credits/+page.svelte:6,7,8,9<br>src/routes/legal/+page.svelte:7<br>src/routes/privacy/+page.svelte:9<br>src/routes/sources/+page.svelte:374 |
| D&D Portal Wiki | src/lib/config/site.ts:3<br>src/lib/data/changelog.ts:147<br>src/lib/wiki/registry.ts:161,171<br>src/routes/about/+page.svelte:16,38,55,169<br>src/routes/changelog/+page.svelte:104,110,133<br>src/routes/content-removal/+page.svelte:6,47,53<br>src/routes/contribution-terms/+page.svelte:6,40,46<br>src/routes/cookies/+page.svelte:32,47,84,90,126,146,285,463<br>src/routes/privacy/+page.svelte:7,27,33<br>src/routes/search/+page.svelte:222<br>src/routes/sources/+page.svelte:72,78 |
| toonvanberkel.public@gmail.com | src/lib/config/site.ts:5<br>src/routes/about/+page.svelte:7<br>src/routes/accessibility/+page.svelte:6<br>src/routes/ai/+page.svelte:335,336<br>src/routes/changelog/+page.svelte:383<br>src/routes/content-removal/+page.svelte:8<br>src/routes/contribution-terms/+page.svelte:8<br>src/routes/cookies/+page.svelte:19<br>src/routes/credits/+page.svelte:8<br>src/routes/legal/+page.svelte:7<br>src/routes/privacy/+page.svelte:9<br>src/routes/sources/+page.svelte:374 |
