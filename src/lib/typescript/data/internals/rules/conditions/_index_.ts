import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createConditionContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.conditions;

type ConditionReference = {
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

function createConditionPage(item: ConditionReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Condition',
		description: `${item.name.normal} is a game condition that can affect
			what a creature can perceive, do, or resist during play.`,
		content: createConditionContent(item)
	});
}

export const conditions = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Condition references',
		description: `Browse game conditions that can affect what creatures can
			perceive, do, or resist during play.`,
		content: createGroupContent(current.name.normal, 'condition')
	}),

	blinded: createConditionPage(current.blinded),
	charmed: createConditionPage(current.charmed),
	deafened: createConditionPage(current.deafened),
	exhaustion: createConditionPage(current.exhaustion),
	frightened: createConditionPage(current.frightened),
	grappled: createConditionPage(current.grappled),
	incapacitated: createConditionPage(current.incapacitated),
	invisible: createConditionPage(current.invisible),
	paralyzed: createConditionPage(current.paralyzed),
	petrified: createConditionPage(current.petrified),
	poisoned: createConditionPage(current.poisoned),
	prone: createConditionPage(current.prone),
	restrained: createConditionPage(current.restrained),
	stunned: createConditionPage(current.stunned),
	unconscious: createConditionPage(current.unconscious)
} as const;
