import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createGenericRuleContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.d20Tests;

type D20TestReference = {
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

function createD20TestPage(item: D20TestReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'D20 test rule',
		description: `${item.name.normal} is a d20 test rule used to resolve
			uncertain outcomes during play.`,
		content: createGenericRuleContent(item, 'd20 test rule')
	});
}

export const d20Tests = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'D20 test rules',
		description: `Browse d20 test rules used to resolve uncertain outcomes
			during play.`,
		content: createGroupContent(current.name.normal, 'd20 test rule')
	}),

	abilityCheck: createD20TestPage(current.abilityCheck),
	difficultyClass: createD20TestPage(current.difficultyClass),
	savingThrow: createD20TestPage(current.savingThrow)
} as const;
