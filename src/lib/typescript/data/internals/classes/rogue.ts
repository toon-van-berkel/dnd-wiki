/*
	Location: src/lib/typescript/data/internals/classes/rogue.ts
	Use: Central Rogue class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/rogue",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Rogue",
	"title": "D&D Portal - Rogue",
	"subTitle": "Character class",
	"description": "A Dexterity-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise.",
	"descriptions": {
		"short": "A Dexterity-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise.",
		"medium": "A Dexterity-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise.",
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
					"text": "-based skill specialist who deals precision Sneak Attack damage, controls positioning with bonus actions, and gains exceptionally reliable expertise."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Rogue is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.dexterity",
					"label": "Dexterity"
				},
				{
					"type": "text",
					"text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Rogue core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"rogue",
		"class",
		"2014"
	]
});

const subclasses = {
	arcaneTrickster: createInternalPage({
	"href": "/classes/rogue/arcane-trickster",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Arcane Trickster Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Arcane Trickster Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Arcane Trickster Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Arcane Trickster Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Arcane Trickster",
	"title": "D&D Portal - Arcane Trickster",
	"subTitle": "Rogue subclass",
	"description": "Combine stealth and Sneak Attack with illusion and enchantment magic.",
	"descriptions": {
		"short": "Combine stealth and Sneak Attack with illusion and enchantment magic.",
		"medium": "Arcane Trickster: Combine stealth and Sneak Attack with illusion and enchantment magic.",
		"long": [
			[
				{
					"type": "text",
					"text": "Combine "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.stealth",
					"label": "stealth"
				},
				{
					"type": "text",
					"text": " and Sneak Attack with illusion and enchantment magic."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"arcane-trickster"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "spellcasting-mage-hand-legerdemain",
				"title": "Spellcasting; Mage Hand Legerdemain",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain limited wizard spellcasting focused on enchantment and illusion, and use an "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.invisible",
								"label": "invisible"
							},
							{
								"type": "text",
								"text": " Mage Hand for stealthy object manipulation and thieves\u2019 tools."
							}
						]
					}
				]
			},
			{
				"id": "magical-ambush",
				"title": "Magical Ambush",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "While hidden, creatures have disadvantage on saves against your "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " during that turn."
							}
						]
					}
				]
			},
			{
				"id": "versatile-trickster",
				"title": "Versatile Trickster",
				"subtitle": "13th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use Mage Hand as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " to distract a creature and gain advantage on attacks against it."
							}
						]
					}
				]
			},
			{
				"id": "spell-thief",
				"title": "Spell Thief",
				"subtitle": "17th level",
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
								"text": " to negate a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " targeting or including you, potentially steal it, and prevent the caster from using it temporarily."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "spellcasting-mage-hand-legerdemain",
				"title": "Spellcasting; Mage Hand Legerdemain"
			},
			{
				"id": "magical-ambush",
				"title": "Magical Ambush"
			},
			{
				"id": "versatile-trickster",
				"title": "Versatile Trickster"
			},
			{
				"id": "spell-thief",
				"title": "Spell Thief"
			}
		]
	}
}),
	assassin: createInternalPage({
	"href": "/classes/rogue/assassin",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Assassin Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Assassin Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Assassin Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Assassin Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Assassin",
	"title": "D&D Portal - Assassin",
	"subTitle": "Rogue subclass",
	"description": "Infiltration, poison, disguise, and devastating opening attacks.",
	"descriptions": {
		"short": "Infiltration, poison, disguise, and devastating opening attacks.",
		"medium": "Assassin: Infiltration, poison, disguise, and devastating opening attacks.",
		"long": [
			[
				{
					"type": "text",
					"text": "Infiltration, "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.poison",
					"label": "poison"
				},
				{
					"type": "text",
					"text": ", disguise, and devastating opening attacks."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"assassin"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "bonus-proficiencies-assassinate",
				"title": "Bonus Proficiencies; Assassinate",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain disguise-kit and poisoner\u2019s-kit proficiency, advantage against creatures that have not acted, and automatic "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.criticalHit",
								"label": "critical hits"
							},
							{
								"type": "text",
								"text": " against surprised targets."
							}
						]
					}
				]
			},
			{
				"id": "infiltration-expertise",
				"title": "Infiltration Expertise",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a convincing false identity with time and money."
							}
						]
					}
				]
			},
			{
				"id": "impostor",
				"title": "Impostor",
				"subtitle": "13th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Mimic another person\u2019s speech, writing, and behavior after studying them."
							}
						]
					}
				]
			},
			{
				"id": "death-strike",
				"title": "Death Strike",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "A surprised creature hit by you must save or take double the attack\u2019s damage."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-proficiencies-assassinate",
				"title": "Bonus Proficiencies; Assassinate"
			},
			{
				"id": "infiltration-expertise",
				"title": "Infiltration Expertise"
			},
			{
				"id": "impostor",
				"title": "Impostor"
			},
			{
				"id": "death-strike",
				"title": "Death Strike"
			}
		]
	}
}),
	inquisitive: createInternalPage({
	"href": "/classes/rogue/inquisitive",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Inquisitive Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Inquisitive Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Inquisitive Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Inquisitive Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Inquisitive",
	"title": "D&D Portal - Inquisitive",
	"subTitle": "Rogue subclass",
	"description": "Read lies and weaknesses to enable precision attacks.",
	"descriptions": {
		"short": "Read lies and weaknesses to enable precision attacks.",
		"medium": "Inquisitive: Read lies and weaknesses to enable precision attacks.",
		"long": [
			[
				{
					"type": "text",
					"text": "Read lies and weaknesses to enable precision attacks."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"inquisitive"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "ear-for-deceit-eye-for-detail-insightful-fighting",
				"title": "Ear for Deceit; Eye for Detail; Insightful Fighting",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Treat low "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.insight",
								"label": "Insight"
							},
							{
								"type": "text",
								"text": " rolls against lies as 8, "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.search",
								"label": "search"
							},
							{
								"type": "text",
								"text": " or detect clues as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": ", and use "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.insight",
								"label": "Insight"
							},
							{
								"type": "text",
								"text": " versus "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.deception",
								"label": "Deception"
							},
							{
								"type": "text",
								"text": " to enable Sneak Attack against one target."
							}
						]
					}
				]
			},
			{
				"id": "steady-eye",
				"title": "Steady Eye",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage on "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.perception",
								"label": "Perception"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.investigation",
								"label": "Investigation"
							},
							{
								"type": "text",
								"text": " when moving no more than half "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
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
				"id": "unerring-eye",
				"title": "Unerring Eye",
				"subtitle": "13th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use an action to sense illusions, shapechangers, and magic intended to deceive the senses."
							}
						]
					}
				]
			},
			{
				"id": "eye-for-weakness",
				"title": "Eye for Weakness",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Deal additional Sneak Attack damage against the target of Insightful Fighting."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "ear-for-deceit-eye-for-detail-insightful-fighting",
				"title": "Ear for Deceit; Eye for Detail; Insightful Fighting"
			},
			{
				"id": "steady-eye",
				"title": "Steady Eye"
			},
			{
				"id": "unerring-eye",
				"title": "Unerring Eye"
			},
			{
				"id": "eye-for-weakness",
				"title": "Eye for Weakness"
			}
		]
	}
}),
	mastermind: createInternalPage({
	"href": "/classes/rogue/mastermind",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Mastermind Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Mastermind Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Mastermind Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Mastermind Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Mastermind",
	"title": "D&D Portal - Mastermind",
	"subTitle": "Rogue subclass",
	"description": "Social infiltration and long-range tactical Help actions.",
	"descriptions": {
		"short": "Social infiltration and long-range tactical Help actions.",
		"medium": "Mastermind: Social infiltration and long-range tactical Help actions.",
		"long": [
			[
				{
					"type": "text",
					"text": "Social infiltration and long-range tactical "
				},
				{
					"type": "link",
					"path": "internals.rules.actions.help",
					"label": "Help"
				},
				{
					"type": "text",
					"text": " actions."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"mastermind"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "master-of-intrigue-master-of-tactics",
				"title": "Master of Intrigue; Master of Tactics",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain languages, tool proficiencies, mimicry, and the ability to "
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
								"text": " from range."
							}
						]
					}
				]
			},
			{
				"id": "insightful-manipulator",
				"title": "Insightful Manipulator",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After observing a creature, learn how selected mental and social statistics compare with your own."
							}
						]
					}
				]
			},
			{
				"id": "misdirection",
				"title": "Misdirection",
				"subtitle": "13th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Redirect an attack aimed at you to another creature providing cover."
							}
						]
					}
				]
			},
			{
				"id": "soul-of-deceit",
				"title": "Soul of Deceit",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "link",
								"path": "internals.rules.equipment.shields",
								"label": "Shield"
							},
							{
								"type": "text",
								"text": " thoughts from telepathy and make truth-forcing magic read your statements as truthful."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "master-of-intrigue-master-of-tactics",
				"title": "Master of Intrigue; Master of Tactics"
			},
			{
				"id": "insightful-manipulator",
				"title": "Insightful Manipulator"
			},
			{
				"id": "misdirection",
				"title": "Misdirection"
			},
			{
				"id": "soul-of-deceit",
				"title": "Soul of Deceit"
			}
		]
	}
}),
	phantom: createInternalPage({
	"href": "/classes/rogue/phantom",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Phantom Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Phantom Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Phantom Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Phantom Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Phantom",
	"title": "D&D Portal - Phantom",
	"subTitle": "Rogue subclass",
	"description": "Borrow skills from spirits and spread necrotic damage.",
	"descriptions": {
		"short": "Borrow skills from spirits and spread necrotic damage.",
		"medium": "Phantom: Borrow skills from spirits and spread necrotic damage.",
		"long": [
			[
				{
					"type": "text",
					"text": "Borrow skills from spirits and spread "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.necrotic",
					"label": "necrotic"
				},
				{
					"type": "text",
					"text": " damage."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"phantom"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "whispers-of-the-dead-wails-from-the-grave",
				"title": "Whispers of the Dead; Wails from the Grave",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Borrow a skill or tool proficiency from a spirit and spread part of Sneak Attack as "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage to a second creature."
							}
						]
					}
				]
			},
			{
				"id": "tokens-of-the-departed",
				"title": "Tokens of the Departed",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create soul trinkets when creatures die and use them for stronger Wails, advantage on death and "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.constitution",
								"label": "Constitution"
							},
							{
								"type": "text",
								"text": " saves, or questions to the dead."
							}
						]
					}
				]
			},
			{
				"id": "ghost-walk",
				"title": "Ghost Walk",
				"subtitle": "13th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Assume a spectral form with flight, passage through creatures and objects, and attacks made against you at disadvantage."
							}
						]
					}
				]
			},
			{
				"id": "death-s-friend",
				"title": "Death\u2019s Friend",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Deal Wails from the Grave damage to both the secondary target and the original target and gain a soul trinket after rests."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "whispers-of-the-dead-wails-from-the-grave",
				"title": "Whispers of the Dead; Wails from the Grave"
			},
			{
				"id": "tokens-of-the-departed",
				"title": "Tokens of the Departed"
			},
			{
				"id": "ghost-walk",
				"title": "Ghost Walk"
			},
			{
				"id": "death-s-friend",
				"title": "Death\u2019s Friend"
			}
		]
	}
}),
	scout: createInternalPage({
	"href": "/classes/rogue/scout",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Scout Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Scout Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Scout Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Scout Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Scout",
	"title": "D&D Portal - Scout",
	"subTitle": "Rogue subclass",
	"description": "Wilderness expertise, reactive movement, and ranged skirmishing.",
	"descriptions": {
		"short": "Wilderness expertise, reactive movement, and ranged skirmishing.",
		"medium": "Scout: Wilderness expertise, reactive movement, and ranged skirmishing.",
		"long": [
			[
				{
					"type": "text",
					"text": "Wilderness expertise, reactive movement, and ranged skirmishing."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"scout"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "skirmisher-survivalist",
				"title": "Skirmisher; Survivalist",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " when enemies approach without provoking from that enemy, and gain "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.nature",
								"label": "Nature"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.survival",
								"label": "Survival"
							},
							{
								"type": "text",
								"text": " with doubled proficiency."
							}
						]
					}
				]
			},
			{
				"id": "superior-mobility",
				"title": "Superior Mobility",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.walking",
								"label": "walking"
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
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.climbing",
								"label": "climbing"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.swimming",
								"label": "swimming"
							},
							{
								"type": "text",
								"text": " speeds."
							}
						]
					}
				]
			},
			{
				"id": "ambush-master",
				"title": "Ambush Master",
				"subtitle": "13th level",
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
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " advantage; the first creature you hit becomes easier for everyone to attack for the round."
							}
						]
					}
				]
			},
			{
				"id": "sudden-strike",
				"title": "Sudden Strike",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Make an extra bonus-action attack and potentially apply Sneak Attack to a second target."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "skirmisher-survivalist",
				"title": "Skirmisher; Survivalist"
			},
			{
				"id": "superior-mobility",
				"title": "Superior Mobility"
			},
			{
				"id": "ambush-master",
				"title": "Ambush Master"
			},
			{
				"id": "sudden-strike",
				"title": "Sudden Strike"
			}
		]
	}
}),
	soulknife: createInternalPage({
	"href": "/classes/rogue/soulknife",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Soulknife Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Soulknife Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Soulknife Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Soulknife Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Soulknife",
	"title": "D&D Portal - Soulknife",
	"subTitle": "Rogue subclass",
	"description": "Psychic blades, telepathy, psionic skill boosts, and teleportation.",
	"descriptions": {
		"short": "Psychic blades, telepathy, psionic skill boosts, and teleportation.",
		"medium": "Soulknife: Psychic blades, telepathy, psionic skill boosts, and teleportation.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.psychic",
					"label": "Psychic"
				},
				{
					"type": "text",
					"text": " blades, telepathy, psionic skill boosts, and teleportation."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"soulknife"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "psionic-power-psychic-blades",
				"title": "Psionic Power; Psychic Blades",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain Psionic Energy dice for boosted skill checks and telepathic communication, and manifest "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " blades for attacks."
							}
						]
					}
				]
			},
			{
				"id": "soul-blades",
				"title": "Soul Blades",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend Psionic Energy to improve missed "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": "-blade attacks or teleport to a thrown blade."
							}
						]
					}
				]
			},
			{
				"id": "psychic-veil",
				"title": "Psychic Veil",
				"subtitle": "13th level",
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
								"text": " for an hour, with free and die-powered uses."
							}
						]
					}
				]
			},
			{
				"id": "rend-mind",
				"title": "Rend Mind",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After dealing Sneak Attack with a "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " blade, "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " a save or stun the target."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "psionic-power-psychic-blades",
				"title": "Psionic Power; Psychic Blades"
			},
			{
				"id": "soul-blades",
				"title": "Soul Blades"
			},
			{
				"id": "psychic-veil",
				"title": "Psychic Veil"
			},
			{
				"id": "rend-mind",
				"title": "Rend Mind"
			}
		]
	}
}),
	swashbuckler: createInternalPage({
	"href": "/classes/rogue/swashbuckler",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Swashbuckler Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Swashbuckler Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Swashbuckler Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Swashbuckler Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Swashbuckler",
	"title": "D&D Portal - Swashbuckler",
	"subTitle": "Rogue subclass",
	"description": "Mobile single-target dueling driven by Charisma.",
	"descriptions": {
		"short": "Mobile single-target dueling driven by Charisma.",
		"medium": "Swashbuckler: Mobile single-target dueling driven by Charisma.",
		"long": [
			[
				{
					"type": "text",
					"text": "Mobile single-target dueling driven by "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": "."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"swashbuckler"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "fancy-footwork-rakish-audacity",
				"title": "Fancy Footwork; Rakish Audacity",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Creatures you attack cannot make opportunity attacks against you that turn, add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
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
								"text": ", and gain a single-target way to enable Sneak Attack."
							}
						]
					}
				]
			},
			{
				"id": "panache",
				"title": "Panache",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.persuasion",
								"label": "Persuasion"
							},
							{
								"type": "text",
								"text": " to taunt a hostile creature into focusing on you or charm a nonhostile creature."
							}
						]
					}
				]
			},
			{
				"id": "elegant-maneuver",
				"title": "Elegant Maneuver",
				"subtitle": "13th level",
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
								"text": " to gain advantage on the next "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.acrobatics",
								"label": "Acrobatics"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.athletics",
								"label": "Athletics"
							},
							{
								"type": "text",
								"text": " check that turn."
							}
						]
					}
				]
			},
			{
				"id": "master-duelist",
				"title": "Master Duelist",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Reroll a missed attack with advantage once per rest."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "fancy-footwork-rakish-audacity",
				"title": "Fancy Footwork; Rakish Audacity"
			},
			{
				"id": "panache",
				"title": "Panache"
			},
			{
				"id": "elegant-maneuver",
				"title": "Elegant Maneuver"
			},
			{
				"id": "master-duelist",
				"title": "Master Duelist"
			}
		]
	}
}),
	thief: createInternalPage({
	"href": "/classes/rogue/thief",
	"img": {
		"href": "/icons/white/classes/rogue.svg",
		"alt": "A stylized Rogue class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Thief Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Thief Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Thief Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-female-s.webp",
					"m": "/images/classes/rogue/card-female-m.webp",
					"l": "/images/classes/rogue/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Thief Rogue class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/rogue/card-male-s.webp",
					"m": "/images/classes/rogue/card-male-m.webp",
					"l": "/images/classes/rogue/card-male-l.webp"
				}
			}
		}
	},
	"label": "Thief",
	"title": "D&D Portal - Thief",
	"subTitle": "Rogue subclass",
	"description": "Fast object use, climbing, stealth, and magic-item improvisation.",
	"descriptions": {
		"short": "Fast object use, climbing, stealth, and magic-item improvisation.",
		"medium": "Thief: Fast object use, climbing, stealth, and magic-item improvisation.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fast object use, "
				},
				{
					"type": "link",
					"path": "internals.rules.movement.climbing",
					"label": "climbing"
				},
				{
					"type": "text",
					"text": ", "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.stealth",
					"label": "stealth"
				},
				{
					"type": "text",
					"text": ", and magic-item improvisation."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.rogue.page"
	},
	"tags": [
		"rogue",
		"subclass",
		"thief"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "fast-hands-second-story-work",
				"title": "Fast Hands; Second-Story Work",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use Cunning Action for "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.sleightOfHand",
								"label": "Sleight of Hand"
							},
							{
								"type": "text",
								"text": ", thieves\u2019 tools, or Use an Object, and improve "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.climbing",
								"label": "climbing"
							},
							{
								"type": "text",
								"text": " and running jumps."
							}
						]
					}
				]
			},
			{
				"id": "supreme-sneak",
				"title": "Supreme Sneak",
				"subtitle": "9th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage on "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "Stealth"
							},
							{
								"type": "text",
								"text": " while moving no more than half "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
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
				"id": "use-magic-device",
				"title": "Use Magic Device",
				"subtitle": "13th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Ignore many class, species, and level restrictions on magic items and gain additional attunement flexibility."
							}
						]
					}
				]
			},
			{
				"id": "thief-s-reflexes",
				"title": "Thief\u2019s Reflexes",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Take two turns during the first round of combat."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "fast-hands-second-story-work",
				"title": "Fast Hands; Second-Story Work"
			},
			{
				"id": "supreme-sneak",
				"title": "Supreme Sneak"
			},
			{
				"id": "use-magic-device",
				"title": "Use Magic Device"
			},
			{
				"id": "thief-s-reflexes",
				"title": "Thief\u2019s Reflexes"
			}
		]
	}
}),
} as const;

export const rogue = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/rogue",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Rapier"
					}
				],
				[
					{
						"type": "text",
						"text": "shortsword"
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
						"text": "Shortbow and arrows"
					}
				],
				[
					{
						"type": "text",
						"text": "shortsword"
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
						"text": "Burglar\u2019s, dungeoneer\u2019s,"
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
			"label": "Leather armor, two daggers, thieves\u2019 tools",
			"items": [
				[
					{
						"type": "text",
						"text": "Leather armor, two daggers, thieves\u2019 tools"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Rogue progression",
		"heading": "Rogue Progression",
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
				"key": "sneakAttack",
				"label": "Sneak Attack"
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Expertise",
						"sectionId": "expertise"
					},
					{
						"label": "Sneak Attack",
						"sectionId": "sneak-attack"
					},
					{
						"label": "Thieves\u2019 Cant",
						"sectionId": "thieves-cant"
					}
				],
				"values": {
					"sneakAttack": "1d6"
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Cunning Action",
						"sectionId": "cunning-action"
					}
				],
				"values": {
					"sneakAttack": "1d6"
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Roguish Archetype",
						"sectionId": "roguish-archetype"
					},
					{
						"label": "Steady Aim",
						"sectionId": "steady-aim",
						"optional": true
					}
				],
				"values": {
					"sneakAttack": "2d6"
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
					"sneakAttack": "2d6"
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Uncanny Dodge",
						"sectionId": "uncanny-dodge"
					}
				],
				"values": {
					"sneakAttack": "3d6"
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Expertise",
						"sectionId": "expertise"
					}
				],
				"values": {
					"sneakAttack": "3d6"
				}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Evasion",
						"sectionId": "evasion"
					}
				],
				"values": {
					"sneakAttack": "4d6"
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
					"sneakAttack": "4d6"
				}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {
					"sneakAttack": "5d6"
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					}
				],
				"values": {
					"sneakAttack": "5d6"
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Reliable Talent",
						"sectionId": "reliable-talent"
					}
				],
				"values": {
					"sneakAttack": "6d6"
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
					"sneakAttack": "6d6"
				}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {
					"sneakAttack": "7d6"
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Blindsense",
						"sectionId": "blindsense"
					}
				],
				"values": {
					"sneakAttack": "7d6"
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Slippery Mind",
						"sectionId": "slippery-mind"
					}
				],
				"values": {
					"sneakAttack": "8d6"
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
					"sneakAttack": "8d6"
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Archetype feature",
						"sectionId": "archetype-feature"
					}
				],
				"values": {
					"sneakAttack": "9d6"
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Elusive",
						"sectionId": "elusive"
					}
				],
				"values": {
					"sneakAttack": "9d6"
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
					"sneakAttack": "10d6"
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Stroke of Luck",
						"sectionId": "stroke-of-luck"
					}
				],
				"values": {
					"sneakAttack": "10d6"
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
									"text": " 13"
								}
							]
						},
						{
							"label": "Spellcasting",
							"value": [
								{
									"type": "text",
									"text": "None by default; Arcane Trickster adds "
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
									"type": "link",
									"path": "internals.rules.skills.stealth",
									"label": "stealth"
								},
								{
									"type": "text",
									"text": ", skills, mobility, burst-damage, utility"
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
									"text": ", hand crossbows, longswords, rapiers, shortswords"
								}
							]
						},
						{
							"label": "Tools",
							"value": [
								{
									"type": "text",
									"text": "Thieves\u2019 tools"
								}
							]
						},
						{
							"label": "Saving Throws",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.dexterity",
									"label": "Dexterity"
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
									"text": "Choose four: "
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
									"path": "internals.rules.skills.athletics",
									"label": "Athletics"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.deception",
									"label": "Deception"
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
									"path": "internals.rules.skills.investigation",
									"label": "Investigation"
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
									"path": "internals.rules.skills.performance",
									"label": "Performance"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.persuasion",
									"label": "Persuasion"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.sleightOfHand",
									"label": "Sleight of Hand"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.stealth",
									"label": "Stealth"
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
							"text": "As a rogue, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "expertise",
				"title": "Expertise",
				"subtitle": "Levels 1, 6",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Double proficiency for selected skills or thieves\u2019 tools."
							}
						]
					}
				]
			},
			{
				"id": "sneak-attack",
				"title": "Sneak Attack",
				"subtitle": "Levels 1, scales every two levels",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Once per turn, add precision damage with a finesse or ranged weapon when advantage or an adjacent ally creates an opening."
							}
						]
					}
				]
			},
			{
				"id": "thieves-cant",
				"title": "Thieves\u2019 Cant",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Communicate through coded speech and secret signs."
							}
						]
					}
				]
			},
			{
				"id": "cunning-action",
				"title": "Cunning Action",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
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
								"text": ", or "
							},
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
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "roguish-archetype",
				"title": "Roguish Archetype",
				"subtitle": "Levels 3, 9, 13, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass defining the rogue\u2019s specialist methods."
							}
						]
					}
				]
			},
			{
				"id": "steady-aim",
				"title": "Steady Aim (Optional)",
				"subtitle": "Level 3",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Trade movement for advantage on the next attack this turn."
							}
						]
					}
				]
			},
			{
				"id": "ability-score-improvement",
				"title": "Ability Score Improvement",
				"subtitle": "Levels 4, 8, 10, 12, 16, 19",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase ability scores or take a feat; Rogues receive an extra "
							},
							{
								"type": "link",
								"path": "internals.rules.abbreviations.asi",
								"label": "ASI"
							},
							{
								"type": "text",
								"text": " at level 10."
							}
						]
					}
				]
			},
			{
				"id": "uncanny-dodge",
				"title": "Uncanny Dodge",
				"subtitle": "Level 5",
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
								"text": " to halve damage from a visible attacker\u2019s hit."
							}
						]
					}
				]
			},
			{
				"id": "evasion",
				"title": "Evasion",
				"subtitle": "Level 7",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Avoid or reduce damage from "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.dexterity",
								"label": "Dexterity"
							},
							{
								"type": "text",
								"text": "-save area effects."
							}
						]
					}
				]
			},
			{
				"id": "reliable-talent",
				"title": "Reliable Talent",
				"subtitle": "Level 11",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Treat proficiency-based d20 rolls of 9 or lower as 10."
							}
						]
					}
				]
			},
			{
				"id": "blindsense",
				"title": "Blindsense",
				"subtitle": "Level 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Detect hidden or "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.invisible",
								"label": "invisible"
							},
							{
								"type": "text",
								"text": " creatures within 10 feet while able to hear."
							}
						]
					}
				]
			},
			{
				"id": "slippery-mind",
				"title": "Slippery Mind",
				"subtitle": "Level 15",
				"optional": false,
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
								"text": " proficiency."
							}
						]
					}
				]
			},
			{
				"id": "elusive",
				"title": "Elusive",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "link",
								"path": "internals.rules.combat.attackRoll",
								"label": "Attack rolls"
							},
							{
								"type": "text",
								"text": " cannot have advantage against you while not "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.incapacitated",
								"label": "incapacitated"
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
				"id": "stroke-of-luck",
				"title": "Stroke of Luck",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Turn one missed attack into a hit or one failed "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability check"
							},
							{
								"type": "text",
								"text": " into a natural 20 result per short or "
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
									"page": "internals.classes.rogue.subclasses.arcaneTrickster",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.rogue.subclasses.assassin",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.rogue.subclasses.inquisitive",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.rogue.subclasses.mastermind",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.rogue.subclasses.phantom",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.rogue.subclasses.scout",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.rogue.subclasses.soulknife",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.rogue.subclasses.swashbuckler",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.rogue.subclasses.thief",
									"source": "Player\u2019s Handbook"
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
			"title": "Rogue Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "expertise",
					"title": "Expertise"
				},
				{
					"id": "sneak-attack",
					"title": "Sneak Attack"
				},
				{
					"id": "thieves-cant",
					"title": "Thieves\u2019 Cant"
				},
				{
					"id": "cunning-action",
					"title": "Cunning Action"
				},
				{
					"id": "roguish-archetype",
					"title": "Roguish Archetype"
				},
				{
					"id": "steady-aim",
					"title": "Steady Aim (Optional)"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "uncanny-dodge",
					"title": "Uncanny Dodge"
				},
				{
					"id": "evasion",
					"title": "Evasion"
				},
				{
					"id": "reliable-talent",
					"title": "Reliable Talent"
				},
				{
					"id": "blindsense",
					"title": "Blindsense"
				},
				{
					"id": "slippery-mind",
					"title": "Slippery Mind"
				},
				{
					"id": "elusive",
					"title": "Elusive"
				},
				{
					"id": "stroke-of-luck",
					"title": "Stroke of Luck"
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
