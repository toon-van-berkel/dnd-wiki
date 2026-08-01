import * as core from '../../../core/_index_';
import { createInternalPage } from '../../_helpers_';
import {
	createActionContent,
	createGroupContent
} from '../_content_';

const website = core.internals.website;
const current = core.internals.rules.actions;

type ActionReference = {
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

function createActionPage(item: ActionReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Action rule',
		description: `${item.name.normal} is an action economy rule used to
			describe what a creature can do on its turn.`,
		content: createActionContent(item)
	});
}

export const actions = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Action references',
		description: `Browse action economy rules used to describe what a
			creature can do on its turn.`,
		content: createGroupContent(current.name.normal, 'action')
	}),

	action: createActionPage(current.action),
	attackAction: createActionPage(current.attackAction),
	bonusAction: createActionPage(current.bonusAction),
	reaction: createActionPage(current.reaction),
	dash: createActionPage(current.dash),
	disengage: createActionPage(current.disengage),
	dodge: createActionPage(current.dodge),
	help: createActionPage(current.help),
	hide: createActionPage(current.hide),
	ready: createActionPage(current.ready),
	search: createActionPage(current.search),
	useObject: createActionPage(current.useObject)
} as const;
