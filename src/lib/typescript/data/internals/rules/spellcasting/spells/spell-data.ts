/*
	Location: src/lib/typescript/data/internals/rules/spellcasting/spells/spell-data.ts
	Use: Generated Wikidot spell metadata used by spell pages and filters.
*/

export type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SpellComponentData = {
	readonly verbal: boolean;
	readonly somatic: boolean;
	readonly material: boolean;
	readonly materialText?: string;
	readonly raw: string;
};

export type SpellTableData = {
	readonly caption?: string;
	readonly headers: readonly string[];
	readonly rows: readonly (readonly string[])[];
};

export type SpellData = {
	readonly index: string;
	readonly slug: string;
	readonly name: string;
	readonly level: SpellLevel;
	readonly levelLabel: string;
	readonly levelSlug: string;
	readonly school: string;
	readonly castingTime: string;
	readonly range: string;
	readonly duration: string;
	readonly concentration: boolean;
	readonly ritual: boolean;
	readonly components: SpellComponentData;
	readonly classes: readonly string[];
	readonly description: readonly string[];
	readonly higherLevel: readonly string[];
	readonly tables: readonly SpellTableData[];
	readonly sourceBook?: string;
	readonly sourceUrl: string;
};

const generated = {
	"spells": [
		{
			"href": "/spell:acid-splash",
			"index": "acid-splash",
			"slug": "acid-splash",
			"name": "Acid Splash",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:acid-splash",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blade-ward",
			"index": "blade-ward",
			"slug": "blade-ward",
			"name": "Blade Ward",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blade-ward",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:booming-blade",
			"index": "booming-blade",
			"slug": "booming-blade",
			"name": "Booming Blade",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (5-foot radius)",
			"duration": "1 round",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a melee weapon worth at least 1 sp)",
				"materialText": "a melee weapon worth at least 1 sp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You brandish the weapon used in the spell\u2019s casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack\u2019s normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends."
			],
			"higherLevel": [
				"At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:booming-blade",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:chill-touch",
			"index": "chill-touch",
			"slug": "chill-touch",
			"name": "Chill Touch",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can\u2019t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:chill-touch",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:control-flames",
			"index": "control-flames",
			"slug": "control-flames",
			"name": "Control Flames",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Instantaneous or 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:",
				"If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:control-flames",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:create-bonfire",
			"index": "create-bonfire",
			"slug": "create-bonfire",
			"name": "Create Bonfire",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire\u2019s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire\u2019s space for the first time on a turn or ends its turn there."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-bonfire",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:dancing-lights",
			"index": "dancing-lights",
			"slug": "dancing-lights",
			"name": "Dancing Lights",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
				"materialText": "a bit of phosphorus or wychwood, or a glowworm"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
				"As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell\u2019s range."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dancing-lights",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:druidcraft",
			"index": "druidcraft",
			"slug": "druidcraft",
			"name": "Druidcraft",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 Feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"Whispering to the spirits of nature, you create one of the following effects within range:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:druidcraft",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:eldritch-blast",
			"index": "eldritch-blast",
			"slug": "eldritch-blast",
			"name": "Eldritch Blast",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 Feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."
			],
			"higherLevel": [
				"The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:eldritch-blast",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:encode-thoughts",
			"index": "encode-thoughts",
			"slug": "encode-thoughts",
			"name": "Encode Thoughts",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "8 hours",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [],
			"description": [
				"You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary.",
				"If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as detect thoughts or modify memory ), you can transform the thoughts or memories you read, rather than your own, into a thought strand.",
				"Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting detect thoughts on the strand has the same effect.)"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:encode-thoughts",
			"sourceBook": "Guildmaster's Guide to Ravnica",
			"tables": []
		},
		{
			"href": "/spell:fire-bolt",
			"index": "fire-bolt",
			"slug": "fire-bolt",
			"name": "Fire Bolt",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn\u2019t being worn or carried."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fire-bolt",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:friends",
			"index": "friends",
			"slug": "friends",
			"name": "Friends",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a small amount of makeup applied to the face as this spell is cast)",
				"materialText": "a small amount of makeup applied to the face as this spell is cast"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:friends",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:frostbite",
			"index": "frostbite",
			"slug": "frostbite",
			"name": "Frostbite",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:frostbite",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:green-flame-blade",
			"index": "green-flame-blade",
			"slug": "green-flame-blade",
			"name": "Green-Flame Blade",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (5-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a melee weapon worth at least 1 sp)",
				"materialText": "a melee weapon worth at least 1 sp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You brandish the weapon used in the spell\u2019s casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack\u2019s normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier."
			],
			"higherLevel": [
				"At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:green-flame-blade",
			"sourceBook": "Tasha's Cauldron of Everything/Sword Coast Adventurer's Guide",
			"tables": []
		},
		{
			"href": "/spell:guidance",
			"index": "guidance",
			"slug": "guidance",
			"name": "Guidance",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid"
			],
			"description": [
				"You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:guidance",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:gust",
			"index": "gust",
			"slug": "gust",
			"name": "Gust",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You seize the air and compel it to create one of the following effects at a point you can see within range:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gust",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:hand-of-radiance",
			"index": "hand-of-radiance",
			"slug": "hand-of-radiance",
			"name": "Hand of Radiance (UA)",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "5 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You raise your hand, and burning radiance erupts from it. Each creature of your choice that you can see within 5 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage.",
				"At Higher Levels: The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
				"Spell Lists: Cleric"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hand-of-radiance",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:infestation",
			"index": "infestation",
			"slug": "infestation",
			"name": "Infestation",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a living flea)",
				"materialText": "a living flea"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn\u2019t provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:infestation",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:light",
			"index": "light",
			"slug": "light",
			"name": "Light",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a firefly or phosphorescent moss)",
				"materialText": "a firefly or phosphorescent moss"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.",
				"If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:light",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:lightning-lure",
			"index": "lightning-lure",
			"slug": "lightning-lure",
			"name": "Lightning Lure",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (15-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you."
			],
			"higherLevel": [
				"This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:lightning-lure",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:mage-hand",
			"index": "mage-hand",
			"slug": "mage-hand",
			"name": "Mage Hand",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
				"You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.",
				"The hand can\u2019t attack, activate magical items, or carry more than 10 pounds."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mage-hand",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:magic-stone",
			"index": "magic-stone",
			"slug": "magic-stone",
			"name": "Magic Stone",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Touch",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Warlock"
			],
			"description": [
				"You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker\u2019s, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.",
				"If you cast this spell again, the spell ends early on any pebbles still affected by it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magic-stone",
			"sourceBook": "Xanathar's Guide to Everything/Elemental Evil Player's Companion",
			"tables": []
		},
		{
			"href": "/spell:mending",
			"index": "mending",
			"slug": "mending",
			"name": "Mending",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (two lodestones)",
				"materialText": "two lodestones"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.",
				"This spell can physically repair a magic item or construct, but the spell can\u2019t restore magic to such an object."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mending",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:message",
			"index": "message",
			"slug": "message",
			"name": "Message",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a short piece of copper wire)",
				"materialText": "a short piece of copper wire"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
				"You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn\u2019t have to follow a straight line and can travel freely around corners or through openings."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:message",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mind-sliver",
			"index": "mind-sliver",
			"slug": "mind-sliver",
			"name": "Mind Sliver",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mind-sliver",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:minor-illusion",
			"index": "minor-illusion",
			"slug": "minor-illusion",
			"name": "Minor Illusion",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a bit of fleece)",
				"materialText": "a bit of fleece"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
				"If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else\u2019s voice, a lion\u2019s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.",
				"If you create an image of an object\u2014such as a chair, muddy footprints, or a small chest\u2014it must be no larger than a 5-foot cube. The image can\u2019t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.",
				"If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:minor-illusion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mold-earth",
			"index": "mold-earth",
			"slug": "mold-earth",
			"name": "Mold Earth",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous or 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:",
				"If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mold-earth",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:on-off",
			"index": "on-off",
			"slug": "on-off",
			"name": "On/Off (UA)",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This cantrip allows you to activate or deactivate any electronic device within range, as long as the device has a clearly defined on or off function that can be easily accessed from the outside of the device. Any device that requires a software-based shutdown sequence to activate or deactivate cannot be affected by On/Off."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:on-off",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:poison-spray",
			"index": "poison-spray",
			"slug": "poison-spray",
			"name": "Poison Spray",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:poison-spray",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:prestidigitation",
			"index": "prestidigitation",
			"slug": "prestidigitation",
			"name": "Prestidigitation",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "Up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:",
				"If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:prestidigitation",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:primal-savagery",
			"index": "primal-savagery",
			"slug": "primal-savagery",
			"name": "Primal Savagery",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:primal-savagery",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:produce-flame",
			"index": "produce-flame",
			"slug": "produce-flame",
			"name": "Produce Flame",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.",
				"You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:produce-flame",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:ray-of-frost",
			"index": "ray-of-frost",
			"slug": "ray-of-frost",
			"name": "Ray of Frost",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ray-of-frost",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:resistance",
			"index": "resistance",
			"slug": "resistance",
			"name": "Resistance",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a miniature cloak)",
				"materialText": "a miniature cloak"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid"
			],
			"description": [
				"You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:resistance",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sacred-flame",
			"index": "sacred-flame",
			"slug": "sacred-flame",
			"name": "Sacred Flame",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sacred-flame",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sapping-sting",
			"index": "sapping-sting",
			"slug": "sapping-sting",
			"name": "Sapping Sting",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone."
			],
			"higherLevel": [
				"This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sapping-sting",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:shape-water",
			"index": "shape-water",
			"slug": "shape-water",
			"name": "Shape Water",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous or 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:",
				"If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shape-water",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:shillelagh",
			"index": "shillelagh",
			"slug": "shillelagh",
			"name": "Shillelagh",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Touch",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
				"materialText": "mistletoe, a shamrock leaf, and a club or quarterstaff"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"The wood of a club or quarterstaff you are holding is imbued with nature\u2019s power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon\u2019s damage die becomes a d8. The weapon also becomes magical, if it isn\u2019t already. The spell ends if you cast it again or if you let go of the weapon."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shillelagh",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:shocking-grasp",
			"index": "shocking-grasp",
			"slug": "shocking-grasp",
			"name": "Shocking Grasp",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can\u2019t take reactions until the start of its next turn."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shocking-grasp",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:spare-the-dying",
			"index": "spare-the-dying",
			"slug": "spare-the-dying",
			"name": "Spare the Dying",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric"
			],
			"description": [
				"You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spare-the-dying",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sword-burst",
			"index": "sword-burst",
			"slug": "sword-burst",
			"name": "Sword Burst",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self (5-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage."
			],
			"higherLevel": [
				"This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sword-burst",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:thaumaturgy",
			"index": "thaumaturgy",
			"slug": "thaumaturgy",
			"name": "Thaumaturgy",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:",
				"If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thaumaturgy",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:thorn-whip",
			"index": "thorn-whip",
			"slug": "thorn-whip",
			"name": "Thorn Whip",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (the stem of a plant with thorns)",
				"materialText": "the stem of a plant with thorns"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid"
			],
			"description": [
				"You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thorn-whip",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:thunderclap",
			"index": "thunderclap",
			"slug": "thunderclap",
			"name": "Thunderclap",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (5-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thunderclap",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:toll-the-dead",
			"index": "toll-the-dead",
			"slug": "toll-the-dead",
			"name": "Toll the Dead",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:toll-the-dead",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:true-strike",
			"index": "true-strike",
			"slug": "true-strike",
			"name": "True Strike",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration up to 1 round",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target\u2019s defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn\u2019t ended."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:true-strike",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:vicious-mockery",
			"index": "vicious-mockery",
			"slug": "vicious-mockery",
			"name": "Vicious Mockery",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard"
			],
			"description": [
				"You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn."
			],
			"higherLevel": [
				"This spell\u2019s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:vicious-mockery",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:virtue",
			"index": "virtue",
			"slug": "virtue",
			"name": "Virtue (UA)",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:virtue",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:word-of-radiance",
			"index": "word-of-radiance",
			"slug": "word-of-radiance",
			"name": "Word of Radiance",
			"level": 0,
			"levelLabel": "Cantrip",
			"levelSlug": "cantrips",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "5 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a holy symbol)",
				"materialText": "a holy symbol"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage."
			],
			"higherLevel": [
				"The spell\u2019s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:word-of-radiance",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:absorb-elements",
			"index": "absorb-elements",
			"slug": "absorb-elements",
			"name": "Absorb Elements",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Reaction",
			"range": "Self",
			"duration": "1 round",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:absorb-elements",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:acid-stream",
			"index": "acid-stream",
			"slug": "acid-stream",
			"name": "Acid Stream (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot line)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of rotten food)",
				"materialText": "a bit of rotten food"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell\u2019s duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 3d4 acid damage at the start of each of its turns."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d4 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:acid-stream",
			"sourceBook": "Unearthed Arcana 70 - Spells and Magic Tattoos",
			"tables": []
		},
		{
			"href": "/spell:alarm",
			"index": "alarm",
			"slug": "alarm",
			"name": "Alarm",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Minute",
			"range": "30 feet",
			"duration": "8 Hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny bell and a piece of fine silver wire)",
				"materialText": "a tiny bell and a piece of fine silver wire"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Artificer",
				"Ranger",
				"Wizard"
			],
			"description": [
				"You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won\u2019t set off the alarm. You also choose whether the alarm is mental or audible.",
				"A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:alarm",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:animal-friendship",
			"index": "animal-friendship",
			"slug": "animal-friendship",
			"name": "Animal Friendship",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a morsel of food)",
				"materialText": "a morsel of food"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Ranger"
			],
			"description": [
				"This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast\u2019s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell\u2019s duration. If you or one of your companions harms the target, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:animal-friendship",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:arcane-weapon",
			"index": "arcane-weapon",
			"slug": "arcane-weapon",
			"name": "Arcane Weapon (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer"
			],
			"description": [
				"You channel arcane energy into one simple or martial weapon you\u2019re holding, and choose one damage type: acid, cold, fire, lightning, poison, or thunder. Until the spell ends, you deal an extra 1d6 damage of the chosen type to any target you hit with the weapon. If the weapon isn\u2019t magical, it becomes a magic weapon for the spell\u2019s duration.",
				"As a bonus action, you can change the damage type, choosing from the options above."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can maintain your concentration on the spell for up to 8 hours."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:arcane-weapon",
			"sourceBook": "Unearthed Arcana 60 - The Artificer Returns",
			"tables": []
		},
		{
			"href": "/spell:armor-of-agathys",
			"index": "armor-of-agathys",
			"slug": "armor-of-agathys",
			"name": "Armor of Agathys",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a cup of water)",
				"materialText": "a cup of water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:armor-of-agathys",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:arms-of-hadar",
			"index": "arms-of-hadar",
			"slug": "arms-of-hadar",
			"name": "Arms of Hadar",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self (10-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can\u2019t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:arms-of-hadar",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:bane",
			"index": "bane",
			"slug": "bane",
			"name": "Bane",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of blood)",
				"materialText": "a drop of blood"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric"
			],
			"description": [
				"Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:bane",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:beast-bond",
			"index": "beast-bond",
			"slug": "beast-bond",
			"name": "Beast Bond",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fur wrapped in cloth)",
				"materialText": "a bit of fur wrapped in cloth"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast\u2019s Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:beast-bond",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:bless",
			"index": "bless",
			"slug": "bless",
			"name": "Bless",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sprinkling of holy water)",
				"materialText": "a sprinkling of holy water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:bless",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:burning-hands",
			"index": "burning-hands",
			"slug": "burning-hands",
			"name": "Burning Hands",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (15-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.",
				"The fire ignites any flammable objects in the area that aren\u2019t being worn or carried."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:burning-hands",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:catapult",
			"index": "catapult",
			"slug": "catapult",
			"name": "Catapult",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose one object weighing 1 to 5 pounds within range that isn\u2019t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:catapult",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:cause-fear",
			"index": "cause-fear",
			"slug": "cause-fear",
			"name": "Cause Fear",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:cause-fear",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:ceremony",
			"index": "ceremony",
			"slug": "ceremony",
			"name": "Ceremony",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (25 gp worth of powdered silver, which the spell consumes)",
				"materialText": "25 gp worth of powdered silver, which the spell consumes"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"You perform one of several religious ceremonies. When you cast the spell, choose one of the following ceremonies, the target of which must be within 10 feet of you throughout the casting.",
				"Atonement. You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment.",
				"Bless Water. You touch one vial of water and cause it to become holy water.",
				"Coming of Age. You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once.",
				"Dedication. You touch one humanoid who wishes to be dedicated to your god\u2019s service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once.",
				"Funeral Rite. You touch one corpse, and for the next 7 days, the target can\u2019t become undead by any means short of a Wish spell.",
				"Wedding. You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ceremony",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:chaos-bolt",
			"index": "chaos-bolt",
			"slug": "chaos-bolt",
			"name": "Chaos Bolt",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer"
			],
			"description": [
				"You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below.",
				"If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.",
				"A creature can be targeted only once by each casting of this spell."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:chaos-bolt",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": [
				{
					"headers": [
						"d8",
						"Damage Type"
					],
					"rows": [
						[
							"1",
							"Acid"
						],
						[
							"2",
							"Cold"
						],
						[
							"3",
							"Fire"
						],
						[
							"4",
							"Force"
						],
						[
							"5",
							"Lightning"
						],
						[
							"6",
							"Poison"
						],
						[
							"7",
							"Psychic"
						],
						[
							"8",
							"Thunder"
						]
					]
				}
			]
		},
		{
			"href": "/spell:charm-person",
			"index": "charm-person",
			"slug": "charm-person",
			"name": "Charm Person",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:charm-person",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:chromatic-orb",
			"index": "chromatic-orb",
			"slug": "chromatic-orb",
			"name": "Chromatic Orb",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a diamond worth at least 50 gp)",
				"materialText": "a diamond worth at least 50 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:chromatic-orb",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:color-spray",
			"index": "color-spray",
			"slug": "color-spray",
			"name": "Color Spray",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self (15-foot cone)",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)",
				"materialText": "a pinch of powder or sand that is colored red, yellow, and blue"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A dazzling array of flashing, colored light springs from your hand. Roll 6d10, the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can\u2019t see).",
				"Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the end of your next turn. Subtract each creature\u2019s hit points from the total before moving on to the creature with the next lowest hit points. A creature\u2019s hit points must be equal to or less than the remaining total for the creature to be affected."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:color-spray",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:command",
			"index": "command",
			"slug": "command",
			"name": "Command",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Paladin"
			],
			"description": [
				"You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn\u2019t understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can\u2019t follow your command, the spell ends.",
				"Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.",
				"Drop. The target drops whatever it is holding and then ends its turn.",
				"Flee. The target spends its turn moving away from you by the fastest available means.",
				"Grovel. The target falls prone and then ends its turn.",
				"Halt. The target doesn\u2019t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:command",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:compelled-duel",
			"index": "compelled-duel",
			"slug": "compelled-duel",
			"name": "Compelled Duel",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Bonus Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn\u2019t restrict the target\u2019s movement for that turn.",
				"The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:compelled-duel",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:comprehend-languages",
			"index": "comprehend-languages",
			"slug": "comprehend-languages",
			"name": "Comprehend Languages",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of soot and salt)",
				"materialText": "a pinch of soot and salt"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.",
				"This spell doesn\u2019t decode secret messages in a text or glyph, such as an arcane sigil, that isn\u2019t part of a written language."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:comprehend-languages",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:create-or-destroy-water",
			"index": "create-or-destroy-water",
			"slug": "create-or-destroy-water",
			"name": "Create or Destroy Water",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of water if creating water or a few grains of sand if destroying it)",
				"materialText": "a drop of water if creating water or a few grains of sand if destroying it"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid"
			],
			"description": [
				"You either create or destroy water.",
				"Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area.",
				"Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-or-destroy-water",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:cure-wounds",
			"index": "cure-wounds",
			"slug": "cure-wounds",
			"name": "Cure Wounds",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger"
			],
			"description": [
				"A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:cure-wounds",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:detect-evil-and-good",
			"index": "detect-evil-and-good",
			"slug": "detect-evil-and-good",
			"name": "Detect Evil and Good",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.",
				"The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:detect-evil-and-good",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:detect-magic",
			"index": "detect-magic",
			"slug": "detect-magic",
			"name": "Detect Magic",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
				"The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:detect-magic",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:detect-poison-and-disease",
			"index": "detect-poison-and-disease",
			"slug": "detect-poison-and-disease",
			"name": "Detect Poison and Disease",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a yew leaf)",
				"materialText": "a yew leaf"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger"
			],
			"description": [
				"For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.",
				"The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:detect-poison-and-disease",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:disguise-self",
			"index": "disguise-self",
			"slug": "disguise-self",
			"name": "Disguise Self",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You make yourself \u2013 including your clothing, armor, weapons, and other belongings on your person \u2013 look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can\u2019t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.",
				"The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:disguise-self",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dissonant-whispers",
			"index": "dissonant-whispers",
			"slug": "dissonant-whispers",
			"name": "Dissonant Whispers",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard"
			],
			"description": [
				"You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn\u2019t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn\u2019t have to move away. A deafened creature automatically succeeds on the save."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dissonant-whispers",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:distort-value",
			"index": "distort-value",
			"slug": "distort-value",
			"name": "Distort Value",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Illusion",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You cast this spell on an object no more than 1 foot on a side, doubling the object's perceived value by adding illusionary flourish or reducing its perceived value by half with the help of illusionary dents and scratches. Anyone examining the object must roll an Investigation check against your spell DC."
			],
			"higherLevel": [
				"When you cast this spell using a higher spell slot, you increase the size of the object by 1 foot per spell slot over 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:distort-value",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:divine-favor",
			"index": "divine-favor",
			"slug": "divine-favor",
			"name": "Divine Favor",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:divine-favor",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:earth-tremor",
			"index": "earth-tremor",
			"slug": "earth-tremor",
			"name": "Earth Tremor",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (10-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:earth-tremor",
			"sourceBook": "Xanathar's Guide to Everything/Elemental Evil Player's Companion",
			"tables": []
		},
		{
			"href": "/spell:ensnaring-strike",
			"index": "ensnaring-strike",
			"slug": "ensnaring-strike",
			"name": "Ensnaring Strike",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.",
				"While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ensnaring-strike",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:entangle",
			"index": "entangle",
			"slug": "entangle",
			"name": "Entangle",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain.",
				"A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.",
				"When the spell ends, the conjured plants wilt away."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:entangle",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:expeditious-retreat",
			"index": "expeditious-retreat",
			"slug": "expeditious-retreat",
			"name": "Expeditious Retreat",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:expeditious-retreat",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:faerie-fire",
			"index": "faerie-fire",
			"slug": "faerie-fire",
			"name": "Faerie Fire",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Druid"
			],
			"description": [
				"Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice).",
				"Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.",
				"Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can\u2019t benefit from being invisible."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:faerie-fire",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:false-life",
			"index": "false-life",
			"slug": "false-life",
			"name": "False Life",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small amount of alcohol or distilled spirits)",
				"materialText": "a small amount of alcohol or distilled spirits"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:false-life",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:feather-fall",
			"index": "feather-fall",
			"slug": "feather-fall",
			"name": "Feather Fall",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Reaction",
			"range": "60 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a small feather or piece of down)",
				"materialText": "a small feather or piece of down"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose up to five falling creatures within range. A falling creature\u2019s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:feather-fall",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:find-familiar",
			"index": "find-familiar",
			"slug": "find-familiar",
			"name": "Find Familiar",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Hour",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
				"materialText": "10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Wizard"
			],
			"description": [
				"You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.",
				"Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can\u2019t attack, but it can take other actions as normal.",
				"When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss your familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. Whenever the familiar drops to 0 hit points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.",
				"While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar\u2019s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.",
				"You can\u2019t have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.",
				"Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:find-familiar",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:fog-cloud",
			"index": "fog-cloud",
			"slug": "fog-cloud",
			"name": "Fog Cloud",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fog-cloud",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:frost-fingers",
			"index": "frost-fingers",
			"slug": "frost-fingers",
			"name": "Frost Fingers",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (15-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw, taking 2d8 cold damage on a failed save, or half as much damage on a successful one.",
				"The cold freezes nonmagical liquids in the area that aren't being worn or carried."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:frost-fingers",
			"sourceBook": "Icewind Dale - Rime of the Frostmaiden",
			"tables": []
		},
		{
			"href": "/spell:gift-of-alacrity",
			"index": "gift-of-alacrity",
			"slug": "gift-of-alacrity",
			"name": "Gift of Alacrity",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gift-of-alacrity",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:goodberry",
			"index": "goodberry",
			"slug": "goodberry",
			"name": "Goodberry",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sprig of mistletoe)",
				"materialText": "a sprig of mistletoe"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.",
				"The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:goodberry",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:grease",
			"index": "grease",
			"slug": "grease",
			"name": "Grease",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of pork rind or butter)",
				"materialText": "a bit of pork rind or butter"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.",
				"When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:grease",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:guiding-bolt",
			"index": "guiding-bolt",
			"slug": "guiding-bolt",
			"name": "Guiding Bolt",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:guiding-bolt",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:guiding-hand-ua",
			"index": "guiding-hand-ua",
			"slug": "guiding-hand-ua",
			"name": "Guiding Hand (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "5 feet",
			"duration": "Concentration, up to 8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence.",
				"When the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you.",
				"If you don\u2019t move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:guiding-hand-ua",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:hail-of-thorns",
			"index": "hail-of-thorns",
			"slug": "hail-of-thorns",
			"name": "Hail of Thorns",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hail-of-thorns",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:healing-elixir-ua",
			"index": "healing-elixir-ua",
			"slug": "healing-elixir-ua",
			"name": "Healing Elixir (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (alchemist\u2019s supplies)",
				"materialText": "alchemist\u2019s supplies"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it\u2019s consumed, at which point the vial vanishes.",
				"As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:healing-elixir-ua",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:healing-word",
			"index": "healing-word",
			"slug": "healing-word",
			"name": "Healing Word",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid"
			],
			"description": [
				"A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:healing-word",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hellish-rebuke",
			"index": "hellish-rebuke",
			"slug": "hellish-rebuke",
			"name": "Hellish Rebuke",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Reaction",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hellish-rebuke",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:heroism",
			"index": "heroism",
			"slug": "heroism",
			"name": "Heroism",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Paladin"
			],
			"description": [
				"A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:heroism",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hex",
			"index": "hex",
			"slug": "hex",
			"name": "Hex",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Bonus Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (the petrified eye of a newt)",
				"materialText": "the petrified eye of a newt"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.",
				"If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
				"A Remove Curse cast on the target ends this spell early."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hex",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hunters-mark",
			"index": "hunters-mark",
			"slug": "hunters-mark",
			"name": "Hunter's Mark",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Bonus Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it.",
				"If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hunters-mark",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:ice-knife",
			"index": "ice-knife",
			"slug": "ice-knife",
			"name": "Ice Knife",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a drop of water or piece of ice)",
				"materialText": "a drop of water or piece of ice"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ice-knife",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:id-insinuation",
			"index": "id-insinuation",
			"slug": "id-insinuation",
			"name": "Id Insinuation (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You unleash a torrent of conflicting desires in the mind of one creature you can see within range, impairing its ability to make decisions. The target must succeed on a Wisdom saving throw or be incapacitated. At the end of each of its turns, it takes 1d12 psychic damage, and it can then make another Wisdom saving throw. On a success, the spell ends on the target."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:id-insinuation",
			"sourceBook": "Unearthed Arcana 66 - Fighter, Rogue, and Wizard",
			"tables": []
		},
		{
			"href": "/spell:identify",
			"index": "identify",
			"slug": "identify",
			"name": "Identify",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pearl worth at least 100 gp and an owl feather)",
				"materialText": "a pearl worth at least 100 gp and an owl feather"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Artificer",
				"Bard",
				"Wizard"
			],
			"description": [
				"You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.",
				"If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:identify",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:illusory-script",
			"index": "illusory-script",
			"slug": "illusory-script",
			"name": "Illusory Script",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Illusion",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "10 days",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a lead-based ink worth at least 10 gp, which the spell consumes)",
				"materialText": "a lead-based ink worth at least 10 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.",
				"To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.",
				"Should the spell be dispelled, the original script and the illusion both disappear. A creature with truesight can read the hidden message."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:illusory-script",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:infallible-relay",
			"index": "infallible-relay",
			"slug": "infallible-relay",
			"name": "Infallible Relay (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a mobile phone)",
				"materialText": "a mobile phone"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"With this spell, you can target any creature with whom you have spoken previously, as long as the two of you are on the same plane of existence. When you cast the spell, the nearest functioning telephone or similar communications device within 100 feet of the target begins to ring. If there is no suitable device close enough to the target, the spell fails.",
				"The target must make a successful Charisma saving throw or be compelled to answer your call. Once the connection is established, the call is crystal clear and cannot be dropped until the conversation has ended or the spell\u2019s duration ends. You can end the conversation at any time, but a target must succeed on a Charisma saving throw to end the conversation."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:infallible-relay",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:inflict-wounds",
			"index": "inflict-wounds",
			"slug": "inflict-wounds",
			"name": "Inflict Wounds",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:inflict-wounds",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:jims-magic-missile",
			"index": "jims-magic-missile",
			"slug": "jims-magic-missile",
			"name": "Jim's Magic Missile",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (1 gold coin, which is consumed as tax for using the spell)",
				"materialText": "1 gold coin, which is consumed as tax for using the spell"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You create three twisting, whistling, hypoallergenic, gluten-free darts of magical force. Each dart can target a creature of your choice that you can see within range. Make a ranged spell attack for each missile. On a hit, the missile does 2d4 force damage.",
				"If the attack roll scores a critical, the missile does 5d4 force damage instead of the 4d4 force that you would normally get on a critical. If any of the attack roll is a natural one, all missiles turn around and hit the caster for 1 force damage per missile."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st. This also increases the tax by 1 gp per spell slot over 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:jims-magic-missile",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:jump",
			"index": "jump",
			"slug": "jump",
			"name": "Jump",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a grasshopper\u2019s hind leg)",
				"materialText": "a grasshopper\u2019s hind leg"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch a creature. The creature\u2019s jump distance is tripled until the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:jump",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:longstrider",
			"index": "longstrider",
			"slug": "longstrider",
			"name": "Longstrider",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of dirt)",
				"materialText": "a pinch of dirt"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Druid",
				"Ranger",
				"Wizard"
			],
			"description": [
				"You touch a creature. The target\u2019s speed increases by 10 feet until the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:longstrider",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mage-armor",
			"index": "mage-armor",
			"slug": "mage-armor",
			"name": "Mage Armor",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of cured leather)",
				"materialText": "a piece of cured leather"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch a willing creature who isn\u2019t wearing armor, and a protective magical force surrounds it until the spell ends. The target\u2019s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mage-armor",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:magic-missile",
			"index": "magic-missile",
			"slug": "magic-missile",
			"name": "Magic Missile",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magic-missile",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:magnify-gravity",
			"index": "magnify-gravity",
			"slug": "magnify-gravity",
			"name": "Magnify Gravity",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed.",
				"Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magnify-gravity",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:protection-from-evil-and-good",
			"index": "protection-from-evil-and-good",
			"slug": "protection-from-evil-and-good",
			"name": "Protection from Evil and Good",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (holy water or powdered silver and iron, which the spell consumes)",
				"materialText": "holy water or powdered silver and iron, which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Paladin",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.",
				"The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:protection-from-evil-and-good",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:puppet",
			"index": "puppet",
			"slug": "puppet",
			"name": "Puppet (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:puppet",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:purify-food-and-drink",
			"index": "purify-food-and-drink",
			"slug": "purify-food-and-drink",
			"name": "Purify Food and Drink",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Paladin"
			],
			"description": [
				"All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:purify-food-and-drink",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:ray-of-sickness",
			"index": "ray-of-sickness",
			"slug": "ray-of-sickness",
			"name": "Ray of Sickness",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ray-of-sickness",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:remote-access",
			"index": "remote-access",
			"slug": "remote-access",
			"name": "Remote Access (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You can use any electronic device within range as if it were in your hands. This is not a telekinesis effect. Rather, this spell allows you to simulate a device's mechanical functions electronically. You are able to access only functions that a person using the device manually would be able to access. You can use remote access with only one device at a time."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:remote-access",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:sanctuary",
			"index": "sanctuary",
			"slug": "sanctuary",
			"name": "Sanctuary",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Bonus Action",
			"range": "30 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small silver mirror)",
				"materialText": "a small silver mirror"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric"
			],
			"description": [
				"You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn\u2019t protect the warded creature from area effects, such as the explosion of a fireball.",
				"If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sanctuary",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:searing-smite",
			"index": "searing-smite",
			"slug": "searing-smite",
			"name": "Searing Smite",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin",
				"Ranger"
			],
			"description": [
				"The next time you hit a creature with a melee weapon attack during the spell\u2019s duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames.",
				"At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:searing-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sense-emotion",
			"index": "sense-emotion",
			"slug": "sense-emotion",
			"name": "Sense Emotion (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attune your senses to pick up the emotions of others for the duration. When you cast the spell, and as your action on each turn until the spell ends, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target\u2019s prevailing emotion, whether it\u2019s love, anger, pain, fear, calm, or something else. If the target isn\u2019t actually humanoid or it is immune to being charmed, you sense that it is calm."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sense-emotion",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:shield",
			"index": "shield",
			"slug": "shield",
			"name": "Shield",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Reaction",
			"range": "Self",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile ."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shield",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:shield-of-faith",
			"index": "shield-of-faith",
			"slug": "shield-of-faith",
			"name": "Shield of Faith",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small parchment with a bit of holy text written on it)",
				"materialText": "a small parchment with a bit of holy text written on it"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shield-of-faith",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:silent-image",
			"index": "silent-image",
			"slug": "silent-image",
			"name": "Silent Image",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fleece)",
				"materialText": "a bit of fleece"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn\u2019t accompanied by sound, smell, or other sensory effects.",
				"You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.",
				"Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:silent-image",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:silvery-barbs",
			"index": "silvery-barbs",
			"slug": "silvery-barbs",
			"name": "Silvery Barbs",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Reaction",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll.",
				"You can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one use of this spell at a time."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:silvery-barbs",
			"sourceBook": "Strixhaven: A Curriculum of Chaos",
			"tables": []
		},
		{
			"href": "/spell:sleep",
			"index": "sleep",
			"slug": "sleep",
			"name": "Sleep",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of fine sand, rose petals, or a cricket)",
				"materialText": "a pinch of fine sand, rose petals, or a cricket"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell sends creatures into a magical slumber. Roll 5d8, the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).",
				"Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature\u2019s hit points from the total before moving on to the creature with the next lowest hit points. A creature\u2019s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren\u2019t affected by this spell."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sleep",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:snare",
			"index": "snare",
			"slug": "snare",
			"name": "Snare",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Abjuration",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (25 feet of rope, which the spell consumes)",
				"materialText": "25 feet of rope, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Wizard"
			],
			"description": [
				"As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap.",
				"This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned.",
				"The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell\u2019s radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends.",
				"A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends.",
				"After the trap is triggered, the spell ends when no creature is restrained by it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:snare",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:speak-with-animals",
			"index": "speak-with-animals",
			"slug": "speak-with-animals",
			"name": "Speak with Animals",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Druid",
				"Ranger"
			],
			"description": [
				"You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM\u2019s discretion."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:speak-with-animals",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sudden-awakening",
			"index": "sudden-awakening",
			"slug": "sudden-awakening",
			"name": "Sudden Awakening (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Bonus Action",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sudden-awakening",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:tashas-caustic-brew",
			"index": "tashas-caustic-brew",
			"slug": "tashas-caustic-brew",
			"name": "Tasha's Caustic Brew",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot line)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of rotten food)",
				"materialText": "a bit of rotten food"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell\u2019s duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at the start of each of its turns."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tashas-caustic-brew",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:tashas-hideous-laughter",
			"index": "tashas-hideous-laughter",
			"slug": "tashas-hideous-laughter",
			"name": "Tasha's Hideous Laughter",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (tiny tarts and a feather that is waved in the air)",
				"materialText": "tiny tarts and a feather that is waved in the air"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn\u2019t affected.",
				"At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it\u2019s triggered by damage. On a success, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tashas-hideous-laughter",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:tensers-floating-disk",
			"index": "tensers-floating-disk",
			"slug": "tensers-floating-disk",
			"name": "Tenser's Floating Disk",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of mercury)",
				"materialText": "a drop of mercury"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Wizard"
			],
			"description": [
				"This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.",
				"The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes, and the like, but it can\u2019t cross an elevation change of 10 feet or more. For example, the disk can\u2019t move across a 10-foot-deep pit, nor could it leave such a pit if it were created at the bottom.",
				"If you move more than 100 feet from the disk (typically because it can\u2019t move around an obstacle to follow you), the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tensers-floating-disk",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:thunderous-smite",
			"index": "thunderous-smite",
			"slug": "thunderous-smite",
			"name": "Thunderous Smite",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"The first time you hit with a melee weapon attack during this spell\u2019s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thunderous-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:thunderwave",
			"index": "thunderwave",
			"slug": "thunderwave",
			"name": "Thunderwave",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (15-foot cube)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn\u2019t pushed.",
				"In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell\u2019s effect, and the spell emits a thunderous boom audible out to 300 feet."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thunderwave",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:unearthly-chorus",
			"index": "unearthly-chorus",
			"slug": "unearthly-chorus",
			"name": "Unearthly Chorus (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard"
			],
			"description": [
				"Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration.",
				"Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:unearthly-chorus",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:unseen-servant",
			"index": "unseen-servant",
			"slug": "unseen-servant",
			"name": "Unseen Servant",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of string and a bit of wood)",
				"materialText": "a piece of string and a bit of wood"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can\u2019t attack. If it drops to 0 hit points, the spell ends.",
				"Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.",
				"If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:unseen-servant",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wild-cunning",
			"index": "wild-cunning",
			"slug": "wild-cunning",
			"name": "Wild Cunning (UA)",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You call out to the spirits of nature to aid you. When you cast this spell, choose one of the following effects:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wild-cunning",
			"sourceBook": "Unearthed Arcana 36 - Starter Spells",
			"tables": []
		},
		{
			"href": "/spell:witch-bolt",
			"index": "witch-bolt",
			"slug": "witch-bolt",
			"name": "Witch Bolt",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a twig from a tree that has been struck by lightning)",
				"materialText": "a twig from a tree that has been struck by lightning"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell\u2019s range or if it has total cover from you."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:witch-bolt",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wrathful-smite",
			"index": "wrathful-smite",
			"slug": "wrathful-smite",
			"name": "Wrathful Smite",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"The next time you hit with a melee weapon attack during this spell\u2019s duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wrathful-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:zephyr-strike",
			"index": "zephyr-strike",
			"slug": "zephyr-strike",
			"name": "Zephyr Strike",
			"level": 1,
			"levelLabel": "1st Level",
			"levelSlug": "1st-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"You move like the wind. For the duration, your movement doesn\u2019t provoke opportunity attacks.",
				"Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:zephyr-strike",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:aganazzars-scorcher",
			"index": "aganazzars-scorcher",
			"slug": "aganazzars-scorcher",
			"name": "Aganazzar's Scorcher",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "30 Feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a red dragon\u2019s scale)",
				"materialText": "a red dragon\u2019s scale"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:aganazzars-scorcher",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:aid",
			"index": "aid",
			"slug": "aid",
			"name": "Aid",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "30 Feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny strip of white cloth)",
				"materialText": "a tiny strip of white cloth"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Paladin",
				"Ranger"
			],
			"description": [
				"Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target\u2019s hit point maximum and current hit points increase by 5 for the duration."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, a target\u2019s hit points increase by an additional 5 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:aid",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:air-bubble",
			"index": "air-bubble",
			"slug": "air-bubble",
			"name": "Air Bubble",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "24 hours",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system)."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:air-bubble",
			"sourceBook": "Spelljammer: Adventures in Space - Astral Adventurer's Guide",
			"tables": []
		},
		{
			"href": "/spell:alter-self",
			"index": "alter-self",
			"slug": "alter-self",
			"name": "Alter Self",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.",
				"Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills, and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.",
				"Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also don\u2019t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can\u2019t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.",
				"Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:alter-self",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:animal-messenger",
			"index": "animal-messenger",
			"slug": "animal-messenger",
			"name": "Animal Messenger",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 Feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a morsel of food)",
				"materialText": "a morsel of food"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Druid",
				"Ranger"
			],
			"description": [
				"By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \u201ca man or woman dressed in the uniform of the town guard\u201d or \u201ca red-haired dwarf wearing a pointed hat.\u201d You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.",
				"When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn\u2019t reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:animal-messenger",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:arcane-hacking",
			"index": "arcane-hacking",
			"slug": "arcane-hacking",
			"name": "Arcane Hacking (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (hacking tools)",
				"materialText": "hacking tools"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You gain advantage on all Intelligence checks using hacking tools to break software encryption or online security when using a foreign system.",
				"This spell also allows you to break 2nd level and lower protective spells such as Arcane Lock or Glyph of Warding by making an Intelligence check using hacking tools against the spell save DC of the spell\u2019s caster."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can attempt to counteract a spell set to secure the foreign system if the spell\u2019s level is equal to or less than the level of the spell slot you used."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:arcane-hacking",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:arcane-lock",
			"index": "arcane-lock",
			"slug": "arcane-lock",
			"name": "Arcane Lock",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
				"materialText": "gold dust worth at least 25 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration.",
				"You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting Knock on the object suppresses Arcane Lock for 10 minutes.",
				"While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:arcane-lock",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:augury",
			"index": "augury",
			"slug": "augury",
			"name": "Augury",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (specially marked sticks, bones, or similar tokens worth at least 25 gp)",
				"materialText": "specially marked sticks, bones, or similar tokens worth at least 25 gp"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:",
				"The spell doesn\u2019t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:augury",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:barkskin",
			"index": "barkskin",
			"slug": "barkskin",
			"name": "Barkskin",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a handful of oak bark)",
				"materialText": "a handful of oak bark"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You touch a willing creature. Until the spell ends, the target\u2019s skin has a rough, bark-like appearance, and the target\u2019s AC can\u2019t be less than 16, regardless of what kind of armor it is wearing."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:barkskin",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:beast-sense",
			"index": "beast-sense",
			"slug": "beast-sense",
			"name": "Beast Sense",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You touch a willing beast. For the duration of the spell, you can use your action to see through the beast\u2019s eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:beast-sense",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blindness-deafness",
			"index": "blindness-deafness",
			"slug": "blindness-deafness",
			"name": "Blindness/Deafness",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "30 Feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blindness-deafness",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blur",
			"index": "blur",
			"slug": "blur",
			"name": "Blur",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blur",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:borrowed-knowledge",
			"index": "borrowed-knowledge",
			"slug": "borrowed-knowledge",
			"name": "Borrowed Knowledge",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a book worth at least 25 gp)",
				"materialText": "a book worth at least 25 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You draw on knowledge from spirits of the past. Choose one skill in which you lack proficiency. For the spell's duration, you have proficiency in the chosen skill. The spell ends early if you cast it again."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:borrowed-knowledge",
			"sourceBook": "Strixhaven: A Curriculum of Chaos",
			"tables": []
		},
		{
			"href": "/spell:branding-smite",
			"index": "branding-smite",
			"slug": "branding-smite",
			"name": "Branding Smite",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it is invisible, and the target sheds dim light in a 5-foot radius and can\u2019t become invisible until the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:branding-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:calm-emotions",
			"index": "calm-emotions",
			"slug": "calm-emotions",
			"name": "Calm Emotions",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric"
			],
			"description": [
				"You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.",
				"Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:calm-emotions",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:cloud-of-daggers",
			"index": "cloud-of-daggers",
			"slug": "cloud-of-daggers",
			"name": "Cloud of Daggers",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sliver of glass)",
				"materialText": "a sliver of glass"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell\u2019s area for the first time on a turn or starts its turn there."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:cloud-of-daggers",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:continual-flame",
			"index": "continual-flame",
			"slug": "continual-flame",
			"name": "Continual Flame",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (ruby dust worth 50 gp, which the spell consumes)",
				"materialText": "ruby dust worth 50 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn\u2019t use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:continual-flame",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:cordon-of-arrows",
			"index": "cordon-of-arrows",
			"slug": "cordon-of-arrows",
			"name": "Cordon of Arrows",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "5 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (four or more arrows or bolts)",
				"materialText": "four or more arrows or bolts"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"You plant four pieces of nonmagical ammunition \u2013 arrows or crossbow bolts \u2013 in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.",
				"When you cast this spell, you can designate any creatures you choose, and the spell ignores them."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:cordon-of-arrows",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:crown-of-madness",
			"index": "crown-of-madness",
			"slug": "crown-of-madness",
			"name": "Crown of Madness",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.",
				"The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.",
				"On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:crown-of-madness",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:darkness",
			"index": "darkness",
			"slug": "darkness",
			"name": "Darkness",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (bat fur and a drop of pitch or piece of coal)",
				"materialText": "bat fur and a drop of pitch or piece of coal"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can\u2019t see through this darkness, and nonmagical light can\u2019t illuminate it.",
				"If the point you choose is on an object you are holding or one that isn\u2019t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.",
				"If any of this spell\u2019s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:darkness",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:darkvision",
			"index": "darkvision",
			"slug": "darkvision",
			"name": "Darkvision",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (either a pinch of dried carrot or an agate)",
				"materialText": "either a pinch of dried carrot or an agate"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:darkvision",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:detect-thoughts",
			"index": "detect-thoughts",
			"slug": "detect-thoughts",
			"name": "Detect Thoughts",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a copper piece)",
				"materialText": "a copper piece"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn\u2019t speak any language, the creature is unaffected.",
				"You initially learn the surface thoughts of the creature - what is most on its mind in that moment. As an action, you can either shift your attention to another creature\u2019s thoughts or attempt to probe deeper into the same creature\u2019s mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature\u2019s thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.",
				"Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.",
				"You can also use this spell to detect the presence of thinking creatures you can\u2019t see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can\u2019t detect a creature with an Intelligence of 3 or lower or one that doesn\u2019t speak any language.",
				"Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can\u2019t see it, but it must still be within range."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:detect-thoughts",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:digital-phantom",
			"index": "digital-phantom",
			"slug": "digital-phantom",
			"name": "Digital Phantom (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small piece of copper wire)",
				"materialText": "a small piece of copper wire"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell works to actively hide your presence within a computer system. For the spell\u2019s duration, you and any other users you choose on your local network gain a +10 bonus to Intelligence checks to avoid detection by administrators, knowbots, tracking software, and the like. Whenever you and your chosen users leave any computer system you are working in while this spell is in effect, all trace of your previous presence in that system is erased."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:digital-phantom",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:dragons-breath",
			"index": "dragons-breath",
			"slug": "dragons-breath",
			"name": "Dragon's Breath",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a hot pepper)",
				"materialText": "a hot pepper"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dragons-breath",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:dust-devil",
			"index": "dust-devil",
			"slug": "dust-devil",
			"name": "Dust Devil",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of dust)",
				"materialText": "a pinch of dust"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell\u2019s duration.",
				"Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away. On a successful save, the creature takes half as much damage and isn\u2019t pushed.",
				"As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dust-devil",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:earthbind",
			"index": "earthbind",
			"slug": "earthbind",
			"name": "Earthbind",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell\u2019s duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:earthbind",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:enhance-ability",
			"index": "enhance-ability",
			"slug": "enhance-ability",
			"name": "Enhance Ability",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (fur or a feather from a beast)",
				"materialText": "fur or a feather from a beast"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains the effect until the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:enhance-ability",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:enlarge-reduce",
			"index": "enlarge-reduce",
			"slug": "enlarge-reduce",
			"name": "Enlarge/Reduce",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of powdered iron)",
				"materialText": "a pinch of powdered iron"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.",
				"If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.",
				"Enlarge. The target\u2019s size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category \u2013 from Medium to Large, for example. If there isn\u2019t enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target\u2019s weapons also grow to match its new size. While these weapons are enlarged, the target\u2019s attack with them deal 1d4 extra damage.",
				"Reduce. The target\u2019s size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category \u2013 from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target\u2019s weapons also shrink to match its new size. While these weapons are reduced, the target\u2019s attacks with them deal 1d4 less damage (this can\u2019t reduce the damage below 1)."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:enlarge-reduce",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:enthrall",
			"index": "enthrall",
			"slug": "enthrall",
			"name": "Enthrall",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock"
			],
			"description": [
				"You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can\u2019t be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:enthrall",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:find-steed",
			"index": "find-steed",
			"slug": "find-steed",
			"name": "Find Steed",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "10 Minutes",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.",
				"Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.",
				"When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.",
				"While your steed is within 1 mile of you, you can communicate with each other telepathically. You can\u2019t have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:find-steed",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:find-traps",
			"index": "find-traps",
			"slug": "find-traps",
			"name": "Find Traps",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Ranger"
			],
			"description": [
				"You sense the presence of any trap within range that is within line of sight.",
				"A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.",
				"This spell merely reveals that a trap is present. You don\u2019t learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:find-traps",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:find-vehicle",
			"index": "find-vehicle",
			"slug": "find-vehicle",
			"name": "Find Vehicle (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "10 Minutes",
			"range": "30 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Paladin",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You summon a spirit that assumes the form of a nonmilitary land vehicle of your choice, appearing in an unoccupied space within range. The vehicle has the statistics of a normal vehicle of its sort, though it is celestial, fey, or fiendish (your choice in origin). The physical characteristics of the vehicle reflect its origin to some degree. For example, a fiendish SUV might be jet black in color, with tinted windows and a sinister-looking front grille.",
				"You have a supernatural bond with the conjured vehicle that allows you to drive beyond your normal ability. While driving the conjured vehicle, you are considered proficient with vehicles of its type, and you add double your proficiency bonus to ability checks related to driving the vehicle. While driving the vehicle, you can make any spell you cast that targets only you also target the vehicle.",
				"If the vehicle drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss the vehicle at any time as an action, causing it to disappear.",
				"You can't have more than one vehicle bonded by this spell at a time. As an action, you can release the vehicle from its bond at any time, causing it to disappear."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can conjure a nonmilitary water vehicle large enough to carry six Medium creatures. When you cast this spell using a spell slot of 5th level or higher, you can conjure a nonmilitary air vehicle large enough to carry ten Medium creatures. When you cast this spell using a spell slot of 7th level or higher, you can conjure any type of vehicle, subject to the DM's approval."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:find-vehicle",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:flame-blade",
			"index": "flame-blade",
			"slug": "flame-blade",
			"name": "Flame Blade",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a leaf of sumac)",
				"materialText": "a leaf of sumac"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer"
			],
			"description": [
				"You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.",
				"You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage. The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flame-blade",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:flaming-sphere",
			"index": "flaming-sphere",
			"slug": "flaming-sphere",
			"name": "Flaming Sphere",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of tallow, a pinch of brimstone, and a dusting of powdered iron)",
				"materialText": "a bit of tallow, a pinch of brimstone, and a dusting of powdered iron"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.",
				"As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere\u2019s damage, and the sphere stops moving this turn.",
				"When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flaming-sphere",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:flock-of-familiars",
			"index": "flock-of-familiars",
			"slug": "flock-of-familiars",
			"name": "Flock of Familiars",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You temporarily summon three familiars \u2013 spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the Find Familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the Find Familiar spell or similar means, then one fewer familiars are conjured by this spell.",
				"Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.",
				"When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flock-of-familiars",
			"sourceBook": "Lost Laboratory of Kwalish",
			"tables": []
		},
		{
			"href": "/spell:fortunes-favor",
			"index": "fortunes-favor",
			"slug": "fortunes-favor",
			"name": "Fortune's Favor",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "60 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a white pearl worth at least 100 gp, which the spell consumes)",
				"materialText": "a white pearl worth at least 100 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.",
				"If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fortunes-favor",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:gentle-repose",
			"index": "gentle-repose",
			"slug": "gentle-repose",
			"name": "Gentle Repose",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "10 days",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of salt and one copper piece placed on each of the corpse\u2019s eyes, which must remain there for the duration)",
				"materialText": "a pinch of salt and one copper piece placed on each of the corpse\u2019s eyes, which must remain there for the duration"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric",
				"Paladin",
				"Wizard"
			],
			"description": [
				"You touch a corpse or other remains. For the duration, the target is protected from decay and can\u2019t become undead.",
				"The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don\u2019t count against the time limit of spells such as raise dead."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gentle-repose",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:gift-of-gab",
			"index": "gift-of-gab",
			"slug": "gift-of-gab",
			"name": "Gift of Gab",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "Reaction",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (2 gold coins, which is consumed as tax for using the spell)",
				"materialText": "2 gold coins, which is consumed as tax for using the spell"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"When you cast this spell, you skillfully reshape the memories of listeners in your immediate area, so that each creature of your choice within 5 feet of you forgets everything you said within the last 6 seconds. Those creatures then remember that you actually said the words you speak as the verbal component of the spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gift-of-gab",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:gust-of-wind",
			"index": "gust-of-wind",
			"slug": "gust-of-wind",
			"name": "Gust of Wind",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (60-foot line)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a legume seed)",
				"materialText": "a legume seed"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell\u2019s duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.",
				"Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.",
				"The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.",
				"As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gust-of-wind",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:healing-spirit",
			"index": "healing-spirit",
			"slug": "healing-spirit",
			"name": "Healing Spirit",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).",
				"Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can\u2019t heal constructs or undead.",
				"As a bonus action on your turn, you can move the Spirit up to 30 feet to a space you can see. The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the healing increases 1d6 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:healing-spirit",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:heat-metal",
			"index": "heat-metal",
			"slug": "heat-metal",
			"name": "Heat Metal",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of iron and a flame)",
				"materialText": "a piece of iron and a flame"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Druid"
			],
			"description": [
				"Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.",
				"If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn\u2019t drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:heat-metal",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hold-person",
			"index": "hold-person",
			"slug": "hold-person",
			"name": "Hold Person",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small, straight piece of iron)",
				"materialText": "a small, straight piece of iron"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hold-person",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:icingdeath-s-frost",
			"index": "icingdeath-s-frost",
			"slug": "icingdeath-s-frost",
			"name": "Icingdeath's Frost (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (15-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a vial of meltwater)",
				"materialText": "a vial of meltwater"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A burst of icy cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is covered in ice for 1 minute or until a creature uses its action to break the ice off itself or another creature. A creature covered in ice has its speed reduced to 0. On a successful save, a creature takes half as much damage with no additional effects."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:icingdeath-s-frost",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": []
		},
		{
			"href": "/spell:immovable-object",
			"index": "immovable-object",
			"slug": "immovable-object",
			"name": "Immovable Object",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
				"materialText": "gold dust worth at least 25 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute.",
				"If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:immovable-object",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:invisibility",
			"index": "invisibility",
			"slug": "invisibility",
			"name": "Invisibility",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an eyelash encased in gum arabic)",
				"materialText": "an eyelash encased in gum arabic"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target\u2019s person. The spell ends for a target that attacks or casts a spell."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:invisibility",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:jims-glowing-coin",
			"index": "jims-glowing-coin",
			"slug": "jims-glowing-coin",
			"name": "Jim's Glowing Coin",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a coin, 2 gold coins, which is consumed as tax for using the spell)",
				"materialText": "a coin, 2 gold coins, which is consumed as tax for using the spell"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"When you cast the spell, you hurl the coin that is the spell's material component to any spot within range. The coin lights up as if under the effect of a light spell. Each creature of your choice that you can see within 30 feet of the coin must succeed on a Wisdom saving throw or be distracted for the duration. While distracted, a creature has disadvantage on Wisdom (Perception) checks and initiative rolls."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:jims-glowing-coin",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:kinetic-jaunt",
			"index": "kinetic-jaunt",
			"slug": "kinetic-jaunt",
			"name": "Kinetic Jaunt",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You magically empower your movement with dancelike steps, giving yourself the following benefits for the duration:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:kinetic-jaunt",
			"sourceBook": "Strixhaven: A Curriculum of Chaos",
			"tables": []
		},
		{
			"href": "/spell:knock",
			"index": "knock",
			"slug": "knock",
			"name": "Knock",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.",
				"A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.",
				"If you choose a target that is held shut with Arcane Lock , that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.",
				"When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:knock",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:lesser-restoration",
			"index": "lesser-restoration",
			"slug": "lesser-restoration",
			"name": "Lesser Restoration",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger"
			],
			"description": [
				"You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:lesser-restoration",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:levitate",
			"index": "levitate",
			"slug": "levitate",
			"name": "Levitate",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
				"materialText": "either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.",
				"The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target\u2019s altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell\u2019s range.",
				"When the spell ends, the target floats gently to the ground if it is still aloft."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:levitate",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:locate-animals-or-plants",
			"index": "locate-animals-or-plants",
			"slug": "locate-animals-or-plants",
			"name": "Locate Animals or Plants",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fur from a bloodhound)",
				"materialText": "a bit of fur from a bloodhound"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Druid",
				"Ranger"
			],
			"description": [
				"Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:locate-animals-or-plants",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:locate-object",
			"index": "locate-object",
			"slug": "locate-object",
			"name": "Locate Object",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a forked twig)",
				"materialText": "a forked twig"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger",
				"Wizard"
			],
			"description": [
				"Describe or name an object that is familiar to you. You sense the direction to the object\u2019s location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.",
				"The spell can locate a specific object known to you, as long as you have seen it up close \u2013 within 30 feet \u2013 at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.",
				"This spell can\u2019t locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:locate-object",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:magic-mouth",
			"index": "magic-mouth",
			"slug": "magic-mouth",
			"name": "Magic Mouth",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Minute",
			"range": "30 feet",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)",
				"materialText": "a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Artificer",
				"Bard",
				"Wizard"
			],
			"description": [
				"You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn\u2019t being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.",
				"When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that words appear to come from the object\u2019s mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeats its message whenever the trigger occurs.",
				"The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magic-mouth",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:magic-weapon",
			"index": "magic-weapon",
			"slug": "magic-weapon",
			"name": "Magic Weapon",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Paladin",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magic-weapon",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:maximillians-earthen-grasp",
			"index": "maximillians-earthen-grasp",
			"slug": "maximillians-earthen-grasp",
			"name": "Maximillian's Earthen Grasp",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a miniature hand sculpted from clay)",
				"materialText": "a miniature hand sculpted from clay"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell\u2019s duration.",
				"As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.",
				"To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.",
				"As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:maximillians-earthen-grasp",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:melfs-acid-arrow",
			"index": "melfs-acid-arrow",
			"slug": "melfs-acid-arrow",
			"name": "Melf's Acid Arrow",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (powdered rhubarb leaf and an adder\u2019s stomach)",
				"materialText": "powdered rhubarb leaf and an adder\u2019s stomach"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:melfs-acid-arrow",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mental-barrier",
			"index": "mental-barrier",
			"slug": "mental-barrier",
			"name": "Mental Barrier (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Reaction",
			"range": "Self",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You protect your mind with a wall of looping, repetitive thought. Until the start of your next turn, you have advantage on Intelligence, Wisdom, and Charisma saving throws, and you have resistance to psychic damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mental-barrier",
			"sourceBook": "Unearthed Arcana 66 - Fighter, Rogue, and Wizard",
			"tables": []
		},
		{
			"href": "/spell:mind-spike",
			"index": "mind-spike",
			"slug": "mind-spike",
			"name": "Mind Spike",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can\u2019t become hidden from you, and if it\u2019s invisible, it gains no benefit from that condition against you."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mind-spike",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:mind-thrust",
			"index": "mind-thrust",
			"slug": "mind-thrust",
			"name": "Mind Thrust (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You thrust a lance of psychic disruption into the mind of one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can\u2019t take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell\u2019s other effects."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mind-thrust",
			"sourceBook": "Unearthed Arcana 71 - Psionic Options Revisited",
			"tables": []
		},
		{
			"href": "/spell:mirror-image",
			"index": "mirror-image",
			"slug": "mirror-image",
			"name": "Mirror Image",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it\u2019s impossible to track which image is real. You can use your action to dismiss the illusory duplicates.",
				"Each time a creature targets you with an attack during the spell\u2019s duration, roll a d20 to determine whether the attack instead targets one of your duplicates.",
				"If you have three duplicates, you must roll a 6 or higher to change the attack\u2019s target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.",
				"A duplicate\u2019s AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.",
				"A creature is unaffected by this spell if it can\u2019t see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mirror-image",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:misty-step",
			"index": "misty-step",
			"slug": "misty-step",
			"name": "Misty Step",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:misty-step",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:moonbeam",
			"index": "moonbeam",
			"slug": "moonbeam",
			"name": "Moonbeam",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)",
				"materialText": "several seeds of any moonseed plant and a piece of opalescent feldspar"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.",
				"When a creature enters the spell\u2019s area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.",
				"A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can\u2019t assume a different form until it leaves the spell\u2019s light.",
				"On each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:moonbeam",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:nathairs-mischief",
			"index": "nathairs-mischief",
			"slug": "nathairs-mischief",
			"name": "Nathair's Mischief",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "60ft",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a piece of crust from an apple pie)",
				"materialText": "a piece of crust from an apple pie"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You fill a 20-foot cube you can see within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced, and roll again at the start of each of your turns until the spell ends. You can move the cube up to 10 feet before you roll."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:nathairs-mischief",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": [
				{
					"caption": "Mischievous Surge",
					"headers": [
						"d4",
						"Effect"
					],
					"rows": [
						[
							"1",
							"The smell of apple pie fills the air, and each creature in the cube must succeed on a Wisdom saving throw or become charmed by you until the start of your next turn."
						],
						[
							"2",
							"Bouquets of flowers appear all around, and each creature in the cube must succeed on a Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water in their faces."
						],
						[
							"3",
							"Each creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is incapacitated and uses all its movement to move in a random direction."
						],
						[
							"4",
							"Drops of molasses appear and hover in the cube, turning it into difficult terrain until the start of your next turn."
						]
					]
				}
			]
		},
		{
			"href": "/spell:nathairs-mischief-ua",
			"index": "nathairs-mischief-ua",
			"slug": "nathairs-mischief-ua",
			"name": "Nathair's Mischief (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a piece of crust from an apple pie)",
				"materialText": "a piece of crust from an apple pie"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You fill a 20-foot cube centered on a point you choose within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced. At the start of each of your turns, you can move the cube up to 10 feet and reroll on the table."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:nathairs-mischief-ua",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": [
				{
					"caption": "Mischievous Surge",
					"headers": [
						"d4",
						"Effect"
					],
					"rows": [
						[
							"1",
							"The smell of apple pie fills the air, and each creature in the cube must succeed on a Wisdom saving throw or become charmed by you until the start of your next turn."
						],
						[
							"2",
							"Bouquets of flowers appear all around, and each creature in the cube must succeed on a Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water in their faces."
						],
						[
							"3",
							"Each creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is incapacitated and uses all its movement to move in a random direction."
						],
						[
							"4",
							"Drops of molasses appear and hover in the cube, turning it into difficult terrain until the start of your next turn."
						]
					]
				}
			]
		},
		{
			"href": "/spell:nystuls-magic-aura",
			"index": "nystuls-magic-aura",
			"slug": "nystuls-magic-aura",
			"name": "Nystul's Magic Aura",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small square of silk)",
				"materialText": "a small square of silk"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn\u2019t being carried or worn by another creature.",
				"When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.",
				"False Aura. You change the way the target appears to spells and magical effects, such as Detect Magic , that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object\u2019s magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.",
				"Mask. You change the way the target appears to spells and magical effects that detect creature types, such as a paladin\u2019s Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:nystuls-magic-aura",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:pass-without-trace",
			"index": "pass-without-trace",
			"slug": "pass-without-trace",
			"name": "Pass Without Trace",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)",
				"materialText": "ashes from a burned leaf of mistletoe and a sprig of spruce"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can\u2019t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:pass-without-trace",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:phantasmal-force",
			"index": "phantasmal-force",
			"slug": "phantasmal-force",
			"name": "Phantasmal Force",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fleece)",
				"materialText": "a bit of fleece"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.",
				"The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.",
				"The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.",
				"While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall; it was pushed, it slipped, or a strong wind might have knocked it off.",
				"An affected target is so convinced of the phantasm\u2019s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm\u2019s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:phantasmal-force",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:prayer-of-healing",
			"index": "prayer-of-healing",
			"slug": "prayer-of-healing",
			"name": "Prayer of Healing",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "10 Minutes",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:prayer-of-healing",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:protection-from-poison",
			"index": "protection-from-poison",
			"slug": "protection-from-poison",
			"name": "Protection from Poison",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger"
			],
			"description": [
				"You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.",
				"For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:protection-from-poison",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:pyrotechnics",
			"index": "pyrotechnics",
			"slug": "pyrotechnics",
			"name": "Pyrotechnics",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke.",
				"Fireworks. The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.",
				"Smoke. Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:pyrotechnics",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:ray-of-enfeeblement",
			"index": "ray-of-enfeeblement",
			"slug": "ray-of-enfeeblement",
			"name": "Ray of Enfeeblement",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.",
				"At the end of each of the target\u2019s turns, it can make a Constitution saving throw against the spell. On a success, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ray-of-enfeeblement",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:rimes-binding-ice",
			"index": "rimes-binding-ice",
			"slug": "rimes-binding-ice",
			"name": "Rime's Binding Ice",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a vial of meltwater)",
				"materialText": "a vial of meltwater"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its speed reduced to 0. On a successful save, a creature takes half as much damage and isn\u2019t hindered by ice."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:rimes-binding-ice",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": []
		},
		{
			"href": "/spell:rope-trick",
			"index": "rope-trick",
			"slug": "rope-trick",
			"name": "Rope Trick",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (powdered corn extract and a twisted loop of parchment)",
				"materialText": "powdered corn extract and a twisted loop of parchment"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.",
				"The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.",
				"Attacks and spells can\u2019t cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.",
				"Anything inside the extradimensional space drops out when the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:rope-trick",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:scorching-ray",
			"index": "scorching-ray",
			"slug": "scorching-ray",
			"name": "Scorching Ray",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:scorching-ray",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:see-invisibility",
			"index": "see-invisibility",
			"slug": "see-invisibility",
			"name": "See Invisibility",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of talc and a small sprinkling of powdered silver)",
				"materialText": "a pinch of talc and a small sprinkling of powdered silver"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:see-invisibility",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:shadow-blade",
			"index": "shadow-blade",
			"slug": "shadow-blade",
			"name": "Shadow Blade",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.",
				"If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand."
			],
			"higherLevel": [
				"When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shadow-blade",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:shatter",
			"index": "shatter",
			"slug": "shatter",
			"name": "Shatter",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a chip of mica)",
				"materialText": "a chip of mica"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.",
				"A nonmagical object that isn\u2019t being worn or carried also takes the damage if it\u2019s in the spell\u2019s area."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shatter",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:silence",
			"index": "silence",
			"slug": "silence",
			"name": "Silence",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Bard",
				"Cleric",
				"Ranger"
			],
			"description": [
				"For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:silence",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:skywrite",
			"index": "skywrite",
			"slug": "skywrite",
			"name": "Skywrite",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Sight",
			"duration": "Concentration, up to 1 day",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Artificer",
				"Bard",
				"Druid",
				"Wizard"
			],
			"description": [
				"You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell\u2019s duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:skywrite",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:snillocs-snowball-swarm",
			"index": "snillocs-snowball-swarm",
			"slug": "snillocs-snowball-swarm",
			"name": "Snilloc's Snowball Swarm",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of ice or a small white rock chip)",
				"materialText": "a piece of ice or a small white rock chip"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:snillocs-snowball-swarm",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:spider-climb",
			"index": "spider-climb",
			"slug": "spider-climb",
			"name": "Spider Climb",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of bitumen and a spider)",
				"materialText": "a drop of bitumen and a spider"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spider-climb",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:spike-growth",
			"index": "spike-growth",
			"slug": "spike-growth",
			"name": "Spike Growth",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)",
				"materialText": "seven sharp thorns or seven small twigs, each sharpened to a point"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.",
				"The transformation of the ground is camouflaged to look natural. Any creature that can\u2019t see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spike-growth",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:spiritual-weapon",
			"index": "spiritual-weapon",
			"slug": "spiritual-weapon",
			"name": "Spiritual Weapon",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again.",
				"When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.",
				"As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.",
				"The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell\u2019s effect resemble that weapon."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spiritual-weapon",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:spray-of-cards",
			"index": "spray-of-cards",
			"slug": "spray-of-cards",
			"name": "Spray Of Cards",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self (15-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a deck of cards)",
				"materialText": "a deck of cards"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You spray a 15-foot cone of spectral cards. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 2d10 force damage and has the blinded condition until the end of its next turn. On a successful save, a creature takes half as much damage only."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spray-of-cards",
			"sourceBook": "The Book of Many Things",
			"tables": []
		},
		{
			"href": "/spell:spray-of-cards-ua",
			"index": "spray-of-cards-ua",
			"slug": "spray-of-cards-ua",
			"name": "Spray of Cards (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "15-foot cone",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a deck of cards)",
				"materialText": "a deck of cards"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You spray spectral cards from your hands or sleeve; the cards blind or slash at your enemies, and then vanish. Choose one of the following effects for the cards:"
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage of cutting cards increases by 1d10 for every two slot levels above 2nd"
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spray-of-cards-ua",
			"sourceBook": "Unearthed Arcana 85 - Wonders of the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:suggestion",
			"index": "suggestion",
			"slug": "suggestion",
			"name": "Suggestion",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 8 hours",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a snake\u2019s tongue and either a bit of honeycomb or a drop of sweet oil)",
				"materialText": "a snake\u2019s tongue and either a bit of honeycomb or a drop of sweet oil"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can\u2019t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.",
				"The target must make a Wisdom saving throw. On a failed save, it purses the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
				"You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn\u2019t met before the spell expires, the activity isn\u2019t performed.",
				"If you or any of your companions damage the target, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:suggestion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:summon-beast",
			"index": "summon-beast",
			"slug": "summon-beast",
			"name": "Summon Beast",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp)",
				"materialText": "a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, use the higher level where the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-beast",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:tashas-mind-whip",
			"index": "tashas-mind-whip",
			"slug": "tashas-mind-whip",
			"name": "Tasha's Mind Whip",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can\u2019t take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell\u2019s other effects."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tashas-mind-whip",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:thought-shield",
			"index": "thought-shield",
			"slug": "thought-shield",
			"name": "Thought Shield (UA)",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You weave a clouding veil over the mind of one creature you touch. For the duration, the target\u2019s mind can\u2019t be read or detected, creatures can\u2019t telepathically communicate with the target unless the target allows it, and the target has advantage on saving throws against any effect that would determine whether it is telling the truth."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thought-shield",
			"sourceBook": "Unearthed Arcana 66 - Fighter, Rogue, and Wizard",
			"tables": []
		},
		{
			"href": "/spell:vortex-warp",
			"index": "vortex-warp",
			"slug": "vortex-warp",
			"name": "Vortex Warp",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You magically twist space around another creature you can see within range. The target must succeed on a Constitution saving throw (the target can choose to fail), or the target is teleported to an unoccupied space of your choice that you can see within range. The chosen space must be on a surface or in a liquid that can support the target without the target having to squeeze."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the range of the spell increases by 30 feet for each slot level above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:vortex-warp",
			"sourceBook": "Strixhaven: A Curriculum of Chaos",
			"tables": []
		},
		{
			"href": "/spell:warding-bond",
			"index": "warding-bond",
			"slug": "warding-bond",
			"name": "Warding Bond",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration)",
				"materialText": "a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends.",
				"While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.",
				"The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:warding-bond",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:warding-wind",
			"index": "warding-wind",
			"slug": "warding-wind",
			"name": "Warding Wind",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell\u2019s duration.",
				"The wind has the following effects:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:warding-wind",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:warp-sense",
			"index": "warp-sense",
			"slug": "warp-sense",
			"name": "Warp Sense",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a razorvine leaf)",
				"materialText": "a razorvine leaf"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"For the duration, you sense the presence of portals, even inactive ones, within 30 feet of yourself. If you detect a portal in this way, you can use your action to study it. Make a DC 15 ability check using your spellcasting ability. On a successful check, you learn the destination plane of the portal and what portal key it requires, then the spell ends. On a failed check, you learn nothing and can't study that portal again using this spell until you cast it again. The spell can penetrate most barriers but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:warp-sense",
			"sourceBook": "Planescape - Adventures in the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:web",
			"index": "web",
			"slug": "web",
			"name": "Web",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of spiderweb)",
				"materialText": "a bit of spiderweb"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.",
				"If the webs aren\u2019t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.",
				"Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.",
				"A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.",
				"The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:web",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wither-and-bloom",
			"index": "wither-and-bloom",
			"slug": "wither-and-bloom",
			"name": "Wither and Bloom",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a withered vine twisted into a loop)",
				"materialText": "a withered vine twisted into a loop"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking 2d6 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers.",
				"In addition, one creature of your choice in that area can spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your spellcasting ability modifier."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot above 2nd, and the number of Hit Dice that can be spent and added to the healing roll increases by one for each slot above 2nd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wither-and-bloom",
			"sourceBook": "Strixhaven: A Curriculum of Chaos",
			"tables": []
		},
		{
			"href": "/spell:wristpocket",
			"index": "wristpocket",
			"slug": "wristpocket",
			"name": "Wristpocket",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": true,
			"classes": [
				"Wizard"
			],
			"description": [
				"You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration.",
				"Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wristpocket",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:zone-of-truth",
			"index": "zone-of-truth",
			"slug": "zone-of-truth",
			"name": "Zone of Truth",
			"level": 2,
			"levelLabel": "2nd Level",
			"levelSlug": "2nd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Paladin"
			],
			"description": [
				"You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell\u2019s area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can\u2019t speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.",
				"An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such creatures can be evasive in its answers as long as it remains within the boundaries of the truth."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:zone-of-truth",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:animate-dead",
			"index": "animate-dead",
			"slug": "animate-dead",
			"name": "Animate Dead",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Minute",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)",
				"materialText": "a drop of blood, a piece of flesh, and a pinch of bone dust"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Wizard"
			],
			"description": [
				"This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature\u2019s game statistics).",
				"On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
				"The creature is under your control for 24 hours, after which it stops obeying any command you\u2019ve given it. To maintain the control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:animate-dead",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:antagonize",
			"index": "antagonize",
			"slug": "antagonize",
			"name": "Antagonize",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a playing card depicting a rogue)",
				"materialText": "a playing card depicting a rogue"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Range: 30 feet",
				"Components: V, S, M (a playing card depicting a rogue)",
				"Duration: Instantaneous",
				"You whisper magical words that antagonize one creature of your choice within range. The target must make a Wisdom saving throw. On a failed save, the target takes 4d4 psychic damage and must immediately use its reaction to make a melee attack against another creature of your choice that you can see. If the target can\u2019t make this attack (for example, because there is no one within its reach or because its reaction is unavailable), the target instead has disadvantage on the next attack roll it makes before the start of your next turn. On a successful save, the target takes half as much damage only."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:antagonize",
			"sourceBook": "The Book of Many Things",
			"tables": []
		},
		{
			"href": "/spell:antagonize-ua",
			"index": "antagonize-ua",
			"slug": "antagonize-ua",
			"name": "Antagonize (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a playing card depicting a rogue)",
				"materialText": "a playing card depicting a rogue"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You whisper magical words that antagonize one creature of your choice within range. The target must make a Wisdom saving throw. On a failed save, it takes 4d4 psychic damage and must immediately use its reaction, if available, to make a melee attack against another creature of your choice that you can see. If no other creature is within range, the target has disadvantage on the next attack roll it makes before the start of your next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:antagonize-ua",
			"sourceBook": "Unearthed Arcana 85 - Wonders of the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:ashardalons-stride",
			"index": "ashardalons-stride",
			"slug": "ashardalons-stride",
			"name": "Ashardalon's Stride",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V,S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"The billowing flames of a dragon blast from your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn\u2019t provoke opportunity attacks.",
				"When you move within 5 feet of a creature or an object that isn\u2019t being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. The spell deals an additional 1d6 fire damage for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ashardalons-stride",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": []
		},
		{
			"href": "/spell:aura-of-vitality",
			"index": "aura-of-vitality",
			"slug": "aura-of-vitality",
			"name": "Aura of Vitality",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Paladin"
			],
			"description": [
				"Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:aura-of-vitality",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:beacon-of-hope",
			"index": "beacon-of-hope",
			"slug": "beacon-of-hope",
			"name": "Beacon of Hope",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:beacon-of-hope",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:bestow-curse",
			"index": "bestow-curse",
			"slug": "bestow-curse",
			"name": "Bestow Curse",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Wizard"
			],
			"description": [
				"You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:",
				"A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:bestow-curse",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blinding-smite",
			"index": "blinding-smite",
			"slug": "blinding-smite",
			"name": "Blinding Smite",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"The next time you hit a creature with a melee weapon attack during this spell\u2019s duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.",
				"A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blinding-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blink",
			"index": "blink",
			"slug": "blink",
			"name": "Blink",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane).",
				"At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more that one space is equally near). You can dismiss this spell as an action.",
				"While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creature that aren't there can't perceive you or interact with you, unless they have the ability to do so."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blink",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:call-lightning",
			"index": "call-lightning",
			"slug": "call-lightning",
			"name": "Call Lightning",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you. The spell fails if you can\u2019t see a point in the air where the storm cloud could appear (for example, if you are in a room that can\u2019t accommodate the cloud).",
				"When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.",
				"If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell\u2019s damage increases by 1d10."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:call-lightning",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:catnap",
			"index": "catnap",
			"slug": "catnap",
			"name": "Catnap",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "10 minutes",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a pinch of sand)",
				"materialText": "a pinch of sand"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell\u2019s duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can\u2019t be affected by this spell again until it finishes a long rest."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:catnap",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:clairvoyance",
			"index": "clairvoyance",
			"slug": "clairvoyance",
			"name": "Clairvoyance",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Divination",
			"castingTime": "10 Minutes",
			"range": "1 mile",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)",
				"materialText": "a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can\u2019t be attacked or otherwise interacted with.",
				"When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefitting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:clairvoyance",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-animals",
			"index": "conjure-animals",
			"slug": "conjure-animals",
			"name": "Conjure Animals",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range.",
				"Choose one of the following options for what appears:",
				"Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.",
				"The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don\u2019t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures\u2019 statistics."
			],
			"higherLevel": [
				"When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-animals",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-barrage",
			"index": "conjure-barrage",
			"slug": "conjure-barrage",
			"name": "Conjure Barrage",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self (60-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (one piece of ammunition or a thrown weapon)",
				"materialText": "one piece of ammunition or a thrown weapon"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-barrage",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-lesser-demon",
			"index": "conjure-lesser-demon",
			"slug": "conjure-lesser-demon",
			"name": "Conjure Lesser Demon (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a vial of blood from an intelligent humanoid killed within the past 24 hours)",
				"materialText": "a vial of blood from an intelligent humanoid killed within the past 24 hours"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You summon up to a total of eight manes or dretches that appear in unoccupied spaces you can see within range. A manes or dretch disappears when it drops to 0 hit points or when the spell ends.",
				"The demons are hostile to all creatures. Roll initiative for the summoned demons as a group, which has its own turns. The demons attack the nearest non-demons to the best of their ability.",
				"As part of casting the spell, you can scribe a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. The summoned demons cannot cross the circle or target anyone in it while the spell lasts. Using the material component in this manner consumes it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th or 7th level, you summon sixteen demons. If you cast it using a spell slot of 8th or 9th level, you summon thirty-two demons."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-lesser-demon",
			"sourceBook": "Unearthed Arcana 11 - That Old Black Magic",
			"tables": []
		},
		{
			"href": "/spell:counterspell",
			"index": "counterspell",
			"slug": "counterspell",
			"name": "Counterspell",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Reaction",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell\u2019s level. On a success, the creature\u2019s spell fails and has no effect."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:counterspell",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:create-food-and-water",
			"index": "create-food-and-water",
			"slug": "create-food-and-water",
			"name": "Create Food and Water",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Paladin"
			],
			"description": [
				"You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn\u2019t go bad."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-food-and-water",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:crusaders-mantle",
			"index": "crusaders-mantle",
			"slug": "crusaders-mantle",
			"name": "Crusader's Mantle",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:crusaders-mantle",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:daylight",
			"index": "daylight",
			"slug": "daylight",
			"name": "Daylight",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger",
				"Sorcerer"
			],
			"description": [
				"A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.",
				"If you chose a point on an object you are holding or one that isn\u2019t being worn or carried, the light shines from the object with and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.",
				"If any of this spell\u2019s area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:daylight",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dispel-magic",
			"index": "dispel-magic",
			"slug": "dispel-magic",
			"name": "Dispel Magic",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Choose any creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dispel-magic",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:elemental-weapon",
			"index": "elemental-weapon",
			"slug": "elemental-weapon",
			"name": "Elemental Weapon",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Paladin",
				"Ranger"
			],
			"description": [
				"A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:elemental-weapon",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:enemies-abound",
			"index": "enemies-abound",
			"slug": "enemies-abound",
			"name": "Enemies Abound",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.",
				"Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it\u2019s using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:enemies-abound",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:erupting-earth",
			"index": "erupting-earth",
			"slug": "erupting-earth",
			"name": "Erupting Earth",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of obsidian)",
				"materialText": "a piece of obsidian"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared away. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:erupting-earth",
			"sourceBook": "Xanathar's Guide to Everything/Elemental Evil Player's Companion",
			"tables": []
		},
		{
			"href": "/spell:fast-friends",
			"index": "fast-friends",
			"slug": "fast-friends",
			"name": "Fast Friends",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Wizard"
			],
			"description": [
				"When you cast this spell, choose one humanoid within range that can see and hear you, and that can understand you. The creature must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed in this way, it undertakes to perform any services or activities you ask of it in a friendly manner, to the best of its ability.",
				"You can set the creature new tasks when a previous task is completed, or if you decide to end its current task. If the service or activity might cause harm to the creature, or if it conflicts with the creature's normal activities and desires, the creature can make another Wisdom saving throw to try to end the effect. This save is made with advantage if you or your companions are fighting the creature. If the activity would result in certain death for the creature, the spell ends.",
				"When the spell ends, the creature knows it was charmed by you.",
				"At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
				"Spell Lists: Bard , Cleric , Wizard"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fast-friends",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:fear",
			"index": "fear",
			"slug": "fear",
			"name": "Fear",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self (30-foot cone)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a white feather or the heart of a hen)",
				"materialText": "a white feather or the heart of a hen"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You project a phantasmal image of a creature\u2019s worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.",
				"While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn\u2019t have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fear",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:feign-death",
			"index": "feign-death",
			"slug": "feign-death",
			"name": "Feign Death",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of graveyard dirt)",
				"materialText": "a pinch of graveyard dirt"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
				"For the spell\u2019s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target\u2019s status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell\u2019s effect, the disease and poison have no effect until the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:feign-death",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:fireball",
			"index": "fireball",
			"slug": "fireball",
			"name": "Fireball",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny ball of bat guano and sulfur)",
				"materialText": "a tiny ball of bat guano and sulfur"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren\u2019t being worn or carried."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fireball",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:flame-arrows",
			"index": "flame-arrows",
			"slug": "flame-arrows",
			"name": "Flame Arrows",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell\u2019s magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flame-arrows",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:flame-stride",
			"index": "flame-stride",
			"slug": "flame-stride",
			"name": "Flame Stride (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"The billowing flames of a dragon cover your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn\u2019t provoke opportunity attacks. When you move within 5 feet of a creature or object that isn\u2019t being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. Additionally, the spell deals an additional 1d6 fire damage for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flame-stride",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": []
		},
		{
			"href": "/spell:fly",
			"index": "fly",
			"slug": "fly",
			"name": "Fly",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a wing feather from any bird)",
				"materialText": "a wing feather from any bird"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fly",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:galders-tower",
			"index": "galders-tower",
			"slug": "galders-tower",
			"name": "Galder's Tower",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "10 Minutes",
			"range": "30 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a fragment of stone, wood, or other building material)",
				"materialText": "a fragment of stone, wood, or other building material"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You conjure a two-story tower made of stone, wood, or similar suitably sturdy materials. The tower can be round or square in shape. Each level of the tower is 10 feet tall and has an area of up to 100 square feet. Access between levels consists of a simple ladder and hatch. Each level takes one of the following forms, chosen by you when you cast the spell:",
				"The interior of the tower is warm and dry, regardless of conditions outside. Any equipment or furnishings conjured with the tower dissipate into smoke if removed from it. At the end of the spell\u2019s duration, all creatures and objects within the tower that were not created by the spell appear safely outside on the ground, and all traces of the tower and its furnishings disappear.",
				"You can cast this spell again while it is active to maintain the tower\u2019s existence for another 24 hours. You can create a permanent tower by casting this spell in the same location and with the same configuration every day for one year."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the tower can have one additional story for each slot level beyond 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:galders-tower",
			"sourceBook": "Lost Laboratory of Kwalish",
			"tables": []
		},
		{
			"href": "/spell:gaseous-form",
			"index": "gaseous-form",
			"slug": "gaseous-form",
			"name": "Gaseous Form",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of gauze and a wisp of smoke)",
				"materialText": "a bit of gauze and a wisp of smoke"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You transform a willing creature you touch, along with everything it\u2019s wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn\u2019t affected.",
				"While in this form, the target\u2019s only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can\u2019t fall and remains hovering in the air even when stunned or otherwise incapacitated.",
				"While in the form of a misty cloud, the target can\u2019t talk or manipulate objects, and any objects it was carrying or holding can\u2019t be dropped, used, or otherwise interacted with. The target can\u2019t attack or cast spells."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gaseous-form",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:glyph-of-warding",
			"index": "glyph-of-warding",
			"slug": "glyph-of-warding",
			"name": "Glyph of Warding",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Hour",
			"range": "Touch",
			"duration": "Until dispelled or triggered",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)",
				"materialText": "incense and powdered diamond worth at least 200 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Wizard"
			],
			"description": [
				"When you cast this spell, you inscribe a glyph that creates a magical effect triggered by other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.",
				"The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.",
				"You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.",
				"You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don\u2019t trigger the glyph, such as those who say a certain password.",
				"When you inscribe the glyph, choose explosive runes or a spell glyph.",
				"Explosive Runes. When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one.",
				"Spell Glyph. You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:glyph-of-warding",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:haste",
			"index": "haste",
			"slug": "haste",
			"name": "Haste",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a shaving of licorice root)",
				"materialText": "a shaving of licorice root"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose a willing creature that you can see within range. Until the spell ends, the target\u2019s speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.",
				"When the spell ends, the target can\u2019t move or take actions until after its next turn, as a wave of lethargy sweeps over it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:haste",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:haywire",
			"index": "haywire",
			"slug": "haywire",
			"name": "Haywire (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell plays havoc with electronic devices, making the use of such devices all but impossible. Each electronic device in a 10-foot-radius sphere centered on a point you choose within range is subject to random behavior while it remains within the area. A device not held by a creature is automatically affected. If an electronic device is held by a creature, that creature must succeed on a Wisdom saving throw or have the device affected by the spell.",
				"At the start of each of your turns, roll a d6 for each affected device to determine its behavior. Except where otherwise indicated, that behavior lasts until the start of your next turn while this spell is in effect."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the radius of the sphere affected by the spell increases by 5 feet for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:haywire",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": [
				{
					"headers": [
						"d6",
						"Effect"
					],
					"rows": [
						[
							"1",
							"The device shuts down and must be restarted. Do not roll again for this device until it is restarted."
						],
						[
							"2-4",
							"The device does not function."
						],
						[
							"5",
							"The device experiences a power surge, causing an electric shock to the wielder (if any and one random creature within 5 feet of the device. Each affected creature must make a Dexterity saving throw against your spell save DC, taking 6d6 lightning damage on a failed save, or half as much damage on a successful one."
						],
						[
							"6",
							"The device is usable as normal."
						]
					]
				}
			]
		},
		{
			"href": "/spell:house-of-cards-ua",
			"index": "house-of-cards-ua",
			"slug": "house-of-cards-ua",
			"name": "House of Cards (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a deck of cards)",
				"materialText": "a deck of cards"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You touch the ground and conjure forth a defensive structure made of enormous playing cards. The structure rises with you at its center, harmlessly lifting you and any creatures in the area. The house of cards has a square base that is 30 feet on each side, and it has three floors with 10-foot-high ceilings. The second floor is 20 feet on each side, and the top floor is 10 feet on each side\u2014both centered above the bottom floor. Ramps connect the interior of each floor, and empty doorframes connect the interior and exterior of each level. Creatures inside or on top of the structure have half cover.",
				"Each card that comprises the house is 5 feet wide and 10 feet tall and is very fragile. A card has AC 10 and 1 hit point. The cards are immune to poison and psychic damage. Reducing a card to 0 hit points destroys it. Every time a card is destroyed, roll 1d6. If you roll a 5 or a 6, the house collapses, ending the spell.",
				"The house and all its cards vanish when the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:house-of-cards-ua",
			"sourceBook": "Unearthed Arcana 85 - Wonders of the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:hunger-of-hadar",
			"index": "hunger-of-hadar",
			"slug": "hunger-of-hadar",
			"name": "Hunger Of Hadar",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pickled octopus tentacle)",
				"materialText": "a pickled octopus tentacle"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.",
				"The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hunger-of-hadar",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hypnotic-pattern",
			"index": "hypnotic-pattern",
			"slug": "hypnotic-pattern",
			"name": "Hypnotic Pattern",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a glowing stick of incense or a crystal vial filled with phosphorescent material)",
				"materialText": "a glowing stick of incense or a crystal vial filled with phosphorescent material"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.",
				"The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hypnotic-pattern",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:incite-greed",
			"index": "incite-greed",
			"slug": "incite-greed",
			"name": "Incite Greed",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gem worth at least 50 gp)",
				"materialText": "a gem worth at least 50 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"When you cast this spell, you present the gem used as the material component and choose any number of creatures within range that can see you. Each target must succeed on a Wisdom saving throw or be charmed by you until the spell ends, or until you or your companions do anything harmful to it. While charmed in this way, a creature can do nothing but use its movement to approach you in a safe manner. While an affected creature is within 5 feet of you, it cannot move, but simply stares greedily at the gem you present.",
				"At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:incite-greed",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:intellect-fortress",
			"index": "intellect-fortress",
			"slug": "intellect-fortress",
			"name": "Intellect Fortress",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.",
				"Spell Lists: Artificer , Bard (Optional) , Sorcerer (Optional) , Warlock (Optional) , Wizard (Optional)"
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:intellect-fortress",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:invisibility-to-cameras",
			"index": "invisibility-to-cameras",
			"slug": "invisibility-to-cameras",
			"name": "Invisibility To Cameras (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a scrap of black paper)",
				"materialText": "a scrap of black paper"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Four creatures of your choice within range become undetectable to electronic sensors and cameras for the duration of the spell. Anything a target is wearing or carrying is likewise undetectable as long as it is on the target\u2019s person. The targets remain visible to vision."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:invisibility-to-cameras",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:leomunds-tiny-hut",
			"index": "leomunds-tiny-hut",
			"slug": "leomunds-tiny-hut",
			"name": "Leomund's Tiny Hut",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Minute",
			"range": "Self (10-foot radius hemisphere)",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small crystal bead)",
				"materialText": "a small crystal bead"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.",
				"Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.",
				"Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:leomunds-tiny-hut",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:life-transference",
			"index": "life-transference",
			"slug": "life-transference",
			"name": "Life Transference",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Wizard"
			],
			"description": [
				"You sacrifice some of your health to mend another creature\u2019s injuries. You take 4d8 necrotic damage, which can\u2019t be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.",
				"At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
				"Spell Lists: Cleric , Wizard"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:life-transference",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:lightning-arrow",
			"index": "lightning-arrow",
			"slug": "lightning-arrow",
			"name": "Lightning Arrow",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"The next time you make a ranged weapon attack during the spell\u2019s duration, the weapon\u2019s ammunition, or the weapon itself if it\u2019s a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon\u2019s normal damage.",
				"Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.",
				"The piece of ammunition or weapon then returns to its normal form."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:lightning-arrow",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:lightning-bolt",
			"index": "lightning-bolt",
			"slug": "lightning-bolt",
			"name": "Lightning Bolt",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (100-foot line)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
				"materialText": "a bit of fur and a rod of amber, crystal, or glass"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.",
				"The lightning ignites flammable objects in the area that aren\u2019t being worn or carried."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:lightning-bolt",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:magic-circle",
			"index": "magic-circle",
			"slug": "magic-circle",
			"name": "Magic Circle",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Minute",
			"range": "10 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)",
				"materialText": "holy water or powdered silver and iron worth at least 100 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface.",
				"Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:",
				"When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magic-circle",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:major-image",
			"index": "major-image",
			"slug": "major-image",
			"name": "Major Image",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fleece)",
				"materialText": "a bit of fleece"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can\u2019t create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte\u2019s stench).",
				"As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.",
				"Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration. In this form it is sometimes considered a different spell, known as Permanent Image."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:major-image",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mass-healing-word",
			"index": "mass-healing-word",
			"slug": "mass-healing-word",
			"name": "Mass Healing Word",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric"
			],
			"description": [
				"As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mass-healing-word",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:meld-into-stone",
			"index": "meld-into-stone",
			"slug": "meld-into-stone",
			"name": "Meld into Stone",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric",
				"Druid",
				"Ranger"
			],
			"description": [
				"You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.",
				"While merged with the stone, you can\u2019t see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can\u2019t move.",
				"Minor physical damage to the stone doesn\u2019t harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone\u2019s complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:meld-into-stone",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:melfs-minute-meteors",
			"index": "melfs-minute-meteors",
			"slug": "melfs-minute-meteors",
			"name": "Melf's Minute Meteors",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (120 feet)",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (niter, sulfur, and pine tar formed into a bead)",
				"materialText": "niter, sulfur, and pine tar formed into a bead"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create six tiny meteors in your space. They float in the air and orbit you for the spell\u2019s duration. When you cast the spell \u2014 and as a bonus action on each of your turns thereafter \u2014 you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:melfs-minute-meteors",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:motivational-speech",
			"index": "motivational-speech",
			"slug": "motivational-speech",
			"name": "Motivational Speech",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Enchantment",
			"castingTime": "1 Minute",
			"range": "60 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric"
			],
			"description": [
				"Choose up to five creatures within range that can hear you. For the duration, each affected creature gains 5 temporary hit points and has advantage on Wisdom saving throws. If an affected creature is hit by an attack, it has advantage on the next attack roll it makes. Once an affected creature loses the temporary hit points granted by this spell, the spell ends for that creature.",
				"At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the temporary hit points increase by 5 for each slot level above 3rd.",
				"Spell Lists: Bard , Cleric"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:motivational-speech",
			"sourceBook": "Acquisitions Inc.",
			"tables": []
		},
		{
			"href": "/spell:nondetection",
			"index": "nondetection",
			"slug": "nondetection",
			"name": "Nondetection",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)",
				"materialText": "a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Ranger",
				"Wizard"
			],
			"description": [
				"For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can\u2019t be targeted by any divination magic or perceived through magical scrying sensors."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:nondetection",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:phantom-steed",
			"index": "phantom-steed",
			"slug": "phantom-steed",
			"name": "Phantom Steed",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Illusion",
			"castingTime": "1 Minute",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Wizard"
			],
			"description": [
				"A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature\u2019s appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.",
				"For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:phantom-steed",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:plant-growth",
			"index": "plant-growth",
			"slug": "plant-growth",
			"name": "Plant Growth",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action or 8 Hours",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Ranger"
			],
			"description": [
				"This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.",
				"If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.",
				"You can exclude one or more areas of any size within the spell\u2019s area from being affected.",
				"If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:plant-growth",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:protection-from-ballistics",
			"index": "protection-from-ballistics",
			"slug": "protection-from-ballistics",
			"name": "Protection from Ballistics (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a shell casing)",
				"materialText": "a shell casing"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell enchants the flesh of the target against the impact of bullets. Until the spell ends, the target has resistance to nonmagical ballistic damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:protection-from-ballistics",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:protection-from-energy",
			"index": "protection-from-energy",
			"slug": "protection-from-energy",
			"name": "Protection from Energy",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:protection-from-energy",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:psionic-blast",
			"index": "psionic-blast",
			"slug": "psionic-blast",
			"name": "Psionic Blast (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You unleash a destructive wave of mental power in a 30-foot cone. Each creature in the area must make a Dexterity saving throw. On a failed save, a target takes 5d8 force damage, is pushed 20 feet directly away from you, and is knocked prone. On a successful save, a target takes half as much damage and isn\u2019t pushed or knocked prone."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:psionic-blast",
			"sourceBook": "Unearthed Arcana 66 - Fighter, Rogue, and Wizard",
			"tables": []
		},
		{
			"href": "/spell:pulse-wave",
			"index": "pulse-wave",
			"slug": "pulse-wave",
			"name": "Pulse Wave",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or half as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell.",
				"In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:pulse-wave",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:remove-curse",
			"index": "remove-curse",
			"slug": "remove-curse",
			"name": "Remove Curse",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin",
				"Warlock",
				"Wizard"
			],
			"description": [
				"At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner\u2019s attunement to the object so it can be removed or discarded."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:remove-curse",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:revivify",
			"index": "revivify",
			"slug": "revivify",
			"name": "Revivify",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (diamonds worth 300 gp, which the spell consumes)",
				"materialText": "diamonds worth 300 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger"
			],
			"description": [
				"You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can\u2019t return to life a creature that has died of old age, nor can it restore any missing body parts."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:revivify",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sending",
			"index": "sending",
			"slug": "sending",
			"name": "Sending",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Unlimited",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a short piece of fine copper wire)",
				"materialText": "a short piece of fine copper wire"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Wizard"
			],
			"description": [
				"You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.",
				"You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sending",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sleet-storm",
			"index": "sleet-storm",
			"slug": "sleet-storm",
			"name": "Sleet Storm",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of dust and a few drops of water)",
				"materialText": "a pinch of dust and a few drops of water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.",
				"The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell\u2019s area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.",
				"If a creature starts its turn in the spell's area and is concentrating on a spell, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sleet-storm",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:slow",
			"index": "slow",
			"slug": "slow",
			"name": "Slow",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of molasses)",
				"materialText": "a drop of molasses"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.",
				"An affected target\u2019s speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can\u2019t use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature\u2019s abilities or magic items, it can\u2019t make more than one melee or ranged attack during its turn.",
				"If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn\u2019t take effect until the creature\u2019s next turn, and the creature must use its action on that turn to complete the spell. If it can\u2019t, the spell is wasted.",
				"A creature affected by this spell makes another Wisdom saving throw at the end of each of its turns. On a successful save, the effect ends for it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:slow",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:speak-with-dead",
			"index": "speak-with-dead",
			"slug": "speak-with-dead",
			"name": "Speak with Dead",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (burning incense)",
				"materialText": "burning incense"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Wizard"
			],
			"description": [
				"You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can\u2019t be undead. The spell fails if the corpse was the target of this spell within the last 10 days.",
				"Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn\u2019t return the creature\u2019s soul to its body, only its animating spirit. Thus, the corpse can\u2019t learn new information, doesn\u2019t comprehend anything that has happened since it died, and can\u2019t speculate about future events."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:speak-with-dead",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:speak-with-plants",
			"index": "speak-with-plants",
			"slug": "speak-with-plants",
			"name": "Speak with Plants",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Ranger"
			],
			"description": [
				"You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell\u2019s area within the past day, gaining information about creatures that have passed, weather, and other circumstances.",
				"You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.",
				"Plants might be able to perform other tasks on your behalf, at the DM\u2019s discretion. The spell doesn\u2019t enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.",
				"If a plant creature is in the area, you can communicate with it as if you share a common language, but you gain no magical ability to influence it.",
				"This spell can cause the plants created by the entangle spell to release a restrained creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:speak-with-plants",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:spirit-guardians",
			"index": "spirit-guardians",
			"slug": "spirit-guardians",
			"name": "Spirit Guardians",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self (15-foot radius)",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a holy symbol)",
				"materialText": "a holy symbol"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.",
				"When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature\u2019s speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spirit-guardians",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:spirit-shroud",
			"index": "spirit-shroud",
			"slug": "spirit-shroud",
			"name": "Spirit Shroud",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth spirits of the dead, which flit around you for the spell\u2019s duration. The spirits are intangible and invulnerable.",
				"Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can\u2019t regain hit points until the start of your next turn.",
				"In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spirit-shroud",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:stinking-cloud",
			"index": "stinking-cloud",
			"slug": "stinking-cloud",
			"name": "Stinking Cloud",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a rotten egg or several skunk cabbage leaves)",
				"materialText": "a rotten egg or several skunk cabbage leaves"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.",
				"Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don\u2019t need to breathe or are immune to poison automatically succeed on this saving throw.",
				"A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:stinking-cloud",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:summon-fey",
			"index": "summon-fey",
			"slug": "summon-fey",
			"name": "Summon Fey",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gilded flower worth at least 300 gp)",
				"materialText": "a gilded flower worth at least 300 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood. Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-fey",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-lesser-demons",
			"index": "summon-lesser-demons",
			"slug": "summon-lesser-demons",
			"name": "Summon Lesser Demons",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
				"materialText": "a vial of blood from a humanoid killed within the past 24 hours"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.",
				"The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.",
				"The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.",
				"As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-lesser-demons",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": [
				{
					"headers": [
						"d6",
						"Demons Summoned"
					],
					"rows": [
						[
							"1-2",
							"Two demons of challenge rating 1 or lower"
						],
						[
							"3-4",
							"Four demons of challenge rating 1/2 or lower"
						],
						[
							"5-6",
							"Eight demons of challenge rating 1/4 or lower"
						]
					]
				}
			]
		},
		{
			"href": "/spell:summon-shadowspawn",
			"index": "summon-shadowspawn",
			"slug": "summon-shadowspawn",
			"name": "Summon Shadowspawn",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (tears inside a crystal vial worth at least 300 gp)",
				"materialText": "tears inside a crystal vial worth at least 300 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drop to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after your. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and it uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast the spell using a spell slot of 4th level or higher, use the higher level wherever the spell\u2019s level appears on the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-shadowspawn",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-undead",
			"index": "summon-undead",
			"slug": "summon-undead",
			"name": "Summon Undead",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gilded skull worth at least 300 gp)",
				"materialText": "a gilded skull worth at least 300 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature\u2019s form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-undead",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-warrior-spirit",
			"index": "summon-warrior-spirit",
			"slug": "summon-warrior-spirit",
			"name": "Summon Warrior Spirit (UA)",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gilded playing card depicting a knight worth at least 300 gp)",
				"materialText": "a gilded playing card depicting a knight worth at least 300 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth a warrior spirit from the legendary Deck of Many Things . It manifests in an unoccupied space that you can see within range. This corporeal form uses the Warrior Spirit stat block. When you cast the spell, choose a type of warrior: barbarian, fighter, or monk. The warrior resembles a humanoid armed appropriately to the chosen class, which determines certain traits in its stat block. The warrior disappears when it drops to 0 hit points or when the spell ends.",
				"The warrior is an ally to you and your companions. In combat, the warrior shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that casting wherever it uses the spell\u2019s level in its stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-warrior-spirit",
			"sourceBook": "Unearthed Arcana 85 - Wonders of the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:thunder-step",
			"index": "thunder-step",
			"slug": "thunder-step",
			"name": "Thunder Step",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.",
				"You can bring along objects as long as their weight doesn\u2019t exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:thunder-step",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:tidal-wave",
			"index": "tidal-wave",
			"slug": "tidal-wave",
			"name": "Tidal Wave",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of water)",
				"materialText": "a drop of water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn\u2019t knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tidal-wave",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:tiny-servant",
			"index": "tiny-servant",
			"slug": "tiny-servant",
			"name": "Tiny Servant",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You touch one Tiny, nonmagical object that isn\u2019t attached to another object or a surface and isn\u2019t being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the stat block for its statistics.",
				"As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.",
				"When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tiny-servant",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:tongues",
			"index": "tongues",
			"slug": "tongues",
			"name": "Tongues",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a small clay model of a ziggurat)",
				"materialText": "a small clay model of a ziggurat"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tongues",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:vampiric-touch",
			"index": "vampiric-touch",
			"slug": "vampiric-touch",
			"name": "Vampiric Touch",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"The touch of your shadow-wreathed hand can siphon force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:vampiric-touch",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wall-of-sand",
			"index": "wall-of-sand",
			"slug": "wall-of-sand",
			"name": "Wall of Sand",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a handful of sand)",
				"materialText": "a handful of sand"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall\u2019s space and must spend 3 feet of movement for every 1 foot it moves there."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-sand",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:wall-of-water",
			"index": "wall-of-water",
			"slug": "wall-of-water",
			"name": "Wall of Water",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of water)",
				"materialText": "a drop of water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall\u2019s space is difficult terrain.",
				"Any ranged weapon attack that enters the wall\u2019s space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall\u2019s water doesn\u2019t fill it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-water",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:water-breathing",
			"index": "water-breathing",
			"slug": "water-breathing",
			"name": "Water Breathing",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a short reed or piece of straw)",
				"materialText": "a short reed or piece of straw"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:water-breathing",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:water-walk",
			"index": "water-walk",
			"slug": "water-walk",
			"name": "Water Walk",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of cork)",
				"materialText": "a piece of cork"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Ranger",
				"Sorcerer"
			],
			"description": [
				"This spell grants the ability to move across any liquid surface \u2013 such as water, acid, mud, snow, quicksand, or lava \u2013 as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.",
				"If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:water-walk",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wind-wall",
			"index": "wind-wall",
			"slug": "wind-wall",
			"name": "Wind Wall",
			"level": 3,
			"levelLabel": "3rd Level",
			"levelSlug": "3rd-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny fan and a feather of exotic origin)",
				"materialText": "a tiny fan and a feather of exotic origin"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.",
				"When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.",
				"The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can\u2019t pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can\u2019t pass through it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wind-wall",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:arcane-eye",
			"index": "arcane-eye",
			"slug": "arcane-eye",
			"name": "Arcane Eye",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of bat fur)",
				"materialText": "a bit of bat fur"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.",
				"As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can\u2019t enter another plane of existence. A solid barrier blocks the eye\u2019s movement, but the eye can pass through an opening as small as 1 inch in diameter."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:arcane-eye",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:aura-of-life",
			"index": "aura-of-life",
			"slug": "aura-of-life",
			"name": "Aura of Life",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can\u2019t be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:aura-of-life",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:aura-of-purity",
			"index": "aura-of-purity",
			"slug": "aura-of-purity",
			"name": "Aura of Purity",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can\u2019t become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:aura-of-purity",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:banishment",
			"index": "banishment",
			"slug": "banishment",
			"name": "Banishment",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an item distasteful to the target)",
				"materialText": "an item distasteful to the target"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to send one creature that you can see within range to another place of existence. The target must succeed on a Charisma saving throw or be banished.",
				"If the target is native to the plane of existence you\u2019re on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
				"If the target is native to a different plane of existence that the one you\u2019re on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn\u2019t return."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:banishment",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blight",
			"index": "blight",
			"slug": "blight",
			"name": "Blight",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs.",
				"If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn\u2019t a creature, such as a tree or shrub, it doesn\u2019t make a saving throw; it simply withers and dies."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blight",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:charm-monster",
			"index": "charm-monster",
			"slug": "charm-monster",
			"name": "Charm Monster",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:charm-monster",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:compulsion",
			"index": "compulsion",
			"slug": "compulsion",
			"name": "Compulsion",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard"
			],
			"description": [
				"Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can\u2019t be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving throw to try to end the effect.",
				"A target isn\u2019t compelled to move into an obviously deadly hazard, such as a fire pit, but it will provoke opportunity attacks to move in the designated direction."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:compulsion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:confusion",
			"index": "confusion",
			"slug": "confusion",
			"name": "Confusion",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (three nut shells)",
				"materialText": "three nut shells"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell assaults and twists creatures\u2019 minds, spawning delusions and provoking uncontrolled actions. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.",
				"An affected target can\u2019t take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.",
				"At the end of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:confusion",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"d10",
						"Behavior"
					],
					"rows": [
						[
							"1",
							"The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn\u2019t take an action this turn."
						],
						[
							"2-6",
							"The creature doesn\u2019t move or take actions this turn."
						],
						[
							"7-8",
							"The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn."
						],
						[
							"9-10",
							"The creature can act and move normally."
						]
					]
				}
			]
		},
		{
			"href": "/spell:conjure-barlgura",
			"index": "conjure-barlgura",
			"slug": "conjure-barlgura",
			"name": "Conjure Barlgura (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You summon a barlgura that appears in an unoccupied space you can see within range. The barlgura disappears when it drops to 0 hit points or when the spell ends.",
				"The barlgura is hostile to all non-demons. Roll initiative for the barlgura, which has its own turns. At the start of its turn, it moves toward and attacks the nearest non-demon it can perceive. If two or more creatures are equally near, it picks one at random. If it cannot see any potential enemies, the barlgura moves in a random direction in search of foes.",
				"As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned barlgura cannot cross the circle or target anyone in it while the spell lasts."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-barlgura",
			"sourceBook": "Unearthed Arcana 11 - That Old Black Magic",
			"tables": []
		},
		{
			"href": "/spell:conjure-knowbot",
			"index": "conjure-knowbot",
			"slug": "conjure-knowbot",
			"name": "Conjure Knowbot (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You touch a single computerized device or computer system to conjure a knowbot\u2014a partially sentient piece of software imprinted with vestiges of your own skills and computer abilities. For the duration of the spell, you can use a bonus action to have the knowbot execute a computer related task that would normally require an action. The knowbot makes Intelligence ability checks using your ability score and proficiency bonuses including your proficiency with hacking tools, if applicable.",
				"You have a limited telepathic bond with the knowbot, out to a range of 500 feet from the device or system where the knowbot was conjured. If you move beyond this range, the knowbot disappears in 2d4 rounds, as if the duration of the spell had expired. Moving within range again immediately reestablishes the bond.",
				"The knowbot is bound to the system in which it was created, and it stays there until it is dismissed or the spell\u2019s duration expires."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the spell\u2019s duration increases to 1 hour. Additionally, your telepathic bond with the knowbot is effective out to a range of 1,000 feet, and if you leave the range of the bond, the knowbot continues performing its last directed task until the spell expires."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-knowbot",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:conjure-minor-elementals",
			"index": "conjure-minor-elementals",
			"slug": "conjure-minor-elementals",
			"name": "Conjure Minor Elementals",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Wizard"
			],
			"description": [
				"You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:",
				"An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.",
				"The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don\u2019t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures\u2019 statistics."
			],
			"higherLevel": [
				"When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-minor-elementals",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-shadow-demon",
			"index": "conjure-shadow-demon",
			"slug": "conjure-shadow-demon",
			"name": "Conjure Shadow Demon (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a vial of blood from an intelligent humanoid killed within the past 24 hours)",
				"materialText": "a vial of blood from an intelligent humanoid killed within the past 24 hours"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You summon a shadow demon that appears in an unoccupied space you can see within range. The shadow demon disappears when it drops to 0 hit points or when the spell ends.",
				"Roll initiative for the shadow demon, which has its own turns. You can issue orders to the shadow demon, and it obeys you as long as it can attack a creature on each of its turns and does not start its turn in an area of bright light. If either of these conditions is not met, the shadow demon immediately makes a Charisma check contested by your Charisma check. If you fail the check, the spell no longer requires concentration and the demon is no longer under your control. The demon automatically succeeds on the check if it is more than 100 feet away from you.",
				"As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned shadow demon cannot cross the circle or target anyone in it while the spell lasts."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-shadow-demon",
			"sourceBook": "Unearthed Arcana 11 - That Old Black Magic",
			"tables": []
		},
		{
			"href": "/spell:conjure-woodland-beings",
			"index": "conjure-woodland-beings",
			"slug": "conjure-woodland-beings",
			"name": "Conjure Woodland Beings",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (one holly berry per creature summoned)",
				"materialText": "one holly berry per creature summoned"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:",
				"A summoned creature disappears when it drops to 0 hit points or when the spell ends.",
				"The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don\u2019t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures\u2019 statistics."
			],
			"higherLevel": [
				"When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot, and three times as many with an 8th-level slot."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-woodland-beings",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:control-water",
			"index": "control-water",
			"slug": "control-water",
			"name": "Control Water",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of water and a pinch of dust)",
				"materialText": "a drop of water and a pinch of dust"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.",
				"Flood. You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave\u2019s path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.",
				"Part Water. You cause water in the area to move apart and create a trench. The trench extends across the spell\u2019s area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.",
				"Redirect Flow. You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell\u2019s area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.",
				"Whirlpool. This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC.",
				"When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn\u2019t caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.",
				"The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage, this damage occurs each round it remains in the vortex."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:control-water",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:death-ward",
			"index": "death-ward",
			"slug": "death-ward",
			"name": "Death Ward",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spells ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:death-ward",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dimension-door",
			"index": "dimension-door",
			"slug": "dimension-door",
			"name": "Dimension Door",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "500 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \"200 feet straight downward\" or \"upward to the northwest at a 45-degree angle, 300 feet\".",
				"You can bring along objects as long as their weight doesn\u2019t exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.",
				"If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dimension-door",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:divination",
			"index": "divination",
			"slug": "divination",
			"name": "Divination",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes)",
				"materialText": "incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"Your magic and an offering put you in contact with a god or a god\u2019s servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.",
				"The spell doesn\u2019t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
				"If you cast this spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:divination",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dominate-beast",
			"index": "dominate-beast",
			"slug": "dominate-beast",
			"name": "Dominate Beast",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger",
				"Sorcerer"
			],
			"description": [
				"You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
				"While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \u201cAttack that creature,\u201d \u201cRun over there,\u201d or \u201cFetch that object.\u201d If the creature completes the order and doesn\u2019t receive further direction from you, it defends and preserves itself to the best of its ability.",
				"You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn\u2019t do anything that you don\u2019t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
				"Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 6th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours"
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dominate-beast",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:ego-whip",
			"index": "ego-whip",
			"slug": "ego-whip",
			"name": "Ego Whip (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You lash the mind of one creature you can see within range, filling it with despair. The target must succeed on an Intelligence saving throw or suffer disadvantage on attack rolls, ability checks, and saving throws, and it can\u2019t cast spells. At the end of each of its turns, the target can make another Intelligence saving throw. On a success, the spell ends on the target."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ego-whip",
			"sourceBook": "Unearthed Arcana 66 - Fighter, Rogue, and Wizard",
			"tables": []
		},
		{
			"href": "/spell:elemental-bane",
			"index": "elemental-bane",
			"slug": "elemental-bane",
			"name": "Elemental Bane",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:elemental-bane",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:evards-black-tentacles",
			"index": "evards-black-tentacles",
			"slug": "evards-black-tentacles",
			"name": "Evard's Black Tentacles",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a piece of tentacle from a giant octopus or a giant squid)",
				"materialText": "a piece of tentacle from a giant octopus or a giant squid"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.",
				"When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.",
				"A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:evards-black-tentacles",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:fabricate",
			"index": "fabricate",
			"slug": "fabricate",
			"name": "Fabricate",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "10 Minutes",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.",
				"Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials.",
				"Creatures or magic items can\u2019t be created or transmuted by this spell. You also can\u2019t use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan\u2019s tools used to craft such objects."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fabricate",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:find-greater-steed",
			"index": "find-greater-steed",
			"slug": "find-greater-steed",
			"name": "Find Greater Steed",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "10 Minutes",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak. You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount. The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed. You can\u2019t have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently. Whenever the mount disappears, it leaves behind any objects it was wearing or carrying."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:find-greater-steed",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:fire-shield",
			"index": "fire-shield",
			"slug": "fire-shield",
			"name": "Fire Shield",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of phosphorus or a firefly)",
				"materialText": "a bit of phosphorus or a firefly"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.",
				"The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage.",
				"In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fire-shield",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:freedom-of-movement",
			"index": "freedom-of-movement",
			"slug": "freedom-of-movement",
			"name": "Freedom of Movement",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a leather strap, bound around the arm or a similar appendage)",
				"materialText": "a leather strap, bound around the arm or a similar appendage"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Ranger"
			],
			"description": [
				"You touch a willing creature. For the duration, the target\u2019s movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target\u2019s speed nor cause the target to be paralyzed or restrained.",
				"The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target\u2019s movement or attacks."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:freedom-of-movement",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:galders-speedy-courier",
			"index": "galders-speedy-courier",
			"slug": "galders-speedy-courier",
			"name": "Galder's Speedy Courier",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (25 gold pieces, or mineral goods of equivalent value, which the spell consumes)",
				"materialText": "25 gold pieces, or mineral goods of equivalent value, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature\u2019s body.",
				"As soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet.",
				"The target creature is made aware of the chest\u2019s contents before it chooses whether or not to open it, and knows how much of the spell\u2019s duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet."
			],
			"higherLevel": [
				"When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:galders-speedy-courier",
			"sourceBook": "Lost Laboratory of Kwalish",
			"tables": []
		},
		{
			"href": "/spell:gate-seal",
			"index": "gate-seal",
			"slug": "gate-seal",
			"name": "Gate Seal",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Minute",
			"range": "60 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You fortify the fabric of the planes within a 30-foot cube you can see within range. Within that area, portals close and can't be opened for the duration. Spells and other effects that allow planar travel or open portals such as gate or plane shift, fail if used to enter or leave the area. The cube is stationary. At Higher Levels . When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gate-seal",
			"sourceBook": "Planescape - Adventures in the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:giant-insect",
			"index": "giant-insect",
			"slug": "giant-insect",
			"name": "Giant Insect",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.",
				"Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement.",
				"A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it.",
				"The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:giant-insect",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:grasping-vine",
			"index": "grasping-vine",
			"slug": "grasping-vine",
			"name": "Grasping Vine",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.",
				"Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:grasping-vine",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:gravity-sinkhole",
			"index": "gravity-sinkhole",
			"slug": "gravity-sinkhole",
			"name": "Gravity Sinkhole",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a black marble)",
				"materialText": "a black marble"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"A 20-foot-radius sphere of crushing force forms at a point you can see within range and tugs at the creatures there. Each creature in the sphere must make a Constitution saving throw. On a failed save, the creature takes 5d10 force damage, and is pulled in a straight line toward the center of the sphere, ending in an unoccupied space as close to the center as possible (even if that space is in the air). On a successful save, the creature takes half as much damage and isn't pulled."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gravity-sinkhole",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:greater-invisibility",
			"index": "greater-invisibility",
			"slug": "greater-invisibility",
			"name": "Greater Invisibility",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target\u2019s person."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:greater-invisibility",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:guardian-of-faith",
			"index": "guardian-of-faith",
			"slug": "guardian-of-faith",
			"name": "Guardian of Faith",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.",
				"Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:guardian-of-faith",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:guardian-of-nature",
			"index": "guardian-of-nature",
			"slug": "guardian-of-nature",
			"name": "Guardian of Nature",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.",
				"Primal Beast. Bestial fur covers your body, your facial features become feral, and you gain the following benefits:",
				"Great Tree. Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:guardian-of-nature",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:hallucinatory-terrain",
			"index": "hallucinatory-terrain",
			"slug": "hallucinatory-terrain",
			"name": "Hallucinatory Terrain",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Illusion",
			"castingTime": "10 Minutes",
			"range": "300 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a stone, a twig, and a bit of green plant)",
				"materialText": "a stone, a twig, and a bit of green plant"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren\u2019t changed in appearance.",
				"The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn\u2019t obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hallucinatory-terrain",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:ice-storm",
			"index": "ice-storm",
			"slug": "ice-storm",
			"name": "Ice Storm",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of dust and a few drops of water)",
				"materialText": "a pinch of dust and a few drops of water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.",
				"Hailstones turn the storm\u2019s area of effect into difficult terrain until the end of your next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ice-storm",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:leomunds-secret-chest",
			"index": "leomunds-secret-chest",
			"slug": "leomunds-secret-chest",
			"name": "Leomund's Secret Chest",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp)",
				"materialText": "an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).",
				"While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.",
				"After 60 days, there is a cumulative 5 percent chance per day that the spell\u2019s effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:leomunds-secret-chest",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:locate-creature",
			"index": "locate-creature",
			"slug": "locate-creature",
			"name": "Locate Creature",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fur from a bloodhound)",
				"materialText": "a bit of fur from a bloodhound"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Ranger",
				"Wizard"
			],
			"description": [
				"Describe or name a creature that is familiar to you. You sense the direction to the creature\u2019s location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.",
				"The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close \u2013 within 30 feet \u2013 at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn\u2019t locate the creature.",
				"This spell can\u2019t locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:locate-creature",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mordenkainens-faithful-hound",
			"index": "mordenkainens-faithful-hound",
			"slug": "mordenkainens-faithful-hound",
			"name": "Mordenkainen's Faithful Hound",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny silver whistle, a piece of bone, and a thread)",
				"materialText": "a tiny silver whistle, a piece of bone, and a thread"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.",
				"The hound is invisible to all creatures except you and can\u2019t be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.",
				"At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound\u2019s attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mordenkainens-faithful-hound",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mordenkainens-private-sanctum",
			"index": "mordenkainens-private-sanctum",
			"slug": "mordenkainens-private-sanctum",
			"name": "Mordenkainen's Private Sanctum",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "10 minutes",
			"range": "120 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite)",
				"materialText": "a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.",
				"When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:",
				"Casting this spell on the same spot every day for a year makes this effect permanent."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mordenkainens-private-sanctum",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:otilukes-resilient-sphere",
			"index": "otilukes-resilient-sphere",
			"slug": "otilukes-resilient-sphere",
			"name": "Otiluke's Resilient Sphere",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic)",
				"materialText": "a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.",
				"Nothing \u2013 not physical objects, energy, or other spell effects \u2013 can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can\u2019t be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.",
				"The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere\u2019s walls and thus roll the sphere at up to half the creature\u2019s speed. Similarly, the globe can be picked up and moved by other creatures.",
				"A Disintegrate spell targeting the globe destroys it without harming anything inside it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:otilukes-resilient-sphere",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:phantasmal-killer",
			"index": "phantasmal-killer",
			"slug": "phantasmal-killer",
			"name": "Phantasmal Killer",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature.",
				"The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of the target\u2019s turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:phantasmal-killer",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:polymorph",
			"index": "polymorph",
			"slug": "polymorph",
			"name": "Polymorph",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a caterpillar cocoon)",
				"materialText": "a caterpillar cocoon"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.",
				"The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target\u2019s (or the target\u2019s level, if it doesn\u2019t have a challenge rating). The target\u2019s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.",
				"The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn\u2019t reduce the creature\u2019s normal form to 0 hit points, it isn\u2019t knocked unconscious.",
				"The creature is limited in the actions it can perform by the nature of its new form, and it can\u2019t speak, cast spells, or take any other action that requires hands or speech.",
				"The target\u2019s gear melds into the new form. The creature can\u2019t activate, use, wield, or otherwise benefit from any of its equipment. This spell can\u2019t affect a target that has 0 hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:polymorph",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:raulothims-psychic-lance",
			"index": "raulothims-psychic-lance",
			"slug": "raulothims-psychic-lance",
			"name": "Raulothim's Psychic Lance",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter a creature\u2019s name. If the named target is within range, it becomes the spell\u2019s target even if you can\u2019t see it. If the named target isn\u2019t within range, the lance dissipates without effect.",
				"The target must make an Intelligence saving throw. On a failed save, the target takes 7d6 psychic damage and is incapacitated until the start of your next turn. On a successful save, the creature takes half as much damage and isn\u2019t incapacitated."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:raulothims-psychic-lance",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": []
		},
		{
			"href": "/spell:raulothims-psychic-lance-ua",
			"index": "raulothims-psychic-lance-ua",
			"slug": "raulothims-psychic-lance-ua",
			"name": "Raulothim's Psychic Lance (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter the creature\u2019s name. If the named target is within range, it gains no benefit from cover or invisibility as the lance homes in on it. If the named target isn\u2019t within range, the lance dissipates, and the spell slot is not expended.",
				"The target must succeed on an Intelligence saving throw or take 10d6 psychic damage and be incapacitated until the start of your next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:raulothims-psychic-lance-ua",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": []
		},
		{
			"href": "/spell:shadow-of-moil",
			"index": "shadow-of-moil",
			"slug": "shadow-of-moil",
			"name": "Shadow Of Moil",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an undead eyeball encased in a gem worth at least 150 gp)",
				"materialText": "an undead eyeball encased in a gem worth at least 150 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock"
			],
			"description": [
				"Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.",
				"Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shadow-of-moil",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:sickening-radiance",
			"index": "sickening-radiance",
			"slug": "sickening-radiance",
			"name": "Sickening Radiance",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 Feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.",
				"When a creature moves into the spell\u2019s area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sickening-radiance",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:spirit-of-death",
			"index": "spirit-of-death",
			"slug": "spirit-of-death",
			"name": "Spirit Of Death",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gilded playing card worth at least 400 gp and depicting an avatar of death)",
				"materialText": "a gilded playing card worth at least 400 gp and depicting an avatar of death"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth a spirit that embodies death. The spirit manifests in an unoccupied space you can see within range and uses the reaper spirit stat block. The spirit disappears when it is reduced to 0 hit points or when the spell ends.",
				"The spirit is an ally to you and your companions. In combat, the spirit shares your initiative count and takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue the spirit any commands, it takes the Dodge action and uses its movement to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell\u2019s level appears in the reaper spirit stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spirit-of-death",
			"sourceBook": "The Book of Many Things",
			"tables": []
		},
		{
			"href": "/spell:spirit-of-death-ua",
			"index": "spirit-of-death-ua",
			"slug": "spirit-of-death-ua",
			"name": "Spirit of Death (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gilded playing card depicting an avatar of death worth at least 400 gp)",
				"materialText": "a gilded playing card depicting an avatar of death worth at least 400 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth a spirit that embodies death itself. Choose a creature you can see within range. The spirit manifests in an unoccupied space that you can see within 10 feet of the target, and the target becomes haunted by the spirit. The spirit uses the Reaper Spirit stat block. The spirit disappears when it or the haunted creature is reduced to 0 hit points, or when the spell ends.",
				"The reaper spirit is an ally to you and your companions. In combat, the spirit shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you), but it will only attack the haunted creature. If you don\u2019t issue the spirit any commands, it takes the Dodge action and uses its move to avoid danger"
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:spirit-of-death-ua",
			"sourceBook": "Unearthed Arcana 85 - Wonders of the Multiverse",
			"tables": []
		},
		{
			"href": "/spell:staggering-smite",
			"index": "staggering-smite",
			"slug": "staggering-smite",
			"name": "Staggering Smite",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"The next time you hit a creature with a melee weapon attack during this spell\u2019s duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can\u2019t take reactions, until the end of its next turn."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:staggering-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:stone-shape",
			"index": "stone-shape",
			"slug": "stone-shape",
			"name": "Stone Shape",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (soft clay, which must be worked into roughly the desired shape of the stone object)",
				"materialText": "soft clay, which must be worked into roughly the desired shape of the stone object"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn\u2019t possible."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:stone-shape",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:stoneskin",
			"index": "stoneskin",
			"slug": "stoneskin",
			"name": "Stoneskin",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (diamond dust worth 100 gp, which the spell consumes)",
				"materialText": "diamond dust worth 100 gp, which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Ranger",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:stoneskin",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:storm-sphere",
			"index": "storm-sphere",
			"slug": "storm-sphere",
			"name": "Storm Sphere",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell\u2019s duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere\u2019s space is difficult terrain.",
				"Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.",
				"Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:storm-sphere",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-aberration",
			"index": "summon-aberration",
			"slug": "summon-aberration",
			"name": "Summon Aberration",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pickled tentacle and an eyeball in a platinum inlaid vial worth at least 400 gp)",
				"materialText": "a pickled tentacle and an eyeball in a platinum inlaid vial worth at least 400 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it take the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears on the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-aberration",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-construct",
			"index": "summon-construct",
			"slug": "summon-construct",
			"name": "Summon Construct",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an ornate stone and metal lockbox worth at least 400 gp)",
				"materialText": "an ornate stone and metal lockbox worth at least 400 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-construct",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-elemental",
			"index": "summon-elemental",
			"slug": "summon-elemental",
			"name": "Summon Elemental",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp)",
				"materialText": "air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger",
				"Wizard"
			],
			"description": [
				"You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-elemental",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-greater-demon",
			"index": "summon-greater-demon",
			"slug": "summon-greater-demon",
			"name": "Summon Greater Demon",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
				"materialText": "a vial of blood from a humanoid killed within the past 24 hours"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon\u2019s type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.",
				"Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.",
				"At the end of each of the demon\u2019s turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn\u2019t disappear for 1d6 rounds if it still has hit points.",
				"As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can\u2019t cross the circle or harm it, and it can\u2019t target anyone within it. Using the material component in this manner consumes it when the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-greater-demon",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:synchronicity",
			"index": "synchronicity",
			"slug": "synchronicity",
			"name": "Synchronicity (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"The creature you touch feels reality subtly shifted to its favor while this spell is in effect. The target isn't inconvenienced by mundane delays of any sort. Traffic lights are always green, there's always a waiting elevator, and a taxi is always around the corner. The target can run at full speed through dense crowds, and attacks of opportunity provoked by the target's movement are made with disadvantage.",
				"Synchronicity grants advantage to Dexterity (Stealth) checks, since the target always finds a handy piece of cover available. Additionally, the target has advantage on all ability checks made to drive a vehicle.",
				"In the event that two or more creatures under the effect of synchronicity are attempting to avoid being inconvenienced by each other, the creatures engage in a contest of Charisma each time the effects of the spells would oppose each other."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:synchronicity",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:system-backdoor",
			"index": "system-backdoor",
			"slug": "system-backdoor",
			"name": "System Backdoor (UA)",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Transmutation",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (hacking tools)",
				"materialText": "hacking tools"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell allows you to bypass system security in order to create a secure login on a foreign system. The login you create allows you administrator-level privileges in any computer system not enhanced through technomagic. The login defeats any technomagic spells of 3rd level or lower.",
				"Once the duration of the spell expires, the login and all privileges are wiped from the system. System logs still show the activity of the user, but the user identification cannot be found or traced."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, you are able to bypass technomagic spells if the spell\u2019s level is equal to or less than the level of the spell slot you used."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:system-backdoor",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:vitriolic-sphere",
			"index": "vitriolic-sphere",
			"slug": "vitriolic-sphere",
			"name": "Vitriolic Sphere",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of giant slug bile)",
				"materialText": "a drop of giant slug bile"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You point at a place within range, and a glowing 1-foot ball of emerald acid streaks there and explodes in a 20-foot radius. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:vitriolic-sphere",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:wall-of-fire",
			"index": "wall-of-fire",
			"slug": "wall-of-fire",
			"name": "Wall of Fire",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small piece of phosphorus)",
				"materialText": "a small piece of phosphorus"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.",
				"When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.",
				"One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-fire",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:watery-sphere",
			"index": "watery-sphere",
			"slug": "watery-sphere",
			"name": "Watery Sphere",
			"level": 4,
			"levelLabel": "4th Level",
			"levelSlug": "4th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a droplet of water)",
				"materialText": "a droplet of water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You conjure up a sphere of water with a 5-foot radius on a point you can see within range. The sphere can hover in the air, but no more than 10 feet off the ground. The sphere remains for the spell\u2019s duration.",
				"Any creature in the sphere\u2019s space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space outside it. A Huge or larger creature succeeds on the saving throw automatically. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw.",
				"The sphere can restrain a maximum of four Medium or smaller creatures or one Large creature. If the sphere restrains a creature in excess of these numbers, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.",
				"As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, cliff, or other drop, it safely descends until it is hovering 10 feet over ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw, but no more than once per turn.",
				"When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:watery-sphere",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:animate-objects",
			"index": "animate-objects",
			"slug": "animate-objects",
			"name": "Animate Objects",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can\u2019t animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.",
				"As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
				"An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the objects lack legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.",
				"If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:animate-objects",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"caption": "Animated Object Statistics",
					"headers": [
						"Size",
						"HP",
						"AC",
						"Attack",
						"Ability Scores"
					],
					"rows": [
						[
							"Tiny",
							"20",
							"18",
							"+8 to hit, 1d4 + 4 damage",
							"Str: 4, Dex: 18"
						],
						[
							"Small",
							"25",
							"16",
							"+6 to hit, 1d8 + 2 damage",
							"Str: 6, Dex: 14"
						],
						[
							"Medium",
							"40",
							"13",
							"+5 to hit, 2d6 + 1 damage",
							"Str: 10, Dex: 12"
						],
						[
							"Large",
							"50",
							"10",
							"+6 to hit, 2d10 + 2 damage",
							"Str: 14, Dex: 10"
						],
						[
							"Huge",
							"80",
							"10",
							"+8 to hit, 2d12 + 4 damage",
							"Str: 18, Dex: 6"
						]
					]
				}
			]
		},
		{
			"href": "/spell:antilife-shell",
			"index": "antilife-shell",
			"slug": "antilife-shell",
			"name": "Antilife Shell",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self (10-foot radius)",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs.",
				"The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.",
				"If you move so that an affected creature is forced to pass through the barrier, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:antilife-shell",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:awaken",
			"index": "awaken",
			"slug": "awaken",
			"name": "Awaken",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "8 Hours",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an agate worth at least 1,000 gp, which the spell consumes)",
				"materialText": "an agate worth at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid"
			],
			"description": [
				"After spending the casting time tracing magical pathways within a precious gemstone, you touch a huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less.",
				"The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human\u2019s. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.",
				"The awakened beast or plant is charmed by you for 30 days or until you and your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:awaken",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:banishing-smite",
			"index": "banishing-smite",
			"slug": "banishing-smite",
			"name": "Banishing Smite",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Abjuration",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the one you\u2019re on, the target disappears, returning to its home plane. If the target is native to the plane you\u2019re on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:banishing-smite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:bigbys-hand",
			"index": "bigbys-hand",
			"slug": "bigbys-hand",
			"name": "Bigby's Hand",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an eggshell and a snakeskin glove)",
				"materialText": "an eggshell and a snakeskin glove"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell\u2019s duration, and it moves at your command, mimicking the movements of your own hand.",
				"The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn\u2019t fill its space.",
				"When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:bigbys-hand",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:circle-of-power",
			"index": "circle-of-power",
			"slug": "circle-of-power",
			"name": "Circle of Power",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects.",
				"Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throws."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:circle-of-power",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:cloudkill",
			"index": "cloudkill",
			"slug": "cloudkill",
			"name": "Cloudkill",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.",
				"When a creature enters the spell\u2019s area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don\u2019t need to breathe.",
				"The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:cloudkill",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:commune",
			"index": "commune",
			"slug": "commune",
			"name": "Commune",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (incense and a vial of holy or unholy water)",
				"materialText": "incense and a vial of holy or unholy water"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric"
			],
			"description": [
				"You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.",
				"Divine beings aren\u2019t necessarily omniscient, so you might receive \u201cunclear\u201d as an answer if a question pertains to information that lies beyond the deity\u2019s knowledge. In a case where a one-word answer could be misleading or contrary to the deity\u2019s interests, the DM might offer a short phrase as an answer instead.",
				"If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:commune",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:commune-with-city",
			"index": "commune-with-city",
			"slug": "commune-with-city",
			"name": "Commune with City (UA)",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You briefly become one with the city and gain knowledge of the surrounding area. Aboveground, this spell gives you knowledge of the area within 1 mile of you. In sewers and other underground settings, you gain knowledge of the area within 600 feet of you.",
				"You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:",
				"For example, you could determine the location of powerful undead in the area, the location of major sources of electrical power or interference, and the location of any nearby parks."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:commune-with-city",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:commune-with-nature",
			"index": "commune-with-nature",
			"slug": "commune-with-nature",
			"name": "Commune with Nature",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn\u2019t function where nature has been replaced by construction, such as in dungeons and towns.",
				"You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:",
				"For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:commune-with-nature",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:cone-of-cold",
			"index": "cone-of-cold",
			"slug": "cone-of-cold",
			"name": "Cone of Cold",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (60-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small crystal or glass cone)",
				"materialText": "a small crystal or glass cone"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:cone-of-cold",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-elemental",
			"index": "conjure-elemental",
			"slug": "conjure-elemental",
			"name": "Conjure Elemental",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)",
				"materialText": "burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Wizard"
			],
			"description": [
				"You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.",
				"The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don\u2019t issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.",
				"If your concentration is broken, the elemental doesn\u2019t disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can\u2019t be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the elemental\u2019s statistics."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-elemental",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-volley",
			"index": "conjure-volley",
			"slug": "conjure-volley",
			"name": "Conjure Volley",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (one piece of ammunition or one thrown weapon)",
				"materialText": "one piece of ammunition or one thrown weapon"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius, 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-volley",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-vrock",
			"index": "conjure-vrock",
			"slug": "conjure-vrock",
			"name": "Conjure Vrock (UA)",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gem worth at least 100 gp, which the spell consumes)",
				"materialText": "a gem worth at least 100 gp, which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You summon a vrock that appears in an unoccupied space you can see within range. The vrock disappears when it drops to 0 hit points or when the spell ends.",
				"The vrock\u2019s attitude depends on the value of the gem used as a material component for this spell. Roll initiative for the vrock, which has its own turns. At the start of the vrock\u2019s turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the gem\u2019s value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the vrock and have it obey you as long as you succeed on the Charisma check.",
				"If the check fails, the spell no longer requires concentration and the vrock is no longer under your control. The vrock takes no actions on its next turn and uses its telepathy to tell any creature it can see that it will fight in exchange for treasure. The creature that gives the vrock the most expensive gem can command it for the next 1d6 rounds. At the end of that time, it offers the bargain again. If no one offers the vrock treasure before its next turn begins, it attacks the nearest creatures for 1d6 rounds before returning to the Abyss.",
				"As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned vrock cannot cross the circle or target anyone in it while the spell lasts."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-vrock",
			"sourceBook": "Unearthed Arcana 11 - That Old Black Magic",
			"tables": []
		},
		{
			"href": "/spell:contact-other-plane",
			"index": "contact-other-plane",
			"slug": "contact-other-plane",
			"name": "Contact Other Plane",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can\u2019t take actions, can\u2019t understand what other creatures say, can\u2019t read, and speak only in gibberish. A Greater Restoration spell cast on you ends this effect.",
				"On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as \"yes,\" \"no,\" \"maybe,\" \"never,\" \"irrelevant,\" or \"unclear\" (if the entity doesn\u2019t know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:contact-other-plane",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:contagion",
			"index": "contagion",
			"slug": "contagion",
			"name": "Contagion",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "7 days",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid"
			],
			"description": [
				"Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, the target is poisoned.",
				"At the end of each of the poisoned target\u2019s turns, the target must make a Constitution saving throw. If the target succeeds on three of these saves, it is no longer poisoned, and the spell ends. If the target fails three of these saves, the target is no longer poisoned, but choose one of the diseases below. The target is subjected to the chosen disease for the spell\u2019s duration.",
				"Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease\u2019s effects apply to it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:contagion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:control-winds",
			"index": "control-winds",
			"slug": "control-winds",
			"name": "Control Winds",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell\u2019s duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you\u2019ve halted."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:control-winds",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:create-spelljamming-helm",
			"index": "create-spelljamming-helm",
			"slug": "create-spelljamming-helm",
			"name": "Create Spelljamming Helm",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a crystal rod worth at least 5000 gp, which the spell consumes)",
				"materialText": "a crystal rod worth at least 5000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Wizard"
			],
			"description": [
				"Holding the rod used in the casting of the spell, you touch a Large or smaller chair that is unoccupied. The rod disappears, and the chair is transformed into a Spelljamming Helm ."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-spelljamming-helm",
			"sourceBook": "Spelljammer: Adventures in Space - Astral Adventurer's Guide",
			"tables": []
		},
		{
			"href": "/spell:creation",
			"index": "creation",
			"slug": "creation",
			"name": "Creation",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Illusion",
			"castingTime": "1 Minute",
			"range": "30 feet",
			"duration": "Special",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny piece of matter of the same type of the item you plan to create)",
				"materialText": "a tiny piece of matter of the same type of the item you plan to create"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.",
				"The duration depends on the object\u2019s material. If the object is composed of multiple materials, use the shortest duration.",
				"Using any material created by this spell as another spell\u2019s material component causes that spell to fail."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:creation",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"Material",
						"Duration"
					],
					"rows": [
						[
							"Vegetable matter",
							"1 day"
						],
						[
							"Stone, crystal",
							"12 hours"
						],
						[
							"Precious metals",
							"1 hour"
						],
						[
							"Gems",
							"10 minutes"
						],
						[
							"Adamantine, Mithral",
							"1 minute"
						]
					]
				}
			]
		},
		{
			"href": "/spell:danse-macabre",
			"index": "danse-macabre",
			"slug": "danse-macabre",
			"name": "Danse Macabre",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier. You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.",
				"The creatures are under your control until the spell ends, after which they become inanimate once more."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:danse-macabre",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:dawn",
			"index": "dawn",
			"slug": "dawn",
			"name": "Dawn",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 Feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sunburst pendant worth at least 100 gp)",
				"materialText": "a sunburst pendant worth at least 100 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Wizard"
			],
			"description": [
				"The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight. When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder. If you\u2019re within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dawn",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:destructive-wave",
			"index": "destructive-wave",
			"slug": "destructive-wave",
			"name": "Destructive Wave",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (30-foot radius)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Paladin"
			],
			"description": [
				"You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn\u2019t knocked prone."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:destructive-wave",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dispel-evil-and-good",
			"index": "dispel-evil-and-good",
			"slug": "dispel-evil-and-good",
			"name": "Dispel Evil and Good",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (holy water or powdered silver and iron)",
				"materialText": "holy water or powdered silver and iron"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dispel-evil-and-good",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dominate-person",
			"index": "dominate-person",
			"slug": "dominate-person",
			"name": "Dominate Person",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
				"While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature\", \"Run over there\", or \"Fetch that object\". If the creature completes the order and doesn\u2019t receive further direction from you, it defends and preserves itself to the best of its ability.",
				"You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn\u2019t do anything that you don\u2019t allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
				"Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dominate-person",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dream",
			"index": "dream",
			"slug": "dream",
			"name": "Dream",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Illusion",
			"castingTime": "1 Minute",
			"range": "Special",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird)",
				"materialText": "a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell shapes a creature\u2019s dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don\u2019t sleep, such as elves, can\u2019t be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of their surroundings, but can\u2019t take actions or move.",
				"If the target is asleep, the messenger appears in the target\u2019s dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target\u2019s dreams.",
				"You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target\u2019s sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.",
				"If you have a body part, lock of hair, clipping from a nail, or similar portion of the target\u2019s body, the target makes its saving throw with disadvantage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dream",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:enervation",
			"index": "enervation",
			"slug": "enervation",
			"name": "Enervation",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell\u2019s range, or if the target has total cover from you. Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:enervation",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:far-step",
			"index": "far-step",
			"slug": "far-step",
			"name": "Far Step",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:far-step",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:flame-strike",
			"index": "flame-strike",
			"slug": "flame-strike",
			"name": "Flame Strike",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (pinch of sulfur)",
				"materialText": "pinch of sulfur"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flame-strike",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:geas",
			"index": "geas",
			"slug": "geas",
			"name": "Geas",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Enchantment",
			"castingTime": "1 Minute",
			"range": "60 feet",
			"duration": "30 days",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Paladin",
				"Wizard"
			],
			"description": [
				"You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide.",
				"If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can\u2019t understand you is unaffected by the spell.",
				"You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. You can end the spell early by using an action to dismiss it. A Remove Curse , Greater Restoration , or Wish spell also ends it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:geas",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:greater-restoration",
			"index": "greater-restoration",
			"slug": "greater-restoration",
			"name": "Greater Restoration",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (diamond dust worth at least 100 gp, which the spell consumes)",
				"materialText": "diamond dust worth at least 100 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Cleric",
				"Druid",
				"Ranger"
			],
			"description": [
				"You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target\u2019s exhaustion level by one, or end one of the following effects on the target:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:greater-restoration",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hallow",
			"index": "hallow",
			"slug": "hallow",
			"name": "Hallow",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "24 Hours",
			"range": "Touch",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (herbs, oils, and incense worth at least 1,000 gp, which the spell consumes)",
				"materialText": "herbs, oils, and incense worth at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects.",
				"First, celestials, elementals, fey, fiends, and undead can\u2019t enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.",
				"Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as orcs or trolls. When a creature that would be affected enters the spell\u2019s area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hallow",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:hold-monster",
			"index": "hold-monster",
			"slug": "hold-monster",
			"name": "Hold Monster",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small, straight piece of iron)",
				"materialText": "a small, straight piece of iron"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:hold-monster",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:holy-weapon",
			"index": "holy-weapon",
			"slug": "holy-weapon",
			"name": "Holy Weapon",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn\u2019t already a magic weapon, it becomes one for the duration. As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn\u2019t blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:holy-weapon",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:immolation",
			"index": "immolation",
			"slug": "immolation",
			"name": "Immolation",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell\u2019s duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can\u2019t be extinguished by nonmagical means.",
				"If damage from this spell kills a target, the target is turned to ash."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:immolation",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:infernal-calling",
			"index": "infernal-calling",
			"slug": "infernal-calling",
			"name": "Infernal Calling",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a ruby worth at least 999 gp)",
				"materialText": "a ruby worth at least 999 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil\u2019s type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.",
				"The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master\u2019s control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature\u2019s statistics.",
				"On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil\u2019s true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command\u2014 such as \u201cattack my enemies,\u201d \u201cexplore the room ahead,\" or \u201cbear this message to the queen\"\u2014until it completes the activity, at which point it returns to you to report having done so.",
				"If your concentration ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears.",
				"If you possess an individual devil\u2019s talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required.",
				"At Higher Levels When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:infernal-calling",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:insect-plague",
			"index": "insect-plague",
			"slug": "insect-plague",
			"name": "Insect Plague",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)",
				"materialText": "a few grains of sugar, some kernels of grain, and a smear of fat"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Sorcerer"
			],
			"description": [
				"Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere\u2019s area is difficult terrain.",
				"When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell\u2019s area for the first time on a turn or ends its turn there."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:insect-plague",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:legend-lore",
			"index": "legend-lore",
			"slug": "legend-lore",
			"name": "Legend Lore",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "10 Minutes",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each)",
				"materialText": "incense worth at least 250 gp, which the spell consumes, and four ivory strips worth at least 50 gp each"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Wizard"
			],
			"description": [
				"Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn\u2019t of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.",
				"The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:legend-lore",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:maelstrom",
			"index": "maelstrom",
			"slug": "maelstrom",
			"name": "Maelstrom",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (paper or leaf in the shape of a funnel)",
				"materialText": "paper or leaf in the shape of a funnel"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:maelstrom",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:mass-cure-wounds",
			"index": "mass-cure-wounds",
			"slug": "mass-cure-wounds",
			"name": "Mass Cure Wounds",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid"
			],
			"description": [
				"A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mass-cure-wounds",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mislead",
			"index": "mislead",
			"slug": "mislead",
			"name": "Mislead",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.",
				"You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.",
				"You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mislead",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:modify-memory",
			"index": "modify-memory",
			"slug": "modify-memory",
			"name": "Modify Memory",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You attempt to reshape another creature\u2019s memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target\u2019s memories are modified.",
				"While this charm lasts, you can affect the target\u2019s memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.",
				"You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature\u2019s memory isn\u2019t altered. Otherwise, the modified memories take hold when the spell ends.",
				"A modified memory doesn\u2019t necessarily affect how a creature behaves, particularly if the memory contradicts the creature\u2019s natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.",
				"A Remove Curse or Greater Restoration spell cast on the target restores the creature\u2019s true memory."
			],
			"higherLevel": [
				"If you cast this spell using a spell slot of 6th level or higher, you can alter the target\u2019s memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature\u2019s past (9th level)."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:modify-memory",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:negative-energy-flood",
			"index": "negative-energy-flood",
			"slug": "negative-energy-flood",
			"name": "Negative Energy Flood",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a broken bone and a square of black silk)",
				"materialText": "a broken bone and a square of black silk"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual. If you target an undead with this spell, the target doesn\u2019t make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:negative-energy-flood",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:passwall",
			"index": "passwall",
			"slug": "passwall",
			"name": "Passwall",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of sesame seeds)",
				"materialText": "a pinch of sesame seeds"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening\u2019s dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.",
				"When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:passwall",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:planar-binding",
			"index": "planar-binding",
			"slug": "planar-binding",
			"name": "Planar Binding",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Abjuration",
			"castingTime": "1 Hour",
			"range": "60 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a jewel worth at least 1,000 gp, which the spell consumes)",
				"materialText": "a jewel worth at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Warlock",
				"Wizard"
			],
			"description": [
				"With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted Magic Circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell\u2019s duration is extended to match the duration of this spell.",
				"A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, 30 days with a 7th-level slot, 180 days with an 8th-level slot, or 1 year and 1 day with a 9th-level spell slot."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:planar-binding",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:raise-dead",
			"index": "raise-dead",
			"slug": "raise-dead",
			"name": "Raise Dead",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Necromancy",
			"castingTime": "1 Hour",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
				"materialText": "a diamond worth at least 500 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Paladin"
			],
			"description": [
				"You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature\u2019s soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.",
				"This spell also neutralizes any poison and cures nonmagical diseases that affected the creature at the time it died. This spell doesn\u2019t, however, remove magical diseases, curses, or similar effects; if these aren\u2019t first removed prior to casting the spell, they take effect when the creature returns to life. The spell can\u2019t return an undead creature to life.",
				"This spell closes all mortal wounds, but it doesn\u2019t restore missing body parts. If the creature is lacking body parts or organs integral for its survival \u2013 its head, for instance \u2013 the spell automatically fails.",
				"Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:raise-dead",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:rarys-telepathic-bond",
			"index": "rarys-telepathic-bond",
			"slug": "rarys-telepathic-bond",
			"name": "Rary's Telepathic Bond",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (pieces of eggshell from two different kinds of creatures)",
				"materialText": "pieces of eggshell from two different kinds of creatures"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren\u2019t affected by this spell.",
				"Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can\u2019t extend to other planes of existence."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:rarys-telepathic-bond",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:reincarnate",
			"index": "reincarnate",
			"slug": "reincarnate",
			"name": "Reincarnate",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 hour",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (rare oils and unguents worth at least 1,000 gp, which the spell consumes)",
				"materialText": "rare oils and unguents worth at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target\u2019s soul isn\u2019t free or willing to do so, the spell fails.",
				"The magic fashions a new body for the creature to inhabit, which likely causes the creature\u2019s race to change. The DM rolls a d100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form.",
				"The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:reincarnate",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"caption": "Reincarnation Table",
					"headers": [
						"d100",
						"Race"
					],
					"rows": [
						[
							"01-04",
							"Dragonborn"
						],
						[
							"05-13",
							"Dwarf, hill"
						],
						[
							"14-21",
							"Dwarf, mountain"
						],
						[
							"22-25",
							"Elf, dark"
						],
						[
							"26-34",
							"Elf, high"
						],
						[
							"35-42",
							"Elf, wood"
						],
						[
							"43-46",
							"Gnome, forest"
						],
						[
							"47-52",
							"Gnome, rock"
						],
						[
							"53-56",
							"Half-elf"
						],
						[
							"57-60",
							"Half-orc"
						],
						[
							"61-68",
							"Halfling, lightfoot"
						],
						[
							"69-76",
							"Halfling, stout"
						],
						[
							"77-96",
							"Human"
						],
						[
							"97-00",
							"Tiefling"
						]
					]
				}
			]
		},
		{
			"href": "/spell:scrying",
			"index": "scrying",
			"slug": "scrying",
			"name": "Scrying",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Divination",
			"castingTime": "10 Minutes",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water)",
				"materialText": "a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you\u2019re casting this spell, it can fail the saving throw voluntarily if it wants to be observed.",
				"On a successful save, the target isn\u2019t affected, and you can\u2019t use this spell against it again for 24 hours.",
				"On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.",
				"Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn\u2019t move."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:scrying",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"Knowledge",
						"Save Modifier"
					],
					"rows": [
						[
							"Secondhand (you have heard of the target)",
							"+5"
						],
						[
							"Firsthand (you have met the target)",
							"+0"
						],
						[
							"Familiar (you know the target well)",
							"-5"
						]
					]
				},
				{
					"headers": [
						"Connection",
						"Save Modifier"
					],
					"rows": [
						[
							"Likeness or picture",
							"-2"
						],
						[
							"Possession or garment",
							"-4"
						],
						[
							"Body part, lock of hair, bit of nail, or the like",
							"-10"
						]
					]
				}
			]
		},
		{
			"href": "/spell:seeming",
			"index": "seeming",
			"slug": "seeming",
			"name": "Seeming",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.",
				"The spell disguises physical appearances as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in-between. You can\u2019t change a target\u2019s body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.",
				"The changes wrought by this spell fail to hold up to physical inspections. For example, if you use this spell to add a hat to a creature\u2019s outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature\u2019s head and hair. If you use this spell to appear thinner then you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.",
				"A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:seeming",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:shutdown",
			"index": "shutdown",
			"slug": "shutdown",
			"name": "Shutdown (UA)",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell shuts down all electronic devices within range that are not wielded by or under the direct control of a creature. If an electronic device within range is used by a creature, that creature must succeed on a Constitution saving throw to prevent the device from being shut down. While the spell remains active, no electronic device within range can be started or restarted."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shutdown",
			"sourceBook": "Unearthed Arcana 7 - Modern Magic",
			"tables": []
		},
		{
			"href": "/spell:skill-empowerment",
			"index": "skill-empowerment",
			"slug": "skill-empowerment",
			"name": "Skill Empowerment",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Your magic deepens a creature\u2019s understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.",
				"You must choose a skill in which the target is proficient and that isn\u2019t already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:skill-empowerment",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:steel-wind-strike",
			"index": "steel-wind-strike",
			"slug": "steel-wind-strike",
			"name": "Steel Wind Strike",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": true,
				"raw": "S, M (a melee weapon worth at least 1 sp)",
				"materialText": "a melee weapon worth at least 1 sp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Ranger",
				"Wizard"
			],
			"description": [
				"You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage.",
				"You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:steel-wind-strike",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-celestial",
			"index": "summon-celestial",
			"slug": "summon-celestial",
			"name": "Summon Celestial",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a golden reliquary worth at least 500 gp)",
				"materialText": "a golden reliquary worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Paladin"
			],
			"description": [
				"You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature\u2019s attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, use the higher level whenever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-celestial",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-draconic-spirit",
			"index": "summon-draconic-spirit",
			"slug": "summon-draconic-spirit",
			"name": "Summon Draconic Spirit",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an object with the image of a dragon engraved on it, worth at least 500 gp)",
				"materialText": "an object with the image of a dragon engraved on it, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: chromatic, gem, or metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-draconic-spirit",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": [
				{
					"caption": "Draconic Spirit",
					"headers": [],
					"rows": [
						[
							"Large Dragon, Neutral"
						],
						[
							"Armor Class 14 + the level of the spell (natural armor)"
						],
						[
							"Hit Points 50 + 10 for each spell level above 5th (the dragon has a number of hit dice [d10s] equal to the level of the spell)"
						],
						[
							"Speed 30 ft., fly 60 ft., swim 30 ft."
						],
						[
							"STR",
							"DEX",
							"CON",
							"INT",
							"WIS",
							"CHA"
						],
						[
							"19 (+4)",
							"14 (+2)",
							"17 (+3)",
							"10 (+0)",
							"14 (+2)",
							"14 (+2)"
						],
						[
							"Damage Resistances(Chromatic and Metallic Only) acid, cold, fire, lightning, poison"
						],
						[
							"Damage Resistances(Gem Only) force, necrotic, psychic, radiant, thunder"
						],
						[
							"Condition Immunities charmed, frightened, poisoned"
						],
						[
							"Senses blindsight 30 ft., darkvision 60 ft., passive Perception 12"
						],
						[
							"Languages Draconic, understands the languages you speak"
						],
						[
							"Challenge \u2014 Proficiency Bonus (PB) equals your bonus"
						],
						[
							"Shared Resistances. When you summon the dragon, choose one of its damage resistances. You have resistance to the chosen damage type until the spell ends"
						],
						[
							"Actions"
						],
						[
							"Multiattack. The dragon makes a number of Rend attacks equal to half the spell\u2019s level (rounded down), and it uses Breath Weapon."
						],
						[
							"Rend. Melee Weapon Attack: your spell attack modifier to hit, reach 10 ft., one target. Hit: 1d6 plus 4 + the spell's level piercing damage."
						],
						[
							"Breath Weapon. The dragon exhales destructive energy in a 30-foot cone. Each creature in that area must make a Dexterity saving throw against your spell save DC. A creature takes 2d6 damage of a type this dragon has resistance to (your choice) on a failed save, or half as much damage on a successful one."
						]
					]
				}
			]
		},
		{
			"href": "/spell:summon-draconic-spirit-ua",
			"index": "summon-draconic-spirit-ua",
			"slug": "summon-draconic-spirit-ua",
			"name": "Summon Draconic Spirit (UA)",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an art object from a dragon's hoard, worth at least 500 gp)",
				"materialText": "an art object from a dragon's hoard, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: Chromatic, Gem, or Metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-draconic-spirit-ua",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": []
		},
		{
			"href": "/spell:swift-quiver",
			"index": "swift-quiver",
			"slug": "swift-quiver",
			"name": "Swift Quiver",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Touch",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a quiver containing at least one piece of ammunition)",
				"materialText": "a quiver containing at least one piece of ammunition"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Ranger"
			],
			"description": [
				"You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.",
				"On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:swift-quiver",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:synaptic-static",
			"index": "synaptic-static",
			"slug": "synaptic-static",
			"name": "Synaptic Static",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can\u2019t be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one.",
				"After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:synaptic-static",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:telekinesis",
			"index": "telekinesis",
			"slug": "telekinesis",
			"name": "Telekinesis",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:telekinesis",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:teleportation-circle",
			"index": "teleportation-circle",
			"slug": "teleportation-circle",
			"name": "Teleportation Circle",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "10 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (rare chalks and inks infused with precious gems worth 50 gp, which the spell consumes)",
				"materialText": "rare chalks and inks infused with precious gems worth 50 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you.",
				"A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.",
				"Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence \u2013 a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.",
				"You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:teleportation-circle",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:temporal-shunt",
			"index": "temporal-shunt",
			"slug": "temporal-shunt",
			"name": "Temporal Shunt",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Reaction",
			"range": "120 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You target the triggering creature, which must succeed on a Wisdom saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn't remember you casting the spell or being affected by it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. All targets must be within 30 feet of each other."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:temporal-shunt",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:transmute-rock",
			"index": "transmute-rock",
			"slug": "transmute-rock",
			"name": "Transmute Rock",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (clay and water)",
				"materialText": "clay and water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Wizard"
			],
			"description": [
				"You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:transmute-rock",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:tree-stride",
			"index": "tree-stride",
			"slug": "tree-stride",
			"name": "Tree Stride",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet.",
				"Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you\u2019re in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.",
				"You can use this transportation ability once per round for the duration. You must end each turn outside a tree."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tree-stride",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wall-of-force",
			"index": "wall-of-force",
			"slug": "wall-of-force",
			"name": "Wall of Force",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of powder made by crushing a clear gemstone)",
				"materialText": "a pinch of powder made by crushing a clear gemstone"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).",
				"Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic . A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-force",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wall-of-light",
			"index": "wall-of-light",
			"slug": "wall-of-light",
			"name": "Wall of Light",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a hand mirror)",
				"materialText": "a hand mirror"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.",
				"When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn\u2019t blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"A creature that ends its turn in the wall\u2019s area takes 4d8 radiant damage.",
				"Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall\u2019s length drops to 0 feet, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-light",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:wall-of-stone",
			"index": "wall-of-stone",
			"slug": "wall-of-stone",
			"name": "Wall of Stone",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small block of granite)",
				"materialText": "a small block of granite"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Artificer",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.",
				"If the wall cuts through a creature\u2019s space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.",
				"The wall can have any shape you desire, though it can\u2019t occupy the same space as a creature or object. The wall doesn\u2019t need to be vertical or resting on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.",
				"If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.",
				"The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM\u2019s discretion.",
				"If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can\u2019t be dispelled. Otherwise, the wall disappears when the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-stone",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wrath-of-nature",
			"index": "wrath-of-nature",
			"slug": "wrath-of-nature",
			"name": "Wrath Of Nature",
			"level": 5,
			"levelLabel": "5th Level",
			"levelSlug": "5th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Ranger"
			],
			"description": [
				"You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.",
				"Grasses and Undergrowth. Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies.",
				"Trees. At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches.",
				"Roots and Vines. At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success.",
				"Rocks. As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wrath-of-nature",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:arcane-gate",
			"index": "arcane-gate",
			"slug": "arcane-gate",
			"name": "Arcane Gate",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "500 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.",
				"The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.",
				"Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:arcane-gate",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blade-barrier",
			"index": "blade-barrier",
			"slug": "blade-barrier",
			"name": "Blade Barrier",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.",
				"When a creature enters the wall\u2019s area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blade-barrier",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:bones-of-the-earth",
			"index": "bones-of-the-earth",
			"slug": "bones-of-the-earth",
			"name": "Bones of the Earth",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius. The rubble lasts until cleared.",
				"If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
				"If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature\u2019s choice) against the spell\u2019s saving throw DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:bones-of-the-earth",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:chain-lightning",
			"index": "chain-lightning",
			"slug": "chain-lightning",
			"name": "Chain Lightning",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins)",
				"materialText": "a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.",
				"A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:chain-lightning",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:circle-of-death",
			"index": "circle-of-death",
			"slug": "circle-of-death",
			"name": "Circle of Death",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (the powder of a crushed black pearl worth at least 500 gp)",
				"materialText": "the powder of a crushed black pearl worth at least 500 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:circle-of-death",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-fey",
			"index": "conjure-fey",
			"slug": "conjure-fey",
			"name": "Conjure Fey",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Warlock"
			],
			"description": [
				"You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.",
				"The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don\u2019t violate its alignment. If you don\u2019t issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.",
				"If your concentration is broken, the fey creature doesn\u2019t disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can\u2019t be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the fey creature\u2019s statistics."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-fey",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:contingency",
			"index": "contingency",
			"slug": "contingency",
			"name": "Contingency",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "10 Minutes",
			"range": "Self",
			"duration": "10 days",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp)",
				"materialText": "a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell\u2014called the contingent spell\u2014as part of casting contingency , expending spell slots for both, but the contingent spell doesn\u2019t come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.",
				"The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends.",
				"The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:contingency",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:create-homunculus",
			"index": "create-homunculus",
			"slug": "create-homunculus",
			"name": "Create Homunculus",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Hour",
			"range": "120 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp)",
				"materialText": "clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can\u2019t be reduced in any way. You then drip your blood on the spell\u2019s other components and touch them, transforming them into a special construct called a homunculus. The statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus\u2019s hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point. and the change to your and the homunculus\u2019s hit points ends when you finish your next long rest. The reduction to your hit point maximum can\u2019t be removed by any means before then, except by the homunculus\u2018s death. You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-homunculus",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:create-undead",
			"index": "create-undead",
			"slug": "create-undead",
			"name": "Create Undead",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Necromancy",
			"castingTime": "1 Minute",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse)",
				"materialText": "one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. The DM has game statistics for these creatures.",
				"As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.",
				"The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones."
			],
			"higherLevel": [
				"When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-undead",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:disintegrate",
			"index": "disintegrate",
			"slug": "disintegrate",
			"name": "Disintegrate",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a lodestone and a pinch of dust)",
				"materialText": "a lodestone and a pinch of dust"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force.",
				"A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. The target is disintegrated if this damage leaves it with 0 hit points.",
				"A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.",
				"This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:disintegrate",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:drawmijs-instant-summons",
			"index": "drawmijs-instant-summons",
			"slug": "drawmijs-instant-summons",
			"name": "Drawmij's Instant Summons",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sapphire worth 1,000 gp)",
				"materialText": "a sapphire worth 1,000 gp"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Wizard"
			],
			"description": [
				"You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.",
				"At any time thereafter, you can use your action to speak the item\u2019s name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends. If another creature is holding or carrying the item, crushing the sapphire doesn\u2019t transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.",
				"Dispel Magic or a similar effect successfully applied to the sapphire ends this spell\u2019s effect."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:drawmijs-instant-summons",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:druid-grove",
			"index": "druid-grove",
			"slug": "druid-grove",
			"name": "Druid Grove",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "10 Minutes",
			"range": "Touch",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon)",
				"materialText": "mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled. The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell\u2019s caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.",
				"Solid Fog. You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air.",
				"Grasping Undergrowth. You can fill any number of 5-foot squares on the ground that aren\u2019t filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds.",
				"Grove Guardians. You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can\u2019t speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can\u2018t leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible.",
				"Additional Spell Effect. You can place your choice of one of the following magical effects within the warded area:",
				"To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:druid-grove",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:eyebite",
			"index": "eyebite",
			"slug": "eyebite",
			"name": "Eyebite",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"For the spell\u2019s duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can\u2019t target a creature again if it has succeeded on a saving throw against this casting of eyebite."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:eyebite",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:find-the-path",
			"index": "find-the-path",
			"slug": "find-the-path",
			"name": "Find the Path",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Concentration, up to 1 day",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a set of divinatory tools \u2013 such as bones, ivory sticks, cards, teeth, or carved runes \u2013 worth 100 gp, and an object from the location you wish to find)",
				"materialText": "a set of divinatory tools \u2013 such as bones, ivory sticks, cards, teeth, or carved runes \u2013 worth 100 gp, and an object from the location you wish to find"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid"
			],
			"description": [
				"This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn\u2019t specific (such as \"a green dragon\u2019s lair\u201d), the spell fails.",
				"For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:find-the-path",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:fizbans-platinum-shield",
			"index": "fizbans-platinum-shield",
			"slug": "fizbans-platinum-shield",
			"name": "Fizban's Platinum Shield",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "1 Bonus Action",
			"range": "60ft",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a platinum-plated dragon scale, worth at least 500 gp)",
				"materialText": "a platinum-plated dragon scale, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet. While surrounded by the field, a creature gains the following benefits:",
				"Cover. The creature has half cover.",
				"Damage Resistance. The creature has resistance to acid, cold, fire, lightning, and poison damage.",
				"Evasion. If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
				"As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fizbans-platinum-shield",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": []
		},
		{
			"href": "/spell:fizban-s-platinum-shield-ua",
			"index": "fizban-s-platinum-shield-ua",
			"slug": "fizban-s-platinum-shield-ua",
			"name": "Fizban's Platinum Shield (UA)",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a platinum-plated dragon scale, worth at least 500 gp)",
				"materialText": "a platinum-plated dragon scale, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet.",
				"As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field.",
				"The creature protected by the field gains the following benefits:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fizban-s-platinum-shield-ua",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": []
		},
		{
			"href": "/spell:flesh-to-stone",
			"index": "flesh-to-stone",
			"slug": "flesh-to-stone",
			"name": "Flesh to Stone",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of lime, water, and earth)",
				"materialText": "a pinch of lime, water, and earth"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn\u2019t affected.",
				"A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don\u2019t need to be consecutive; keep track of both until the target collects three of a kind.",
				"If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state. If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:flesh-to-stone",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:forbiddance",
			"index": "forbiddance",
			"slug": "forbiddance",
			"name": "Forbiddance",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "10 Minutes",
			"range": "Touch",
			"duration": "1 day",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp)",
				"materialText": "a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp"
			},
			"concentration": false,
			"ritual": true,
			"classes": [
				"Cleric"
			],
			"description": [
				"You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can\u2019t teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell.",
				"In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell\u2019s area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell).",
				"When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.",
				"This spell\u2019s area can\u2019t overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:forbiddance",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:globe-of-invulnerability",
			"index": "globe-of-invulnerability",
			"slug": "globe-of-invulnerability",
			"name": "Globe of Invulnerability",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self (10-foot radius)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a glass or crystal bead that shatters when the spell ends)",
				"materialText": "a glass or crystal bead that shatters when the spell ends"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.",
				"Any spell of 5th level or lower cast from outside the barrier can\u2019t affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:globe-of-invulnerability",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:gravity-fissure",
			"index": "gravity-fissure",
			"slug": "gravity-fissure",
			"name": "Gravity Fissure",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (100-foot line)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a fistful of iron filings)",
				"materialText": "a fistful of iron filings"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You manifest a ravine of gravitational energy in a line originating from you that is 100 feet long and 5 feet wide. Each creature in that line must make a Constitution saving throw, taking 8d8 force damage on a failed save, or half as much damage on a successful one.",
				"Each creature within 10 feet of the line but not in it must succeed on a Constitution saving throw or take 8d8 force damage and be pulled toward the line until the creature is in its area."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gravity-fissure",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:guards-and-wards",
			"index": "guards-and-wards",
			"slug": "guards-and-wards",
			"name": "Guards and Wards",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "10 Minutes",
			"range": "Touch",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp)",
				"materialText": "burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.",
				"When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.",
				"Guards and Wards creates the following effects within the warded area.",
				"The whole warded area radiates magic. A Dispel Magic cast on a specific effect, if successful, removes only that effect. You can create a permanently Guarded and Warded structure by casting this spell there every day for one year."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:guards-and-wards",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:harm",
			"index": "harm",
			"slug": "harm",
			"name": "Harm",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can\u2019t reduce the target\u2019s hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature\u2019s hit point maximum to return to normal before that time passes."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:harm",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:heal",
			"index": "heal",
			"slug": "heal",
			"name": "Heal",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid"
			],
			"description": [
				"Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. The spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:heal",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:heroes-feast",
			"index": "heroes-feast",
			"slug": "heroes-feast",
			"name": "Heroes' Feast",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "10 Minutes",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes)",
				"materialText": "a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid"
			],
			"description": [
				"You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don\u2019t set in until this hour is over. Up to twelve creatures can partake of the feast.",
				"A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:heroes-feast",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:investiture-of-flame",
			"index": "investiture-of-flame",
			"slug": "investiture-of-flame",
			"name": "Investiture of Flame",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell\u2019s duration. The flames don\u2019t harm you. Until the spell ends, you gain the following benefits:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:investiture-of-flame",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:investiture-of-ice",
			"index": "investiture-of-ice",
			"slug": "investiture-of-ice",
			"name": "Investiture of Ice",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Until the spell ends, ice rimes your body, and you gain the following benefits:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:investiture-of-ice",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:investiture-of-stone",
			"index": "investiture-of-stone",
			"slug": "investiture-of-stone",
			"name": "Investiture of Stone",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Until the spell ends, bits of rock spread across your body, and you gain the following benefits:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:investiture-of-stone",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:investiture-of-wind",
			"index": "investiture-of-wind",
			"slug": "investiture-of-wind",
			"name": "Investiture of Wind",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Until the spell ends, wind whirls around you, and you gain the following benefits:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:investiture-of-wind",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:magic-jar",
			"index": "magic-jar",
			"slug": "magic-jar",
			"name": "Magic Jar",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Necromancy",
			"castingTime": "1 Minute",
			"range": "Self",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp)",
				"materialText": "a gem, crystal, reliquary, or some other ornamental container worth at least 500 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell\u2019s material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container\u2019s space. You can\u2019t move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body.",
				"You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a protection from evil and good or magic circle spells can\u2019t be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target\u2019s body, and the target\u2019s soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can\u2019t attempt to possess it again for 24 hours.",
				"Once you possess a creature\u2019s body, you control it. Your game statistics are replaced by the statistics of the creature though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can\u2019t use any of its class features.",
				"Meanwhile, the possessed creature\u2019s soul can perceive from the container using its own senses, but it can\u2019t move or take actions at all.",
				"While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature\u2019s soul to its body. If the host body dies while you\u2019re in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.",
				"If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you, or if your body is dead when you attempt to return to it, you die. If another creature\u2019s soul is in the container when it is destroyed, the creature\u2019s soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.",
				"When the spell ends, the container is destroyed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:magic-jar",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mass-suggestion",
			"index": "mass-suggestion",
			"slug": "mass-suggestion",
			"name": "Mass Suggestion",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a snake\u2019s tongue and either a bit of honeycomb or a drop of sweet oil)",
				"materialText": "a snake\u2019s tongue and either a bit of honeycomb or a drop of sweet oil"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can\u2019t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.",
				"Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
				"You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn\u2019t met before the spell ends, the activity isn\u2019t performed.",
				"If you or any of your companions damage a creature affected by this spell, the spell ends for that creature."
			],
			"higherLevel": [
				"When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mass-suggestion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mental-prison",
			"index": "mental-prison",
			"slug": "mental-prison",
			"name": "Mental Prison",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target\u2019s space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can\u2019t see or hear anything beyond it and is restrained for the spell\u2019s duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mental-prison",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:move-earth",
			"index": "move-earth",
			"slug": "move-earth",
			"name": "Move Earth",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 2 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an iron blade and a small bag containing a mixture of soils \u2013 clay, loam, and sand)",
				"materialText": "an iron blade and a small bag containing a mixture of soils \u2013 clay, loam, and sand"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area\u2019s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can\u2019t exceed half the area\u2019s largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square\u2019s elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.",
				"At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.",
				"Because the terrain\u2019s transformation occurs slowly, creatures in the area can\u2019t usually be trapped or injured by the ground\u2019s movement.",
				"This spell can\u2019t manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.",
				"Similarly, this spell doesn\u2019t directly affect plant growth. The moved earth carries any plants along with it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:move-earth",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:otherworldly-form",
			"index": "otherworldly-form",
			"slug": "otherworldly-form",
			"name": "Otherworldly Form (UA)",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)",
				"materialText": "an object engraved with a symbol of the Outer Planes, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:otherworldly-form",
			"sourceBook": "Unearthed Arcana 70 - Spells and Magic Tattoos",
			"tables": []
		},
		{
			"href": "/spell:otilukes-freezing-sphere",
			"index": "otilukes-freezing-sphere",
			"slug": "otilukes-freezing-sphere",
			"name": "Otiluke's Freezing Sphere",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small crystal sphere)",
				"materialText": "a small crystal sphere"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.",
				"If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.",
				"You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling\u2019s normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn\u2019t already shattered, it explodes."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:otilukes-freezing-sphere",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:ottos-irresistible-dance",
			"index": "ottos-irresistible-dance",
			"slug": "ottos-irresistible-dance",
			"name": "Otto's Irresistible Dance",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can\u2019t be charmed are immune to this spell.",
				"A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ottos-irresistible-dance",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:planar-ally",
			"index": "planar-ally",
			"slug": "planar-ally",
			"name": "Planar Ally",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature\u2019s name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM\u2019s choice).",
				"When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn\u2019t obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.",
				"Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.",
				"As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature\u2019s ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.",
				"After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature\u2019s service, the creature immediately returns to its home plane.",
				"A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:planar-ally",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:primordial-ward",
			"index": "primordial-ward",
			"slug": "primordial-ward",
			"name": "Primordial Ward",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You have resistance to acid, cold, fire, lightning, and thunder damage for the spell\u2019s duration.",
				"When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:primordial-ward",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:programmed-illusion",
			"index": "programmed-illusion",
			"slug": "programmed-illusion",
			"name": "Programmed Illusion",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of fleece and jade dust worth at least 25 gp)",
				"materialText": "a bit of fleece and jade dust worth at least 25 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.",
				"When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.",
				"The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.",
				"Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:programmed-illusion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:psychic-crush",
			"index": "psychic-crush",
			"slug": "psychic-crush",
			"name": "Psychic Crush (UA)",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You overload the mind of one creature you can see within range, filling its psyche with discordant emotions. The target must make an Intelligence saving throw. On a failed save, the target takes 12d6 psychic damage and is stunned for 1 minute. On a successful save, the target takes half as much damage and isn\u2019t stunned.",
				"The stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the spell ends on the target."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:psychic-crush",
			"sourceBook": "Unearthed Arcana 66 - Fighter, Rogue, and Wizard",
			"tables": []
		},
		{
			"href": "/spell:scatter",
			"index": "scatter",
			"slug": "scatter",
			"name": "Scatter",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:scatter",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:soul-cage",
			"index": "soul-cage",
			"slug": "soul-cage",
			"name": "Soul Cage",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Necromancy",
			"castingTime": "Special",
			"range": "60 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny silver cage worth 100 gp)",
				"materialText": "a tiny silver cage worth 100 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can\u2019t be revived.",
				"Steal Life. You can use a bonus action to drain vigor from the soul and regain 2d8 hit points.",
				"Query Soul. You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.",
				"Borrow Experience. You can use a bonus action to bolster yourself with the soul\u2019s life experience, making your next attack roll, ability check, or saving throw with advantage. If you don\u2019t use this benefit before the start of your next turn, it is lost.",
				"Eyes of the Dead. You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you\u2019re currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses.",
				"A creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you caged."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:soul-cage",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:summon-fiend",
			"index": "summon-fiend",
			"slug": "summon-fiend",
			"name": "Summon Fiend",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (humanoid blood inside a ruby vial worth at least 600 gp)",
				"materialText": "humanoid blood inside a ruby vial worth at least 600 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
				"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don\u2019t issue any, it takes the Dodge action and uses its move to avoid danger."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, use the higher level wherever the spell\u2019s level appears in the stat block."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:summon-fiend",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:sunbeam",
			"index": "sunbeam",
			"slug": "sunbeam",
			"name": "Sunbeam",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (60-foot line)",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a magnifying glass)",
				"materialText": "a magnifying glass"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn\u2019t blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
				"You can create a new line of radiance as your action on any turn until the spell ends.",
				"For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sunbeam",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:tashas-otherworldly-guise",
			"index": "tashas-otherworldly-guise",
			"slug": "tashas-otherworldly-guise",
			"name": "Tasha's Otherworldly Guise",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)",
				"materialText": "an object engraved with a symbol of the Outer Planes, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tashas-otherworldly-guise",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:tensers-transformation",
			"index": "tensers-transformation",
			"slug": "tensers-transformation",
			"name": "Tenser's Transformation",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a few hairs from a bull)",
				"materialText": "a few hairs from a bull"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can\u2019t cast spells, and you gain the following benefits:",
				"Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tensers-transformation",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:transport-via-plants",
			"index": "transport-via-plants",
			"slug": "transport-via-plants",
			"name": "Transport via Plants",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "1 round",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:transport-via-plants",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:true-seeing",
			"index": "true-seeing",
			"slug": "true-seeing",
			"name": "True Seeing",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Divination",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell)",
				"materialText": "an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consumed by the spell"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:true-seeing",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wall-of-ice",
			"index": "wall-of-ice",
			"slug": "wall-of-ice",
			"name": "Wall of Ice",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small piece of quartz)",
				"materialText": "a small piece of quartz"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.",
				"If the wall cuts through a creature\u2019s space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.",
				"The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. The creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-ice",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wall-of-thorns",
			"index": "wall-of-thorns",
			"slug": "wall-of-thorns",
			"name": "Wall of Thorns",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a handful of thorns)",
				"materialText": "a handful of thorns"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.",
				"When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.",
				"A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much on a successful save."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wall-of-thorns",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wind-walk",
			"index": "wind-walk",
			"slug": "wind-walk",
			"name": "Wind Walk",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Transmutation",
			"castingTime": "1 Minute",
			"range": "30 feet",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (fire and holy water)",
				"materialText": "fire and holy water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form.",
				"Reverting takes 1 minute, during which time a creature is incapacitated and can\u2019t move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.",
				"If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can\u2019t land after 1 minute, the creature falls the remaining distance."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wind-walk",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:word-of-recall",
			"index": "word-of-recall",
			"slug": "word-of-recall",
			"name": "Word of Recall",
			"level": 6,
			"levelLabel": "6th Level",
			"levelSlug": "6th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "5 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.",
				"You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn\u2019t dedicated to your deity, the spell has no effect."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:word-of-recall",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-celestial",
			"index": "conjure-celestial",
			"slug": "conjure-celestial",
			"name": "Conjure Celestial",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "90 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.",
				"The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don\u2019t violate its alignment. If you don\u2019t issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions. The DM has the celestial\u2019s statistics."
			],
			"higherLevel": [
				"When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-celestial",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:conjure-hezrou",
			"index": "conjure-hezrou",
			"slug": "conjure-hezrou",
			"name": "Conjure Hezrou (UA)",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (food worth at least 100 gp, which the spell consumes)",
				"materialText": "food worth at least 100 gp, which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You summon a hezrou that appears in an unoccupied space you can see within range. The hezrou disappears when it drops to 0 hit points or when the spell ends.",
				"The hezrou\u2019s attitude depends on the value of the food used as a material component for this spell. Roll initiative for the hezrou, which has its own turns. At the start of the hezrou\u2019s turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the food\u2019s value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the hezrou and have it obey you as long as you succeed on the Charisma check.",
				"If the check fails, the spell no longer requires concentration and the demon is no longer under your control. The hezrou then focuses on devouring any corpses it can see. If there are no such meals at hand, it attacks the nearest creatures and eats anything it kills. If its hit points are reduced to below half its hit point maximum, it returns to the Abyss.",
				"As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned hezrou cannot cross the circle or target anyone in it while the spell lasts."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:conjure-hezrou",
			"sourceBook": "Unearthed Arcana 11 - That Old Black Magic",
			"tables": []
		},
		{
			"href": "/spell:create-magen",
			"index": "create-magen",
			"slug": "create-magen",
			"name": "Create Magen",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Hour",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed)",
				"materialText": "a vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a magen clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell.",
				"When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a Wish spell can undo this reduction to your hit point maximum.",
				"Any magen you create with this spell obeys your commands without question."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:create-magen",
			"sourceBook": "Icewind Dale - Rime of the Frostmaiden",
			"tables": []
		},
		{
			"href": "/spell:crown-of-stars",
			"index": "crown-of-stars",
			"slug": "crown-of-stars",
			"name": "Crown of Stars",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote. If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:crown-of-stars",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:delayed-blast-fireball",
			"index": "delayed-blast-fireball",
			"slug": "delayed-blast-fireball",
			"name": "Delayed Blast Fireball",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny ball of bat guano and sulfur)",
				"materialText": "a tiny ball of bat guano and sulfur"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.",
				"The spell\u2019s base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.",
				"If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes. The fire damages objects in the area and ignites flammable objects that aren\u2019t being worn or carried."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:delayed-blast-fireball",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:divine-word",
			"index": "divine-word",
			"slug": "divine-word",
			"name": "Divine Word",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Bonus Action",
			"range": "30 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:",
				"Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn\u2019t there already) and can\u2019t return to your current plane for 24 hours by any means short of a wish spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:divine-word",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:draconic-transformation",
			"index": "draconic-transformation",
			"slug": "draconic-transformation",
			"name": "Draconic Transformation",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a statuette of a dragon, worth at least 500 gp)",
				"materialText": "a statuette of a dragon, worth at least 500 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"With a roar, you draw on the magic of dragons to transform yourself, taking on draconic features. You gain the following benefits until the spell ends:",
				"Blindsight. You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn\u2019t behind total cover, even if you\u2019re blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you.",
				"Breath Weapon. When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking 6d8 force damage on a failed save, or half as much damage on a successful one.",
				"Wings. Incorporeal wings sprout from your back, giving you a flying speed of 60 feet."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:draconic-transformation",
			"sourceBook": "Fizban's Treasury of Dragons",
			"tables": []
		},
		{
			"href": "/spell:draconic-transformation-ua",
			"index": "draconic-transformation-ua",
			"slug": "draconic-transformation-ua",
			"name": "Draconic Transformation (UA)",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Bonus Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a statuette of a dragon,"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"With a roar, you draw on the magic of dragons to transform yourself, taking on various draconic features. You gain the following benefits until the spell ends:"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:draconic-transformation-ua",
			"sourceBook": "Unearthed Arcana 78 - Draconic Options",
			"tables": []
		},
		{
			"href": "/spell:dream-of-the-blue-veil",
			"index": "dream-of-the-blue-veil",
			"slug": "dream-of-the-blue-veil",
			"name": "Dream of the Blue Veil",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "10 minutes",
			"range": "20 feet",
			"duration": "6 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a magic item or a willing creature from the destination world)",
				"materialText": "a magic item or a willing creature from the destination world"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions.",
				"To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world\u2019s existence, even if you don\u2019t know the world\u2019s name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born.",
				"The spell ends early on a creature if that creature takes any damage, and the creature isn\u2019t transported. If you take any damage, the spell ends for you and all other creatures, with none of you being transported."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dream-of-the-blue-veil",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:etherealness",
			"index": "etherealness",
			"slug": "etherealness",
			"name": "Etherealness",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Up to 8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can\u2019t see anything more than 60 feet away.",
				"While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren\u2019t on the Ethereal Plane can\u2019t perceive you and can\u2019t interact with you, unless a special ability or magic has given them the ability to do so.",
				"You ignore all objects and effects that aren\u2019t on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from. When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.",
				"This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn\u2019t border it, such as one of the Outer Planes."
			],
			"higherLevel": [
				"When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:etherealness",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:finger-of-death",
			"index": "finger-of-death",
			"slug": "finger-of-death",
			"name": "Finger of Death",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.",
				"A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:finger-of-death",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:fire-storm",
			"index": "fire-storm",
			"slug": "fire-storm",
			"name": "Fire Storm",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Sorcerer"
			],
			"description": [
				"A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.",
				"The fire damages objects in the area and ignites flammable objects that aren\u2019t being worn or carried. If you choose, plant life in the area is unaffected by this spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:fire-storm",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:forcecage",
			"index": "forcecage",
			"slug": "forcecage",
			"name": "Forcecage",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "100 feet",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (ruby dust worth 1,500 gp)",
				"materialText": "ruby dust worth 1,500 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box as you choose.",
				"A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart.",
				"A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out of the area.",
				"When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.",
				"A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.",
				"This spell can't be dispelled by dispel magic ."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:forcecage",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mirage-arcane",
			"index": "mirage-arcane",
			"slug": "mirage-arcane",
			"name": "Mirage Arcane",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Illusion",
			"castingTime": "10 Minutes",
			"range": "Sight",
			"duration": "10 days",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Wizard"
			],
			"description": [
				"You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain\u2019s general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.",
				"Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn\u2019t disguise, conceal, or add creatures.",
				"The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell\u2019s area disappears immediately.",
				"Creatures with truesight can see through the illusion to the terrain\u2019s true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion\u2019s presence, the creature can still physically interact with the illusion."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mirage-arcane",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mordenkainens-magnificent-mansion",
			"index": "mordenkainens-magnificent-mansion",
			"slug": "mordenkainens-magnificent-mansion",
			"name": "Mordenkainen's Magnificent Mansion",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "300 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp)",
				"materialText": "a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.",
				"Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.",
				"You can create any floor plan you like, but the space can\u2019t exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine-course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can\u2019t attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can\u2019t leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures or objects inside the extradimensional space are expelled into the open spaces nearest to the entrance."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mordenkainens-magnificent-mansion",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mordenkainens-sword",
			"index": "mordenkainens-sword",
			"slug": "mordenkainens-sword",
			"name": "Mordenkainen's Sword",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp)",
				"materialText": "a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You create a sword-shaped plane of force that hovers within range. It lasts for the duration.",
				"When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit. the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mordenkainens-sword",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:plane-shift",
			"index": "plane-shift",
			"slug": "plane-shift",
			"name": "Plane Shift",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence)",
				"materialText": "a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM\u2019s discretion.",
				"Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
				"You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails the save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:plane-shift",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:power-word-pain",
			"index": "power-word-pain",
			"slug": "power-word-pain",
			"name": "Power Word: Pain",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed.",
				"While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.",
				"A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:power-word-pain",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:prismatic-spray",
			"index": "prismatic-spray",
			"slug": "prismatic-spray",
			"name": "Prismatic Spray",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Self (60-foot cone)",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:prismatic-spray",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"d8",
						"Color",
						"Ray Effect"
					],
					"rows": [
						[
							"1",
							"Red",
							"The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one."
						],
						[
							"2",
							"Orange",
							"The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one."
						],
						[
							"3",
							"Yellow",
							"The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one."
						],
						[
							"4",
							"Green",
							"The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one."
						],
						[
							"5",
							"Blue",
							"The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one."
						],
						[
							"6",
							"Indigo",
							"On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don\u2019t need to be consecutive; keep track of both until the target collects three of a kind."
						],
						[
							"7",
							"Violet",
							"On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM\u2019s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn\u2019t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)"
						],
						[
							"8",
							"Special",
							"The target is struck by two rays. Roll twice more, rerolling any 8."
						]
					]
				}
			]
		},
		{
			"href": "/spell:project-image",
			"index": "project-image",
			"slug": "project-image",
			"name": "Project Image",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "500 Miles",
			"duration": "Concentration, up to 1 day",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small replica of you made from materials worth at least 5 gp)",
				"materialText": "a small replica of you made from materials worth at least 5 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.",
				"You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.",
				"You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.",
				"Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:project-image",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:regenerate",
			"index": "regenerate",
			"slug": "regenerate",
			"name": "Regenerate",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a prayer wheel and holy water)",
				"materialText": "a prayer wheel and holy water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid"
			],
			"description": [
				"You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).",
				"The target\u2019s severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:regenerate",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:resurrection",
			"index": "resurrection",
			"slug": "resurrection",
			"name": "Resurrection",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Necromancy",
			"castingTime": "1 Hour",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a diamond worth at least 1,000 gp, which the spell consumes)",
				"materialText": "a diamond worth at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric"
			],
			"description": [
				"You touch a dead creature that has been dead for no more than a century, that didn\u2019t die of old age, and that isn\u2019t undead. If its soul is free and willing, the target returns to life with all its hit points.",
				"This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn\u2019t, however, remove magical diseases, curses, and the like; if such affects aren\u2019t removed prior to casting the spell, they afflict the target on its return to life.",
				"This spell closes all mortal wounds and restores any missing body parts.",
				"Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.",
				"Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can\u2019t cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:resurrection",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:reverse-gravity",
			"index": "reverse-gravity",
			"slug": "reverse-gravity",
			"name": "Reverse Gravity",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "100 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a lodestone and iron filings)",
				"materialText": "a lodestone and iron filings"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren\u2019t somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.",
				"If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.",
				"At the end of the duration, affected objects and creatures fall back down."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:reverse-gravity",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:sequester",
			"index": "sequester",
			"slug": "sequester",
			"name": "Sequester",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes)",
				"materialText": "a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can\u2019t be targeted by divination spells or perceived through scrying sensors created by the divination of spells.",
				"If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn\u2019t grow older.",
				"You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \"after 1,000 years\" or \"when the tarrasque awakes.\" This spells also ends if the target takes any damage."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sequester",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:simulacrum",
			"index": "simulacrum",
			"slug": "simulacrum",
			"name": "Simulacrum",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Illusion",
			"castingTime": "12 hours",
			"range": "Touch",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (snow or ice in quantities sufficient to make a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature\u2019s body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)",
				"materialText": "snow or ice in quantities sufficient to make a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature\u2019s body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature\u2019s hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates, except that it is a construct.",
				"The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.",
				"If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.",
				"If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:simulacrum",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:symbol",
			"index": "symbol",
			"slug": "symbol",
			"name": "Symbol",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Abjuration",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "Until dispelled or triggered",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes)",
				"materialText": "mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.",
				"The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.",
				"You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.",
				"You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.",
				"When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:symbol",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:teleport",
			"index": "teleport",
			"slug": "teleport",
			"name": "Teleport",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "10 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can\u2019t be held or carried by an unwilling creature.",
				"The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.",
				"\"Permanent circle\" means a permanent Teleportation Circle whose sigil sequence you know.",
				"\"Associated object\" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a lich's secret tomb.",
				"\"Very familiar\" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell.",
				"\"Seen casually\" is someplace you have seen more than once but with which you aren't very familiar.",
				"\"Viewed once\" is a place you have seen once, possibly using magic.",
				"\"Description\" is a place whose location and appearance you know through someone else's description, perhaps from a map.",
				"\"False destination\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:teleport",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"Familiarity",
						"Mishap",
						"Similar Area",
						"Off Target",
						"On Target"
					],
					"rows": [
						[
							"Permanent circle",
							"\u2014",
							"\u2014",
							"\u2014",
							"01-100"
						],
						[
							"Associated object",
							"\u2014",
							"\u2014",
							"\u2014",
							"01-100"
						],
						[
							"Very familiar",
							"01-05",
							"06-13",
							"14-24",
							"25-100"
						],
						[
							"Seen casually",
							"01-33",
							"34-43",
							"44-53",
							"54-100"
						],
						[
							"Viewed once",
							"01-43",
							"44-53",
							"54-73",
							"74-100"
						],
						[
							"Description",
							"01-43",
							"44-53",
							"54-73",
							"74-100"
						],
						[
							"False destination",
							"01-50",
							"51-100",
							"\u2014",
							"\u2014"
						]
					]
				}
			]
		},
		{
			"href": "/spell:temple-of-the-gods",
			"index": "temple-of-the-gods",
			"slug": "temple-of-the-gods",
			"name": "Temple of the Gods",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Conjuration",
			"castingTime": "1 hour",
			"range": "120 feet",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a holy symbol worth at least 5 gp)",
				"materialText": "a holy symbol worth at least 5 gp"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.",
				"You make all decisions about the temple\u2019s appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.",
				"The temple\u2019s interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.",
				"The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can\u2019t enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a d4 and subtract the number rolled from the d20 roll.",
				"In addition, the sensors created by divination spells can\u2019t appear inside the temple, and creatures within can\u2019t be targeted by divination spells.",
				"Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point).",
				"The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple\u2019s interior. Nothing can physically pass through the temple\u2019s exterior. It can\u2019t be dispelled by dispel magic, and antimagic field has no effect on it. A disintegrate spell destroys the temple instantly. Casting this spell on the same spot every day for a year makes this effect permanent."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:temple-of-the-gods",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:tether-essence",
			"index": "tether-essence",
			"slug": "tether-essence",
			"name": "Tether Essence",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a spool of platinum cord worth at least 250 gp, which the spell consumes)",
				"materialText": "a spool of platinum cord worth at least 250 gp, which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"Two creatures you can see within range must make a Constitution saving throw, with disadvantage if they are within 30 feet of each other. Either creature can willingly fail the save. If either save succeeds, the spell has no effect. If both saves fail, the creatures are magically linked for the duration, regardless of the distance between them. When damage is dealt to one of them, the same damage is dealt to the other one. If hit points are restored to one of them, the same number of hit points are restored to the other one. If either of the tethered creatures is reduced to 0 hit points, the spell ends on both. If the spell ends on one creature, it ends on both."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tether-essence",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:whirlwind",
			"index": "whirlwind",
			"slug": "whirlwind",
			"name": "Whirlwind",
			"level": 7,
			"levelLabel": "7th Level",
			"levelSlug": "7th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "300 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a piece of straw)",
				"materialText": "a piece of straw"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Wizard"
			],
			"description": [
				"A whirlwind howls down to a point on the ground you specify. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren\u2019t secured to anything and that aren\u2019t worn or carried by anyone.",
				"A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends.",
				"When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.",
				"A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \u00d7 10 feet away from it in a random direction."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:whirlwind",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:abi-dalzims-horrid-wilting",
			"index": "abi-dalzims-horrid-wilting",
			"slug": "abi-dalzims-horrid-wilting",
			"name": "Abi-Dalzim's Horrid Wilting",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a bit of sponge)",
				"materialText": "a bit of sponge"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren\u2019t affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.",
				"Nonmagical plants in the area that aren\u2019t creatures, such as trees and shrubs, wither and die instantly."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:abi-dalzims-horrid-wilting",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:animal-shapes",
			"index": "animal-shapes",
			"slug": "animal-shapes",
			"name": "Animal Shapes",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your actions to transform affected creatures into new forms.",
				"The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target\u2019s game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit point it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn\u2019t reduce the creature\u2019s normal form to 0 hit points, it isn\u2019t knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can\u2019t speak or cast spells.",
				"The target\u2019s gear melds into the new form. The target can\u2019t activate, wield, or otherwise benefit from any of its equipment."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:animal-shapes",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:antimagic-field",
			"index": "antimagic-field",
			"slug": "antimagic-field",
			"name": "Antimagic Field",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self (10-foot radius sphere)",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of powdered iron or iron filings)",
				"materialText": "a pinch of powdered iron or iron filings"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Wizard"
			],
			"description": [
				"A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.",
				"Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:antimagic-field",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:antipathy-sympathy",
			"index": "antipathy-sympathy",
			"slug": "antipathy-sympathy",
			"name": "Antipathy/Sympathy",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Enchantment",
			"castingTime": "1 Hour",
			"range": "60 feet",
			"duration": "10 Days",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)",
				"materialText": "either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Wizard"
			],
			"description": [
				"This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura\u2019s effect."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:antipathy-sympathy",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:clone",
			"index": "clone",
			"slug": "clone",
			"name": "Clone",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Necromancy",
			"castingTime": "1 Hour",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a diamond worth at least 1000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes. A vessel worth at least 2000 gp that has a sealable lid and is large enough to hold the creature being cloned, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water)",
				"materialText": "a diamond worth at least 1000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes. A vessel worth at least 2000 gp that has a sealable lid and is large enough to hold the creature being cloned, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside the vessel used in the spell's casting and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.",
				"At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original\u2019s equipment. The original creature\u2019s physical remains, if they still exist, become inert and can\u2019t thereafter be restored to life, since the creature\u2019s soul is elsewhere."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:clone",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:control-weather",
			"index": "control-weather",
			"slug": "control-weather",
			"name": "Control Weather",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Transmutation",
			"castingTime": "10 Minutes",
			"range": "Self (5 mile radius)",
			"duration": "Concentration, Up to 8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (burning incense and bits of earth and wood mixed in water)",
				"materialText": "burning incense and bits of earth and wood mixed in water"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Wizard"
			],
			"description": [
				"You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don\u2019t have a clear path to the sky ends the spell early.",
				"When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.",
				"When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:control-weather",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"caption": "Precipitation",
					"headers": [],
					"rows": [
						[
							"Stage 1",
							"Clear"
						],
						[
							"Stage 2",
							"Light clouds"
						],
						[
							"Stage 3",
							"Overcast or ground fog"
						],
						[
							"Stage 4",
							"Rain, hail or snow"
						],
						[
							"Stage 5",
							"Torrential rain, driving hail or blizzard"
						]
					]
				},
				{
					"caption": "Temperature",
					"headers": [],
					"rows": [
						[
							"Stage 1",
							"Unbearable heat"
						],
						[
							"Stage 2",
							"Hot"
						],
						[
							"Stage 3",
							"Warm"
						],
						[
							"Stage 4",
							"Cool"
						],
						[
							"Stage 5",
							"Cold"
						],
						[
							"Stage 6",
							"Arctic cold"
						]
					]
				},
				{
					"caption": "Wind",
					"headers": [],
					"rows": [
						[
							"Stage 1",
							"Calm"
						],
						[
							"Stage 2",
							"Moderate wind"
						],
						[
							"Stage 3",
							"Strong wind"
						],
						[
							"Stage 4",
							"Gale"
						],
						[
							"Stage 5",
							"Storm"
						]
					]
				}
			]
		},
		{
			"href": "/spell:dark-star",
			"index": "dark-star",
			"slug": "dark-star",
			"name": "Dark Star",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 Feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a shard of onyx and a drop of the caster's blood, both of which the spell consumes)",
				"materialText": "a shard of onyx and a drop of the caster's blood, both of which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"This spell creates a sphere centered on a point you choose within range. The sphere can have a radius of up to 40 feet. The area within this sphere is filled with magical darkness and crushing gravitational force.",
				"For the duration, the spell's area is difficult terrain. A creature with darkvision can't see through the magical darkness, and nonmagical light can't illuminate it. No sound can be created within or pass through the area. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.",
				"Any creature that enters the spell's area for the first time on a turn or starts its turn there must make a Constitution saving throw. The creature takes 8d10 force damage on a failed save or half as much damage on a successful save. A creature reduced to 0 hit points by this damage is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dark-star",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:demiplane",
			"index": "demiplane",
			"slug": "demiplane",
			"name": "Demiplane",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "1 hour",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.",
				"Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:demiplane",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:dominate-monster",
			"index": "dominate-monster",
			"slug": "dominate-monster",
			"name": "Dominate Monster",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.",
				"While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature,\" \"Run over there,\" or \"Fetch that object.\" If the creature completes the order and doesn\u2019t receive further direction from you, it defends and preserves itself to the best of its ability.",
				"You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn\u2019t do anything that you don\u2019t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.",
				"Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends."
			],
			"higherLevel": [
				"When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours."
			],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:dominate-monster",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:earthquake",
			"index": "earthquake",
			"slug": "earthquake",
			"name": "Earthquake",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "500 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pinch of dirt, a piece of rock, and a lump of clay)",
				"materialText": "a pinch of dirt, a piece of rock, and a lump of clay"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Sorcerer"
			],
			"description": [
				"You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.",
				"The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature\u2019s concentration is broken.",
				"When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.",
				"This spell can have additional effects depending on the terrain in the area, as determined by the DM."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:earthquake",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:feeblemind",
			"index": "feeblemind",
			"slug": "feeblemind",
			"name": "Feeblemind",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a handful of clay, crystal, glass, or mineral spheres)",
				"materialText": "a handful of clay, crystal, glass, or mineral spheres"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw.",
				"On a failed save, the creature\u2019s Intelligence and Charisma scores become 1. The creature can\u2019t cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.",
				"At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends. The spell can also be ended by Greater Restoration , Heal , or Wish ."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:feeblemind",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:glibness",
			"index": "glibness",
			"slug": "glibness",
			"name": "Glibness",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "1 hour",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock"
			],
			"description": [
				"Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:glibness",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:holy-aura",
			"index": "holy-aura",
			"slug": "holy-aura",
			"name": "Holy Aura",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint\u2019s robe or a piece of parchment from a religious text)",
				"materialText": "a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint\u2019s robe or a piece of parchment from a religious text"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:holy-aura",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:illusory-dragon",
			"index": "illusory-dragon",
			"slug": "illusory-dragon",
			"name": "Illusory Dragon",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell\u2019s duration and occupies its space, as if it were a creature.",
				"When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn\u2019t have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.",
				"As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space.",
				"When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one.",
				"The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically. it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:illusory-dragon",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:incendiary-cloud",
			"index": "incendiary-cloud",
			"slug": "incendiary-cloud",
			"name": "Incendiary Cloud",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
				"When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell\u2019s area for the first time on a turn or ends its turn there.",
				"The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:incendiary-cloud",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:maddening-darkness",
			"index": "maddening-darkness",
			"slug": "maddening-darkness",
			"name": "Maddening Darkness",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": true,
				"raw": "V, M (a drop of pitch mixed with a drop of mercury)",
				"materialText": "a drop of pitch mixed with a drop of mercury"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can\u2019t see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area. Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:maddening-darkness",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:maze",
			"index": "maze",
			"slug": "maze",
			"name": "Maze",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.",
				"The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds).",
				"When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:maze",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mighty-fortress",
			"index": "mighty-fortress",
			"slug": "mighty-fortress",
			"name": "Mighty Fortress",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Conjuration",
			"castingTime": "1 Minute",
			"range": "1 mile",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
				"materialText": "a diamond worth at least 500 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.",
				"The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress\u2019s outer wall.",
				"A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.",
				"A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell.",
				"The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot by 10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM\u2019s discretion.",
				"After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground.",
				"Casting this spell on the same spot once every 7 days for a year makes the fortress permanent."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mighty-fortress",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:mind-blank",
			"index": "mind-blank",
			"slug": "mind-blank",
			"name": "Mind Blank",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target's mind or to gain information about the target."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mind-blank",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:power-word-stun",
			"index": "power-word-stun",
			"slug": "power-word-stun",
			"name": "Power Word: Stun",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:power-word-stun",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:reality-break",
			"index": "reality-break",
			"slug": "reality-break",
			"name": "Reality Break",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a crystal prism)",
				"materialText": "a crystal prism"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You shatter the barriers between realities and timelines, thrusting a creature into turmoil and madness. The target must succeed on a Wisdom saving throw, or it can't take reactions until the spell ends. The affected target must also roll a d10 at the start of each of its turns; the number rolled determines what happens to the target as shown on the Reality Break Effects table.",
				"At the end of each of its turns, the affected target can repeat the Wisdom saving throw, ending the spell on itself on a success",
				"Reality Break Effects"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:reality-break",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": [
				{
					"headers": [
						"d10",
						"Effect"
					],
					"rows": [
						[
							"1-2",
							"Vision of the Far Realm. The target takes 6d12 psychic damage, and it is stunned until the end of the turn"
						],
						[
							"3-5",
							"Rending Rift. The target must make a Dexterity saving throw, taking 8d12 force damage on a failed save, or half as much damage on a successful save."
						],
						[
							"6-8",
							"Wormhole. The target is teleported, along with everything it is wearing and carrying, up to 30 feet to an unoccupied space of your choice that you can see. The target also takes 10d12 force damage and is knocked prone."
						],
						[
							"9-10",
							"Chill of the Dark Void. The target takes 10d12 cold damage, and it is blinded until the end of the turn."
						]
					]
				}
			]
		},
		{
			"href": "/spell:sunburst",
			"index": "sunburst",
			"slug": "sunburst",
			"name": "Sunburst",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "150 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (fire and a piece of sunstone)",
				"materialText": "fire and a piece of sunstone"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn\u2019t blinded by this spell. Undead and oozes have disadvantage on this saving throw.",
				"A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.",
				"This spell dispels any darkness in its area that was created by a spell."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:sunburst",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:telepathy",
			"index": "telepathy",
			"slug": "telepathy",
			"name": "Telepathy",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Unlimited",
			"duration": "24 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a pair of linked silver rings)",
				"materialText": "a pair of linked silver rings"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.",
				"Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:telepathy",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:tsunami",
			"index": "tsunami",
			"slug": "tsunami",
			"name": "Tsunami",
			"level": 8,
			"levelLabel": "8th Level",
			"levelSlug": "8th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Sight",
			"duration": "Concentration, up to 6 rounds",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.",
				"When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save.",
				"At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall\u2019s height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.",
				"A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can\u2019t move. A creature that moves out of the area falls to the ground."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:tsunami",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:astral-projection",
			"index": "astral-projection",
			"slug": "astral-projection",
			"name": "Astral Projection",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Evocation",
			"castingTime": "1 Hour",
			"range": "10 feet",
			"duration": "Special",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)",
				"materialText": "for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn\u2019t need food or air and doesn\u2019t age.",
				"Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut\u2014something that can happen only when an effect specifically states that it does\u2014your soul and body are separated, killing you instantly.",
				"Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.",
				"The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature\u2019s original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature\u2019s astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:astral-projection",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:blade-of-disaster",
			"index": "blade-of-disaster",
			"slug": "blade-of-disaster",
			"name": "Blade of Disaster",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Conjuration",
			"castingTime": "1 Bonus Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage).",
				"As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again.",
				"The blade can harmlessly pass through any barrier, including a Wall of Force ."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:blade-of-disaster",
			"sourceBook": "Tasha's Cauldron of Everything",
			"tables": []
		},
		{
			"href": "/spell:foresight",
			"index": "foresight",
			"slug": "foresight",
			"name": "Foresight",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Divination",
			"castingTime": "1 Minute",
			"range": "Touch",
			"duration": "8 hours",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a hummingbird feather)",
				"materialText": "a hummingbird feather"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Druid",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can\u2019t be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. This spell immediately ends if you cast it again before its duration ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:foresight",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:gate",
			"index": "gate",
			"slug": "gate",
			"name": "Gate",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a diamond worth at least 5,000 gp)",
				"materialText": "a diamond worth at least 5,000 gp"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Cleric",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.",
				"The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.",
				"Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.",
				"When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn\u2019t work). If that creature is on a plane other than the one you are on, the portal opens in the named creature\u2019s immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:gate",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:imprisonment",
			"index": "imprisonment",
			"slug": "imprisonment",
			"name": "Imprisonment",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Abjuration",
			"castingTime": "1 Minute",
			"range": "30 feet",
			"duration": "Until dispelled",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target)",
				"materialText": "a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn\u2019t age. Divination spells can\u2019t locate or perceive the target.",
				"During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature\u2019s name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points.",
				"A Dispel Magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.",
				"You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding.",
				"When you cast the spell, you choose one of the following forms of imprisonment."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:imprisonment",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:invulnerability",
			"index": "invulnerability",
			"slug": "invulnerability",
			"name": "Invulnerability",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small piece of adamantine worth at least 500 gp, which the spell consumes)",
				"materialText": "a small piece of adamantine worth at least 500 gp, which the spell consumes"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You are immune to all damage until the spell ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:invulnerability",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:mass-heal",
			"index": "mass-heal",
			"slug": "mass-heal",
			"name": "Mass Heal",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric"
			],
			"description": [
				"A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mass-heal",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:mass-polymorph",
			"index": "mass-polymorph",
			"slug": "mass-polymorph",
			"name": "Mass Polymorph",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a caterpillar cocoon)",
				"materialText": "a caterpillar cocoon"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.",
				"Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target\u2019s (or half the target\u2019s level, if the target doesn\u2019t have a challenge rating). The target\u2019s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.",
				"Each target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can\u2019t be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form.",
				"The creature is limited in the actions it can perform by the nature of its new form. It can\u2019t speak, cast spells, or do anything else that requires hands or speech. The target\u2019s gear melds into the new form.",
				"The target can\u2019t activate, use, wield, or otherwise benefit from any of its equipment."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:mass-polymorph",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:meteor-swarm",
			"index": "meteor-swarm",
			"slug": "meteor-swarm",
			"name": "Meteor Swarm",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "1 mile",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.",
				"The spell damages objects in the area and ignites flammable objects that aren\u2019t being worn or carried."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:meteor-swarm",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:power-word-heal",
			"index": "power-word-heal",
			"slug": "power-word-heal",
			"name": "Power Word: Heal",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Cleric"
			],
			"description": [
				"A wave of healing energy washes over a creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:power-word-heal",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:power-word-kill",
			"index": "power-word-kill",
			"slug": "power-word-kill",
			"name": "Power Word: Kill",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you chose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:power-word-kill",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:prismatic-wall",
			"index": "prismatic-wall",
			"slug": "prismatic-wall",
			"name": "Prismatic Wall",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Abjuration",
			"castingTime": "1 Action",
			"range": "60 feet",
			"duration": "10 minutes",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Wizard"
			],
			"description": [
				"A shimmering, multicolored plane of light forms a vertical opaque wall \u2013 up to 90 feet long, 30 feet high, and 1 inch thick \u2013 centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.",
				"The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute.",
				"The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall\u2019s layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer\u2019s properties as described below.",
				"The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. An Antimagic Field has no effect on it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:prismatic-wall",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"Color",
						"Effect"
					],
					"rows": [
						[
							"Red",
							"The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can\u2019t pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it."
						],
						[
							"Orange",
							"The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can\u2019t pass through the wall. The layer is destroyed by a strong wind."
						],
						[
							"Yellow",
							"The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it."
						],
						[
							"Green",
							"The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A Passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer."
						],
						[
							"Blue",
							"The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it."
						],
						[
							"Indigo",
							"On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don\u2019t need to be consecutive; keep track of both until the creature collects three of a kind. While this layer is in place, spells can\u2019t be cast through the wall. The layer is destroyed by bright light shed by a Daylight spell or a similar spell of equal or higher level."
						],
						[
							"Violet",
							"On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM\u2019s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn\u2019t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a Dispel Magic spell or similar spell of equal or higher level that can end spells and magical effects."
						]
					]
				}
			]
		},
		{
			"href": "/spell:psychic-scream",
			"index": "psychic-scream",
			"slug": "psychic-scream",
			"name": "Psychic Scream",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Enchantment",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": false,
				"somatic": true,
				"material": false,
				"raw": "S"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Bard",
				"Sorcerer",
				"Warlock",
				"Wizard"
			],
			"description": [
				"You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected. Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn\u2019t stunned. If a target is killed by this damage, its head explodes, assuming it has one.",
				"A stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:psychic-scream",
			"sourceBook": "Xanathar's Guide to Everything",
			"tables": []
		},
		{
			"href": "/spell:ravenous-void",
			"index": "ravenous-void",
			"slug": "ravenous-void",
			"name": "Ravenous Void",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Evocation",
			"castingTime": "1 Action",
			"range": "1,000 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a small, nine-pointed star made of iron)",
				"materialText": "a small, nine-pointed star made of iron"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You create a 20-foot-radius sphere of destructive gravitation force centered on a point you can see within range. For the spell's duration, the sphere and any space within 100 feet of it are difficult terrain, and nonmagical objects fully inside the sphere are destroyed if they aren't being worn or carried.",
				"When the sphere appears and at the start of each of your turns until the spell ends, unsecured objects within 100 feet of the sphere are pulled toward the sphere's center, ending in an unoccupied space as close to the center as possible.",
				"A creature that starts its turn within 100 feet of the sphere must succeed on a Strength saving throw or be pulled straight toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that enters the sphere for the first time on a turn or starts its turn there takes 5d10 force damage and is restrained until it is no longer in the sphere. If the sphere is in the air, the restrained creature hovers inside the sphere. A creature can use its action to make a Strength check against your spell save DC, ending this restrained condition on itself or another creature in the sphere that it can reach. A creature reduced to 0 hit points by this spell is annihilated, along with any nonmagical items it is wearing or carrying."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:ravenous-void",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:shapechange",
			"index": "shapechange",
			"slug": "shapechange",
			"name": "Shapechange",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell)",
				"materialText": "a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid",
				"Wizard"
			],
			"description": [
				"You assume the form of a different creature for the duration. The new form can be any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.",
				"Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature, If the creature has the same proficiency as you, and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.",
				"You assume the hit points and Hit Dice of the new form. When you revert to your normal, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hitpoints, you aren't knocked unconscious.",
				"You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.",
				"When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.",
				"During this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:shapechange",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:storm-of-vengeance",
			"index": "storm-of-vengeance",
			"slug": "storm-of-vengeance",
			"name": "Storm of Vengeance",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Sight",
			"duration": "Concentration up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Druid"
			],
			"description": [
				"A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.",
				"Each round you maintain concentration on this spell, the storm produces different effects on your turn.",
				"Storm of Vengeance After Round 1"
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:storm-of-vengeance",
			"sourceBook": "Player's Handbook",
			"tables": [
				{
					"headers": [
						"Round",
						"Effect"
					],
					"rows": [
						[
							"2",
							"Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage."
						],
						[
							"3",
							"You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can\u2019t be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one."
						],
						[
							"4",
							"Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage."
						],
						[
							"5-10",
							"Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area whether mundane or magical."
						]
					]
				}
			]
		},
		{
			"href": "/spell:time-ravage",
			"index": "time-ravage",
			"slug": "time-ravage",
			"name": "Time Ravage",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Necromancy",
			"castingTime": "1 Action",
			"range": "90 feet",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (an hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes)",
				"materialText": "an hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Wizard"
			],
			"description": [
				"You target a creature you can see within range, putting its physical form through the devastation of rapid aging. The target must make a Constitution saving throw, taking 10d12 necrotic damage on a failed save, or half as much damage on a successful one. If the save fails, the target also ages to the point where it has only 30 days left before it dies of old age. In this aged state, the target has disadvantage on attack rolls, ability checks, and saving throws, and its walking speed is halved. Only the Wish spell or the Greater Restoration spell cast with a 9th-level spell slot can end these effects and restore the target to its previous age."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:time-ravage",
			"sourceBook": "Explorer's Guide to Wildemount",
			"tables": []
		},
		{
			"href": "/spell:time-stop",
			"index": "time-stop",
			"slug": "time-stop",
			"name": "Time Stop",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.",
				"This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:time-stop",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:true-polymorph",
			"index": "true-polymorph",
			"slug": "true-polymorph",
			"name": "True Polymorph",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Transmutation",
			"castingTime": "1 Action",
			"range": "30 feet",
			"duration": "Concentration, up to 1 hour",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)",
				"materialText": "a drop of mercury, a dollop of gum arabic, and a wisp of smoke"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Bard",
				"Warlock",
				"Wizard"
			],
			"description": [
				"Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into a nonmagical object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent.",
				"Shapechangers aren't affected by this spell. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell.",
				"This spell can't affect a target that has 0 hit points."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:true-polymorph",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:true-resurrection",
			"index": "true-resurrection",
			"slug": "true-resurrection",
			"name": "True Resurrection",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Necromancy",
			"castingTime": "1 Hour",
			"range": "Touch",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": true,
				"raw": "V, S, M (a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes)",
				"materialText": "a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Cleric",
				"Druid"
			],
			"description": [
				"You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature\u2019s soul is free and willing, the creature is restored to life with all its hit points.",
				"This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs or limbs. If the creature was undead, it is restored to its non-undead form.",
				"The spell can even provide a new body if the original no longer exists, in which case you must speak the creature\u2019s name. The creature then appears in an unoccupied space you choose within 10 feet of you."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:true-resurrection",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:weird",
			"index": "weird",
			"slug": "weird",
			"name": "Weird",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Illusion",
			"castingTime": "1 Action",
			"range": "120 feet",
			"duration": "Concentration, up to 1 minute",
			"components": {
				"verbal": true,
				"somatic": true,
				"material": false,
				"raw": "V, S"
			},
			"concentration": true,
			"ritual": false,
			"classes": [
				"Warlock",
				"Wizard"
			],
			"description": [
				"Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them.",
				"Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature\u2019s deepest fears, manifesting its worst nightmares as an implacable threat. At the end of each of the frightened creature\u2019s turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:weird",
			"sourceBook": "Player's Handbook",
			"tables": []
		},
		{
			"href": "/spell:wish",
			"index": "wish",
			"slug": "wish",
			"name": "Wish",
			"level": 9,
			"levelLabel": "9th Level",
			"levelSlug": "9th-level",
			"school": "Conjuration",
			"castingTime": "1 Action",
			"range": "Self",
			"duration": "Instantaneous",
			"components": {
				"verbal": true,
				"somatic": false,
				"material": false,
				"raw": "V"
			},
			"concentration": false,
			"ritual": false,
			"classes": [
				"Sorcerer",
				"Wizard"
			],
			"description": [
				"Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.",
				"The basic use of this spell is to duplicate any other spell of 8th level or lower. You don\u2019t need to meet any requirements in that spell, including costly components. The spell simply takes effect.",
				"Alternatively, you can create one of the following effects of your choice:",
				"You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item\u2019s current owner.",
				"The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can\u2019t be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn\u2019t 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress."
			],
			"higherLevel": [],
			"sourceUrl": "https://dnd5e.wikidot.com/spell:wish",
			"sourceBook": "Player's Handbook",
			"tables": []
		}
	],
	"spellClasses": [
		"Artificer",
		"Bard",
		"Cleric",
		"Druid",
		"Paladin",
		"Ranger",
		"Sorcerer",
		"Warlock",
		"Wizard"
	],
	"spellSchools": [
		"Abjuration",
		"Conjuration",
		"Divination",
		"Enchantment",
		"Evocation",
		"Illusion",
		"Necromancy",
		"Transmutation"
	],
	"spellLevels": [
		{
			"level": 0,
			"label": "Cantrip",
			"slug": "cantrips"
		},
		{
			"level": 1,
			"label": "1st Level",
			"slug": "1st-level"
		},
		{
			"level": 2,
			"label": "2nd Level",
			"slug": "2nd-level"
		},
		{
			"level": 3,
			"label": "3rd Level",
			"slug": "3rd-level"
		},
		{
			"level": 4,
			"label": "4th Level",
			"slug": "4th-level"
		},
		{
			"level": 5,
			"label": "5th Level",
			"slug": "5th-level"
		},
		{
			"level": 6,
			"label": "6th Level",
			"slug": "6th-level"
		},
		{
			"level": 7,
			"label": "7th Level",
			"slug": "7th-level"
		},
		{
			"level": 8,
			"label": "8th Level",
			"slug": "8th-level"
		},
		{
			"level": 9,
			"label": "9th Level",
			"slug": "9th-level"
		}
	]
} as const;

export const spells: readonly SpellData[] = generated.spells;
export const spellClasses = generated.spellClasses;
export const spellSchools = generated.spellSchools;
export const spellLevels = generated.spellLevels;

export function getSpellsByLevel(level: SpellLevel): readonly SpellData[] {
	return spells.filter((spell) => spell.level === level);
}

export function getSpellBySlug(slug: string): SpellData | undefined {
	return spells.find((spell) => spell.slug === slug);
}
