import * as core from '../core/_index_';
import { createInternalPage } from './_helpers_';
import type {
	ChangelogRelease,
	InlineContent,
	InlineContentNode,
	PageContentBlock,
	PageContentSection
} from '$lib/typescript/pages/content-types';

const website = core.internals.website;
const current = core.internals.project;

const text = (value: string): InlineContentNode => ({
	type: 'text',
	text: value
});

const link = (path: string, label: string): InlineContentNode => ({
	type: 'link',
	path,
	label
});

const paragraph = (content: InlineContent): PageContentBlock => ({
	type: 'paragraph',
	content
});

const textParagraph = (value: string): PageContentBlock =>
	paragraph([text(value)]);

const list = (items: readonly string[]): PageContentBlock => ({
	type: 'list',
	items: items.map((item) => [text(item)])
});

const changelog = (releases: readonly ChangelogRelease[]): PageContentBlock => ({
	type: 'changelog',
	releases
});

const content = (sections: readonly PageContentSection[]) => ({
	sections,
	tableOfContents: sections.map((section) => ({
		id: section.id,
		title: section.title
	}))
});

const sourceRegister = [
	'D&D Basic Rules',
	'Player\'s Handbook',
	'Dungeon Master\'s Guide',
	'Complete Arcane',
	'Complete Divine',
	'Complete Adventurer',
	'Complete Psionic',
	'Complete Mage',
	'Complete Champion',
	'Complete Scoundrel',
	'Fiend Folio',
	'Savage Species',
	'Miniatures Handbook',
	'Draconomicon: The Book of Dragons',
	'Magic Item Compendium',
	'Spell Compendium',
	'Shining South',
	'Deities and Demigods',
	'Mordenkainen Presents: Monsters of the Multiverse',
	'D&D Beyond',
	'Wizards of the Coast Fan Content Policy',
	'D&D Portal campaign rules',
	'D&D Portal homebrew material',
	'Player and Dungeon Master feedback'
] as const;

const aiImageRegister = [
	'Artificer class portraits',
	'Barbarian class and subclass portraits',
	'Bard class portraits',
	'Blood Hunter class portraits',
	'Captain class portraits',
	'Champion class portraits',
	'Cleric class portraits',
	'Death Domain portraits',
	'Life Domain portraits',
	'Druid class portraits',
	'Fighter class portraits',
	'Gunslinger class portraits',
	'Illrigger class portraits',
	'Messenger class portraits',
	'Monk class portraits',
	'Monster Hunter class portraits',
	'Mournbound class portraits',
	'Paladin class portraits',
	'Pugilist class portraits',
	'Ranger class portraits',
	'Rogue class and subclass portraits',
	'Scholar class portraits',
	'Shinobi class portraits',
	'Sorcerer class portraits',
	'Treasure Hunter class portraits',
	'Vampyr class portraits',
	'Warlock class portraits',
	'Warden class portraits',
	'Wizard class portraits',
	'Human species portraits',
	'Elf species portraits',
	'Chakraborn species portraits'
] as const;

const changelogReleases = [
	{
		version: 'Unreleased',
		date: '4 August 2026',
		title: 'Branch-wide Wiki rebuild and content expansion',
		description:
			'Large local branch update covering the TypeScript data migration, expanded rules content, class and subclass pages, spell browsing, search, reusable page components, styling, assets, and pre-live validation work.',
		changes: [
			{
				category: 'changed',
				title: 'TypeScript data source migration',
				description:
					'Rebuilt the Wiki around centralized TypeScript data modules for internal pages, external links, socials, page metadata, images, tags, inline content, hover previews, navigation, and route resolution.',
				action: {
					label: 'Browse Wiki',
					path: 'internals.website.homepage'
				}
			},
			{
				category: 'changed',
				title: 'Reusable page rendering system',
				description:
					'Replaced many route-specific page implementations with shared Svelte components for page headers, responsive images, breadcrumbs, cards, inline content, content sections, tables, progression blocks, core traits, starting equipment, and table-of-contents navigation.'
			},
			{
				category: 'changed',
				title: 'Generic dynamic routes',
				description:
					'Moved many static route files into dynamic page routes for top-level project pages, rules pages, spell pages, class pages, and subclass pages so the central data tree controls what renders.'
			},
			{
				category: 'content',
				title: 'Expanded class library',
				description:
					'Added and migrated a broad class library with page-header descriptions, class overview data, core traits, progression data, feature sections, subclass navigation, images, and page-card presentation for official and homebrew classes.',
				action: {
					label: 'Browse Classes',
					path: 'internals.classes.page'
				}
			},
			{
				category: 'content',
				title: 'Official class pages',
				description:
					'Added or rewrote class pages for Artificer, Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock, and Wizard using the shared class-page content model.',
				action: {
					label: 'View Classes',
					path: 'internals.classes.page'
				}
			},
			{
				category: 'content',
				title: 'Additional and homebrew class pages',
				description:
					'Added or migrated Blood Hunter, Captain, Champion, Gunslinger, Illrigger, Messenger, Monster Hunter, Mournbound, Pugilist, Scholar, Shinobi, Treasure Hunter, Vampyr, Vanguard, and Warden pages into the same central class system.',
				action: {
					label: 'Browse Classes',
					path: 'internals.classes.page'
				}
			},
			{
				category: 'content',
				title: 'Shinobi class and paths',
				description:
					'Expanded the Shinobi class with Chakra progression, class features, weapon and resource presentation, stronger page content, and Shinobi path pages for Taijutsu, Elemental Ninjutsu, Genjutsu, Bloodline, Medical, Sealing, and Fortune paths.',
				action: {
					label: 'View Shinobi',
					path: 'internals.classes.shinobi.page'
				}
			},
			{
				category: 'content',
				title: 'Barbarian content expansion',
				description:
					'Expanded the Barbarian page with multi-paragraph header copy, structured class features, core-trait presentation, corrected class-feature hierarchy, refined Starting Equipment cards, Primal Path card grids, subclass pages, linked rules references, and gender-switchable header artwork.',
				action: {
					label: 'View Barbarian',
					path: 'internals.classes.barbarian.page'
				}
			},
			{
				category: 'content',
				title: 'Barbarian subclass pages',
				description:
					'Added Barbarian subclass pages for Ancestral Guardian, Battlerager, Beast, Berserker, Giant, Storm Herald, Totem Warrior, Wild Magic, and Zealot using the central subclass route and shared page-header/image system.',
				action: {
					label: 'View Berserker',
					path: 'internals.classes.barbarian.subclasses.berserker'
				}
			},
			{
				category: 'content',
				title: 'Subclass descriptions and cards',
				description:
					'Expanded subclass descriptions toward full page-header copy, normalized card-description length, reused PageCard for subclass and path grids, preserved available images and tags, and avoided inventing routes for unavailable pages.'
			},
			{
				category: 'added',
				title: 'Spell list and spell pages',
				description:
					'Added a 574-spell dataset with individual spell pages, full spell text, class tags, schools, levels, casting time, range, duration, components, material details, ritual and concentration flags, and level-based spell collection pages.',
				action: {
					label: 'Browse Spells',
					path: 'internals.spells.page'
				}
			},
			{
				category: 'added',
				title: 'Spell browser filtering and view modes',
				description:
					'Built the spell browser with search, level/class/school filters, component toggles, ritual and concentration filters, active-filter state, reset controls, 30-result pagination, and card, list, and table view modes.',
				action: {
					label: 'Browse Spells',
					path: 'internals.spells.page'
				}
			},
			{
				category: 'content',
				title: 'Spellcasting rule pages',
				description:
					'Separated spellcasting content into a dedicated spellcasting area with rules pages for spellcasting, cantrips, and 1st-level through 9th-level spells, instead of mixing those pages into the general rules index.',
				action: {
					label: 'View Spellcasting',
					path: 'internals.spells.spellcasting'
				}
			},
			{
				category: 'added',
				title: 'Rules reference pages',
				description:
					'Expanded rules references for ability scores, actions, combat terms, damage types, conditions, d20 tests, movement, rests, equipment, skills, abbreviations, and spellcasting concepts used by hover links and inline rules references.',
				action: {
					label: 'Browse Rules',
					path: 'internals.rules.page'
				}
			},
			{
				category: 'content',
				title: 'Rules explanations and usable mechanics',
				description:
					'Added clearer explanations to rules pages, including what a rule means, when it is used, what can and cannot be done with it, what rolls are involved, and structured examples such as fall-damage calculation.'
			},
			{
				category: 'changed',
				title: 'Inline rules linking and hover previews',
				description:
					'Linked ability scores, damage types, conditions, actions, attacks, rests, hit points, spellcasting terms, abbreviations, and other rules terms through the central data path system and existing Link/InlineContent components instead of hard-coded hrefs.'
			},
			{
				category: 'changed',
				title: 'Quiet inline link styling',
				description:
					'Adjusted paragraph links so rules references remain discoverable through underline and hover preview behavior without turning every linked term into heavy white bold text.'
			},
			{
				category: 'added',
				title: 'Dedicated Wiki search',
				description:
					'Built a new search page that indexes central page data and spell data, scores results by title, subtitle, description, tags, URL, and structured content, and supports URL-backed query, type, tag, and pagination state.',
				action: {
					label: 'Search Wiki',
					path: 'internals.utility.search'
				}
			},
			{
				category: 'changed',
				title: 'Search interface components',
				description:
					'Added reusable WikiSearch, WikiSearchFilters, and WikiSearchResult components with clearer filter grouping, styled reset controls, result metadata, and consistent result cards.'
			},
			{
				category: 'changed',
				title: 'Navigation, sidebar, and footer rebuild',
				description:
					'Rebuilt navbar, sidebar, footer, breadcrumbs, section navigation, page-specific table of contents, sidebar expansion behavior, nav link weight, spacing, and page-resource links using the central navigation data.'
			},
			{
				category: 'changed',
				title: 'Page-header image handling',
				description:
					'Added male/female image switching with white utility icons, top-right image alignment, expanded image controls, reusable responsive image handling, and full-width text layout for page headers that do not have artwork.'
			},
			{
				category: 'changed',
				title: 'Card and table presentation',
				description:
					'Reworked page cards, subclass cards, Primal Path cards, spell cards, rule cards, table styling, trait tables, and filter rows for clearer hierarchy, tighter subtitles, darker image overlays, responsive grids, and more consistent spacing.'
			},
			{
				category: 'changed',
				title: 'Starting equipment presentation',
				description:
					'Changed Starting Equipment from plain tables/lists into cards with small section subtitles, option titles, paragraph-style equipment text, inline item links, and comma-separated included items where appropriate.'
			},
			{
				category: 'content',
				title: 'Project resource pages',
				description:
					'Reworked project pages such as About, Sources, Credits, Accessibility, AI Transparency, and Changelog with central page data, longer page-header descriptions, clearer body copy, and reusable content sections.',
				action: {
					label: 'View Changelog',
					path: 'internals.project.changelog'
				}
			},
			{
				category: 'added',
				title: 'Changelog component',
				description:
					'Added a reusable changelog timeline component with release cards, category badges, search, filters, anchors, action links, and responsive styling for version history pages.'
			},
			{
				category: 'changed',
				title: 'Homepage and collection pages',
				description:
					'Replaced the old homepage/demo content with real Wiki entry points and compact PageCards for Search, Classes, Spells, Rules, Species, Monsters, Locations, and project-resource pages.'
			},
			{
				category: 'added',
				title: 'Class, species, and icon assets',
				description:
					'Added and reorganized large sets of class portraits, subclass portraits, species portraits, white rule icons, class icons, spell icons, condition icons, damage icons, movement icons, utility icons, logos, and favicon assets.'
			},
			{
				category: 'removed',
				title: 'Old Svelte component and route structure',
				description:
					'Removed the previous route-specific component folders, legacy registry files, older search implementation, old SCSS tree, deprecated scripts, and obsolete static asset locations after the TypeScript data rebuild replaced them.'
			},
			{
				category: 'removed',
				title: 'Obsolete placeholder and fallback wording',
				description:
					'Removed misleading fallback copy such as unavailable equipment-package text and replaced incomplete spell-card placeholders with clearer links to full spell pages.'
			},
			{
				category: 'fixed',
				title: 'Table and rendering fixes',
				description:
					'Fixed table styling inconsistencies, missing data-path errors, not-found cases, footer typing issues, and page rendering problems found during local development.'
			},
			{
				category: 'fixed',
				title: 'Data-path and route errors',
				description:
					'Fixed missing subclass data paths, incorrect central link references, not-found route cases, broken page navigation, spell route slugs, duplicated Primal Path sections, and page rendering errors uncovered while browsing class pages.'
			},
			{
				category: 'fixed',
				title: 'Spell browser display fixes',
				description:
					'Fixed spell filter colors, active filter visibility, duplicated material component text, card click behavior, source-link noise, default result overload, and inconsistent spell card description lengths.'
			},
			{
				category: 'fixed',
				title: 'Barbarian layout and readability fixes',
				description:
					'Fixed Barbarian feature hierarchy, page-specific contents spacing, Primal Path card bullet artifacts, subclass card subtitle scale, image overlay darkness, rules-link emphasis, and page-header description preservation.'
			},
			{
				category: 'fixed',
				title: 'Build and dependency setup',
				description:
					'Switched production builds from adapter-auto to adapter-node, added pnpm build-script approval for @parcel/watcher, removed the unused adapter dependency, and raised the Vite chunk warning threshold for the current data size.'
			},
			{
				category: 'added',
				title: 'Pre-live audit tooling',
				description:
					'Added a pre-live audit script that checks duplicate internal hrefs, unknown route shapes, missing central data paths, missing static assets, invalid or duplicate spell slugs, placeholder content markers, and built-route renderability without requiring a devserver.'
			}
		]
	},
	{
		version: '0.8.0',
		date: '15 July 2026',
		title: 'Dedicated Wiki search',
		description:
			'Added a dedicated search page with clearer result metadata, filters, preferences, and shareable URL state.',
		changes: [
			{
				category: 'added',
				title: 'Search the Wiki page',
				description:
					'Added a dedicated search page for individual Wiki items with relevance-based text search, content-type filters, tag filters, and 30-result pagination.',
				action: {
					label: 'Search the Wiki',
					path: 'internals.utility.search'
				}
			},
			{
				category: 'fixed',
				title: 'Collection pages excluded from item results',
				description:
					'Separated navigation collections from actual searchable content items so section roots such as Species and Classes no longer count as normal results.'
			},
			{
				category: 'changed',
				title: 'Party and Dungeon Master preferences',
				description:
					'Moved party and Dungeon Master selections into browser-local Wiki preferences instead of treating them as global content filters.',
				action: {
					label: 'View Preferences',
					path: 'internals.utility.preferences'
				}
			},
			{
				category: 'added',
				title: 'Shareable search URLs',
				description:
					'Search query, temporary filters, and result page are represented in the URL so filtered views can be copied and shared.',
				action: {
					label: 'Open Search',
					path: 'internals.utility.search'
				}
			},
			{
				category: 'fixed',
				title: 'Preferences page rendering',
				description:
					'Fixed the Preferences page so browser storage is loaded safely and the page can render during server-side rendering and prerendering.',
				action: {
					label: 'View Preferences',
					path: 'internals.utility.preferences'
				}
			},
			{
				category: 'changed',
				title: 'Grouped search filters',
				description:
					'Grouped search tags into meaningful categories and hid irrelevant filters while keeping active filters removable.',
				action: {
					label: 'Search the Wiki',
					path: 'internals.utility.search'
				}
			},
			{
				category: 'changed',
				title: 'Header search submission',
				description:
					'Changed the global header search to use a semantic search form so the search button and Enter key open the dedicated Search page.',
				action: {
					label: 'Search the Wiki',
					path: 'internals.utility.search'
				}
			}
		]
	},
	{
		version: '0.7.0',
		date: '15 July 2026',
		title: 'Transparency and project information',
		description:
			'Added a complete collection of project information, attribution, accessibility, and transparency pages.',
		changes: [
			{
				category: 'added',
				title: 'Credits page',
				description:
					'Added detailed attribution for the website, contributors, tools, artwork, icons, and external resources.',
				action: {
					label: 'View Credits',
					path: 'internals.project.credits'
				}
			},
			{
				category: 'added',
				title: 'Legal Notice',
				description:
					'Added information about website ownership, permitted use, third-party material, author rights, liability, donations, and content-removal requests.',
				action: {
					label: 'View Legal Notice',
					path: 'internals.legal.notice'
				}
			},
			{
				category: 'added',
				title: 'AI Transparency page',
				description:
					'Added a central register for AI-generated and AI-assisted images used throughout the Wiki.',
				action: {
					label: 'View AI Transparency',
					path: 'internals.project.aiTransparency'
				}
			},
			{
				category: 'added',
				title: 'About D&D Portal page',
				description:
					'Added an explanation of the difference between the public D&D Portal Wiki and the separate player portal for campaigns, parties, and playing dates.',
				action: {
					label: 'View About Page',
					path: 'internals.project.about'
				}
			},
			{
				category: 'added',
				title: 'Sources page',
				description:
					'Added a searchable source register for official publications, online references, campaign documents, and original project material.',
				action: {
					label: 'View Sources',
					path: 'internals.project.sources'
				}
			},
			{
				category: 'added',
				title: 'Accessibility statement',
				description:
					'Added information about keyboard navigation, readable typography, reduced motion, responsive design, alternative text, and known limitations.',
				action: {
					label: 'View Accessibility',
					path: 'internals.project.accessibility'
				}
			},
			{
				category: 'changed',
				title: 'Expanded website footer',
				description:
					'Replaced the small footer with a full navigation area containing project, legal, community, creator, and external-resource links.'
			}
		]
	},
	{
		version: '0.6.0',
		date: '14 July 2026',
		title: 'Navigation and campaign availability',
		description:
			'Improved navigation behaviour and expanded support for campaign-specific availability information.',
		changes: [
			{
				category: 'added',
				title: 'Collapsible desktop sidebar',
				description:
					'Added a control that allows desktop users to collapse the Wiki sidebar and give more space to page content.'
			},
			{
				category: 'changed',
				title: 'Responsive navigation behaviour',
				description:
					'Adjusted the navigation so that mobile devices continue using an overlay menu while desktop devices use the collapsible sidebar.'
			},
			{
				category: 'added',
				title: 'Campaign availability configuration',
				description:
					'Added structured availability information for content that may be allowed, limited, banned, or require approval for individual campaigns.'
			},
			{
				category: 'changed',
				title: 'Party colour system',
				description:
					'Introduced consistent colours and soft background variants for all registered campaigns and guest content.'
			},
			{
				category: 'fixed',
				title: 'Sidebar toggle state',
				description:
					'Corrected layout and TypeScript problems associated with switching between expanded and collapsed navigation.'
			}
		]
	},
	{
		version: '0.5.0',
		date: '29 June 2026',
		title: 'Class pages and visual cards',
		description:
			'Expanded the class section with reusable page structures, progression tables, subclass navigation, and class-card images.',
		changes: [
			{
				category: 'added',
				title: 'Reusable class-page structure',
				description:
					'Added shared components for headers, sections, availability information, tables, and child-page navigation.',
				action: {
					label: 'Browse Classes',
					path: 'internals.classes.page'
				}
			},
			{
				category: 'added',
				title: 'Class progression tables',
				description:
					'Added structured level tables for class features, proficiency bonuses, spellcasting, and other progression information.',
				action: {
					label: 'Browse Classes',
					path: 'internals.classes.page'
				}
			},
			{
				category: 'added',
				title: 'Subclass navigation',
				description:
					'Added links between classes and their available subclasses using the central Wiki navigation structure.',
				action: {
					label: 'Browse Classes',
					path: 'internals.classes.page'
				}
			},
			{
				category: 'content',
				title: 'Rogue reference content',
				description:
					'Expanded Rogue content with level progression, Sneak Attack information, Expertise, Cunning Action, and subclass pages.',
				action: {
					label: 'View Rogue',
					path: 'internals.classes.rogue.page'
				}
			},
			{
				category: 'added',
				title: 'Gender-based class-card variations',
				description:
					'Added female and male visual variations for class cards, with the selected variation remembered locally in the browser.',
				action: {
					label: 'Browse Classes',
					path: 'internals.classes.page'
				}
			}
		]
	}
] as const satisfies readonly ChangelogRelease[];

export const project = {
	about: createInternalPage({
		href: current.about.href,
		title: `${website.name.short} - ${current.about.name.normal}`,
		subTitle: 'About the project',
		description: `Learn about the purpose, scope, development, and
			organisation of the D&D Portal Wiki project.`,
		descriptions: {
			long: [
				[
					text(
						'D&D Portal consists of a public rules wiki and a separate player portal for campaigns, parties, and session planning.'
					)
				],
				[
					text(
						'The wiki collects rules, character options, campaign restrictions, homebrew material, and reference information in one place.'
					)
				],
				[
					text(
						'The player portal is intended for campaign organisation, planned playing dates, party membership, and player-specific campaign information.'
					)
				]
			]
		},
		content: content([
			{
				id: 'what-is-dnd-portal',
				title: 'What Is D&D Portal?',
				blocks: [
					textParagraph(
						'D&D Portal is a collection of tools and reference pages created to support Dungeons & Dragons campaigns organised and managed by Toon van Berkel.'
					),
					textParagraph(
						'The project is divided into two main parts: the D&D Portal Wiki and the D&D Player Portal.'
					),
					list([
						'The D&D Portal Wiki contains rules, character options, campaign restrictions, homebrew material, and reference information.',
						'The D&D Player Portal contains campaign organisation, parties, members, announcements, and planned playing dates.'
					])
				]
			},
			{
				id: 'wiki-purpose',
				title: 'The D&D Portal Wiki',
				blocks: [
					textParagraph(
						'The Wiki is intended as a central reference point where players can find information that is useful before and during a game session.'
					),
					list([
						'Playable classes, subclasses, species, backgrounds, feats, spells, equipment, and other character options.',
						'Combat, movement, exploration, spellcasting, rests, conditions, damage types, and other game rules.',
						'Campaign-specific rule changes, restrictions, allowances, and table clarifications.',
						'Homebrew classes, creatures, items, mechanics, locations, NPCs, and lore.',
						'Source notes, credits, accessibility information, transparency notes, and legal information.'
					]),
					textParagraph(
						'The main purpose is to keep campaign information findable instead of scattered across old messages, loose documents, and several rulebooks.'
					)
				]
			},
			{
				id: 'player-portal',
				title: 'The D&D Player Portal',
				blocks: [
					textParagraph(
						'The Player Portal is separate from the public Wiki. It focuses on campaign organisation rather than public rules reference.'
					),
					list([
						'Upcoming D&D session dates.',
						'Previous and planned playing dates.',
						'Parties a player belongs to.',
						'Campaign and party names.',
						'Members connected to a party.',
						'Campaign-specific announcements or private player information.'
					]),
					textParagraph(
						'Unlike the public Wiki, parts of the Player Portal may be intended only for players who participate in the relevant campaigns.'
					)
				]
			},
			{
				id: 'responsibilities',
				title: 'Wiki and Portal Responsibilities',
				blocks: [
					textParagraph(
						'The Wiki and Player Portal solve different problems and should not be treated as interchangeable pages.'
					),
					list([
						'The Wiki is responsible for rules explanations, character options, campaign restrictions, source context, and public reference pages.',
						'The Player Portal is responsible for party membership, schedule planning, campaign administration, and player-specific context.',
						'Project pages such as credits, sources, accessibility, AI transparency, and changelog explain how the public site is maintained.'
					])
				]
			},
			{
				id: 'content-scope',
				title: 'Content Scope',
				blocks: [
					textParagraph(
						'The Wiki can include official references, simplified rule explanations, Dungeon Master interpretations, house rules, campaign restrictions, original homebrew, and supporting lore.'
					),
					textParagraph(
						'Not every page is official rules text. Some pages document what a specific table uses, what a campaign allows, or how homebrew material should be read.'
					),
					paragraph([
						text('For source context, use '),
						link('internals.project.sources', 'Sources'),
						text('. For ownership and fan-content context, use the '),
						link('internals.legal.notice', 'Legal Notice'),
						text('.')
					])
				]
			},
			{
				id: 'maintenance',
				title: 'Maintenance and Corrections',
				blocks: [
					textParagraph(
						'D&D Portal is maintained over time. Pages may be rewritten, expanded, corrected, reorganised, or removed when campaign rules change or when better structure becomes available.'
					),
					paragraph([
						text('Problems can be reported through '),
						link('externals.github.reportProblem', 'GitHub issues'),
						text(' or '),
						link('externals.mail.main', 'email'),
						text('.')
					])
				]
			}
		])
	}),

	credits: createInternalPage({
		href: current.credits.href,
		img: current.credits.logos.simple,
		title: `${website.name.short} - ${current.credits.name.normal}`,
		subTitle: 'Creators and contributors',
		description: `View acknowledgements for the people, projects,
			artists, tools, and resources used by the D&D Portal Wiki.`,
		descriptions: {
			long: [
				[
					text(
						'D&D Portal was designed, developed, published, and maintained by Toon van Berkel.'
					)
				],
				[
					text(
						'This page records credits for the website itself, reported improvements, source material, visual assets, icons, tools, and external services.'
					)
				],
				[
					text(
						'D&D Portal is an independently created fan resource and is not an official Dungeons & Dragons product.'
					)
				]
			]
		},
		content: content([
			{
				id: 'website-creation',
				title: 'Website Creation and Maintenance',
				blocks: [
					textParagraph(
						'D&D Portal was designed, developed, published, and is maintained by Toon van Berkel.'
					),
					textParagraph(
						'The website was created as an accessible reference for players participating in Dungeons & Dragons campaigns managed through the D&D Portal project.'
					),
					textParagraph(
						'The website is independently created fan content. It is not operated, sponsored, endorsed, or specifically approved by Wizards of the Coast.'
					)
				]
			},
			{
				id: 'reporting-problems',
				title: 'Reporting Problems and Recommending Improvements',
				blocks: [
					textParagraph(
						'Technical problems, content corrections, feature requests, accessibility problems, and suggestions for new pages should preferably be submitted through the public GitHub repository.'
					),
					list([
						'A clear and descriptive title.',
						'A link to the page where the problem occurs.',
						'A description of the current behaviour or content.',
						'A description of what you expected to see instead.',
						'Steps to reproduce a technical problem.',
						'Screenshots, error messages, or code examples where relevant.',
						'A source reference when suggesting a correction to an official rule.'
					]),
					paragraph([
						text('Use '),
						link('externals.github.reportProblem', 'GitHub issues'),
						text(' for public reports or '),
						link('externals.mail.main', 'email'),
						text(' for private questions.')
					])
				]
			},
			{
				id: 'contributing',
				title: 'Contributing to the Website',
				blocks: [
					textParagraph(
						'Community contributions are welcome when they improve accuracy, readability, accessibility, organisation, or technical quality.'
					),
					list([
						'Correcting spelling, grammar, and unclear wording.',
						'Reporting incorrect or outdated rule information.',
						'Improving keyboard navigation or screen-reader support.',
						'Fixing broken links or layout problems.',
						'Improving mobile and tablet usability.',
						'Adding missing source references.',
						'Improving page organisation and navigation.',
						'Suggesting new campaign tools or reference pages.',
						'Submitting technical improvements through a pull request.'
					]),
					paragraph([
						text('Submitted material is subject to the '),
						link('internals.legal.contributionTerms', 'Contribution Terms'),
						text('.')
					])
				]
			},
			{
				id: 'contact',
				title: 'Professional and General Contact',
				blocks: [
					textParagraph(
						'Professional questions about web development, software development, design, collaboration, or related business matters should use professional contact routes.'
					),
					paragraph([
						text('Questions specifically relating to D&D Portal can be sent by '),
						link('externals.mail.main', 'email'),
						text('. Do not use this contact information to request copies of commercial Dungeons & Dragons books or copyrighted material.')
					])
				]
			},
			{
				id: 'rules-source-material',
				title: 'Rules and Source Material',
				blocks: [
					textParagraph(
						'D&D Portal uses official rules, simplified explanations, campaign-specific interpretations, original homebrew, and third-party inspiration.'
					),
					paragraph([
						text('The detailed register is maintained on the '),
						link('internals.project.sources', 'Sources'),
						text(' page.')
					])
				]
			},
			{
				id: 'artwork',
				title: 'Artwork and Visual Material',
				blocks: [
					textParagraph(
						'Visual material can include class portraits, species portraits, supporting page images, icons, edited images, and temporary references.'
					),
					paragraph([
						text('AI-generated and AI-assisted visuals are documented on the '),
						link('internals.project.aiTransparency', 'AI Transparency'),
						text(' page.')
					])
				]
			},
			{
				id: 'icons-interface-assets',
				title: 'Icons and Interface Assets',
				blocks: [
					textParagraph(
						'Interface icons are used for classes, rules, damage types, conditions, movement, spells, equipment, navigation, and project pages.'
					),
					textParagraph(
						'Icon attribution should remain visible when externally sourced or adapted icon sets are used.'
					)
				]
			},
			{
				id: 'tools-technology',
				title: 'Tools and Technology',
				blocks: [
					list([
						'SvelteKit for routing and application structure.',
						'Svelte components for page headers, cards, content sections, inline links, tables, and navigation.',
						'TypeScript for central page data and safer metadata.',
						'Sass and CSS for layout, visual styling, and responsive behaviour.',
						'GitHub for source control, development history, issue reports, and contribution review.'
					])
				]
			},
			{
				id: 'copyright-ownership',
				title: 'Copyright and Ownership',
				blocks: [
					textParagraph(
						'Original website code, structure, and project-specific written material belong to their respective authors unless otherwise stated.'
					),
					textParagraph(
						'Dungeons & Dragons names, marks, product titles, settings, and related properties belong to Wizards of the Coast LLC and other applicable rights holders.'
					)
				]
			},
			{
				id: 'special-thanks',
				title: 'Special Thanks',
				blocks: [
					textParagraph(
						'Special thanks go to the players and Dungeon Masters who test rules at the table, report confusing pages, suggest improvements, and make the project useful.'
					)
				]
			}
		])
	}),

	sources: createInternalPage({
		href: current.sources.href,
		img: current.sources.logos.simple,
		title: `${website.name.short} - ${current.sources.name.normal}`,
		subTitle: 'Referenced material',
		description: `View the books, websites, documents, and other
			resources referenced throughout the D&D Portal Wiki.`,
		descriptions: {
			long: [
				[
					text(
						'D&D Portal uses official publications, official online references, campaign documents, original material, and player feedback.'
					)
				],
				[
					text(
						'A listed source does not necessarily mean every part of that source is reproduced, currently used, or allowed in every campaign.'
					)
				],
				[
					text(
						'The register helps separate official rules, simplified explanations, Dungeon Master interpretations, campaign-specific rules, homebrew, and third-party material.'
					)
				]
			]
		},
		content: content([
			{
				id: 'how-sources-are-used',
				title: 'How Sources Are Used',
				blocks: [
					textParagraph(
						'D&D Portal uses sources for rules reference, page organisation, historical comparison, mechanical inspiration, homebrew development, and campaign documentation.'
					),
					list([
						'Official Dungeons & Dragons rules.',
						'Simplified explanations of official rules.',
						'Dungeon Master interpretations.',
						'Campaign-specific house rules.',
						'Original homebrew material.',
						'Third-party or community-created material.'
					])
				]
			},
			{
				id: 'source-author-licence',
				title: 'Source, Author, and Licence',
				blocks: [
					textParagraph(
						'A source, an author, and a licence are different things. Public accessibility does not automatically mean content is free from copyright or may be republished without permission.'
					),
					textParagraph(
						'When possible, D&D Portal should summarise, explain, organise, or link to source material instead of replacing the original publication.'
					)
				]
			},
			{
				id: 'registered-sources',
				title: 'Registered Sources',
				blocks: [
					textParagraph('The live source register currently contains 24 source entries.'),
					list(sourceRegister)
				]
			},
			{
				id: 'official-publications',
				title: 'Official Publications',
				blocks: [
					textParagraph(
						'Official publications are used for direct rules reference, comparison, and attribution. Some older books are used as inspiration for conversion or homebrew development.'
					),
					list([
						'Core rule references such as D&D Basic Rules, Player\'s Handbook, and Dungeon Master\'s Guide.',
						'Expansion references such as Mordenkainen Presents: Monsters of the Multiverse.',
						'Older D&D books used for concepts, prestige-class inspiration, feats, monsters, spells, or item research.'
					])
				]
			},
			{
				id: 'online-references',
				title: 'Online References',
				blocks: [
					paragraph([
						text('Online references include '),
						link('externals.dndbeyond.homepage', 'D&D Beyond'),
						text(', Wizards of the Coast pages, and the '),
						link('externals.wizards.fanContentPolicy', 'Fan Content Policy'),
						text('.')
					]),
					textParagraph(
						'External pages can change, move, or disappear. A listed link should be treated as attribution and reference context, not as a guarantee of permanent availability.'
					)
				]
			},
			{
				id: 'campaign-homebrew',
				title: 'Campaign and Homebrew Sources',
				blocks: [
					textParagraph(
						'D&D Portal also uses campaign notes, original homebrew material, player feedback, and Dungeon Master rulings.'
					),
					textParagraph(
						'These sources document what the connected campaigns use. They do not claim official status and may differ between tables.'
					)
				]
			}
		])
	}),

	aiTransparency: createInternalPage({
		href: current.aiTransparency.href,
		title: `${website.name.short} - ${current.aiTransparency.name.normal}`,
		subTitle: 'Artificial intelligence usage',
		description: `Read how artificial intelligence tools are used,
			reviewed, and disclosed during development of the wiki.`,
		descriptions: {
			long: [
				[
					text(
						'D&D Portal uses artificial intelligence for a limited number of supporting visuals, including class cards, subclass cards, character concepts, species references, locations, NPCs, and monsters.'
					)
				],
				[
					text(
						'AI visuals are used to provide a quick visual impression of the content and are not presented as official artwork, commissioned artwork, or manually illustrated work.'
					)
				],
				[
					text(
						'The presence of an AI-generated image does not mean the related written content was also generated by AI.'
					)
				]
			]
		},
		content: content([
			{
				id: 'use-of-ai',
				title: 'Use of Artificial Intelligence',
				blocks: [
					textParagraph(
						'D&D Portal may use artificial intelligence for supporting visuals, image variations, background edits, page-card illustrations, temporary placeholders, and concept references.'
					),
					textParagraph(
						'These images are used to help players quickly recognise the subject of a page. They are not intended to replace official art, commissioned art, or professional artists.'
					),
					textParagraph(
						'AI-generated images on this website are not presented as original hand-drawn, painted, photographed, or manually illustrated works by Toon van Berkel.'
					)
				]
			},
			{
				id: 'how-ai-images-are-used',
				title: 'How AI Images Are Used',
				blocks: [
					list([
						'Class and subclass cards.',
						'Homebrew character concepts.',
						'Species and creature references.',
						'Campaign locations and environments.',
						'Non-player character portraits.',
						'Alternative character appearances.',
						'Background replacements and visual edits.',
						'Temporary illustrations while original artwork is unavailable.'
					])
				]
			},
			{
				id: 'classification',
				title: 'Image Classifications',
				blocks: [
					textParagraph(
						'AI-generated images are primarily created through an image-generation tool. AI-assisted images start from an existing image and use AI for edits, expansion, cleanup, variations, or background work.'
					),
					textParagraph(
						'Image records should identify the page or asset group, the kind of AI involvement, and the purpose of the image when that matters for transparency.'
					)
				]
			},
			{
				id: 'image-register',
				title: 'AI Image Register',
				blocks: [
					textParagraph(
						'The following local asset groups are treated as AI-generated or AI-assisted supporting images and should stay visible in the transparency register.'
					),
					list(aiImageRegister)
				]
			},
			{
				id: 'written-content',
				title: 'Written Content Review',
				blocks: [
					textParagraph(
						'AI may assist with drafting, restructuring, summarising, or expanding text, but rules content should still be reviewed before it is used as campaign reference.'
					),
					list([
						'Official rule summaries should be checked against the relevant source or table ruling.',
						'Homebrew text should be reviewed for balance, clarity, and campaign fit.',
						'Links should use central data paths where possible.',
						'Generated descriptions should be edited so they match the site tone and structure.',
						'AI output should not be treated as a source by itself.'
					])
				]
			},
			{
				id: 'limitations',
				title: 'Limitations',
				blocks: [
					textParagraph(
						'AI-generated images can contain visual errors, misleading details, inconsistent equipment, inaccurate anatomy, or implied rules details that are not actually part of the page.'
					),
					textParagraph(
						'When an image conflicts with written rules, the written page content and source references take priority.'
					)
				]
			}
		])
	}),

	accessibility: createInternalPage({
		href: current.accessibility.href,
		title: `${website.name.short} - ${current.accessibility.name.normal}`,
		subTitle: 'Accessible design',
		description: `Read about accessibility features, design decisions,
			current limitations, and planned improvements.`,
		descriptions: {
			long: [
				[
					text(
						'D&D Portal aims to make rules, campaign information, character options, and reference material accessible to as many visitors as reasonably possible.'
					)
				],
				[
					text(
						'The website is designed with readability as a primary concern across devices, input methods, and assistive technologies.'
					)
				],
				[
					text(
						'Accessibility is treated as an ongoing process rather than a one-time task.'
					)
				]
			]
		},
		content: content([
			{
				id: 'commitment',
				title: 'Accessibility Commitment',
				blocks: [
					textParagraph(
						'D&D Portal prioritises readable content, predictable spacing, clear page structure, and usable navigation.'
					),
					textParagraph(
						'No claim is made that every page, feature, or third-party resource is completely free from accessibility barriers.'
					)
				]
			},
			{
				id: 'goals',
				title: 'Accessibility Goals',
				blocks: [
					list([
						'Present information in a clear and predictable structure.',
						'Support navigation by keyboard.',
						'Use readable fonts and comfortable line spacing.',
						'Maintain sufficient contrast between text and backgrounds.',
						'Provide visible focus indicators for interactive elements.',
						'Use meaningful headings and semantic HTML.',
						'Provide text alternatives for meaningful images.',
						'Avoid unnecessary animation and visual movement.',
						'Support visitors who prefer reduced motion.',
						'Ensure layouts remain usable on smaller screens.',
						'Avoid relying on colour alone to communicate important information.',
						'Use clear labels for buttons, links, inputs, and navigation controls.'
					])
				]
			},
			{
				id: 'readable-typography',
				title: 'Readable Typography',
				blocks: [
					textParagraph(
						'Reading is the main purpose of the Wiki. Typography should make long rules text comfortable to scan and understand.'
					),
					list([
						'Clearly distinguishable letters and numbers.',
						'Readable paragraph widths.',
						'Comfortable line height.',
						'Visible heading hierarchy.',
						'Consistent spacing between sections.',
						'Reduced visual clutter around dense reference text.'
					])
				]
			},
			{
				id: 'keyboard-navigation',
				title: 'Keyboard Navigation',
				blocks: [
					textParagraph(
						'Interactive elements should be reachable and operable without a mouse.'
					),
					list([
						'Move between links and controls using Tab.',
						'Activate links and buttons using Enter or Space where appropriate.',
						'Keep focus indicators visible.',
						'Avoid keyboard traps.',
						'Use semantic buttons for actions and links for navigation.'
					])
				]
			},
			{
				id: 'responsive-design',
				title: 'Responsive Design',
				blocks: [
					textParagraph(
						'The interface should remain usable across desktop, tablet, and mobile layouts.'
					),
					list([
						'Navigation should adapt between sidebar and smaller-screen layouts.',
						'Tables and card grids should remain readable on narrow screens.',
						'Text should not overlap images, controls, sidebars, or following content.',
						'Page headers should remain readable even when artwork is present.'
					])
				]
			},
			{
				id: 'known-limitations',
				title: 'Known Limitations',
				blocks: [
					textParagraph(
						'Some pages are still being migrated to structured reusable components, and older content may need additional review.'
					),
					textParagraph(
						'Large tables, complex filters, visual cards, generated images, and third-party links require continued testing on different devices and assistive technologies.'
					)
				]
			},
			{
				id: 'reporting-problems',
				title: 'Reporting Accessibility Problems',
				blocks: [
					textParagraph(
						'Accessibility reports should include the affected URL, the browser or device, assistive technology details when relevant, and a short description of what could not be completed.'
					),
					paragraph([
						text('Reports can be sent through '),
						link('externals.github.reportProblem', 'GitHub issues'),
						text(' or '),
						link('externals.mail.main', 'email'),
						text('.')
					])
				]
			}
		])
	}),

	changelog: createInternalPage({
		href: current.changelog.href,
		img: current.changelog.logos.simple,
		title: `${website.name.short} - ${current.changelog.name.normal}`,
		subTitle: 'Project updates',
		description: `View recent additions, changes, fixes, removals,
			and other updates made to the D&D Portal Wiki.`,
		descriptions: {
			long: [
				[
					text(
						'The changelog records meaningful public Wiki changes, including new pages, content additions, corrected information, navigation updates, accessibility work, and technical improvements.'
					)
				],
				[
					text(
						'Small spelling corrections, minor formatting changes, dependency updates, and internal development work may not always receive individual changelog entries.'
					)
				],
				[
					text(
						'The changelog applies to the public Wiki. The separate D&D Player Portal may use its own version history and release process.'
					)
				]
			]
		},
		content: content([
			{
				id: 'about-the-changelog',
				title: 'About the Changelog',
				blocks: [
					textParagraph(
						'This page records meaningful changes made to the D&D Portal Wiki, including technical improvements, new pages, content additions, corrected information, navigation updates, accessibility work, and project developments.'
					),
					textParagraph(
						'Entries are grouped by release theme rather than by every small internal commit.'
					)
				]
			},
			{
				id: 'change-categories',
				title: 'Change Categories',
				blocks: [
					list([
						'Added: new pages, features, components, or functionality.',
						'Changed: existing behaviour, structure, design, or information that was revised.',
						'Fixed: errors, broken behaviour, incorrect information, or technical problems.',
						'Content: rules, classes, species, campaigns, or other Wiki content.',
						'Removed: features or information that are no longer available.',
						'Security: privacy, security, dependency, or vulnerability-related changes.'
					])
				]
			},
			{
				id: 'release-history',
				title: 'Release History',
				blocks: [changelog(changelogReleases)]
			}
		])
	})
} as const;
