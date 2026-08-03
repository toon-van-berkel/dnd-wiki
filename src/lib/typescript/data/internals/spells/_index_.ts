import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

const website = core.internals.website;
const current = core.internals.spells;

type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const spellCounts: Record<SpellLevel | 'all', number> = {
	all: 574,
	0: 49,
	1: 91,
	2: 97,
	3: 83,
	4: 61,
	5: 66,
	6: 51,
	7: 30,
	8: 24,
	9: 22
};

type SpellReference = {
	readonly name: {
		readonly normal: string;
		readonly slug: string;
	};
	readonly logos: {
		readonly simple: {
			readonly href: string;
			readonly alt: string;
		};
	};
};

function createSpellListPage(item: SpellReference, level?: SpellLevel) {
	const spellCount = level === undefined ? spellCounts.all : spellCounts[level];
	const href = level === undefined
		? current.baseUrl
		: `${current.baseUrl}/${item.name.slug}`;

	return createInternalPage({
		href,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: level === undefined ? 'Spell browser' : 'Spell level list',
		description: `Browse ${spellCount} ${item.name.normal.toLowerCase()} with casting time, range, duration, components, classes, and full spell text.`,
		navigation: level === undefined
			? undefined
			: {
					parent: 'internals.spells.page'
				}
	});
}

export const spells = {
	page: createSpellListPage(current),

	spellcasting: createInternalPage({
		href: `${current.baseUrl}/${current.spellcasting.name.slug}`,
		img: current.spellcasting.logos.simple,
		label: current.spellcasting.name.normal,
		title: `${website.name.short} - ${current.spellcasting.name.normal}`,
		subTitle: 'Spellcasting rules',
		description: 'Read the core rules used to cast spells, maintain concentration, use cantrips, and understand leveled spells.',
		navigation: {
			parent: 'internals.spells.page'
		}
	}),

	cantrips: createSpellListPage(current.cantrips, 0),
	spellLevels: {
		firstLevel: createSpellListPage(current.spellLevels.firstLevel, 1),
		secondLevel: createSpellListPage(current.spellLevels.secondLevel, 2),
		thirdLevel: createSpellListPage(current.spellLevels.thirdLevel, 3),
		fourthLevel: createSpellListPage(current.spellLevels.fourthLevel, 4),
		fifthLevel: createSpellListPage(current.spellLevels.fifthLevel, 5),
		sixthLevel: createSpellListPage(current.spellLevels.sixthLevel, 6),
		seventhLevel: createSpellListPage(current.spellLevels.seventhLevel, 7),
		eighthLevel: createSpellListPage(current.spellLevels.eighthLevel, 8),
		ninthLevel: createSpellListPage(current.spellLevels.ninthLevel, 9)
	}
} as const;
