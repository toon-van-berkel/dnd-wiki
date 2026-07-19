import type { ShinobiPath } from './types';

export const shinobiPaths = [
	{
		id: 'path-of-taijutsu',
		title: 'Path of Taijutsu',
		href: '/classes/shinobi/path-of-taijutsu',
		description:
			'A relentless close-combat specialist who turns speed, precision and physical conditioning into a weapon.',
		combatRole: 'Mobile melee striker',
		primaryFocus: 'Unarmed strikes, physical techniques, counters and extreme movement',
		introduction: [
			'Shinobi who follow the Path of Taijutsu train their bodies to function as weapons. Rather than relying primarily on ranged ninjutsu or elaborate illusions, these warriors concentrate chakra into their muscles, reflexes and strikes.',
			'A Taijutsu Shinobi excels at closing the distance, pressuring dangerous opponents and escaping before an enemy can retaliate.'
		],
		features: [
			{
				level: 3,
				title: 'Taijutsu Training',
				blocks: [
					{ kind: 'paragraph', text: 'Your unarmed strikes deal 1d6 bludgeoning damage, and you can use Dexterity instead of Strength for their attack and damage rolls.' },
					{ kind: 'paragraph', text: 'After you take the Attack action and make at least one attack with an unarmed strike or Finesse weapon, you can make one unarmed strike as a bonus action.' },
					{ kind: 'paragraph', text: 'You also learn one Rank I Taijutsu Path Technique. It does not count against your number of techniques known.' }
				]
			},
			{
				level: 6,
				title: 'Flowing Counter',
				blocks: [
					{ kind: 'paragraph', text: 'When a creature within your reach hits you with an attack, you can use your reaction and expend 1 Chakra Point to reduce the damage by 1d10 + your Dexterity modifier + your Shinobi level.' },
					{ kind: 'paragraph', text: 'If you reduce the damage to 0, you can immediately choose one of the following:' },
					{ kind: 'list', items: ['Make one unarmed strike against the attacker.', 'Move up to 10 feet without provoking opportunity attacks.'] }
				]
			},
			{
				level: 10,
				title: 'Limit Release',
				blocks: [
					{ kind: 'paragraph', text: 'As a bonus action, you can expend 3 Chakra Points to release the physical limits placed upon your body for 1 minute.' },
					{ kind: 'paragraph', text: 'For the duration:' },
					{ kind: 'list', items: ['Your walking speed increases by 10 feet.', 'You have advantage on Strength and Dexterity ability checks.', 'You have advantage on Strength and Dexterity saving throws.', 'Once on each of your turns when you hit with a weapon attack or unarmed strike, the attack deals an additional 1d8 force damage.'] },
					{ kind: 'paragraph', text: 'The effect ends early if you become Unconscious.' },
					{ kind: 'paragraph', text: 'Once you use this feature, you cannot use it again until you finish a long rest.' }
				]
			},
			{
				level: 14,
				title: 'Perfect Taijutsu',
				blocks: [
					{ kind: 'paragraph', text: 'Your unarmed strike damage die becomes a d10.' },
					{ kind: 'paragraph', text: 'When you take the Attack action and make every attack with an unarmed strike or Finesse weapon, you can make one additional unarmed strike as part of that action.' },
					{ kind: 'paragraph', text: 'Once on each of your turns when you hit a creature with an unarmed strike, you can choose one of the following:' },
					{ kind: 'list', items: ['Move up to 10 feet without provoking opportunity attacks.', 'Force the target to make a Strength saving throw against your Technique Save DC. On a failed save, the target falls Prone.'] }
				]
			}
		],
		playIf: ['Fight primarily in melee', 'Use unarmed strikes', 'Move constantly during combat', 'Counter enemy attacks', 'Temporarily exceed normal physical limits']
	},
	{
		id: 'path-of-elemental-ninjutsu',
		title: 'Path of Elemental Ninjutsu',
		href: '/classes/shinobi/path-of-elemental-ninjutsu',
		description:
			'A master of elemental chakra who overwhelms enemies with destructive force and battlefield control.',
		combatRole: 'Elemental damage dealer and battlefield controller',
		primaryFocus: 'Chakra Nature techniques, ranged attacks and elemental combinations',
		introduction: [
			'The Path of Elemental Ninjutsu is followed by Shinobi who dedicate themselves to transforming chakra into natural forces.',
			'These Shinobi create fire, water, earth, lightning and wind through practiced hand signs and precise chakra control. Some become specialists in a single nature, while others combine several elements to answer different threats.'
		],
		features: [
			{
				level: 3,
				title: 'Elemental Adept',
				blocks: [
					{ kind: 'paragraph', text: 'Learn two additional Nature Techniques associated with a Chakra Nature available to you. These techniques must be of a rank you can use and do not count against your number of techniques known.' },
					{ kind: 'paragraph', text: 'Once on each of your turns when you roll damage for a Nature Technique, add your Wisdom modifier to one damage roll of that technique.' }
				]
			},
			{
				level: 6,
				title: 'Secondary Nature',
				blocks: [
					{ kind: 'paragraph', text: 'Choose one standard Chakra Nature you do not already possess:' },
					{ kind: 'list', items: ['Fire Release', 'Wind Release', 'Lightning Release', 'Earth Release', 'Water Release'] },
					{ kind: 'paragraph', text: 'You can learn Nature Techniques associated with the selected nature.' },
					{ kind: 'paragraph', text: 'You also learn one additional Nature Technique associated with the selected nature. It must be of a rank you can use and does not count against your number of techniques known.' }
				]
			},
			{
				level: 10,
				title: 'Elemental Shaping',
				blocks: [
					{ kind: 'paragraph', text: 'When you activate a Nature Technique, you can expend 1 additional Chakra Point to apply one of the following modifications:' },
					{ kind: 'paragraph', text: "Distant: Double the technique's range. If its range is Self, this option has no effect." },
					{ kind: 'paragraph', text: 'Expanded: Increase the radius of a sphere or cylinder by 5 feet, increase the length of a cone by 10 feet, or increase the width of a line by 5 feet.' },
					{ kind: 'paragraph', text: 'Careful: Choose a number of creatures affected by the technique up to your Wisdom modifier. The chosen creatures automatically succeed on their saving throws against the technique and take no damage if they would normally take half damage on a successful save.' },
					{ kind: 'paragraph', text: 'Piercing: The technique ignores resistance to its damage type.' }
				]
			},
			{
				level: 14,
				title: 'Nature Mastery',
				blocks: [
					{ kind: 'paragraph', text: 'Your Nature Techniques ignore resistance to their damage types.' },
					{ kind: 'paragraph', text: 'When a creature is immune to damage dealt by a Nature Technique, treat that immunity as resistance instead.' },
					{ kind: 'paragraph', text: 'Once on each of your turns, reduce the Chakra Point cost of one Nature Technique by 1, to a minimum cost of 1.' }
				]
			}
		],
		playIf: ['Use large elemental attacks', 'Fight effectively at range', 'Control areas of the battlefield', 'Learn multiple Chakra Natures', 'Modify the shape and range of techniques']
	},
	{
		id: 'path-of-genjutsu',
		title: 'Path of Genjutsu',
		href: '/classes/shinobi/path-of-genjutsu',
		description:
			'A mental manipulator who distorts perception, creates false realities and controls enemy decisions.',
		combatRole: 'Controller and infiltrator',
		primaryFocus: 'Illusions, psychic interference, deception and mental control',
		introduction: [
			"Shinobi who follow the Path of Genjutsu manipulate the chakra flowing through another creature's nervous system. Their techniques distort sight, sound, memory and perception.",
			'A Genjutsu Shinobi can create false targets, conceal allies and trap enemies inside convincing illusions.'
		],
		features: [
			{
				level: 3,
				title: 'Genjutsu Training',
				blocks: [
					{ kind: 'paragraph', text: 'Gain proficiency in either Deception or Insight. If you already have proficiency in the selected skill, your proficiency bonus is doubled for checks made with it.' },
					{ kind: 'paragraph', text: 'Learn two additional Genjutsu Path Techniques. They must be of a rank you can use and do not count against your number of techniques known.' }
				]
			},
			{
				level: 6,
				title: 'Distorted Perception',
				blocks: [
					{ kind: 'paragraph', text: 'When a creature you can see within 60 feet makes an attack roll, you can use your reaction and expend 1 Chakra Point to distort its perception.' },
					{ kind: 'paragraph', text: 'The creature must make a Wisdom saving throw against your Technique Save DC.' },
					{ kind: 'paragraph', text: 'On a failed save, the attack roll is made with disadvantage. If the attack misses, you can immediately move up to 10 feet without provoking opportunity attacks.' },
					{ kind: 'paragraph', text: 'A creature that is immune to the Charmed condition automatically succeeds on this saving throw.' }
				]
			},
			{
				level: 10,
				title: 'Persistent Illusion',
				blocks: [
					{ kind: 'paragraph', text: 'When a creature succeeds on a saving throw against one of your Genjutsu techniques, you can expend 1 Chakra Point to force it to reroll the saving throw. The creature must use the new result.' },
					{ kind: 'paragraph', text: 'You can use this feature once on each of your turns.' },
					{ kind: 'paragraph', text: 'In addition, when your concentration on a Genjutsu technique ends because you failed a concentration saving throw, the technique remains active until the end of your next turn.' }
				]
			},
			{
				level: 14,
				title: 'World of Illusion',
				blocks: [
					{ kind: 'paragraph', text: 'As an action, choose a point you can see within 60 feet. Each creature of your choice in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw against your Technique Save DC.' },
					{ kind: 'paragraph', text: 'On a failed save, a creature is Charmed and Incapacitated for up to 1 minute as it becomes trapped inside a shared illusion.' },
					{ kind: 'paragraph', text: 'The effect requires concentration.' },
					{ kind: 'paragraph', text: 'An affected creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature also repeats the saving throw whenever it takes damage.' },
					{ kind: 'paragraph', text: 'Once you use this feature, you cannot use it again until you finish a long rest.' }
				]
			}
		],
		playIf: ['Control enemies without relying on direct damage', 'Create false targets and environments', 'Manipulate enemy attacks', 'Support infiltration and deception', 'Use psychic and illusion-based abilities']
	},
	{
		id: 'path-of-the-bloodline',
		title: 'Path of the Bloodline',
		href: '/classes/shinobi/path-of-the-bloodline',
		description:
			'A specialist who dedicates every aspect of their training to awakening an inherited Rare Chakra Heritage.',
		requirement: 'Bloodline of Fate Chakra Origin',
		combatRole: 'Determined by the selected Rare Chakra Heritage',
		primaryFocus: 'Heritage Techniques and inherited manifestations',
		introduction: [
			'The Path of the Bloodline is followed by Shinobi who devote themselves to fully awakening an inherited power.',
			"Every Rare Chakra Heritage already grants an initial manifestation and develops through Chakra Origin features. This path intensifies that development and places the bloodline at the center of the Shinobi's fighting style."
		],
		features: [
			{
				level: 3,
				title: 'Awakened Heritage',
				blocks: [
					{ kind: 'paragraph', text: 'Learn two additional Heritage Techniques associated with your Rare Chakra Heritage. They must be of a rank you can use and do not count against your number of techniques known.' },
					{ kind: 'paragraph', text: 'Once on each of your turns when you activate a Heritage Technique, you gain temporary hit points equal to your proficiency bonus.' }
				]
			},
			{
				level: 6,
				title: 'Inherited Adaptation',
				blocks: [
					{ kind: 'paragraph', text: 'Choose one of the following adaptations:' },
					{ kind: 'paragraph', text: 'Hardened Form: While wearing light armor or no armor and not wielding a shield, you gain a +1 bonus to Armor Class.' },
					{ kind: 'paragraph', text: 'Predatory Senses: You gain darkvision out to 60 feet. If you already have darkvision, its range increases by 30 feet. You have advantage on initiative rolls.' },
					{ kind: 'paragraph', text: 'Overflowing Chakra: Your maximum number of Chakra Points increases by an amount equal to your proficiency bonus.' },
					{ kind: 'paragraph', text: 'Unyielding Mind: You have advantage on saving throws against being Charmed or Frightened.' },
					{ kind: 'paragraph', text: 'You can select a different adaptation whenever you gain another Shinobi level.' }
				]
			},
			{
				level: 10,
				title: 'Advanced Manifestation',
				blocks: [
					{ kind: 'paragraph', text: 'Once on each of your turns, reduce the Chakra Point cost of one Heritage Technique by 1, to a minimum cost of 1.' },
					{ kind: 'paragraph', text: 'When a Heritage Technique has a duration of at least 1 minute, its duration is doubled, to a maximum of 24 hours.' }
				]
			},
			{
				level: 14,
				title: 'Bloodline Ascendance',
				blocks: [
					{ kind: 'paragraph', text: 'As a bonus action, awaken the ascendant form of your Rare Chakra Heritage for 1 minute.' },
					{ kind: 'paragraph', text: 'For the duration:' },
					{ kind: 'list', items: ['You gain temporary hit points equal to twice your Shinobi level.', 'You have advantage on saving throws against techniques and spells.', 'Once on each of your turns, reduce the Chakra Point cost of one Heritage Technique by 2, to a minimum cost of 1.', 'Once on each of your turns when a Heritage Technique deals damage or restores hit points, add your Fortune Die to one damage or healing roll without expending the die.'] },
					{ kind: 'paragraph', text: 'The effect ends early if you become Unconscious.' },
					{ kind: 'paragraph', text: 'Once you use this feature, you cannot use it again until you finish a long rest.' }
				]
			}
		],
		playIf: ['Make your Rare Chakra Heritage your primary identity', 'Learn additional Heritage Techniques', 'Gain defensive mutations or adaptations', 'Specialize heavily around one inherited ability', 'Temporarily awaken an ascendant form']
	},
	{
		id: 'path-of-the-medical-shinobi',
		title: 'Path of the Medical Shinobi',
		href: '/classes/shinobi/path-of-the-medical-shinobi',
		description:
			'A precise chakra specialist who restores allies, removes harmful conditions and weaponizes biological knowledge.',
		combatRole: 'Healer and support combatant',
		primaryFocus: 'Healing, condition removal, chakra scalpels and biological control',
		introduction: [
			'Medical Shinobi use precise chakra control to close wounds, remove toxins and manipulate the biological systems of living creatures.',
			'The same knowledge that repairs tissue can also interrupt nerves, disable muscles and prevent an enemy from recovering.'
		],
		features: [
			{
				level: 3,
				title: 'Medical Training',
				blocks: [
					{ kind: 'paragraph', text: 'Gain proficiency in Medicine. If you already have proficiency in Medicine, your proficiency bonus is doubled for checks made with it.' },
					{ kind: 'paragraph', text: 'You learn First Aid Technique if you do not already know it. It does not count against your number of techniques known.' },
					{ kind: 'paragraph', text: 'A creature can regain hit points from your First Aid Technique twice per short or long rest instead of once.' },
					{ kind: 'paragraph', text: 'Whenever one of your Shinobi techniques restores hit points to a creature, that creature also gains temporary hit points equal to your proficiency bonus.' }
				]
			},
			{
				level: 6,
				title: 'Chakra Scalpel',
				blocks: [
					{ kind: 'paragraph', text: 'As a bonus action, you can expend 1 Chakra Point to form a chakra scalpel around one or both hands for 1 minute.' },
					{ kind: 'paragraph', text: 'For the duration:' },
					{ kind: 'list', items: ['Your unarmed strikes can deal force damage instead of bludgeoning damage.', 'You can use Wisdom instead of Strength or Dexterity for the attack and damage rolls of your unarmed strikes.', 'Once on each of your turns when you hit a creature with an unarmed strike, the creature takes an additional 1d8 force damage.', 'A creature damaged by the additional force damage cannot regain hit points until the start of your next turn.'] },
					{ kind: 'paragraph', text: 'The effect ends early if you become Unconscious.' }
				]
			},
			{
				level: 10,
				title: 'Cellular Restoration',
				blocks: [
					{ kind: 'paragraph', text: 'As an action, touch a living creature and expend 3 Chakra Points.' },
					{ kind: 'paragraph', text: 'Choose one of the following effects:' },
					{ kind: 'list', items: ['End the Blinded condition.', 'End the Deafened condition.', 'End the Paralyzed condition.', 'End the Poisoned condition.', 'End one disease affecting the target.', "Reduce the target's Exhaustion level by 1."] },
					{ kind: 'paragraph', text: 'A creature cannot have its Exhaustion reduced by this feature again until it finishes a long rest.' }
				]
			},
			{
				level: 14,
				title: 'Regenerative Seal',
				blocks: [
					{ kind: 'paragraph', text: 'When you finish a long rest, place a Regenerative Seal on yourself or one willing creature you touch. The seal remains until you finish another long rest or place it on a different creature.' },
					{ kind: 'paragraph', text: 'When the sealed creature is reduced to half its hit point maximum or lower, you or the sealed creature can use a reaction to activate the seal.' },
					{ kind: 'paragraph', text: 'The creature regains 4d8 + your Wisdom modifier hit points and can immediately end one of the following conditions affecting it:' },
					{ kind: 'list', items: ['Blinded', 'Charmed', 'Deafened', 'Frightened', 'Paralyzed', 'Poisoned', 'Stunned'] },
					{ kind: 'paragraph', text: 'Once activated, the seal disappears.' }
				]
			}
		],
		playIf: ['Heal party members', 'Remove dangerous conditions', 'Stabilize injured allies', 'Fight with precise chakra scalpels', 'Combine support with melee pressure']
	},
	{
		id: 'path-of-sealing',
		title: 'Path of Sealing',
		href: '/classes/shinobi/path-of-sealing',
		description:
			'A tactical specialist who stores chakra in formulas, prepares traps and suppresses supernatural abilities.',
		combatRole: 'Battlefield controller and trap specialist',
		primaryFocus: 'Seals, barriers, containment and prepared effects',
		introduction: [
			'The Path of Sealing teaches Shinobi to encode chakra into written formulas, tags and prepared symbols.',
			'Seals can store equipment, create defensive boundaries, suppress supernatural movement and restrain dangerous enemies.'
		],
		features: [
			{
				level: 3,
				title: 'Sealing Formula',
				blocks: [
					{ kind: 'paragraph', text: "Gain proficiency with calligrapher's supplies. If you already have this proficiency, your proficiency bonus is doubled for checks made with them." },
					{ kind: 'paragraph', text: 'Learn two additional Sealing Path Techniques. They must be of a rank you can use and do not count against your number of techniques known.' },
					{ kind: 'paragraph', text: 'When you finish a short or long rest, you can prepare a number of chakra seals equal to your proficiency bonus.' },
					{ kind: 'paragraph', text: 'As an action, you can place one prepared seal on a surface or unattended object you can touch. A seal remains until it is activated, destroyed or you finish a long rest.' },
					{ kind: 'paragraph', text: 'When you activate a Sealing Technique, you can cause the technique to originate from one of your prepared seals within 60 feet instead of from yourself. The seal is consumed.' }
				]
			},
			{
				level: 6,
				title: 'Suppression Seal',
				blocks: [
					{ kind: 'paragraph', text: 'When a creature fails a saving throw against one of your Sealing Techniques, it becomes suppressed until the start of your next turn.' },
					{ kind: 'paragraph', text: 'A suppressed creature:' },
					{ kind: 'list', items: ['Cannot teleport.', 'Cannot regain Chakra Points, Ki Points, Sorcery Points or similar class resources.', 'Cannot take reactions.'] }
				]
			},
			{
				level: 10,
				title: 'Prepared Network',
				blocks: [
					{ kind: 'paragraph', text: 'The number of chakra seals you can prepare becomes equal to your proficiency bonus + your Wisdom modifier.' },
					{ kind: 'paragraph', text: 'The maximum range at which you can activate one of your prepared seals increases to 120 feet.' },
					{ kind: 'paragraph', text: 'You can place a prepared seal as a bonus action instead of an action.' },
					{ kind: 'paragraph', text: 'When a creature you can see moves within 10 feet of one of your prepared seals, you can use your reaction to activate a Sealing Technique through that seal.' }
				]
			},
			{
				level: 14,
				title: 'Grand Binding Seal',
				blocks: [
					{ kind: 'paragraph', text: 'As an action, choose one creature you can see within 30 feet. The creature must make a Charisma saving throw against your Technique Save DC.' },
					{ kind: 'paragraph', text: 'On a failed save, the creature is sealed inside an extradimensional formula for up to 1 minute. While sealed:' },
					{ kind: 'list', items: ['The creature is Incapacitated.', 'The creature has total cover.', "The creature's speed is 0.", 'The creature cannot affect or be affected by anything outside the seal.'] },
					{ kind: 'paragraph', text: 'The effect requires concentration.' },
					{ kind: 'paragraph', text: 'The sealed creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
					{ kind: 'paragraph', text: 'Once you use this feature, you cannot use it again until you finish a long rest.' }
				]
			}
		],
		playIf: ['Prepare traps and magical formulas', 'Store and trigger effects remotely', 'Restrict enemy movement', 'Suppress supernatural resources', 'Temporarily imprison dangerous creatures']
	},
	{
		id: 'path-of-fortune',
		title: 'Path of Fortune',
		href: '/classes/shinobi/path-of-fortune',
		description: 'A probability manipulator who turns unlikely events into reliable weapons.',
		combatRole: 'Reactive support and unpredictable skirmisher',
		primaryFocus: 'Fortune Dice, rerolls and manipulation of d20 results',
		introduction: [
			'Some Shinobi survive through discipline. Others survive through a sequence of events that should have been impossible.',
			'The Path of Fortune allows a Shinobi to actively manipulate probability. Attacks miss by fractions of an inch, weapons strike precisely where needed and impossible opportunities appear at the perfect moment.'
		],
		features: [
			{
				level: 3,
				title: 'Favored by Fortune',
				blocks: [
					{ kind: 'paragraph', text: 'You gain one additional Fortune Die.' },
					{ kind: 'paragraph', text: 'When you roll initiative and have no Fortune Dice remaining, you regain one Fortune Die.' }
				]
			},
			{
				level: 6,
				title: 'Twist Misfortune',
				blocks: [
					{ kind: 'paragraph', text: 'You can use Fortune Dice to affect damage and healing.' },
					{ kind: 'paragraph', text: 'When a creature you can see within 30 feet rolls damage or restores hit points, you can use your reaction and expend one Fortune Die.' },
					{ kind: 'paragraph', text: 'Roll the die and choose one of the following:' },
					{ kind: 'list', items: ['Add the result to one damage or healing roll made by you or an ally.', 'Subtract the result from one damage roll made by an enemy.'] },
					{ kind: 'paragraph', text: 'When subtracting damage, the reduction applies to one creature damaged by the effect.' }
				]
			},
			{
				level: 10,
				title: "Fortune's Reversal",
				blocks: [
					{ kind: 'paragraph', text: 'When you or an ally you can see within 30 feet rolls a natural 1 on an attack roll, ability check or saving throw, you can use your reaction and expend one Fortune Die to force that creature to reroll the d20.' },
					{ kind: 'paragraph', text: 'When an enemy you can see within 30 feet rolls a natural 20 on an attack roll, you can use your reaction and expend one Fortune Die to force the enemy to reroll the d20.' },
					{ kind: 'paragraph', text: 'The new roll must be used.' }
				]
			},
			{
				level: 14,
				title: 'Impossible Outcome',
				blocks: [
					{ kind: 'paragraph', text: 'When you or an ally you can see within 60 feet makes an attack roll, ability check or saving throw, you can replace the d20 result with a 20.' },
					{ kind: 'paragraph', text: 'Alternatively, when an enemy you can see within 60 feet makes an attack roll, ability check or saving throw, you can replace the d20 result with a 1.' },
					{ kind: 'paragraph', text: 'You make this decision after the roll is made but before the outcome is announced.' },
					{ kind: 'paragraph', text: 'Once you use this feature, you cannot use it again until you finish a long rest.' }
				]
			}
		],
		playIf: ['Manipulate d20 rolls', 'Protect allies from failed saves', 'Cancel enemy critical hits', 'Improve damage and healing rolls', 'Force an extraordinary result at a decisive moment']
	}
] satisfies ShinobiPath[];

export function getShinobiPath(id: string): ShinobiPath {
	const path = shinobiPaths.find((entry) => entry.id === id);

	if (!path) {
		throw new Error(`Unknown Shinobi Path: ${id}`);
	}

	return path;
}
