# Components

This report lists every Svelte component in the current working tree. `src/lib/page` and `src/lib/pages` are treated as high-priority recent implementations per the audit request.

## Campaign/Availability functionality

### `src/lib/components/AvailabilityBadges.svelte`
- Purpose: Svelte component AvailabilityBadges.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/data/availability, $lib/utils/availability-metadata, ./AvailabilityBadges.scss.
- Associated SCSS: src/lib/components/AvailabilityBadges.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/species/+layout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Availability.
- Concerns: none detected.

### `src/lib/components/CampaignNote.svelte`
- Purpose: Svelte component CampaignNote; entire implementation is commented out.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: src/lib/components/CampaignNote.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/locations/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: entire component is commented out.

### `src/lib/components/WikiPreferences.svelte`
- Purpose: Svelte component WikiPreferences; renders/imports component tags Panel, SelectField, ActionButton; entire implementation is commented out.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: src/lib/components/WikiPreferences.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/preferences/+page.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: entire component is commented out.

## Generic presentation

### `src/lib/components/ChildLinkGrid.svelte`
- Purpose: Svelte component ChildLinkGrid; renders/imports component tags Gender; uses browser localStorage.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, $lib/utils/paths, ./ChildLinkGrid.scss.
- Associated SCSS: src/lib/components/ChildLinkGrid.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/classes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/species/+page.svelte, src/routes/species/elf/+page.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: localStorage.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/components/PageSection.svelte`
- Purpose: Svelte component PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, ./PageSection.scss.
- Associated SCSS: src/lib/components/PageSection.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/content-removal/+page.svelte, src/routes/contribution-terms/+page.svelte, src/routes/cookies/+page.svelte, src/routes/credits/+page.svelte, src/routes/legal/+page.svelte, src/routes/locations/+page.svelte, src/routes/monsters/+page.svelte, src/routes/preferences/+page.svelte, src/routes/privacy/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/sources/+page.svelte, src/routes/species/+page.svelte, src/routes/species/elf/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: yes.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: PageSection.
- Concerns: none detected.

### `src/lib/components/RuleTag.svelte`
- Purpose: Svelte component RuleTag.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./RuleTag.scss.
- Associated SCSS: src/lib/components/RuleTag.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/components/WikiImage.svelte`
- Purpose: Svelte component WikiImage; renders/imports component tags HTMLImgAttributes.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte/elements, $lib/utils/paths.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/lib/components/layout/snippets/Footer.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/components/WikiTable.svelte`
- Purpose: Svelte component WikiTable.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./WikiTable.scss.
- Associated SCSS: src/lib/components/WikiTable.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/classes/artificer/+page.svelte, src/routes/classes/rogue/+page.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/components/feedback/EmptyState.svelte`
- Purpose: Svelte component EmptyState.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, $lib/styles/panels.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: yes.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/helpers/Icon.svelte`
- Purpose: Svelte component Icon; accepts props class.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./Icon-helper, ./Icon-Types, ./Icon.scss.
- Associated SCSS: src/lib/helpers/Icon.scss.
- Associated types: src/lib/helpers/Icon-Types.ts.
- Associated helpers/data files: src/lib/helpers/Icon-Types.ts, src/lib/helpers/Icon-data.ts, src/lib/helpers/Icon-helper.ts, src/lib/helpers/Icon.scss, src/lib/helpers/Icon-data.ts.
- Used by: src/lib/layout/snippets/Sidebar.svelte, src/lib/pages/IconCallout/IconCallout.svelte, src/lib/pages/IconLinkCard/IconLinkCard.svelte, src/lib/pages/StatusLegend/StatusLegend.svelte, src/lib/pages/StepList/StepList.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes, sets explicit roles.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Icon system.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/AccentDetailsCard/AccentDetailsCard.svelte`
- Purpose: Svelte component AccentDetailsCard; accepts props class.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./AccentDetailsCard-Types, ./AccentDetailsCard.scss.
- Associated SCSS: src/lib/pages/AccentDetailsCard/AccentDetailsCard.scss.
- Associated types: src/lib/pages/AccentDetailsCard/AccentDetailsCard-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/CardGrid/CardGrid.svelte`
- Purpose: Svelte component CardGrid; accepts props class.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./CardGrid-Types, ./CardGrid.scss.
- Associated SCSS: src/lib/pages/CardGrid/CardGrid.scss.
- Associated types: src/lib/pages/CardGrid/CardGrid-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/IconCallout/IconCallout.svelte`
- Purpose: Svelte component IconCallout; accepts props class; renders/imports component tags Icon.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/helpers/Icon.svelte, ./IconCallout-Types, ./IconCallout.scss.
- Associated SCSS: src/lib/pages/IconCallout/IconCallout.scss.
- Associated types: src/lib/pages/IconCallout/IconCallout-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/IconLinkCard/IconLinkCard.svelte`
- Purpose: Svelte component IconLinkCard; accepts props class; renders/imports component tags Icon.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/helpers/Icon.svelte, ./IconLinkCard-Types, ./IconLinkCard.scss.
- Associated SCSS: src/lib/pages/IconLinkCard/IconLinkCard.scss.
- Associated types: src/lib/pages/IconLinkCard/IconLinkCard-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/PageSection/PageSection.svelte`
- Purpose: Svelte component PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte/easing, svelte/transition, ./PageSection-Types, ./PageSection.
- Associated SCSS: src/lib/pages/PageSection/PageSection.scss.
- Associated types: src/lib/pages/PageSection/PageSection-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/lib/pages/PageSection/PageSection.svelte, src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: PageSection.
- Concerns: new high-priority implementation area per user context; assigns to a $derived value; likely Svelte 5 state bug.

### `src/lib/pages/StatusLegend/StatusLegend.svelte`
- Purpose: Svelte component StatusLegend; accepts props class; renders/imports component tags Icon.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/helpers/Icon.svelte, ./StatusLegend-Types, ./StatusLegend.scss.
- Associated SCSS: src/lib/pages/StatusLegend/StatusLegend.scss.
- Associated types: src/lib/pages/StatusLegend/StatusLegend-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/StepList/StepList.svelte`
- Purpose: Svelte component StepList; accepts props class; renders/imports component tags Icon.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/helpers/Icon.svelte, ./StepList-Types, ./StepList.scss.
- Associated SCSS: src/lib/pages/StepList/StepList.scss.
- Associated types: src/lib/pages/StepList/StepList-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/pages/TagList/TagList.svelte`
- Purpose: Svelte component TagList; accepts props class.
- Props: class.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./TagList-Types, ./TagList.scss.
- Associated SCSS: src/lib/pages/TagList/TagList.scss.
- Associated types: src/lib/pages/TagList/TagList-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

## Metadata/SEO

### `src/lib/components/PageDocumentMetadata.svelte`
- Purpose: Svelte component PageDocumentMetadata; writes document head metadata; entire implementation is commented out.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/classes/+layout.svelte, src/routes/species/+layout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Metadata.
- Concerns: entire component is commented out.

### `src/lib/page/Metadata.svelte`
- Purpose: Svelte component Metadata; writes document head metadata.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./Metadata-Types.
- Associated SCSS: none detected.
- Associated types: src/lib/page/Metadata-Types.ts.
- Associated helpers/data files: src/lib/page/Metadata-Types.ts.
- Used by: src/routes/+page.svelte, src/routes/classes/+page.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Metadata.
- Concerns: new high-priority implementation area per user context.

## Page infrastructure

### `src/lib/components/PageHeader.svelte`
- Purpose: Svelte component PageHeader; renders/imports component tags RuleTag; entire implementation is commented out.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: src/lib/components/PageHeader.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/species/+layout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: PageHeader.
- Concerns: entire component is commented out.

## Forms and controls

### `src/lib/components/forms/ActionButton.svelte`
- Purpose: Svelte component ActionButton.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, $lib/styles/buttons.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: yes.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/components/forms/SelectField.svelte`
- Purpose: Svelte component SelectField.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/styles/forms.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: yes.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

## Persistent layout

### `src/lib/components/layout/Panel.svelte`
- Purpose: Svelte component Panel.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, $lib/styles/breakpoints, $lib/styles/panels.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: generic/reusable infrastructure.
- Reusable now: yes.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/lib/components/layout/WikiLayout.svelte`
- Purpose: Svelte component WikiLayout; renders/imports component tags Header, Sidebar, Footer; uses browser localStorage.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, ./snippets/Header.svelte, ./snippets/Sidebar.svelte, ./snippets/Footer.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: localStorage.
- Route assumptions: none obvious.
- Duplicate status: Site shell/layout.
- Concerns: none detected.

### `src/lib/components/layout/snippets/Footer.svelte`
- Purpose: Svelte component Footer; renders/imports component tags WikiImage.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/WikiImage.svelte, $lib/config/config, $lib/utils/paths, $lib/wiki/registry, ./Footer.scss.
- Associated SCSS: src/lib/components/layout/snippets/Footer.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/lib/components/layout/WikiLayout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree; contains root-absolute asset or route path; check base-path handling.

### `src/lib/components/layout/snippets/Header.svelte`
- Purpose: Svelte component Header; entire implementation is commented out.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: none detected.
- Associated SCSS: src/lib/components/layout/snippets/Header.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/lib/components/layout/WikiLayout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes, sets explicit roles, includes screen-reader-only text.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: entire component is commented out.

### `src/lib/components/layout/snippets/Sidebar.svelte`
- Purpose: Svelte component Sidebar; renders/imports component tags NavTree.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/state, $lib/config/parties, $lib/wiki/navigation, $lib/utils/paths, ./helpers/NavTree.svelte, ./Sidebar.scss.
- Associated SCSS: src/lib/components/layout/snippets/Sidebar.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/lib/components/layout/WikiLayout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: Sidebar.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/lib/components/layout/snippets/helpers/NavTree.svelte`
- Purpose: Svelte component NavTree; renders/imports component tags Record.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/wiki/navigation, $lib/wiki/icons, $lib/utils/paths, ./NavTree.svelte, ./NavTree.scss.
- Associated SCSS: src/lib/components/layout/snippets/helpers/NavTree.scss.
- Associated types: none detected.
- Associated helpers/data files: src/lib/components/layout/snippets/helpers/NavTree.scss.
- Used by: src/lib/components/layout/snippets/Sidebar.svelte, src/lib/components/layout/snippets/helpers/NavTree.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/lib/layout/Wiki.svelte`
- Purpose: Svelte component Wiki; renders/imports component tags Sidebar.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./snippets/Sidebar.svelte, ./Wiki.scss.
- Associated SCSS: src/lib/layout/Wiki.scss.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: src/routes/+layout.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Site shell/layout.
- Concerns: new high-priority implementation area per user context; contains root-absolute asset or route path; check base-path handling.

### `src/lib/layout/snippets/Sidebar.svelte`
- Purpose: Svelte component Sidebar; renders/imports component tags Icon.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/state, $lib/helpers/Icon.svelte, ./Sidebar-data, ./Sidebar-Types, ./Sidebar.scss.
- Associated SCSS: src/lib/layout/snippets/Sidebar.scss.
- Associated types: src/lib/layout/snippets/Sidebar-Types.ts.
- Associated helpers/data files: src/lib/layout/snippets/Sidebar-Data.ts.
- Used by: src/lib/layout/Wiki.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: Sidebar.
- Concerns: new high-priority implementation area per user context.

### `src/lib/page/layout/navigation/PageHeader.svelte`
- Purpose: Svelte component PageHeader; renders/imports component tags AllowedIn, Tags, BreadCrumbs.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/state, ./PageHeader-Types, ./snippets/AllowedIn.svelte, ./snippets/Tags.svelte, ./snippets/Breadcrumbs.svelte, ./snippets/AllowedIn-helper, ./snippets/Tags-helpers, ./PageHeader.scss.
- Associated SCSS: src/lib/page/layout/navigation/PageHeader.scss.
- Associated types: src/lib/page/layout/navigation/PageHeader-Types.ts.
- Associated helpers/data files: none detected.
- Used by: src/routes/+page.svelte, src/routes/classes/+page.svelte, src/routes/rules/+page.svelte, src/routes/rules/movement/+page.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: PageHeader.
- Concerns: new high-priority implementation area per user context.

### `src/lib/page/layout/navigation/snippets/AllowedIn.svelte`
- Purpose: Svelte component AllowedIn.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./AllowedIn-Types, ./Allowedin.scss.
- Associated SCSS: src/lib/page/layout/navigation/snippets/Allowedin.scss.
- Associated types: src/lib/page/layout/navigation/snippets/AllowedIn-Types.ts.
- Associated helpers/data files: src/lib/page/layout/navigation/snippets/AllowedIn-helper.ts, src/lib/page/layout/navigation/snippets/AllowedIn-data.ts.
- Used by: src/lib/page/layout/navigation/PageHeader.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Availability.
- Concerns: new high-priority implementation area per user context.

### `src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte`
- Purpose: Svelte component Breadcrumbs.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/state, ./Breadcrumbs-helpers, ./Breadcrumbs.scss.
- Associated SCSS: src/lib/page/layout/navigation/snippets/Breadcrumbs.scss.
- Associated types: src/lib/page/layout/navigation/snippets/Breadcrumbs-Type.ts.
- Associated helpers/data files: src/lib/page/layout/navigation/snippets/Breadcrumbs-helpers.ts.
- Used by: src/lib/page/layout/navigation/PageHeader.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

### `src/lib/page/layout/navigation/snippets/Tags.svelte`
- Purpose: Svelte component Tags.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: ./Tags.scss.
- Associated SCSS: src/lib/page/layout/navigation/snippets/Tags.scss.
- Associated types: none detected.
- Associated helpers/data files: src/lib/page/layout/navigation/snippets/Tags-helpers.ts, src/lib/page/layout/navigation/snippets/Tags-data.ts.
- Used by: src/lib/page/layout/navigation/PageHeader.svelte.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: new high-priority implementation area per user context.

## Search functionality

### `src/lib/components/search/SearchFilterGroup.svelte`
- Purpose: Svelte component SearchFilterGroup.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: svelte, $lib/styles/mixins, $lib/styles/panels.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes, includes screen-reader-only text.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target.

### `src/lib/search/SearchInput.svelte`
- Purpose: Svelte component SearchInput.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/lib/assets/icons/util/search.svg.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: none obvious.
- Duplicate status: Search.
- Concerns: imports at least one missing or case-mismatched internal target; contains $lib/lib typo in import path.

## Route-specific components

### `src/routes/+layout.svelte`
- Purpose: Svelte component +layout; renders/imports component tags Wiki; writes document head metadata.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/paths, $app/state, svelte, $lib/layout/Wiki.svelte, $lib/wiki/registry, $lib/styles/styles.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags Metadata, PageHeader, PageSection, CardGrid, IconLinkCard, StepList, StatusLegend, AccentDetailsCard, IconCallout, TagList.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/page/Metadata.svelte, $lib/page/layout/navigation/PageHeader.svelte, $lib/pages/PageSection/PageSection.svelte, $lib/pages/AccentDetailsCard/AccentDetailsCard.svelte, $lib/pages/CardGrid/CardGrid.svelte, $lib/pages/IconCallout/IconCallout.svelte, $lib/pages/IconLinkCard/IconLinkCard.svelte, $lib/pages/StatusLegend/StatusLegend.svelte, $lib/pages/StepList/StepList.svelte, $lib/pages/TagList/TagList.svelte, ./page.data, ./page.meta, ./page.header.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/about/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, ./About.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/accessibility/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, ./Accessibility.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes, includes screen-reader-only text.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: contains root-absolute asset or route path; check base-path handling.

### `src/routes/ai/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/ai-images, ./AITransparency.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/changelog/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags ChangeFilter, PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/changelog, ./Changelog.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/classes/+layout.svelte`
- Purpose: Svelte component +layout.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/state, svelte, $lib/components/PageDocumentMetadata.svelte, $lib/wiki/registry.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/classes/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags Metadata, PageHeader, PageSection, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/ChildLinkGrid.svelte, $lib/pages/PageSection.svelte, $lib/wiki/navigation, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/page/Metadata.svelte, ../page.meta.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree; contains root-absolute asset or route path; check base-path handling.

### `src/routes/classes/artificer/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, WikiTable, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/PageSection.svelte, $lib/components/WikiTable.svelte, $lib/components/ChildLinkGrid.svelte, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/classes/barbarian/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/bard/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/blood-hunter/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/captain/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/champion/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/cleric/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/classes/cleric/death-domain/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/cleric/life-domain/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/druid/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/fighter/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/gunslinger/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/illrigger/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/messenger/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/monk/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/monster-hunter/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/mournbound/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/paladin/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/pugilist/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/ranger/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, WikiTable, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/PageSection.svelte, $lib/components/WikiTable.svelte, $lib/components/ChildLinkGrid.svelte, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/classes/rogue/arcane-trickster/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/assassin/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/inquisitive/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/mastermind/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/phantom/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/scout/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/soulknife/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/swashbuckler/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/rogue/thief/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/scholar/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/sorcerer/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/treasure-hunter/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/vampyr/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/warden/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/warlock/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/classes/wizard/+page.svelte`
- Purpose: Svelte component +page.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: empty route/component file.

### `src/routes/content-removal/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, ./ContentRemoval.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/contribution-terms/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, ./ContributionTerms.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/cookies/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection; uses browser localStorage.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/utils/wiki-preferences, $lib/components/PageSection.svelte, ./CookieNotice.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: localStorage.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/credits/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/legal/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/PageSection.svelte, $lib/config/site.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on config module name that does not exist in current working tree.

### `src/routes/locations/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, CampaignNote.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/monsters/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/PageSection.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/preferences/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags WikiPreferences, PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/PageSection.svelte, $lib/components/WikiPreferences.svelte, $lib/utils/paths.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/privacy/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection; uses browser localStorage.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/utils/wiki-preferences, $lib/components/PageSection.svelte, ./PrivacyNotice.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: localStorage.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/rules/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageHeader, PageSection, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/rules/fighting/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, CampaignNote.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/rules/movement/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, CampaignNote, PageHeader, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/page/layout/navigation/PageHeader.svelte, ./page.header, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/search/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags SearchEntryKind, T, SearchFilterGroup, EmptyState, ActionButton; entire implementation is commented out.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: none detected.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes, sets explicit roles.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: Search.
- Concerns: entire component is commented out.

### `src/routes/sources/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags SourceFilter, PageSection.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/utils/paths, $lib/components/PageSection.svelte, $lib/data/sources, ./Sources.scss.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/species/+layout.svelte`
- Purpose: Svelte component +layout; renders/imports component tags PageDocumentMetadata, PageHeader, AvailabilityBadges.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: $app/state page.
- Imported helpers/data: $app/state, svelte, $lib/components/AvailabilityBadges.svelte, $lib/components/PageDocumentMetadata.svelte, $lib/components/PageHeader.svelte, $lib/wiki/registry.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/species/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/species/elf/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, ChildLinkGrid.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/ChildLinkGrid.svelte, $lib/components/PageSection.svelte, $lib/wiki/navigation.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: uses aria attributes.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: imports at least one missing or case-mismatched internal target; depends on $lib/wiki modules that are deleted in current working tree.

### `src/routes/species/elf/astral-elf/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, CampaignNote.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.

### `src/routes/species/human/+page.svelte`
- Purpose: Svelte component +page; renders/imports component tags PageSection, CampaignNote.
- Props: none detected.
- Snippets/children: none detected.
- Events/callbacks: none detected.
- Stores/global state: none detected.
- Imported helpers/data: $lib/components/CampaignNote.svelte, $lib/components/PageSection.svelte.
- Associated SCSS: none detected.
- Associated types: none detected.
- Associated helpers/data files: none detected.
- Used by: no importer found.
- Generic/domain-specific: domain or route-specific.
- Reusable now: conditional.
- Accessibility behavior: none detected.
- Browser storage behavior: none detected.
- Route assumptions: yes, route/page state or route-local content is used.
- Duplicate status: no known duplicate group.
- Concerns: none detected.
