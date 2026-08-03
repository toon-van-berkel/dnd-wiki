/*
	Location: src/lib/typescript/data/internals/classes/wizard.ts
	Use: Central Wizard class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/wizard",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Wizard",
	"title": "D&D Portal - Wizard",
	"subTitle": "Character class",
	"description": "An Intelligence-based prepared full caster with the largest spell-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories.",
	"descriptions": {
		"short": "An Intelligence-based prepared full caster with the largest spell-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories.",
		"medium": "An Intelligence-based prepared full caster with the largest spell-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories.",
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
					"text": "-based prepared full caster with the largest "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": "-learning system, ritual flexibility, and subclass traditions focused on schools or specialist theories."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Wizard is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.intelligence",
					"label": "Intelligence"
				},
				{
					"type": "text",
					"text": ", uses a d6 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Wizard core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.intelligence",
					"label": "Intelligence"
				},
				{
					"type": "text",
					"text": "; prepared full-caster progression using a spellbook."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"wizard",
		"class",
		"2014"
	]
});

const subclasses = {
	abjuration: createInternalPage({
	"href": "/classes/wizard/abjuration",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Abjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Abjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Abjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Abjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Abjuration",
	"title": "D&D Portal - Abjuration",
	"subTitle": "Wizard subclass",
	"description": "Protective wards and improved dispelling and counterspelling.",
	"descriptions": {
		"short": "Protective wards and improved dispelling and counterspelling.",
		"medium": "Abjuration: Protective wards and improved dispelling and counterspelling.",
		"long": [
			[
				{
					"type": "text",
					"text": "Protective wards and improved dispelling and counterspelling."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"abjuration"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "abjuration-savant-arcane-ward",
				"title": "Abjuration Savant; Arcane Ward",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy abjuration "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and create a damage-absorbing ward when casting abjuration magic."
							}
						]
					}
				]
			},
			{
				"id": "projected-ward",
				"title": "Projected Ward",
				"subtitle": "6th level",
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
								"text": " to let the ward absorb damage dealt to a nearby creature."
							}
						]
					}
				]
			},
			{
				"id": "improved-abjuration",
				"title": "Improved Abjuration",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add proficiency bonus to "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability checks"
							},
							{
								"type": "text",
								"text": " made for Counterspell and Dispel Magic."
							}
						]
					}
				]
			},
			{
				"id": "spell-resistance",
				"title": "Spell Resistance",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage on saves against "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and resistance to "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " damage."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "abjuration-savant-arcane-ward",
				"title": "Abjuration Savant; Arcane Ward"
			},
			{
				"id": "projected-ward",
				"title": "Projected Ward"
			},
			{
				"id": "improved-abjuration",
				"title": "Improved Abjuration"
			},
			{
				"id": "spell-resistance",
				"title": "Spell Resistance"
			}
		]
	}
}),
	bladesinging: createInternalPage({
	"href": "/classes/wizard/bladesinging",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Bladesinging Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Bladesinging Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Bladesinging Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Bladesinging Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Bladesinging",
	"title": "D&D Portal - Bladesinging",
	"subTitle": "Wizard subclass",
	"description": "Mobile weapon combat supported by Bladesong and Extra Attack.",
	"descriptions": {
		"short": "Mobile weapon combat supported by Bladesong and Extra Attack.",
		"medium": "Bladesinging: Mobile weapon combat supported by Bladesong and Extra Attack.",
		"long": [
			[
				{
					"type": "text",
					"text": "Mobile weapon combat supported by Bladesong and Extra Attack."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"bladesinging"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide; Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "training-in-war-and-song-bladesong",
				"title": "Training in War and Song; Bladesong",
				"subtitle": "2nd level",
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
								"path": "internals.rules.equipment.lightArmor",
								"label": "light armor"
							},
							{
								"type": "text",
								"text": ", one one-handed weapon, and "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.performance",
								"label": "Performance"
							},
							{
								"type": "text",
								"text": " proficiency, and activate Bladesong for "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.concentration",
								"label": "concentration"
							},
							{
								"type": "text",
								"text": ", and "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.dexterity",
								"label": "Dexterity"
							},
							{
								"type": "text",
								"text": " benefits."
							}
						]
					}
				]
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attack twice and replace one attack with a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
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
				"id": "song-of-defense",
				"title": "Song of Defense",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slots as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to reduce incoming damage during Bladesong."
							}
						]
					}
				]
			},
			{
				"id": "song-of-victory",
				"title": "Song of Victory",
				"subtitle": "14th level",
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
								"text": " to melee weapon damage during Bladesong."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "training-in-war-and-song-bladesong",
				"title": "Training in War and Song; Bladesong"
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack"
			},
			{
				"id": "song-of-defense",
				"title": "Song of Defense"
			},
			{
				"id": "song-of-victory",
				"title": "Song of Victory"
			}
		]
	}
}),
	chronurgy: createInternalPage({
	"href": "/classes/wizard/chronurgy",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Chronurgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Chronurgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Chronurgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Chronurgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Chronurgy",
	"title": "D&D Portal - Chronurgy",
	"subTitle": "Wizard subclass",
	"description": "Manipulate initiative, rerolls, time stasis, and outcome certainty.",
	"descriptions": {
		"short": "Manipulate initiative, rerolls, time stasis, and outcome certainty.",
		"medium": "Chronurgy: Manipulate initiative, rerolls, time stasis, and outcome certainty.",
		"long": [
			[
				{
					"type": "text",
					"text": "Manipulate "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.initiativeRoll",
					"label": "initiative"
				},
				{
					"type": "text",
					"text": ", rerolls, time stasis, and outcome certainty."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"chronurgy"
	],
	"content": {
		"source": "Explorer\u2019s Guide to Wildemount",
		"featureSections": [
			{
				"id": "chronal-shift-temporal-awareness",
				"title": "Chronal Shift; Temporal Awareness",
				"subtitle": "2nd level",
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
								"text": " a nearby creature to reroll an attack, check, or save, and add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
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
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "momentary-stasis",
				"title": "Momentary Stasis",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use an action to incapacitate and immobilize a creature until the end of your next turn."
							}
						]
					}
				]
			},
			{
				"id": "arcane-abeyance",
				"title": "Arcane Abeyance",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Store a lower-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " in a bead that another creature can release later."
							}
						]
					}
				]
			},
			{
				"id": "convergent-future",
				"title": "Convergent Future",
				"subtitle": "14th level",
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
								"text": " to decide whether a nearby attack, check, or save barely succeeds or fails, gaining "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.exhaustion",
								"label": "exhaustion"
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
				"id": "chronal-shift-temporal-awareness",
				"title": "Chronal Shift; Temporal Awareness"
			},
			{
				"id": "momentary-stasis",
				"title": "Momentary Stasis"
			},
			{
				"id": "arcane-abeyance",
				"title": "Arcane Abeyance"
			},
			{
				"id": "convergent-future",
				"title": "Convergent Future"
			}
		]
	}
}),
	conjuration: createInternalPage({
	"href": "/classes/wizard/conjuration",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Conjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Conjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Conjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Conjuration Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Conjuration",
	"title": "D&D Portal - Conjuration",
	"subTitle": "Wizard subclass",
	"description": "Create objects, teleport, and improve summoned creatures.",
	"descriptions": {
		"short": "Create objects, teleport, and improve summoned creatures.",
		"medium": "Conjuration: Create objects, teleport, and improve summoned creatures.",
		"long": [
			[
				{
					"type": "text",
					"text": "Create objects, teleport, and improve summoned creatures."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"conjuration"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "conjuration-savant-minor-conjuration",
				"title": "Conjuration Savant; Minor Conjuration",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy conjuration "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and create a temporary nonmagical object in your hand."
							}
						]
					}
				]
			},
			{
				"id": "benign-transposition",
				"title": "Benign Transposition",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport yourself or swap places with a willing creature, recharging after rest or conjuration spellcasting."
							}
						]
					}
				]
			},
			{
				"id": "focused-conjuration",
				"title": "Focused Conjuration",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Damage cannot break your "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.concentration",
								"label": "concentration"
							},
							{
								"type": "text",
								"text": " on conjuration "
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
				"id": "durable-summons",
				"title": "Durable Summons",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Creatures summoned or created by conjuration "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " gain "
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
			}
		],
		"tableOfContents": [
			{
				"id": "conjuration-savant-minor-conjuration",
				"title": "Conjuration Savant; Minor Conjuration"
			},
			{
				"id": "benign-transposition",
				"title": "Benign Transposition"
			},
			{
				"id": "focused-conjuration",
				"title": "Focused Conjuration"
			},
			{
				"id": "durable-summons",
				"title": "Durable Summons"
			}
		]
	}
}),
	divination: createInternalPage({
	"href": "/classes/wizard/divination",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Divination Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Divination Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Divination Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Divination Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Divination",
	"title": "D&D Portal - Divination",
	"subTitle": "Wizard subclass",
	"description": "Portent dice, divination efficiency, and enhanced senses.",
	"descriptions": {
		"short": "Portent dice, divination efficiency, and enhanced senses.",
		"medium": "Divination: Portent dice, divination efficiency, and enhanced senses.",
		"long": [
			[
				{
					"type": "text",
					"text": "Portent dice, divination efficiency, and enhanced senses."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"divination"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "divination-savant-portent",
				"title": "Divination Savant; Portent",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy divination "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and roll foresight dice after rests that can replace nearby d20 rolls."
							}
						]
					}
				]
			},
			{
				"id": "expert-divination",
				"title": "Expert Divination",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Casting a divination "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " with a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slot restores a lower-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slot."
							}
						]
					}
				]
			},
			{
				"id": "the-third-eye",
				"title": "The Third Eye",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain one selectable sensory benefit such as darkvision, ethereal sight, reading, or seeing invisibility."
							}
						]
					}
				]
			},
			{
				"id": "greater-portent",
				"title": "Greater Portent",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Roll three Portent dice after a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": " instead of two."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "divination-savant-portent",
				"title": "Divination Savant; Portent"
			},
			{
				"id": "expert-divination",
				"title": "Expert Divination"
			},
			{
				"id": "the-third-eye",
				"title": "The Third Eye"
			},
			{
				"id": "greater-portent",
				"title": "Greater Portent"
			}
		]
	}
}),
	enchantment: createInternalPage({
	"href": "/classes/wizard/enchantment",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Enchantment Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Enchantment Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Enchantment Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Enchantment Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Enchantment",
	"title": "D&D Portal - Enchantment",
	"subTitle": "Wizard subclass",
	"description": "Hypnotize, redirect attacks, and alter memories.",
	"descriptions": {
		"short": "Hypnotize, redirect attacks, and alter memories.",
		"medium": "Enchantment: Hypnotize, redirect attacks, and alter memories.",
		"long": [
			[
				{
					"type": "text",
					"text": "Hypnotize, redirect attacks, and alter memories."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"enchantment"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "enchantment-savant-hypnotic-gaze",
				"title": "Enchantment Savant; Hypnotic Gaze",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy enchantment "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and use an action to charm and incapacitate an adjacent creature while maintaining your gaze."
							}
						]
					}
				]
			},
			{
				"id": "instinctive-charm",
				"title": "Instinctive Charm",
				"subtitle": "6th level",
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
								"text": " to redirect an attack aimed at you to another creature."
							}
						]
					}
				]
			},
			{
				"id": "split-enchantment",
				"title": "Split Enchantment",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Single-target enchantment "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " can target a second creature."
							}
						]
					}
				]
			},
			{
				"id": "alter-memories",
				"title": "Alter Memories",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Prevent "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.charmed",
								"label": "charmed"
							},
							{
								"type": "text",
								"text": " creatures from remembering the "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.charmed",
								"label": "charmed"
							},
							{
								"type": "text",
								"text": " period and attempt to erase additional time."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "enchantment-savant-hypnotic-gaze",
				"title": "Enchantment Savant; Hypnotic Gaze"
			},
			{
				"id": "instinctive-charm",
				"title": "Instinctive Charm"
			},
			{
				"id": "split-enchantment",
				"title": "Split Enchantment"
			},
			{
				"id": "alter-memories",
				"title": "Alter Memories"
			}
		]
	}
}),
	evocation: createInternalPage({
	"href": "/classes/wizard/evocation",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Evocation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Evocation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Evocation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Evocation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Evocation",
	"title": "D&D Portal - Evocation",
	"subTitle": "Wizard subclass",
	"description": "Protect allies from area spells and maximize damaging evocations.",
	"descriptions": {
		"short": "Protect allies from area spells and maximize damaging evocations.",
		"medium": "Evocation: Protect allies from area spells and maximize damaging evocations.",
		"long": [
			[
				{
					"type": "text",
					"text": "Protect allies from area "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": " and maximize damaging evocations."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"evocation"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "evocation-savant-sculpt-spells",
				"title": "Evocation Savant; Sculpt Spells",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy evocation "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and protect selected allies from your evocation areas."
							}
						]
					}
				]
			},
			{
				"id": "potent-cantrip",
				"title": "Potent Cantrip",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Creatures that succeed on saves against damaging "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
							},
							{
								"type": "text",
								"text": " still take half damage."
							}
						]
					}
				]
			},
			{
				"id": "empowered-evocation",
				"title": "Empowered Evocation",
				"subtitle": "10th level",
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
								"text": " to one "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.damageRoll",
								"label": "damage roll"
							},
							{
								"type": "text",
								"text": " of a wizard evocation "
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
				"id": "overchannel",
				"title": "Overchannel",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Maximize damage of a lower-level wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": ", with repeated uses causing escalating "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage to you."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "evocation-savant-sculpt-spells",
				"title": "Evocation Savant; Sculpt Spells"
			},
			{
				"id": "potent-cantrip",
				"title": "Potent Cantrip"
			},
			{
				"id": "empowered-evocation",
				"title": "Empowered Evocation"
			},
			{
				"id": "overchannel",
				"title": "Overchannel"
			}
		]
	}
}),
	graviturgy: createInternalPage({
	"href": "/classes/wizard/graviturgy",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Graviturgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Graviturgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Graviturgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Graviturgy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Graviturgy",
	"title": "D&D Portal - Graviturgy",
	"subTitle": "Wizard subclass",
	"description": "Alter weight, movement, and gravitational force.",
	"descriptions": {
		"short": "Alter weight, movement, and gravitational force.",
		"medium": "Graviturgy: Alter weight, movement, and gravitational force.",
		"long": [
			[
				{
					"type": "text",
					"text": "Alter weight, movement, and gravitational "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.force",
					"label": "force"
				},
				{
					"type": "text",
					"text": "."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"graviturgy"
	],
	"content": {
		"source": "Explorer\u2019s Guide to Wildemount",
		"featureSections": [
			{
				"id": "adjust-density",
				"title": "Adjust Density",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Alter a creature or object\u2019s weight, changing "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.strength",
								"label": "Strength"
							},
							{
								"type": "text",
								"text": " checks, and later attack or "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": " values."
							}
						]
					}
				]
			},
			{
				"id": "gravity-well",
				"title": "Gravity Well",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move a creature when it is hit by one of your "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", fails a save against one, or is willing and targeted."
							}
						]
					}
				]
			},
			{
				"id": "violent-attraction",
				"title": "Violent Attraction",
				"subtitle": "10th level",
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
								"text": " to increase a weapon hit\u2019s damage or a "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.falling",
								"label": "falling"
							},
							{
								"type": "text",
								"text": " creature\u2019s damage."
							}
						]
					}
				]
			},
			{
				"id": "event-horizon",
				"title": "Event Horizon",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a gravitational field that slows and damages hostile creatures around you."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "adjust-density",
				"title": "Adjust Density"
			},
			{
				"id": "gravity-well",
				"title": "Gravity Well"
			},
			{
				"id": "violent-attraction",
				"title": "Violent Attraction"
			},
			{
				"id": "event-horizon",
				"title": "Event Horizon"
			}
		]
	}
}),
	illusion: createInternalPage({
	"href": "/classes/wizard/illusion",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Illusion Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Illusion Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Illusion Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Illusion Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Illusion",
	"title": "D&D Portal - Illusion",
	"subTitle": "Wizard subclass",
	"description": "Improved minor illusions, flexible images, and temporary reality.",
	"descriptions": {
		"short": "Improved minor illusions, flexible images, and temporary reality.",
		"medium": "Illusion: Improved minor illusions, flexible images, and temporary reality.",
		"long": [
			[
				{
					"type": "text",
					"text": "Improved minor illusions, flexible images, and temporary reality."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"illusion"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "illusion-savant-improved-minor-illusion",
				"title": "Illusion Savant; Improved Minor Illusion",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy illusion "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently, learn Minor Illusion, and create sound and image together with it."
							}
						]
					}
				]
			},
			{
				"id": "malleable-illusions",
				"title": "Malleable Illusions",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Change the "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.nature",
								"label": "nature"
							},
							{
								"type": "text",
								"text": " of an ongoing illusion "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " with an action."
							}
						]
					}
				]
			},
			{
				"id": "illusory-self",
				"title": "Illusory Self",
				"subtitle": "10th level",
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
								"text": " to create a duplicate that causes one attack to miss."
							}
						]
					}
				]
			},
			{
				"id": "illusory-reality",
				"title": "Illusory Reality",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Temporarily make one nonmagical, non-damaging object from an illusion real."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "illusion-savant-improved-minor-illusion",
				"title": "Illusion Savant; Improved Minor Illusion"
			},
			{
				"id": "malleable-illusions",
				"title": "Malleable Illusions"
			},
			{
				"id": "illusory-self",
				"title": "Illusory Self"
			},
			{
				"id": "illusory-reality",
				"title": "Illusory Reality"
			}
		]
	}
}),
	necromancy: createInternalPage({
	"href": "/classes/wizard/necromancy",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Necromancy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Necromancy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Necromancy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Necromancy Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Necromancy",
	"title": "D&D Portal - Necromancy",
	"subTitle": "Wizard subclass",
	"description": "Harvest life and create stronger undead.",
	"descriptions": {
		"short": "Harvest life and create stronger undead.",
		"medium": "Necromancy: Harvest life and create stronger undead.",
		"long": [
			[
				{
					"type": "text",
					"text": "Harvest life and create stronger undead."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"necromancy"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "necromancy-savant-grim-harvest",
				"title": "Necromancy Savant; Grim Harvest",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy necromancy "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and regain "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " when "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " kill creatures."
							}
						]
					}
				]
			},
			{
				"id": "undead-thralls",
				"title": "Undead Thralls",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn Animate Dead, affect an additional corpse, and strengthen undead you create."
							}
						]
					}
				]
			},
			{
				"id": "inured-to-undeath",
				"title": "Inured to Undeath",
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
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " resistance and immunity to reductions of maximum "
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
				"id": "command-undead",
				"title": "Command Undead",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Attempt to place an undead creature under permanent control."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "necromancy-savant-grim-harvest",
				"title": "Necromancy Savant; Grim Harvest"
			},
			{
				"id": "undead-thralls",
				"title": "Undead Thralls"
			},
			{
				"id": "inured-to-undeath",
				"title": "Inured to Undeath"
			},
			{
				"id": "command-undead",
				"title": "Command Undead"
			}
		]
	}
}),
	orderOfScribes: createInternalPage({
	"href": "/classes/wizard/order-of-scribes",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Order of Scribes Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Order of Scribes Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Order of Scribes Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Order of Scribes Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Order of Scribes",
	"title": "D&D Portal - Order of Scribes",
	"subTitle": "Wizard subclass",
	"description": "Awaken a spellbook, change damage types, and cast through a manifested mind.",
	"descriptions": {
		"short": "Awaken a spellbook, change damage types, and cast through a manifested mind.",
		"medium": "Order of Scribes: Awaken a spellbook, change damage types, and cast through a manifested mind.",
		"long": [
			[
				{
					"type": "text",
					"text": "Awaken a spellbook, change damage types, and cast through a manifested mind."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"order-of-scribes"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "wizardly-quill-awakened-spellbook",
				"title": "Wizardly Quill; Awakened Spellbook",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a magical quill, copy "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " rapidly, use the spellbook as a focus, change "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " damage types, and cast rituals without added time."
							}
						]
					}
				]
			},
			{
				"id": "manifest-mind",
				"title": "Manifest Mind",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Manifest the spellbook\u2019s mind to scout and cast a limited number of "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " from its space."
							}
						]
					}
				]
			},
			{
				"id": "master-scrivener",
				"title": "Master Scrivener",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a temporary enhanced "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " scroll and produce normal scrolls more cheaply."
							}
						]
					}
				]
			},
			{
				"id": "one-with-the-word",
				"title": "One with the Word",
				"subtitle": "14th level",
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
								"path": "internals.rules.skills.arcana",
								"label": "Arcana"
							},
							{
								"type": "text",
								"text": " and use the spellbook\u2019s mind to prevent damage by temporarily sacrificing "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " from the book."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "wizardly-quill-awakened-spellbook",
				"title": "Wizardly Quill; Awakened Spellbook"
			},
			{
				"id": "manifest-mind",
				"title": "Manifest Mind"
			},
			{
				"id": "master-scrivener",
				"title": "Master Scrivener"
			},
			{
				"id": "one-with-the-word",
				"title": "One with the Word"
			}
		]
	}
}),
	transmutation: createInternalPage({
	"href": "/classes/wizard/transmutation",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Transmutation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Transmutation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Transmutation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Transmutation Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Transmutation",
	"title": "D&D Portal - Transmutation",
	"subTitle": "Wizard subclass",
	"description": "Minor alchemy, a transmuter\u2019s stone, and transformative mastery.",
	"descriptions": {
		"short": "Minor alchemy, a transmuter\u2019s stone, and transformative mastery.",
		"medium": "Transmutation: Minor alchemy, a transmuter\u2019s stone, and transformative mastery.",
		"long": [
			[
				{
					"type": "text",
					"text": "Minor alchemy, a transmuter\u2019s stone, and transformative mastery."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"transmutation"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "transmutation-savant-minor-alchemy",
				"title": "Transmutation Savant; Minor Alchemy",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Copy transmutation "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " more efficiently and temporarily transform one common material into another."
							}
						]
					}
				]
			},
			{
				"id": "transmuter-s-stone",
				"title": "Transmuter\u2019s Stone",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a stone that grants one selectable benefit such as darkvision, "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": " proficiency, or elemental resistance."
							}
						]
					}
				]
			},
			{
				"id": "shapechanger",
				"title": "Shapechanger",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add Polymorph to the spellbook and cast it on yourself without a slot to assume a low-challenge beast form."
							}
						]
					}
				]
			},
			{
				"id": "master-transmuter",
				"title": "Master Transmuter",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Consume the stone for a major transformation, healing, restoration, or youth effect."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "transmutation-savant-minor-alchemy",
				"title": "Transmutation Savant; Minor Alchemy"
			},
			{
				"id": "transmuter-s-stone",
				"title": "Transmuter\u2019s Stone"
			},
			{
				"id": "shapechanger",
				"title": "Shapechanger"
			},
			{
				"id": "master-transmuter",
				"title": "Master Transmuter"
			}
		]
	}
}),
	warMagic: createInternalPage({
	"href": "/classes/wizard/war-magic",
	"img": {
		"href": "/icons/white/classes/wizard.svg",
		"alt": "A stylized Wizard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female War Magic Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male War Magic Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female War Magic Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-female-s.webp",
					"m": "/images/classes/wizard/card-female-m.webp",
					"l": "/images/classes/wizard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male War Magic Wizard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/wizard/card-male-s.webp",
					"m": "/images/classes/wizard/card-male-m.webp",
					"l": "/images/classes/wizard/card-male-l.webp"
				}
			}
		}
	},
	"label": "War Magic",
	"title": "D&D Portal - War Magic",
	"subTitle": "Wizard subclass",
	"description": "Fast defensive reactions, initiative, and power surges.",
	"descriptions": {
		"short": "Fast defensive reactions, initiative, and power surges.",
		"medium": "War Magic: Fast defensive reactions, initiative, and power surges.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fast defensive reactions, "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.initiativeRoll",
					"label": "initiative"
				},
				{
					"type": "text",
					"text": ", and power surges."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.wizard.page"
	},
	"tags": [
		"wizard",
		"subclass",
		"war-magic"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "arcane-deflection-tactical-wit",
				"title": "Arcane Deflection; Tactical Wit",
				"subtitle": "2nd level",
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
								"text": " for a defensive "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
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
								"text": " bonus at the cost of restricted spellcasting next turn, and add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
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
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "power-surge",
				"title": "Power Surge",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Store magical energy when ending "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " with Counterspell or Dispel Magic and expend it for extra "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " damage."
							}
						]
					}
				]
			},
			{
				"id": "durable-magic",
				"title": "Durable Magic",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "While concentrating on a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": ", gain bonuses to "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": " and "
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
				"id": "deflecting-shroud",
				"title": "Deflecting Shroud",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Arcane Deflection also deals "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " damage to several nearby creatures."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "arcane-deflection-tactical-wit",
				"title": "Arcane Deflection; Tactical Wit"
			},
			{
				"id": "power-surge",
				"title": "Power Surge"
			},
			{
				"id": "durable-magic",
				"title": "Durable Magic"
			},
			{
				"id": "deflecting-shroud",
				"title": "Deflecting Shroud"
			}
		]
	}
}),
} as const;

export const wizard = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/wizard",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Quarterstaff"
					}
				],
				[
					{
						"type": "text",
						"text": "dagger"
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
						"text": "Component pouch"
					}
				],
				[
					{
						"type": "text",
						"text": "arcane focus"
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
						"text": "Scholar\u2019s pack"
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
			"label": "Spellbook",
			"items": [
				[
					{
						"type": "text",
						"text": "Spellbook"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Wizard progression",
		"heading": "Wizard Progression",
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
						"label": "Spellcasting",
						"sectionId": "spellcasting"
					},
					{
						"label": "Arcane Recovery",
						"sectionId": "arcane-recovery"
					}
				],
				"values": {
					"cantrips": 3
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Arcane Tradition",
						"sectionId": "arcane-tradition"
					}
				],
				"values": {
					"cantrips": 3
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Cantrip Formulas",
						"sectionId": "cantrip-formulas",
						"optional": true
					}
				],
				"values": {
					"cantrips": 3
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
					"cantrips": 4
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"cantrips": 4
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Tradition feature",
						"sectionId": "tradition-feature"
					}
				],
				"values": {
					"cantrips": 4
				}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"cantrips": 4
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
					"cantrips": 4
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
					"cantrips": 4
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Tradition feature",
						"sectionId": "tradition-feature"
					}
				],
				"values": {
					"cantrips": 5
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"cantrips": 5
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
					"cantrips": 5
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
					"cantrips": 5
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Tradition feature",
						"sectionId": "tradition-feature"
					}
				],
				"values": {
					"cantrips": 5
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"cantrips": 5
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
					"cantrips": 5
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
					"cantrips": 5
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Spell Mastery",
						"sectionId": "spell-mastery"
					}
				],
				"values": {
					"cantrips": 5
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
					"cantrips": 5
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Signature Spells",
						"sectionId": "signature-spells"
					}
				],
				"values": {
					"cantrips": 5
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
									"text": "; prepared full-caster progression using a spellbook."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "spellcasting, arcane, control, utility, rituals"
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
									"text": "d6"
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
									"type": "text",
									"text": "Daggers, darts, slings, quarterstaffs, light crossbows"
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
									"path": "internals.rules.skills.medicine",
									"label": "Medicine"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.skills.religion",
									"label": "Religion"
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
							"text": "As a wizard, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "spellcasting-and-spellbook",
				"title": "Spellcasting and Spellbook",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Begin with six 1st-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", prepare "
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
								"path": "internals.rules.abilityScores.intelligence",
								"label": "Intelligence"
							},
							{
								"type": "text",
								"text": ", add two wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " per level, copy discovered "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", and cast unprepared rituals directly from the spellbook."
							}
						]
					}
				]
			},
			{
				"id": "arcane-recovery",
				"title": "Arcane Recovery",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Once per day after a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.shortRest",
								"label": "short rest"
							},
							{
								"type": "text",
								"text": ", recover "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slots with combined levels up to half wizard level, with no slot above 5th."
							}
						]
					}
				]
			},
			{
				"id": "arcane-tradition",
				"title": "Arcane Tradition",
				"subtitle": "Levels 2, 6, 10, 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a school or specialist practice that shapes "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " efficiency and unique magical features."
							}
						]
					}
				]
			},
			{
				"id": "cantrip-formulas",
				"title": "Cantrip Formulas (Optional)",
				"subtitle": "Level 3",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Replace one wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": " after a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": " by consulting formulas in the spellbook."
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
				"id": "spell-mastery",
				"title": "Spell Mastery",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose one 1st-level and one 2nd-level wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " to cast at their lowest level without slots while prepared."
							}
						]
					}
				]
			},
			{
				"id": "signature-spells",
				"title": "Signature Spells",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose two 3rd-level wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " that are always prepared and each cast once per short or "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": " without a slot."
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
									"page": "internals.classes.wizard.subclasses.abjuration",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.bladesinging",
									"source": "Sword Coast Adventurer\u2019s Guide; Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.wizard.subclasses.chronurgy",
									"source": "Explorer\u2019s Guide to Wildemount"
								},
								{
									"page": "internals.classes.wizard.subclasses.conjuration",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.divination",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.enchantment",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.evocation",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.graviturgy",
									"source": "Explorer\u2019s Guide to Wildemount"
								},
								{
									"page": "internals.classes.wizard.subclasses.illusion",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.necromancy",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.orderOfScribes",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.wizard.subclasses.transmutation",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.wizard.subclasses.warMagic",
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
			"title": "Wizard Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "spellcasting-and-spellbook",
					"title": "Spellcasting and Spellbook"
				},
				{
					"id": "arcane-recovery",
					"title": "Arcane Recovery"
				},
				{
					"id": "arcane-tradition",
					"title": "Arcane Tradition"
				},
				{
					"id": "cantrip-formulas",
					"title": "Cantrip Formulas (Optional)"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "spell-mastery",
					"title": "Spell Mastery"
				},
				{
					"id": "signature-spells",
					"title": "Signature Spells"
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
