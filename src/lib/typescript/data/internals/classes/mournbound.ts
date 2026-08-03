import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const mournbound = createBasicClass({
	name: 'Mournbound',
	slug: 'mournbound',
	role: 'Grief-bound warrior',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.constitution', 'Constitution'),
		text(' or '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	hitDie: 'd10',
	armor: [text('Light armor, medium armor, and shields')],
	weapons: [text('Simple weapons and martial weapons')],
	tools: [text('None')],
	savingThrows: [
		link('internals.rules.abilityScores.constitution', 'Constitution'),
		text(', '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	skills: [text('Choose endurance, insight, intimidation, religion, or survival skills.')],
	description: 'A character bound to loss, endurance, and supernatural echoes that turn grief into resilience.',
	longDescription: [
		[
			text(
				'Mournbound characters carry grief as a source of supernatural force, drawing strength from memory, vows, or unresolved loss.'
			)
		],
		[
			text(
				'The class is built around endurance, emotional pressure, and features that let pain become protection or punishment.'
			)
		],
		[
			text(
				'In play, a Mournbound can stand through punishing encounters while giving the party a strong dramatic and defensive anchor.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Burden of Grief',
			description: [text('Bind yourself to a defining loss that fuels class features and roleplay choices.')]
		},
		{
			level: 2,
			title: 'Mournful Endurance',
			description: [
				text('Draw on grief to resist harm and keep fighting when your '),
				link('internals.rules.combat.hitPoints', 'hit points'),
				text(' are under pressure.')
			]
		},
		{
			level: 3,
			title: 'Bound Memory',
			description: [text('Choose the memory, vow, or echo that defines your subclass path.')]
		}
	],
	tags: ['endurance', 'supernatural', 'frontline', 'grief']
});

