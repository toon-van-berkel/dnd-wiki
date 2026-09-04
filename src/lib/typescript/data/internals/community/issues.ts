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

const publicIssueItems: readonly PublicIssue[] = [
	{
		id: 'equipment-listed-under-rules',
		title: 'Equipment items were listed as rules pages',
		summary:
			'Individual items such as greataxes, handaxes, javelins, and explorer\'s packs appeared under Rules instead of the Equipment section.',
		status: 'resolved',
		source: 'discord',
		category: 'content',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Equipment now has its own top-level section, with item pages generated under type-based Equipment paths while Rules keeps only rule concepts.',
		relatedPage: 'internals.equipment.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'adventuring-gear-missing-item-pages',
		title: 'Adventuring Gear needed real item pages',
		summary:
			'Common supplies such as backpacks, torches, rope, rations, crowbars, grappling hooks, healer\'s kits, lanterns, and explorer\'s packs needed proper central item data and pages.',
		status: 'resolved',
		source: 'discord',
		category: 'content',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Added Adventuring Gear data and generated detail pages for the requested practical equipment references.',
		relatedPage: 'internals.equipment.adventuringGear',
		relatedRelease: '0.9.1'
	},
	{
		id: 'npcs-hidden-under-monsters',
		title: 'NPCs were grouped under Monsters',
		summary:
			'NPC references needed their own top-level category instead of being treated as monster content.',
		status: 'resolved',
		source: 'discord',
		category: 'content',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'NPCs now have their own top-level navigation section and generated detail pages.',
		relatedPage: 'internals.npcs.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'npc-and-equipment-details-too-dense',
		title: 'NPC and equipment detail pages were hard to scan',
		summary:
			'NPC stat blocks and equipment statistics were rendered as dense reference text instead of using the existing structured detail and table components.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'NPC pages now use a structured detail component, and equipment statistics now render through the shared trait table component.',
		relatedPage: 'internals.npcs.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'missing-route-showed-blank-page',
		title: 'Missing pages could render as a blank page',
		summary:
			'Unknown or unavailable routes did not always show a useful not-found experience.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Added a styled not-found page with search and related navigation paths so visitors are not left on a blank screen.',
		relatedPage: 'internals.utility.search',
		relatedRelease: '0.9.1'
	},
	{
		id: 'homepage-background-did-not-reach-edges',
		title: 'Homepage background did not fill the intended area',
		summary:
			'The homepage background image stopped inside the normal content padding instead of reaching the content edges and top boundary.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'The homepage article now uses the shared layout padding variables to let the background reach the edges while preserving the inner text alignment.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'homepage-cards-needed-clearer-visual-identity',
		title: 'Homepage cards needed stronger visual identity',
		summary:
			'Homepage cards looked too similar and did not visually reflect the subject of each card.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'Homepage cards now use glass-like surfaces with per-card accent colors while keeping the icon shape clean and separately colored.',
		relatedPage: 'internals.website.homepage',
		relatedRelease: '0.9.1'
	},
	{
		id: 'page-image-view-dialog-misplaced',
		title: 'Page image View dialog opened in the wrong position',
		summary:
			'Clicking View on class artwork could open the expanded image dialog in the top-left corner of the page.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'The image dialog now explicitly restores native dialog centering that was lost through the global reset.',
		relatedPage: 'internals.classes.barbarian.page',
		relatedRelease: '0.9.1'
	},
	{
		id: 'pugilist-progression-table-readability',
		title: 'Pugilist progression table was hard to read',
		summary:
			'The Pugilist progression table layout did not match the readability and spacing expected from the class pages.',
		status: 'resolved',
		source: 'discord',
		category: 'ui',
		reportedAt: '2026-09-04',
		updatedAt: '2026-09-04',
		resolution:
			'The Pugilist progression presentation was cleaned up and multiclassing was aligned with the class overview pattern.',
		relatedPage: 'internals.classes.pugilist.page',
		relatedRelease: '0.9.1'
	},
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
];

export const publicIssues = [...publicIssueItems].sort((left, right) => {
	const leftResolved = isResolvedIssue(left.status);
	const rightResolved = isResolvedIssue(right.status);

	if (leftResolved !== rightResolved) {
		return leftResolved ? 1 : -1;
	}

	return (right.updatedAt ?? right.reportedAt).localeCompare(left.updatedAt ?? left.reportedAt);
});
