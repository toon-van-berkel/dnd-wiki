import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const treasureHunter = createBasicClass({
	name: 'Treasure Hunter',
	slug: 'treasure-hunter',
	role: 'Relic seeker',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' or '),
		link('internals.rules.abilityScores.intelligence', 'Intelligence')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons, finesse weapons, and ranged weapons')],
	tools: [text('Thieves tools, cartographer tools, or explorer tools')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.intelligence', 'Intelligence')
	],
	skills: [text('Choose exploration, investigation, stealth, perception, or history skills.')],
	description: 'An explorer who finds relics, bypasses hazards, and turns dangerous ruins into opportunity.',
	longDescription: [
		[
			text(
				'Treasure Hunters are built for ruins, traps, maps, riddles, and the kind of trouble that surrounds valuable things.'
			)
		],
		[
			text(
				'The class rewards cautious exploration, quick hands, sharp deduction, and clever exits when greed wakes something dangerous.'
			)
		],
		[
			text(
				'In play, a Treasure Hunter gives the party a specialist for scouting, relic recovery, dungeon hazards, and opportunity-driven combat.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Relic Seeker',
			description: [text('Gain practical expertise for locating valuables, reading ruins, and spotting hidden danger.')]
		},
		{
			level: 2,
			title: 'Danger Sense',
			description: [text('React quickly to traps, ambushes, and collapsing situations during exploration.')]
		},
		{
			level: 3,
			title: 'Treasure Specialty',
			description: [text('Choose the treasure-hunting method that defines your later features.')]
		}
	],
	tags: ['exploration', 'relics', 'traps', 'dexterity']
});

