import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const vampyr = createBasicClass({
	name: 'Vampyr',
	slug: 'vampyr',
	role: 'Vampiric predator',
	source: 'D&D Portal live content',
	primaryAbility: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(' or '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	hitDie: 'd8',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons and finesse weapons')],
	tools: [text('None')],
	savingThrows: [
		link('internals.rules.abilityScores.dexterity', 'Dexterity'),
		text(', '),
		link('internals.rules.abilityScores.charisma', 'Charisma')
	],
	skills: [text('Choose stealth, persuasion, deception, perception, or predatory skills.')],
	description: 'A supernatural predator who balances hunger, charm, mobility, and dark resilience.',
	longDescription: [
		[
			text(
				'Vampyrs draw power from predatory instincts, supernatural hunger, and a dangerous presence that unsettles ordinary foes.'
			)
		],
		[
			text(
				'The class works around mobility, recovery, charm, and the tension between monstrous gifts and the costs of using them.'
			)
		],
		[
			text(
				'At the table, a Vampyr can scout, duel, manipulate, and survive by turning the enemy into a resource.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Vampiric Nature',
			description: [text('Gain supernatural traits that mark you as something between mortal and monster.')]
		},
		{
			level: 2,
			title: 'Blood Hunger',
			description: [text('Use hunger-driven power to recover, empower attacks, or pressure weakened foes.')]
		},
		{
			level: 3,
			title: 'Bloodline',
			description: [text('Choose the vampiric expression that shapes your later class features.')]
		}
	],
	tags: ['vampire', 'supernatural', 'charisma', 'predator']
});

