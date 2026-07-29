import * as core from '../../../core/_index_';

const parent = core.internals.rules.abilityScores;
const current = parent.charisma;

export const charisma = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Presence, confidence, and influence',
	description: `${current.name.normal} measures force of personality,
		confidence, eloquence, and the ability to influence others.`
} as const;