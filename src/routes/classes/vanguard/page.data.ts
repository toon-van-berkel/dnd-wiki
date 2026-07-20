import type { ClassProgressionData } from '$lib/pages/ClassProgression/ClassProgression-Types';
import type { ClassTraitsData } from '$lib/pages/ClassTraits/ClassTraits-Types';

export type VanguardSpellEntry = {
	name: string;
	href?: string;
	homebrew?: boolean;
	status?: 'available' | 'details-pending';
};

export type VanguardSpellLevel = {
	level: number;
	label: string;
	spells: readonly VanguardSpellEntry[];
};

export const vanguardIntroParagraphs = [
	"Vanguards are bound not by sacred oaths or ancient bloodlines, but by an unshakable resolve to stand between danger and those who cannot face it alone. Their strength is born from compassion, their magic fueled by an unwavering will to aid others, no matter the sacrifice. To a Vanguard, every life is worth protecting, and every battle is another chance to become the shield that others can rely upon.",
	"Vanguards dedicate themselves to mastering supportive magic and battlefield tactics, empowering allies while unraveling the resolve of their enemies. Their spells bolster the weary, strengthen the courageous, and turn the tide of battle through careful guidance rather than overwhelming force. At the same time, they sap the strength and spirit of those who threaten the innocent, ensuring their companions always fight with the advantage.",
	"For a Vanguard, the call to adventure is a call to service. Whether defending a village from invading monsters, standing beside heroes against impossible odds, or offering hope where all seems lost, they place themselves in harm's way so that others do not have to. Their greatest victories are not measured by the foes they defeat, but by the lives they save.",
] as const;

export const vanguardCoreTraits = {
	imageHref: '/classes/vanguard',
	imageAlt: 'Vanguard class artwork.',
	rows: [
		{ label: "Primary ability", value: [{ text: "Charisma" }] },
		{ label: "Hit point die", value: [{ text: "D8 per vanguard level" }] },
		{ label: "Saving throw proficiencies", value: [{ text: "Charisma and wisdom" }] },
		{
			label: "Skill proficiencies",
			value: [
				{ text: "Chose 2:" },
				{ items: ["animal handling", "insight", "medicine", "arcana", "history", "persuasion"] }
			]
		},
		{ label: "Weapon proficiencies", value: [{ text: "Simple weapons" }] },
		{ label: "Armor training", value: [{ text: "Licht, medium, and heavy armor and shields" }] },
		{
			label: "Starting equipment",
			value: [
				{ text: "Chose A or B:" },
				{ items: ["(A) chain shirt, shield, 5 potions of healing, dungeoneer’s pack, and 30 gold", "or (B) 115 gold"] }
			]
		},
	]
} satisfies ClassTraitsData;

export const vanguardProgression = {
	caption: 'The Vanguard',
	description: '-----Spell slots per level------',
	metrics: [
		{ key: "cantrips", label: "cantrips", shortLabel: "Cantrips" },
		{ key: "preparedSpells", label: "Prepared spells", shortLabel: "Prepared" },
		{ key: "spellSlots1", label: "1st-level spell slots", shortLabel: "1st" },
		{ key: "spellSlots2", label: "2nd-level spell slots", shortLabel: "2nd" },
		{ key: "spellSlots3", label: "3rd-level spell slots", shortLabel: "3rd" },
		{ key: "spellSlots4", label: "4th-level spell slots", shortLabel: "4th" },
		{ key: "spellSlots5", label: "5th-level spell slots", shortLabel: "5th" },
		{ key: "spellSlots6", label: "6th-level spell slots", shortLabel: "6th" },
		{ key: "spellSlots7", label: "7th-level spell slots", shortLabel: "7th" },
		{ key: "spellSlots8", label: "8th-level spell slots", shortLabel: "8th" },
		{ key: "spellSlots9", label: "9th-level spell slots", shortLabel: "9th" },
	],
	rows: [
		{
			level: 1,
			proficiencyBonus: 2,
			features: [{"label": "helpful companion", "href": "#helpful-companion"}],
			values: {"cantrips": "3", "preparedSpells": "4", "spellSlots1": "3", "spellSlots2": "-", "spellSlots3": "-", "spellSlots4": "-", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 2,
			proficiencyBonus: 2,
			features: [{"label": "tool points", "href": "#tool-points"}],
			values: {"cantrips": "3", "preparedSpells": "5", "spellSlots1": "3", "spellSlots2": "-", "spellSlots3": "-", "spellSlots4": "-", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 3,
			proficiencyBonus: 2,
			features: [{"label": "vanguard subclass", "href": "#vanguard-subclass"}],
			values: {"cantrips": "3", "preparedSpells": "6", "spellSlots1": "4", "spellSlots2": "2", "spellSlots3": "-", "spellSlots4": "-", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 4,
			proficiencyBonus: 2,
			features: [{"label": "ability score improvement", "href": "#ability-score-improvement"}],
			values: {"cantrips": "4", "preparedSpells": "7", "spellSlots1": "4", "spellSlots2": "3", "spellSlots3": "-", "spellSlots4": "-", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 5,
			proficiencyBonus: 3,
			features: [{"label": "instant assistance", "href": "#instant-assistance"}],
			values: {"cantrips": "4", "preparedSpells": "8", "spellSlots1": "4", "spellSlots2": "3", "spellSlots3": "1", "spellSlots4": "-", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 6,
			proficiencyBonus: 3,
			features: [{"label": "protective aura", "href": "#protective-aura"}],
			values: {"cantrips": "4", "preparedSpells": "9", "spellSlots1": "4", "spellSlots2": "3", "spellSlots3": "2", "spellSlots4": "-", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 7,
			proficiencyBonus: 3,
			features: [{"label": "twinned spell", "href": "#twinned-spell"}],
			values: {"cantrips": "5", "preparedSpells": "10", "spellSlots1": "4", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "1", "spellSlots5": "-", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 8,
			proficiencyBonus: 3,
			features: [{"label": "ability score improvement", "href": "#ability-score-improvement"}],
			values: {"cantrips": "5", "preparedSpells": "11", "spellSlots1": "5", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "2", "spellSlots5": "1", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 9,
			proficiencyBonus: 4,
			features: [{"label": "-"}],
			values: {"cantrips": "5", "preparedSpells": "12", "spellSlots1": "5", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "3", "spellSlots5": "2", "spellSlots6": "-", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 10,
			proficiencyBonus: 4,
			features: [{"label": "familiar drain", "href": "#familiar-drain"}],
			values: {"cantrips": "5", "preparedSpells": "13", "spellSlots1": "5", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "3", "spellSlots5": "2", "spellSlots6": "1", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 11,
			proficiencyBonus: 4,
			features: [{"label": "large protective aura", "href": "#large-protective-aura"}],
			values: {"cantrips": "5", "preparedSpells": "14", "spellSlots1": "5", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "3", "spellSlots5": "3", "spellSlots6": "1", "spellSlots7": "-", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 12,
			proficiencyBonus: 4,
			features: [{"label": "vanguards aura", "href": "#vanguards-aura"}],
			values: {"cantrips": "5", "preparedSpells": "15", "spellSlots1": "5", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "3", "spellSlots5": "3", "spellSlots6": "1", "spellSlots7": "1", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 13,
			proficiencyBonus: 5,
			features: [{"label": "-"}],
			values: {"cantrips": "5", "preparedSpells": "16", "spellSlots1": "5", "spellSlots2": "3", "spellSlots3": "3", "spellSlots4": "3", "spellSlots5": "3", "spellSlots6": "1", "spellSlots7": "1", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 14,
			proficiencyBonus: 5,
			features: [{"label": "ability score improvement", "href": "#ability-score-improvement"}],
			values: {"cantrips": "6", "preparedSpells": "16", "spellSlots1": "6", "spellSlots2": "4", "spellSlots3": "3", "spellSlots4": "3", "spellSlots5": "3", "spellSlots6": "2", "spellSlots7": "1", "spellSlots8": "-", "spellSlots9": "-"}
		},
		{
			level: 15,
			proficiencyBonus: 5,
			features: [{"label": "-"}],
			values: {"cantrips": "6", "preparedSpells": "17", "spellSlots1": "6", "spellSlots2": "4", "spellSlots3": "4", "spellSlots4": "3", "spellSlots5": "3", "spellSlots6": "2", "spellSlots7": "1", "spellSlots8": "1", "spellSlots9": "-"}
		},
		{
			level: 16,
			proficiencyBonus: 5,
			features: [{"label": "prepared resistance", "href": "#prepared-resistance"}],
			values: {"cantrips": "6", "preparedSpells": "17", "spellSlots1": "6", "spellSlots2": "4", "spellSlots3": "4", "spellSlots4": "4", "spellSlots5": "3", "spellSlots6": "2", "spellSlots7": "2", "spellSlots8": "1", "spellSlots9": "-"}
		},
		{
			level: 17,
			proficiencyBonus: 6,
			features: [{"label": "-"}],
			values: {"cantrips": "6", "preparedSpells": "18", "spellSlots1": "6", "spellSlots2": "4", "spellSlots3": "4", "spellSlots4": "4", "spellSlots5": "3", "spellSlots6": "2", "spellSlots7": "2", "spellSlots8": "1", "spellSlots9": "1"}
		},
		{
			level: 18,
			proficiencyBonus: 6,
			features: [{"label": "neutralize damage", "href": "#neutralize-damage"}],
			values: {"cantrips": "6", "preparedSpells": "19", "spellSlots1": "7", "spellSlots2": "4", "spellSlots3": "4", "spellSlots4": "4", "spellSlots5": "4", "spellSlots6": "2", "spellSlots7": "2", "spellSlots8": "1", "spellSlots9": "1"}
		},
		{
			level: 19,
			proficiencyBonus: 6,
			features: [{"label": "epic boon", "href": "#epic-boon"}],
			values: {"cantrips": "7", "preparedSpells": "20", "spellSlots1": "8", "spellSlots2": "4", "spellSlots3": "4", "spellSlots4": "4", "spellSlots5": "4", "spellSlots6": "3", "spellSlots7": "2", "spellSlots8": "1", "spellSlots9": "1"}
		},
		{
			level: 20,
			proficiencyBonus: 6,
			features: [{"label": "ultimate power up", "href": "#ultimate-power-up"}],
			values: {"cantrips": "7", "preparedSpells": "21", "spellSlots1": "8", "spellSlots2": "5", "spellSlots3": "4", "spellSlots4": "4", "spellSlots5": "4", "spellSlots6": "3", "spellSlots7": "2", "spellSlots8": "2", "spellSlots9": "1"}
		},
	]
} satisfies ClassProgressionData;

export const vanguardSpellLevels = [{"level": 0, "label": "Cantrips", "spells": [{"name": "Guidance", "href": "https://dnd5e.wikidot.com/spell:guidance"}, {"name": "Light", "href": "https://dnd5e.wikidot.com/spell:light"}, {"name": "Mending", "href": "https://dnd5e.wikidot.com/spell:mending"}, {"name": "Spare the dying", "href": "https://dnd5e.wikidot.com/spell:spare-the-dying"}, {"name": "Virtue", "href": "https://dnd5e.wikidot.com/spell:virtue"}, {"name": "Friends", "href": "https://dnd5e.wikidot.com/spell:friends"}, {"name": "Mage hand", "href": "https://dnd5e.wikidot.com/spell:mage-hand"}, {"name": "True strike", "href": "https://dnd5e.wikidot.com/spell:true-strike"}, {"name": "Resistance", "href": "https://dnd5e.wikidot.com/spell:resistance"}, {"name": "Mind sliver", "href": "https://dnd5e.wikidot.com/spell:mind-sliver"}, {"name": "Frostbite", "href": "https://dnd5e.wikidot.com/spell:frostbite"}, {"name": "Sapping sting", "href": "https://dnd5e.wikidot.com/spell:sapping-sting"}, {"name": "Thaumaturgy", "href": "https://dnd5e.wikidot.com/spell:thaumaturgy"}, {"name": "Chill touch", "href": "https://dnd5e.wikidot.com/spell:chill-touch"}, {"name": "Zapp Zapp", "homebrew": true, "status": "details-pending"}, {"name": "Wind of fortune", "homebrew": true, "status": "details-pending"}]}, {"level": 1, "label": "1st level", "spells": [{"name": "Bless", "href": "https://dnd5e.wikidot.com/spell:bless"}, {"name": "Bane", "href": "https://dnd5e.wikidot.com/spell:bane"}, {"name": "Heroism", "href": "https://dnd5e.wikidot.com/spell:heroism"}, {"name": "Healing word", "href": "https://dnd5e.wikidot.com/spell:healing-word"}, {"name": "Cure wounds", "href": "https://dnd5e.wikidot.com/spell:cure-wounds"}, {"name": "sanctuary", "href": "https://dnd5e.wikidot.com/spell:sanctuary"}, {"name": "Shield of faith", "href": "https://dnd5e.wikidot.com/spell:shield-of-faith"}, {"name": "Command", "href": "https://dnd5e.wikidot.com/spell:command"}, {"name": "Tasha’s hideous laughter", "href": "https://dnd5e.wikidot.com/spell:tashas-hideous-laughter"}, {"name": "Ray of sickness", "href": "https://dnd5e.wikidot.com/spell:ray-of-sickness"}, {"name": "Cause fear", "href": "https://dnd5e.wikidot.com/spell:cause-fear"}, {"name": "Entangle", "href": "https://dnd5e.wikidot.com/spell:entangle"}, {"name": "Fog cloud", "href": "https://dnd5e.wikidot.com/spell:fog-cloud"}, {"name": "Grease", "href": "https://dnd5e.wikidot.com/spell:grease"}, {"name": "Protection from evil and good", "href": "https://dnd5e.wikidot.com/spell:protection-from-evil-and-good"}, {"name": "Shield", "href": "https://dnd5e.wikidot.com/spell:shield"}, {"name": "Absorb elements", "href": "https://dnd5e.wikidot.com/spell:absorb-elements"}, {"name": "find familiar", "href": "https://dnd5e.wikidot.com/spell:find-familiar"}, {"name": "Detect magic", "href": "https://dnd5e.wikidot.com/spell:detect-magic"}, {"name": "Comprehend languages", "href": "https://dnd5e.wikidot.com/spell:comprehend-languages"}, {"name": "Identify", "href": "https://dnd5e.wikidot.com/spell:identify"}, {"name": "Arcane tracking", "homebrew": true, "status": "details-pending"}]}, {"level": 2, "label": "2th level", "spells": [{"name": "Aid", "href": "https://dnd5e.wikidot.com/spell:aid"}, {"name": "Lesser restoration", "href": "https://dnd5e.wikidot.com/spell:lesser-restoration"}, {"name": "Enhance ability", "href": "https://dnd5e.wikidot.com/spell:enhance-ability"}, {"name": "Warding bond", "href": "https://dnd5e.wikidot.com/spell:warding-bond"}, {"name": "Blindness/deafness", "href": "https://dnd5e.wikidot.com/spell:blindness-deafness"}, {"name": "Hold person", "href": "https://dnd5e.wikidot.com/spell:hold-person"}, {"name": "Ray of enfeeblement", "href": "https://dnd5e.wikidot.com/spell:ray-of-enfeeblement"}, {"name": "Mind spike", "href": "https://dnd5e.wikidot.com/spell:mind-spike"}, {"name": "web", "href": "https://dnd5e.wikidot.com/spell:web"}, {"name": "Silence", "href": "https://dnd5e.wikidot.com/spell:silence"}, {"name": "Calm emotions", "href": "https://dnd5e.wikidot.com/spell:calm-emotions"}, {"name": "Zone of truth", "href": "https://dnd5e.wikidot.com/spell:zone-of-truth"}, {"name": "Protection from poison", "href": "https://dnd5e.wikidot.com/spell:protection-from-poison"}, {"name": "Magic weapon", "href": "https://dnd5e.wikidot.com/spell:magic-weapon"}, {"name": "Misty step", "href": "https://dnd5e.wikidot.com/spell:misty-step"}, {"name": "Vortex warp", "href": "https://dnd5e.wikidot.com/spell:vortex-warp"}, {"name": "Enlarge/reduce", "href": "https://dnd5e.wikidot.com/spell:enlarge-reduce"}, {"name": "Borrowed knowledge", "href": "https://dnd5e.wikidot.com/spell:borrowed-knowledge"}, {"name": "See invisibility", "href": "https://dnd5e.wikidot.com/spell:see-invisibility"}, {"name": "Locate object", "href": "https://dnd5e.wikidot.com/spell:locate-object"}, {"name": "Tasha’s mind whip", "href": "https://dnd5e.wikidot.com/spell:tashas-mind-whip"}, {"name": "Wither and bloom", "href": "https://dnd5e.wikidot.com/spell:wither-and-bloom"}, {"name": "B’dooga’s melody", "homebrew": true, "status": "details-pending"}, {"name": "Soul stealer", "homebrew": true, "status": "details-pending"}, {"name": "Lion heart", "homebrew": true, "status": "details-pending"}]}, {"level": 3, "label": "3rd level", "spells": [{"name": "Beacon of hope", "href": "https://dnd5e.wikidot.com/spell:beacon-of-hope"}, {"name": "Mass healing word", "href": "https://dnd5e.wikidot.com/spell:mass-healing-word"}, {"name": "revivify", "href": "https://dnd5e.wikidot.com/spell:revivify"}, {"name": "Life transference", "href": "https://dnd5e.wikidot.com/spell:life-transference"}, {"name": "Clairvoyance", "href": "https://dnd5e.wikidot.com/spell:clairvoyance"}, {"name": "Crusader’s mantle", "href": "https://dnd5e.wikidot.com/spell:crusaders-mantle"}, {"name": "haste", "href": "https://dnd5e.wikidot.com/spell:haste"}, {"name": "fly", "href": "https://dnd5e.wikidot.com/spell:fly"}, {"name": "Magic circle", "href": "https://dnd5e.wikidot.com/spell:magic-circle"}, {"name": "slow", "href": "https://dnd5e.wikidot.com/spell:slow"}, {"name": "Bestow curse", "href": "https://dnd5e.wikidot.com/spell:bestow-curse"}, {"name": "fear", "href": "https://dnd5e.wikidot.com/spell:fear"}, {"name": "Hypnotic pattern", "href": "https://dnd5e.wikidot.com/spell:hypnotic-pattern"}, {"name": "Enemies abound", "href": "https://dnd5e.wikidot.com/spell:enemies-abound"}, {"name": "Spirit guardians", "href": "https://dnd5e.wikidot.com/spell:spirit-guardians"}, {"name": "Spirit shroud", "href": "https://dnd5e.wikidot.com/spell:spirit-shroud"}, {"name": "Lightning arrow", "href": "https://dnd5e.wikidot.com/spell:lightning-arrow"}, {"name": "Dispel magic", "href": "https://dnd5e.wikidot.com/spell:dispel-magic"}, {"name": "Remove curse", "href": "https://dnd5e.wikidot.com/spell:remove-curse"}, {"name": "tongues", "href": "https://dnd5e.wikidot.com/spell:tongues"}, {"name": "sending", "href": "https://dnd5e.wikidot.com/spell:sending"}, {"name": "Charm water", "homebrew": true, "status": "details-pending"}, {"name": "Crowd consealment", "homebrew": true, "status": "details-pending"}]}, {"level": 4, "label": "4th level", "spells": [{"name": "Death ward", "href": "https://dnd5e.wikidot.com/spell:death-ward"}, {"name": "Aura of purity", "href": "https://dnd5e.wikidot.com/spell:aura-of-purity"}, {"name": "Freedom of movement", "href": "https://dnd5e.wikidot.com/spell:freedom-of-movement"}, {"name": "Stone skin", "href": "https://dnd5e.wikidot.com/spell:stoneskin"}, {"name": "Guardian of faith", "href": "https://dnd5e.wikidot.com/spell:guardian-of-faith"}, {"name": "Fire shield", "href": "https://dnd5e.wikidot.com/spell:fire-shield"}, {"name": "banishment", "href": "https://dnd5e.wikidot.com/spell:banishment"}, {"name": "confusion", "href": "https://dnd5e.wikidot.com/spell:confusion"}, {"name": "Charm monster", "href": "https://dnd5e.wikidot.com/spell:charm-monster"}, {"name": "Wall of fire", "href": "https://dnd5e.wikidot.com/spell:wall-of-fire"}, {"name": "Watery sphere", "href": "https://dnd5e.wikidot.com/spell:watery-sphere"}, {"name": "Vitriolic sphere", "href": "https://dnd5e.wikidot.com/spell:vitriolic-sphere"}, {"name": "Spirit of death", "href": "https://dnd5e.wikidot.com/spell:spirit-of-death"}, {"name": "blight", "href": "https://dnd5e.wikidot.com/spell:blight"}, {"name": "Phantasmal killer", "href": "https://dnd5e.wikidot.com/spell:phantasmal-killer"}, {"name": "Dimention door", "href": "https://dnd5e.wikidot.com/spell:dimension-door"}, {"name": "polymorph", "href": "https://dnd5e.wikidot.com/spell:polymorph"}, {"name": "Locate creature", "href": "https://dnd5e.wikidot.com/spell:locate-creature"}, {"name": "divination", "href": "https://dnd5e.wikidot.com/spell:divination"}]}, {"level": 5, "label": "5th level", "spells": [{"name": "Greater restoration", "href": "https://dnd5e.wikidot.com/spell:greater-restoration"}, {"name": "Mass cure wounds", "href": "https://dnd5e.wikidot.com/spell:mass-cure-wounds"}, {"name": "Circle of power", "href": "https://dnd5e.wikidot.com/spell:circle-of-power"}, {"name": "Holy weapon", "href": "https://dnd5e.wikidot.com/spell:holy-weapon"}, {"name": "Skill empowerment", "href": "https://dnd5e.wikidot.com/spell:skill-empowerment"}, {"name": "Teleportation circle", "href": "https://dnd5e.wikidot.com/spell:teleportation-circle"}, {"name": "Telepathic bond", "href": "https://roll20.net/compendium/dnd5e/Telepathic%20Bond#content"}, {"name": "Hold monster", "href": "https://dnd5e.wikidot.com/spell:hold-monster"}, {"name": "Synaptic static", "href": "https://dnd5e.wikidot.com/spell:synaptic-static"}, {"name": "geas", "href": "https://dnd5e.wikidot.com/spell:geas"}, {"name": "contagion", "href": "https://dnd5e.wikidot.com/spell:contagion"}, {"name": "Wall of stone", "href": "https://dnd5e.wikidot.com/spell:wall-of-stone"}, {"name": "Wall of force", "href": "https://dnd5e.wikidot.com/spell:wall-of-force"}, {"name": "Transmute rock", "href": "https://dnd5e.wikidot.com/spell:transmute-rock"}, {"name": "Destructive wave", "href": "https://dnd5e.wikidot.com/spell:destructive-wave"}, {"name": "Flame strike", "href": "https://dnd5e.wikidot.com/spell:flame-strike"}, {"name": "Steel wind strike", "href": "https://dnd5e.wikidot.com/spell:steel-wind-strike"}, {"name": "Dispel evil and good", "href": "https://dnd5e.wikidot.com/spell:dispel-evil-and-good"}]}, {"level": 6, "label": "6th level", "spells": [{"name": "heal", "href": "https://dnd5e.wikidot.com/spell:heal"}, {"name": "Heroes’ feast", "href": "https://dnd5e.wikidot.com/spell:heroes-feast"}, {"name": "World of recall", "href": "https://dnd5e.wikidot.com/spell:word-of-recall"}, {"name": "True seeing", "href": "https://dnd5e.wikidot.com/spell:true-seeing"}, {"name": "Investiture of stone", "href": "https://dnd5e.wikidot.com/spell:investiture-of-stone"}, {"name": "Mass suggestion", "href": "https://dnd5e.wikidot.com/spell:mass-suggestion"}, {"name": "Otto’s irresistible dance", "href": "https://dnd5e.wikidot.com/spell:ottos-irresistible-dance"}, {"name": "Flesh to stone", "href": "https://dnd5e.wikidot.com/spell:flesh-to-stone"}, {"name": "Wall of ice", "href": "https://dnd5e.wikidot.com/spell:wall-of-ice"}, {"name": "Forbiddance", "href": "https://dnd5e.wikidot.com/spell:forbiddance"}, {"name": "harm", "href": "https://dnd5e.wikidot.com/spell:harm"}, {"name": "sunbeam", "href": "https://dnd5e.wikidot.com/spell:sunbeam"}, {"name": "Chain lightning", "href": "https://dnd5e.wikidot.com/spell:chain-lightning"}, {"name": "Find the path", "href": "https://dnd5e.wikidot.com/spell:find-the-path"}, {"name": "Arcane gate", "href": "https://dnd5e.wikidot.com/spell:arcane-gate"}]}, {"level": 7, "label": "7th level", "spells": [{"name": "regenerate", "href": "https://dnd5e.wikidot.com/spell:regenerate"}, {"name": "resurrection", "href": "https://dnd5e.wikidot.com/spell:resurrection"}, {"name": "Temple of the gods", "href": "https://dnd5e.wikidot.com/spell:temple-of-the-gods"}, {"name": "etherealness", "href": "https://dnd5e.wikidot.com/spell:etherealness"}, {"name": "Crown of stars", "href": "https://dnd5e.wikidot.com/spell:crown-of-stars"}, {"name": "Forcecage", "href": "https://dnd5e.wikidot.com/spell:forcecage"}, {"name": "Reverse gravity", "href": "https://dnd5e.wikidot.com/spell:reverse-gravity"}, {"name": "Power word: pain", "href": "https://dnd5e.wikidot.com/spell:power-word-pain"}, {"name": "symbol", "href": "https://dnd5e.wikidot.com/spell:symbol"}, {"name": "Fire storm", "href": "https://dnd5e.wikidot.com/spell:fire-storm"}, {"name": "whirlwind", "href": "https://dnd5e.wikidot.com/spell:whirlwind"}, {"name": "Prismatic spray", "href": "https://dnd5e.wikidot.com/spell:prismatic-spray"}, {"name": "Plane shift", "href": "https://dnd5e.wikidot.com/spell:plane-shift"}, {"name": "teleport", "href": "https://dnd5e.wikidot.com/spell:teleport"}]}, {"level": 8, "label": "8th level", "spells": [{"name": "Holy aura", "href": "https://dnd5e.wikidot.com/spell:holy-aura"}, {"name": "Antimagic field", "href": "https://dnd5e.wikidot.com/spell:antimagic-field"}, {"name": "Feeblemind", "href": "https://dnd5e.wikidot.com/spell:feeblemind"}, {"name": "Dominate monster", "href": "https://dnd5e.wikidot.com/spell:dominate-monster"}, {"name": "Power word: stun", "href": "https://dnd5e.wikidot.com/spell:power-word-stun"}, {"name": "earthquake", "href": "https://dnd5e.wikidot.com/spell:earthquake"}, {"name": "Incendiary cloud", "href": "https://dnd5e.wikidot.com/spell:incendiary-cloud"}, {"name": "sunburst", "href": "https://dnd5e.wikidot.com/spell:sunburst"}, {"name": "Abi-dalzim’s horrid wilting", "href": "https://dnd5e.wikidot.com/spell:abi-dalzims-horrid-wilting"}]}, {"level": 9, "label": "9th level", "spells": [{"name": "Mass heal", "href": "https://dnd5e.wikidot.com/spell:mass-heal"}, {"name": "True resurrection", "href": "https://dnd5e.wikidot.com/spell:true-resurrection"}, {"name": "Psychic scream", "href": "https://dnd5e.wikidot.com/spell:psychic-scream"}, {"name": "Prismatic wall", "href": "https://dnd5e.wikidot.com/spell:prismatic-wall"}, {"name": "Power word: kill", "href": "https://dnd5e.wikidot.com/spell:power-word-kill"}, {"name": "foresight", "href": "https://dnd5e.wikidot.com/spell:foresight"}, {"name": "True polymorph", "href": "https://dnd5e.wikidot.com/spell:true-polymorph"}, {"name": "gate", "href": "https://dnd5e.wikidot.com/spell:gate"}]}] as const satisfies readonly VanguardSpellLevel[];

export const vanguardHomebrewSpellLevels = [
	{
		level: 0,
		label: 'Cantrips',
		spells: [
			{ name: "Zapp Zapp", homebrew: true, status: 'details-pending' },
			{ name: "Wind of fortune", homebrew: true, status: 'details-pending' },
		]
	},
	{
		level: 1,
		label: '1st level',
		spells: [
			{ name: "Arcane tracking", homebrew: true, status: 'details-pending' },
		]
	},
	{
		level: 2,
		label: '2th level',
		spells: [
			{ name: "B’dooga’s melody", homebrew: true, status: 'details-pending' },
			{ name: "Soul stealer", homebrew: true, status: 'details-pending' },
			{ name: "Lion heart", homebrew: true, status: 'details-pending' },
		]
	},
	{
		level: 3,
		label: '3rd level',
		spells: [
			{ name: "Charm water", homebrew: true, status: 'details-pending' },
			{ name: "Crowd consealment", homebrew: true, status: 'details-pending' },
		]
	}
] as const satisfies readonly VanguardSpellLevel[];
