import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import type {
	PageContentBlock,
	PageContentSection
} from '$lib/typescript/pages/content-types';

import { createGroupContent } from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.abbreviations;

type AbbreviationReference = {
	readonly name: {
		readonly normal: string;
		readonly slug: string;
	};
	readonly expanded: string;
	readonly logos: {
		readonly simple: {
			readonly href: string;
			readonly alt: string;
		};
	};
};

const details: Record<string, {
	readonly meaning: string;
	readonly use: string;
	readonly limits: readonly string[];
}> = {
	asi: {
		meaning: 'ASI means Ability Score Improvement.',
		use: 'Use an ASI when a class feature grants Ability Score Improvement. You normally increase one ability score by 2, or two ability scores by 1 each, within the normal maximum. If feats are allowed, the ASI can often be exchanged for a feat.',
		limits: [
			'ASI is not a separate action, roll, or resource.',
			'The class progression tells you which levels grant an ASI.',
			'Feat replacement depends on the rules your table is using.'
		]
	},
	ac: {
		meaning: 'AC means Armor Class.',
		use: 'Use AC as the target number an attack roll must meet or beat to hit a creature or object.',
		limits: [
			'AC is not rolled by the defender.',
			'Armor, shields, Dexterity, spells, cover, and features can change AC.',
			'Saving throws do not target AC unless a specific rule says otherwise.'
		]
	},
	dc: {
		meaning: 'DC means Difficulty Class.',
		use: 'Use a DC as the target number for an ability check or saving throw. The roll succeeds when the total meets or beats the DC.',
		limits: [
			'DC is set by the rule, spell, feature, or DM.',
			'The DC itself is not a roll.',
			'Some features calculate DC from an ability modifier and proficiency bonus.'
		]
	},
	pb: {
		meaning: 'PB means Proficiency Bonus.',
		use: 'Add PB to rolls where you are proficient, and to rules that explicitly scale with proficiency bonus.',
		limits: [
			'PB is based on character level or creature statistics.',
			'You do not add PB unless a proficiency or rule says you do.',
			'Expertise and similar rules can multiply PB for specific checks.'
		]
	},
	hp: {
		meaning: 'HP means Hit Points.',
		use: 'Use HP to track how much damage a creature or object can take before reaching 0 hit points.',
		limits: [
			'Damage lowers HP after resistance, vulnerability, immunity, and other reductions are applied.',
			'Healing restores HP but normally cannot exceed the maximum.',
			'Reaching 0 HP can trigger different rules for characters, monsters, and objects.'
		]
	},
	thp: {
		meaning: 'THP means Temporary Hit Points.',
		use: 'Use THP as a damage buffer that is lost before normal hit points.',
		limits: [
			'Temporary hit points are not healing.',
			'Temporary hit points usually do not stack; use the higher amount.',
			'Unless a rule says otherwise, temporary hit points last until depleted or until you finish a long rest.'
		]
	}
};

function text(content: string) {
	return [
		{
			type: 'text' as const,
			text: content
		}
	];
}

function paragraph(content: string): PageContentBlock {
	return {
		type: 'paragraph',
		content: text(content)
	};
}

function createTermContent(item: AbbreviationReference) {
	const term = details[item.name.slug];
	const sections = [
		{
			id: 'meaning',
			title: 'Meaning',
			blocks: [
				paragraph(term.meaning),
				paragraph(`${item.name.normal} is short for ${item.expanded}.`)
			]
		},
		{
			id: 'use-at-the-table',
			title: 'Use At The Table',
			blocks: [
				paragraph(term.use)
			]
		},
		{
			id: 'limits',
			title: 'Limits',
			blocks: [
				{
					type: 'list',
					items: term.limits.map(text)
				}
			]
		}
	] as const satisfies readonly PageContentSection[];

	return {
		sections,
		tableOfContents: sections.map(({ id, title }) => ({
			id,
			title
		}))
	};
}

function createAbbreviationPage(item: AbbreviationReference) {
	const term = details[item.name.slug];

	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Shortened rule term',
		description: `${item.name.normal} means ${item.expanded}. ${term.use}`,
		navigation: {
			parent: 'internals.rules.abbreviations.page'
		},
		content: createTermContent(item)
	});
}

export const abbreviations = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Shortened rule terms',
		description: 'Browse shortened D&D rule terms such as ASI, AC, DC, PB, HP, and THP.',
		content: createGroupContent(current.name.normal, 'abbreviation')
	}),

	asi: createAbbreviationPage(current.asi),
	ac: createAbbreviationPage(current.ac),
	dc: createAbbreviationPage(current.dc),
	pb: createAbbreviationPage(current.pb),
	hp: createAbbreviationPage(current.hp),
	thp: createAbbreviationPage(current.thp)
} as const;
