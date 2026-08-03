import * as core from '../../../core/_index_';
import { createAbilityScoreContent } from '../_content_';

const parent = core.internals.rules.abilityScores;
const current = parent.dexterity;

export const dexterity = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Agility, reflexes, and coordination',
	description: `${current.name.normal} measures agility, reflexes, balance,
		and precise physical coordination.`,
	content: createAbilityScoreContent(current)
} as const;
