/*
	Location: src/lib/typescript/data/internals/classes/fighter.ts
	Use: Central Fighter class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/fighter",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Fighter",
	"title": "D&D Portal - Fighter",
	"subTitle": "Character class",
	"description": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated Attack action progression.",
	"descriptions": {
		"short": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated Attack action progression.",
		"medium": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated Attack action progression.",
		"long": [
			[
				{
					"type": "text",
					"text": "A flexible martial class with broad armor and weapon access, frequent Ability Score Improvements, and the strongest repeated "
				},
				{
					"type": "link",
					"path": "internals.rules.actions.attackAction",
					"label": "Attack action"
				},
				{
					"type": "text",
					"text": " progression."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Fighter is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.strength",
					"label": "Strength"
				},
				{
					"type": "text",
					"text": " or "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.dexterity",
					"label": "Dexterity"
				},
				{
					"type": "text",
					"text": ", uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Fighter core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"fighter",
		"class",
		"2014"
	]
});

const subclasses = {
	arcaneArcher: createInternalPage({
	"href": "/classes/fighter/arcane-archer",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Arcane Archer Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Arcane Archer Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Arcane Archer Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Arcane Archer Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Arcane Archer",
	"title": "D&D Portal - Arcane Archer",
	"subTitle": "Fighter subclass",
	"description": "Imbue bow shots with specialized arcane effects.",
	"descriptions": {
		"short": "Imbue bow shots with specialized arcane effects.",
		"medium": "Arcane Archer: Imbue bow shots with specialized arcane effects.",
		"long": [
			[
				{
					"type": "text",
					"text": "Imbue bow shots with specialized arcane effects."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"arcane-archer"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "arcane-archer-lore-arcane-shot",
				"title": "Arcane Archer Lore; Arcane Shot",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain an arcane skill and "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": ", learn specialized magical arrow effects, and apply one Arcane Shot option after an arrow hits."
							}
						]
					}
				]
			},
			{
				"id": "magic-arrow-curving-shot",
				"title": "Magic Arrow; Curving Shot",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Arrows count as magical, and a missed magic-arrow attack can be redirected to another target as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
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
				"id": "ever-ready-shot",
				"title": "Ever-Ready Shot",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain one Arcane Shot use when rolling "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " with none remaining."
							}
						]
					}
				]
			},
			{
				"id": "arcane-shot-improvement",
				"title": "Arcane Shot improvement",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase the damage dice of Arcane Shot options."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "arcane-archer-lore-arcane-shot",
				"title": "Arcane Archer Lore; Arcane Shot"
			},
			{
				"id": "magic-arrow-curving-shot",
				"title": "Magic Arrow; Curving Shot"
			},
			{
				"id": "ever-ready-shot",
				"title": "Ever-Ready Shot"
			},
			{
				"id": "arcane-shot-improvement",
				"title": "Arcane Shot improvement"
			}
		]
	}
}),
	banneret: createInternalPage({
	"href": "/classes/fighter/banneret",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Banneret Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Banneret Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Banneret Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Banneret Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Banneret",
	"title": "D&D Portal - Banneret",
	"subTitle": "Fighter subclass",
	"description": "Share fighter recovery and inspire allies through leadership.",
	"descriptions": {
		"short": "Share fighter recovery and inspire allies through leadership.",
		"medium": "Banneret: Share fighter recovery and inspire allies through leadership.",
		"long": [
			[
				{
					"type": "text",
					"text": "Share fighter recovery and inspire allies through leadership."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"banneret"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide",
		"featureSections": [
			{
				"id": "rallying-cry",
				"title": "Rallying Cry",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Second Wind also restores "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " to several nearby allies who can see or hear you."
							}
						]
					}
				]
			},
			{
				"id": "royal-envoy",
				"title": "Royal Envoy",
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
								"path": "internals.rules.skills.persuasion",
								"label": "Persuasion"
							},
							{
								"type": "text",
								"text": " proficiency or another skill, and double proficiency for "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.persuasion",
								"label": "Persuasion"
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
				"id": "inspiring-surge",
				"title": "Inspiring Surge",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When using Action Surge, let an ally make one weapon attack as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
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
				"id": "bulwark",
				"title": "Bulwark",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When using Indomitable against an "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": ", or "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " save, allow an ally who failed the same effect to reroll."
							}
						]
					}
				]
			},
			{
				"id": "inspiring-surge-improvement",
				"title": "Inspiring Surge improvement",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Allow two allies to make "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " attacks when you use Inspiring Surge."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "rallying-cry",
				"title": "Rallying Cry"
			},
			{
				"id": "royal-envoy",
				"title": "Royal Envoy"
			},
			{
				"id": "inspiring-surge",
				"title": "Inspiring Surge"
			},
			{
				"id": "bulwark",
				"title": "Bulwark"
			},
			{
				"id": "inspiring-surge-improvement",
				"title": "Inspiring Surge improvement"
			}
		]
	}
}),
	battleMaster: createInternalPage({
	"href": "/classes/fighter/battle-master",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Battle Master Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Battle Master Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Battle Master Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Battle Master Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Battle Master",
	"title": "D&D Portal - Battle Master",
	"subTitle": "Fighter subclass",
	"description": "Spend superiority dice on tactical maneuvers.",
	"descriptions": {
		"short": "Spend superiority dice on tactical maneuvers.",
		"medium": "Battle Master: Spend superiority dice on tactical maneuvers.",
		"long": [
			[
				{
					"type": "text",
					"text": "Spend superiority dice on tactical maneuvers."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"battle-master"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "combat-superiority-student-of-war",
				"title": "Combat Superiority; Student of War",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn maneuvers powered by superiority dice and gain proficiency with one artisan\u2019s tool."
							}
						]
					}
				]
			},
			{
				"id": "know-your-enemy",
				"title": "Know Your Enemy",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Study a creature outside combat to compare selected combat statistics with your own."
							}
						]
					}
				]
			},
			{
				"id": "improved-combat-superiority-10th-level",
				"title": "Improved Combat Superiority",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase superiority dice to d10."
							}
						]
					}
				]
			},
			{
				"id": "relentless",
				"title": "Relentless",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain one superiority die when rolling "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " with none remaining."
							}
						]
					}
				]
			},
			{
				"id": "improved-combat-superiority-18th-level",
				"title": "Improved Combat Superiority",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase superiority dice to d12."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "combat-superiority-student-of-war",
				"title": "Combat Superiority; Student of War"
			},
			{
				"id": "know-your-enemy",
				"title": "Know Your Enemy"
			},
			{
				"id": "improved-combat-superiority-10th-level",
				"title": "Improved Combat Superiority"
			},
			{
				"id": "relentless",
				"title": "Relentless"
			},
			{
				"id": "improved-combat-superiority-18th-level",
				"title": "Improved Combat Superiority"
			}
		]
	}
}),
	cavalier: createInternalPage({
	"href": "/classes/fighter/cavalier",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Cavalier Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Cavalier Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Cavalier Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Cavalier Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Cavalier",
	"title": "D&D Portal - Cavalier",
	"subTitle": "Fighter subclass",
	"description": "Mounted and defensive control focused on marking and holding enemies.",
	"descriptions": {
		"short": "Mounted and defensive control focused on marking and holding enemies.",
		"medium": "Cavalier: Mounted and defensive control focused on marking and holding enemies.",
		"long": [
			[
				{
					"type": "text",
					"text": "Mounted and defensive control focused on marking and holding enemies."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"cavalier"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "bonus-proficiency-born-to-the-saddle-unwavering-mark",
				"title": "Bonus Proficiency; Born to the Saddle; Unwavering Mark",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a skill or language, become highly capable while mounted, and mark enemies so they are punished for attacking others."
							}
						]
					}
				]
			},
			{
				"id": "warding-maneuver",
				"title": "Warding Maneuver",
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
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " and a die roll to increase the "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": " of yourself or a nearby creature against one attack."
							}
						]
					}
				]
			},
			{
				"id": "hold-the-line",
				"title": "Hold the Line",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Make opportunity attacks when creatures move within your reach and stop their movement on a hit."
							}
						]
					}
				]
			},
			{
				"id": "ferocious-charger",
				"title": "Ferocious Charger",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After moving before a hit, "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " the target to save or fall "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.prone",
								"label": "prone"
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
				"id": "vigilant-defender",
				"title": "Vigilant Defender",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a special "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " on every creature\u2019s turn for opportunity attacks."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-proficiency-born-to-the-saddle-unwavering-mark",
				"title": "Bonus Proficiency; Born to the Saddle; Unwavering Mark"
			},
			{
				"id": "warding-maneuver",
				"title": "Warding Maneuver"
			},
			{
				"id": "hold-the-line",
				"title": "Hold the Line"
			},
			{
				"id": "ferocious-charger",
				"title": "Ferocious Charger"
			},
			{
				"id": "vigilant-defender",
				"title": "Vigilant Defender"
			}
		]
	}
}),
	champion: createInternalPage({
	"href": "/classes/fighter/champion",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Champion Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Champion Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Champion Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Champion Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Champion",
	"title": "D&D Portal - Champion",
	"subTitle": "Fighter subclass",
	"description": "Improved critical range, physical excellence, and simple reliability.",
	"descriptions": {
		"short": "Improved critical range, physical excellence, and simple reliability.",
		"medium": "Champion: Improved critical range, physical excellence, and simple reliability.",
		"long": [
			[
				{
					"type": "text",
					"text": "Improved critical range, physical excellence, and simple reliability."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"champion"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "improved-critical",
				"title": "Improved Critical",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Weapon attacks score a "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.criticalHit",
								"label": "critical hit"
							},
							{
								"type": "text",
								"text": " on a roll of 19 or 20."
							}
						]
					}
				]
			},
			{
				"id": "remarkable-athlete",
				"title": "Remarkable Athlete",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add half proficiency to certain physical checks and improve running jumps."
							}
						]
					}
				]
			},
			{
				"id": "additional-fighting-style",
				"title": "Additional Fighting Style",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a second Fighting Style."
							}
						]
					}
				]
			},
			{
				"id": "superior-critical",
				"title": "Superior Critical",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Weapon attacks score a "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.criticalHit",
								"label": "critical hit"
							},
							{
								"type": "text",
								"text": " on a roll of 18\u201320."
							}
						]
					}
				]
			},
			{
				"id": "survivor",
				"title": "Survivor",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " at the start of each turn while below half health but above 0 "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
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
				"id": "improved-critical",
				"title": "Improved Critical"
			},
			{
				"id": "remarkable-athlete",
				"title": "Remarkable Athlete"
			},
			{
				"id": "additional-fighting-style",
				"title": "Additional Fighting Style"
			},
			{
				"id": "superior-critical",
				"title": "Superior Critical"
			},
			{
				"id": "survivor",
				"title": "Survivor"
			}
		]
	}
}),
	echoKnight: createInternalPage({
	"href": "/classes/fighter/echo-knight",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Echo Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Echo Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Echo Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Echo Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Echo Knight",
	"title": "D&D Portal - Echo Knight",
	"subTitle": "Fighter subclass",
	"description": "Project an echo to extend movement, attacks, and battlefield presence.",
	"descriptions": {
		"short": "Project an echo to extend movement, attacks, and battlefield presence.",
		"medium": "Echo Knight: Project an echo to extend movement, attacks, and battlefield presence.",
		"long": [
			[
				{
					"type": "text",
					"text": "Project an echo to extend movement, attacks, and battlefield presence."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"echo-knight"
	],
	"content": {
		"source": "Explorer\u2019s Guide to Wildemount",
		"featureSections": [
			{
				"id": "manifest-echo-unleash-incarnation",
				"title": "Manifest Echo; Unleash Incarnation",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a magical echo, attack or make opportunity attacks from its space, swap places with it, and make limited extra attacks through it."
							}
						]
					}
				]
			},
			{
				"id": "echo-avatar",
				"title": "Echo Avatar",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Project your senses through the echo and send it far away for scouting."
							}
						]
					}
				]
			},
			{
				"id": "shadow-martyr",
				"title": "Shadow Martyr",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move the echo into the path of an attack aimed at a nearby creature."
							}
						]
					}
				]
			},
			{
				"id": "reclaim-potential",
				"title": "Reclaim Potential",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When the echo is destroyed, gain "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
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
				"id": "legion-of-one",
				"title": "Legion of One",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Maintain two echoes simultaneously and recover an Unleash Incarnation use when rolling "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " without one."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "manifest-echo-unleash-incarnation",
				"title": "Manifest Echo; Unleash Incarnation"
			},
			{
				"id": "echo-avatar",
				"title": "Echo Avatar"
			},
			{
				"id": "shadow-martyr",
				"title": "Shadow Martyr"
			},
			{
				"id": "reclaim-potential",
				"title": "Reclaim Potential"
			},
			{
				"id": "legion-of-one",
				"title": "Legion of One"
			}
		]
	}
}),
	eldritchKnight: createInternalPage({
	"href": "/classes/fighter/eldritch-knight",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Eldritch Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Eldritch Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Eldritch Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Eldritch Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Eldritch Knight",
	"title": "D&D Portal - Eldritch Knight",
	"subTitle": "Fighter subclass",
	"description": "Blend weapon combat with limited wizard spellcasting.",
	"descriptions": {
		"short": "Blend weapon combat with limited wizard spellcasting.",
		"medium": "Eldritch Knight: Blend weapon combat with limited wizard spellcasting.",
		"long": [
			[
				{
					"type": "text",
					"text": "Blend weapon combat with limited wizard spellcasting."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"eldritch-knight"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "spellcasting-weapon-bond",
				"title": "Spellcasting; Weapon Bond",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain limited wizard spellcasting and bond with weapons so they cannot be easily disarmed and can be summoned to your hand."
							}
						]
					}
				]
			},
			{
				"id": "war-magic",
				"title": "War Magic",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After casting a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": " with your action, make one weapon attack as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
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
				"id": "eldritch-strike",
				"title": "Eldritch Strike",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "A weapon hit gives the target disadvantage on its next "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": " against one of your "
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
				"id": "arcane-charge",
				"title": "Arcane Charge",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport before or after using Action Surge."
							}
						]
					}
				]
			},
			{
				"id": "improved-war-magic",
				"title": "Improved War Magic",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After casting any "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " with your action, make one weapon attack as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
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
				"id": "spellcasting-weapon-bond",
				"title": "Spellcasting; Weapon Bond"
			},
			{
				"id": "war-magic",
				"title": "War Magic"
			},
			{
				"id": "eldritch-strike",
				"title": "Eldritch Strike"
			},
			{
				"id": "arcane-charge",
				"title": "Arcane Charge"
			},
			{
				"id": "improved-war-magic",
				"title": "Improved War Magic"
			}
		]
	}
}),
	psiWarrior: createInternalPage({
	"href": "/classes/fighter/psi-warrior",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Psi Warrior Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Psi Warrior Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Psi Warrior Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Psi Warrior Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Psi Warrior",
	"title": "D&D Portal - Psi Warrior",
	"subTitle": "Fighter subclass",
	"description": "Psionic dice fuel defense, movement, and telekinetic strikes.",
	"descriptions": {
		"short": "Psionic dice fuel defense, movement, and telekinetic strikes.",
		"medium": "Psi Warrior: Psionic dice fuel defense, movement, and telekinetic strikes.",
		"long": [
			[
				{
					"type": "text",
					"text": "Psionic dice fuel defense, movement, and telekinetic strikes."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"psi-warrior"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "psionic-power",
				"title": "Psionic Power",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a pool of Psionic Energy dice used for protective fields, psionic strikes, and telekinetic movement."
							}
						]
					}
				]
			},
			{
				"id": "telekinetic-adept",
				"title": "Telekinetic Adept",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain short-duration flight and a telekinetic shove that can move or knock a target "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.prone",
								"label": "prone"
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
				"id": "guarded-mind",
				"title": "Guarded Mind",
				"subtitle": "10th level",
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
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " resistance and spend a Psionic Energy die to end charm or fear on yourself."
							}
						]
					}
				]
			},
			{
				"id": "bulwark-of-force",
				"title": "Bulwark of Force",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Grant half cover to yourself and nearby allies for a limited duration."
							}
						]
					}
				]
			},
			{
				"id": "telekinetic-master",
				"title": "Telekinetic Master",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast Telekinesis without components, attack while concentrating on it, and gain limited free use."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "psionic-power",
				"title": "Psionic Power"
			},
			{
				"id": "telekinetic-adept",
				"title": "Telekinetic Adept"
			},
			{
				"id": "guarded-mind",
				"title": "Guarded Mind"
			},
			{
				"id": "bulwark-of-force",
				"title": "Bulwark of Force"
			},
			{
				"id": "telekinetic-master",
				"title": "Telekinetic Master"
			}
		]
	}
}),
	runeKnight: createInternalPage({
	"href": "/classes/fighter/rune-knight",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Rune Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Rune Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Rune Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Rune Knight Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Rune Knight",
	"title": "D&D Portal - Rune Knight",
	"subTitle": "Fighter subclass",
	"description": "Inscribe runes and grow to giant size for control and power.",
	"descriptions": {
		"short": "Inscribe runes and grow to giant size for control and power.",
		"medium": "Rune Knight: Inscribe runes and grow to giant size for control and power.",
		"long": [
			[
				{
					"type": "text",
					"text": "Inscribe runes and grow to giant size for control and power."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"rune-knight"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "bonus-proficiencies-rune-carver-giant-s-might",
				"title": "Bonus Proficiencies; Rune Carver; Giant\u2019s Might",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn Giant language and smith\u2019s tools, inscribe runes with passive and invoked effects, and temporarily grow larger with bonus damage and "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.strength",
								"label": "Strength"
							},
							{
								"type": "text",
								"text": " advantages."
							}
						]
					}
				]
			},
			{
				"id": "runic-shield-additional-rune",
				"title": "Runic Shield; additional rune",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "Force"
							},
							{
								"type": "text",
								"text": " a nearby attacker to reroll a successful attack, and learn another rune including higher-level options."
							}
						]
					}
				]
			},
			{
				"id": "great-stature-additional-rune",
				"title": "Great Stature; additional rune",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Permanently grow taller, improve Giant\u2019s Might damage, and learn another rune."
							}
						]
					}
				]
			},
			{
				"id": "master-of-runes-additional-rune",
				"title": "Master of Runes; additional rune",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Invoke each known rune twice between rests and learn another rune."
							}
						]
					}
				]
			},
			{
				"id": "runic-juggernaut",
				"title": "Runic Juggernaut",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Giant\u2019s Might can make you Huge and further increases reach."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-proficiencies-rune-carver-giant-s-might",
				"title": "Bonus Proficiencies; Rune Carver; Giant\u2019s Might"
			},
			{
				"id": "runic-shield-additional-rune",
				"title": "Runic Shield; additional rune"
			},
			{
				"id": "great-stature-additional-rune",
				"title": "Great Stature; additional rune"
			},
			{
				"id": "master-of-runes-additional-rune",
				"title": "Master of Runes; additional rune"
			},
			{
				"id": "runic-juggernaut",
				"title": "Runic Juggernaut"
			}
		]
	}
}),
	samurai: createInternalPage({
	"href": "/classes/fighter/samurai",
	"img": {
		"href": "/icons/white/classes/fighter.svg",
		"alt": "A stylized Fighter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Samurai Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Samurai Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Samurai Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-female-s.webp",
					"m": "/images/classes/fighter/card-female-m.webp",
					"l": "/images/classes/fighter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Samurai Fighter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/fighter/card-male-s.webp",
					"m": "/images/classes/fighter/card-male-m.webp",
					"l": "/images/classes/fighter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Samurai",
	"title": "D&D Portal - Samurai",
	"subTitle": "Fighter subclass",
	"description": "Gain temporary advantage, resilience, and disciplined social presence.",
	"descriptions": {
		"short": "Gain temporary advantage, resilience, and disciplined social presence.",
		"medium": "Samurai: Gain temporary advantage, resilience, and disciplined social presence.",
		"long": [
			[
				{
					"type": "text",
					"text": "Gain temporary advantage, resilience, and disciplined social presence."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.fighter.page"
	},
	"tags": [
		"fighter",
		"subclass",
		"samurai"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "bonus-proficiency-fighting-spirit",
				"title": "Bonus Proficiency; Fighting Spirit",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a skill or language and use a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " for attack advantage and "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
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
				"id": "elegant-courtier",
				"title": "Elegant Courtier",
				"subtitle": "7th level",
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
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " to "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.persuasion",
								"label": "Persuasion"
							},
							{
								"type": "text",
								"text": " and gain proficiency in "
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
								"label": "saving throws"
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
				"id": "tireless-spirit",
				"title": "Tireless Spirit",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain one Fighting Spirit use when rolling "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " with none remaining."
							}
						]
					}
				]
			},
			{
				"id": "rapid-strike",
				"title": "Rapid Strike",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Trade advantage on one attack for an additional weapon attack during the same action."
							}
						]
					}
				]
			},
			{
				"id": "strength-before-death",
				"title": "Strength Before Death",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When reduced to 0 "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", interrupt the current turn to take an extra turn before "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.falling",
								"label": "falling"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.unconscious",
								"label": "unconscious"
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
				"id": "bonus-proficiency-fighting-spirit",
				"title": "Bonus Proficiency; Fighting Spirit"
			},
			{
				"id": "elegant-courtier",
				"title": "Elegant Courtier"
			},
			{
				"id": "tireless-spirit",
				"title": "Tireless Spirit"
			},
			{
				"id": "rapid-strike",
				"title": "Rapid Strike"
			},
			{
				"id": "strength-before-death",
				"title": "Strength Before Death"
			}
		]
	}
}),
} as const;

export const fighter = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/fighter",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Chain mail"
					}
				],
				[
					{
						"type": "text",
						"text": "leather armor with longbow and arrows"
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
						"text": "Martial weapon and "
					},
					{
						"type": "link",
						"path": "internals.rules.equipment.shields",
						"label": "shield"
					}
				],
				[
					{
						"type": "text",
						"text": "two "
					},
					{
						"type": "link",
						"path": "internals.rules.equipment.martialWeapons",
						"label": "martial weapons"
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
						"text": "Light crossbow and bolts"
					}
				],
				[
					{
						"type": "text",
						"text": "two "
					},
					{
						"type": "link",
						"path": "internals.rules.equipment.handaxes",
						"label": "handaxes"
					}
				]
			]
		},
		{
			"label": "Option 4",
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
		}
	],
	"progression": {
		"title": "Fighter progression",
		"heading": "Fighter Progression",
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
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Fighting Style",
						"sectionId": "fighting-style"
					},
					{
						"label": "Second Wind",
						"sectionId": "second-wind"
					}
				],
				"values": {}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Action Surge (1)",
						"sectionId": "action-surge-1"
					}
				],
				"values": {}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Martial Archetype",
						"sectionId": "martial-archetype"
					}
				],
				"values": {}
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
				"values": {}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Extra Attack (2 attacks)",
						"sectionId": "extra-attack-2-attacks"
					}
				],
				"values": {}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
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
				"values": {}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {}
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
						"label": "Martial Versatility",
						"sectionId": "martial-versatility",
						"optional": true
					}
				],
				"values": {}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Indomitable (1)",
						"sectionId": "indomitable-1"
					}
				],
				"values": {}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Extra Attack (3 attacks)",
						"sectionId": "extra-attack-3-attacks"
					}
				],
				"values": {}
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
				"values": {}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Indomitable (2)",
						"sectionId": "indomitable-2"
					}
				],
				"values": {}
			},
			{
				"level": 14,
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
				"values": {}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {}
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
				"values": {}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Action Surge (2)",
						"sectionId": "action-surge-2"
					},
					{
						"label": "Indomitable (3)",
						"sectionId": "indomitable-3"
					}
				],
				"values": {}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {}
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
				"values": {}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Extra Attack (4 attacks)",
						"sectionId": "extra-attack-4-attacks"
					}
				],
				"values": {}
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
									"path": "internals.rules.abilityScores.strength",
									"label": "Strength"
								},
								{
									"type": "text",
									"text": " or "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.dexterity",
									"label": "Dexterity"
								}
							]
						},
						{
							"label": "Multiclass prerequisite",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.strength",
									"label": "Strength"
								},
								{
									"type": "text",
									"text": " 13 or "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.dexterity",
									"label": "Dexterity"
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
									"type": "text",
									"text": "None by default; Eldritch Knight adds "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.intelligence",
									"label": "Intelligence"
								},
								{
									"type": "text",
									"text": "-based spellcasting."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "melee, ranged, tank, sustained-damage, tactical"
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
									"type": "text",
									"text": "All armor, "
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
									"path": "internals.rules.abilityScores.constitution",
									"label": "Constitution"
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
									"path": "internals.rules.skills.acrobatics",
									"label": "Acrobatics"
								},
								{
									"type": "text",
									"text": ", "
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
									"path": "internals.rules.skills.history",
									"label": "History"
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
									"path": "internals.rules.skills.intimidation",
									"label": "Intimidation"
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
							"text": "As a fighter, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "fighting-style",
				"title": "Fighting Style",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a persistent combat specialization such as Archery, Defense, Dueling, Great Weapon Fighting, Protection, Two-Weapon Fighting, or a Tasha\u2019s option."
							}
						]
					}
				]
			},
			{
				"id": "second-wind",
				"title": "Second Wind",
				"subtitle": "Level 1",
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
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " once per short or "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": " to recover 1d10 + fighter level "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
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
				"id": "action-surge",
				"title": "Action Surge",
				"subtitle": "Levels 2, second use at 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Take one additional action on the current turn; recover uses on a short or "
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
				"id": "martial-archetype",
				"title": "Martial Archetype",
				"subtitle": "Levels 3, 7, 10, 15, 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass that defines tactical, magical, or weapon specialization."
							}
						]
					}
				]
			},
			{
				"id": "ability-score-improvement",
				"title": "Ability Score Improvement",
				"subtitle": "Levels 4, 6, 8, 12, 14, 16, 19",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain more "
							},
							{
								"type": "link",
								"path": "internals.rules.abbreviations.asi",
								"label": "ASIs"
							},
							{
								"type": "text",
								"text": " than any other base class."
							}
						]
					}
				]
			},
			{
				"id": "martial-versatility",
				"title": "Martial Versatility (Optional)",
				"subtitle": "Level ASI levels",
				"subtitleContent": [
					{
						"type": "text",
						"text": "Level "
					},
					{
						"type": "link",
						"path": "internals.rules.abbreviations.asi",
						"label": "ASI"
					},
					{
						"type": "text",
						"text": " levels"
					}
				],
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Replace a fighting style or a known Battle Master maneuver at "
							},
							{
								"type": "link",
								"path": "internals.rules.abbreviations.asi",
								"label": "ASI"
							},
							{
								"type": "text",
								"text": " levels."
							}
						]
					}
				]
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack",
				"subtitle": "Levels 5, 11, 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attack two, then three, then four times with the "
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
				"id": "indomitable",
				"title": "Indomitable",
				"subtitle": "Levels 9, 13, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Reroll a failed "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": "; uses increase at higher levels."
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
									"page": "internals.classes.fighter.subclasses.arcaneArcher",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.fighter.subclasses.banneret",
									"source": "Sword Coast Adventurer\u2019s Guide"
								},
								{
									"page": "internals.classes.fighter.subclasses.battleMaster",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.fighter.subclasses.cavalier",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.fighter.subclasses.champion",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.fighter.subclasses.echoKnight",
									"source": "Explorer\u2019s Guide to Wildemount"
								},
								{
									"page": "internals.classes.fighter.subclasses.eldritchKnight",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.fighter.subclasses.psiWarrior",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.fighter.subclasses.runeKnight",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.fighter.subclasses.samurai",
									"source": "Xanathar\u2019s Guide to Everything"
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
			"title": "Fighter Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "fighting-style",
					"title": "Fighting Style"
				},
				{
					"id": "second-wind",
					"title": "Second Wind"
				},
				{
					"id": "action-surge",
					"title": "Action Surge"
				},
				{
					"id": "martial-archetype",
					"title": "Martial Archetype"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "martial-versatility",
					"title": "Martial Versatility (Optional)"
				},
				{
					"id": "extra-attack",
					"title": "Extra Attack"
				},
				{
					"id": "indomitable",
					"title": "Indomitable"
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
