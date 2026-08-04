/*
	Adding a roadmap item:
	1. Copy one object in the `roadmapItems` array.
	2. Give it a unique ID.
	3. Set status, area, and priority when known.
	4. Add targetVersion, targetDate, or links only when they are real.

	The page groups items by status automatically.
	No route or component changes are required.
*/
import type { RoadmapItem } from './_types_';
import { isInactiveRoadmapStatus } from './_types_';

const roadmapItemList = [
	{
		id: 'search-engine-logo-presentation',
		title: 'Improve search-engine logo presentation',
		summary:
			'Continue checking how Google Search and other external previews choose the site favicon, logo, and social image after metadata updates have been deployed.',
		status: 'in-progress',
		priority: 'high',
		area: 'search',
		targetVersion: '0.9.x',
		relatedPage: 'internals.community.issues'
	},
	{
		id: 'expand-monsters-locations-species',
		title: 'Expand monsters, locations, and species content',
		summary:
			'Add more complete public reference content to the existing monsters, locations, and species sections without inventing missing campaign data.',
		status: 'planned',
		priority: 'medium',
		area: 'content',
		relatedPage: 'internals.monsters.page'
	},
	{
		id: 'community-transparency-section',
		title: 'Community and transparency section',
		summary:
			'Publish curated Discord-linked announcements, Wiki updates, portal links, public issue tracking, and public roadmap pages from simple TypeScript data arrays.',
		status: 'review',
		priority: 'high',
		area: 'community',
		targetVersion: '0.9.x',
		relatedPage: 'internals.community.discord.page'
	},
	{
		id: 'spell-search-refinement',
		title: 'Refine spell search and filters',
		summary:
			'Review spell descriptions, filter labels, mobile behavior, and result density after the full spell dataset is available publicly.',
		status: 'idea',
		priority: 'medium',
		area: 'spells',
		relatedPage: 'internals.spells.page'
	},
	{
		id: 'repository-documentation-expanded',
		title: 'Repository documentation expansion',
		summary:
			'Add README, contribution guidance, security policy, architecture notes, deployment notes, GitHub issue templates, and pull request template.',
		status: 'completed',
		priority: 'medium',
		area: 'documentation',
		targetVersion: '0.9.0',
		relatedPage: 'internals.project.about'
	}
] as const satisfies readonly RoadmapItem[];

export const roadmapItems = [...roadmapItemList].sort((left, right) => {
	const leftInactive = isInactiveRoadmapStatus(left.status);
	const rightInactive = isInactiveRoadmapStatus(right.status);

	if (leftInactive !== rightInactive) {
		return leftInactive ? 1 : -1;
	}

	return left.title.localeCompare(right.title);
});
