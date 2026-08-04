/*
	Location: src/routes/spells/[page]/+page.ts
	Use: Static prerender entries for spell list and spell detail routes.
*/
import { spells, spellLevels } from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';
import { createSpellSeoMetadata } from '$lib/typescript/pages/seo';

export function entries() {
	return [
		{ page: 'spellcasting' },
		...spellLevels.map((level) => ({ page: level.slug })),
		...spells.map((spell) => ({ page: spell.slug }))
	];
}

export function load({ params }) {
	const spell = spells.find((item) => item.slug === params.page);

	if (!spell) {
		return {};
	}

	return {
		seo: createSpellSeoMetadata(spell)
	};
}
