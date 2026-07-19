import type { PageRegistryEntry } from '../Registry-Types';

export const legalPages = [
	{
		id: 'legal',
		title: 'Legal Notice',
		href: '/legal',
		description:
			'Important information about ownership, permitted use, third-party material, liability, and the unofficial nature of this website.',
		eyebrow: 'Legal information',
		icon: 'iconsList.entity.scroll',
		searchable: false
	},
	{
		id: 'privacy',
		title: 'Privacy Notice',
		href: '/privacy',
		description:
			'Information about what data the D&D Portal Wiki does and does not process, how browser preferences work, and how visitors can exercise their privacy rights.',
		eyebrow: 'Privacy and personal data',
		icon: 'iconsList.game.lock',
		searchable: false
	},
	{
		id: 'cookies',
		title: 'Cookie Notice',
		href: '/cookies',
		description:
			'Information about cookies and similar browser technologies used by the D&D Portal Wiki.',
		eyebrow: 'Cookies and browser storage',
		icon: 'iconsList.util.cog',
		searchable: false
	},
	{
		id: 'contribution-terms',
		title: 'Contribution Terms',
		href: '/contribution-terms',
		description:
			'The conditions that apply when submitting code, written content, artwork, corrections, or other material to the D&D Portal Wiki.',
		eyebrow: 'Contributing to the project',
		icon: 'iconsList.entity.scroll',
		searchable: false
	},
	{
		id: 'content-removal',
		title: 'Content Removal',
		href: '/content-removal',
		description:
			'How to request the correction, restriction, or removal of content published on the D&D Portal Wiki.',
		eyebrow: 'Reporting and removal requests',
		icon: 'iconsList.util.cross',
		searchable: false
	}
] satisfies PageRegistryEntry[];
