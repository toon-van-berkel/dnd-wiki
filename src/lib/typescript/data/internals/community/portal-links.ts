/*
	Adding a portal link:
	1. Copy one object in the `portalLinks` array.
	2. Give it a unique ID.
	3. Use a central data path for internal Wiki pages.
	4. Use a full URL only for external pages.

	The page groups links automatically.
	Featured links sort first within their category.
	No route or component changes are required.
*/
import type { CommunityPortalLink } from './_types_';

export const portalLinks = [
	{
		id: 'homepage',
		title: 'D&D Portal Wiki',
		description: 'Start from the main Wiki page and browse the public reference sections.',
		href: 'internals.website.homepage',
		category: 'gettingStarted',
		featured: true
	},
	{
		id: 'search',
		title: 'Search the Wiki',
		description: 'Find classes, rules, spells, project pages, and other indexed public content.',
		href: 'internals.utility.search',
		category: 'gettingStarted',
		featured: true
	},
	{
		id: 'classes',
		title: 'Classes',
		description: 'Browse class pages, class features, subclass links, and progression content.',
		href: 'internals.classes.page',
		category: 'classes',
		featured: true
	},
	{
		id: 'spells',
		title: 'Spells',
		description: 'Browse spell pages by level, class, school, components, and other filters.',
		href: 'internals.spells.page',
		category: 'spells',
		featured: true
	},
	{
		id: 'rules',
		title: 'Rules',
		description: 'Open the rules reference pages used by inline links and hover previews.',
		href: 'internals.rules.page',
		category: 'rules',
		featured: true
	},
	{
		id: 'changelog',
		title: 'Changelog',
		description: 'Read the complete public release history for meaningful Wiki changes.',
		href: 'internals.project.changelog',
		category: 'project',
		featured: true
	},
	{
		id: 'about',
		title: 'About D&D Portal',
		description: 'Read what the Wiki is for, how it is maintained, and how it relates to the wider project.',
		href: 'internals.project.about',
		category: 'project'
	},
	{
		id: 'discord',
		title: 'Discord Community',
		description: 'Open the central page for Discord community information and public Discord-linked updates.',
		href: 'internals.community.discord.page',
		category: 'community',
		featured: true
	},
	{
		id: 'issues',
		title: 'Issues and Feedback',
		description: 'View confirmed public issues and feedback without exposing private reports.',
		href: 'internals.community.issues',
		category: 'community'
	},
	{
		id: 'roadmap',
		title: 'Roadmap',
		description: 'View planned and ongoing public Wiki work at a high level.',
		href: 'internals.community.roadmap',
		category: 'community'
	}
] as const satisfies readonly CommunityPortalLink[];
