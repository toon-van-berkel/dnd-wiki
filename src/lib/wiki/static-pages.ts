import type { WikiPageEntry } from './registry.js';

export const staticPages = [
	{
		id: 'home',
		title: 'Rules for our table',
		href: '/',
		description:
			'A practical campaign wiki for our players. Use it as the source of truth for table rulings, character options, and campaign-specific exceptions.',
		eyebrow: 'D&D Portal wiki',
		kind: 'information',
		searchable: false
	},
	{
		id: 'rules',
		title: 'Rules',
		href: '/rules',
		description:
			'Custom rulings used at our table. These pages summarize how we resolve common situations without reproducing book text.',
		eyebrow: 'House rules',
		kind: 'collection',
		searchable: false,
		navigation: true,
		icon: 'rules'
	},
	{
		id: 'rules--movement',
		title: 'Movement',
		href: '/rules/movement',
		description: 'Table rulings for tactical positioning, hazardous terrain, and travel.',
		eyebrow: 'Rule page',
		kind: 'rule',
		parentId: 'rules',
		tags: ['combat', 'travel', 'movement'],
		keywords: ['speed', 'terrain', 'positioning', 'exploration'],
		navigation: true
	},
	{
		id: 'rules--fighting',
		title: 'Fighting',
		href: '/rules/fighting',
		description: 'Combat rulings intended to keep encounters tactical, quick, and easy to understand.',
		eyebrow: 'Rule page',
		kind: 'rule',
		parentId: 'rules',
		tags: ['combat', 'melee', 'ranged'],
		keywords: ['critical hits', 'flanking', 'attacks'],
		navigation: true
	},
	{
		id: 'monsters',
		title: 'Monsters',
		href: '/monsters',
		description: 'A player-safe bestiary of creatures encountered during our campaigns.',
		eyebrow: 'Bestiary',
		kind: 'collection',
		searchable: false,
		navigation: true,
		icon: 'fiend'
	},
	{
		id: 'locations',
		title: 'Locations',
		href: '/locations',
		description:
			'Settlements, regions, landmarks, and other places discovered in the campaign world.',
		eyebrow: 'World guide',
		kind: 'collection',
		searchable: false,
		navigation: true
	},
	{
		id: 'search',
		title: 'Search the Wiki',
		href: '/search',
		description:
			'Search individual rules, character options, spells, equipment, creatures, locations, and other Wiki content.',
		eyebrow: 'Wiki search',
		kind: 'information',
		searchable: false
	},
	{
		id: 'preferences',
		title: 'Preferences',
		href: '/preferences',
		description: 'Set browser-local Wiki preferences for campaign availability context.',
		eyebrow: 'Settings',
		kind: 'settings',
		searchable: false
	},
	{
		id: 'about',
		title: 'About D&D Portal',
		href: '/about',
		description:
			'D&D Portal consists of a public rules wiki and a separate player portal for campaigns, parties, and session planning.',
		eyebrow: 'About the project',
		kind: 'information',
		searchable: true
	},
	{
		id: 'credits',
		title: 'Credits',
		href: '/credits',
		description:
			'Information about the people, tools, sources, artwork, and technologies that helped make D&D Portal possible.',
		eyebrow: 'About this website',
		kind: 'information',
		searchable: true
	},
	{
		id: 'sources',
		title: 'Sources',
		href: '/sources',
		description:
			'Books, official websites, campaign documents, and other reference material used throughout the D&D Portal Wiki.',
		eyebrow: 'References and attribution',
		kind: 'information',
		searchable: true
	},
	{
		id: 'ai',
		title: 'AI Transparency',
		href: '/ai',
		description:
			'Information about how artificial intelligence is used on D&D Portal and which images were generated or modified using AI.',
		eyebrow: 'Website transparency',
		kind: 'information',
		searchable: true
	},
	{
		id: 'accessibility',
		title: 'Accessibility',
		href: '/accessibility',
		description:
			'Information about the accessibility goals, supported features, known limitations, and improvement process of D&D Portal.',
		eyebrow: 'Accessibility statement',
		kind: 'information',
		searchable: true
	},
	{
		id: 'changelog',
		title: 'Changelog',
		href: '/changelog',
		description:
			'A chronological overview of new features, content additions, improvements, fixes, and other changes made to the D&D Portal Wiki.',
		eyebrow: 'Project development',
		kind: 'information',
		searchable: false
	},
	{
		id: 'legal',
		title: 'Legal Notice',
		href: '/legal',
		description:
			'Important information about ownership, permitted use, third-party material, liability, and the unofficial nature of this website.',
		eyebrow: 'Legal information',
		kind: 'legal',
		searchable: false
	},
	{
		id: 'privacy',
		title: 'Privacy Notice',
		href: '/privacy',
		description:
			'Information about what data the D&D Portal Wiki does and does not process, how browser preferences work, and how visitors can exercise their privacy rights.',
		eyebrow: 'Privacy and personal data',
		kind: 'legal',
		searchable: false
	},
	{
		id: 'cookies',
		title: 'Cookie Notice',
		href: '/cookies',
		description:
			'Information about cookies and similar browser technologies used by the D&D Portal Wiki.',
		eyebrow: 'Cookies and browser storage',
		kind: 'legal',
		searchable: false
	},
	{
		id: 'contribution-terms',
		title: 'Contribution Terms',
		href: '/contribution-terms',
		description:
			'The conditions that apply when submitting code, written content, artwork, corrections, or other material to the D&D Portal Wiki.',
		eyebrow: 'Contributing to the project',
		kind: 'legal',
		searchable: false
	},
	{
		id: 'content-removal',
		title: 'Content Removal',
		href: '/content-removal',
		description:
			'How to request the correction, restriction, or removal of content published on the D&D Portal Wiki.',
		eyebrow: 'Reporting and removal requests',
		kind: 'legal',
		searchable: false
	}
] satisfies readonly WikiPageEntry[];
