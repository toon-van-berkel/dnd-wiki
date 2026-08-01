import * as core from '../../../core/_index_';
import { createAbilityScoreContent } from '../_content_';

const parent = core.internals.rules.abilityScores;
const current = parent.strength;

export const strength = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Physical power and athletic ability',
	description: `${current.name.normal} measures physical power, athletic
		ability, and a character's capacity to exert force.`,
	content: createAbilityScoreContent(current)
} as const;
