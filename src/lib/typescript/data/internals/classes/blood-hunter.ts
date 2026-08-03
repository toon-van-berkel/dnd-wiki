/*
	Location: src/lib/typescript/data/internals/classes/blood-hunter.ts
	Use: Central Blood Hunter class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/blood-hunter",
	"img": {
		"href": "/icons/white/game/character.svg",
		"alt": "A stylized Blood Hunter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Blood Hunter",
	"title": "D&D Portal - Blood Hunter",
	"subTitle": "Character class",
	"description": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features.",
	"descriptions": {
		"short": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features.",
		"medium": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features.",
		"long": [
			[
				{
					"type": "text",
					"text": "A third-party/homebrew martial class by Matthew Mercer that sacrifices vitality to power blood curses, elemental weapon rites, and monster-hunting features."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Blood Hunter is built around "
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
					"text": "; "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.intelligence",
					"label": "Intelligence"
				},
				{
					"type": "text",
					"text": " by default for Hemocraft, with an optional "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": " variant., uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Blood Hunter core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Use the linked rules terms for quick hover context without leaving the class page."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"blood-hunter",
		"class",
		"2014"
	]
});

const subclasses = {
	ghostslayer: createInternalPage({
	"href": "/classes/blood-hunter/ghostslayer",
	"img": {
		"href": "/icons/white/game/character.svg",
		"alt": "A stylized Blood Hunter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Ghostslayer Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ghostslayer Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Ghostslayer Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ghostslayer Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Ghostslayer",
	"title": "D&D Portal - Ghostslayer",
	"subTitle": "Blood Hunter subclass",
	"description": "Specialize against undead with radiant rites and improved curses.",
	"descriptions": {
		"short": "Specialize against undead with radiant rites and improved curses.",
		"medium": "Ghostslayer: Specialize against undead with radiant rites and improved curses.",
		"long": [
			[
				{
					"type": "text",
					"text": "Specialize against undead with "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.radiant",
					"label": "radiant"
				},
				{
					"type": "text",
					"text": " rites and improved curses."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bloodHunter.page"
	},
	"tags": [
		"blood-hunter",
		"subclass",
		"ghostslayer"
	],
	"content": {
		"source": "D&D Beyond",
		"featureSections": [
			{
				"id": "rite-of-the-dawn-curse-specialist",
				"title": "Rite of the Dawn; Curse Specialist",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn a "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " crimson rite that is especially effective against undead, and gain an additional Blood Maledict use with broader curse applicability."
							}
						]
					}
				]
			},
			{
				"id": "aether-walk",
				"title": "Aether Walk",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Temporarily step into the Border Ethereal to move through creatures and objects."
							}
						]
					}
				]
			},
			{
				"id": "brand-of-sundering",
				"title": "Brand of Sundering",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "The branded target takes extra rite damage and cannot use incorporeal movement through creatures or objects."
							}
						]
					}
				]
			},
			{
				"id": "blood-curse-of-the-exorcist",
				"title": "Blood Curse of the Exorcist",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a unique blood curse that ends charm, fear, or possession and punishes the responsible creature."
							}
						]
					}
				]
			},
			{
				"id": "rite-revival",
				"title": "Rite Revival",
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
								"text": ", end active crimson rites to remain at 1 hit point."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "rite-of-the-dawn-curse-specialist",
				"title": "Rite of the Dawn; Curse Specialist"
			},
			{
				"id": "aether-walk",
				"title": "Aether Walk"
			},
			{
				"id": "brand-of-sundering",
				"title": "Brand of Sundering"
			},
			{
				"id": "blood-curse-of-the-exorcist",
				"title": "Blood Curse of the Exorcist"
			},
			{
				"id": "rite-revival",
				"title": "Rite Revival"
			}
		]
	}
}),
	lycan: createInternalPage({
	"href": "/classes/blood-hunter/lycan",
	"img": {
		"href": "/icons/white/game/character.svg",
		"alt": "A stylized Blood Hunter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Lycan Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Lycan Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Lycan Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Lycan Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Lycan",
	"title": "D&D Portal - Lycan",
	"subTitle": "Blood Hunter subclass",
	"description": "Controlled hybrid transformation with claws, resilience, and risk of bloodlust.",
	"descriptions": {
		"short": "Controlled hybrid transformation with claws, resilience, and risk of bloodlust.",
		"medium": "Lycan: Controlled hybrid transformation with claws, resilience, and risk of bloodlust.",
		"long": [
			[
				{
					"type": "text",
					"text": "Controlled hybrid transformation with claws, resilience, and risk of bloodlust."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bloodHunter.page"
	},
	"tags": [
		"blood-hunter",
		"subclass",
		"lycan"
	],
	"content": {
		"source": "D&D Beyond",
		"featureSections": [
			{
				"id": "heightened-senses-hybrid-transformation",
				"title": "Heightened Senses; Hybrid Transformation",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain enhanced hearing and smell and transform into a controlled hybrid form with feral "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.strength",
								"label": "strength"
							},
							{
								"type": "text",
								"text": ", resilient defenses, claws, and a bloodlust risk."
							}
						]
					}
				]
			},
			{
				"id": "stalker-s-prowess",
				"title": "Stalker\u2019s Prowess",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Improve "
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
								"path": "internals.rules.movement.jumping",
								"label": "jumping"
							},
							{
								"type": "text",
								"text": ", and hybrid-form unarmed strikes."
							}
						]
					}
				]
			},
			{
				"id": "advanced-transformation",
				"title": "Advanced Transformation",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use Hybrid Transformation more often and gain regeneration and improved feral damage while transformed."
							}
						]
					}
				]
			},
			{
				"id": "brand-of-the-voracious",
				"title": "Brand of the Voracious",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Improve control over bloodlust and gain advantage against the creature marked by Brand of Castigation."
							}
						]
					}
				]
			},
			{
				"id": "hybrid-transformation-mastery",
				"title": "Hybrid Transformation Mastery",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Transform without use limits or a fixed duration and gain the Blood Curse of the Howl."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "heightened-senses-hybrid-transformation",
				"title": "Heightened Senses; Hybrid Transformation"
			},
			{
				"id": "stalker-s-prowess",
				"title": "Stalker\u2019s Prowess"
			},
			{
				"id": "advanced-transformation",
				"title": "Advanced Transformation"
			},
			{
				"id": "brand-of-the-voracious",
				"title": "Brand of the Voracious"
			},
			{
				"id": "hybrid-transformation-mastery",
				"title": "Hybrid Transformation Mastery"
			}
		]
	}
}),
	mutant: createInternalPage({
	"href": "/classes/blood-hunter/mutant",
	"img": {
		"href": "/icons/white/game/character.svg",
		"alt": "A stylized Blood Hunter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Mutant Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Mutant Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Mutant Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Mutant Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Mutant",
	"title": "D&D Portal - Mutant",
	"subTitle": "Blood Hunter subclass",
	"description": "Create mutagens that grant powerful benefits with side effects.",
	"descriptions": {
		"short": "Create mutagens that grant powerful benefits with side effects.",
		"medium": "Mutant: Create mutagens that grant powerful benefits with side effects.",
		"long": [
			[
				{
					"type": "text",
					"text": "Create mutagens that grant powerful benefits with side effects."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bloodHunter.page"
	},
	"tags": [
		"blood-hunter",
		"subclass",
		"mutant"
	],
	"content": {
		"source": "D&D Beyond",
		"featureSections": [
			{
				"id": "mutagencraft",
				"title": "Mutagencraft",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn mutagen formulas and create consumable mutagens that grant strong benefits paired with defined side effects."
							}
						]
					}
				]
			},
			{
				"id": "strange-metabolism",
				"title": "Strange Metabolism",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Become immune to "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.poison",
								"label": "poison"
							},
							{
								"type": "text",
								"text": " damage and the "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.poisoned",
								"label": "poisoned"
							},
							{
								"type": "text",
								"text": " condition and temporarily suppress one mutagen\u2019s side effect."
							}
						]
					}
				]
			},
			{
				"id": "brand-of-axiom",
				"title": "Brand of Axiom",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Brand of Castigation ends or suppresses illusions, invisibility, and shapechanging on the branded creature."
							}
						]
					}
				]
			},
			{
				"id": "blood-curse-of-corrosion",
				"title": "Blood Curse of Corrosion",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a unique blood curse that poisons a target and can be amplified for a longer duration."
							}
						]
					}
				]
			},
			{
				"id": "exalted-mutation",
				"title": "Exalted Mutation",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Replace one active mutagen with another known formula as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": ", with multiple uses per "
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
		"tableOfContents": [
			{
				"id": "mutagencraft",
				"title": "Mutagencraft"
			},
			{
				"id": "strange-metabolism",
				"title": "Strange Metabolism"
			},
			{
				"id": "brand-of-axiom",
				"title": "Brand of Axiom"
			},
			{
				"id": "blood-curse-of-corrosion",
				"title": "Blood Curse of Corrosion"
			},
			{
				"id": "exalted-mutation",
				"title": "Exalted Mutation"
			}
		]
	}
}),
	profaneSoul: createInternalPage({
	"href": "/classes/blood-hunter/profane-soul",
	"img": {
		"href": "/icons/white/game/character.svg",
		"alt": "A stylized Blood Hunter class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Profane Soul Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Profane Soul Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Profane Soul Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-female-s.webp",
					"m": "/images/classes/blood-hunter/card-female-m.webp",
					"l": "/images/classes/blood-hunter/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Profane Soul Blood Hunter class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/blood-hunter/card-male-s.webp",
					"m": "/images/classes/blood-hunter/card-male-m.webp",
					"l": "/images/classes/blood-hunter/card-male-l.webp"
				}
			}
		}
	},
	"label": "Profane Soul",
	"title": "D&D Portal - Profane Soul",
	"subTitle": "Blood Hunter subclass",
	"description": "Combine blood hunting with pact magic and patron-linked features.",
	"descriptions": {
		"short": "Combine blood hunting with pact magic and patron-linked features.",
		"medium": "Profane Soul: Combine blood hunting with pact magic and patron-linked features.",
		"long": [
			[
				{
					"type": "text",
					"text": "Combine blood hunting with pact magic and patron-linked features."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bloodHunter.page"
	},
	"tags": [
		"blood-hunter",
		"subclass",
		"profane-soul"
	],
	"content": {
		"source": "D&D Beyond",
		"featureSections": [
			{
				"id": "otherworldly-patron-pact-magic-rite-focus",
				"title": "Otherworldly Patron; Pact Magic; Rite Focus",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a warlock patron, gain limited pact spellcasting, and receive a patron-specific benefit while a crimson rite is active."
							}
						]
					}
				]
			},
			{
				"id": "revealed-arcana",
				"title": "Revealed Arcana",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a once-per-long-rest patron-specific "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " cast through pact magic."
							}
						]
					}
				]
			},
			{
				"id": "brand-of-the-sapping-scar",
				"title": "Brand of the Sapping Scar",
				"subtitle": "11th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "The creature marked by Brand of Castigation has disadvantage on saves against your warlock "
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
				"id": "unsealed-arcana",
				"title": "Unsealed Arcana",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a second, stronger patron-specific "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " usable once per "
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
			},
			{
				"id": "blood-curse-of-the-souleater",
				"title": "Blood Curse of the Souleater",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a unique blood curse that harvests power when a creature dies, with an amplified ally-healing option."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "otherworldly-patron-pact-magic-rite-focus",
				"title": "Otherworldly Patron; Pact Magic; Rite Focus"
			},
			{
				"id": "revealed-arcana",
				"title": "Revealed Arcana"
			},
			{
				"id": "brand-of-the-sapping-scar",
				"title": "Brand of the Sapping Scar"
			},
			{
				"id": "unsealed-arcana",
				"title": "Unsealed Arcana"
			},
			{
				"id": "blood-curse-of-the-souleater",
				"title": "Blood Curse of the Souleater"
			}
		]
	}
}),
} as const;

export const bloodHunter = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/blood-hunter",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Martial weapon"
					}
				],
				[
					{
						"type": "text",
						"text": "two "
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
			"label": "Option 2",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Light crossbow"
					}
				],
				[
					{
						"type": "text",
						"text": "hand crossbow with bolts"
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
						"text": "Studded leather"
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
			"label": "Explorer\u2019s pack and alchemist\u2019s supplies",
			"items": [
				[
					{
						"type": "text",
						"text": "Explorer\u2019s pack and alchemist\u2019s supplies"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Blood Hunter progression",
		"heading": "Blood Hunter Progression",
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
				"key": "hemocraftDie",
				"label": "Hemocraft Die"
			},
			{
				"key": "cursesKnown",
				"label": "Curses Known"
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Hunter\u2019s Bane",
						"sectionId": "hunter-s-bane"
					},
					{
						"label": "Blood Maledict",
						"sectionId": "blood-maledict"
					}
				],
				"values": {
					"hemocraftDie": "1d4",
					"cursesKnown": 1
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
						"label": "Crimson Rite",
						"sectionId": "crimson-rite"
					}
				],
				"values": {
					"hemocraftDie": "1d4",
					"cursesKnown": 1
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Blood Hunter Order",
						"sectionId": "blood-hunter-order"
					}
				],
				"values": {
					"hemocraftDie": "1d4",
					"cursesKnown": 1
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
					"hemocraftDie": "1d4",
					"cursesKnown": 1
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
					"hemocraftDie": "1d6",
					"cursesKnown": 1
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Brand of Castigation",
						"sectionId": "brand-of-castigation"
					},
					{
						"label": "Blood Maledict (2/rest)",
						"sectionId": "blood-maledict-2-rest"
					}
				],
				"values": {
					"hemocraftDie": "1d6",
					"cursesKnown": 2
				}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Order feature",
						"sectionId": "order-feature"
					},
					{
						"label": "Crimson Rite improvement",
						"sectionId": "crimson-rite-improvement"
					}
				],
				"values": {
					"hemocraftDie": "1d6",
					"cursesKnown": 2
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
					"hemocraftDie": "1d6",
					"cursesKnown": 2
				}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Grim Psychometry",
						"sectionId": "grim-psychometry"
					}
				],
				"values": {
					"hemocraftDie": "1d6",
					"cursesKnown": 2
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Dark Augmentation",
						"sectionId": "dark-augmentation"
					}
				],
				"values": {
					"hemocraftDie": "1d6",
					"cursesKnown": 3
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Order feature",
						"sectionId": "order-feature"
					}
				],
				"values": {
					"hemocraftDie": "1d8",
					"cursesKnown": 3
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
					"hemocraftDie": "1d8",
					"cursesKnown": 3
				}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Brand of Tethering",
						"sectionId": "brand-of-tethering"
					},
					{
						"label": "Blood Maledict (3/rest)",
						"sectionId": "blood-maledict-3-rest"
					}
				],
				"values": {
					"hemocraftDie": "1d8",
					"cursesKnown": 3
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Hardened Soul",
						"sectionId": "hardened-soul"
					},
					{
						"label": "Crimson Rite improvement",
						"sectionId": "crimson-rite-improvement"
					}
				],
				"values": {
					"hemocraftDie": "1d8",
					"cursesKnown": 4
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Order feature",
						"sectionId": "order-feature"
					}
				],
				"values": {
					"hemocraftDie": "1d8",
					"cursesKnown": 4
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
					"hemocraftDie": "1d8",
					"cursesKnown": 4
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Blood Maledict (4/rest)",
						"sectionId": "blood-maledict-4-rest"
					}
				],
				"values": {
					"hemocraftDie": "1d10",
					"cursesKnown": 4
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Order feature",
						"sectionId": "order-feature"
					}
				],
				"values": {
					"hemocraftDie": "1d10",
					"cursesKnown": 5
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
					"hemocraftDie": "1d10",
					"cursesKnown": 5
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Sanguine Mastery",
						"sectionId": "sanguine-mastery"
					}
				],
				"values": {
					"hemocraftDie": "1d10",
					"cursesKnown": 5
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
									"text": "; "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.intelligence",
									"label": "Intelligence"
								},
								{
									"type": "text",
									"text": " by default for Hemocraft, with an optional "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.wisdom",
									"label": "Wisdom"
								},
								{
									"type": "text",
									"text": " variant."
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
									"text": " 13 and "
								},
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
									"text": "None by default; Order of the Profane Soul gains warlock-style pact progression."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "melee, monster-hunting, blood-magic, dark-magic, third-party"
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
									"text": "Alchemist\u2019s supplies"
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
									"text": "Choose three: "
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
									"path": "internals.rules.skills.arcana",
									"label": "Arcana"
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
									"path": "internals.rules.skills.investigation",
									"label": "Investigation"
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
							"text": "As a blood hunter, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "hunter-s-bane",
				"title": "Hunter\u2019s Bane",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage to track and recall information about fey, fiends, and undead, and establish the Hemocraft save "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.difficultyClass",
								"label": "DC"
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
				"id": "blood-maledict",
				"title": "Blood Maledict",
				"subtitle": "Levels 1, uses and curses increase",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Invoke known blood curses; amplify a curse by taking an unreduced Hemocraft die of "
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
								"text": "Choose Archery, Dueling, Great Weapon Fighting, or Two-Weapon Fighting."
							}
						]
					}
				]
			},
			{
				"id": "crimson-rite",
				"title": "Crimson Rite",
				"subtitle": "Levels 2, improves at 7, 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Take Hemocraft-die damage to imbue a held weapon with extra elemental or esoteric damage."
							}
						]
					}
				]
			},
			{
				"id": "blood-hunter-order",
				"title": "Blood Hunter Order",
				"subtitle": "Levels 3, 7, 11, 15, 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass order."
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
				"id": "brand-of-castigation",
				"title": "Brand of Castigation",
				"subtitle": "Level 6",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Brand a creature hit by a rite weapon to track it and punish damage it deals nearby."
							}
						]
					}
				]
			},
			{
				"id": "grim-psychometry",
				"title": "Grim Psychometry",
				"subtitle": "Level 9",
				"optional": false,
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
								"path": "internals.rules.skills.history",
								"label": "History"
							},
							{
								"type": "text",
								"text": " checks concerning sinister or tragic objects and locations."
							}
						]
					}
				]
			},
			{
				"id": "dark-augmentation",
				"title": "Dark Augmentation",
				"subtitle": "Level 10",
				"optional": false,
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
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " and add Hemocraft modifier to "
							},
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
							},
							{
								"type": "text",
								"text": ", and "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.constitution",
								"label": "Constitution"
							},
							{
								"type": "text",
								"text": " saves."
							}
						]
					}
				]
			},
			{
				"id": "brand-of-tethering",
				"title": "Brand of Tethering",
				"subtitle": "Level 13",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Strengthen the brand and hinder dashing, teleportation, and planar escape."
							}
						]
					}
				]
			},
			{
				"id": "hardened-soul",
				"title": "Hardened Soul",
				"subtitle": "Level 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage against charm and fear."
							}
						]
					}
				]
			},
			{
				"id": "sanguine-mastery",
				"title": "Sanguine Mastery",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Reroll one Hemocraft die per turn and regain Blood Maledict on critical rite-weapon hits."
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
									"page": "internals.classes.bloodHunter.subclasses.ghostslayer",
									"source": "D&D Beyond"
								},
								{
									"page": "internals.classes.bloodHunter.subclasses.lycan",
									"source": "D&D Beyond"
								},
								{
									"page": "internals.classes.bloodHunter.subclasses.mutant",
									"source": "D&D Beyond"
								},
								{
									"page": "internals.classes.bloodHunter.subclasses.profaneSoul",
									"source": "D&D Beyond"
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
			"title": "Blood Hunter Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "hunter-s-bane",
					"title": "Hunter\u2019s Bane"
				},
				{
					"id": "blood-maledict",
					"title": "Blood Maledict"
				},
				{
					"id": "fighting-style",
					"title": "Fighting Style"
				},
				{
					"id": "crimson-rite",
					"title": "Crimson Rite"
				},
				{
					"id": "blood-hunter-order",
					"title": "Blood Hunter Order"
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
					"id": "brand-of-castigation",
					"title": "Brand of Castigation"
				},
				{
					"id": "grim-psychometry",
					"title": "Grim Psychometry"
				},
				{
					"id": "dark-augmentation",
					"title": "Dark Augmentation"
				},
				{
					"id": "brand-of-tethering",
					"title": "Brand of Tethering"
				},
				{
					"id": "hardened-soul",
					"title": "Hardened Soul"
				},
				{
					"id": "sanguine-mastery",
					"title": "Sanguine Mastery"
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
