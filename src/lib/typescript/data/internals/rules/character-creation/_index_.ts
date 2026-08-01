import * as core from '../../../core/_index_';
import { createGroupContent } from '../_content_';

import { multiclassing } from './multiclassing';

const current = core.internals.rules.characterCreation;

export const characterCreation = {
	page: {
		href: current.baseUrl,
		external: false,

		img: current.logos.simple,

		title: `D&D Portal - ${current.name.normal}`,
		subTitle: 'Building and developing characters',
		description: `Browse rules and options used to create, customise,
			and develop player characters.`,
		content: createGroupContent(current.name.normal, 'character creation rule')
	},

	multiclassing
} as const;
