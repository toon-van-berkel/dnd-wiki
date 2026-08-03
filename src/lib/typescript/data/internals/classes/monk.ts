/*
	Location: src/lib/typescript/data/internals/classes/monk.ts
	Use: Central Monk class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/monk",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Monk",
	"title": "D&D Portal - Monk",
	"subTitle": "Character class",
	"description": "A Dexterity- and Wisdom-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement.",
	"descriptions": {
		"short": "A Dexterity- and Wisdom-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement.",
		"medium": "A Dexterity- and Wisdom-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement.",
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
					"text": "-based mobile martial artist who spends ki for extra attacks, defense, control, healing, and supernatural movement."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Monk is built around "
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
					"text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Monk core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"monk",
		"class",
		"2014"
	]
});

const subclasses = {
	astralSelf: createInternalPage({
	"href": "/classes/monk/astral-self",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Astral Self Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Astral Self Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Astral Self Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Astral Self Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Astral Self",
	"title": "D&D Portal - Astral Self",
	"subTitle": "Monk subclass",
	"description": "Manifest spectral arms, body, and visage powered by Wisdom.",
	"descriptions": {
		"short": "Manifest spectral arms, body, and visage powered by Wisdom.",
		"medium": "Astral Self: Manifest spectral arms, body, and visage powered by Wisdom.",
		"long": [
			[
				{
					"type": "text",
					"text": "Manifest spectral arms, body, and visage powered by "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": "."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"astral-self"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "arms-of-the-astral-self",
				"title": "Arms of the Astral Self",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki to summon spectral arms that extend reach, use "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " for "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.strength",
								"label": "Strength"
							},
							{
								"type": "text",
								"text": " checks and saves, and make "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": "-damage unarmed strikes using "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
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
				"id": "visage-of-the-astral-self",
				"title": "Visage of the Astral Self",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Summon a spectral visage that improves supernatural sight, "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.intimidation",
								"label": "intimidation"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.insight",
								"label": "insight"
							},
							{
								"type": "text",
								"text": ", and long-distance speech."
							}
						]
					}
				]
			},
			{
				"id": "body-of-the-astral-self",
				"title": "Body of the Astral Self",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Summon a spectral body that can deflect elemental damage and add extra damage to one astral-arm hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "awakened-astral-self",
				"title": "Awakened Astral Self",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Summon the full astral self, gain an "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": " bonus, and make an additional astral-arm attack."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "arms-of-the-astral-self",
				"title": "Arms of the Astral Self"
			},
			{
				"id": "visage-of-the-astral-self",
				"title": "Visage of the Astral Self"
			},
			{
				"id": "body-of-the-astral-self",
				"title": "Body of the Astral Self"
			},
			{
				"id": "awakened-astral-self",
				"title": "Awakened Astral Self"
			}
		]
	}
}),
	ascendantDragon: createInternalPage({
	"href": "/classes/monk/ascendant-dragon",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Ascendant Dragon Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ascendant Dragon Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Ascendant Dragon Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ascendant Dragon Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Ascendant Dragon",
	"title": "D&D Portal - Ascendant Dragon",
	"subTitle": "Monk subclass",
	"description": "Elemental breath, wings, fear, and draconic resilience.",
	"descriptions": {
		"short": "Elemental breath, wings, fear, and draconic resilience.",
		"medium": "Ascendant Dragon: Elemental breath, wings, fear, and draconic resilience.",
		"long": [
			[
				{
					"type": "text",
					"text": "Elemental breath, wings, fear, and draconic resilience."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"ascendant-dragon"
	],
	"content": {
		"source": "Fizban\u2019s Treasury of Dragons",
		"featureSections": [
			{
				"id": "draconic-disciple-breath-of-the-dragon",
				"title": "Draconic Disciple; Breath of the Dragon",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Change unarmed damage to an elemental type, gain draconic social or language benefits, and replace attacks with a scaling breath weapon."
							}
						]
					}
				]
			},
			{
				"id": "wings-unfurled",
				"title": "Wings Unfurled",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When using Step of the Wind, manifest spectral wings and fly until the end of the turn."
							}
						]
					}
				]
			},
			{
				"id": "aspect-of-the-wyrm",
				"title": "Aspect of the Wyrm",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a draconic aura that causes fear or grants elemental resistance and can retaliate with elemental damage."
							}
						]
					}
				]
			},
			{
				"id": "ascendant-aspect",
				"title": "Ascendant Aspect",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Improve the aura and breath weapon and gain blindsight."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "draconic-disciple-breath-of-the-dragon",
				"title": "Draconic Disciple; Breath of the Dragon"
			},
			{
				"id": "wings-unfurled",
				"title": "Wings Unfurled"
			},
			{
				"id": "aspect-of-the-wyrm",
				"title": "Aspect of the Wyrm"
			},
			{
				"id": "ascendant-aspect",
				"title": "Ascendant Aspect"
			}
		]
	}
}),
	drunkenMaster: createInternalPage({
	"href": "/classes/monk/drunken-master",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Drunken Master Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Drunken Master Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Drunken Master Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Drunken Master Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Drunken Master",
	"title": "D&D Portal - Drunken Master",
	"subTitle": "Monk subclass",
	"description": "Redirect attacks and move unpredictably through groups.",
	"descriptions": {
		"short": "Redirect attacks and move unpredictably through groups.",
		"medium": "Drunken Master: Redirect attacks and move unpredictably through groups.",
		"long": [
			[
				{
					"type": "text",
					"text": "Redirect attacks and move unpredictably through groups."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"drunken-master"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "bonus-proficiencies-drunken-technique",
				"title": "Bonus Proficiencies; Drunken Technique",
				"subtitle": "3rd level",
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
								"path": "internals.rules.skills.performance",
								"label": "performance"
							},
							{
								"type": "text",
								"text": " and brewer\u2019s-supplies proficiency; Flurry of Blows also grants "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.disengage",
								"label": "Disengage"
							},
							{
								"type": "text",
								"text": " and extra movement."
							}
						]
					}
				]
			},
			{
				"id": "tipsy-sway",
				"title": "Tipsy Sway",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Stand from "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.prone",
								"label": "prone"
							},
							{
								"type": "text",
								"text": " cheaply and redirect a missed "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.meleeAttack",
								"label": "melee attack"
							},
							{
								"type": "text",
								"text": " to another adjacent creature."
							}
						]
					}
				]
			},
			{
				"id": "drunkard-s-luck",
				"title": "Drunkard\u2019s Luck",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki to cancel disadvantage on a save, check, or attack."
							}
						]
					}
				]
			},
			{
				"id": "intoxicated-frenzy",
				"title": "Intoxicated Frenzy",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Flurry of Blows can make additional attacks when each targets a different creature."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-proficiencies-drunken-technique",
				"title": "Bonus Proficiencies; Drunken Technique"
			},
			{
				"id": "tipsy-sway",
				"title": "Tipsy Sway"
			},
			{
				"id": "drunkard-s-luck",
				"title": "Drunkard\u2019s Luck"
			},
			{
				"id": "intoxicated-frenzy",
				"title": "Intoxicated Frenzy"
			}
		]
	}
}),
	fourElements: createInternalPage({
	"href": "/classes/monk/four-elements",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Four Elements Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Four Elements Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Four Elements Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Four Elements Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Four Elements",
	"title": "D&D Portal - Four Elements",
	"subTitle": "Monk subclass",
	"description": "Spend ki on elemental disciplines that emulate spells and techniques.",
	"descriptions": {
		"short": "Spend ki on elemental disciplines that emulate spells and techniques.",
		"medium": "Four Elements: Spend ki on elemental disciplines that emulate spells and techniques.",
		"long": [
			[
				{
					"type": "text",
					"text": "Spend ki on elemental disciplines that emulate "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": " and techniques."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"four-elements"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "disciple-of-the-elements-elemental-disciplines",
				"title": "Disciple of the Elements; Elemental Disciplines",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn elemental disciplines powered by ki, beginning with Elemental Attunement and another choice."
							}
						]
					}
				]
			},
			{
				"id": "elemental-disciplines-progression",
				"title": "Elemental Disciplines progression",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn another discipline and gain access to disciplines with higher ki costs and stronger "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " effects."
							}
						]
					}
				]
			},
			{
				"id": "elemental-disciplines-progression",
				"title": "Elemental Disciplines progression",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn another discipline and unlock more advanced elemental techniques."
							}
						]
					}
				]
			},
			{
				"id": "elemental-disciplines-progression",
				"title": "Elemental Disciplines progression",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn another discipline and unlock the highest-level elemental techniques."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "disciple-of-the-elements-elemental-disciplines",
				"title": "Disciple of the Elements; Elemental Disciplines"
			},
			{
				"id": "elemental-disciplines-progression",
				"title": "Elemental Disciplines progression"
			},
			{
				"id": "elemental-disciplines-progression",
				"title": "Elemental Disciplines progression"
			},
			{
				"id": "elemental-disciplines-progression",
				"title": "Elemental Disciplines progression"
			}
		]
	}
}),
	kensei: createInternalPage({
	"href": "/classes/monk/kensei",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Kensei Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Kensei Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Kensei Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Kensei Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Kensei",
	"title": "D&D Portal - Kensei",
	"subTitle": "Monk subclass",
	"description": "Master selected weapons and enhance them with ki.",
	"descriptions": {
		"short": "Master selected weapons and enhance them with ki.",
		"medium": "Kensei: Master selected weapons and enhance them with ki.",
		"long": [
			[
				{
					"type": "text",
					"text": "Master selected weapons and enhance them with ki."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"kensei"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "path-of-the-kensei",
				"title": "Path of the Kensei",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose kensei weapons and gain Agile Parry, ranged bonus damage, artistic tool training, and magical kensei weapon attacks."
							}
						]
					}
				]
			},
			{
				"id": "one-with-the-blade",
				"title": "One with the Blade",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Kensei weapons count as magical and can spend ki to add martial-arts damage to one hit."
							}
						]
					}
				]
			},
			{
				"id": "sharpen-the-blade",
				"title": "Sharpen the Blade",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki to grant a nonmagical kensei weapon a temporary attack and damage bonus."
							}
						]
					}
				]
			},
			{
				"id": "unerring-accuracy",
				"title": "Unerring Accuracy",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Reroll one missed monk-weapon attack on each turn."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "path-of-the-kensei",
				"title": "Path of the Kensei"
			},
			{
				"id": "one-with-the-blade",
				"title": "One with the Blade"
			},
			{
				"id": "sharpen-the-blade",
				"title": "Sharpen the Blade"
			},
			{
				"id": "unerring-accuracy",
				"title": "Unerring Accuracy"
			}
		]
	}
}),
	longDeath: createInternalPage({
	"href": "/classes/monk/long-death",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Long Death Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Long Death Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Long Death Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Long Death Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Long Death",
	"title": "D&D Portal - Long Death",
	"subTitle": "Monk subclass",
	"description": "Harvest temporary hit points and resist death through ki.",
	"descriptions": {
		"short": "Harvest temporary hit points and resist death through ki.",
		"medium": "Long Death: Harvest temporary hit points and resist death through ki.",
		"long": [
			[
				{
					"type": "text",
					"text": "Harvest "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.hitPoints",
					"label": "temporary hit points"
				},
				{
					"type": "text",
					"text": " and resist death through ki."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"long-death"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide",
		"featureSections": [
			{
				"id": "touch-of-death",
				"title": "Touch of Death",
				"subtitle": "3rd level",
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
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " when you reduce a nearby creature to 0 "
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
				"id": "hour-of-reaping",
				"title": "Hour of Reaping",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use an action to frighten creatures that can see you."
							}
						]
					}
				]
			},
			{
				"id": "mastery-of-death",
				"title": "Mastery of Death",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend 1 ki to remain at 1 hit point instead of dropping to 0."
							}
						]
					}
				]
			},
			{
				"id": "touch-of-the-long-death",
				"title": "Touch of the Long Death",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki after touching a creature to deal scaling "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage on a failed save."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "touch-of-death",
				"title": "Touch of Death"
			},
			{
				"id": "hour-of-reaping",
				"title": "Hour of Reaping"
			},
			{
				"id": "mastery-of-death",
				"title": "Mastery of Death"
			},
			{
				"id": "touch-of-the-long-death",
				"title": "Touch of the Long Death"
			}
		]
	}
}),
	mercy: createInternalPage({
	"href": "/classes/monk/mercy",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Mercy Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Mercy Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Mercy Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Mercy Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Mercy",
	"title": "D&D Portal - Mercy",
	"subTitle": "Monk subclass",
	"description": "Use Hand of Healing and Hand of Harm with poison and restoration effects.",
	"descriptions": {
		"short": "Use Hand of Healing and Hand of Harm with poison and restoration effects.",
		"medium": "Mercy: Use Hand of Healing and Hand of Harm with poison and restoration effects.",
		"long": [
			[
				{
					"type": "text",
					"text": "Use Hand of Healing and Hand of Harm with "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.poison",
					"label": "poison"
				},
				{
					"type": "text",
					"text": " and restoration effects."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"mercy"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "implements-of-mercy-hand-of-healing-hand-of-harm",
				"title": "Implements of Mercy; Hand of Healing; Hand of Harm",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain medical and herbal training, spend ki to heal with an unarmed strike, or add "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage to a hit."
							}
						]
					}
				]
			},
			{
				"id": "physician-s-touch",
				"title": "Physician\u2019s Touch",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Hand of Healing can end selected conditions, while Hand of Harm can impose "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.poisoned",
								"label": "poisoned"
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
				"id": "flurry-of-healing-and-harm",
				"title": "Flurry of Healing and Harm",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Replace Flurry of Blows attacks with free uses of Hand of Healing and use Hand of Harm once during the flurry without extra ki."
							}
						]
					}
				]
			},
			{
				"id": "hand-of-ultimate-mercy",
				"title": "Hand of Ultimate Mercy",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki to restore a recently dead creature to life with "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " and remove several conditions."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "implements-of-mercy-hand-of-healing-hand-of-harm",
				"title": "Implements of Mercy; Hand of Healing; Hand of Harm"
			},
			{
				"id": "physician-s-touch",
				"title": "Physician\u2019s Touch"
			},
			{
				"id": "flurry-of-healing-and-harm",
				"title": "Flurry of Healing and Harm"
			},
			{
				"id": "hand-of-ultimate-mercy",
				"title": "Hand of Ultimate Mercy"
			}
		]
	}
}),
	openHand: createInternalPage({
	"href": "/classes/monk/open-hand",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Open Hand Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Open Hand Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Open Hand Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Open Hand Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Open Hand",
	"title": "D&D Portal - Open Hand",
	"subTitle": "Monk subclass",
	"description": "Add control riders to Flurry of Blows and gain self-healing.",
	"descriptions": {
		"short": "Add control riders to Flurry of Blows and gain self-healing.",
		"medium": "Open Hand: Add control riders to Flurry of Blows and gain self-healing.",
		"long": [
			[
				{
					"type": "text",
					"text": "Add control riders to Flurry of Blows and gain self-healing."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"open-hand"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "open-hand-technique",
				"title": "Open Hand Technique",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Flurry of Blows hits can knock a target "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.prone",
								"label": "prone"
							},
							{
								"type": "text",
								"text": ", push it, or prevent reactions."
							}
						]
					}
				]
			},
			{
				"id": "wholeness-of-body",
				"title": "Wholeness of Body",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use an action to restore a large amount of your own "
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
				"id": "tranquility",
				"title": "Tranquility",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": ", gain the effect of Sanctuary until you attack or cast an affecting "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
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
				"id": "quivering-palm",
				"title": "Quivering Palm",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Plant lethal vibrations with an unarmed hit, then trigger them later for massive damage or immediate reduction to 0 "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " on a failed save."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "open-hand-technique",
				"title": "Open Hand Technique"
			},
			{
				"id": "wholeness-of-body",
				"title": "Wholeness of Body"
			},
			{
				"id": "tranquility",
				"title": "Tranquility"
			},
			{
				"id": "quivering-palm",
				"title": "Quivering Palm"
			}
		]
	}
}),
	shadow: createInternalPage({
	"href": "/classes/monk/shadow",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Shadow Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Shadow Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Shadow Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Shadow Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Shadow",
	"title": "D&D Portal - Shadow",
	"subTitle": "Monk subclass",
	"description": "Stealth magic, teleportation between shadows, and opportunistic strikes.",
	"descriptions": {
		"short": "Stealth magic, teleportation between shadows, and opportunistic strikes.",
		"medium": "Shadow: Stealth magic, teleportation between shadows, and opportunistic strikes.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.skills.stealth",
					"label": "Stealth"
				},
				{
					"type": "text",
					"text": " magic, teleportation between shadows, and opportunistic strikes."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"shadow"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "shadow-arts",
				"title": "Shadow Arts",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki to cast selected darkness and "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "stealth"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and gain Minor Illusion."
							}
						]
					}
				]
			},
			{
				"id": "shadow-step",
				"title": "Shadow Step",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport between areas of dim light or darkness and gain advantage on the next "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.meleeAttack",
								"label": "melee attack"
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
				"id": "cloak-of-shadows",
				"title": "Cloak of Shadows",
				"subtitle": "11th level",
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
								"text": " while in dim light or darkness until attacking, casting, or entering bright light."
							}
						]
					}
				]
			},
			{
				"id": "opportunist",
				"title": "Opportunist",
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
								"text": " to make a "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.meleeAttack",
								"label": "melee attack"
							},
							{
								"type": "text",
								"text": " when another creature hits a nearby target."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "shadow-arts",
				"title": "Shadow Arts"
			},
			{
				"id": "shadow-step",
				"title": "Shadow Step"
			},
			{
				"id": "cloak-of-shadows",
				"title": "Cloak of Shadows"
			},
			{
				"id": "opportunist",
				"title": "Opportunist"
			}
		]
	}
}),
	sunSoul: createInternalPage({
	"href": "/classes/monk/sun-soul",
	"img": {
		"href": "/icons/white/classes/monk.svg",
		"alt": "A stylized Monk class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Sun Soul Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Sun Soul Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Sun Soul Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-female-s.webp",
					"m": "/images/classes/monk/card-female-m.webp",
					"l": "/images/classes/monk/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Sun Soul Monk class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/monk/card-male-s.webp",
					"m": "/images/classes/monk/card-male-m.webp",
					"l": "/images/classes/monk/card-male-l.webp"
				}
			}
		}
	},
	"label": "Sun Soul",
	"title": "D&D Portal - Sun Soul",
	"subTitle": "Monk subclass",
	"description": "Fire radiant bolts and explosive sun techniques.",
	"descriptions": {
		"short": "Fire radiant bolts and explosive sun techniques.",
		"medium": "Sun Soul: Fire radiant bolts and explosive sun techniques.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.fire",
					"label": "Fire"
				},
				{
					"type": "text",
					"text": " "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.radiant",
					"label": "radiant"
				},
				{
					"type": "text",
					"text": " bolts and explosive sun techniques."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.monk.page"
	},
	"tags": [
		"monk",
		"subclass",
		"sun-soul"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "radiant-sun-bolt",
				"title": "Radiant Sun Bolt",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Make ranged "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " attacks that use Martial Arts damage and can be used with a Flurry-like "
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
				"id": "searing-arc-strike",
				"title": "Searing Arc Strike",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After attacking, spend ki to cast Burning Hands as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " and increase its level with more ki."
							}
						]
					}
				]
			},
			{
				"id": "searing-sunburst",
				"title": "Searing Sunburst",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " explosion at range, with optional ki expenditure to increase damage."
							}
						]
					}
				]
			},
			{
				"id": "sun-shield",
				"title": "Sun Shield",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Emit bright light and retaliate with "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " damage when hit by a "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.meleeAttack",
								"label": "melee attack"
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
				"id": "radiant-sun-bolt",
				"title": "Radiant Sun Bolt"
			},
			{
				"id": "searing-arc-strike",
				"title": "Searing Arc Strike"
			},
			{
				"id": "searing-sunburst",
				"title": "Searing Sunburst"
			},
			{
				"id": "sun-shield",
				"title": "Sun Shield"
			}
		]
	}
}),
} as const;

export const monk = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/monk",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Shortsword"
					}
				],
				[
					{
						"type": "text",
						"text": "simple weapon"
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
			"label": "10 darts",
			"items": [
				[
					{
						"type": "text",
						"text": "10 darts"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Monk progression",
		"heading": "Monk Progression",
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
				"key": "martialArts",
				"label": "Martial Arts"
			},
			{
				"key": "ki",
				"label": "Ki"
			},
			{
				"key": "movement",
				"label": "Movement"
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Unarmored Defense",
						"sectionId": "unarmored-defense"
					},
					{
						"label": "Martial Arts",
						"sectionId": "martial-arts"
					}
				],
				"values": {
					"martialArts": "1d4",
					"ki": "\u2014",
					"movement": "\u2014"
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Ki",
						"sectionId": "ki"
					},
					{
						"label": "Unarmored Movement",
						"sectionId": "unarmored-movement"
					},
					{
						"label": "Dedicated Weapon",
						"sectionId": "dedicated-weapon",
						"optional": true
					}
				],
				"values": {
					"martialArts": "1d4",
					"ki": 2,
					"movement": "+10 ft."
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Monastic Tradition",
						"sectionId": "monastic-tradition"
					},
					{
						"label": "Deflect Missiles",
						"sectionId": "deflect-missiles"
					},
					{
						"label": "Ki-Fueled Attack",
						"sectionId": "ki-fueled-attack",
						"optional": true
					}
				],
				"values": {
					"martialArts": "1d4",
					"ki": 3,
					"movement": "+10 ft."
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
						"label": "Slow Fall",
						"sectionId": "slow-fall"
					},
					{
						"label": "Quickened Healing",
						"sectionId": "quickened-healing",
						"optional": true
					}
				],
				"values": {
					"martialArts": "1d4",
					"ki": 4,
					"movement": "+10 ft."
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Extra Attack",
						"sectionId": "extra-attack"
					},
					{
						"label": "Stunning Strike",
						"sectionId": "stunning-strike"
					},
					{
						"label": "Focused Aim",
						"sectionId": "focused-aim",
						"optional": true
					}
				],
				"values": {
					"martialArts": "1d6",
					"ki": 5,
					"movement": "+10 ft."
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Ki-Empowered Strikes",
						"sectionId": "ki-empowered-strikes"
					},
					{
						"label": "Tradition feature",
						"sectionId": "tradition-feature"
					}
				],
				"values": {
					"martialArts": "1d6",
					"ki": 6,
					"movement": "+15 ft."
				}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Evasion",
						"sectionId": "evasion"
					},
					{
						"label": "Stillness of Mind",
						"sectionId": "stillness-of-mind"
					}
				],
				"values": {
					"martialArts": "1d6",
					"ki": 7,
					"movement": "+15 ft."
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
					"martialArts": "1d6",
					"ki": 8,
					"movement": "+15 ft."
				}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Unarmored Movement improvement",
						"sectionId": "unarmored-movement-improvement"
					}
				],
				"values": {
					"martialArts": "1d6",
					"ki": 9,
					"movement": "+15 ft."
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Purity of Body",
						"sectionId": "purity-of-body"
					}
				],
				"values": {
					"martialArts": "1d6",
					"ki": 10,
					"movement": "+20 ft."
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Tradition feature",
						"sectionId": "tradition-feature"
					}
				],
				"values": {
					"martialArts": "1d8",
					"ki": 11,
					"movement": "+20 ft."
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
					"martialArts": "1d8",
					"ki": 12,
					"movement": "+20 ft."
				}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Tongue of the Sun and Moon",
						"sectionId": "tongue-of-the-sun-and-moon"
					}
				],
				"values": {
					"martialArts": "1d8",
					"ki": 13,
					"movement": "+20 ft."
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Diamond Soul",
						"sectionId": "diamond-soul"
					}
				],
				"values": {
					"martialArts": "1d8",
					"ki": 14,
					"movement": "+25 ft."
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Timeless Body",
						"sectionId": "timeless-body"
					}
				],
				"values": {
					"martialArts": "1d8",
					"ki": 15,
					"movement": "+25 ft."
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
					"martialArts": "1d8",
					"ki": 16,
					"movement": "+25 ft."
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Tradition feature",
						"sectionId": "tradition-feature"
					}
				],
				"values": {
					"martialArts": "1d10",
					"ki": 17,
					"movement": "+25 ft."
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Empty Body",
						"sectionId": "empty-body"
					}
				],
				"values": {
					"martialArts": "1d10",
					"ki": 18,
					"movement": "+30 ft."
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
					"martialArts": "1d10",
					"ki": 19,
					"movement": "+30 ft."
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Perfect Self",
						"sectionId": "perfect-self"
					}
				],
				"values": {
					"martialArts": "1d10",
					"ki": 20,
					"movement": "+30 ft."
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
									"type": "text",
									"text": "None by default; some traditions spend ki to reproduce "
								},
								{
									"type": "link",
									"path": "internals.rules.spellcasting.spells",
									"label": "spell"
								},
								{
									"type": "text",
									"text": "-like effects."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "melee, mobility, control, skirmisher, ki"
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
									"type": "text",
									"text": "None"
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
									"text": ", shortswords"
								}
							]
						},
						{
							"label": "Tools",
							"value": [
								{
									"type": "text",
									"text": "One artisan\u2019s tool or musical instrument"
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
									"path": "internals.rules.skills.religion",
									"label": "Religion"
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
							"text": "As a monk, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "unarmored-defense",
				"title": "Unarmored Defense",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "While unarmored and without a "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.shields",
								"label": "shield"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "AC"
							},
							{
								"type": "text",
								"text": " equals 10 + "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.dexterity",
								"label": "Dexterity"
							},
							{
								"type": "text",
								"text": " modifier + "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " modifier."
							}
						]
					}
				]
			},
			{
				"id": "martial-arts",
				"title": "Martial Arts",
				"subtitle": "Level 1",
				"optional": false,
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
								"path": "internals.rules.abilityScores.dexterity",
								"label": "Dexterity"
							},
							{
								"type": "text",
								"text": " for monk weapons and unarmed strikes, scale damage with the Martial Arts die, and make a bonus unarmed strike after attacking."
							}
						]
					}
				]
			},
			{
				"id": "ki",
				"title": "Ki",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki points, recovered on a short or "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": ", on Flurry of Blows, Patient Defense, Step of the Wind, and later features."
							}
						]
					}
				]
			},
			{
				"id": "unarmored-movement",
				"title": "Unarmored Movement",
				"subtitle": "Levels 2, improves through 18",
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
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " while unarmored; at 9th level move across vertical surfaces and liquids during the turn."
							}
						]
					}
				]
			},
			{
				"id": "dedicated-weapon",
				"title": "Dedicated Weapon (Optional)",
				"subtitle": "Level 2",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Designate a proficient non-heavy, non-special weapon as a monk weapon after a rest."
							}
						]
					}
				]
			},
			{
				"id": "monastic-tradition",
				"title": "Monastic Tradition",
				"subtitle": "Levels 3, 6, 11, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass that defines the monk\u2019s ki techniques."
							}
						]
					}
				]
			},
			{
				"id": "deflect-missiles",
				"title": "Deflect Missiles",
				"subtitle": "Level 3",
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
								"text": " to reduce ranged weapon damage and potentially throw the missile back."
							}
						]
					}
				]
			},
			{
				"id": "ki-fueled-attack",
				"title": "Ki-Fueled Attack (Optional)",
				"subtitle": "Level 3",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After spending ki during the action, make a bonus unarmed or monk-weapon attack."
							}
						]
					}
				]
			},
			{
				"id": "slow-fall",
				"title": "Slow Fall",
				"subtitle": "Level 4",
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
								"text": " to reduce "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.falling",
								"label": "falling"
							},
							{
								"type": "text",
								"text": " damage by five times monk level."
							}
						]
					}
				]
			},
			{
				"id": "quickened-healing",
				"title": "Quickened Healing (Optional)",
				"subtitle": "Level 4",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki and an action to recover "
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
				"id": "stunning-strike",
				"title": "Stunning Strike",
				"subtitle": "Level 5",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki after a melee hit to "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " a "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.constitution",
								"label": "Constitution"
							},
							{
								"type": "text",
								"text": " save or stun the target."
							}
						]
					}
				]
			},
			{
				"id": "focused-aim",
				"title": "Focused Aim (Optional)",
				"subtitle": "Level 5",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki after missing to increase the "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.attackRoll",
								"label": "attack roll"
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
				"id": "ki-empowered-strikes",
				"title": "Ki-Empowered Strikes",
				"subtitle": "Level 6",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Unarmed strikes count as magical for resistance and immunity."
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
								"text": "Take no damage on successful "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.dexterity",
								"label": "Dexterity"
							},
							{
								"type": "text",
								"text": " saves for half damage, and half on failure."
							}
						]
					}
				]
			},
			{
				"id": "stillness-of-mind",
				"title": "Stillness of Mind",
				"subtitle": "Level 7",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use an action to end charm or fear on yourself."
							}
						]
					}
				]
			},
			{
				"id": "purity-of-body",
				"title": "Purity of Body",
				"subtitle": "Level 10",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Become immune to disease and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.poison",
								"label": "poison"
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
				"id": "tongue-of-the-sun-and-moon",
				"title": "Tongue of the Sun and Moon",
				"subtitle": "Level 13",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Understand all spoken languages and be understood by language-using creatures."
							}
						]
					}
				]
			},
			{
				"id": "diamond-soul",
				"title": "Diamond Soul",
				"subtitle": "Level 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain proficiency in all "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throws"
							},
							{
								"type": "text",
								"text": " and spend ki to reroll failures."
							}
						]
					}
				]
			},
			{
				"id": "timeless-body",
				"title": "Timeless Body",
				"subtitle": "Level 15",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Avoid frailty from age and no longer require food or water."
							}
						]
					}
				]
			},
			{
				"id": "empty-body",
				"title": "Empty Body",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend ki for invisibility and broad damage resistance, or later cast Astral Projection on yourself."
							}
						]
					}
				]
			},
			{
				"id": "perfect-self",
				"title": "Perfect Self",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain 4 ki when "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " is rolled with none remaining."
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
									"page": "internals.classes.monk.subclasses.astralSelf",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.monk.subclasses.ascendantDragon",
									"source": "Fizban\u2019s Treasury of Dragons"
								},
								{
									"page": "internals.classes.monk.subclasses.drunkenMaster",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.monk.subclasses.fourElements",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.monk.subclasses.kensei",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.monk.subclasses.longDeath",
									"source": "Sword Coast Adventurer\u2019s Guide"
								},
								{
									"page": "internals.classes.monk.subclasses.mercy",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.monk.subclasses.openHand",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.monk.subclasses.shadow",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.monk.subclasses.sunSoul",
									"source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything"
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
			"title": "Monk Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "unarmored-defense",
					"title": "Unarmored Defense"
				},
				{
					"id": "martial-arts",
					"title": "Martial Arts"
				},
				{
					"id": "ki",
					"title": "Ki"
				},
				{
					"id": "unarmored-movement",
					"title": "Unarmored Movement"
				},
				{
					"id": "dedicated-weapon",
					"title": "Dedicated Weapon (Optional)"
				},
				{
					"id": "monastic-tradition",
					"title": "Monastic Tradition"
				},
				{
					"id": "deflect-missiles",
					"title": "Deflect Missiles"
				},
				{
					"id": "ki-fueled-attack",
					"title": "Ki-Fueled Attack (Optional)"
				},
				{
					"id": "slow-fall",
					"title": "Slow Fall"
				},
				{
					"id": "quickened-healing",
					"title": "Quickened Healing (Optional)"
				},
				{
					"id": "extra-attack",
					"title": "Extra Attack"
				},
				{
					"id": "stunning-strike",
					"title": "Stunning Strike"
				},
				{
					"id": "focused-aim",
					"title": "Focused Aim (Optional)"
				},
				{
					"id": "ki-empowered-strikes",
					"title": "Ki-Empowered Strikes"
				},
				{
					"id": "evasion",
					"title": "Evasion"
				},
				{
					"id": "stillness-of-mind",
					"title": "Stillness of Mind"
				},
				{
					"id": "purity-of-body",
					"title": "Purity of Body"
				},
				{
					"id": "tongue-of-the-sun-and-moon",
					"title": "Tongue of the Sun and Moon"
				},
				{
					"id": "diamond-soul",
					"title": "Diamond Soul"
				},
				{
					"id": "timeless-body",
					"title": "Timeless Body"
				},
				{
					"id": "empty-body",
					"title": "Empty Body"
				},
				{
					"id": "perfect-self",
					"title": "Perfect Self"
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
