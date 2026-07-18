# Routes And Pages

The current root `+layout.svelte` wraps pages in `src/lib/layout/Wiki.svelte` and attempts to resolve registry metadata from `$lib/wiki/registry`, which is missing in the working tree.

## Root layout behavior

- `src/routes/+layout.ts` enables prerendering.
- `src/routes/+layout.svelte` imports global styles, `Wiki`, `$app/paths` base, `$app/state` page state, and deleted `$lib/wiki/registry`.
- It derives route metadata and a child-layout header ownership flag, but does not render the derived `pageMeta` in the current template.
- `src/lib/layout/Wiki.svelte` renders a logo, search input placeholder, the newer `src/lib/layout/snippets/Sidebar.svelte`, and main content.

## Route Inventory

### `/`
- Source files: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/+page.svelte, src/routes/page.data.ts, src/routes/page.header.ts, src/routes/page.meta.ts.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: Wiki, Metadata, PageHeader, PageSection, CardGrid, IconLinkCard, StepList, StatusLegend, AccentDetailsCard, IconCallout, TagList, IconLinkCardData.
- Data imported: ./page.data, ./page.meta, ./page.header, $lib/config/parties.
- Metadata source: src/routes/page.meta.ts.
- Page-header source: src/routes/page.header.ts.
- Tags source: route/component-local tags or deleted registry.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: $lib/wiki/registry, $lib/page/layout/navigation/PageHeader.svelte, $lib/wiki/registry.
- Static assets used: none detected.
- Duplicated content/hardcoding: Sam at src/routes/page.data.ts:196; Casper at src/routes/page.data.ts:197; Liam at src/routes/page.data.ts:198; Ronin at src/routes/page.data.ts:199; Aron at src/routes/page.data.ts:200; Mathijs at src/routes/page.data.ts:201; D&D Portal at src/routes/page.header.ts:3; D&D Portal at src/routes/page.meta.ts:3; Toon at src/routes/page.meta.ts:6; Toon van Berkel at src/routes/page.meta.ts:6; D&D Portal at src/routes/page.meta.ts:18; D&D Portal at src/routes/page.meta.ts:22.
- Missing/broken imports: src/routes/+layout.svelte imports $lib/wiki/registry; src/routes/page.data.ts imports $lib/wiki/registry.

### `/about`
- Source files: src/routes/about/+page.svelte, src/routes/about/About.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: https://github.com/toon-van-berkel/dnd-wiki at src/routes/about/+page.svelte:7; D&D Portal at src/routes/about/+page.svelte:10; D&D Portal at src/routes/about/+page.svelte:12; Toon at src/routes/about/+page.svelte:13; Toon van Berkel at src/routes/about/+page.svelte:13; D&D Portal at src/routes/about/+page.svelte:22; D&D Portal Wiki at src/routes/about/+page.svelte:22; D&D Portal at src/routes/about/+page.svelte:35; D&D Portal at src/routes/about/+page.svelte:39; D&D Portal Wiki at src/routes/about/+page.svelte:39; D&D Portal at src/routes/about/+page.svelte:52; D&D Portal at src/routes/about/+page.svelte:102.
- Missing/broken imports: src/routes/about/About.scss imports $lib/styles/mixins.

### `/accessibility`
- Source files: src/routes/accessibility/+page.svelte, src/routes/accessibility/Accessibility.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: /classes/illrigger/card-female-l.webp, /decorative-divider.svg.
- Duplicated content/hardcoding: D&D Portal at src/routes/accessibility/+page.svelte:30; D&D Portal at src/routes/accessibility/+page.svelte:55; Main at src/routes/accessibility/+page.svelte:62; D&D Portal at src/routes/accessibility/+page.svelte:96; D&D Portal at src/routes/accessibility/+page.svelte:266; D&D Portal at src/routes/accessibility/+page.svelte:407; D&D Portal at src/routes/accessibility/+page.svelte:464; D&D Portal at src/routes/accessibility/+page.svelte:549; D&D Portal at src/routes/accessibility/+page.svelte:574; D&D Portal at src/routes/accessibility/+page.svelte:581; D&D Portal at src/routes/accessibility/+page.svelte:668; D&D Portal at src/routes/accessibility/+page.svelte:701.
- Missing/broken imports: none detected.

### `/ai`
- Source files: src/routes/ai/+page.svelte, src/routes/ai/AITransparency.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: $lib/data/ai-images.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/ai/+page.svelte:16; Toon at src/routes/ai/+page.svelte:29; Toon van Berkel at src/routes/ai/+page.svelte:29; D&D Portal at src/routes/ai/+page.svelte:277; D&D Portal at src/routes/ai/+page.svelte:306; 750 at src/routes/ai/AITransparency.scss:17; 750 at src/routes/ai/AITransparency.scss:123.
- Missing/broken imports: none detected.

### `/changelog`
- Source files: src/routes/changelog/+page.svelte, src/routes/changelog/Changelog.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: ChangeFilter, PageSection.
- Data imported: $lib/data/changelog.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/changelog/+page.svelte:117; D&D Portal Wiki at src/routes/changelog/+page.svelte:117; D&D Portal at src/routes/changelog/+page.svelte:314; D&D Portal at src/routes/changelog/+page.svelte:376; 750 at src/routes/changelog/Changelog.scss:26; 750 at src/routes/changelog/Changelog.scss:121.
- Missing/broken imports: none detected.

### `/classes`
- Source files: src/routes/classes/+layout.svelte, src/routes/classes/+page.svelte, src/routes/classes/page.header.ts, src/routes/classes/page.meta.ts.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: Metadata, PageHeader, PageSection, ChildLinkGrid.
- Data imported: ./page.header, ../page.meta.
- Metadata source: src/routes/classes/page.meta.ts.
- Page-header source: src/routes/classes/page.header.ts.
- Tags source: route/component-local tags or deleted registry.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: $lib/wiki/registry, $lib/wiki/navigation, $lib/page/layout/navigation/PageHeader.svelte.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/classes/page.header.ts:3; D&D Portal at src/routes/classes/page.meta.ts:3; Toon at src/routes/classes/page.meta.ts:6; Toon van Berkel at src/routes/classes/page.meta.ts:6; D&D Portal at src/routes/classes/page.meta.ts:18; D&D Portal at src/routes/classes/page.meta.ts:22; D&D Portal at src/routes/classes/page.meta.ts:23; D&D Portal at src/routes/classes/page.meta.ts:30.
- Missing/broken imports: src/routes/classes/+layout.svelte imports $lib/wiki/registry; src/routes/classes/+page.svelte imports $lib/pages/PageSection.svelte; src/routes/classes/+page.svelte imports $lib/wiki/navigation.

### `/classes/artificer`
- Source files: src/routes/classes/artificer/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: PageSection, WikiTable, ChildLinkGrid.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: src/routes/classes/artificer/+page.svelte imports $lib/wiki/navigation.

### `/classes/barbarian`
- Source files: src/routes/classes/barbarian/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/bard`
- Source files: src/routes/classes/bard/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/blood-hunter`
- Source files: src/routes/classes/blood-hunter/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/captain`
- Source files: src/routes/classes/captain/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/champion`
- Source files: src/routes/classes/champion/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/cleric`
- Source files: src/routes/classes/cleric/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: PageSection, ChildLinkGrid.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: src/routes/classes/cleric/+page.svelte imports $lib/wiki/navigation.

### `/classes/cleric/death-domain`
- Source files: src/routes/classes/cleric/death-domain/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/cleric/life-domain`
- Source files: src/routes/classes/cleric/life-domain/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/druid`
- Source files: src/routes/classes/druid/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/fighter`
- Source files: src/routes/classes/fighter/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/gunslinger`
- Source files: src/routes/classes/gunslinger/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/illrigger`
- Source files: src/routes/classes/illrigger/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/messenger`
- Source files: src/routes/classes/messenger/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/monk`
- Source files: src/routes/classes/monk/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/monster-hunter`
- Source files: src/routes/classes/monster-hunter/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/mournbound`
- Source files: src/routes/classes/mournbound/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/paladin`
- Source files: src/routes/classes/paladin/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/pugilist`
- Source files: src/routes/classes/pugilist/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/ranger`
- Source files: src/routes/classes/ranger/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue`
- Source files: src/routes/classes/rogue/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: PageSection, WikiTable, ChildLinkGrid.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: src/routes/classes/rogue/+page.svelte imports $lib/wiki/navigation.

### `/classes/rogue/arcane-trickster`
- Source files: src/routes/classes/rogue/arcane-trickster/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/assassin`
- Source files: src/routes/classes/rogue/assassin/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/inquisitive`
- Source files: src/routes/classes/rogue/inquisitive/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/mastermind`
- Source files: src/routes/classes/rogue/mastermind/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/phantom`
- Source files: src/routes/classes/rogue/phantom/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/scout`
- Source files: src/routes/classes/rogue/scout/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/soulknife`
- Source files: src/routes/classes/rogue/soulknife/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/swashbuckler`
- Source files: src/routes/classes/rogue/swashbuckler/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/rogue/thief`
- Source files: src/routes/classes/rogue/thief/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/scholar`
- Source files: src/routes/classes/scholar/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/sorcerer`
- Source files: src/routes/classes/sorcerer/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/treasure-hunter`
- Source files: src/routes/classes/treasure-hunter/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/vampyr`
- Source files: src/routes/classes/vampyr/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/warden`
- Source files: src/routes/classes/warden/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/warlock`
- Source files: src/routes/classes/warlock/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/classes/wizard`
- Source files: src/routes/classes/wizard/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/classes/+layout.svelte.
- Components used: none detected.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/content-removal`
- Source files: src/routes/content-removal/+page.svelte, src/routes/content-removal/ContentRemoval.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/content-removal/+page.svelte:5; D&D Portal Wiki at src/routes/content-removal/+page.svelte:5; Toon at src/routes/content-removal/+page.svelte:6; Toon van Berkel at src/routes/content-removal/+page.svelte:6; https://github.com/toon-van-berkel/dnd-wiki at src/routes/content-removal/+page.svelte:11; D&D Portal at src/routes/content-removal/+page.svelte:21; D&D Portal at src/routes/content-removal/+page.svelte:333; D&D Portal at src/routes/content-removal/+page.svelte:343; D&D Portal at src/routes/content-removal/+page.svelte:413; D&D Portal at src/routes/content-removal/+page.svelte:636; D&D Portal at src/routes/content-removal/+page.svelte:643; D&D Portal at src/routes/content-removal/+page.svelte:653.
- Missing/broken imports: none detected.

### `/contribution-terms`
- Source files: src/routes/contribution-terms/+page.svelte, src/routes/contribution-terms/ContributionTerms.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/contribution-terms/+page.svelte:5; D&D Portal Wiki at src/routes/contribution-terms/+page.svelte:5; Toon at src/routes/contribution-terms/+page.svelte:6; Toon van Berkel at src/routes/contribution-terms/+page.svelte:6; https://github.com/toon-van-berkel/dnd-wiki at src/routes/contribution-terms/+page.svelte:11; https://github.com/toon-van-berkel/dnd-wiki at src/routes/contribution-terms/+page.svelte:14; https://github.com/toon-van-berkel/dnd-wiki at src/routes/contribution-terms/+page.svelte:17; D&D Portal at src/routes/contribution-terms/+page.svelte:45; D&D Portal at src/routes/contribution-terms/+page.svelte:206; D&D Portal at src/routes/contribution-terms/+page.svelte:213; D&D Portal at src/routes/contribution-terms/+page.svelte:411; D&D Portal at src/routes/contribution-terms/+page.svelte:423.
- Missing/broken imports: none detected.

### `/cookies`
- Source files: src/routes/cookies/+page.svelte, src/routes/cookies/CookieNotice.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/cookies/+page.svelte:31; D&D Portal Wiki at src/routes/cookies/+page.svelte:31; D&D Portal at src/routes/cookies/+page.svelte:46; D&D Portal Wiki at src/routes/cookies/+page.svelte:46; D&D Portal at src/routes/cookies/+page.svelte:110; D&D Portal Wiki at src/routes/cookies/+page.svelte:110; D&D Portal at src/routes/cookies/+page.svelte:130; D&D Portal Wiki at src/routes/cookies/+page.svelte:130; Main at src/routes/cookies/+page.svelte:148; D&D Portal at src/routes/cookies/+page.svelte:201; D&D Portal at src/routes/cookies/+page.svelte:269; D&D Portal Wiki at src/routes/cookies/+page.svelte:269.
- Missing/broken imports: none detected.

### `/credits`
- Source files: src/routes/credits/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: https://github.com/toon-van-berkel/dnd-wiki at src/routes/credits/+page.svelte:6; D&D Portal at src/routes/credits/+page.svelte:13; Toon at src/routes/credits/+page.svelte:15; Toon van Berkel at src/routes/credits/+page.svelte:15; Toon at src/routes/credits/+page.svelte:21; Toon van Berkel at src/routes/credits/+page.svelte:21; D&D Portal at src/routes/credits/+page.svelte:64; Toon at src/routes/credits/+page.svelte:151; Toon van Berkel at src/routes/credits/+page.svelte:151; D&D Portal at src/routes/credits/+page.svelte:158; D&D Portal at src/routes/credits/+page.svelte:183; D&D Portal at src/routes/credits/+page.svelte:212.
- Missing/broken imports: none detected.

### `/legal`
- Source files: src/routes/legal/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: $lib/config/site.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: src/routes/legal/+page.svelte imports $lib/config/site.

### `/locations`
- Source files: src/routes/locations/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection, CampaignNote.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: Party 1 at src/routes/locations/+page.svelte:9.
- Missing/broken imports: none detected.

### `/monsters`
- Source files: src/routes/monsters/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/preferences`
- Source files: src/routes/preferences/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: WikiPreferences, PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/privacy`
- Source files: src/routes/privacy/+page.svelte, src/routes/privacy/PrivacyNotice.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: component-local availability or deleted data module.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/privacy/+page.svelte:6; D&D Portal Wiki at src/routes/privacy/+page.svelte:6; Toon at src/routes/privacy/+page.svelte:7; Toon van Berkel at src/routes/privacy/+page.svelte:7; D&D Portal at src/routes/privacy/+page.svelte:45; D&D Portal at src/routes/privacy/+page.svelte:459; D&D Portal at src/routes/privacy/+page.svelte:643.
- Missing/broken imports: none detected.

### `/rules`
- Source files: src/routes/rules/+page.svelte, src/routes/rules/page.header.ts.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageHeader, PageSection, ChildLinkGrid.
- Data imported: ./page.header.
- Metadata source: root/deleted registry or none detected.
- Page-header source: src/routes/rules/page.header.ts.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/page/layout/navigation/PageHeader.svelte, $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/rules/page.header.ts:3.
- Missing/broken imports: src/routes/rules/+page.svelte imports $lib/wiki/navigation.

### `/rules/fighting`
- Source files: src/routes/rules/fighting/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection, CampaignNote.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: Party 2 at src/routes/rules/fighting/+page.svelte:9.
- Missing/broken imports: none detected.

### `/rules/movement`
- Source files: src/routes/rules/movement/+page.svelte, src/routes/rules/movement/page.header.ts.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: PageSection, CampaignNote, PageHeader, ChildLinkGrid.
- Data imported: ./page.header.
- Metadata source: root/deleted registry or none detected.
- Page-header source: src/routes/rules/movement/page.header.ts.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/page/layout/navigation/PageHeader.svelte, $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: Party 3 at src/routes/rules/movement/+page.svelte:9; D&D Portal at src/routes/rules/movement/page.header.ts:3.
- Missing/broken imports: src/routes/rules/movement/+page.svelte imports $lib/wiki/navigation.

### `/search`
- Source files: src/routes/search/+page.svelte, src/routes/search/Search.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: SearchEntryKind, T, SearchFilterGroup, EmptyState, ActionButton.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: route/component-local tags or deleted registry.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: none detected.

### `/sources`
- Source files: src/routes/sources/+page.svelte, src/routes/sources/Sources.scss.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts.
- Components used: SourceFilter, PageSection.
- Data imported: $lib/data/sources.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: D&D Portal at src/routes/sources/+page.svelte:85; D&D Portal at src/routes/sources/+page.svelte:306; D&D Portal at src/routes/sources/+page.svelte:316; 750 at src/routes/sources/Sources.scss:47; 750 at src/routes/sources/Sources.scss:73.
- Missing/broken imports: none detected.

### `/species`
- Source files: src/routes/species/+layout.svelte, src/routes/species/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/species/+layout.svelte.
- Components used: PageDocumentMetadata, PageHeader, AvailabilityBadges, PageSection, ChildLinkGrid.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: rendered directly in page/layout.
- Tags source: route/component-local tags or deleted registry.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/wiki/registry, $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: src/routes/species/+layout.svelte imports $lib/wiki/registry; src/routes/species/+page.svelte imports $lib/wiki/navigation.

### `/species/elf`
- Source files: src/routes/species/elf/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/species/+layout.svelte.
- Components used: PageSection, ChildLinkGrid.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: $lib/wiki/navigation.
- Static assets used: none detected.
- Duplicated content/hardcoding: none detected by shared-value scan.
- Missing/broken imports: src/routes/species/elf/+page.svelte imports $lib/wiki/navigation.

### `/species/elf/astral-elf`
- Source files: src/routes/species/elf/astral-elf/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/species/+layout.svelte.
- Components used: PageSection, CampaignNote.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: Party 1 at src/routes/species/elf/astral-elf/+page.svelte:11.
- Missing/broken imports: none detected.

### `/species/human`
- Source files: src/routes/species/human/+page.svelte.
- Inherited layouts: src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/species/+layout.svelte.
- Components used: PageSection, CampaignNote.
- Data imported: none detected.
- Metadata source: root/deleted registry or none detected.
- Page-header source: root/deleted registry or none detected.
- Tags source: none detected.
- Availability source: none detected.
- Navigation/registry dependencies: none detected.
- Static assets used: none detected.
- Duplicated content/hardcoding: Party 1 at src/routes/species/human/+page.svelte:14.
- Missing/broken imports: none detected.

## Route-to-dependency Summary

| Route | Files | Dependencies |
| --- | --- | --- |
| / | src/routes/+layout.svelte, src/routes/+layout.ts, src/routes/+page.svelte, src/routes/page.data.ts, src/routes/page.header.ts, src/routes/page.meta.ts | $app/paths, $app/state, svelte, $lib/layout/Wiki.svelte, $lib/wiki/registry, $lib/styles/styles.scss, $lib/page/Metadata.svelte, $lib/page/layout/navigation/PageHeader.svelte, $lib/pages/PageSection/PageSection.svelte, $lib/pages/AccentDetailsCard/AccentDetailsCard.svelte, $lib/pages/CardGrid/CardGrid.svelte, $lib/pages/IconCallout/IconCallout.svelte, $lib/pages/IconLinkCard/IconLinkCard.svelte, $lib/pages/StatusLegend/StatusLegend.svelte, $lib/pages/StepList/StepList.svelte, $lib/pages/TagList/TagList.svelte, ./page.data, ./page.meta, ./page.header, $lib/config/parties, $lib/pages/AccentDetailsCard/AccentDetailsCard-Types, $lib/pages/IconLinkCard/IconLinkCard-Types, $lib/pages/StatusLegend/StatusLegend-Types, $lib/pages/StepList/StepList-Types |
| /about | src/routes/about/+page.svelte, src/routes/about/About.scss | $lib/utils/paths, $lib/components/PageSection.svelte, ./About.scss, $lib/styles/breakpoints, $lib/styles/buttons, $lib/styles/mixins, $lib/styles/panels |
| /accessibility | src/routes/accessibility/+page.svelte, src/routes/accessibility/Accessibility.scss | $lib/utils/paths, $lib/components/PageSection.svelte, ./Accessibility.scss |
| /ai | src/routes/ai/+page.svelte, src/routes/ai/AITransparency.scss | $lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/ai-images, ./AITransparency.scss |
| /changelog | src/routes/changelog/+page.svelte, src/routes/changelog/Changelog.scss | $lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/changelog, ./Changelog.scss |
| /classes | src/routes/classes/+layout.svelte, src/routes/classes/+page.svelte, src/routes/classes/page.header.ts, src/routes/classes/page.meta.ts | $app/state, svelte, $lib/components/PageDocumentMetadata.svelte, $lib/wiki/registry, $lib/components/ChildLinkGrid.svelte, $lib/pages/PageSection.svelte, $lib/wiki/navigation, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/page/Metadata.svelte, ../page.meta |
| /classes/artificer | src/routes/classes/artificer/+page.svelte | $lib/components/PageSection.svelte, $lib/components/WikiTable.svelte, $lib/components/ChildLinkGrid.svelte, $lib/wiki/navigation |
| /classes/barbarian | src/routes/classes/barbarian/+page.svelte | none |
| /classes/bard | src/routes/classes/bard/+page.svelte | none |
| /classes/blood-hunter | src/routes/classes/blood-hunter/+page.svelte | none |
| /classes/captain | src/routes/classes/captain/+page.svelte | none |
| /classes/champion | src/routes/classes/champion/+page.svelte | none |
| /classes/cleric | src/routes/classes/cleric/+page.svelte | $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation |
| /classes/cleric/death-domain | src/routes/classes/cleric/death-domain/+page.svelte | none |
| /classes/cleric/life-domain | src/routes/classes/cleric/life-domain/+page.svelte | none |
| /classes/druid | src/routes/classes/druid/+page.svelte | none |
| /classes/fighter | src/routes/classes/fighter/+page.svelte | none |
| /classes/gunslinger | src/routes/classes/gunslinger/+page.svelte | none |
| /classes/illrigger | src/routes/classes/illrigger/+page.svelte | none |
| /classes/messenger | src/routes/classes/messenger/+page.svelte | none |
| /classes/monk | src/routes/classes/monk/+page.svelte | none |
| /classes/monster-hunter | src/routes/classes/monster-hunter/+page.svelte | none |
| /classes/mournbound | src/routes/classes/mournbound/+page.svelte | none |
| /classes/paladin | src/routes/classes/paladin/+page.svelte | none |
| /classes/pugilist | src/routes/classes/pugilist/+page.svelte | none |
| /classes/ranger | src/routes/classes/ranger/+page.svelte | none |
| /classes/rogue | src/routes/classes/rogue/+page.svelte | $lib/components/PageSection.svelte, $lib/components/WikiTable.svelte, $lib/components/ChildLinkGrid.svelte, $lib/wiki/navigation |
| /classes/rogue/arcane-trickster | src/routes/classes/rogue/arcane-trickster/+page.svelte | none |
| /classes/rogue/assassin | src/routes/classes/rogue/assassin/+page.svelte | none |
| /classes/rogue/inquisitive | src/routes/classes/rogue/inquisitive/+page.svelte | none |
| /classes/rogue/mastermind | src/routes/classes/rogue/mastermind/+page.svelte | none |
| /classes/rogue/phantom | src/routes/classes/rogue/phantom/+page.svelte | none |
| /classes/rogue/scout | src/routes/classes/rogue/scout/+page.svelte | none |
| /classes/rogue/soulknife | src/routes/classes/rogue/soulknife/+page.svelte | none |
| /classes/rogue/swashbuckler | src/routes/classes/rogue/swashbuckler/+page.svelte | none |
| /classes/rogue/thief | src/routes/classes/rogue/thief/+page.svelte | none |
| /classes/scholar | src/routes/classes/scholar/+page.svelte | none |
| /classes/sorcerer | src/routes/classes/sorcerer/+page.svelte | none |
| /classes/treasure-hunter | src/routes/classes/treasure-hunter/+page.svelte | none |
| /classes/vampyr | src/routes/classes/vampyr/+page.svelte | none |
| /classes/warden | src/routes/classes/warden/+page.svelte | none |
| /classes/warlock | src/routes/classes/warlock/+page.svelte | none |
| /classes/wizard | src/routes/classes/wizard/+page.svelte | none |
| /content-removal | src/routes/content-removal/+page.svelte, src/routes/content-removal/ContentRemoval.scss | $lib/utils/paths, $lib/components/PageSection.svelte, ./ContentRemoval.scss |
| /contribution-terms | src/routes/contribution-terms/+page.svelte, src/routes/contribution-terms/ContributionTerms.scss | $lib/utils/paths, $lib/components/PageSection.svelte, ./ContributionTerms.scss |
| /cookies | src/routes/cookies/+page.svelte, src/routes/cookies/CookieNotice.scss | $lib/utils/paths, $lib/utils/wiki-preferences, $lib/components/PageSection.svelte, ./CookieNotice.scss |
| /credits | src/routes/credits/+page.svelte | $lib/utils/paths, $lib/components/PageSection.svelte |
| /legal | src/routes/legal/+page.svelte | $lib/components/PageSection.svelte, $lib/config/site |
| /locations | src/routes/locations/+page.svelte | $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte |
| /monsters | src/routes/monsters/+page.svelte | $lib/components/PageSection.svelte |
| /preferences | src/routes/preferences/+page.svelte | $lib/components/PageSection.svelte, $lib/components/WikiPreferences.svelte, $lib/utils/paths |
| /privacy | src/routes/privacy/+page.svelte, src/routes/privacy/PrivacyNotice.scss | $lib/utils/paths, $lib/utils/wiki-preferences, $lib/components/PageSection.svelte, ./PrivacyNotice.scss |
| /rules | src/routes/rules/+page.svelte, src/routes/rules/page.header.ts | $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/wiki/navigation |
| /rules/fighting | src/routes/rules/fighting/+page.svelte | $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte |
| /rules/movement | src/routes/rules/movement/+page.svelte, src/routes/rules/movement/page.header.ts | $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/wiki/navigation |
| /search | src/routes/search/+page.svelte, src/routes/search/Search.scss | $lib/styles/breakpoints, $lib/styles/buttons, $lib/styles/forms, $lib/styles/base/mixins, $lib/styles/panels |
| /sources | src/routes/sources/+page.svelte, src/routes/sources/Sources.scss | $lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/sources, ./Sources.scss |
| /species | src/routes/species/+layout.svelte, src/routes/species/+page.svelte | $app/state, svelte, $lib/components/AvailabilityBadges.svelte, $lib/components/PageDocumentMetadata.svelte, $lib/components/PageHeader.svelte, $lib/wiki/registry, $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation |
| /species/elf | src/routes/species/elf/+page.svelte | $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation |
| /species/elf/astral-elf | src/routes/species/elf/astral-elf/+page.svelte | $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte |
| /species/human | src/routes/species/human/+page.svelte | $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte |