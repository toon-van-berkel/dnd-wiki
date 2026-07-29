import * as core from '../../../core/_index_';

const parent = core.internals.rules.abilityScores;
const current = parent.constitution;

export const constitution = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Health, stamina, and endurance',
	description: `${current.name.normal} measures health, stamina, endurance,
		and a character's resistance to physical hardship.`
} as const;