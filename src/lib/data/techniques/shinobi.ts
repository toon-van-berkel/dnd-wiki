import type { Technique } from './types';

export const shinobiTechniques: Technique[] = [
	{
		id: 'body-flicker-technique',
		slug: 'body-flicker-technique',
		name: 'Body Flicker Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You move with supernatural speed to an unoccupied space you can see within 15 feet.' },
			{ kind: 'paragraph', text: 'This movement:' },
			{ kind: 'list', items: ['Does not provoke opportunity attacks.', 'Does not count against your normal movement.', 'Cannot move you through solid objects.'] }
		],
		augment: [
			{ kind: 'paragraph', text: 'For every additional Chakra Point you expend, the distance increases by 10 feet. You can increase the distance by no more than 30 feet in this way.' }
		],
		source: 'shinobi'
	},
	{
		id: 'chakra-guard',
		slug: 'chakra-guard',
		name: 'Chakra Guard',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Reaction, which you take when an attack hits you',
		range: 'Self',
		duration: 'Until the start of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You concentrate chakra at the point where the attack is about to strike.' },
			{ kind: 'paragraph', text: 'Add your proficiency bonus to your Armor Class against the triggering attack, potentially causing it to miss.' },
			{ kind: 'paragraph', text: 'Until the start of your next turn, you also have advantage on ability checks and saving throws made to resist being grappled, shoved or forcibly moved.' }
		],
		source: 'shinobi'
	},
	{
		id: 'chakra-strike',
		slug: 'chakra-strike',
		name: 'Chakra Strike',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'When you hit with a weapon attack or unarmed strike',
		range: 'The range of the triggering attack',
		duration: 'Instantaneous',
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You reinforce your attack with a sudden burst of chakra.' },
			{ kind: 'paragraph', text: 'The attack deals an additional 1d6 force damage. Choose one of the following effects:' },
			{ kind: 'list', items: ['Push the target up to 5 feet away from you.', 'The target cannot take reactions until the start of its next turn.', 'You immediately move up to 5 feet without provoking opportunity attacks.'] },
			{ kind: 'paragraph', text: 'The additional damage increases to 2d6 when you reach 11th level in the Shinobi class.' }
		],
		source: 'shinobi'
	},
	{
		id: 'clone-technique',
		slug: 'clone-technique',
		name: 'Clone Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Concentration, up to 1 minute',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You create an illusory duplicate of yourself. The clone appears in your space and moves with you.' },
			{ kind: 'paragraph', text: 'While the clone exists:' },
			{ kind: 'list', items: ['You have advantage on the first Deception or Performance check you make to mislead a creature about your identity or location.', 'The first attack roll made against you has disadvantage.'] },
			{ kind: 'paragraph', text: 'After an attack is made against you, whether it hits or misses, the clone disappears.' },
			{ kind: 'paragraph', text: 'A creature can use its action to examine the clone and make an Intelligence (Investigation) check against your Technique Save DC. On a success, the creature recognizes the clone as an illusion.' }
		],
		source: 'shinobi'
	},
	{
		id: 'escape-artist-technique',
		slug: 'escape-artist-technique',
		name: 'Escape Artist Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You manipulate your joints and chakra flow to escape from restraints.' },
			{ kind: 'paragraph', text: 'You immediately end one of the following conditions on yourself:' },
			{ kind: 'list', items: ['Grappled', 'Restrained by a nonmagical object, rope, chain or net'] },
			{ kind: 'paragraph', text: 'When the Restrained condition originates from a creature or magical effect, you instead immediately repeat the relevant saving throw or escape check with advantage.' }
		],
		source: 'shinobi'
	},
	{
		id: 'first-aid-technique',
		slug: 'first-aid-technique',
		name: 'First Aid Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Action',
		range: 'Touch',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You stabilize and restore a living creature by carefully controlling its chakra flow.' },
			{ kind: 'paragraph', text: 'The target regains hit points equal to 1d6 + your Wisdom modifier.' },
			{ kind: 'paragraph', text: 'A creature can regain hit points from your First Aid Technique only once per short or long rest.' },
			{ kind: 'paragraph', text: 'This technique has no effect on Constructs or Undead.' }
		],
		augment: [
			{ kind: 'paragraph', text: 'For every additional Chakra Point you expend, the healing increases by 1d6. You cannot expend more additional Chakra Points than your proficiency bonus.' }
		],
		source: 'shinobi'
	},
	{
		id: 'hidden-weapon-technique',
		slug: 'hidden-weapon-technique',
		name: 'Hidden Weapon Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: '1 hour',
		description: [
			{ kind: 'paragraph', text: 'You conceal up to two Light weapons or Shinobi tools using chakra.' },
			{ kind: 'paragraph', text: 'The concealed objects cannot be detected by ordinary visual inspection.' },
			{ kind: 'paragraph', text: 'A creature that physically searches you must succeed on an Intelligence (Investigation) check against your Technique Save DC to discover the objects.' },
			{ kind: 'paragraph', text: "During the technique's duration, you can draw one concealed object as part of an attack or object interaction." },
			{ kind: 'paragraph', text: 'The technique ends early when all concealed objects have been removed.' }
		],
		source: 'shinobi'
	},
	{
		id: 'shadow-shuriken-technique',
		slug: 'shadow-shuriken-technique',
		name: 'Shadow Shuriken Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Action',
		range: '60 feet',
		duration: 'Instantaneous',
		damageType: 'piercing',
		description: [
			{ kind: 'paragraph', text: 'Make a ranged technique attack against one creature within range.' },
			{ kind: 'paragraph', text: 'On a hit, the projectile deals 2d6 piercing damage.' },
			{ kind: 'paragraph', text: 'When another creature is within 5 feet of the target, you can cause the projectile to approach from an unexpected angle. The target gains no benefit from half cover against this attack.' },
			{ kind: 'paragraph', text: 'The damage increases at higher Shinobi levels:' },
			{ kind: 'list', items: ['3d6 at 5th level', '4d6 at 11th level', '5d6 at 17th level'] },
			{ kind: 'paragraph', text: 'Because this technique requires your action, it does not benefit from Extra Attack.' }
		],
		source: 'shinobi'
	},
	{
		id: 'smoke-veil-technique',
		slug: 'smoke-veil-technique',
		name: 'Smoke Veil Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Action',
		range: '30 feet',
		duration: 'Until the start of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You create a cloud of smoke in a 10-foot-radius sphere centered on a point you can see within range.' },
			{ kind: 'paragraph', text: 'The area is heavily obscured.' },
			{ kind: 'paragraph', text: 'A wind of at least 10 miles per hour disperses the smoke immediately.' },
			{ kind: 'paragraph', text: 'When you activate this technique, you can immediately take the Hide action as part of the same action.' }
		],
		augment: [
			{ kind: 'paragraph', text: 'You can expend 1 additional Chakra Point to maintain the smoke for up to 1 minute. When you do so, the technique requires concentration.' }
		],
		source: 'shinobi'
	},
	{
		id: 'substitution-technique',
		slug: 'substitution-technique',
		name: 'Substitution Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Reaction, which you take when you take damage from an attack',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'At the last possible moment, you replace yourself with a nearby object, illusion or remnant of chakra.' },
			{ kind: 'paragraph', text: 'Reduce the triggering damage by 1d8 + your Wisdom modifier.' },
			{ kind: 'paragraph', text: 'You can then move up to 10 feet to an unoccupied space you can see. This movement does not provoke opportunity attacks.' },
			{ kind: 'paragraph', text: 'When this technique reduces the damage to 0, you leave behind a convincing replacement object in your original space.' },
			{ kind: 'paragraph', text: 'The damage reduction increases at higher Shinobi levels:' },
			{ kind: 'list', items: ['2d8 + your Wisdom modifier at 5th level', '3d8 + your Wisdom modifier at 11th level', '4d8 + your Wisdom modifier at 17th level'] }
		],
		source: 'shinobi'
	},
	{
		id: 'surface-walking-technique',
		slug: 'surface-walking-technique',
		name: 'Surface Walking Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: '10 minutes',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You concentrate chakra beneath your feet.' },
			{ kind: 'paragraph', text: 'For the duration:' },
			{ kind: 'list', items: ['You gain a climbing speed equal to your walking speed.', 'You can move across vertical surfaces while keeping your hands free.', 'You can move across liquids as though they were solid ground.'] },
			{ kind: 'paragraph', text: 'The technique requires concentration while you end your turn on a vertical surface, upside down or on a liquid surface.' },
			{ kind: 'paragraph', text: 'When you reach 9th level in the Shinobi class and gain Chakra Movement, you can immediately replace this technique with another Rank I technique for which you meet the requirements.' }
		],
		source: 'shinobi'
	},
	{
		id: 'transformation-technique',
		slug: 'transformation-technique',
		name: 'Transformation Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Action',
		range: 'Self',
		duration: 'Concentration, up to 1 hour',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You transform your physical appearance, clothing and voice.' },
			{ kind: 'paragraph', text: 'You can appear up to 1 foot taller or shorter and can alter your build, facial features, hair, clothing and voice. Your creature size does not change.' },
			{ kind: 'paragraph', text: 'The transformation feels mostly real when touched, but it does not grant:' },
			{ kind: 'list', items: ['Natural weapons', 'Additional limbs', 'New movement speeds', 'New senses', 'Functional anatomical abilities'] },
			{ kind: 'paragraph', text: 'A creature that carefully examines you can make an Intelligence (Investigation) check against your Technique Save DC. On a success, it recognizes the transformation as a chakra-based disguise.' }
		],
		source: 'shinobi'
	},
	{
		id: 'wire-snare-technique',
		slug: 'wire-snare-technique',
		name: 'Wire Snare Technique',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Action',
		range: '30 feet',
		duration: 'Until the end of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You throw chakra-reinforced wires around one creature of Large size or smaller within range.' },
			{ kind: 'paragraph', text: 'The target must make a Dexterity saving throw.' },
			{ kind: 'paragraph', text: 'On a failed save:' },
			{ kind: 'list', items: ['The target is Restrained.', 'You can pull the target up to 10 feet toward you, provided it is no more than one size larger than you.'] },
			{ kind: 'paragraph', text: 'The target can use its action to make a Strength check against your Technique Save DC, ending the effect on a success.' },
			{ kind: 'paragraph', text: 'The wires have:' },
			{ kind: 'list', items: ['Armor Class 12', 'Hit points equal to twice your Shinobi level', 'Immunity to poison damage', 'Immunity to psychic damage'] },
			{ kind: 'paragraph', text: 'The technique ends when the wires are destroyed or the target escapes.' }
		],
		source: 'shinobi'
	},
	{
		id: 'chakra-pulse',
		slug: 'chakra-pulse',
		name: 'Chakra Pulse',
		rank: 'I',
		category: 'universal',
		chakraCost: '1',
		activation: 'Action',
		range: 'Self, 10-foot cone',
		duration: 'Instantaneous',
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You release a short blast of raw chakra.' },
			{ kind: 'paragraph', text: 'Each creature in the cone must make a Dexterity saving throw.' },
			{ kind: 'paragraph', text: 'A creature takes 2d6 force damage on a failed save, or half as much damage on a successful one.' },
			{ kind: 'paragraph', text: 'A creature that fails the saving throw is also pushed 5 feet away from you.' },
			{ kind: 'paragraph', text: 'The damage increases at higher Shinobi levels:' },
			{ kind: 'list', items: ['3d6 at 5th level', '4d6 at 11th level', '5d6 at 17th level'] }
		],
		source: 'shinobi'
	},
	{
		id: 'body-flicker-assault',
		slug: 'body-flicker-assault',
		name: 'Body Flicker Assault',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Instantaneous',
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You surge forward in a blur of chakra.' },
			{ kind: 'paragraph', text: 'Move up to 20 feet to an unoccupied space you can see. This movement:' },
			{ kind: 'list', items: ['Does not provoke opportunity attacks.', 'Does not count against your normal movement.', 'Ignores difficult terrain.', 'Cannot move you through creatures or solid objects.'] },
			{ kind: 'paragraph', text: 'The first time you hit with a weapon attack or unarmed strike before the end of the current turn, the attack deals an additional 1d6 force damage.' }
		],
		augment: [
			{ kind: 'paragraph', text: 'You can expend 1 additional Chakra Point to increase the movement to 40 feet.' }
		]
	},
	{
		id: 'chakra-barrier',
		slug: 'chakra-barrier',
		name: 'Chakra Barrier',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Reaction, which you take when an attack hits you',
		range: 'Self',
		duration: 'Until the start of your next turn',
		description: [
			{ kind: 'paragraph', text: 'You surround yourself with a condensed barrier of chakra.' },
			{ kind: 'paragraph', text: 'You gain a +3 bonus to Armor Class against the triggering attack, potentially causing it to miss.' },
			{ kind: 'paragraph', text: 'The bonus then remains until the start of your next turn and applies against all other attacks made against you during that time.' },
			{ kind: 'paragraph', text: 'You cannot use Chakra Barrier and Chakra Guard against the same triggering attack.' }
		]
	},
	{
		id: 'chakra-bind-technique',
		slug: 'chakra-bind-technique',
		name: 'Chakra Bind Technique',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: '30 feet',
		duration: 'Concentration, up to 1 minute',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You form bands of concentrated chakra around one creature of Large size or smaller within range.' },
			{ kind: 'paragraph', text: 'The target must make a Strength saving throw.' },
			{ kind: 'paragraph', text: 'On a failed save, the target is Restrained for the duration.' },
			{ kind: 'paragraph', text: 'At the end of each of its turns, the target repeats the saving throw, ending the technique on itself on a success.' },
			{ kind: 'paragraph', text: 'The Restrained creature or another creature within its reach can use an action to make a Strength check against your Technique Save DC. On a success, the target is freed.' },
			{ kind: 'paragraph', text: 'The technique ends early if the target moves beyond 60 feet from you.' }
		]
	},
	{
		id: 'chakra-disruption-strike',
		slug: 'chakra-disruption-strike',
		name: 'Chakra Disruption Strike',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'When you hit with a weapon attack or unarmed strike',
		range: 'The range of the triggering attack',
		duration: 'Instantaneous',
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You drive disruptive chakra into the target’s body.' },
			{ kind: 'paragraph', text: 'The attack deals an additional 2d6 force damage, and the target must make a Constitution saving throw.' },
			{ kind: 'paragraph', text: 'On a failed save:' },
			{ kind: 'list', items: ['The target cannot take reactions until the start of your next turn.', 'The target has disadvantage on the next Constitution saving throw it makes to maintain concentration before the start of your next turn.'] },
			{ kind: 'paragraph', text: 'This technique cannot be combined with Chakra Strike on the same attack.' }
		]
	},
	{
		id: 'explosive-clone-technique',
		slug: 'explosive-clone-technique',
		name: 'Explosive Clone Technique',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: '30 feet',
		duration: 'Concentration, up to 1 minute',
		concentration: true,
		damageType: 'force',
		description: [
			{ kind: 'paragraph', text: 'You create an unstable clone in an unoccupied space within range.' },
			{ kind: 'paragraph', text: 'The clone resembles you and has:' },
			{ kind: 'list', items: ['Armor Class 13', '1 hit point', 'Immunity to poison and psychic damage'] },
			{ kind: 'paragraph', text: 'The clone cannot move, take actions or speak.' },
			{ kind: 'paragraph', text: 'A creature can use its action to examine the clone and make an Intelligence (Investigation) check against your Technique Save DC. On a success, it recognizes the clone as unstable chakra.' },
			{ kind: 'paragraph', text: 'You can detonate the clone as a bonus action.' },
			{ kind: 'paragraph', text: 'You can also use your reaction to detonate it when a creature:' },
			{ kind: 'list', items: ['Moves within 5 feet of the clone.', 'Hits the clone with a melee attack.', 'Reduces the clone to 0 hit points.'] },
			{ kind: 'paragraph', text: 'When the clone detonates, each creature within 5 feet of it must make a Dexterity saving throw.' },
			{ kind: 'paragraph', text: 'A creature takes 3d6 force damage on a failed save, or half as much damage on a successful one.' },
			{ kind: 'paragraph', text: 'The clone then disappears.' }
		]
	},
	{
		id: 'flash-step-barrage',
		slug: 'flash-step-barrage',
		name: 'Flash Step Barrage',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: 'Self',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You move through the battlefield while striking several opponents.' },
			{ kind: 'paragraph', text: 'Move up to your walking speed. This movement does not provoke opportunity attacks.' },
			{ kind: 'paragraph', text: 'At any points during this movement, you can make one melee weapon attack or unarmed strike against up to two different creatures within your reach.' },
			{ kind: 'paragraph', text: 'You cannot attack the same creature more than once with this technique.' },
			{ kind: 'paragraph', text: 'This technique does not benefit from Extra Attack.' }
		]
	},
	{
		id: 'sensory-pulse-technique',
		slug: 'sensory-pulse-technique',
		name: 'Sensory Pulse Technique',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Concentration, up to 10 minutes',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You expand your awareness by releasing a continuous pulse of chakra.' },
			{ kind: 'paragraph', text: 'For the duration:' },
			{ kind: 'list', items: ['You gain blindsight out to 10 feet.', 'You have advantage on Wisdom (Perception) checks made to locate hidden creatures.', 'Creatures within 30 feet gain no benefit from being lightly obscured when attempting to Hide from you.', 'You cannot be surprised by a creature within 30 feet while you are conscious.'] },
			{ kind: 'paragraph', text: 'This technique cannot detect a creature through total cover.' }
		]
	},
	{
		id: 'shadow-clone-technique',
		slug: 'shadow-clone-technique',
		name: 'Shadow Clone Technique',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: 'Self',
		duration: 'Concentration, up to 1 minute',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You create one physical duplicate of yourself in an unoccupied space within 5 feet.' },
			{ kind: 'paragraph', text: 'The clone acts immediately after your turn and obeys your mental commands. It has:' },
			{ kind: 'list', items: ['Armor Class 13', '1 hit point', 'Your walking speed', 'Your ability check and saving throw modifiers', 'Immunity to the Charmed, Frightened and Poisoned conditions'] },
			{ kind: 'paragraph', text: 'On its turn, the clone can move and take one of the following actions:' },
			{ kind: 'list', items: ['Dash', 'Disengage', 'Dodge', 'Help', 'Hide', 'Search', 'Use an Object'] },
			{ kind: 'paragraph', text: 'The clone cannot:' },
			{ kind: 'list', items: ['Attack', 'Deal damage', 'Activate techniques', 'Use class features', 'Use magic items', 'Move more than 120 feet away from you'] },
			{ kind: 'paragraph', text: 'You know what the clone sees and hears while it is within 120 feet of you.' },
			{ kind: 'paragraph', text: 'The clone disappears when it is reduced to 0 hit points, moves beyond 120 feet from you or when the technique ends.' }
		]
	},
	{
		id: 'silent-killing-technique',
		slug: 'silent-killing-technique',
		name: 'Silent Killing Technique',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Concentration, up to 1 minute',
		concentration: true,
		description: [
			{ kind: 'paragraph', text: 'You suppress the sound of your movement and attacks with controlled chakra.' },
			{ kind: 'paragraph', text: 'For the duration:' },
			{ kind: 'list', items: ['Your movement produces no sound.', 'You have advantage on Dexterity (Stealth) checks that rely on moving silently.', 'Moving at full speed does not impose disadvantage on Stealth checks.', 'Once on each of your turns when you hit a creature that cannot see you, the attack deals an additional 1d6 damage of the attack’s type.'] },
			{ kind: 'paragraph', text: 'This technique does not make you invisible and does not prevent creatures from detecting you by sight or other senses.' }
		]
	},
	{
		id: 'chakra-rebalancing-technique',
		slug: 'chakra-rebalancing-technique',
		name: 'Chakra Rebalancing Technique',
		rank: 'II',
		category: 'universal',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: 'Touch',
		duration: 'Instantaneous',
		description: [
			{ kind: 'paragraph', text: 'You stabilize the target’s chakra network and disrupt harmful influences.' },
			{ kind: 'paragraph', text: 'Touch one willing living creature and choose one of the following effects:' },
			{ kind: 'list', items: ['End the Charmed condition.', 'End the Frightened condition.', 'End the Poisoned condition.', 'Allow the target to immediately repeat a saving throw against an effect causing it to be Blinded, Deafened or Restrained.'] },
			{ kind: 'paragraph', text: 'When the target repeats a saving throw through this technique, it has advantage on the roll.' },
			{ kind: 'paragraph', text: 'This technique has no effect on Constructs or Undead.' }
		]
	},
	{
		id: 'shadow-needle-technique',
		slug: 'shadow-needle-technique',
		name: 'Shadow Needle Technique',
		rank: 'I',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '1',
		activation: 'Action',
		range: '60 feet',
		duration: 'Instantaneous',
		requirements: 'Living Shadow Heritage',
		heritage: 'Living Shadow',
		damageType: 'necrotic',
		description: [
			{ kind: 'paragraph', text: 'You sharpen your living shadow into a thin projectile and launch it at a creature within range.' },
			{ kind: 'paragraph', text: 'Make a ranged technique attack against the target. On a hit, the target takes 2d6 necrotic damage, and its speed is reduced by 10 feet until the start of your next turn.' }
		],
		scaling: [
			{ kind: 'list', items: ['Shinobi level 1: 2d6', 'Shinobi level 5: 3d6', 'Shinobi level 11: 4d6', 'Shinobi level 17: 5d6'] }
		],
		searchKeywords: ['ranged technique attack', 'necrotic', 'speed reduction', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'grasping-shade-technique',
		slug: 'grasping-shade-technique',
		name: 'Grasping Shade Technique',
		rank: 'I',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '1',
		activation: 'Action',
		range: '30 feet',
		duration: 'Until the start of your next turn',
		requirements: 'Living Shadow Heritage',
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'Your shadow stretches across the ground and wraps around one creature of Large size or smaller within range.' },
			{ kind: 'paragraph', text: 'The target must make a Strength saving throw.' },
			{ kind: 'paragraph', text: 'On a failed save:' },
			{ kind: 'list', items: ['Its speed becomes 0.', 'It cannot take reactions.'] },
			{ kind: 'paragraph', text: 'Both effects last until the start of your next turn.' },
			{ kind: 'paragraph', text: 'On a successful save, its speed is reduced by 10 feet until the start of your next turn.' }
		],
		searchKeywords: ['Strength saving throw', 'speed 0', 'reactions', 'movement control', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'shadow-passage-technique',
		slug: 'shadow-passage-technique',
		name: 'Shadow Passage Technique',
		rank: 'I',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '1',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Instantaneous',
		requirements: 'Living Shadow Heritage',
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'You disappear into one shadow and emerge from another.' },
			{ kind: 'paragraph', text: 'Teleport to an unoccupied space you can see within 15 feet. The destination must be:' },
			{ kind: 'list', items: ['In dim light or darkness;', 'Adjacent to a creature or object that casts a shadow; or', 'Inside the shadow of a structure or terrain feature.'] },
			{ kind: 'paragraph', text: 'This movement does not provoke opportunity attacks.' }
		],
		augment: [
			{ kind: 'paragraph', text: 'For every additional Chakra Point you expend, the teleportation distance increases by 10 feet, to a maximum increase of 30 feet.' }
		],
		searchKeywords: ['teleport', 'bonus action', 'shadow', 'dim light', 'darkness', 'mobility', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'shadow-bind-technique',
		slug: 'shadow-bind-technique',
		name: 'Shadow Bind Technique',
		rank: 'II',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: '60 feet',
		duration: 'Concentration, up to 1 minute',
		requirements: 'Living Shadow Heritage',
		concentration: true,
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'Your shadow connects with that of one creature of Large size or smaller within range.' },
			{ kind: 'paragraph', text: 'The target must make a Strength saving throw. On a failed save, the target is Restrained for the duration.' },
			{ kind: 'paragraph', text: 'At the end of each of its turns, the target repeats the saving throw, ending the effect on itself on a success.' },
			{ kind: 'paragraph', text: 'The technique ends early if:' },
			{ kind: 'list', items: ['The target moves more than 60 feet away from you;', 'You can no longer see the target; or', 'You become Incapacitated.'] }
		],
		searchKeywords: ['Restrained', 'Strength saving throw', 'concentration', 'control', 'binding', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'umbral-decoy-technique',
		slug: 'umbral-decoy-technique',
		name: 'Umbral Decoy Technique',
		rank: 'II',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Reaction, which you take when an attack roll hits you',
		range: 'Self',
		duration: 'Instantaneous',
		requirements: 'Living Shadow Heritage',
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'Your living shadow rises into your shape and takes your place at the moment of impact.' },
			{ kind: 'paragraph', text: 'The attacker must reroll the triggering attack and use the lower roll.' },
			{ kind: 'paragraph', text: 'If the attack misses, you can teleport up to 15 feet to an unoccupied space you can see.' },
			{ kind: 'paragraph', text: 'The destination must be in dim light, darkness or adjacent to a creature or object that casts a shadow.' },
			{ kind: 'paragraph', text: 'You cannot use Umbral Decoy and another feature that alters the triggering attack roll against the same attack.' }
		],
		searchKeywords: ['reaction', 'reroll attack', 'lower roll', 'teleport', 'defense', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'shadow-scout-technique',
		slug: 'shadow-scout-technique',
		name: 'Shadow Scout Technique',
		rank: 'II',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '2',
		activation: 'Action',
		range: '5 feet',
		duration: 'Concentration, up to 10 minutes',
		requirements: 'Living Shadow Heritage',
		concentration: true,
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'You separate a fragment of your living shadow, creating a Tiny shadow scout in an unoccupied space within range.' },
			{ kind: 'paragraph', text: 'The scout has:' },
			{ kind: 'list', items: ['Armor Class 14', '1 hit point', 'A walking speed of 30 feet', 'A climbing speed of 30 feet', 'Darkvision out to 60 feet', 'Your saving throw and Wisdom (Perception) modifiers', 'Immunity to poison and psychic damage'] },
			{ kind: 'paragraph', text: 'The scout acts immediately after your turn. It can move and take one of the following actions:' },
			{ kind: 'list', items: ['Dash', 'Disengage', 'Hide', 'Search'] },
			{ kind: 'paragraph', text: 'It can move through openings as narrow as 1 inch without squeezing, but it cannot move through solid surfaces.' },
			{ kind: 'paragraph', text: 'As a bonus action, you can see and hear through the scout until the start of your next turn. While doing so, you are Blinded and Deafened regarding your own surroundings.' },
			{ kind: 'paragraph', text: 'The scout disappears when:' },
			{ kind: 'list', items: ['It is reduced to 0 hit points;', 'It moves more than 300 feet away from you; or', 'The technique ends.'] }
		],
		searchKeywords: ['scout', 'familiar', 'perception', 'darkvision', 'climbing', 'scouting', 'infiltration', 'Blinded', 'Deafened', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'shadow-possession-technique',
		slug: 'shadow-possession-technique',
		name: 'Shadow Possession Technique',
		rank: 'III',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '3',
		activation: 'Action',
		range: '60 feet',
		duration: 'Concentration, up to 1 minute',
		requirements: 'Living Shadow Heritage',
		concentration: true,
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'Your shadow merges with the shadow of one creature of Large size or smaller within range.' },
			{ kind: 'paragraph', text: 'The target must make a Strength saving throw. On a failed save, it is Restrained for the duration.' },
			{ kind: 'paragraph', text: 'While the target is Restrained in this way, you can use a bonus action on each of your turns to force it to perform one of the following:' },
			{ kind: 'list', items: ['Move up to 15 feet in a direction you choose.', 'Drop one object it is holding.', 'Fall Prone.', 'Stand up.', 'Take the Dash or Disengage action.'] },
			{ kind: 'paragraph', text: 'You cannot force the target to enter an obviously harmful space, such as fire, deep water or a dangerous fall.' },
			{ kind: 'paragraph', text: 'At the end of each of its turns, the target repeats the saving throw, ending the technique on itself on a success.' },
			{ kind: 'paragraph', text: 'The technique ends early if the target moves more than 60 feet away from you.' }
		],
		searchKeywords: ['Restrained', 'forced movement', 'drop object', 'Prone', 'Dash', 'Disengage', 'possession', 'control', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'eclipse-field-technique',
		slug: 'eclipse-field-technique',
		name: 'Eclipse Field Technique',
		rank: 'III',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '3',
		activation: 'Action',
		range: '60 feet',
		duration: 'Concentration, up to 1 minute',
		requirements: 'Living Shadow Heritage',
		concentration: true,
		heritage: 'Living Shadow',
		description: [
			{ kind: 'paragraph', text: 'Choose a point you can see within range. Supernatural darkness fills a 20-foot-radius sphere centered on that point.' },
			{ kind: 'paragraph', text: 'Nonmagical light cannot illuminate the area.' },
			{ kind: 'paragraph', text: 'You can see normally through the darkness. When you activate the technique, choose a number of creatures up to your Wisdom modifier. Those creatures can also see normally through the darkness.' },
			{ kind: 'paragraph', text: 'A creature completely inside the area has total cover from a creature that cannot see through the darkness.' },
			{ kind: 'paragraph', text: 'The darkness spreads around corners but does not pass through solid barriers.' },
			{ kind: 'paragraph', text: 'A magical light effect created by a spell or technique of Rank III or higher suppresses the overlapping portion of the Eclipse Field.' }
		],
		searchKeywords: ['supernatural darkness', 'total cover', 'concentration', '20-foot radius', 'battlefield control', 'magical light', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'living-shadow-form',
		slug: 'living-shadow-form',
		name: 'Living Shadow Form',
		rank: 'IV',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '4',
		activation: 'Bonus Action',
		range: 'Self',
		duration: 'Concentration, up to 1 minute',
		requirements: 'Living Shadow Heritage',
		concentration: true,
		heritage: 'Living Shadow',
		damageType: 'necrotic',
		description: [
			{ kind: 'paragraph', text: 'Your body dissolves into a humanoid mass of living darkness.' },
			{ kind: 'paragraph', text: 'For the duration, you gain the following benefits:' },
			{ kind: 'list', items: ['Your walking speed increases by 10 feet.', 'You have resistance to bludgeoning, piercing and slashing damage.', 'You can move through the spaces of other creatures. Those spaces count as difficult terrain.', 'You can move through an opening as narrow as 1 inch without squeezing.', 'Opportunity attacks against you are made with disadvantage.', 'Once on each of your turns when you deal damage with an attack or Shinobi technique, you deal an additional 2d8 necrotic damage to one damaged creature.'] },
			{ kind: 'paragraph', text: 'You cannot end your turn inside another creature’s space.' },
			{ kind: 'paragraph', text: 'The technique ends early if you become Unconscious.' }
		],
		searchKeywords: ['transformation', 'resistance', 'bludgeoning', 'piercing', 'slashing', 'movement', 'opportunity attacks', 'necrotic', 'Living Shadow', 'Shinobi']
	},
	{
		id: 'dominion-of-living-night',
		slug: 'dominion-of-living-night',
		name: 'Dominion of Living Night',
		rank: 'V',
		category: 'heritage',
		source: 'shinobi',
		chakraCost: '5',
		activation: 'Action',
		range: 'Self, 30-foot radius',
		duration: 'Concentration, up to 1 minute',
		requirements: 'Living Shadow Heritage',
		concentration: true,
		restricted: true,
		restriction: 'Once per long rest',
		heritage: 'Living Shadow',
		damageType: 'necrotic',
		description: [
			{ kind: 'paragraph', text: 'Your shadow spreads across the battlefield and transforms the area around you into a domain of living darkness.' },
			{ kind: 'paragraph', text: 'A 30-foot-radius sphere centered on you becomes filled with supernatural darkness. The sphere moves with you.' },
			{ kind: 'paragraph', text: 'You and creatures you choose when you activate the technique can see normally through the darkness.' },
			{ kind: 'paragraph', text: 'For hostile creatures, the area has the following effects:' },
			{ kind: 'list', items: ['The area is difficult terrain.', 'A hostile creature cannot benefit from being Invisible while inside the area.', 'A hostile creature that begins its turn in the area must make a Wisdom saving throw. On a failed save, it is Blinded until the start of its next turn.'] },
			{ kind: 'paragraph', text: 'In addition, once on each of your turns, you can use a bonus action to command the living shadows to attack one creature you can see inside the area.' },
			{ kind: 'paragraph', text: 'The target must make a Strength saving throw.' },
			{ kind: 'paragraph', text: 'On a failed save:' },
			{ kind: 'list', items: ['It takes 4d8 necrotic damage.', 'It is Restrained until the start of your next turn.'] },
			{ kind: 'paragraph', text: 'On a successful save, it takes half as much damage and is not Restrained.' },
			{ kind: 'paragraph', text: 'Once you activate this technique, you cannot activate it again until you finish a long rest.' }
		],
		searchKeywords: ['restricted', 'once per long rest', 'supernatural darkness', 'difficult terrain', 'Invisible', 'Blinded', 'Restrained', 'necrotic', 'domain', 'Living Shadow', 'Shinobi']
	}
];
