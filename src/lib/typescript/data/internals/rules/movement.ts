import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';
import {
	createGroupContent,
	createMovementContent
} from './_content_';

const website = core.internals.website;
const current = core.internals.rules.movement;

type MovementReference = {
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

function createMovementPage(item: MovementReference) {
	return createInternalPage({
		href: `${current.baseUrl}/${item.name.slug}`,
		img: item.logos.simple,
		label: item.name.normal,
		title: `${website.name.short} - ${item.name.normal}`,
		subTitle: 'Movement rule',
		description: `${item.name.normal} is a movement rule used during
			exploration, encounters, and combat.`,
		content: createMovementContent(item)
	});
}

export const movement = {
	page: createInternalPage({
		href: current.baseUrl,
		img: current.logos.simple,
		label: current.name.normal,
		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Movement rules',
		description: `Browse movement rules used to determine how creatures
			move during exploration and combat.`,
		content: createGroupContent(current.name.normal, 'movement')
	}),

	walking: createMovementPage(current.walking),
	speed: createMovementPage(current.speed),
	climbing: createMovementPage(current.climbing),
	swimming: createMovementPage(current.swimming),
	flying: createMovementPage(current.flying),
	burrowing: createMovementPage(current.burrowing),
	crawling: createMovementPage(current.crawling),
	jumping: createMovementPage(current.jumping),
	difficultTerrain: createMovementPage(current.difficultTerrain),
	falling: createMovementPage(current.falling),
	squeezing: createMovementPage(current.squeezing)
} as const;
