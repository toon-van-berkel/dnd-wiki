import * as core from '../../../core/_index_';

const parent = core.internals.rules.abilityScores;
const current = parent.dexterity;

export const dexterity = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Agility, reflexes, and coordination',
	description: `${current.name.normal} measures agility, reflexes, balance,
		and precise physical coordination.`
} as const;