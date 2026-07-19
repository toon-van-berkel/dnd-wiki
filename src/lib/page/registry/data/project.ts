import type { PageRegistryEntry } from '../Registry-Types';

export const projectPages = [
	{
		id: 'about',
		title: 'About D&D Portal',
		href: '/about',
		description:
			'D&D Portal consists of a public rules wiki and a separate player portal for campaigns, parties, and session planning.',
		eyebrow: 'About the project',
		icon: 'iconsList.entity.book',
		searchable: true
	},
	{
		id: 'credits',
		title: 'Credits',
		href: '/credits',
		description:
			'Information about the people, tools, sources, artwork, and technologies that helped make D&D Portal possible.',
		eyebrow: 'About this website',
		icon: 'iconsList.util.star',
		searchable: true
	},
	{
		id: 'sources',
		title: 'Sources',
		href: '/sources',
		description:
			'Books, official websites, campaign documents, and other reference material used throughout the D&D Portal Wiki.',
		eyebrow: 'References and attribution',
		icon: 'iconsList.game.source-book',
		searchable: true
	},
	{
		id: 'ai',
		title: 'AI Transparency',
		href: '/ai',
		description:
			'Information about how artificial intelligence is used on D&D Portal and which images were generated or modified using AI.',
		eyebrow: 'Website transparency',
		icon: 'iconsList.util.build',
		searchable: true
	},
	{
		id: 'accessibility',
		title: 'Accessibility',
		href: '/accessibility',
		description:
			'Information about the accessibility goals, supported features, known limitations, and improvement process of D&D Portal.',
		eyebrow: 'Accessibility statement',
		icon: 'iconsList.attribute.vision',
		searchable: true
	},
	{
		id: 'changelog',
		title: 'Changelog',
		href: '/changelog',
		description:
			'A chronological overview of new features, content additions, improvements, fixes, and other changes made to the D&D Portal Wiki.',
		eyebrow: 'Project development',
		icon: 'iconsList.entity.archive',
		searchable: false
	}
] satisfies PageRegistryEntry[];
