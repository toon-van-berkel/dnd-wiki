# Sources Of Truth

This is factual only and does not propose a replacement directory tree.

| Concept | CurrentSources | Consumers | DuplicateDefinitions | IdentifierStability | RenameImpact | ReliableSingleSource | FutureCanonicalResponsibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| person | src/lib/config/dms.ts and route prose | see inventory consumers | names repeated in legal/about/credits/home data | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| Dungeon Master | src/lib/config/dms.ts plus party dmId strings | see inventory consumers | dmId values in parties.ts do not match dms keys | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| player | src/lib/config/parties.ts member strings | see inventory consumers | guest players in src/routes/page.data.ts | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| guest player | src/routes/page.data.ts | see inventory consumers | not present in config | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| party | src/lib/config/parties.ts | see inventory consumers | sidebar data and prose repeat party concepts | unstable or mixed | see hardcoded occurrences and imports | Partial | to be designed after this factual audit |
| campaign membership | src/lib/config/parties.ts member string fields | see inventory consumers | not normalized as person ids | unstable or mixed | see hardcoded occurrences and imports | Partial | to be designed after this factual audit |
| campaign colors | src/lib/config/parties.ts token names and src/lib/styles/tokens.scss token values | see inventory consumers | two-file coupling required | unstable or mixed | see hardcoded occurrences and imports | Partial | to be designed after this factual audit |
| page identity | deleted $lib/wiki registry expected; current route-local files and sidebar data | see inventory consumers | registry missing | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| page URL | route filesystem, sidebar data, route data, deleted registry consumers | see inventory consumers | many hardcoded hrefs | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| page title | route prose/header/meta/sidebar/registry expected | see inventory consumers | many route-local strings | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| page description | route prose/header/meta/deleted registry expected | see inventory consumers | many route-local strings | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| page icon | src/lib/helpers/Icon-data.ts plus sidebar/home data references | see inventory consumers | new map and deleted wiki icons compete | unstable or mixed | see hardcoded occurrences and imports | Partial | to be designed after this factual audit |
| page tags | src/lib/page/layout/navigation/snippets/Tags-data.ts and deleted search tags expected | see inventory consumers | competing systems | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| page availability | src/lib/page/layout/navigation/snippets/AllowedIn-data.ts and src/lib/data/availability.ts | see inventory consumers | legacy data commented; new local data | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| navigation ordering | src/lib/layout/snippets/Sidebar-Data.ts and deleted $lib/wiki/navigation expected | see inventory consumers | competing systems | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| footer grouping | deleted registry expected by old Footer | see inventory consumers | Footer not active in root layout | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| breadcrumbs | src/lib/page/layout/navigation/snippets/Breadcrumbs-helpers.ts | see inventory consumers | path-derived only | unstable or mixed | see hardcoded occurrences and imports | Partial | to be designed after this factual audit |
| metadata | src/lib/page/Metadata.svelte plus route-local page.meta.ts and old PageDocumentMetadata | see inventory consumers | duplicated site identity/social data | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| site identity | src/lib/config/config.ts and route meta/prose | see inventory consumers | name/domain repeated | unstable or mixed | see hardcoded occurrences and imports | Partial | to be designed after this factual audit |
| author | src/lib/config/config.ts and route meta/prose | see inventory consumers | Toon repeated | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| repository | src/lib/config/config.ts and route-local URLs | see inventory consumers | GitHub URL repeated | unstable or mixed | see hardcoded occurrences and imports | No | to be designed after this factual audit |
| changelog | src/lib/data/changelog.ts | see inventory consumers | route renders from data | stable enough | see hardcoded occurrences and imports | Yes | to be designed after this factual audit |
| sources | src/lib/data/sources.ts | see inventory consumers | route renders from data | stable enough | see hardcoded occurrences and imports | Yes | to be designed after this factual audit |

## Repeated Shared Values

| Value | File | Line | Context |
| --- | --- | --- | --- |
| D&D Portal | .github/pull_request_template.md | 11 | - [ ] I have read and accept the D&D Portal Contribution Terms. |
| LuckyClover | scripts/test-wiki-search.mjs | 361 | assert.doesNotMatch(sidebarSource, /Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| FCGoonUnited | scripts/test-wiki-search.mjs | 361 | assert.doesNotMatch(sidebarSource, /Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| FemboyAss | scripts/test-wiki-search.mjs | 361 | assert.doesNotMatch(sidebarSource, /Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| Crops | scripts/test-wiki-search.mjs | 361 | assert.doesNotMatch(sidebarSource, /Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| Toon | scripts/test-wiki-search.mjs | 363 | assert.doesNotMatch(preferencesSource, /Toon van Berkel\|Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| Toon van Berkel | scripts/test-wiki-search.mjs | 363 | assert.doesNotMatch(preferencesSource, /Toon van Berkel\|Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| LuckyClover | scripts/test-wiki-search.mjs | 363 | assert.doesNotMatch(preferencesSource, /Toon van Berkel\|Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| FCGoonUnited | scripts/test-wiki-search.mjs | 363 | assert.doesNotMatch(preferencesSource, /Toon van Berkel\|Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| FemboyAss | scripts/test-wiki-search.mjs | 363 | assert.doesNotMatch(preferencesSource, /Toon van Berkel\|Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| Crops | scripts/test-wiki-search.mjs | 363 | assert.doesNotMatch(preferencesSource, /Toon van Berkel\|Party [1-8]\|LuckyClover\|FCGoonUnited\|FemboyAss\|Crops/); |
| 750 | src/lib/components/PageHeader.scss | 8 | font-weight: 750; |
| 750 | src/lib/components/WikiTable.scss | 53 | font-weight: 750; |
| 750 | src/lib/components/layout/snippets/Footer.scss | 86 | font-weight: 750; |
| https://github.com/toon-van-berkel/dnd-wiki | src/lib/components/layout/snippets/Footer.svelte | 15 | href: 'https://github.com/toon-van-berkel/dnd-wiki', |
| https://github.com/toon-van-berkel/dnd-wiki | src/lib/components/layout/snippets/Footer.svelte | 20 | href: 'https://github.com/toon-van-berkel/dnd-wiki/issues/new', |
| https://github.com/toon-van-berkel/dnd-wiki | src/lib/components/layout/snippets/Footer.svelte | 25 | href: 'https://github.com/toon-van-berkel/dnd-wiki/issues/new', |
| D&D Portal | src/lib/components/layout/snippets/Footer.svelte | 250 | D&D Portal is unofficial fan content and is not affiliated with, |
| D&D Portal | src/lib/components/layout/snippets/Header.svelte | 53 | <a class="header__brand" href={resolveAppPath('/')} aria-label="D&D Portal wiki home"> |
| D&D Portal | src/lib/components/layout/snippets/Header.svelte | 54 | <img src={resolveAssetPath('/dndportal_wiki-74x32.svg')} alt="D&D Portal" width="74" height="32" /> |
| Rules Wiki | src/lib/components/layout/snippets/Header.svelte | 56 | <span class="header__name">Rules Wiki</span> |
| 750 | src/lib/components/layout/snippets/Sidebar.scss | 28 | font-weight: 750; |
| 750 | src/lib/components/search/SearchFilterGroup.svelte | 98 | font-weight: 750; |
| https://github.com/toon-van-berkel/dnd-wiki | src/lib/config/config.ts | 2 | const githubUrlBase = 'https://github.com/toon-van-berkel/dnd-wiki'; |
| D&D Portal | src/lib/config/config.ts | 10 | short: 'D&D Portal', |
| D&D Portal | src/lib/config/config.ts | 11 | long: 'D&D Portal Wiki' |
| D&D Portal Wiki | src/lib/config/config.ts | 11 | long: 'D&D Portal Wiki' |
| Toon | src/lib/config/config.ts | 18 | friendly: 'Toon van Berkel' |
| Toon van Berkel | src/lib/config/config.ts | 18 | friendly: 'Toon van Berkel' |
| Toon | src/lib/config/dms.ts | 13 | full: 'Toon van Berkel', |
| Toon van Berkel | src/lib/config/dms.ts | 13 | full: 'Toon van Berkel', |
| Toon | src/lib/config/dms.ts | 14 | short: 'Toon' |
| Tijs | src/lib/config/dms.ts | 28 | full: 'Tijs van Klaveren', |
| Tijs van Klaveren | src/lib/config/dms.ts | 28 | full: 'Tijs van Klaveren', |
| Tijs | src/lib/config/dms.ts | 29 | short: 'Tijs' |
| Party 1 | src/lib/config/parties.ts | 13 | basic: 'Party 1', |
| Tijs | src/lib/config/parties.ts | 18 | members: 'Tijs, Andy, Stan, Roel & Bryce', |
| Party 2 | src/lib/config/parties.ts | 37 | basic: 'Party 2', |
| LuckyClover | src/lib/config/parties.ts | 38 | party: 'LuckyClover' |
| Tijs | src/lib/config/parties.ts | 42 | members: 'Tijs, Ben, Thomas, Vince & Stijn', |
| Party 3 | src/lib/config/parties.ts | 61 | basic: 'Party 3', |
| FCGoonUnited | src/lib/config/parties.ts | 62 | party: 'FCGoonUnited' |
| Party 4 | src/lib/config/parties.ts | 85 | basic: 'Party 4', |
| Party 5 | src/lib/config/parties.ts | 109 | basic: 'Party 5', |
| FemboyAss | src/lib/config/parties.ts | 110 | party: 'FemboyAss' |
| Party 6 | src/lib/config/parties.ts | 133 | basic: 'Party 6', |
| Crops | src/lib/config/parties.ts | 134 | party: 'Crops' |
| 750 | src/lib/config/parties.ts | 154 | party: '750' |
| Main | src/lib/config/parties.ts | 157 | basic: 'Main', |
| 750 | src/lib/config/parties.ts | 158 | party: '750' |
| Toon | src/lib/config/parties.ts | 162 | members: 'Thomas, Ben, Tiago & Toon', |
| Scouting | src/lib/config/parties.ts | 181 | basic: 'Scouting', |
| MotelyCrew | src/lib/config/parties.ts | 182 | party: 'MotelyCrew' |
| Toon | src/lib/config/parties.ts | 186 | members: 'Melvin, Lucas, Toon & Thomas', |
| Main | src/lib/data/availability.ts | 31 | // function selectMainCampaignParties(): PartyId[] { |
| Main | src/lib/data/availability.ts | 93 | // 					allowed: selectMainCampaignParties() |
| Main | src/lib/data/availability.ts | 140 | // 			banned: selectMainCampaignParties() |
| Main | src/lib/data/availability.ts | 143 | // 			banned: selectMainCampaignParties() |
| D&D Portal | src/lib/data/changelog.ts | 145 | title: 'About D&D Portal page', |
| D&D Portal | src/lib/data/changelog.ts | 147 | 'Added an explanation of the difference between the public D&D Portal Wiki and the separate player portal for campaigns, parties, and playing dates.', |
| D&D Portal Wiki | src/lib/data/changelog.ts | 147 | 'Added an explanation of the difference between the public D&D Portal Wiki and the separate player portal for campaigns, parties, and playing dates.', |
| D&D Portal | src/lib/data/sources.ts | 391 | 'Used as a legal and publishing reference for the operation of D&D Portal.', |
| D&D Portal | src/lib/data/sources.ts | 396 | title: 'D&D Portal campaign rules', |
| D&D Portal | src/lib/data/sources.ts | 400 | publisher: 'D&D Portal', |
| D&D Portal | src/lib/data/sources.ts | 402 | 'Original house rules, campaign decisions, availability restrictions, interpretations, and table agreements created for campaigns connected to D&D Portal.', |
| D&D Portal | src/lib/data/sources.ts | 410 | title: 'D&D Portal homebrew material', |
| D&D Portal | src/lib/data/sources.ts | 414 | publisher: 'D&D Portal and named contributors', |
| D&D Portal | src/lib/data/sources.ts | 416 | 'Original classes, subclasses, species, monsters, items, spells, locations, and mechanics made for campaigns connected to D&D Portal.', |
| D&D Portal | src/lib/data/sources.ts | 428 | publisher: 'D&D Portal community', |
| Rules Wiki | src/lib/layout/Wiki.svelte | 16 | <span>Rules Wiki</span> |
| Main | src/lib/layout/snippets/Sidebar-Types.ts | 4 | export type SidebarMainItem = { |
| Main | src/lib/layout/snippets/Sidebar-Types.ts | 24 | main: SidebarMainItem[]; |
| 750 | src/lib/styles/base/_mixins.scss | 40 | font-weight: 750; |
| https://github.com/toon-van-berkel/dnd-wiki | src/routes/about/+page.svelte | 7 | const githubRepositoryUrl = 'https://github.com/toon-van-berkel/dnd-wiki'; |
| D&D Portal | src/routes/about/+page.svelte | 10 | <PageSection title="What is D&D Portal?"> |
| D&D Portal | src/routes/about/+page.svelte | 12 | D&D Portal is a collection of tools and reference pages created to support the |
| Toon | src/routes/about/+page.svelte | 13 | Dungeons & Dragons campaigns organised and managed by Toon van Berkel. |
| Toon van Berkel | src/routes/about/+page.svelte | 13 | Dungeons & Dragons campaigns organised and managed by Toon van Berkel. |
| D&D Portal | src/routes/about/+page.svelte | 22 | <strong>The D&D Portal Wiki</strong>, which contains rules, character |
| D&D Portal Wiki | src/routes/about/+page.svelte | 22 | <strong>The D&D Portal Wiki</strong>, which contains rules, character |
| D&D Portal | src/routes/about/+page.svelte | 35 | D&D Portal project. |
| D&D Portal | src/routes/about/+page.svelte | 39 | <PageSection title="The D&D Portal Wiki"> |
| D&D Portal Wiki | src/routes/about/+page.svelte | 39 | <PageSection title="The D&D Portal Wiki"> |
| D&D Portal | src/routes/about/+page.svelte | 52 | This website is the wiki section of D&D Portal. It is intended as a |
| D&D Portal | src/routes/about/+page.svelte | 102 | In addition to this wiki, D&D Portal also has a separate player portal. |
| D&D Portal | src/routes/about/+page.svelte | 153 | <p class="about-comparison__eyebrow">D&D Portal Wiki</p> |
| D&D Portal Wiki | src/routes/about/+page.svelte | 153 | <p class="about-comparison__eyebrow">D&D Portal Wiki</p> |
| D&D Portal | src/routes/about/+page.svelte | 234 | D&D Portal was created to bring this information together in a clearer and more |
| D&D Portal | src/routes/about/+page.svelte | 256 | in campaigns managed through D&D Portal. |
| D&D Portal | src/routes/about/+page.svelte | 282 | D&D Portal is an independent and unofficial fan-created project. |
| D&D Portal | src/routes/about/+page.svelte | 312 | D&D Portal is designed, developed, and maintained by |
| Toon | src/routes/about/+page.svelte | 318 | Toon van Berkel |
| Toon van Berkel | src/routes/about/+page.svelte | 318 | Toon van Berkel |
| D&D Portal | src/routes/accessibility/+page.svelte | 30 | D&D Portal aims to make its rules, campaign information, character options, |
| D&D Portal | src/routes/accessibility/+page.svelte | 55 | The main accessibility goals of D&D Portal are: |
| Main | src/routes/accessibility/+page.svelte | 62 | <li>Maintain sufficient contrast between text and backgrounds.</li> |
| D&D Portal | src/routes/accessibility/+page.svelte | 96 | D&D Portal uses a font stack that prioritises legibility: |
| D&D Portal | src/routes/accessibility/+page.svelte | 266 | D&D Portal uses a dark visual theme with light text and a bright green accent. |
| D&D Portal | src/routes/accessibility/+page.svelte | 407 | D&D Portal aims to keep animation limited and functional. |
| D&D Portal | src/routes/accessibility/+page.svelte | 464 | D&D Portal aims to provide useful information to screen-reader users through: |
| D&D Portal | src/routes/accessibility/+page.svelte | 549 | D&D Portal is an actively developed project. Some parts of the website may still |
| D&D Portal | src/routes/accessibility/+page.svelte | 574 | D&D Portal may link to or display content provided by third parties, including |
| D&D Portal | src/routes/accessibility/+page.svelte | 581 | owners. D&D Portal cannot guarantee that an external website, document, embedded |
| D&D Portal | src/routes/accessibility/+page.svelte | 668 | Response times may vary because D&D Portal is independently maintained and is not |
| D&D Portal | src/routes/accessibility/+page.svelte | 701 | <li><a href={resolveAppPath('/about')}>About D&D Portal</a></li> |
| D&D Portal | src/routes/ai/+page.svelte | 16 | D&D Portal uses artificial intelligence for a limited number of supporting |
| Toon | src/routes/ai/+page.svelte | 29 | painted, photographed, or manually illustrated works by Toon van Berkel. |
| Toon van Berkel | src/routes/ai/+page.svelte | 29 | painted, photographed, or manually illustrated works by Toon van Berkel. |
| D&D Portal | src/routes/ai/+page.svelte | 277 | At this time, D&D Portal does not use images that were |
| D&D Portal | src/routes/ai/+page.svelte | 306 | that reference does not become the property of D&D Portal. Rights in the original |
| 750 | src/routes/ai/AITransparency.scss | 17 | font-weight: 750; |
| 750 | src/routes/ai/AITransparency.scss | 123 | font-weight: 750; |
| D&D Portal | src/routes/changelog/+page.svelte | 117 | This page records meaningful changes made to the D&D Portal Wiki. It |
| D&D Portal Wiki | src/routes/changelog/+page.svelte | 117 | This page records meaningful changes made to the D&D Portal Wiki. It |
| D&D Portal | src/routes/changelog/+page.svelte | 314 | D&D Portal uses version numbers to group related changes. A version may |
| D&D Portal | src/routes/changelog/+page.svelte | 376 | About D&D Portal |
| 750 | src/routes/changelog/Changelog.scss | 26 | font-weight: 750; |
| 750 | src/routes/changelog/Changelog.scss | 121 | font-weight: 750; |
| D&D Portal | src/routes/classes/page.header.ts | 3 | eyebrow: 'D&D Portal wiki - Character classes', |
| D&D Portal | src/routes/classes/page.meta.ts | 3 | title: 'D&D Portal — Campaign Rules & Reference Wiki', |
| Toon | src/routes/classes/page.meta.ts | 6 | author: 'Toon van Berkel', |
| Toon van Berkel | src/routes/classes/page.meta.ts | 6 | author: 'Toon van Berkel', |
| D&D Portal | src/routes/classes/page.meta.ts | 18 | title: 'D&D Portal — Campaign Rules & Reference Wiki', |
| D&D Portal | src/routes/classes/page.meta.ts | 22 | imageAlt: 'D&D Portal campaign rules and reference wiki', |
| D&D Portal | src/routes/classes/page.meta.ts | 23 | siteName: 'D&D Portal', |
| D&D Portal | src/routes/classes/page.meta.ts | 30 | title: 'D&D Portal — Campaign Rules & Reference Wiki', |
| D&D Portal | src/routes/content-removal/+page.svelte | 5 | const projectName = 'D&D Portal Wiki'; |
| D&D Portal Wiki | src/routes/content-removal/+page.svelte | 5 | const projectName = 'D&D Portal Wiki'; |
| Toon | src/routes/content-removal/+page.svelte | 6 | const projectOwner = 'Toon van Berkel'; |
| Toon van Berkel | src/routes/content-removal/+page.svelte | 6 | const projectOwner = 'Toon van Berkel'; |
| https://github.com/toon-van-berkel/dnd-wiki | src/routes/content-removal/+page.svelte | 11 | 'https://github.com/toon-van-berkel/dnd-wiki'; |
| D&D Portal | src/routes/content-removal/+page.svelte | 21 | 'D&D Portal content removal request'; |
| D&D Portal | src/routes/content-removal/+page.svelte | 333 | material on D&D Portal that is claimed to infringe it. |
| D&D Portal | src/routes/content-removal/+page.svelte | 343 | <li>The exact D&D Portal page or image involved.</li> |
| D&D Portal | src/routes/content-removal/+page.svelte | 413 | <strong>URGENT — D&D Portal security or safety report</strong>. |
| D&D Portal | src/routes/content-removal/+page.svelte | 636 | D&D Portal. Independent third-party copies remain under the control of |
| D&D Portal | src/routes/content-removal/+page.svelte | 643 | D&D Portal may link to third-party websites but does not control their |
| D&D Portal | src/routes/content-removal/+page.svelte | 653 | Where appropriate, D&D Portal may remove or update its link to external |
| D&D Portal | src/routes/content-removal/+page.svelte | 684 | D&D Portal is independently maintained and does not operate a dedicated |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 5 | const projectName = 'D&D Portal Wiki'; |
| D&D Portal Wiki | src/routes/contribution-terms/+page.svelte | 5 | const projectName = 'D&D Portal Wiki'; |
| Toon | src/routes/contribution-terms/+page.svelte | 6 | const projectOwner = 'Toon van Berkel'; |
| Toon van Berkel | src/routes/contribution-terms/+page.svelte | 6 | const projectOwner = 'Toon van Berkel'; |
| https://github.com/toon-van-berkel/dnd-wiki | src/routes/contribution-terms/+page.svelte | 11 | 'https://github.com/toon-van-berkel/dnd-wiki/'; |
| https://github.com/toon-van-berkel/dnd-wiki | src/routes/contribution-terms/+page.svelte | 14 | 'https://github.com/toon-van-berkel/dnd-wiki/issues'; |
| https://github.com/toon-van-berkel/dnd-wiki | src/routes/contribution-terms/+page.svelte | 17 | 'https://github.com/toon-van-berkel/dnd-wiki/security/advisories/new'; |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 45 | D&D Portal receives permission to publish and maintain accepted work. |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 206 | <li>Existing D&D Portal material.</li> |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 213 | <PageSection title="Licence granted to D&D Portal"> |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 411 | itself mean it may be copied into D&D Portal. |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 423 | D&D Portal is an unofficial fan-created project. Contributions containing |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 781 | Voluntary donations made to support D&D Portal do not automatically |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 809 | <PageSection title="No warranties from D&D Portal"> |
| D&D Portal | src/routes/contribution-terms/+page.svelte | 929 | <li><a href={resolveAppPath('/about')}>About D&D Portal</a></li> |
| 750 | src/routes/contribution-terms/ContributionTerms.scss | 169 | font-weight: 750; |
| D&D Portal | src/routes/cookies/+page.svelte | 31 | provider: 'D&D Portal Wiki', |
| D&D Portal Wiki | src/routes/cookies/+page.svelte | 31 | provider: 'D&D Portal Wiki', |
| D&D Portal | src/routes/cookies/+page.svelte | 46 | provider: 'D&D Portal Wiki', |
| D&D Portal Wiki | src/routes/cookies/+page.svelte | 46 | provider: 'D&D Portal Wiki', |
| D&D Portal | src/routes/cookies/+page.svelte | 110 | The D&D Portal Wiki does not currently use cookies for |
| D&D Portal Wiki | src/routes/cookies/+page.svelte | 110 | The D&D Portal Wiki does not currently use cookies for |
| D&D Portal | src/routes/cookies/+page.svelte | 130 | This status applies only to the public D&D Portal Wiki. The separate |
| D&D Portal Wiki | src/routes/cookies/+page.svelte | 130 | This status applies only to the public D&D Portal Wiki. The separate |
| Main | src/routes/cookies/+page.svelte | 148 | <li>Maintaining a shopping basket or form session.</li> |
| D&D Portal | src/routes/cookies/+page.svelte | 201 | D&D Portal currently uses local storage for display preferences. It does |
| D&D Portal | src/routes/cookies/+page.svelte | 269 | The D&D Portal Wiki does not currently intentionally place |
| D&D Portal Wiki | src/routes/cookies/+page.svelte | 269 | The D&D Portal Wiki does not currently intentionally place |
| D&D Portal | src/routes/cookies/+page.svelte | 447 | D&D Portal Wiki does not currently use Google Analytics, advertising |
| D&D Portal Wiki | src/routes/cookies/+page.svelte | 447 | D&D Portal Wiki does not currently use Google Analytics, advertising |
| D&D Portal | src/routes/cookies/+page.svelte | 493 | An ordinary external link does not itself give D&D Portal control over |
| D&D Portal | src/routes/cookies/+page.svelte | 627 | <li><a href={resolveAppPath('/about')}>About D&D Portal</a></li> |
| 750 | src/routes/cookies/CookieNotice.scss | 95 | font-weight: 750; |
| https://github.com/toon-van-berkel/dnd-wiki | src/routes/credits/+page.svelte | 6 | const githubRepositoryUrl = 'https://github.com/toon-van-berkel/dnd-wiki'; |
| D&D Portal | src/routes/credits/+page.svelte | 13 | D&D Portal was designed, developed, published, and is maintained by |
| Toon | src/routes/credits/+page.svelte | 15 | Toon van Berkel |
| Toon van Berkel | src/routes/credits/+page.svelte | 15 | Toon van Berkel |
| Toon | src/routes/credits/+page.svelte | 21 | Dungeons & Dragons campaigns managed by Toon van Berkel. Its primary purpose is |
| Toon van Berkel | src/routes/credits/+page.svelte | 21 | Dungeons & Dragons campaigns managed by Toon van Berkel. Its primary purpose is |
| D&D Portal | src/routes/credits/+page.svelte | 64 | Open the D&D Portal GitHub repository |
| Toon | src/routes/credits/+page.svelte | 151 | design, collaboration, or other business matters, contact Toon van Berkel through |
| Toon van Berkel | src/routes/credits/+page.svelte | 151 | design, collaboration, or other business matters, contact Toon van Berkel through |
| D&D Portal | src/routes/credits/+page.svelte | 158 | Questions specifically relating to D&D Portal can be sent to |
| D&D Portal | src/routes/credits/+page.svelte | 183 | D&D Portal may contain summaries, explanations, campaign interpretations, |
| D&D Portal | src/routes/credits/+page.svelte | 212 | D&D Portal contains several different types of content. These should not be |
| D&D Portal | src/routes/credits/+page.svelte | 273 | Artwork and other visual material displayed on D&D Portal may come from several |
| D&D Portal | src/routes/credits/+page.svelte | 294 | holder. Inclusion on this website does not transfer ownership to D&D Portal or |
| Toon | src/routes/credits/+page.svelte | 295 | Toon van Berkel. |
| Toon van Berkel | src/routes/credits/+page.svelte | 295 | Toon van Berkel. |
| D&D Portal | src/routes/credits/+page.svelte | 301 | Some images used on D&D Portal may have been generated or modified with the |
| Toon | src/routes/credits/+page.svelte | 308 | content. They are not presented as original, manually created artwork by Toon van |
| D&D Portal | src/routes/credits/+page.svelte | 339 | Icons and other interface assets used throughout D&D Portal may originate from |
| D&D Portal | src/routes/credits/+page.svelte | 385 | D&D Portal is built using modern web technologies selected for maintainability, |
| D&D Portal | src/routes/credits/+page.svelte | 432 | D&D Portal aims to provide information in a format that is readable and usable |
| D&D Portal | src/routes/credits/+page.svelte | 458 | D&D Portal may contain links to external websites, repositories, social media |
| D&D Portal | src/routes/credits/+page.svelte | 463 | External websites are operated by their respective owners. D&D Portal does not |
| Toon | src/routes/credits/+page.svelte | 469 | A link to an external website does not automatically mean that D&D Portal or Toon |
| D&D Portal | src/routes/credits/+page.svelte | 469 | A link to an external website does not automatically mean that D&D Portal or Toon |
| D&D Portal | src/routes/credits/+page.svelte | 479 | specifically for D&D Portal are owned by their respective creator. |
| D&D Portal | src/routes/credits/+page.svelte | 510 | D&D Portal is an unofficial, independently created fan resource. It is not |
| D&D Portal | src/routes/credits/+page.svelte | 531 | If you are a creator or rights holder and believe that material on D&D Portal: |
| D&D Portal | src/routes/credits/+page.svelte | 566 | D&D Portal is maintained as an ongoing project. Content, availability rules, |
| Party 1 | src/routes/locations/+page.svelte | 9 | <p>Party 1 has an established contact at the old observatory above the district.</p> |
| Sam | src/routes/page.data.ts | 196 | 'Sam', |
| Casper | src/routes/page.data.ts | 197 | 'Casper', |
| Liam | src/routes/page.data.ts | 198 | 'Liam', |
| Ronin | src/routes/page.data.ts | 199 | 'Ronin', |
| Aron | src/routes/page.data.ts | 200 | 'Aron', |
| Mathijs | src/routes/page.data.ts | 201 | 'Mathijs' |
| D&D Portal | src/routes/page.header.ts | 3 | eyebrow: 'D&D Portal wiki', |
| D&D Portal | src/routes/page.meta.ts | 3 | title: 'D&D Portal — Campaign Rules & Reference Wiki', |
| Toon | src/routes/page.meta.ts | 6 | author: 'Toon van Berkel', |
| Toon van Berkel | src/routes/page.meta.ts | 6 | author: 'Toon van Berkel', |
| D&D Portal | src/routes/page.meta.ts | 18 | title: 'D&D Portal — Campaign Rules & Reference Wiki', |
| D&D Portal | src/routes/page.meta.ts | 22 | imageAlt: 'D&D Portal campaign rules and reference wiki', |
| D&D Portal | src/routes/page.meta.ts | 23 | siteName: 'D&D Portal', |
| D&D Portal | src/routes/page.meta.ts | 30 | title: 'D&D Portal — Campaign Rules & Reference Wiki', |
| D&D Portal | src/routes/privacy/+page.svelte | 6 | const siteName = 'D&D Portal Wiki'; |
| D&D Portal Wiki | src/routes/privacy/+page.svelte | 6 | const siteName = 'D&D Portal Wiki'; |
| Toon | src/routes/privacy/+page.svelte | 7 | const controllerName = 'Toon van Berkel'; |
| Toon van Berkel | src/routes/privacy/+page.svelte | 7 | const controllerName = 'Toon van Berkel'; |
| D&D Portal | src/routes/privacy/+page.svelte | 45 | It applies only to the public Wiki. D&D Portal also operates a separate |
| D&D Portal | src/routes/privacy/+page.svelte | 459 | policies, security practices, and terms. D&D Portal does not control how |
| D&D Portal | src/routes/privacy/+page.svelte | 643 | <li><a href={resolveAppPath('/about')}>About D&D Portal</a></li> |
| Party 2 | src/routes/rules/fighting/+page.svelte | 9 | <p>Party 2 uses the same bonus for large tactical encounters, but the DM may waive it for theatre-of-the-mind scenes.</p> |
| Party 3 | src/routes/rules/movement/+page.svelte | 9 | <p>Party 3 uses stricter climbing and swimming checks during wilderness expeditions.</p> |
| D&D Portal | src/routes/rules/movement/page.header.ts | 3 | eyebrow: 'D&D Portal wiki', |
| D&D Portal | src/routes/rules/page.header.ts | 3 | eyebrow: 'D&D Portal wiki', |
| D&D Portal | src/routes/sources/+page.svelte | 85 | D&D Portal uses a combination of official publications, official online |
| D&D Portal | src/routes/sources/+page.svelte | 306 | inclusion on this page does not mean that D&D Portal distributes those books or |
| D&D Portal | src/routes/sources/+page.svelte | 316 | D&D Portal is intended as an informational and campaign-organisational resource, |
| 750 | src/routes/sources/Sources.scss | 47 | font-weight: 750; |
| 750 | src/routes/sources/Sources.scss | 73 | font-weight: 750; |
| Party 1 | src/routes/species/elf/astral-elf/+page.svelte | 11 | <p>Party 1 may use this option only when the character is connected to the campaign’s observatory storyline.</p> |
| Party 1 | src/routes/species/human/+page.svelte | 14 | <p>Human characters in Party 1 may begin with one additional language tied to the capital.</p> |