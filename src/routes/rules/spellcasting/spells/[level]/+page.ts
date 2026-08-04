/*
	Location: src/routes/rules/spellcasting/spells/[level]/+page.ts
	Use: Static prerender entries for level-specific spell rule pages.
*/
import { spellLevels } from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';

export function entries() {
	return spellLevels
		.filter((level) => level.level > 0)
		.map((level) => ({ level: level.slug }));
}

