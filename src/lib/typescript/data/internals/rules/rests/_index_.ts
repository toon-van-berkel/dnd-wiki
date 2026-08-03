import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createGenericRuleContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.rests;

type RestReference = {
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

function createRestPage(item: RestReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Rest rule',
		description: `${item.name.normal} is a rest rule used to recover
			resources, hit points, and class features.`,
		content: createGenericRuleContent(item, 'rest rule')
	});
}

export const rests = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Rest rules',
		description: `Browse rest rules used to recover resources, hit points,
			and class features.`,
		content: createGroupContent(current.name.normal, 'rest rule')
	}),

	longRest: createRestPage(current.longRest),
	shortRest: createRestPage(current.shortRest)
} as const;
