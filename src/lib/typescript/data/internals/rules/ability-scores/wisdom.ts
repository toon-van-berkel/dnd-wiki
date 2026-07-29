import * as core from '../../../core/_index_';

const parent = core.internals.rules.abilityScores;
const current = parent.wisdom;

export const wisdom = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Awareness, intuition, and insight',
	description: `${current.name.normal} measures awareness, intuition,
		perception, and the ability to understand people and surroundings.`
} as const;