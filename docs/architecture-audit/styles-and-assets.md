# Styles And Static Assets

## Style System

- Global entry: `src/lib/styles/styles.scss` imports base global, mixins, reset, and layout wiki styles.
- Tokens: `src/lib/styles/tokens.scss` owns colors, spacing, radii, layout sizes, z-index layers, party colors, guest colors, and availability colors.
- Mixins/partials: shared breakpoints, focus, panels, buttons, forms, and base mixins are split across `src/lib/styles` and `src/lib/styles/base`.
- Duplicated route-local SCSS exists for static legal/about/privacy/etc pages, while newer reusable components in `src/lib/pages` carry paired SCSS files.
- Global selector risk: several component SCSS files use `:global(...)` selectors for icon styling and may affect nested component output.

## Style Files

| Path | Summary | Consumers | Concerns |
| --- | --- | --- | --- |
| src/lib/components/AvailabilityBadges.scss | SCSS styles for AvailabilityBadges, including selectors .availability, .availability. | src/lib/components/AvailabilityBadges.svelte | none |
| src/lib/components/CampaignNote.scss | SCSS styles for CampaignNote, including selectors .campaign-note. | none | none |
| src/lib/components/ChildLinkGrid.scss | SCSS styles for ChildLinkGrid, including selectors .child-links. | src/lib/components/ChildLinkGrid.svelte | none |
| src/lib/components/PageHeader.scss | SCSS styles for PageHeader, including selectors .page-header. | none | none |
| src/lib/components/PageSection.scss | SCSS styles for PageSection, including selectors .page-section. | src/lib/components/PageSection.svelte | none |
| src/lib/components/RuleTag.scss | SCSS styles for RuleTag, including selectors .tag. | src/lib/components/RuleTag.svelte | none |
| src/lib/components/WikiPreferences.scss | SCSS styles for WikiPreferences, including selectors .wiki-preferences__fields, .wiki-preferences__footer, .wiki-preferences__fields, .wiki-preferences__footer. | none | none |
| src/lib/components/WikiTable.scss | SCSS styles for WikiTable, including selectors .wiki-table, .wiki-table, .wiki-table. | src/lib/components/WikiTable.svelte | none |
| src/lib/components/layout/snippets/Footer.scss | SCSS styles for Footer, including selectors .site-footer, .site-footer__inner, .site-footer__legal-inner, .site-footer__inner, .site-footer__introduction, .site-footer__brand, .site-footer__brand-mark, .site-footer__brand-mark. | src/lib/components/layout/snippets/Footer.svelte | none |
| src/lib/components/layout/snippets/Header.scss | SCSS styles for Header, including selectors .header, .search, .search__result-copy, .header, .search, .header, .search. | none | none |
| src/lib/components/layout/snippets/Sidebar.scss | SCSS styles for Sidebar, including selectors .sidebar, .sidebar, .sidebar, .sidebar. | src/lib/components/layout/snippets/Sidebar.svelte | none |
| src/lib/components/layout/snippets/helpers/NavTree.scss | SCSS styles for NavTree, including selectors .nav-tree, .nav-tree__link, .nav-tree__link, .navigation-item__icon, .nav-tree__marker, .navigation-item__icon, .navigation-item__icon, .nav-tree__link. | src/lib/components/layout/snippets/helpers/NavTree.svelte | none |
| src/lib/helpers/Icon.scss | SCSS styles for Icon, including selectors .icon, .icon--normal, .icon--in-text, .icon--change-on-hover, .icon. | src/lib/helpers/Icon.svelte | new high-priority implementation area per user context |
| src/lib/layout/Wiki.scss | SCSS styles for Wiki, including selectors .wiki__content. | src/lib/layout/Wiki.svelte | new high-priority implementation area per user context |
| src/lib/layout/snippets/Sidebar.scss | SCSS styles for Sidebar, including selectors .sidebar, .sidebar__section, .sidebar__section--resources, .sidebar__heading, .sidebar__list, .sidebar__item, .sidebar__tree-item, .sidebar__link. | src/lib/layout/snippets/Sidebar.svelte | new high-priority implementation area per user context |
| src/lib/page/layout/navigation/PageHeader.scss | SCSS styles for PageHeader, including selectors .page__header. | src/lib/page/layout/navigation/PageHeader.svelte | new high-priority implementation area per user context |
| src/lib/page/layout/navigation/snippets/Allowedin.scss | SCSS styles for Allowedin, including selectors .allowedin. | src/lib/page/layout/navigation/snippets/AllowedIn.svelte | new high-priority implementation area per user context |
| src/lib/page/layout/navigation/snippets/Breadcrumbs.scss | SCSS styles for Breadcrumbs, including selectors .breadcrumbs. | src/lib/page/layout/navigation/snippets/Breadcrumbs.svelte | new high-priority implementation area per user context |
| src/lib/page/layout/navigation/snippets/Tags.scss | SCSS styles for Tags, including selectors .tags. | src/lib/page/layout/navigation/snippets/Tags.svelte | new high-priority implementation area per user context |
| src/lib/pages/AccentDetailsCard/AccentDetailsCard.scss | SCSS styles for AccentDetailsCard, including selectors .accent-details-card, .accent-details-card--link, .accent-details-card__arrow, .accent-details-card__header, .accent-details-card__dot, .accent-details-card__arrow, .accent-details-card__details, .accent-details-card__details. | src/lib/pages/AccentDetailsCard/AccentDetailsCard.svelte | new high-priority implementation area per user context |
| src/lib/pages/CardGrid/CardGrid.scss | SCSS styles for CardGrid, including selectors .card-grid. | src/lib/pages/CardGrid/CardGrid.svelte | new high-priority implementation area per user context |
| src/lib/pages/IconCallout/IconCallout.scss | SCSS styles for IconCallout, including selectors .icon-callout, .icon-callout__header, .icon-callout__content. | src/lib/pages/IconCallout/IconCallout.svelte | new high-priority implementation area per user context |
| src/lib/pages/IconLinkCard/IconLinkCard.scss | SCSS styles for IconLinkCard, including selectors .icon-link-card, .icon-link-card__action, .icon-link-card__content, .icon-link-card__eyebrow, .icon-link-card__title, .icon-link-card__description, .icon-link-card__action, .icon-link-card. | src/lib/pages/IconLinkCard/IconLinkCard.svelte | new high-priority implementation area per user context |
| src/lib/pages/PageSection/PageSection.scss | SCSS styles for PageSection, including selectors .page-section, .page-section__toggle, .page-section__toggle, .page-section__toggle-icon. | none | new high-priority implementation area per user context |
| src/lib/pages/StatusLegend/StatusLegend.scss | SCSS styles for StatusLegend, including selectors .status-legend, .status-legend__item, .status-legend__header, .status-legend__description. | src/lib/pages/StatusLegend/StatusLegend.svelte | new high-priority implementation area per user context |
| src/lib/pages/StepList/StepList.scss | SCSS styles for StepList, including selectors .step-list, .step-list__item, .step-list__card, .step-list__card--link, .step-list__arrow, .step-list__header, .step-list__number, .step-list__arrow. | src/lib/pages/StepList/StepList.svelte | new high-priority implementation area per user context |
| src/lib/pages/TagList/TagList.scss | SCSS styles for TagList, including selectors .tag-list, .tag-list. | src/lib/pages/TagList/TagList.svelte | new high-priority implementation area per user context |
| src/lib/styles/_breakpoints.scss | SCSS styles for _breakpoints. | src/lib/components/AvailabilityBadges.scss, src/lib/components/WikiPreferences.scss, src/lib/components/WikiTable.scss, src/lib/components/layout/Panel.svelte, src/lib/components/layout/snippets/Header.scss, src/lib/components/layout/snippets/Sidebar.scss, src/lib/styles/wiki-layout.scss, src/routes/about/About.scss, src/routes/search/Search.scss | none |
| src/lib/styles/_buttons.scss | SCSS styles for _buttons. | src/lib/components/forms/ActionButton.svelte, src/routes/about/About.scss, src/routes/search/Search.scss | imports at least one missing or case-mismatched internal target |
| src/lib/styles/_forms.scss | SCSS styles for _forms. | src/lib/components/forms/SelectField.svelte, src/routes/search/Search.scss | imports at least one missing or case-mismatched internal target |
| src/lib/styles/_panels.scss | SCSS styles for _panels. | src/lib/components/AvailabilityBadges.scss, src/lib/components/ChildLinkGrid.scss, src/lib/components/PageSection.scss, src/lib/components/WikiTable.scss, src/lib/components/feedback/EmptyState.svelte, src/lib/components/layout/Panel.svelte, src/lib/components/search/SearchFilterGroup.svelte, src/routes/about/About.scss, src/routes/search/Search.scss | none |
| src/lib/styles/base/_global.scss | SCSS styles for _global, including selectors .sr-only. | src/lib/styles/styles.scss | none |
| src/lib/styles/base/_mixins.scss | SCSS styles for _mixins. | src/lib/components/ChildLinkGrid.scss, src/lib/components/WikiTable.scss, src/lib/components/layout/snippets/Sidebar.scss, src/lib/components/layout/snippets/helpers/NavTree.scss, src/lib/page/layout/navigation/PageHeader.scss, src/lib/styles/_panels.scss, src/lib/styles/styles.scss, src/lib/styles/wiki-layout.scss, src/routes/search/Search.scss | none |
| src/lib/styles/base/_reset.scss | SCSS styles for _reset. | src/lib/styles/styles.scss | none |
| src/lib/styles/layout/_wiki.scss | SCSS styles for _wiki. | src/lib/styles/styles.scss | none |
| src/lib/styles/styles.scss | SCSS styles for styles. | src/routes/+layout.svelte | none |
| src/lib/styles/tokens.scss | SCSS styles for tokens. | src/lib/styles/base/_global.scss | none |
| src/lib/styles/wiki-layout.scss | SCSS styles for wiki-layout, including selectors .wiki-shell, .sidebar-toggle, .wiki-shell__grid--sidebar-collapsed, .wiki-shell__sidebar-slot, .wiki-shell, .sidebar-toggle, .wiki-shell, .sidebar-toggle. | none | none |
| src/routes/about/About.scss | SCSS styles for About, including selectors .about-feature, .about-feature__marker, .about-action, .about-comparison, .about-comparison__card, .about-comparison__eyebrow, .about-links, .about-comparison. | src/routes/about/+page.svelte | imports at least one missing or case-mismatched internal target |
| src/routes/accessibility/Accessibility.scss | SCSS styles for Accessibility, including selectors .accessibility-summary, .accessibility-feature, .accessibility-report, .accessibility-feature__icon, .accessibility-report__icon, .accessibility-report, .accessibility-code, .accessibility-comparison. | src/routes/accessibility/+page.svelte | none |
| src/routes/ai/AITransparency.scss | SCSS styles for AITransparency, including selectors .ai-definitions, .ai-gallery, .ai-card, .ai-card__image-link, .ai-card__image, .ai-card__content, .ai-card__heading, .ai-card__type. | src/routes/ai/+page.svelte | none |
| src/routes/changelog/Changelog.scss | SCSS styles for Changelog, including selectors .changelog-summary, .changelog-categories, .changelog-category, .changelog-category--added, .changelog-category--changed, .changelog-category--fixed, .changelog-category--content, .changelog-category--removed. | src/routes/changelog/+page.svelte | none |
| src/routes/content-removal/ContentRemoval.scss | SCSS styles for ContentRemoval, including selectors .removal-summary, .removal-details, .removal-categories, .removal-outcomes, .removal-categories__label, .removal-notice, .removal-notice__icon, .removal-action. | src/routes/content-removal/+page.svelte | none |
| src/routes/contribution-terms/ContributionTerms.scss | SCSS styles for ContributionTerms, including selectors .contribution-summary, .contribution-notice, .contribution-feature, .contribution-notice, .contribution-feature, .contribution-notice__icon, .contribution-feature__icon, .contribution-notice__icon. | src/routes/contribution-terms/+page.svelte | none |
| src/routes/cookies/CookieNotice.scss | SCSS styles for CookieNotice, including selectors .cookie-summary, .cookie-status, .cookie-status__icon, .cookie-definitions, .cookie-list, .cookie-card, .cookie-empty, .cookie-empty__icon. | src/routes/cookies/+page.svelte | none |
| src/routes/privacy/PrivacyNotice.scss | SCSS styles for PrivacyNotice, including selectors .privacy-summary, .privacy-details, .privacy-retention, .privacy-notice, .privacy-notice__icon, .privacy-storage, .privacy-provider, .privacy-purpose-list. | src/routes/privacy/+page.svelte | none |
| src/routes/search/Search.scss | SCSS styles for Search, including selectors .search-page, .search-page__mobile-actions, .search-panel, .search-panel__form, .search-panel__field, .form-control, .search-panel, .search-results. | none | none |
| src/routes/sources/Sources.scss | SCSS styles for Sources, including selectors .source-summary, .source-definitions, .source-controls, .source-search, .source-filters, .source-filter--active, .source-result-count, .source-list. | src/routes/sources/+page.svelte | none |

## Static Assets

- `static/classes/**/card-{gender}-{size}.webp` contains responsive card art for class and subclass pages.
- `static/species/**/card-{gender}-{size}.webp` contains responsive card art for species pages.
- `static/others/*.png` contains older section imagery for classes/rules/species/locations/monsters/movement-style pages.
- `static/dndportal_wiki-74x32.svg` is the site logo.
- `src/lib/assets/icons/**/*.svg` is imported by the newer `src/lib/helpers/Icon-data.ts` map.

| Path | Type | Purpose | Referenced | Concerns |
| --- | --- | --- | --- | --- |
| src/lib/assets/icons/ability/charisma.svg | svg | SVG icon asset for Charisma. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/ability/constitution.svg | svg | SVG icon asset for Constitution. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/ability/dexterity.svg | svg | SVG icon asset for Dexterity. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/ability/intelligence.svg | svg | SVG icon asset for Intelligence. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/ability/strength.svg | svg | SVG icon asset for Strength. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/ability/wisdom.svg | svg | SVG icon asset for Wisdom. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/ac.svg | svg | SVG icon asset for Ac. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/attunement.svg | svg | SVG icon asset for Attunement. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/bonus.svg | svg | SVG icon asset for Bonus. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/light.svg | svg | SVG icon asset for Light. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/penalty.svg | svg | SVG icon asset for Penalty. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/range.svg | svg | SVG icon asset for Range. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/saving-throw.svg | svg | SVG icon asset for Saving Throw. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/skillcheck.svg | svg | SVG icon asset for Skillcheck. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/terrain.svg | svg | SVG icon asset for Terrain. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/test.svg | svg | SVG icon asset for Test. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/attribute/vision.svg | svg | SVG icon asset for Vision. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/candlekeep.svg | svg | SVG icon asset for Candlekeep. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/curse-of-strahd.svg | svg | SVG icon asset for Curse Of Strahd. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/descent-into-avernus.svg | svg | SVG icon asset for Descent Into Avernus. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/elemental-evil.svg | svg | SVG icon asset for Elemental Evil. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/hoard-of-the-dragon-queen.svg | svg | SVG icon asset for Hoard Of The Dragon Queen. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/light-of-xaryxis.svg | svg | SVG icon asset for Light Of Xaryxis. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/out-of-the-abyss.svg | svg | SVG icon asset for Out Of The Abyss. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/rime-of-the-frostmaiden.svg | svg | SVG icon asset for Rime Of The Frostmaiden. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/storm-kings-thunder.svg | svg | SVG icon asset for Storm Kings Thunder. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/tomb-of-annihilation.svg | svg | SVG icon asset for Tomb Of Annihilation. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/waterdeep.svg | svg | SVG icon asset for Waterdeep. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/campaign/yawning-portal.svg | svg | SVG icon asset for Yawning Portal. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/artificer.svg | svg | SVG icon asset for Artificer. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/barbarian.svg | svg | SVG icon asset for Barbarian. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/bard.svg | svg | SVG icon asset for Bard. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/cleric.svg | svg | SVG icon asset for Cleric. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/druid.svg | svg | SVG icon asset for Druid. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/fighter.svg | svg | SVG icon asset for Fighter. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/monk.svg | svg | SVG icon asset for Monk. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/paladin.svg | svg | SVG icon asset for Paladin. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/ranger.svg | svg | SVG icon asset for Ranger. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/rogue.svg | svg | SVG icon asset for Rogue. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/sorcerer.svg | svg | SVG icon asset for Sorcerer. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/warlock.svg | svg | SVG icon asset for Warlock. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/class/wizard.svg | svg | SVG icon asset for Wizard. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/action.svg | svg | SVG icon asset for Action. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/bonus-action.svg | svg | SVG icon asset for Bonus Action. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/initiative.svg | svg | SVG icon asset for Initiative. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/melee.svg | svg | SVG icon asset for Melee. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/ranged.svg | svg | SVG icon asset for Ranged. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/reach.svg | svg | SVG icon asset for Reach. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/reaction.svg | svg | SVG icon asset for Reaction. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/round.svg | svg | SVG icon asset for Round. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/combat/target.svg | svg | SVG icon asset for Target. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/blinded.svg | svg | SVG icon asset for Blinded. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/charmed.svg | svg | SVG icon asset for Charmed. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/deafened.svg | svg | SVG icon asset for Deafened. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/exhaustion.svg | svg | SVG icon asset for Exhaustion. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/frightened.svg | svg | SVG icon asset for Frightened. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/grappled.svg | svg | SVG icon asset for Grappled. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/incapacitated.svg | svg | SVG icon asset for Incapacitated. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/invisible.svg | svg | SVG icon asset for Invisible. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/paralyzed.svg | svg | SVG icon asset for Paralyzed. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/petrified.svg | svg | SVG icon asset for Petrified. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/poisoned.svg | svg | SVG icon asset for Poisoned. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/prone.svg | svg | SVG icon asset for Prone. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/restrained.svg | svg | SVG icon asset for Restrained. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/silenced.svg | svg | SVG icon asset for Silenced. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/sleep.svg | svg | SVG icon asset for Sleep. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/stunned.svg | svg | SVG icon asset for Stunned. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/condition/unconscious.svg | svg | SVG icon asset for Unconscious. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/d20test/attacked.svg | svg | SVG icon asset for Attacked. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/d20test/attacking.svg | svg | SVG icon asset for Attacking. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/d20test/saving-throw.svg | svg | SVG icon asset for Saving Throw. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/acid.svg | svg | SVG icon asset for Acid. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/bludgeoning.svg | svg | SVG icon asset for Bludgeoning. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/cold.svg | svg | SVG icon asset for Cold. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/fire.svg | svg | SVG icon asset for Fire. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/force.svg | svg | SVG icon asset for Force. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/immunity.svg | svg | SVG icon asset for Immunity. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/lightning.svg | svg | SVG icon asset for Lightning. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/necrotic.svg | svg | SVG icon asset for Necrotic. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/piercing.svg | svg | SVG icon asset for Piercing. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/poison.svg | svg | SVG icon asset for Poison. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/psychic.svg | svg | SVG icon asset for Psychic. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/radiant.svg | svg | SVG icon asset for Radiant. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/resistance.svg | svg | SVG icon asset for Resistance. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/slashing.svg | svg | SVG icon asset for Slashing. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/thunder.svg | svg | SVG icon asset for Thunder. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/damage/vulnerability.svg | svg | SVG icon asset for Vulnerability. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/advantage.svg | svg | SVG icon asset for Advantage. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/d10.svg | svg | SVG icon asset for D10. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/d12.svg | svg | SVG icon asset for D12. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/d20.svg | svg | SVG icon asset for D20. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/d4.svg | svg | SVG icon asset for D4. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/d6.svg | svg | SVG icon asset for D6. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/d8.svg | svg | SVG icon asset for D8. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/disadvantage.svg | svg | SVG icon asset for Disadvantage. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/dice/roll.svg | svg | SVG icon asset for Roll. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/archive.svg | svg | SVG icon asset for Archive. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/armor.svg | svg | SVG icon asset for Armor. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/book.svg | svg | SVG icon asset for Book. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/location.svg | svg | SVG icon asset for Location. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/loot.svg | svg | SVG icon asset for Loot. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/magic-item.svg | svg | SVG icon asset for Magic Item. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/map.svg | svg | SVG icon asset for Map. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/mount.svg | svg | SVG icon asset for Mount. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/object.svg | svg | SVG icon asset for Object. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/organization.svg | svg | SVG icon asset for Organization. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/pack.svg | svg | SVG icon asset for Pack. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/person.svg | svg | SVG icon asset for Person. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/pet.svg | svg | SVG icon asset for Pet. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/potion.svg | svg | SVG icon asset for Potion. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/ring.svg | svg | SVG icon asset for Ring. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/scroll.svg | svg | SVG icon asset for Scroll. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/ship.svg | svg | SVG icon asset for Ship. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/spellbook.svg | svg | SVG icon asset for Spellbook. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/summon.svg | svg | SVG icon asset for Summon. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/time.svg | svg | SVG icon asset for Time. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/tool.svg | svg | SVG icon asset for Tool. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/trinket.svg | svg | SVG icon asset for Trinket. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/vehicle.svg | svg | SVG icon asset for Vehicle. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/wand.svg | svg | SVG icon asset for Wand. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/weapon.svg | svg | SVG icon asset for Weapon. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/entity/world.svg | svg | SVG icon asset for World. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/adventure-book.svg | svg | SVG icon asset for Adventure Book. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/campaign.svg | svg | SVG icon asset for Campaign. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/character.svg | svg | SVG icon asset for Character. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/combat.svg | svg | SVG icon asset for Combat. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/concentration.svg | svg | SVG icon asset for Concentration. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/dm.svg | svg | SVG icon asset for Dm. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/explore.svg | svg | SVG icon asset for Explore. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/hazard.svg | svg | SVG icon asset for Hazard. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/inspiration.svg | svg | SVG icon asset for Inspiration. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/lock.svg | svg | SVG icon asset for Lock. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/monster.svg | svg | SVG icon asset for Monster. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/party.svg | svg | SVG icon asset for Party. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/puzzle.svg | svg | SVG icon asset for Puzzle. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/rest.svg | svg | SVG icon asset for Rest. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/social.svg | svg | SVG icon asset for Social. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/source-book.svg | svg | SVG icon asset for Source Book. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/spell.svg | svg | SVG icon asset for Spell. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/game/trap.svg | svg | SVG icon asset for Trap. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/hp/blood.svg | svg | SVG icon asset for Blood. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/hp/empty.svg | svg | SVG icon asset for Empty. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/hp/full.svg | svg | SVG icon asset for Full. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/hp/half.svg | svg | SVG icon asset for Half. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/hp/temp.svg | svg | SVG icon asset for Temp. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/bastion.svg | svg | SVG icon asset for Bastion. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/camp.svg | svg | SVG icon asset for Camp. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/castle.svg | svg | SVG icon asset for Castle. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/dungeon.svg | svg | SVG icon asset for Dungeon. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/forest.svg | svg | SVG icon asset for Forest. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/hut.svg | svg | SVG icon asset for Hut. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/mountain.svg | svg | SVG icon asset for Mountain. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/portal.svg | svg | SVG icon asset for Portal. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/tavern.svg | svg | SVG icon asset for Tavern. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/tower.svg | svg | SVG icon asset for Tower. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/location/village.svg | svg | SVG icon asset for Village. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/adventurers-league.svg | svg | SVG icon asset for Adventurers League. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/critical-role.svg | svg | SVG icon asset for Critical Role. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/dnd-beyond.svg | svg | SVG icon asset for Dnd Beyond. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/dnd.svg | svg | SVG icon asset for Dnd. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/fantasy-grounds.svg | svg | SVG icon asset for Fantasy Grounds. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/foundry.svg | svg | SVG icon asset for Foundry. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/owlbear-rodeo.svg | svg | SVG icon asset for Owlbear Rodeo. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/roll20.svg | svg | SVG icon asset for Roll20. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/logo/tiddlywiki.svg | svg | SVG icon asset for Tiddlywiki. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/aberration.svg | svg | SVG icon asset for Aberration. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/beast.svg | svg | SVG icon asset for Beast. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/celestial.svg | svg | SVG icon asset for Celestial. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/construct.svg | svg | SVG icon asset for Construct. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/dragon.svg | svg | SVG icon asset for Dragon. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/elemental.svg | svg | SVG icon asset for Elemental. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/fae.svg | svg | SVG icon asset for Fae. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/fiend.svg | svg | SVG icon asset for Fiend. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/giant.svg | svg | SVG icon asset for Giant. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/humanoid.svg | svg | SVG icon asset for Humanoid. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/monstrosity.svg | svg | SVG icon asset for Monstrosity. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/ooze.svg | svg | SVG icon asset for Ooze. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/plant.svg | svg | SVG icon asset for Plant. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/monster/undead.svg | svg | SVG icon asset for Undead. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/movement/burrowing.svg | svg | SVG icon asset for Burrowing. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/movement/climbing.svg | svg | SVG icon asset for Climbing. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/movement/flying.svg | svg | SVG icon asset for Flying. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/movement/swimming.svg | svg | SVG icon asset for Swimming. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/movement/walking.svg | svg | SVG icon asset for Walking. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/proficiency/expertise.svg | svg | SVG icon asset for Expertise. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/proficiency/half.svg | svg | SVG icon asset for Half. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/proficiency/proficient.svg | svg | SVG icon asset for Proficient. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/proficiency/unskilled.svg | svg | SVG icon asset for Unskilled. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/roll20/advantage.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/attacked-adv.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/attacked-dis.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/attacking-adv.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/attacking-dis.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/blinded.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/bloodied.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/burrowing.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/charmed.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/climbing.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/concentration-1.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/concentration-2.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/deafened.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/disadvantage.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/flying.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/frightened.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/grappled.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/incapacitated.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/invisible.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/paralyzed.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/petrified.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/poisoned.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/prone.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/restrained.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/saving-adv.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/saving-dis.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/silenced.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/sleep.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/stunned.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/swimming.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/unconscious.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/roll20/walking.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| src/lib/assets/icons/skill/acrobatics.svg | svg | SVG icon asset for Acrobatics. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/animal-handling.svg | svg | SVG icon asset for Animal Handling. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/arcana.svg | svg | SVG icon asset for Arcana. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/athletics.svg | svg | SVG icon asset for Athletics. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/deception.svg | svg | SVG icon asset for Deception. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/history.svg | svg | SVG icon asset for History. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/insight.svg | svg | SVG icon asset for Insight. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/intimidation.svg | svg | SVG icon asset for Intimidation. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/investigation.svg | svg | SVG icon asset for Investigation. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/medicine.svg | svg | SVG icon asset for Medicine. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/nature.svg | svg | SVG icon asset for Nature. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/perception.svg | svg | SVG icon asset for Perception. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/performance.svg | svg | SVG icon asset for Performance. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/persuasion.svg | svg | SVG icon asset for Persuasion. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/religion.svg | svg | SVG icon asset for Religion. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/sleight-of-hand.svg | svg | SVG icon asset for Sleight Of Hand. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/stealth.svg | svg | SVG icon asset for Stealth. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/skill/survival.svg | svg | SVG icon asset for Survival. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-1-0.svg | svg | SVG icon asset for Slot 1 0. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-1-1.svg | svg | SVG icon asset for Slot 1 1. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-2-0.svg | svg | SVG icon asset for Slot 2 0. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-2-1.svg | svg | SVG icon asset for Slot 2 1. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-2-2.svg | svg | SVG icon asset for Slot 2 2. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-3-0.svg | svg | SVG icon asset for Slot 3 0. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-3-1.svg | svg | SVG icon asset for Slot 3 1. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-3-2.svg | svg | SVG icon asset for Slot 3 2. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-3-3.svg | svg | SVG icon asset for Slot 3 3. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-4-0.svg | svg | SVG icon asset for Slot 4 0. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-4-1.svg | svg | SVG icon asset for Slot 4 1. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-4-2.svg | svg | SVG icon asset for Slot 4 2. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-4-3.svg | svg | SVG icon asset for Slot 4 3. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/slot/slot-4-4.svg | svg | SVG icon asset for Slot 4 4. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/abjuration.svg | svg | SVG icon asset for Abjuration. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/concentration.svg | svg | SVG icon asset for Concentration. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/conjuration.svg | svg | SVG icon asset for Conjuration. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/consumed.svg | svg | SVG icon asset for Consumed. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/cost.svg | svg | SVG icon asset for Cost. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/divination.svg | svg | SVG icon asset for Divination. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/enchantment.svg | svg | SVG icon asset for Enchantment. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/evocation.svg | svg | SVG icon asset for Evocation. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/illusion.svg | svg | SVG icon asset for Illusion. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/instantaneous.svg | svg | SVG icon asset for Instantaneous. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/material.svg | svg | SVG icon asset for Material. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/necromancy.svg | svg | SVG icon asset for Necromancy. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/octagon.svg | svg | SVG icon asset for Octagon. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/ritual.svg | svg | SVG icon asset for Ritual. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/somatic.svg | svg | SVG icon asset for Somatic. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/transmutation.svg | svg | SVG icon asset for Transmutation. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/upcast.svg | svg | SVG icon asset for Upcast. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/spell/vocal.svg | svg | SVG icon asset for Vocal. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/circle.svg | svg | SVG icon asset for Circle. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/cone.svg | svg | SVG icon asset for Cone. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/cube.svg | svg | SVG icon asset for Cube. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/cylinder.svg | svg | SVG icon asset for Cylinder. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/emanation.svg | svg | SVG icon asset for Emanation. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/line.svg | svg | SVG icon asset for Line. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/self.svg | svg | SVG icon asset for Self. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/sphere.svg | svg | SVG icon asset for Sphere. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/square.svg | svg | SVG icon asset for Square. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/touch.svg | svg | SVG icon asset for Touch. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/target/wall.svg | svg | SVG icon asset for Wall. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/bubble.svg | svg | SVG icon asset for Bubble. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/build.svg | svg | SVG icon asset for Build. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/cog.svg | svg | SVG icon asset for Cog. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/cross.svg | svg | SVG icon asset for Cross. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/home.svg | svg | SVG icon asset for Home. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/not-applicable.svg | svg | SVG icon asset for Not Applicable. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/search.svg | svg | SVG icon asset for Search. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/star.svg | svg | SVG icon asset for Star. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/tick.svg | svg | SVG icon asset for Tick. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/util/trade.svg | svg | SVG icon asset for Trade. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/arrow.svg | svg | SVG icon asset for Arrow. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/battleaxe.svg | svg | SVG icon asset for Battleaxe. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/bow.svg | svg | SVG icon asset for Bow. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/club.svg | svg | SVG icon asset for Club. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/crossbow.svg | svg | SVG icon asset for Crossbow. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/dagger.svg | svg | SVG icon asset for Dagger. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/flail.svg | svg | SVG icon asset for Flail. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/glaive.svg | svg | SVG icon asset for Glaive. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/halberd.svg | svg | SVG icon asset for Halberd. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/hammer.svg | svg | SVG icon asset for Hammer. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/handaxe.svg | svg | SVG icon asset for Handaxe. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/lance.svg | svg | SVG icon asset for Lance. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/mace.svg | svg | SVG icon asset for Mace. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/morningstar.svg | svg | SVG icon asset for Morningstar. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/musket.svg | svg | SVG icon asset for Musket. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/pike.svg | svg | SVG icon asset for Pike. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/pistol.svg | svg | SVG icon asset for Pistol. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/rapier.svg | svg | SVG icon asset for Rapier. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/scimitar.svg | svg | SVG icon asset for Scimitar. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/sickle.svg | svg | SVG icon asset for Sickle. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/sling.svg | svg | SVG icon asset for Sling. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/spear.svg | svg | SVG icon asset for Spear. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/staff.svg | svg | SVG icon asset for Staff. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/strike.svg | svg | SVG icon asset for Strike. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/sword.svg | svg | SVG icon asset for Sword. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/trident.svg | svg | SVG icon asset for Trident. | src/lib/helpers/Icon-data.ts | none |
| src/lib/assets/icons/weapon/whip.svg | svg | SVG icon asset for Whip. | src/lib/helpers/Icon-data.ts | none |
| static/.nojekyll | other | Static asset served from the site root. | no direct importer/string reference found | none |
| static/classes/artificer/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/artificer/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/artificer/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/artificer/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/artificer/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/artificer/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/barbarian/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/barbarian/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/barbarian/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/barbarian/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/barbarian/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/barbarian/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/bard/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/bard/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/bard/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/bard/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/bard/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/bard/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/blood-hunter/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/blood-hunter/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/blood-hunter/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/blood-hunter/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/blood-hunter/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/blood-hunter/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/captain/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/captain/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/captain/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/captain/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/captain/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/captain/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/champion/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/champion/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/champion/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/champion/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/champion/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/champion/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/death-domain/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/death-domain/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/death-domain/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/death-domain/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/death-domain/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/death-domain/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/life-domain/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/life-domain/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/life-domain/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/life-domain/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/life-domain/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/cleric/life-domain/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/druid/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/druid/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/druid/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/druid/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/druid/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/druid/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/fighter/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/fighter/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/fighter/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/fighter/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/fighter/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/fighter/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/gunslinger/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/gunslinger/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/gunslinger/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/gunslinger/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/gunslinger/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/gunslinger/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/illrigger/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/illrigger/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/illrigger/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/illrigger/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/illrigger/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/illrigger/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/messenger/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/messenger/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/messenger/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/messenger/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/messenger/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/messenger/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monk/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monk/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monk/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monk/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monk/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monk/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monster-hunter/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monster-hunter/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monster-hunter/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monster-hunter/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monster-hunter/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/monster-hunter/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/mournbound/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/mournbound/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/mournbound/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/mournbound/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/mournbound/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/mournbound/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/paladin/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/paladin/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/paladin/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/paladin/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/paladin/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/paladin/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/pugilist/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/pugilist/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/pugilist/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/pugilist/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/pugilist/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/pugilist/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/ranger/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/ranger/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/ranger/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/ranger/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/ranger/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/ranger/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/arcane-trickster/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/arcane-trickster/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/arcane-trickster/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/assassin/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/assassin/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/assassin/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/inquisitive/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/inquisitive/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/inquisitive/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/mastermind/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/mastermind/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/mastermind/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/phantom/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/phantom/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/phantom/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/scout/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/scout/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/scout/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/soulknife/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/soulknife/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/soulknife/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/swashbuckler/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/swashbuckler/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/swashbuckler/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/thief/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/thief/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/rogue/thief/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/scholar/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/scholar/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/scholar/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/scholar/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/scholar/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/scholar/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/sorcerer/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/sorcerer/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/sorcerer/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/sorcerer/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/sorcerer/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/sorcerer/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/treasure-hunter/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/treasure-hunter/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/treasure-hunter/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/treasure-hunter/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/treasure-hunter/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/treasure-hunter/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/vampyr/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/vampyr/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/vampyr/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/vampyr/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/vampyr/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/vampyr/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warden/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warden/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warden/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warden/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warden/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warden/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warlock/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warlock/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warlock/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warlock/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warlock/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/warlock/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/wizard/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/wizard/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/wizard/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/wizard/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/wizard/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/classes/wizard/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/dndportal_wiki-74x32.svg | svg | SVG icon asset for Dndportal Wiki 74x32. | no direct importer/string reference found | none |
| static/others/classes-diagram.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| static/others/crossed-swords.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| static/others/location-pin.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| static/others/monster-skull.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| static/others/movement-running.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| static/others/paw.png | image | PNG image asset, likely static wiki imagery. | no direct importer/string reference found | none |
| static/robots.txt | other | Static asset served from the site root. | no direct importer/string reference found | none |
| static/species/elf/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/elf/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/elf/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/elf/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/elf/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/elf/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/human/card-female-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/human/card-female-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/human/card-female-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/human/card-male-l.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/human/card-male-m.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |
| static/species/human/card-male-s.webp | image | WEBP image asset, likely responsive class/species card artwork. | no direct importer/string reference found | none |