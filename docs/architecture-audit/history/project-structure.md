# Project Structure

## Current State After Phase 7

The current folder structure is unchanged from the existing SvelteKit app: `src/routes`, `src/lib/wiki`, `src/lib/data`, `src/lib/config`, `src/lib/utils`, `src/lib/components`, `src/lib/styles`, `scripts`, and `docs`.

Current ownership is clearer than the original snapshot:

- `src/lib/wiki/classes/` and `src/lib/wiki/species/` own class/species domain metadata.
- `src/lib/wiki/static-pages.ts` owns static and information page metadata.
- `src/lib/wiki/registry.ts` is the single combined registry and derives ids, parents, footer entries, and validation.
- `src/lib/wiki/navigation.ts` and `src/lib/wiki/search-index.ts` are projections, not metadata sources.
- `src/lib/config/campaigns.ts` owns Party and Dungeon Master identity data.
- `src/lib/data/availability.ts` owns availability decisions.
- Route pages own body content; root/class/species layouts own document metadata and `PageHeader`.
- Shared styling primitives live in `src/lib/styles` partials.

Deleted compatibility/data files are not part of the current structure: `src/lib/data/classes.ts`, `src/lib/data/parties.ts`, and `src/lib/data/dungeon-masters.ts`.

## Historical Finding

The table below is the original audit snapshot. Rows that reference deleted data modules, route-local headers, inline availability props, or hardcoded footer links are historical and superseded by the phase result sections.

| Directory/File | Current responsibility | Clarity | Overlap/suspicious placement | Future direction |
| --- | --- | --- | --- | --- |
| src/routes | SvelteKit pages/layouts, route prose, route SCSS, some metadata | Mixed | PageHeader metadata, constants, inline types, and local arrays live here. | Routes own body and route-specific interaction only. |
| src/routes/classes | Class layout and class/subclass body pages | Mostly clear | Some pages import AvailabilityBadges without rendering; empty body shells exist. | Class layout owns headers; domain data owns metadata. |
| src/routes/species | Species layout and species body pages | Confusing | Child pages still render PageHeader/AvailabilityBadges. | Species layout owns headers; child pages own body. |
| src/lib/components | Reusable and semi-reusable UI | Mostly clear | ChildLinkGrid derives domain image paths; AvailabilityBadges merges central and inline data. | Move domain/path derivation out of components. |
| src/lib/components/layout | Header/sidebar/footer/nav shell | Clear | Footer links are hardcoded separately from registry footer flags. | Derive footer/navigation where possible. |
| src/lib/wiki | Registry, navigation, search, icons, class/species domain data | Partly clear | Authoritative and derived data are mixed. | Split into wiki domains. |
| src/lib/data | Content data and compatibility facades | Confusing | parties/dungeon-masters are facades; classes.ts duplicates class concept. | Keep generic content data; move domain data. |
| src/lib/config | Site and campaign config | Clear | Legal constants and party token values are elsewhere. | Own site/legal/campaign constants. |
| src/lib/utils | Paths, search, preferences, availability metadata | Mixed | Domain-specific search/availability live in generic utils. | Move domain utilities under domains. |
| src/lib/styles | Tokens, global styles, shared mixins | Clear but underused | Route SCSS repeats shared controls/panels. | Keep foundations and make routes consume them. |
| src/lib/assets | Imported icon assets | Clear | Icon ownership split with wiki/icons.ts. | Use icon registry as manifest. |
| static | Public images and logo | Clear as assets | Card paths inferred from titles/folders. | Create asset manifest keyed by domain ids. |
| scripts | Validation/test scripts | Clear | Search tests import generated .svelte-kit output. | Keep and expand validation. |

## Suspicious Placements

Historical note: the first three rows in this table were resolved by later phases. They remain here as migration history, not current edit instructions.

| Current file | Current responsibility | Why confusing | Suggested future location | Risk |
| --- | --- | --- | --- | --- |
| src/lib/data/parties.ts | Compatibility facade plus selectParties | Looks authoritative but delegates to config; exports parties as object, unlike config array. | campaign domain/config | Medium |
| src/lib/data/dungeon-masters.ts | Compatibility re-export | Owns no data. | remove after imports migrate | Low |
| src/lib/data/classes.ts | Small Rogue class table | Duplicates class concept outside wiki domain and appears stale. | wiki class domain or remove | Medium |
| src/lib/utils/wiki-search.ts | Search scoring/facets/URL helpers | Domain logic in generic utils. | domains/wiki/search | Medium |
| src/lib/utils/availability-metadata.ts | Availability labels and party/DM metadata | Duplicates availability lookup. | domains/wiki/availability | High |
| src/routes/+page.svelte partyMembers | Party member table | Campaign identities are config-owned but members are route-local. | campaign config/domain if public | Medium |
| src/lib/components/CampaignNote.scss | Party note colours | Uses --party-1 tokens while config uses --party-i1. | campaign-aware component styling | High |
