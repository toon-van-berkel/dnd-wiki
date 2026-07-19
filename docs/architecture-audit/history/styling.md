# Styling

## Current State After Phase 7

Reusable styling ownership is unchanged from Phase 6: `_breakpoints.scss`, `_mixins.scss`, `_panels.scss`, `_buttons.scss`, and `_forms.scss` own shared primitives. `tokens.scss` owns actual colour values, including Party and availability colours. Phase 7 added validation that Sass `@use` imports resolve and that shared mixins/variables either have consumers or are documented as foundation helpers.

No visual redesign or broad styling consolidation happened in Phase 7. Remaining legal/information route compositions are intentionally local styling debt.

## Historical Styling Inventory

The inventory table below began as an audit snapshot. Phase 6 updated several rows: shared breakpoints now live in `_breakpoints.scss`; reusable focus/reduced-motion behavior lives in `_mixins.scss`; panel/card surfaces use `_panels.scss`; route search/about and core component surfaces now import shared primitives. The table remains useful as a broad inventory, but the Phase 6 result section supersedes older "Mixins: -" cells for changed files.

| File | Scope | Loaded by | Selectors | Tokens | Mixins | Media queries | Hardcoded colors | z-index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| src/lib/components/AvailabilityBadges.scss | component | src/lib/components/AvailabilityBadges.svelte, src/routes/classes/+layout.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/mournbound/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/classes/rogue/arcane-trickster/+page.svelte, src/routes/classes/vampyr/+page.svelte (+4) | .availability | --border, --radius-lg, --surface, --text-secondary, --surface-raised, --status-color, --status-soft, --text-primary, --allowed, --allowed-soft | - | (max-width: 520px) | no | no |
| src/lib/components/AvailabilityBadges.svelte | component | src/routes/classes/+layout.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/mournbound/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/classes/rogue/arcane-trickster/+page.svelte, src/routes/classes/vampyr/+page.svelte, src/routes/species/+layout.svelte (+3) | - | - | - | - | yes | no |
| src/lib/components/CampaignNote.scss | component | src/lib/components/CampaignNote.svelte, src/routes/locations/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte | .campaign-note | --party-1, --party-1-soft, --campaign, --radius-sm, --campaign-soft, --party-2, --party-2-soft, --party-3, --party-3-soft, --text-primary | - | - | no | no |
| src/lib/components/CampaignNote.svelte | component | src/routes/locations/+page.svelte, src/routes/rules/fighting/+page.svelte, src/routes/rules/movement/+page.svelte, src/routes/species/elf/astral-elf/+page.svelte, src/routes/species/human/+page.svelte | - | - | - | - | no | no |
| src/lib/components/ChildLinkGrid.scss | component | src/lib/components/ChildLinkGrid.svelte, src/routes/+page.svelte, src/routes/classes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/rules/+page.svelte, src/routes/species/+page.svelte (+1) | .child-links | --border, --radius-lg, --surface, --card-background-layer, --border-strong, --surface-hover, --card-content-layer, --text-heading, --text, --background | - | - | no | yes |
| src/lib/components/ChildLinkGrid.svelte | component | src/routes/+page.svelte, src/routes/classes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte, src/routes/classes/rogue/+page.svelte, src/routes/rules/+page.svelte, src/routes/species/+page.svelte, src/routes/species/elf/+page.svelte | - | - | - | - | yes | no |
| src/lib/components/PageHeader.scss | component | src/lib/components/layout/snippets/Header.svelte, src/lib/components/PageHeader.svelte, src/routes/+page.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/+layout.svelte (+19) | .page-header | --accent-muted, --text-heading, --text-secondary | - | - | no | no |
| src/lib/components/PageHeader.svelte | component | src/routes/+page.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/+layout.svelte, src/routes/content-removal/+page.svelte, src/routes/contribution-terms/+page.svelte (+17) | - | - | - | - | yes | no |
| src/lib/components/PageSection.scss | component | src/lib/components/PageSection.svelte, src/routes/+page.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/+page.svelte, src/routes/classes/artificer/+page.svelte (+19) | .page-section | --border, --radius-lg, --surface, --shadow-card, --text-heading, --text-secondary, --text-primary, --accent | - | - | no | no |
| src/lib/components/PageSection.svelte | component | src/routes/+page.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/cleric/+page.svelte (+18) | - | - | - | - | no | no |
| src/lib/components/RuleTag.scss | component | src/lib/components/RuleTag.svelte | .tag | --border-strong, --surface-raised, --text-secondary | - | - | no | no |
| src/lib/components/RuleTag.svelte | component | src/lib/components/PageHeader.svelte | - | - | - | - | no | no |
| src/lib/components/WikiPreferences.scss | component | src/lib/components/WikiPreferences.svelte, src/routes/preferences/+page.svelte | .wiki-preferences__fields, .wiki-preferences__footer | --text-muted | - | (max-width: 42rem) | no | no |
| src/lib/components/WikiPreferences.svelte | component | src/routes/preferences/+page.svelte | - | - | - | - | no | no |
| src/lib/components/WikiTable.scss | component | src/lib/components/WikiTable.svelte, src/routes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/rogue/+page.svelte | .wiki-table | --border, --radius-lg, --surface, --shadow-card, --border-strong, --text-secondary, --text-heading, --surface-raised, --text-primary, --surface-hover | - | (max-width: 640px), (prefers-reduced-motion: reduce) | no | no |
| src/lib/components/WikiTable.svelte | component | src/routes/+page.svelte, src/routes/classes/artificer/+page.svelte, src/routes/classes/rogue/+page.svelte | - | - | - | - | yes | no |
| src/lib/components/feedback/EmptyState.svelte | component | src/routes/search/+page.svelte | - | --text-heading, --text-secondary | panels.panel | - | no | no |
| src/lib/components/forms/ActionButton.svelte | component | src/lib/components/WikiPreferences.svelte, src/routes/search/+page.svelte | - | --accent, --border, --accent-soft, --accent-muted, --surface-raised, --text-secondary | buttons.button-base | - | no | no |
| src/lib/components/forms/SelectField.svelte | component | src/lib/components/WikiPreferences.svelte | - | --text-heading, --text-muted | forms.select-control | - | yes | no |
| src/lib/components/layout/Panel.svelte | component | src/lib/components/WikiPreferences.svelte | - | --surface-raised, --text-heading, --text-secondary | panels.panel | (max-width: 42rem) | no | no |
| src/lib/components/layout/snippets/Footer.scss | component | src/lib/components/layout/snippets/Footer.svelte | .site-footer, .site-footer__inner, .site-footer__legal-inner, .site-footer__inner, .site-footer__introduction, .site-footer__brand, .site-footer__brand-mark, .site-footer__brand-text | --border, --surface, --text-secondary, --text-heading, --text-muted, --accent, --border-strong, --accent-soft, --text-primary, --accent-muted | - | (max-width: 74rem), (max-width: 54rem), (max-width: 36rem), (prefers-reduced-motion: reduce) | no | no |
| src/lib/components/layout/snippets/Footer.svelte | component | src/lib/components/layout/WikiLayout.svelte | - | - | - | - | yes | no |
| src/lib/components/layout/snippets/Header.scss | component | src/lib/components/layout/snippets/Header.svelte, src/lib/components/PageHeader.svelte | .header, .search | --layer-header, --header-height, --border, --text-heading, --border-strong, --surface, --text-primary, --text-muted, --accent, --surface-raised | - | (max-width: 899px), (max-width: 460px) | no | yes |
| src/lib/components/layout/snippets/Header.svelte | component | src/lib/components/layout/WikiLayout.svelte, src/routes/+page.svelte, src/routes/about/+page.svelte, src/routes/accessibility/+page.svelte, src/routes/ai/+page.svelte, src/routes/changelog/+page.svelte, src/routes/classes/+layout.svelte, src/routes/content-removal/+page.svelte (+18) | - | - | - | - | yes | no |
| src/lib/components/layout/snippets/Sidebar.scss | component | src/lib/components/layout/snippets/Sidebar.svelte | .sidebar | --header-height, --sidebar-width, --border, --background, --text-muted, --radius-sm, --text-secondary, --surface-raised, --text-primary, --accent-soft | - | (min-width: 900px), (max-width: 899px), (prefers-reduced-motion: reduce) | yes | yes |
| src/lib/components/layout/snippets/Sidebar.svelte | component | src/lib/components/layout/WikiLayout.svelte | - | - | - | - | yes | no |
| src/lib/components/layout/snippets/helpers/NavTree.scss | component | src/lib/components/layout/snippets/helpers/NavTree.svelte | .nav-tree | --radius-sm, --surface-raised, --text-primary, --accent-soft, --text-heading, --accent, --text-muted, --text-secondary, --navigation-icon, --border-strong | - | (prefers-reduced-motion: reduce) | no | no |
| src/lib/components/layout/snippets/helpers/NavTree.svelte | component | src/lib/components/layout/snippets/Sidebar.svelte | - | - | - | - | yes | no |
| src/lib/components/search/SearchFilterGroup.svelte | component | src/routes/search/+page.svelte | - | --text-heading, --border, --radius-sm, --surface-raised, --text-secondary, --accent-muted, --text-primary, --surface-hover, --accent, --text-muted | panels.panel, mixins.focus-ring, mixins.interactive-surface | (max-width: 22rem) | yes | no |
| src/lib/styles/_buttons.scss | global/shared | - | - | --border, --radius-sm | mixins.focus-ring, mixins.interactive-surface | - | no | no |
| src/lib/styles/_forms.scss | global/shared | - | - | --border, --radius-sm, --surface-raised, --text-primary | mixins.focus-ring, field-control | - | no | no |
| src/lib/styles/_mixins.scss | global/shared | - | - | --accent-muted | - | (prefers-reduced-motion: reduce) | no | no |
| src/lib/styles/_panels.scss | global/shared | - | - | --border, --radius-lg, --surface, --shadow-card | - | - | no | no |
| src/lib/styles/global.scss | global/shared | - | .sr-only | --background, --text-primary, --accent | - | (prefers-reduced-motion: reduce) | no | no |
| src/lib/styles/tokens.scss | global/shared | - | - | - | - | - | yes | no |
| src/lib/styles/wiki-layout.scss | global/shared | - | .wiki-shell, .sidebar-toggle | --sidebar-width, --layer-sidebar, --header-height, --content-width, --border, --text-muted, --sidebar-toggle-width, --border-strong, --radius-sm, --surface | - | (min-width: 900px), (max-width: 899px), (prefers-reduced-motion: reduce) | no | yes |
| src/routes/+page.svelte | route | - | - | --text-heading | - | - | no | no |
| src/routes/about/+page.svelte | route | - | - | - | - | - | no | no |
| src/routes/about/About.scss | route | src/routes/about/+page.svelte | .about-feature, .about-feature__marker, .about-action, .about-comparison, .about-comparison__card, .about-comparison__eyebrow, .about-links | --border, --radius-lg, --surface, --text-heading, --text-secondary, --accent, --border-strong, --radius-sm, --accent-soft, --accent-muted | - | (max-width: 48rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/accessibility/+page.svelte | route | - | - | --accent | - | (prefers-reduced-motion: reduce) | no | no |
| src/routes/accessibility/Accessibility.scss | route | src/routes/accessibility/+page.svelte | .accessibility-summary, .accessibility-feature, .accessibility-report, .accessibility-feature__icon, .accessibility-report__icon, .accessibility-report, .accessibility-code, .accessibility-comparison | --border, --radius-lg, --surface, --accent, --text-muted, --text-heading, --text-secondary, --border-strong, --radius-sm, --accent-soft | - | (max-width: 52rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/ai/+page.svelte | route | - | - | - | - | - | yes | no |
| src/routes/ai/AITransparency.scss | route | src/routes/ai/+page.svelte | .ai-definitions, .ai-gallery, .ai-card, .ai-card__image-link, .ai-card__image, .ai-card__content, .ai-card__heading, .ai-card__type | --border, --radius-lg, --surface, --text-heading, --text-secondary, --shadow-card, --border-strong, --surface-raised, --background, --accent | - | (max-width: 60rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/changelog/+page.svelte | route | - | - | - | - | - | yes | no |
| src/routes/changelog/Changelog.scss | route | src/routes/changelog/+page.svelte | .changelog-summary, .changelog-categories, .changelog-category, .changelog-category--added strong, .changelog-category--changed strong, .changelog-category--fixed strong, .changelog-category--content strong, .changelog-category--removed strong | --border, --radius-lg, --surface, --accent, --text-muted, --radius-sm, --text-secondary, --allowed, --allowed-soft, --approval | - | (max-width: 62rem), (max-width: 44rem), (prefers-reduced-motion: reduce) | yes | no |
| src/routes/classes/+page.svelte | route | - | - | --text-heading | - | - | no | no |
| src/routes/classes/artificer/+page.svelte | route | - | - | --border-strong, --surface-raised, --text-secondary | - | - | no | no |
| src/routes/classes/cleric/+page.svelte | route | - | - | --text-heading | - | - | no | no |
| src/routes/classes/rogue/+page.svelte | route | - | - | --border-strong, --surface-raised, --text-secondary | - | - | no | no |
| src/routes/content-removal/+page.svelte | route | - | - | - | - | - | no | no |
| src/routes/content-removal/ContentRemoval.scss | route | src/routes/content-removal/+page.svelte | .removal-summary, .removal-details, .removal-categories, .removal-outcomes, .removal-categories__label, .removal-notice, .removal-notice__icon, .removal-action | --border, --radius-lg, --surface, --accent, --text-muted, --text-secondary, --accent-muted, --text-heading, --limited, --limited-soft | - | (max-width: 54rem), (max-width: 42rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/contribution-terms/+page.svelte | route | - | - | - | - | - | no | no |
| src/routes/contribution-terms/ContributionTerms.scss | route | src/routes/contribution-terms/+page.svelte | .contribution-summary, .contribution-notice, .contribution-feature, .contribution-notice, .contribution-feature, .contribution-notice__icon, .contribution-feature__icon, .contribution-notice__icon | --border, --radius-lg, --surface, --accent, --text-muted, --text-heading, --text-secondary, --limited, --limited-soft, --allowed | - | (max-width: 54rem), (max-width: 42rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/cookies/+page.svelte | route | - | - | - | - | - | yes | no |
| src/routes/cookies/CookieNotice.scss | route | src/routes/cookies/+page.svelte | .cookie-summary, .cookie-status, .cookie-status__icon, .cookie-definitions, .cookie-list, .cookie-card, .cookie-empty, .cookie-empty__icon | --border, --radius-lg, --surface, --accent, --text-muted, --allowed, --allowed-soft, --text-heading, --text-secondary, --radius-sm | - | (max-width: 54rem), (max-width: 42rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/privacy/+page.svelte | route | - | - | - | - | - | no | no |
| src/routes/privacy/PrivacyNotice.scss | route | src/routes/privacy/+page.svelte | .privacy-summary, .privacy-details, .privacy-retention, .privacy-notice, .privacy-notice__icon, .privacy-storage, .privacy-provider, .privacy-purpose-list | --border, --radius-lg, --surface, --accent, --text-muted, --text-secondary, --text-heading, --border-strong, --radius-sm, --accent-soft | - | (max-width: 62rem), (max-width: 48rem), (max-width: 34rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/rules/+page.svelte | route | - | - | --text-heading | - | - | no | no |
| src/routes/search/+page.svelte | route | - | - | - | - | - | yes | no |
| src/routes/search/Search.scss | route | src/routes/search/+page.svelte | .search-page, .search-page__mobile-actions, .search-panel, .search-results__summary, .browse-sections, .search-panel, .search-panel__form, .search-panel__field | --border, --radius-lg, --surface, --shadow-card, --header-height, --text-heading, --accent, --radius-sm, --accent-soft, --accent-muted | forms.field-control | (max-width: 64rem), (max-width: 38rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/sources/+page.svelte | route | - | - | - | - | - | yes | no |
| src/routes/sources/Sources.scss | route | src/routes/sources/+page.svelte | .source-summary, .source-definitions, .source-controls, .source-search, .source-filters, .source-result-count, .source-list, .source-card | --border, --radius-lg, --surface, --accent, --text-muted, --text-heading, --text-secondary, --radius-sm, --background, --text-primary | - | (max-width: 62rem), (max-width: 42rem), (prefers-reduced-motion: reduce) | no | no |
| src/routes/species/+page.svelte | route | - | - | --text-heading | - | - | no | no |
| src/routes/species/elf/+page.svelte | route | - | - | --text-heading | - | - | no | no |

## CSS Responsibility Matrix

| Responsibility | Current location | Ideal location |
| --- | --- | --- |
| Tokens | src/lib/styles/tokens.scss | styles/tokens with party token validation |
| Resets/typography | src/lib/styles/global.scss | styles/foundations |
| Shell layout | wiki-layout.scss and layout components | layout foundations + shell components |
| Navigation | Header.scss, Sidebar.scss, NavTree.scss | navigation component styles |
| Forms | _forms.scss plus route SCSS | shared form mixins/components |
| Buttons | _buttons.scss, ActionButton, route action links | shared button mixin/component |
| Panels/cards | _panels.scss plus PageSection and route cards | shared panel/card variants |
| Tables | WikiTable.scss | WikiTable component |
| Search | Search.scss and SearchFilterGroup styles | search UI domain |
| Preferences | WikiPreferences.scss plus form/panel controls | preferences component |
| Availability | AvailabilityBadges.scss plus route examples | availability/status components |
| Legal pages | route-adjacent SCSS | route-specific layout using shared mixins |

## Duplicate Styling

Phase 6 resolved the highest-risk repeated foundations:

- `src/lib/styles/_breakpoints.scss` owns common shell/content/search/table/availability thresholds.
- `src/lib/styles/_mixins.scss` owns focus rings, reduced motion, and simple interactive transitions.
- `src/lib/styles/_panels.scss` owns panel, surface, and interactive-card foundations.
- `src/lib/styles/_buttons.scss` owns button/action foundations with size parameters.
- `AvailabilityBadges.scss`, `PageSection.scss`, `ChildLinkGrid.scss`, `WikiTable.scss`, `Search.scss`, `About.scss`, `NavTree.scss`, shell styles, `WikiPreferences.scss`, and `Panel.svelte` now use shared primitives where their repeated foundations matched.

Structural tests now guard against legacy Sass `@import`, `!important`, unresolved CSS custom properties, duplicated Party/availability token values outside `tokens.scss`, selector-emitting shared partials, NavTree double hover surfaces, and availability badge layout regressions.

Remaining duplication is lower risk and page-specific: legal/information route SCSS still has custom summary/card/list compositions. Keep those local until each page is touched, but use the shared primitives before adding new surface/control/focus stacks.
