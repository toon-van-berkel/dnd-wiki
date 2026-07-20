import {
	getSpellHref,
	getSpellPageId,
	getSpellLevelLabel,
	spells
} from '$lib/data/spells';
import {
	getTechniqueCategoryLabel,
	getTechniqueDescription,
	getTechniqueHref,
	getTechniquePageId,
	getTechniqueRankLabel,
	getTechniqueSourceLabel,
	techniques
} from '$lib/data/techniques';

import type { PageRegistryEntry } from '../Registry-Types';

function formatTag(value: string): string {
	return value.replace(/\b[a-z]/g, (character) => character.toUpperCase());
}

export const spellsAndAbilitiesPages = [
	{
		id: 'spells-and-abilities',
		title: 'Spells & Abilities',
		href: '/spells-and-abilities',
		description:
			'Browse supernatural abilities, class techniques and spells available throughout the game.',
		eyebrow: 'Game Reference',
		icon: 'iconsList.game.spell',
		keywords: ['spells', 'abilities', 'techniques', 'magic', 'chakra'],
		tags: ['Spells', 'Abilities', 'Techniques', 'Game Reference', 'Magic'],
		kind: 'collection',
		navigation: true
	},
	{
		id: 'spells-and-abilities--techniques',
		title: 'Techniques',
		href: '/spells-and-abilities/techniques',
		description:
			'Browse supernatural techniques by rank, type, Chakra cost and activation method.',
		shortDescription:
			'Techniques are specialized supernatural abilities powered by resources such as Chakra Points. Browse techniques by rank, type, source and activation method.',
		eyebrow: 'Spells & Abilities',
		icon: 'iconsList.game.spell',
		parentId: 'spells-and-abilities',
		keywords: ['techniques', 'chakra', 'shinobi', 'rank', 'activation', 'abilities'],
		tags: ['Techniques', 'Abilities', 'Chakra', 'Game Reference'],
		kind: 'collection'
	},
	{
		id: 'spells-and-abilities--spells',
		title: 'Spells',
		href: '/spells-and-abilities/spells',
		description:
			'Browse spells by level, school, casting time, range, duration and components.',
		shortDescription:
			'Spells are magical effects organized by spell level, school, casting time, range, duration and components.',
		eyebrow: 'Spells & Abilities',
		icon: 'iconsList.entity.book',
		parentId: 'spells-and-abilities',
		keywords: ['spells', 'magic', 'spell level', 'school', 'casting time', 'components'],
		tags: ['Spells', 'Magic', 'Game Reference'],
		kind: 'collection'
	},
	...techniques.map((technique): PageRegistryEntry => ({
		id: getTechniquePageId(technique),
		title: technique.name,
		href: getTechniqueHref(technique),
		description: getTechniqueDescription(technique),
		eyebrow: 'Technique',
		icon: 'iconsList.game.spell',
		parentId: 'spells-and-abilities--techniques',
		keywords: [
			technique.name,
			getTechniqueRankLabel(technique.rank),
			getTechniqueCategoryLabel(technique.category),
			getTechniqueSourceLabel(technique.source),
			`Chakra ${technique.chakraCost}`,
			technique.activation,
			technique.damageType ?? '',
			technique.requirements ?? '',
			technique.heritage ?? '',
			technique.nature ?? '',
			technique.path ?? '',
			technique.restricted ? 'Restricted' : '',
			technique.restriction ?? '',
			...(technique.searchKeywords ?? [])
		].filter(Boolean),
		tags: [
			'Technique',
			getTechniqueRankLabel(technique.rank),
			getTechniqueCategoryLabel(technique.category),
			getTechniqueSourceLabel(technique.source),
			'Chakra',
			technique.heritage ?? '',
			technique.damageType ? formatTag(technique.damageType) : '',
			technique.restricted ? 'Restricted' : ''
		].filter(Boolean),
		kind: 'technique',
		navigation: false
	})),
	...spells.map((spell): PageRegistryEntry => ({
		id: getSpellPageId(spell),
		title: spell.name,
		href: getSpellHref(spell),
		description: spell.description[0] ?? `${getSpellLevelLabel(spell.level)} ${spell.school} spell.`,
		eyebrow: 'Spell',
		icon: 'iconsList.entity.book',
		parentId: 'spells-and-abilities--spells',
		keywords: [
			spell.name,
			getSpellLevelLabel(spell.level),
			spell.school,
			spell.castingTime,
			spell.range,
			spell.duration,
			spell.components,
			...spell.classes,
			...(spell.searchKeywords ?? [])
		],
		tags: ['Spell', getSpellLevelLabel(spell.level), spell.school],
		kind: 'spell',
		navigation: false
	}))
] satisfies PageRegistryEntry[];
