/*
	Location: src/lib/typescript/data/internals/classes/artificer.ts
	Use: Central Artificer class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/artificer",
	"img": {
		"href": "/icons/white/classes/artificer.svg",
		"alt": "A stylized Artificer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Artificer",
	"title": "D&D Portal - Artificer",
	"subTitle": "Character class",
	"description": "An Intelligence-based magical inventor who channels spells through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party.",
	"descriptions": {
		"short": "An Intelligence-based magical inventor who channels spells through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party.",
		"medium": "An Intelligence-based magical inventor who channels spells through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party.",
		"long": [
			[
				{
					"type": "text",
					"text": "An "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.intelligence",
					"label": "Intelligence"
				},
				{
					"type": "text",
					"text": "-based magical inventor who channels "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": " through tools, creates temporary magic items through infusions, and adapts equipment to the needs of the party."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Artificer is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.intelligence",
					"label": "Intelligence"
				},
				{
					"type": "text",
					"text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Artificer core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.intelligence",
					"label": "Intelligence"
				},
				{
					"type": "text",
					"text": "; prepared half-caster progression beginning at 1st level."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"artificer",
		"class",
		"2014"
	]
});

const subclasses = {
	alchemist: createInternalPage({
	"href": "/classes/artificer/alchemist",
	"img": {
		"href": "/icons/white/classes/artificer.svg",
		"alt": "A stylized Artificer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Alchemist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Alchemist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Alchemist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Alchemist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Alchemist",
	"title": "D&D Portal - Alchemist",
	"subTitle": "Artificer subclass",
	"description": "Potions, restorative magic, and experimental elixirs.",
	"descriptions": {
		"short": "Potions, restorative magic, and experimental elixirs.",
		"medium": "Alchemist: Potions, restorative magic, and experimental elixirs.",
		"long": [
			[
				{
					"type": "text",
					"text": "Potions, restorative magic, and experimental elixirs."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.artificer.page"
	},
	"tags": [
		"artificer",
		"subclass",
		"alchemist"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War",
		"featureSections": [
			{
				"id": "tool-proficiency-alchemist-spells-experimental-elixir",
				"title": "Tool Proficiency; Alchemist Spells; Experimental Elixir",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain alchemist\u2019s supplies proficiency, an always-prepared specialty "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " list, and experimental elixirs that provide healing or temporary magical benefits."
							}
						]
					}
				]
			},
			{
				"id": "alchemical-savant",
				"title": "Alchemical Savant",
				"subtitle": "5th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
							},
							{
								"type": "text",
								"text": " to one damage or healing roll of qualifying artificer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " cast through alchemist\u2019s supplies."
							}
						]
					}
				]
			},
			{
				"id": "restorative-reagents",
				"title": "Restorative Reagents",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Experimental elixirs also grant "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": ", and you gain limited free uses of Lesser Restoration."
							}
						]
					}
				]
			},
			{
				"id": "chemical-mastery",
				"title": "Chemical Mastery",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain resistance to "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.acid",
								"label": "acid"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.poison",
								"label": "poison"
							},
							{
								"type": "text",
								"text": ", immunity to the "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.poisoned",
								"label": "poisoned"
							},
							{
								"type": "text",
								"text": " condition, and limited free uses of Greater Restoration and Heal."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "tool-proficiency-alchemist-spells-experimental-elixir",
				"title": "Tool Proficiency; Alchemist Spells; Experimental Elixir"
			},
			{
				"id": "alchemical-savant",
				"title": "Alchemical Savant"
			},
			{
				"id": "restorative-reagents",
				"title": "Restorative Reagents"
			},
			{
				"id": "chemical-mastery",
				"title": "Chemical Mastery"
			}
		]
	}
}),
	armorer: createInternalPage({
	"href": "/classes/artificer/armorer",
	"img": {
		"href": "/icons/white/classes/artificer.svg",
		"alt": "A stylized Artificer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Armorer Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Armorer Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Armorer Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Armorer Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Armorer",
	"title": "D&D Portal - Armorer",
	"subTitle": "Artificer subclass",
	"description": "Custom arcane armor with Guardian and Infiltrator configurations.",
	"descriptions": {
		"short": "Custom arcane armor with Guardian and Infiltrator configurations.",
		"medium": "Armorer: Custom arcane armor with Guardian and Infiltrator configurations.",
		"long": [
			[
				{
					"type": "text",
					"text": "Custom arcane armor with Guardian and Infiltrator configurations."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.artificer.page"
	},
	"tags": [
		"artificer",
		"subclass",
		"armorer"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "tools-of-the-trade-armorer-spells-arcane-armor-armor-model",
				"title": "Tools of the Trade; Armorer Spells; Arcane Armor; Armor Model",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain heavy-armor and smith\u2019s-tools training, an always-prepared "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " list, and customizable arcane armor. Choose Guardian for defense and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
							},
							{
								"type": "text",
								"text": " gauntlets or Infiltrator for "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "stealth"
							},
							{
								"type": "text",
								"text": " and a "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " launcher."
							}
						]
					}
				]
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack",
				"subtitle": "5th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attack twice when taking the "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.attackAction",
								"label": "Attack action"
							},
							{
								"type": "text",
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "armor-modifications",
				"title": "Armor Modifications",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Treat separate parts of the arcane armor as individual infusion targets and maintain additional infusions on the armor."
							}
						]
					}
				]
			},
			{
				"id": "perfected-armor",
				"title": "Perfected Armor",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Upgrade the active armor model: Guardian can pull and punish enemies, while Infiltrator marks targets for stronger "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " attacks and allied follow-up."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "tools-of-the-trade-armorer-spells-arcane-armor-armor-model",
				"title": "Tools of the Trade; Armorer Spells; Arcane Armor; Armor Model"
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack"
			},
			{
				"id": "armor-modifications",
				"title": "Armor Modifications"
			},
			{
				"id": "perfected-armor",
				"title": "Perfected Armor"
			}
		]
	}
}),
	artillerist: createInternalPage({
	"href": "/classes/artificer/artillerist",
	"img": {
		"href": "/icons/white/classes/artificer.svg",
		"alt": "A stylized Artificer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Artillerist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Artillerist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Artillerist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Artillerist Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Artillerist",
	"title": "D&D Portal - Artillerist",
	"subTitle": "Artificer subclass",
	"description": "Arcane firearms and deployable eldritch cannons.",
	"descriptions": {
		"short": "Arcane firearms and deployable eldritch cannons.",
		"medium": "Artillerist: Arcane firearms and deployable eldritch cannons.",
		"long": [
			[
				{
					"type": "text",
					"text": "Arcane firearms and deployable eldritch cannons."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.artificer.page"
	},
	"tags": [
		"artificer",
		"subclass",
		"artillerist"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War",
		"featureSections": [
			{
				"id": "tool-proficiency-artillerist-spells-eldritch-cannon",
				"title": "Tool Proficiency; Artillerist Spells; Eldritch Cannon",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain woodcarver\u2019s-tools training, an always-prepared "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " list, and a portable or Tiny eldritch cannon configured as a flamethrower, "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " ballista, or protector."
							}
						]
					}
				]
			},
			{
				"id": "arcane-firearm",
				"title": "Arcane Firearm",
				"subtitle": "5th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Turn a wand, staff, or rod into an arcane firearm that adds extra damage to artificer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " cast through it."
							}
						]
					}
				]
			},
			{
				"id": "explosive-cannon",
				"title": "Explosive Cannon",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase cannon damage and gain the option to detonate a cannon for area damage."
							}
						]
					}
				]
			},
			{
				"id": "fortified-position",
				"title": "Fortified Position",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Operate two cannons at once and let nearby allies benefit from half cover."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "tool-proficiency-artillerist-spells-eldritch-cannon",
				"title": "Tool Proficiency; Artillerist Spells; Eldritch Cannon"
			},
			{
				"id": "arcane-firearm",
				"title": "Arcane Firearm"
			},
			{
				"id": "explosive-cannon",
				"title": "Explosive Cannon"
			},
			{
				"id": "fortified-position",
				"title": "Fortified Position"
			}
		]
	}
}),
	battleSmith: createInternalPage({
	"href": "/classes/artificer/battle-smith",
	"img": {
		"href": "/icons/white/classes/artificer.svg",
		"alt": "A stylized Artificer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Battle Smith Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Battle Smith Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Battle Smith Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-female-s.webp",
					"m": "/images/classes/artificer/card-female-m.webp",
					"l": "/images/classes/artificer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Battle Smith Artificer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/artificer/card-male-s.webp",
					"m": "/images/classes/artificer/card-male-m.webp",
					"l": "/images/classes/artificer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Battle Smith",
	"title": "D&D Portal - Battle Smith",
	"subTitle": "Artificer subclass",
	"description": "Weapon combat supported by a Steel Defender.",
	"descriptions": {
		"short": "Weapon combat supported by a Steel Defender.",
		"medium": "Battle Smith: Weapon combat supported by a Steel Defender.",
		"long": [
			[
				{
					"type": "text",
					"text": "Weapon combat supported by a Steel Defender."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.artificer.page"
	},
	"tags": [
		"artificer",
		"subclass",
		"battle-smith"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War",
		"featureSections": [
			{
				"id": "tool-proficiency-battle-smith-spells-battle-ready-steel-defender",
				"title": "Tool Proficiency; Battle Smith Spells; Battle Ready; Steel Defender",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain smith\u2019s-tools and martial-weapon training, an always-prepared "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " list, "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
							},
							{
								"type": "text",
								"text": "-based attacks with magic weapons, and a Steel Defender companion."
							}
						]
					}
				]
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack",
				"subtitle": "5th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attack twice when taking the "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.attackAction",
								"label": "Attack action"
							},
							{
								"type": "text",
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "arcane-jolt",
				"title": "Arcane Jolt",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When you or the Steel Defender hits, expend a limited use to deal extra "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " damage or restore "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " to a nearby creature or construct."
							}
						]
					}
				]
			},
			{
				"id": "improved-defender",
				"title": "Improved Defender",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Strengthen Arcane Jolt and increase the Steel Defender\u2019s defensive retaliation."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "tool-proficiency-battle-smith-spells-battle-ready-steel-defender",
				"title": "Tool Proficiency; Battle Smith Spells; Battle Ready; Steel Defender"
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack"
			},
			{
				"id": "arcane-jolt",
				"title": "Arcane Jolt"
			},
			{
				"id": "improved-defender",
				"title": "Improved Defender"
			}
		]
	}
}),
} as const;

export const artificer = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/artificer",
	"startingEquipment": [
		{
			"label": "Any two simple weapons",
			"items": [
				[
					{
						"type": "text",
						"text": "Any two "
					},
					{
						"type": "link",
						"path": "internals.rules.equipment.simpleWeapons",
						"label": "simple weapons"
					}
				]
			]
		},
		{
			"label": "Light crossbow and 20 bolts",
			"items": [
				[
					{
						"type": "text",
						"text": "Light crossbow and 20 bolts"
					}
				]
			]
		},
		{
			"label": "Option 3",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Studded leather armor"
					}
				],
				[
					{
						"type": "text",
						"text": "scale mail"
					}
				]
			]
		},
		{
			"label": "Thieves\u2019 tools and a dungeoneer\u2019s pack",
			"items": [
				[
					{
						"type": "text",
						"text": "Thieves\u2019 tools and a dungeoneer\u2019s pack"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Artificer progression",
		"heading": "Artificer Progression",
		"columns": [
			{
				"key": "level",
				"label": "Level",
				"format": "ordinal"
			},
			{
				"key": "proficiencyBonus",
				"label": "Prof.",
				"path": "internals.rules.abbreviations.pb",
				"format": "signed"
			},
			{
				"key": "features",
				"label": "Features"
			},
			{
				"key": "infusionsKnown",
				"label": "Infusions Known"
			},
			{
				"key": "infusedItems",
				"label": "Infused Items"
			},
			{
				"key": "cantrips",
				"label": "Cantrips"
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Magical Tinkering",
						"sectionId": "magical-tinkering"
					},
					{
						"label": "Spellcasting",
						"sectionId": "spellcasting"
					}
				],
				"values": {
					"infusionsKnown": "-",
					"infusedItems": "-",
					"cantrips": 2
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Infuse Item",
						"sectionId": "infuse-item"
					}
				],
				"values": {
					"infusionsKnown": 4,
					"infusedItems": 2,
					"cantrips": 2
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Artificer Specialist",
						"sectionId": "artificer-specialist"
					},
					{
						"label": "The Right Tool for the Job",
						"sectionId": "the-right-tool-for-the-job"
					}
				],
				"values": {
					"infusionsKnown": 4,
					"infusedItems": 2,
					"cantrips": 2
				}
			},
			{
				"level": 4,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					}
				],
				"values": {
					"infusionsKnown": 4,
					"infusedItems": 2,
					"cantrips": 2
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Specialist feature",
						"sectionId": "specialist-feature"
					}
				],
				"values": {
					"infusionsKnown": 4,
					"infusedItems": 2,
					"cantrips": 2
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Tool Expertise",
						"sectionId": "tool-expertise"
					}
				],
				"values": {
					"infusionsKnown": 6,
					"infusedItems": 3,
					"cantrips": 2
				}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Flash of Genius",
						"sectionId": "flash-of-genius"
					}
				],
				"values": {
					"infusionsKnown": 6,
					"infusedItems": 3,
					"cantrips": 2
				}
			},
			{
				"level": 8,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					}
				],
				"values": {
					"infusionsKnown": 6,
					"infusedItems": 3,
					"cantrips": 2
				}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Specialist feature",
						"sectionId": "specialist-feature"
					}
				],
				"values": {
					"infusionsKnown": 6,
					"infusedItems": 3,
					"cantrips": 2
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Magic Item Adept",
						"sectionId": "magic-item-adept"
					}
				],
				"values": {
					"infusionsKnown": 8,
					"infusedItems": 4,
					"cantrips": 3
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Spell-Storing Item",
						"sectionId": "spell-storing-item"
					}
				],
				"values": {
					"infusionsKnown": 8,
					"infusedItems": 4,
					"cantrips": 3
				}
			},
			{
				"level": 12,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					}
				],
				"values": {
					"infusionsKnown": 8,
					"infusedItems": 4,
					"cantrips": 3
				}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"infusionsKnown": 8,
					"infusedItems": 4,
					"cantrips": 3
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Magic Item Savant",
						"sectionId": "magic-item-savant"
					}
				],
				"values": {
					"infusionsKnown": 10,
					"infusedItems": 5,
					"cantrips": 4
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Specialist feature",
						"sectionId": "specialist-feature"
					}
				],
				"values": {
					"infusionsKnown": 10,
					"infusedItems": 5,
					"cantrips": 4
				}
			},
			{
				"level": 16,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					}
				],
				"values": {
					"infusionsKnown": 10,
					"infusedItems": 5,
					"cantrips": 4
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"infusionsKnown": 10,
					"infusedItems": 5,
					"cantrips": 4
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Magic Item Master",
						"sectionId": "magic-item-master"
					}
				],
				"values": {
					"infusionsKnown": 12,
					"infusedItems": 6,
					"cantrips": 4
				}
			},
			{
				"level": 19,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					}
				],
				"values": {
					"infusionsKnown": 12,
					"infusedItems": 6,
					"cantrips": 4
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Soul of Artifice",
						"sectionId": "soul-of-artifice"
					}
				],
				"values": {
					"infusionsKnown": 12,
					"infusedItems": 6,
					"cantrips": 4
				}
			}
		]
	},
	"sections": {
		"identity": {
			"id": "implementation-identity",
			"title": "Implementation Identity",
			"blocks": [
				{
					"type": "table",
					"caption": "Implementation identity",
					"showCaption": true,
					"columns": {
						"label": "Property",
						"value": "Value"
					},
					"rows": [
						{
							"label": "Primary ability",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.intelligence",
									"label": "Intelligence"
								}
							]
						},
						{
							"label": "Multiclass prerequisite",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.intelligence",
									"label": "Intelligence"
								},
								{
									"type": "text",
									"text": " 13"
								}
							]
						},
						{
							"label": "Spellcasting",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.intelligence",
									"label": "Intelligence"
								},
								{
									"type": "text",
									"text": "; prepared half-caster progression beginning at 1st level."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "arcane, crafting, support, utility, half-caster"
								}
							]
						}
					]
				}
			]
		},
		"coreTraits": {
			"id": "core-class-traits",
			"title": "Core Class Traits",
			"blocks": [
				{
					"type": "table",
					"caption": "Core class traits",
					"showCaption": true,
					"columns": {
						"label": "Property",
						"value": "Value"
					},
					"rows": [
						{
							"label": "Hit Die",
							"value": [
								{
									"type": "text",
									"text": "d8"
								}
							]
						},
						{
							"label": "Armor",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.equipment.lightArmor",
									"label": "Light armor"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.equipment.mediumArmor",
									"label": "medium armor"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.equipment.shields",
									"label": "shields"
								}
							]
						},
						{
							"label": "Weapons",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.equipment.simpleWeapons",
									"label": "Simple weapons"
								}
							]
						},
						{
							"label": "Tools",
							"value": [
								{
									"type": "text",
									"text": "Thieves\u2019 tools, tinker\u2019s tools, and one artisan\u2019s tool"
								}
							]
						},
						{
							"label": "Saving Throws",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.constitution",
									"label": "Constitution"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.intelligence",
									"label": "Intelligence"
								}
							]
						},
						{
							"label": "Skills",
							"value": [
								{
									"type": "text",
									"text": "Choose two: "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.arcana",
									"label": "Arcana"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.history",
									"label": "History"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.investigation",
									"label": "Investigation"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.medicine",
									"label": "Medicine"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.nature",
									"label": "Nature"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.perception",
									"label": "Perception"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.sleightOfHand",
									"label": "Sleight of Hand"
								}
							]
						}
					]
				}
			]
		},
		"classFeaturesOverview": {
			"id": "class-features",
			"title": "Class Features",
			"blocks": [
				{
					"type": "paragraph",
					"content": [
						{
							"type": "text",
							"text": "As a artificer, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "magical-tinkering",
				"title": "Magical Tinkering",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Imbue a limited number of Tiny mundane objects with persistent minor magical effects such as light, a recorded message, a sound or smell, or a static visual mark."
							}
						]
					}
				]
			},
			{
				"id": "spellcasting",
				"title": "Spellcasting",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Prepare artificer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " using "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
							},
							{
								"type": "text",
								"text": " and produce "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " effects through tools or infused items; ritual casting is available for prepared ritual "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "infuse-item",
				"title": "Infuse Item",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn infusions and apply them to nonmagical objects after a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": ", creating temporary magic items up to the class limit."
							}
						]
					}
				]
			},
			{
				"id": "artificer-specialist",
				"title": "Artificer Specialist",
				"subtitle": "Levels 3, 5, 9, 15",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a specialist whose features define the class\u2019s main combat and support package."
							}
						]
					}
				]
			},
			{
				"id": "the-right-tool-for-the-job",
				"title": "The Right Tool for the Job",
				"subtitle": "Level 3",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create one set of artisan\u2019s tools during a rest while holding thieves\u2019 or artisan\u2019s tools."
							}
						]
					}
				]
			},
			{
				"id": "ability-score-improvement",
				"title": "Ability Score Improvement",
				"subtitle": "Levels 4, 8, 12, 16, 19",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase ability scores or take a feat when the campaign uses feats."
							}
						]
					}
				]
			},
			{
				"id": "tool-expertise",
				"title": "Tool Expertise",
				"subtitle": "Level 6",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Double proficiency on "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability checks"
							},
							{
								"type": "text",
								"text": " that use a tool proficiency."
							}
						]
					}
				]
			},
			{
				"id": "flash-of-genius",
				"title": "Flash of Genius",
				"subtitle": "Level 7",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to add the "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
							},
							{
								"type": "text",
								"text": " modifier to a nearby creature\u2019s "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability check"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": ", a limited number of times per "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "magic-item-adept",
				"title": "Magic Item Adept",
				"subtitle": "Level 10",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attune to four magic items and craft common or uncommon items more quickly and cheaply."
							}
						]
					}
				]
			},
			{
				"id": "spell-storing-item",
				"title": "Spell-Storing Item",
				"subtitle": "Level 11",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Store a 1st- or 2nd-level artificer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " in a weapon or focus so another creature can produce the effect repeatedly."
							}
						]
					}
				]
			},
			{
				"id": "magic-item-savant",
				"title": "Magic Item Savant",
				"subtitle": "Level 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attune to five magic items and ignore class, race, "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": ", and level requirements for using them."
							}
						]
					}
				]
			},
			{
				"id": "magic-item-master",
				"title": "Magic Item Master",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attune to six magic items."
							}
						]
					}
				]
			},
			{
				"id": "soul-of-artifice",
				"title": "Soul of Artifice",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain saving-throw bonuses from attuned items and sacrifice an infusion to remain at 1 hit point instead of dropping to 0."
							}
						]
					}
				]
			}
		],
		"subclasses": {
			"id": "subclasses",
			"title": "Published Subclasses",
			"blocks": [
				{
					"type": "card-grid",
					"groups": [
						{
							"title": "Published Subclasses",
							"cards": [
								{
									"page": "internals.classes.artificer.subclasses.alchemist",
									"source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War"
								},
								{
									"page": "internals.classes.artificer.subclasses.armorer",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.artificer.subclasses.artillerist",
									"source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War"
								},
								{
									"page": "internals.classes.artificer.subclasses.battleSmith",
									"source": "Tasha\u2019s Cauldron of Everything; Eberron: Rising from the Last War"
								}
							]
						}
					]
				}
			]
		}
	},
	"tableOfContents": [
		{
			"id": "implementation-identity",
			"title": "Implementation Identity"
		},
		{
			"id": "core-class-traits",
			"title": "Core Class Traits"
		},
		{
			"id": "starting-equipment",
			"title": "Starting Equipment"
		},
		{
			"id": "progression",
			"title": "Artificer Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "magical-tinkering",
					"title": "Magical Tinkering"
				},
				{
					"id": "spellcasting",
					"title": "Spellcasting"
				},
				{
					"id": "infuse-item",
					"title": "Infuse Item"
				},
				{
					"id": "artificer-specialist",
					"title": "Artificer Specialist"
				},
				{
					"id": "the-right-tool-for-the-job",
					"title": "The Right Tool for the Job"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "tool-expertise",
					"title": "Tool Expertise"
				},
				{
					"id": "flash-of-genius",
					"title": "Flash of Genius"
				},
				{
					"id": "magic-item-adept",
					"title": "Magic Item Adept"
				},
				{
					"id": "spell-storing-item",
					"title": "Spell-Storing Item"
				},
				{
					"id": "magic-item-savant",
					"title": "Magic Item Savant"
				},
				{
					"id": "magic-item-master",
					"title": "Magic Item Master"
				},
				{
					"id": "soul-of-artifice",
					"title": "Soul of Artifice"
				}
			]
		},
		{
			"id": "subclasses",
			"title": "Published Subclasses"
		}
	]
}
} as const;
