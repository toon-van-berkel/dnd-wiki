import type {
	CommunityMetadata,
	PublicIssueSource,
	PublicIssueStatus,
	RoadmapPriority,
	RoadmapStatus
} from './_types_';

export const announcementCategories = {
	release: {
		label: 'Release',
		description: 'A public website release or version update.'
	},
	content: {
		label: 'Content',
		description: 'New or expanded Wiki content.'
	},
	community: {
		label: 'Community',
		description: 'Community-facing project or Discord information.'
	},
	maintenance: {
		label: 'Maintenance',
		description: 'Planned maintenance or technical work.'
	}
} as const satisfies Readonly<Record<string, CommunityMetadata>>;

export const wikiUpdateCategories = {
	release: {
		label: 'Release',
		description: 'Short community summary of a release.'
	},
	content: {
		label: 'Content',
		description: 'New or improved public Wiki content.'
	},
	search: {
		label: 'Search',
		description: 'Search, discovery, and findability improvements.'
	},
	docs: {
		label: 'Docs',
		description: 'Repository or project documentation updates.'
	}
} as const satisfies Readonly<Record<string, CommunityMetadata>>;

export const portalLinkCategories = {
	gettingStarted: {
		label: 'Getting Started',
		description: 'Useful first pages for visitors.'
	},
	characterCreation: {
		label: 'Character Creation',
		description: 'Pages used while building characters.'
	},
	classes: {
		label: 'Classes',
		description: 'Class and subclass reference pages.'
	},
	spells: {
		label: 'Spells',
		description: 'Spell browsing and spellcasting pages.'
	},
	rules: {
		label: 'Rules',
		description: 'Game rules and reference explanations.'
	},
	world: {
		label: 'World',
		description: 'Campaign world and location material.'
	},
	project: {
		label: 'Project Information',
		description: 'Project history, transparency, and legal information.'
	},
	community: {
		label: 'Community',
		description: 'Discord, feedback, roadmap, and public coordination pages.'
	}
} as const satisfies Readonly<Record<string, CommunityMetadata>>;

export const publicIssueStatuses = {
	reported: {
		label: 'Reported',
		description: 'Received and listed, but not reviewed yet.'
	},
	'under-review': {
		label: 'Under Review',
		description: 'Being checked for scope, accuracy, or priority.'
	},
	accepted: {
		label: 'Accepted',
		description: 'Confirmed and accepted as valid work.'
	},
	planned: {
		label: 'Planned',
		description: 'Accepted and planned for future work.'
	},
	'in-progress': {
		label: 'In Progress',
		description: 'Currently being worked on.'
	},
	resolved: {
		label: 'Resolved',
		description: 'Addressed in the public site or repository.'
	},
	declined: {
		label: 'Declined',
		description: 'Reviewed and not planned.'
	},
	duplicate: {
		label: 'Duplicate',
		description: 'Covered by another public issue or task.'
	}
} as const satisfies Readonly<Record<PublicIssueStatus, CommunityMetadata>>;

export const publicIssueSources = {
	discord: {
		label: 'Reported through Discord',
		description: 'Submitted through a public or publishable Discord context.'
	},
	github: {
		label: 'Reported through GitHub',
		description: 'Submitted through GitHub issues or repository discussion.'
	},
	website: {
		label: 'Reported through the website',
		description: 'Submitted through public website feedback or contact paths.'
	},
	internal: {
		label: 'Identified internally',
		description: 'Found during project maintenance or review.'
	}
} as const satisfies Readonly<Record<PublicIssueSource, CommunityMetadata>>;

export const publicIssueCategories = {
	content: {
		label: 'Content',
		description: 'Missing, incorrect, unclear, or incomplete page content.'
	},
	seo: {
		label: 'SEO',
		description: 'Search engine and social preview presentation.'
	},
	ui: {
		label: 'UI / UX',
		description: 'Layout, styling, readability, or interaction issues.'
	},
	technical: {
		label: 'Technical',
		description: 'Build, route, dependency, or data problems.'
	},
	accessibility: {
		label: 'Accessibility',
		description: 'Keyboard, semantic, contrast, or assistive technology concerns.'
	}
} as const satisfies Readonly<Record<string, CommunityMetadata>>;

export const roadmapStatuses = {
	idea: {
		label: 'Idea',
		description: 'Possible work that has not been scheduled.'
	},
	planned: {
		label: 'Planned',
		description: 'Accepted for future work.'
	},
	'in-progress': {
		label: 'In Progress',
		description: 'Currently being worked on.'
	},
	review: {
		label: 'Review',
		description: 'Built or drafted and being checked.'
	},
	completed: {
		label: 'Completed',
		description: 'Finished and available publicly or in the repository.'
	},
	paused: {
		label: 'Paused',
		description: 'Not active right now.'
	},
	cancelled: {
		label: 'Cancelled',
		description: 'No longer planned.'
	}
} as const satisfies Readonly<Record<RoadmapStatus, CommunityMetadata>>;

export const roadmapPriorities = {
	high: {
		label: 'High',
		description: 'Important before or soon after public release.'
	},
	medium: {
		label: 'Medium',
		description: 'Useful but not blocking immediate release.'
	},
	low: {
		label: 'Low',
		description: 'Nice to have when time allows.'
	}
} as const satisfies Readonly<Record<RoadmapPriority, CommunityMetadata>>;

export const roadmapAreas = {
	content: {
		label: 'Content',
		description: 'General page content and copy.'
	},
	classes: {
		label: 'Classes',
		description: 'Class and subclass pages.'
	},
	species: {
		label: 'Species',
		description: 'Species pages and character options.'
	},
	spells: {
		label: 'Spells',
		description: 'Spell pages and spell browsing.'
	},
	rules: {
		label: 'Rules',
		description: 'Rules explanations and linked rule references.'
	},
	monsters: {
		label: 'Monsters',
		description: 'Monster reference content.'
	},
	locations: {
		label: 'Locations',
		description: 'World and location content.'
	},
	search: {
		label: 'Search',
		description: 'Search, filters, ranking, and discovery.'
	},
	ui: {
		label: 'UI / UX',
		description: 'Interface, layout, responsive behavior, and readability.'
	},
	accessibility: {
		label: 'Accessibility',
		description: 'Keyboard support, semantics, focus states, and readable markup.'
	},
	technical: {
		label: 'Technical',
		description: 'Build, data model, routing, and validation work.'
	},
	deployment: {
		label: 'Deployment',
		description: 'GitHub Pages and production release setup.'
	},
	documentation: {
		label: 'Documentation',
		description: 'Repository, contribution, and public project docs.'
	},
	community: {
		label: 'Community',
		description: 'Discord, feedback, announcements, and transparency.'
	}
} as const satisfies Readonly<Record<string, CommunityMetadata>>;
