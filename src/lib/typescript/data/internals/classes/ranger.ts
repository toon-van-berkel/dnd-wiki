/*
	Location: src/lib/typescript/data/internals/classes/ranger.ts
	Use: Central Ranger class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/ranger",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Ranger",
	"title": "D&D Portal - Ranger",
	"subTitle": "Character class",
	"description": "A Dexterity- and Wisdom-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools.",
	"descriptions": {
		"short": "A Dexterity- and Wisdom-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools.",
		"medium": "A Dexterity- and Wisdom-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools.",
		"long": [
			[
				{
					"type": "text",
					"text": "A "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.dexterity",
					"label": "Dexterity"
				},
				{
					"type": "text",
					"text": "- and "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": "-based wilderness martial half caster with tracking, exploration, mobility, and subclass-driven combat tools."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Ranger is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.dexterity",
					"label": "Dexterity"
				},
				{
					"type": "text",
					"text": " and "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": ", uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Ranger core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": "; known-"
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": " half-caster progression beginning at 2nd level."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"ranger",
		"class",
		"2014"
	]
});

const subclasses = {
	beastMaster: createInternalPage({
	"href": "/classes/ranger/beast-master",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Beast Master Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Beast Master Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Beast Master Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Beast Master Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Beast Master",
	"title": "D&D Portal - Beast Master",
	"subTitle": "Ranger subclass",
	"description": "Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements.",
	"descriptions": {
		"short": "Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements.",
		"medium": "Beast Master: Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fight alongside an animal companion; Tasha\u2019s offers primal companion replacements."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"beast-master"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "ranger-s-companion-primal-companion-optional-replacement",
				"title": "Ranger\u2019s Companion; Primal Companion (optional replacement)",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Bond with a beast companion that acts with your direction; the optional primal companion uses scaling Land, Sea, or Sky stat blocks."
							}
						]
					}
				]
			},
			{
				"id": "exceptional-training",
				"title": "Exceptional Training",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Command the companion to "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.dash",
								"label": "Dash"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.disengage",
								"label": "Disengage"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.dodge",
								"label": "Dodge"
							},
							{
								"type": "text",
								"text": ", or "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.help",
								"label": "Help"
							},
							{
								"type": "text",
								"text": " as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": "; its attacks count as magical."
							}
						]
					}
				]
			},
			{
				"id": "bestial-fury",
				"title": "Bestial Fury",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "The companion attacks twice when commanded to take the "
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
				"id": "share-spells",
				"title": "Share Spells",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "Spells"
							},
							{
								"type": "text",
								"text": " you cast on yourself can also affect the companion while it is nearby."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "ranger-s-companion-primal-companion-optional-replacement",
				"title": "Ranger\u2019s Companion; Primal Companion (optional replacement)"
			},
			{
				"id": "exceptional-training",
				"title": "Exceptional Training"
			},
			{
				"id": "bestial-fury",
				"title": "Bestial Fury"
			},
			{
				"id": "share-spells",
				"title": "Share Spells"
			}
		]
	}
}),
	feyWanderer: createInternalPage({
	"href": "/classes/ranger/fey-wanderer",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Fey Wanderer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fey Wanderer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Fey Wanderer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fey Wanderer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Fey Wanderer",
	"title": "D&D Portal - Fey Wanderer",
	"subTitle": "Ranger subclass",
	"description": "Psychic damage, social bonuses, fear manipulation, and fey summons.",
	"descriptions": {
		"short": "Psychic damage, social bonuses, fear manipulation, and fey summons.",
		"medium": "Fey Wanderer: Psychic damage, social bonuses, fear manipulation, and fey summons.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.psychic",
					"label": "Psychic"
				},
				{
					"type": "text",
					"text": " damage, social bonuses, fear manipulation, and fey summons."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"fey-wanderer"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "fey-wanderer-magic-dreadful-strikes-otherworldly-glamour",
				"title": "Fey Wanderer Magic; Dreadful Strikes; Otherworldly Glamour",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-known fey "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", add "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " damage to weapon hits against different targets, and add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " to "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " checks."
							}
						]
					}
				]
			},
			{
				"id": "beguiling-twist",
				"title": "Beguiling Twist",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage against charm and fear and redirect a failed charm or fear effect to another creature."
							}
						]
					}
				]
			},
			{
				"id": "fey-reinforcements",
				"title": "Fey Reinforcements",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast Summon Fey without material components and gain a limited free use or shorten "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.concentration",
								"label": "concentration"
							},
							{
								"type": "text",
								"text": " for repeated casting."
							}
						]
					}
				]
			},
			{
				"id": "misty-wanderer",
				"title": "Misty Wanderer",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast Misty Step repeatedly and optionally bring a nearby willing creature."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "fey-wanderer-magic-dreadful-strikes-otherworldly-glamour",
				"title": "Fey Wanderer Magic; Dreadful Strikes; Otherworldly Glamour"
			},
			{
				"id": "beguiling-twist",
				"title": "Beguiling Twist"
			},
			{
				"id": "fey-reinforcements",
				"title": "Fey Reinforcements"
			},
			{
				"id": "misty-wanderer",
				"title": "Misty Wanderer"
			}
		]
	}
}),
	gloomStalker: createInternalPage({
	"href": "/classes/ranger/gloom-stalker",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Gloom Stalker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Gloom Stalker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Gloom Stalker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Gloom Stalker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Gloom Stalker",
	"title": "D&D Portal - Gloom Stalker",
	"subTitle": "Ranger subclass",
	"description": "Ambush initiative, darkness superiority, and extra opening attacks.",
	"descriptions": {
		"short": "Ambush initiative, darkness superiority, and extra opening attacks.",
		"medium": "Gloom Stalker: Ambush initiative, darkness superiority, and extra opening attacks.",
		"long": [
			[
				{
					"type": "text",
					"text": "Ambush "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.initiativeRoll",
					"label": "initiative"
				},
				{
					"type": "text",
					"text": ", darkness superiority, and extra opening attacks."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"gloom-stalker"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "gloom-stalker-magic-dread-ambusher-umbral-sight",
				"title": "Gloom Stalker Magic; Dread Ambusher; Umbral Sight",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-known ambush "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " to "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": ", move and attack more strongly in the first round, gain darkvision, and become "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.invisible",
								"label": "invisible"
							},
							{
								"type": "text",
								"text": " to darkvision in darkness."
							}
						]
					}
				]
			},
			{
				"id": "iron-mind",
				"title": "Iron Mind",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": " proficiency or another mental "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": " proficiency."
							}
						]
					}
				]
			},
			{
				"id": "stalker-s-flurry",
				"title": "Stalker\u2019s Flurry",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When a weapon attack misses, make another weapon attack once per turn."
							}
						]
					}
				]
			},
			{
				"id": "shadowy-dodge",
				"title": "Shadowy Dodge",
				"subtitle": "15th level",
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
								"text": " to impose disadvantage on an attack against you."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "gloom-stalker-magic-dread-ambusher-umbral-sight",
				"title": "Gloom Stalker Magic; Dread Ambusher; Umbral Sight"
			},
			{
				"id": "iron-mind",
				"title": "Iron Mind"
			},
			{
				"id": "stalker-s-flurry",
				"title": "Stalker\u2019s Flurry"
			},
			{
				"id": "shadowy-dodge",
				"title": "Shadowy Dodge"
			}
		]
	}
}),
	horizonWalker: createInternalPage({
	"href": "/classes/ranger/horizon-walker",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Horizon Walker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Horizon Walker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Horizon Walker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Horizon Walker Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Horizon Walker",
	"title": "D&D Portal - Horizon Walker",
	"subTitle": "Ranger subclass",
	"description": "Planar detection, force damage, and teleporting attacks.",
	"descriptions": {
		"short": "Planar detection, force damage, and teleporting attacks.",
		"medium": "Horizon Walker: Planar detection, force damage, and teleporting attacks.",
		"long": [
			[
				{
					"type": "text",
					"text": "Planar detection, "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.force",
					"label": "force"
				},
				{
					"type": "text",
					"text": " damage, and teleporting attacks."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"horizon-walker"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "horizon-walker-magic-detect-portal-planar-warrior",
				"title": "Horizon Walker Magic; Detect Portal; Planar Warrior",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-known planar "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", sense nearby planar portals, and convert one weapon hit per turn to "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " damage with bonus damage."
							}
						]
					}
				]
			},
			{
				"id": "ethereal-step",
				"title": "Ethereal Step",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast Etherealness on yourself as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " for the current turn."
							}
						]
					}
				]
			},
			{
				"id": "distant-strike",
				"title": "Distant Strike",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport before each attack and gain an additional attack when targeting multiple creatures."
							}
						]
					}
				]
			},
			{
				"id": "spectral-defense",
				"title": "Spectral Defense",
				"subtitle": "15th level",
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
								"text": " to gain resistance to all damage from one attack."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "horizon-walker-magic-detect-portal-planar-warrior",
				"title": "Horizon Walker Magic; Detect Portal; Planar Warrior"
			},
			{
				"id": "ethereal-step",
				"title": "Ethereal Step"
			},
			{
				"id": "distant-strike",
				"title": "Distant Strike"
			},
			{
				"id": "spectral-defense",
				"title": "Spectral Defense"
			}
		]
	}
}),
	hunter: createInternalPage({
	"href": "/classes/ranger/hunter",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Hunter Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Hunter Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Hunter Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Hunter Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Hunter",
	"title": "D&D Portal - Hunter",
	"subTitle": "Ranger subclass",
	"description": "Choose modular offense and defense options against common enemy patterns.",
	"descriptions": {
		"short": "Choose modular offense and defense options against common enemy patterns.",
		"medium": "Hunter: Choose modular offense and defense options against common enemy patterns.",
		"long": [
			[
				{
					"type": "text",
					"text": "Choose modular offense and defense options against common enemy patterns."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"hunter"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "hunter-s-prey",
				"title": "Hunter\u2019s Prey",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose Colossus Slayer, Giant Killer, or Horde Breaker for a specialized offensive benefit."
							}
						]
					}
				]
			},
			{
				"id": "defensive-tactics",
				"title": "Defensive Tactics",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose Escape the Horde, Multiattack Defense, or Steel Will for a specialized defense."
							}
						]
					}
				]
			},
			{
				"id": "multiattack",
				"title": "Multiattack",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose Volley for a ranged area attack or Whirlwind Attack for a melee area attack."
							}
						]
					}
				]
			},
			{
				"id": "superior-hunter-s-defense",
				"title": "Superior Hunter\u2019s Defense",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose Evasion, Stand Against the Tide, or Uncanny "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.dodge",
								"label": "Dodge"
							},
							{
								"type": "text",
								"text": "."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "hunter-s-prey",
				"title": "Hunter\u2019s Prey"
			},
			{
				"id": "defensive-tactics",
				"title": "Defensive Tactics"
			},
			{
				"id": "multiattack",
				"title": "Multiattack"
			},
			{
				"id": "superior-hunter-s-defense",
				"title": "Superior Hunter\u2019s Defense"
			}
		]
	}
}),
	monsterSlayer: createInternalPage({
	"href": "/classes/ranger/monster-slayer",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Monster Slayer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Monster Slayer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Monster Slayer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Monster Slayer Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Monster Slayer",
	"title": "D&D Portal - Monster Slayer",
	"subTitle": "Ranger subclass",
	"description": "Identify weaknesses, mark prey, and disrupt supernatural effects.",
	"descriptions": {
		"short": "Identify weaknesses, mark prey, and disrupt supernatural effects.",
		"medium": "Monster Slayer: Identify weaknesses, mark prey, and disrupt supernatural effects.",
		"long": [
			[
				{
					"type": "text",
					"text": "Identify weaknesses, mark prey, and disrupt supernatural effects."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"monster-slayer"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "monster-slayer-magic-hunter-s-sense-slayer-s-prey",
				"title": "Monster Slayer Magic; Hunter\u2019s Sense; Slayer\u2019s Prey",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-known anti-monster "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", identify a creature\u2019s defenses, and mark a target for bonus weapon damage."
							}
						]
					}
				]
			},
			{
				"id": "supernatural-defense",
				"title": "Supernatural Defense",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add a d6 to saves and grapple escapes caused by the current Slayer\u2019s Prey."
							}
						]
					}
				]
			},
			{
				"id": "magic-user-s-nemesis",
				"title": "Magic-User\u2019s Nemesis",
				"subtitle": "11th level",
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
								"text": " to disrupt a nearby "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " or teleportation effect."
							}
						]
					}
				]
			},
			{
				"id": "slayer-s-counter",
				"title": "Slayer\u2019s Counter",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When the marked target forces a save, make a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " weapon attack; a hit automatically succeeds on the save."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "monster-slayer-magic-hunter-s-sense-slayer-s-prey",
				"title": "Monster Slayer Magic; Hunter\u2019s Sense; Slayer\u2019s Prey"
			},
			{
				"id": "supernatural-defense",
				"title": "Supernatural Defense"
			},
			{
				"id": "magic-user-s-nemesis",
				"title": "Magic-User\u2019s Nemesis"
			},
			{
				"id": "slayer-s-counter",
				"title": "Slayer\u2019s Counter"
			}
		]
	}
}),
	swarmkeeper: createInternalPage({
	"href": "/classes/ranger/swarmkeeper",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Swarmkeeper Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Swarmkeeper Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Swarmkeeper Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Swarmkeeper Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Swarmkeeper",
	"title": "D&D Portal - Swarmkeeper",
	"subTitle": "Ranger subclass",
	"description": "Move creatures and self with a magical swarm.",
	"descriptions": {
		"short": "Move creatures and self with a magical swarm.",
		"medium": "Swarmkeeper: Move creatures and self with a magical swarm.",
		"long": [
			[
				{
					"type": "text",
					"text": "Move creatures and self with a magical swarm."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"swarmkeeper"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "swarmkeeper-magic-gathered-swarm",
				"title": "Swarmkeeper Magic; Gathered Swarm",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-known swarm-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and once per turn use the swarm to add damage, move a target, or move yourself after a hit."
							}
						]
					}
				]
			},
			{
				"id": "writhing-tide",
				"title": "Writhing Tide",
				"subtitle": "7th level",
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
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " to gain a temporary "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.flying",
								"label": "flying"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " from the swarm."
							}
						]
					}
				]
			},
			{
				"id": "mighty-swarm",
				"title": "Mighty Swarm",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Improve every Gathered Swarm option with more damage, "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.prone",
								"label": "prone"
							},
							{
								"type": "text",
								"text": ", or half cover."
							}
						]
					}
				]
			},
			{
				"id": "swarming-dispersal",
				"title": "Swarming Dispersal",
				"subtitle": "15th level",
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
								"text": " when damaged to gain resistance and teleport away."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "swarmkeeper-magic-gathered-swarm",
				"title": "Swarmkeeper Magic; Gathered Swarm"
			},
			{
				"id": "writhing-tide",
				"title": "Writhing Tide"
			},
			{
				"id": "mighty-swarm",
				"title": "Mighty Swarm"
			},
			{
				"id": "swarming-dispersal",
				"title": "Swarming Dispersal"
			}
		]
	}
}),
	drakewarden: createInternalPage({
	"href": "/classes/ranger/drakewarden",
	"img": {
		"href": "/icons/white/classes/ranger.svg",
		"alt": "A stylized Ranger class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Drakewarden Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Drakewarden Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Drakewarden Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-female-s.webp",
					"m": "/images/classes/ranger/card-female-m.webp",
					"l": "/images/classes/ranger/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Drakewarden Ranger class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/ranger/card-male-s.webp",
					"m": "/images/classes/ranger/card-male-m.webp",
					"l": "/images/classes/ranger/card-male-l.webp"
				}
			}
		}
	},
	"label": "Drakewarden",
	"title": "D&D Portal - Drakewarden",
	"subTitle": "Ranger subclass",
	"description": "Bond with a scaling drake companion and gain draconic damage and flight.",
	"descriptions": {
		"short": "Bond with a scaling drake companion and gain draconic damage and flight.",
		"medium": "Drakewarden: Bond with a scaling drake companion and gain draconic damage and flight.",
		"long": [
			[
				{
					"type": "text",
					"text": "Bond with a scaling drake companion and gain draconic damage and flight."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.ranger.page"
	},
	"tags": [
		"ranger",
		"subclass",
		"drakewarden"
	],
	"content": {
		"source": "Fizban\u2019s Treasury of Dragons",
		"featureSections": [
			{
				"id": "draconic-gift-drake-companion",
				"title": "Draconic Gift; Drake Companion",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn Draconic or another language, gain Thaumaturgy, and summon a scaling elemental drake companion."
							}
						]
					}
				]
			},
			{
				"id": "bond-of-fang-and-scale",
				"title": "Bond of Fang and Scale",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Improve the drake, gain elemental resistance, and allow it to serve as a mount."
							}
						]
					}
				]
			},
			{
				"id": "drake-s-breath",
				"title": "Drake\u2019s Breath",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Exhale a damaging elemental cone, with limited free use and later scaling."
							}
						]
					}
				]
			},
			{
				"id": "perfected-bond",
				"title": "Perfected Bond",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "The drake grows Large, its bite improves, and you can use a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to gain resistance to one instance of damage."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "draconic-gift-drake-companion",
				"title": "Draconic Gift; Drake Companion"
			},
			{
				"id": "bond-of-fang-and-scale",
				"title": "Bond of Fang and Scale"
			},
			{
				"id": "drake-s-breath",
				"title": "Drake\u2019s Breath"
			},
			{
				"id": "perfected-bond",
				"title": "Perfected Bond"
			}
		]
	}
}),
} as const;

export const ranger = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/ranger",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Scale mail"
					}
				],
				[
					{
						"type": "text",
						"text": "leather armor"
					}
				]
			]
		},
		{
			"label": "Option 2",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Two shortswords"
					}
				],
				[
					{
						"type": "text",
						"text": "two simple melee weapons"
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
						"text": "Dungeoneer\u2019s pack"
					}
				],
				[
					{
						"type": "text",
						"text": "explorer\u2019s pack"
					}
				]
			]
		},
		{
			"label": "Longbow and 20 arrows",
			"items": [
				[
					{
						"type": "text",
						"text": "Longbow and 20 arrows"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Ranger progression",
		"heading": "Ranger Progression",
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
				"key": "spellsKnown",
				"label": "Spells Known"
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Favored Enemy",
						"sectionId": "favored-enemy"
					},
					{
						"label": "Natural Explorer",
						"sectionId": "natural-explorer"
					},
					{
						"label": "Deft Explorer",
						"sectionId": "deft-explorer",
						"optional": true
					},
					{
						"label": "Favored Foe",
						"sectionId": "favored-foe",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": "\u2014"
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Fighting Style",
						"sectionId": "fighting-style"
					},
					{
						"label": "Spellcasting",
						"sectionId": "spellcasting"
					},
					{
						"label": "Spellcasting Focus",
						"sectionId": "spellcasting-focus",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 2
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Primeval Awareness",
						"sectionId": "primeval-awareness"
					},
					{
						"label": "Ranger Conclave",
						"sectionId": "ranger-conclave"
					},
					{
						"label": "Primal Awareness",
						"sectionId": "primal-awareness",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 3
				}
			},
			{
				"level": 4,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Martial Versatility",
						"sectionId": "martial-versatility",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 3
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Extra Attack",
						"sectionId": "extra-attack"
					}
				],
				"values": {
					"spellsKnown": 4
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Favored Enemy improvement",
						"sectionId": "favored-enemy-improvement"
					},
					{
						"label": "Natural Explorer improvement",
						"sectionId": "natural-explorer-improvement"
					},
					{
						"label": "Deft Explorer improvement",
						"sectionId": "deft-explorer-improvement",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 4
				}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Conclave feature",
						"sectionId": "conclave-feature"
					}
				],
				"values": {
					"spellsKnown": 5
				}
			},
			{
				"level": 8,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Land\u2019s Stride",
						"sectionId": "land-s-stride"
					},
					{
						"label": "Martial Versatility",
						"sectionId": "martial-versatility",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 5
				}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"spellsKnown": 6
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Natural Explorer improvement",
						"sectionId": "natural-explorer-improvement"
					},
					{
						"label": "Hide in Plain Sight",
						"sectionId": "hide-in-plain-sight"
					},
					{
						"label": "Deft Explorer feature",
						"sectionId": "deft-explorer-feature",
						"optional": true
					},
					{
						"label": "Nature\u2019s Veil",
						"sectionId": "nature-s-veil",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 6
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Conclave feature",
						"sectionId": "conclave-feature"
					}
				],
				"values": {
					"spellsKnown": 7
				}
			},
			{
				"level": 12,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Martial Versatility",
						"sectionId": "martial-versatility",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 7
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
					"spellsKnown": 8
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Favored Enemy improvement",
						"sectionId": "favored-enemy-improvement"
					},
					{
						"label": "Vanish",
						"sectionId": "vanish"
					}
				],
				"values": {
					"spellsKnown": 8
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Conclave feature",
						"sectionId": "conclave-feature"
					}
				],
				"values": {
					"spellsKnown": 9
				}
			},
			{
				"level": 16,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Martial Versatility",
						"sectionId": "martial-versatility",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 9
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
					"spellsKnown": 10
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Feral Senses",
						"sectionId": "feral-senses"
					}
				],
				"values": {
					"spellsKnown": 10
				}
			},
			{
				"level": 19,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Martial Versatility",
						"sectionId": "martial-versatility",
						"optional": true
					}
				],
				"values": {
					"spellsKnown": 11
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Foe Slayer",
						"sectionId": "foe-slayer"
					}
				],
				"values": {
					"spellsKnown": 11
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
									"path": "internals.rules.abilityScores.dexterity",
									"label": "Dexterity"
								},
								{
									"type": "text",
									"text": " and "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.wisdom",
									"label": "Wisdom"
								}
							]
						},
						{
							"label": "Multiclass prerequisite",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.dexterity",
									"label": "Dexterity"
								},
								{
									"type": "text",
									"text": " 13 and "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.wisdom",
									"label": "Wisdom"
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
									"path": "internals.rules.abilityScores.wisdom",
									"label": "Wisdom"
								},
								{
									"type": "text",
									"text": "; known-"
								},
								{
									"type": "link",
									"path": "internals.rules.spellcasting.spells",
									"label": "spell"
								},
								{
									"type": "text",
									"text": " half-caster progression beginning at 2nd level."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "ranged, melee, explorer, primal, half-caster"
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
									"text": "d10"
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
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.equipment.martialWeapons",
									"label": "martial weapons"
								}
							]
						},
						{
							"label": "Tools",
							"value": [
								{
									"type": "text",
									"text": "None"
								}
							]
						},
						{
							"label": "Saving Throws",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.strength",
									"label": "Strength"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.dexterity",
									"label": "Dexterity"
								}
							]
						},
						{
							"label": "Skills",
							"value": [
								{
									"type": "text",
									"text": "Choose three: "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.animalHandling",
									"label": "Animal Handling"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.athletics",
									"label": "Athletics"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.insight",
									"label": "Insight"
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
									"path": "internals.rules.skills.stealth",
									"label": "Stealth"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.survival",
									"label": "Survival"
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
							"text": "As a ranger, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "favored-enemy",
				"title": "Favored Enemy",
				"subtitle": "Levels 1, improves at 6, 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose creature types to track and recall information about with advantage, gaining related languages."
							}
						]
					}
				]
			},
			{
				"id": "favored-foe",
				"title": "Favored Foe (Optional)",
				"subtitle": "Levels 1, replaces Favored Enemy",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Mark a hit target with "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.concentration",
								"label": "concentration"
							},
							{
								"type": "text",
								"text": " and deal extra damage once per turn, scaling by level."
							}
						]
					}
				]
			},
			{
				"id": "natural-explorer",
				"title": "Natural Explorer",
				"subtitle": "Levels 1, improves at 6, 10",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose favored terrain and gain extensive travel, tracking, foraging, and navigation benefits there."
							}
						]
					}
				]
			},
			{
				"id": "deft-explorer",
				"title": "Deft Explorer (Optional)",
				"subtitle": "Levels 1, 6, 10, replaces Natural Explorer",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain Canny expertise and languages, Roving "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " and movement modes, then Tireless "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.exhaustion",
								"label": "exhaustion"
							},
							{
								"type": "text",
								"text": " recovery."
							}
						]
					}
				]
			},
			{
				"id": "fighting-style",
				"title": "Fighting Style",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a ranger-compatible combat style, including Druidic Warrior."
							}
						]
					}
				]
			},
			{
				"id": "spellcasting",
				"title": "Spellcasting",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn ranger "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " with "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " using the half-caster slot table."
							}
						]
					}
				]
			},
			{
				"id": "spellcasting-focus",
				"title": "Spellcasting Focus (Optional)",
				"subtitle": "Level 2",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use a druidic focus for ranger "
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
				"id": "primeval-awareness",
				"title": "Primeval Awareness",
				"subtitle": "Level 3",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slot to sense the presence of specified supernatural creature types across a wide area."
							}
						]
					}
				]
			},
			{
				"id": "primal-awareness",
				"title": "Primal Awareness (Optional)",
				"subtitle": "Levels 3, replaces Primeval Awareness",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn and cast a level-based set of "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.nature",
								"label": "nature"
							},
							{
								"type": "text",
								"text": "-detection "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " once per "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": " without slots."
							}
						]
					}
				]
			},
			{
				"id": "ranger-conclave",
				"title": "Ranger Conclave",
				"subtitle": "Levels 3, 7, 11, 15",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass that defines the ranger\u2019s specialist hunt and combat features."
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
								"text": "Increase ability scores or take a feat."
							}
						]
					}
				]
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack",
				"subtitle": "Level 5",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attack twice with the "
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
				"id": "land-s-stride",
				"title": "Land\u2019s Stride",
				"subtitle": "Level 8",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Ignore nonmagical "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.difficultTerrain",
								"label": "difficult terrain"
							},
							{
								"type": "text",
								"text": " and resist magical plants that impede movement."
							}
						]
					}
				]
			},
			{
				"id": "hide-in-plain-sight",
				"title": "Hide in Plain Sight",
				"subtitle": "Level 10",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create camouflage for a large "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "Stealth"
							},
							{
								"type": "text",
								"text": " bonus while remaining still."
							}
						]
					}
				]
			},
			{
				"id": "nature-s-veil",
				"title": "Nature\u2019s Veil (Optional)",
				"subtitle": "Levels 10, replaces Hide in Plain Sight",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Become "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.invisible",
								"label": "invisible"
							},
							{
								"type": "text",
								"text": " until the start of the next turn as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": ", proficiency-bonus times per "
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
				"id": "vanish",
				"title": "Vanish",
				"subtitle": "Level 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "link",
								"path": "internals.rules.actions.hide",
								"label": "Hide"
							},
							{
								"type": "text",
								"text": " as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " and avoid nonmagical tracking."
							}
						]
					}
				]
			},
			{
				"id": "feral-senses",
				"title": "Feral Senses",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Remove disadvantage against unseen targets and locate nearby "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.invisible",
								"label": "invisible"
							},
							{
								"type": "text",
								"text": " creatures."
							}
						]
					}
				]
			},
			{
				"id": "foe-slayer",
				"title": "Foe Slayer",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Once each turn add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " modifier to an attack or "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.damageRoll",
								"label": "damage roll"
							},
							{
								"type": "text",
								"text": " against a favored enemy."
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
									"page": "internals.classes.ranger.subclasses.beastMaster",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.ranger.subclasses.feyWanderer",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.ranger.subclasses.gloomStalker",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.ranger.subclasses.horizonWalker",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.ranger.subclasses.hunter",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.ranger.subclasses.monsterSlayer",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.ranger.subclasses.swarmkeeper",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.ranger.subclasses.drakewarden",
									"source": "Fizban\u2019s Treasury of Dragons"
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
			"title": "Ranger Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "favored-enemy",
					"title": "Favored Enemy"
				},
				{
					"id": "favored-foe",
					"title": "Favored Foe (Optional)"
				},
				{
					"id": "natural-explorer",
					"title": "Natural Explorer"
				},
				{
					"id": "deft-explorer",
					"title": "Deft Explorer (Optional)"
				},
				{
					"id": "fighting-style",
					"title": "Fighting Style"
				},
				{
					"id": "spellcasting",
					"title": "Spellcasting"
				},
				{
					"id": "spellcasting-focus",
					"title": "Spellcasting Focus (Optional)"
				},
				{
					"id": "primeval-awareness",
					"title": "Primeval Awareness"
				},
				{
					"id": "primal-awareness",
					"title": "Primal Awareness (Optional)"
				},
				{
					"id": "ranger-conclave",
					"title": "Ranger Conclave"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "extra-attack",
					"title": "Extra Attack"
				},
				{
					"id": "land-s-stride",
					"title": "Land\u2019s Stride"
				},
				{
					"id": "hide-in-plain-sight",
					"title": "Hide in Plain Sight"
				},
				{
					"id": "nature-s-veil",
					"title": "Nature\u2019s Veil (Optional)"
				},
				{
					"id": "vanish",
					"title": "Vanish"
				},
				{
					"id": "feral-senses",
					"title": "Feral Senses"
				},
				{
					"id": "foe-slayer",
					"title": "Foe Slayer"
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
