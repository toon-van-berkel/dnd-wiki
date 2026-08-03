import * as core from '../../core/_index_';
import { createInternalPage } from '../_helpers_';

import { artificer } from './artificer';
import { barbarian } from './barbarian';
import { bard } from './bard';
import { bloodHunter } from './blood-hunter';
import { captain } from './captain';
import { champion } from './champion';
import { cleric } from './cleric';
import { druid } from './druid';
import { fighter } from './fighter';
import { gunslinger } from './gunslinger';
import { illrigger } from './illrigger';
import { messenger } from './messenger';
import { monk } from './monk';
import { monsterHunter } from './monster-hunter';
import { mournbound } from './mournbound';
import { paladin } from './paladin';
import { pugilist } from './pugilist';
import { ranger } from './ranger';
import { rogue } from './rogue';
import { scholar } from './scholar';
import { shinobi } from './shinobi';
import { sorcerer } from './sorcerer';
import { treasureHunter } from './treasure-hunter';
import { vampyr } from './vampyr';
import { vanguard } from './vanguard';
import { warlock } from './warlock';
import { warden } from './warden';
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
	bloodHunter,
	captain,
	champion,
	gunslinger,
	illrigger,
	messenger,
	monsterHunter,
	mournbound,
	pugilist,
	scholar,
	shinobi,
	treasureHunter,
	vampyr,
	vanguard,
	warden
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
	},
	{
		name: 'Captain',
		slug: 'captain',
		path: 'internals.classes.captain.page'
	},
	{
		name: 'Champion',
		slug: 'champion',
		path: 'internals.classes.champion.page'
	},
	{
		name: 'Gunslinger',
		slug: 'gunslinger',
		path: 'internals.classes.gunslinger.page'
	},
	{
		name: 'Illrigger',
		slug: 'illrigger',
		path: 'internals.classes.illrigger.page'
	},
	{
		name: 'Messenger',
		slug: 'messenger',
		path: 'internals.classes.messenger.page'
	},
	{
		name: 'Monster Hunter',
		slug: 'monster-hunter',
		path: 'internals.classes.monsterHunter.page'
	},
	{
		name: 'Mournbound',
		slug: 'mournbound',
		path: 'internals.classes.mournbound.page'
	},
	{
		name: 'Pugilist',
		slug: 'pugilist',
		path: 'internals.classes.pugilist.page'
	},
	{
		name: 'Scholar',
		slug: 'scholar',
		path: 'internals.classes.scholar.page'
	},
	{
		name: 'Shinobi',
		slug: 'shinobi',
		path: 'internals.classes.shinobi.page'
	},
	{
		name: 'Treasure Hunter',
		slug: 'treasure-hunter',
		path: 'internals.classes.treasureHunter.page'
	},
	{
		name: 'Vampyr',
		slug: 'vampyr',
		path: 'internals.classes.vampyr.page'
	},
	{
		name: 'Vanguard',
		slug: 'vanguard',
		path: 'internals.classes.vanguard.page'
	},
	{
		name: 'Warden',
		slug: 'warden',
		path: 'internals.classes.warden.page'
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
	},
	{
		slug: 'captain',
		data: captain
	},
	{
		slug: 'champion',
		data: champion
	},
	{
		slug: 'gunslinger',
		data: gunslinger
	},
	{
		slug: 'illrigger',
		data: illrigger
	},
	{
		slug: 'messenger',
		data: messenger
	},
	{
		slug: 'monster-hunter',
		data: monsterHunter
	},
	{
		slug: 'mournbound',
		data: mournbound
	},
	{
		slug: 'pugilist',
		data: pugilist
	},
	{
		slug: 'scholar',
		data: scholar
	},
	{
		slug: 'shinobi',
		data: shinobi
	},
	{
		slug: 'treasure-hunter',
		data: treasureHunter
	},
	{
		slug: 'vampyr',
		data: vampyr
	},
	{
		slug: 'vanguard',
		data: vanguard
	},
	{
		slug: 'warden',
		data: warden
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
