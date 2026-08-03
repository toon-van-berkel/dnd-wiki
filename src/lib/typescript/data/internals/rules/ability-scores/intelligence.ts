import * as core from '../../../core/_index_';
import { createAbilityScoreContent } from '../_content_';

const parent = core.internals.rules.abilityScores;
const current = parent.intelligence;

export const intelligence = {
	href: `${parent.baseUrl}/${current.name.slug}`,
	external: false,

	img: current.logos.simple,

	title: `D&D Portal - ${current.name.normal}`,
	subTitle: 'Reasoning, memory, and knowledge',
	description: `${current.name.normal} measures reasoning, memory,
		education, and the ability to recall and analyse information.`,
	content: createAbilityScoreContent(current)
} as const;
