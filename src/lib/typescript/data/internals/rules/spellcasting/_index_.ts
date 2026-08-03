import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createGenericRuleContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.spellcasting;

type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const spellCounts: Record<SpellLevel, number> = {
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

type SpellcastingReference = {
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

function createSpellcastingPage(item: SpellcastingReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Spellcasting rule',
		description: `${item.name.normal} is a spellcasting rule used by spells,
			class features, and magical effects.`,
		navigation: item.name.slug === current.spells.name.slug
			? {
					hidden: true
				}
			: undefined,
		content: createGenericRuleContent(item, 'spellcasting rule')
	});
}

function createSpellLevelPage(
	item: SpellcastingReference,
	level: SpellLevel
) {
	return createInternalPage({
		href: level === 0
			? `${current.baseUrl}/${item.name.slug}`
			: `${current.baseUrl}/${current.spells.name.slug}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: level === 0 ? 'Cantrip list' : 'Spell level list',
		description: `Browse ${spellCounts[level]} ${item.name.normal.toLowerCase()}
			with casting metadata, classes, components, duration, and range.`,
		content: createGenericRuleContent(item, 'spell list')
	});
}

export const spellcasting = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Spellcasting rules',
		description: `Browse spellcasting rules used by spells, class features,
			and magical effects.`,
		content: createGroupContent(current.name.normal, 'spellcasting rule')
	}),

	cantrips: createSpellLevelPage(current.cantrips, 0),
	concentration: createSpellcastingPage(current.concentration),
	spells: createSpellcastingPage(current.spells),
	spellLevels: {
		firstLevel: createSpellLevelPage(current.spellLevels.firstLevel, 1),
		secondLevel: createSpellLevelPage(current.spellLevels.secondLevel, 2),
		thirdLevel: createSpellLevelPage(current.spellLevels.thirdLevel, 3),
		fourthLevel: createSpellLevelPage(current.spellLevels.fourthLevel, 4),
		fifthLevel: createSpellLevelPage(current.spellLevels.fifthLevel, 5),
		sixthLevel: createSpellLevelPage(current.spellLevels.sixthLevel, 6),
		seventhLevel: createSpellLevelPage(current.spellLevels.seventhLevel, 7),
		eighthLevel: createSpellLevelPage(current.spellLevels.eighthLevel, 8),
		ninthLevel: createSpellLevelPage(current.spellLevels.ninthLevel, 9)
	}
} as const;
