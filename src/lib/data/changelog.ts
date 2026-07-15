export type ChangeType =
	| 'added'
	| 'changed'
	| 'fixed'
	| 'removed'
	| 'security'
	| 'content';

export type ChangeLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type ChangeItem = {
	type: ChangeType;
	title: string;
	description: string;
	links?: ChangeLink[];
};

export type ChangelogRelease = {
	id: string;
	version: string;
	date: string;
	title: string;
	summary: string;
	items: ChangeItem[];
};

export const changeTypeLabels: Record<ChangeType, string> = {
	added: 'Added',
	changed: 'Changed',
	fixed: 'Fixed',
	removed: 'Removed',
	security: 'Security',
	content: 'Content'
};

export const changelog: ChangelogRelease[] = [
	{
		id: 'v0-7-0',
		version: '0.7.0',
		date: '2026-07-15',
		title: 'Transparency and project information',
		summary:
			'Added a complete collection of project information, attribution, accessibility, and transparency pages.',
		items: [
			{
				type: 'added',
				title: 'Credits page',
				description:
					'Added detailed attribution for the website, contributors, tools, artwork, icons, and external resources.',
				links: [
					{
						label: 'View Credits',
						href: '/credits'
					}
				]
			},
			{
				type: 'added',
				title: 'Legal Notice',
				description:
					'Added information about website ownership, permitted use, third-party material, author rights, liability, donations, and content-removal requests.',
				links: [
					{
						label: 'View Legal Notice',
						href: '/legal'
					}
				]
			},
			{
				type: 'added',
				title: 'AI Transparency page',
				description:
					'Added a central register for AI-generated and AI-assisted images used throughout the Wiki.',
				links: [
					{
						label: 'View AI Transparency',
						href: '/ai'
					}
				]
			},
			{
				type: 'added',
				title: 'About D&D Portal page',
				description:
					'Added an explanation of the difference between the public D&D Portal Wiki and the separate player portal for campaigns, parties, and playing dates.',
				links: [
					{
						label: 'View About page',
						href: '/about'
					}
				]
			},
			{
				type: 'added',
				title: 'Sources page',
				description:
					'Added a searchable source register for official publications, online references, campaign documents, and original project material.',
				links: [
					{
						label: 'View Sources',
						href: '/sources'
					}
				]
			},
			{
				type: 'added',
				title: 'Accessibility statement',
				description:
					'Added information about keyboard navigation, readable typography, reduced motion, responsive design, alternative text, and known limitations.',
				links: [
					{
						label: 'View Accessibility',
						href: '/accessibility'
					}
				]
			},
			{
				type: 'changed',
				title: 'Expanded website footer',
				description:
					'Replaced the small footer with a full navigation area containing project, legal, community, creator, and external-resource links.'
			}
		]
	},
	{
		id: 'v0-6-0',
		version: '0.6.0',
		date: '2026-07-14',
		title: 'Navigation and campaign availability',
		summary:
			'Improved navigation behaviour and expanded support for campaign-specific availability information.',
		items: [
			{
				type: 'added',
				title: 'Collapsible desktop sidebar',
				description:
					'Added a control that allows desktop users to collapse the Wiki sidebar and give more space to page content.'
			},
			{
				type: 'changed',
				title: 'Responsive navigation behaviour',
				description:
					'Adjusted the navigation so that mobile devices continue using an overlay menu while desktop devices use the collapsible sidebar.'
			},
			{
				type: 'added',
				title: 'Campaign availability configuration',
				description:
					'Added structured availability information for content that may be allowed, limited, banned, or require approval for individual campaigns.'
			},
			{
				type: 'changed',
				title: 'Party colour system',
				description:
					'Introduced consistent colours and soft background variants for all registered campaigns and guest content.'
			},
			{
				type: 'fixed',
				title: 'Sidebar toggle state',
				description:
					'Corrected layout and TypeScript problems associated with switching between expanded and collapsed navigation.'
			}
		]
	},
	{
		id: 'v0-5-0',
		version: '0.5.0',
		date: '2026-06-29',
		title: 'Class pages and visual cards',
		summary:
			'Expanded the class section with reusable page structures, progression tables, subclass navigation, and class-card images.',
		items: [
			{
				type: 'added',
				title: 'Reusable class-page structure',
				description:
					'Added shared components for headers, sections, availability information, tables, and child-page navigation.'
			},
			{
				type: 'added',
				title: 'Class progression tables',
				description:
					'Added structured level tables for class features, proficiency bonuses, spellcasting, and other progression information.'
			},
			{
				type: 'added',
				title: 'Subclass navigation',
				description:
					'Added links between classes and their available subclasses using the central Wiki navigation structure.'
			},
			{
				type: 'content',
				title: 'Rogue reference content',
				description:
					'Expanded Rogue content with level progression, Sneak Attack information, Expertise, Cunning Action, and subclass pages.',
				links: [
					{
						label: 'View Rogue',
						href: '/classes/rogue'
					}
				]
			},
			{
				type: 'added',
				title: 'Gender-based class-card variations',
				description:
					'Added female and male visual variations for class cards, with the selected variation remembered locally in the browser.'
			}
		]
	}
];