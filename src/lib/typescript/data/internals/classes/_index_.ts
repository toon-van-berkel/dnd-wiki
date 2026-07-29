import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

import { artificer } from './artificer';
import { barbarian } from './barbarian';

const website = core.internals.website;
const current = core.internals.classes;

export const classes = {
	page: createInternalPage({
		href: current.baseUrl,

		img: current.logos.simple,

		title: `${website.name.short} - ${current.name.normal}`,
		subTitle: 'Character classes',
		description: `Browse available classes, their core features,
			progression, abilities, subclasses, and character options.`,

		tags: [
			'classes',
			'character creation',
			'player options',
			'progression',
			'class features',
			'subclasses',
			'abilities'
		]
	}),

	artificer,
	barbarian
} as const;