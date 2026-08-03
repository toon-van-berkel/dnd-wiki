import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

import { artificer } from './artificer';
import { barbarian } from './barbarian';
import { bard } from './bard';
import { bloodHunter } from './blood-hunter';
import { cleric } from './cleric';
import { druid } from './druid';
import { fighter } from './fighter';
import { monk } from './monk';
import { paladin } from './paladin';
import { ranger } from './ranger';
import { rogue } from './rogue';
import { sorcerer } from './sorcerer';
import { warlock } from './warlock';
import { wizard } from './wizard';

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
	barbarian,
	bard,
	cleric,
	druid,
	fighter,
	monk,
	paladin,
	ranger,
	rogue,
	sorcerer,
	warlock,
	wizard,
	bloodHunter
} as const;

export const classList = [
	{
		name: 'Artificer',
		slug: 'artificer',
		path: 'internals.classes.artificer.page'
	},
	{
		name: 'Barbarian',
		slug: 'barbarian',
		path: 'internals.classes.barbarian.page'
	},
	{
		name: 'Bard',
		slug: 'bard',
		path: 'internals.classes.bard.page'
	},
	{
		name: 'Cleric',
		slug: 'cleric',
		path: 'internals.classes.cleric.page'
	},
	{
		name: 'Druid',
		slug: 'druid',
		path: 'internals.classes.druid.page'
	},
	{
		name: 'Fighter',
		slug: 'fighter',
		path: 'internals.classes.fighter.page'
	},
	{
		name: 'Monk',
		slug: 'monk',
		path: 'internals.classes.monk.page'
	},
	{
		name: 'Paladin',
		slug: 'paladin',
		path: 'internals.classes.paladin.page'
	},
	{
		name: 'Ranger',
		slug: 'ranger',
		path: 'internals.classes.ranger.page'
	},
	{
		name: 'Rogue',
		slug: 'rogue',
		path: 'internals.classes.rogue.page'
	},
	{
		name: 'Sorcerer',
		slug: 'sorcerer',
		path: 'internals.classes.sorcerer.page'
	},
	{
		name: 'Warlock',
		slug: 'warlock',
		path: 'internals.classes.warlock.page'
	},
	{
		name: 'Wizard',
		slug: 'wizard',
		path: 'internals.classes.wizard.page'
	},
	{
		name: 'Blood Hunter',
		slug: 'blood-hunter',
		path: 'internals.classes.bloodHunter.page'
	}
] as const;

const genericClassEntries = [
	{
		slug: 'artificer',
		data: artificer
	},
	{
		slug: 'bard',
		data: bard
	},
	{
		slug: 'cleric',
		data: cleric
	},
	{
		slug: 'druid',
		data: druid
	},
	{
		slug: 'fighter',
		data: fighter
	},
	{
		slug: 'monk',
		data: monk
	},
	{
		slug: 'paladin',
		data: paladin
	},
	{
		slug: 'ranger',
		data: ranger
	},
	{
		slug: 'rogue',
		data: rogue
	},
	{
		slug: 'sorcerer',
		data: sorcerer
	},
	{
		slug: 'warlock',
		data: warlock
	},
	{
		slug: 'wizard',
		data: wizard
	},
	{
		slug: 'blood-hunter',
		data: bloodHunter
	}
] as const;

export function getClassBySlug(slug: string) {
	return genericClassEntries.find((entry) => entry.slug === slug)?.data ?? null;
}

export function getSubclassBySlug(
	classSlug: string,
	subclassSlug: string
) {
	const classData = getClassBySlug(classSlug);

	if (!classData || !('subclasses' in classData)) {
		return null;
	}

	const subclasses = Object.values(classData.subclasses);

	return subclasses.find((subclass) => {
		const href = 'page' in subclass ? subclass.page.href : subclass.href;
		const parts = href.split('/');

		return parts[parts.length - 1] === subclassSlug;
	}) ?? null;
}
