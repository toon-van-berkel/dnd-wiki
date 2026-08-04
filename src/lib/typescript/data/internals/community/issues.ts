/*
	Adding an issue:
	1. Copy one object in the `publicIssues` array.
	2. Give it a unique ID.
	3. Set reportedAt as YYYY-MM-DD.
	4. Update status, updatedAt, resolution, and links when the item changes.

	The page sorts unresolved items before resolved, declined, and duplicates.
	No route or component changes are required.
*/
import type { PublicIssue } from './_types_';
import { isResolvedIssue } from './_types_';

const publicIssueItems = [
	{
		id: 'search-result-logo-preview',
		title: 'Search results can show the wrong favicon or logo',
		summary:
			'External search previews may still show an outdated or incorrect image while search providers refresh cached metadata.',
		status: 'in-progress',
		source: 'discord',
		category: 'seo',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		relatedPage: 'internals.community.roadmap'
	},
	{
		id: 'social-preview-inconsistent-images',
		title: 'Social previews used inconsistent page images',
		summary:
			'Some routes used class or old logo images instead of the dedicated social sharing preview image.',
		status: 'resolved',
		source: 'internal',
		category: 'seo',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		resolution:
			'The SEO helper now uses the dedicated D&D Portal Wiki social preview image by default for all pages.',
		relatedPage: 'internals.project.changelog'
	},
	{
		id: 'github-actions-pnpm-version-mismatch',
		title: 'GitHub Actions failed on pnpm version mismatch',
		summary:
			'The workflow configured pnpm 10 while package.json declared pnpm 11.10.0.',
		status: 'resolved',
		source: 'github',
		category: 'technical',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		resolution:
			'The hard-coded workflow pnpm version was removed so the action uses packageManager from package.json.',
		relatedPage: 'internals.project.changelog'
	},
	{
		id: 'monsters-locations-species-content-gaps',
		title: 'Some content areas still need more public detail',
		summary:
			'Monsters, locations, and species pages exist as public areas but still need deeper content expansion.',
		status: 'planned',
		source: 'internal',
		category: 'content',
		reportedAt: '2026-08-04',
		updatedAt: '2026-08-04',
		relatedPage: 'internals.community.roadmap'
	}
] as const satisfies readonly PublicIssue[];

export const publicIssues = [...publicIssueItems].sort((left, right) => {
	const leftResolved = isResolvedIssue(left.status);
	const rightResolved = isResolvedIssue(right.status);

	if (leftResolved !== rightResolved) {
		return leftResolved ? 1 : -1;
	}

	return (right.updatedAt ?? right.reportedAt).localeCompare(left.updatedAt ?? left.reportedAt);
});
