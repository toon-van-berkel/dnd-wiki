import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const monsterHunter = createBasicClass({
	name: 'Monster Hunter',
	slug: 'monster-hunter',
	role: 'Prepared hunter',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' or '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	hitDie: 'd10',
	armor: [text('Light armor and medium armor')],
	weapons: [text('Simple weapons and martial weapons')],
	tools: [text('Hunter tools, traps, or one artisan tool')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	skills: [text('Choose tracking, knowledge, survival, stealth, or investigation skills.')],
	description: 'A specialist who studies dangerous creatures, prepares counters, and exploits monster weaknesses.',
	longDescription: [
		[
			text(
				'Monster Hunters treat every creature as a problem that can be studied, tracked, prepared for, and brought down with the right tools.'
			)
		],
		[
			text(
				'The class rewards research, scouting, target selection, and adapting tactics to the enemy rather than relying on one universal attack plan.'
			)
		],
		[
			text(
				'At the table, a Monster Hunter helps the party understand what they are fighting and turns that knowledge into practical advantages.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Hunter Lore',
			description: [text('Study creatures and identify useful details about their traits, habits, or defenses.')]
		},
		{
			level: 2,
			title: 'Prepared Countermeasure',
			description: [text('Prepare tools or tactics that help against a chosen threat.')]
		},
		{
			level: 3,
			title: 'Hunter Lodge',
			description: [text('Choose the hunting discipline that shapes your creature-focused features.')]
		},
		{
			level: 5,
			title: 'Extra Attack',
			description: [
				text('Attack twice when you take the '),
				link('internals.rules.actions.attackAction', 'Attack action'),
				text('.')
			]
		}
	],
	tags: ['hunter', 'tracking', 'martial', 'wisdom']
});

