/*
	Location: src/routes/npcs/[npc]/+page.ts
	Use: Static prerender entries for NPC detail pages.
*/
import {
	getPugilistNpcBySlug,
	getPugilistNpcSlug,
	pugilistNpcs
} from '$lib/typescript/data/internals/classes/pugilist';
import { createNpcSeoMetadata } from '$lib/typescript/pages/seo';

export function entries() {
	return pugilistNpcs.map((npc) => ({
		npc: getPugilistNpcSlug(npc)
	}));
}

export function load({ params }) {
	const npc = getPugilistNpcBySlug(params.npc);

	if (!npc) {
		return {};
	}

	return {
		seo: createNpcSeoMetadata(npc)
	};
}
