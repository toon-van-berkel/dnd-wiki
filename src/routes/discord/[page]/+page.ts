/*
	Location: src/routes/discord/[page]/+page.ts
	Use: Static prerender entries for Discord community child pages.
*/

export function entries() {
	return [
		{ page: 'announcements' },
		{ page: 'wiki-updates' },
		{ page: 'portal-links' }
	];
}
