import { spells } from './spells';
import type { SpellRecord } from './types';

export type { SpellLevel, SpellRecord } from './types';

export { spells };

export function getSpellBySlug(slug: string): SpellRecord | undefined {
	return spells.find((spell) => spell.slug === slug);
}

export function getSpellHref(spell: SpellRecord): string {
	return `/spells-and-abilities/spells/${spell.slug}`;
}

export function getSpellPageId(spell: SpellRecord): string {
	return `spells-and-abilities--spells--${spell.slug}`;
}

export function getSpellLevelLabel(level: SpellRecord['level']): string {
	return level === 0 ? 'Cantrip' : `${level}${level === 1 ? 'st' : level === 2 ? 'nd' : level === 3 ? 'rd' : 'th'} Level`;
}
