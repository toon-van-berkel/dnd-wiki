import {
	createBasicClass,
	link,
	text
} from './_basic-class';

export const scholar = createBasicClass({
	name: 'Scholar',
	slug: 'scholar',
	role: 'Knowledge specialist',
	source: 'D&D Portal live content',
	primaryAbility: [link('internals.rules.abilityScores.intelligence', 'Intelligence')],
	hitDie: 'd6',
	armor: [text('Light armor')],
	weapons: [text('Simple weapons')],
	tools: [text('Two tools, languages, or knowledge-focused proficiencies')],
	savingThrows: [
		link('internals.rules.abilityScores.intelligence', 'Intelligence'),
		text(', '),
		link('internals.rules.abilityScores.wisdom', 'Wisdom')
	],
	skills: [text('Choose multiple knowledge, investigation, social, or medical skills.')],
	description: 'An expert class focused on knowledge, planning, analysis, and turning information into advantage.',
	longDescription: [
		[
			text(
				'Scholars solve problems by knowing more than their enemies, preparing better than their rivals, and reading situations quickly.'
			)
		],
		[
			text(
				'The class is strongest in campaigns that reward research, deductions, social leverage, medicine, tactics, and expertise outside normal spellcasting.'
			)
		],
		[
			text(
				'In play, a Scholar gives the party answers, plans, and specialized support when brute force would waste time or resources.'
			)
		]
	],
	features: [
		{
			level: 1,
			title: 'Academic Training',
			description: [text('Gain broad expertise and a stronger foundation for knowledge-based checks.')]
		},
		{
			level: 2,
			title: 'Exploit Weakness',
			description: [text('Turn observation and analysis into a practical advantage against a creature or problem.')]
		},
		{
			level: 3,
			title: 'Scholarly Pursuit',
			description: [text('Choose the discipline that defines your research and party role.')]
		}
	],
	tags: ['expert', 'intelligence', 'knowledge', 'support']
});

