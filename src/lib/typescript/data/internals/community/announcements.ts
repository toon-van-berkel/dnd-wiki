/*
	Adding an announcement:
	1. Copy one object in the `announcements` array.
	2. Give it a unique ID.
	3. Set the date as YYYY-MM-DD.
	4. Add optional links only when needed.

	The page sorts entries automatically.
	No route or component changes are required.
*/
import type { CommunityAnnouncement } from './_types_';
import { byNewestDate } from './_types_';

const announcementItems = [
	{
		id: 'release-0-9-0',
		title: 'Version 0.9.0 is live',
		summary:
			'The public Wiki has received a branch-wide rebuild with expanded class pages, spell pages, rules references, search improvements, SEO metadata, social preview images, and stronger project documentation.',
		date: '2026-08-04',
		category: 'release',
		links: [
			{
				label: 'Read the changelog',
				href: 'internals.project.changelog'
			},
			{
				label: 'Browse the Wiki',
				href: 'internals.website.homepage'
			}
		]
	},
	{
		id: 'community-transparency-pages',
		title: 'Community and transparency pages added',
		summary:
			'Public pages now separate Discord announcements, community-friendly Wiki updates, curated portal links, confirmed issues, and roadmap intentions.',
		date: '2026-08-04',
		category: 'community',
		links: [
			{
				label: 'View roadmap',
				href: 'internals.community.roadmap'
			},
			{
				label: 'View public issues',
				href: 'internals.community.issues'
			}
		]
	},
	{
		id: 'search-and-ai-discovery-review',
		title: 'Search discovery review is in progress',
		summary:
			'The Wiki is being reviewed for search-engine presentation, AI-search visibility, page metadata, canonical links, and the logo shown in external previews.',
		date: '2026-08-04',
		category: 'maintenance',
		links: [
			{
				label: 'View roadmap',
				href: 'internals.community.roadmap'
			}
		]
	}
] as const satisfies readonly CommunityAnnouncement[];

export const announcements = byNewestDate(announcementItems);
