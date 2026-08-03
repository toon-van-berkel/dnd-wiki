import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import {
	getSpellsByLevel,
	spells as spellData,
	type SpellLevel
} from '../rules/spellcasting/spells/spell-data';

const website = core.internals.website;
const current = core.internals.spells;

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
	const list = level === undefined ? spellData : getSpellsByLevel(level);
	const href = level === undefined
		? current.baseUrl
		: `${current.baseUrl}/${item.name.slug}`;

	return createInternalPage({
		href,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: level === undefined ? 'Spell browser' : 'Spell level list',
		description: `Browse ${list.length} ${item.name.normal.toLowerCase()} with casting time, range, duration, components, classes, and full spell text.`,
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
