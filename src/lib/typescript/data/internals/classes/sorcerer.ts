/*
	Location: src/lib/typescript/data/internals/classes/sorcerer.ts
	Use: Central Sorcerer class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/sorcerer",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Sorcerer",
	"title": "D&D Portal - Sorcerer",
	"subTitle": "Character class",
	"description": "A Charisma-based known-spell full caster whose Sorcery Points and Metamagic reshape spells in ways other casters cannot.",
	"descriptions": {
		"short": "A Charisma-based known-spell full caster whose Sorcery Points and Metamagic reshape spells in ways other casters cannot.",
		"medium": "A Charisma-based known-spell full caster whose Sorcery Points and Metamagic reshape spells in ways other casters cannot.",
		"long": [
			[
				{
					"type": "text",
					"text": "A "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": "-based known-"
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": " full caster whose Sorcery Points and Metamagic reshape "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": " in ways other casters cannot."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Sorcerer is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": ", uses a d6 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Sorcerer core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
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
					"text": " full-caster progression."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"sorcerer",
		"class",
		"2014"
	]
});

const subclasses = {
	aberrantMind: createInternalPage({
	"href": "/classes/sorcerer/aberrant-mind",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Aberrant Mind Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Aberrant Mind Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Aberrant Mind Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Aberrant Mind Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Aberrant Mind",
	"title": "D&D Portal - Aberrant Mind",
	"subTitle": "Sorcerer subclass",
	"description": "Psionic spell list, telepathy, and componentless sorcery-point casting.",
	"descriptions": {
		"short": "Psionic spell list, telepathy, and componentless sorcery-point casting.",
		"medium": "Aberrant Mind: Psionic spell list, telepathy, and componentless sorcery-point casting.",
		"long": [
			[
				{
					"type": "text",
					"text": "Psionic "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": " list, telepathy, and componentless sorcery-point casting."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"aberrant-mind"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "psionic-spells-telepathic-speech",
				"title": "Psionic Spells; Telepathic Speech",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain an expandable list of psionic "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and create a temporary telepathic link with a nearby creature."
							}
						]
					}
				]
			},
			{
				"id": "psionic-sorcery-psychic-defenses",
				"title": "Psionic Sorcery; Psychic Defenses",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast psionic "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " with sorcery points and no components, and gain "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " resistance plus advantage against charm and fear."
							}
						]
					}
				]
			},
			{
				"id": "revelation-in-flesh",
				"title": "Revelation in Flesh",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend sorcery points to gain aquatic movement, flight, sensory, or body-morphing adaptations."
							}
						]
					}
				]
			},
			{
				"id": "warping-implosion",
				"title": "Warping Implosion",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport away and pull nearby creatures toward your former position while dealing "
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
			}
		],
		"tableOfContents": [
			{
				"id": "psionic-spells-telepathic-speech",
				"title": "Psionic Spells; Telepathic Speech"
			},
			{
				"id": "psionic-sorcery-psychic-defenses",
				"title": "Psionic Sorcery; Psychic Defenses"
			},
			{
				"id": "revelation-in-flesh",
				"title": "Revelation in Flesh"
			},
			{
				"id": "warping-implosion",
				"title": "Warping Implosion"
			}
		]
	}
}),
	clockworkSoul: createInternalPage({
	"href": "/classes/sorcerer/clockwork-soul",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Clockwork Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Clockwork Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Clockwork Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Clockwork Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Clockwork Soul",
	"title": "D&D Portal - Clockwork Soul",
	"subTitle": "Sorcerer subclass",
	"description": "Restore balance, cancel advantage/disadvantage, and create protective wards.",
	"descriptions": {
		"short": "Restore balance, cancel advantage/disadvantage, and create protective wards.",
		"medium": "Clockwork Soul: Restore balance, cancel advantage/disadvantage, and create protective wards.",
		"long": [
			[
				{
					"type": "text",
					"text": "Restore balance, cancel advantage/disadvantage, and create protective wards."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"clockwork-soul"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "clockwork-magic-restore-balance",
				"title": "Clockwork Magic; Restore Balance",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain an expandable order-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " list and cancel advantage or disadvantage on nearby rolls."
							}
						]
					}
				]
			},
			{
				"id": "bastion-of-law",
				"title": "Bastion of Law",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend sorcery points to create a protective ward of d8s that reduce damage."
							}
						]
					}
				]
			},
			{
				"id": "trance-of-order",
				"title": "Trance of Order",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Enter a state that prevents enemies from gaining advantage against you and treats low attacks, checks, and saves as 10."
							}
						]
					}
				]
			},
			{
				"id": "clockwork-cavalcade",
				"title": "Clockwork Cavalcade",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Summon spirits of order that heal allies, repair objects, and end selected "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " in a large area."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "clockwork-magic-restore-balance",
				"title": "Clockwork Magic; Restore Balance"
			},
			{
				"id": "bastion-of-law",
				"title": "Bastion of Law"
			},
			{
				"id": "trance-of-order",
				"title": "Trance of Order"
			},
			{
				"id": "clockwork-cavalcade",
				"title": "Clockwork Cavalcade"
			}
		]
	}
}),
	draconicBloodline: createInternalPage({
	"href": "/classes/sorcerer/draconic-bloodline",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Draconic Bloodline Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Draconic Bloodline Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Draconic Bloodline Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Draconic Bloodline Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Draconic Bloodline",
	"title": "D&D Portal - Draconic Bloodline",
	"subTitle": "Sorcerer subclass",
	"description": "Natural armor, elemental affinity, wings, and draconic presence.",
	"descriptions": {
		"short": "Natural armor, elemental affinity, wings, and draconic presence.",
		"medium": "Draconic Bloodline: Natural armor, elemental affinity, wings, and draconic presence.",
		"long": [
			[
				{
					"type": "text",
					"text": "Natural armor, elemental affinity, wings, and draconic presence."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"draconic-bloodline"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "dragon-ancestor-draconic-resilience",
				"title": "Dragon Ancestor; Draconic Resilience",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a draconic ancestry and language, double proficiency for related social checks, gain extra "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", and gain natural armor when unarmored."
							}
						]
					}
				]
			},
			{
				"id": "elemental-affinity",
				"title": "Elemental Affinity",
				"subtitle": "6th level",
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
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " to one matching elemental "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": "-"
							},
							{
								"type": "link",
								"path": "internals.rules.combat.damageRoll",
								"label": "damage roll"
							},
							{
								"type": "text",
								"text": " and spend sorcery points for temporary resistance."
							}
						]
					}
				]
			},
			{
				"id": "dragon-wings",
				"title": "Dragon Wings",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Manifest draconic wings for a "
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
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "draconic-presence",
				"title": "Draconic Presence",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend sorcery points to create an aura of awe or fear."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "dragon-ancestor-draconic-resilience",
				"title": "Dragon Ancestor; Draconic Resilience"
			},
			{
				"id": "elemental-affinity",
				"title": "Elemental Affinity"
			},
			{
				"id": "dragon-wings",
				"title": "Dragon Wings"
			},
			{
				"id": "draconic-presence",
				"title": "Draconic Presence"
			}
		]
	}
}),
	divineSoul: createInternalPage({
	"href": "/classes/sorcerer/divine-soul",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Divine Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Divine Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Divine Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Divine Soul Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Divine Soul",
	"title": "D&D Portal - Divine Soul",
	"subTitle": "Sorcerer subclass",
	"description": "Access cleric spells and divine protection.",
	"descriptions": {
		"short": "Access cleric spells and divine protection.",
		"medium": "Divine Soul: Access cleric spells and divine protection.",
		"long": [
			[
				{
					"type": "text",
					"text": "Access cleric "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": " and divine protection."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"divine-soul"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "divine-magic-favored-by-the-gods",
				"title": "Divine Magic; Favored by the Gods",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose from both cleric and sorcerer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " lists, gain an alignment-linked "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": ", and add 2d4 to a failed save or missed attack once per rest."
							}
						]
					}
				]
			},
			{
				"id": "empowered-healing",
				"title": "Empowered Healing",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend a sorcery point to reroll healing dice for a nearby "
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
				"id": "otherworldly-wings",
				"title": "Otherworldly Wings",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Manifest spectral wings for a "
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
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "unearthly-recovery",
				"title": "Unearthly Recovery",
				"subtitle": "18th level",
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
								"text": " to restore half your maximum "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
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
								"text": "."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "divine-magic-favored-by-the-gods",
				"title": "Divine Magic; Favored by the Gods"
			},
			{
				"id": "empowered-healing",
				"title": "Empowered Healing"
			},
			{
				"id": "otherworldly-wings",
				"title": "Otherworldly Wings"
			},
			{
				"id": "unearthly-recovery",
				"title": "Unearthly Recovery"
			}
		]
	}
}),
	lunarSorcery: createInternalPage({
	"href": "/classes/sorcerer/lunar-sorcery",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Lunar Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Lunar Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Lunar Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Lunar Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Lunar Sorcery",
	"title": "D&D Portal - Lunar Sorcery",
	"subTitle": "Sorcerer subclass",
	"description": "Shift between lunar phases with expanded spells and discounted Metamagic.",
	"descriptions": {
		"short": "Shift between lunar phases with expanded spells and discounted Metamagic.",
		"medium": "Lunar Sorcery: Shift between lunar phases with expanded spells and discounted Metamagic.",
		"long": [
			[
				{
					"type": "text",
					"text": "Shift between lunar phases with expanded "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": " and discounted Metamagic."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"lunar-sorcery"
	],
	"content": {
		"source": "Dragonlance: Shadow of the Dragon Queen",
		"featureSections": [
			{
				"id": "lunar-embodiment-moon-fire",
				"title": "Lunar Embodiment; Moon Fire",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain lunar-phase "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " lists, choose a phase after rests, and cast an enhanced Sacred Flame that can target adjacent creatures."
							}
						]
					}
				]
			},
			{
				"id": "lunar-boons-waxing-and-waning",
				"title": "Lunar Boons; Waxing and Waning",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Reduce sorcery-point costs for Metamagic on phase-linked schools and switch lunar phase as a "
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
				"id": "lunar-empowerment",
				"title": "Lunar Empowerment",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Each lunar phase grants a different defensive, "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "stealth"
							},
							{
								"type": "text",
								"text": ", or saving-throw benefit."
							}
						]
					}
				]
			},
			{
				"id": "lunar-phenomenon",
				"title": "Lunar Phenomenon",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Each lunar phase gains a powerful activated effect involving light, teleportation, restoration, invisibility, or damage."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "lunar-embodiment-moon-fire",
				"title": "Lunar Embodiment; Moon Fire"
			},
			{
				"id": "lunar-boons-waxing-and-waning",
				"title": "Lunar Boons; Waxing and Waning"
			},
			{
				"id": "lunar-empowerment",
				"title": "Lunar Empowerment"
			},
			{
				"id": "lunar-phenomenon",
				"title": "Lunar Phenomenon"
			}
		]
	}
}),
	shadowMagic: createInternalPage({
	"href": "/classes/sorcerer/shadow-magic",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Shadow Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Shadow Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Shadow Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Shadow Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Shadow Magic",
	"title": "D&D Portal - Shadow Magic",
	"subTitle": "Sorcerer subclass",
	"description": "Darkvision, survival at 0 hit points, shadow hound, and teleportation.",
	"descriptions": {
		"short": "Darkvision, survival at 0 hit points, shadow hound, and teleportation.",
		"medium": "Shadow Magic: Darkvision, survival at 0 hit points, shadow hound, and teleportation.",
		"long": [
			[
				{
					"type": "text",
					"text": "Darkvision, "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.survival",
					"label": "survival"
				},
				{
					"type": "text",
					"text": " at 0 "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.hitPoints",
					"label": "hit points"
				},
				{
					"type": "text",
					"text": ", shadow hound, and teleportation."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"shadow-magic"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "eyes-of-the-dark-strength-of-the-grave",
				"title": "Eyes of the Dark; Strength of the Grave",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain long-range darkvision and a "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
							},
							{
								"type": "text",
								"text": " to remain at 1 hit point when damage would reduce you to 0."
							}
						]
					}
				]
			},
			{
				"id": "hound-of-ill-omen",
				"title": "Hound of Ill Omen",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend sorcery points to summon a shadow hound that tracks one target and hinders its saves against your "
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
				"id": "shadow-walk",
				"title": "Shadow Walk",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport between areas of dim light or darkness as a "
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
				"id": "umbral-form",
				"title": "Umbral Form",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend sorcery points to become shadowy, move through creatures and objects, and resist most damage."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "eyes-of-the-dark-strength-of-the-grave",
				"title": "Eyes of the Dark; Strength of the Grave"
			},
			{
				"id": "hound-of-ill-omen",
				"title": "Hound of Ill Omen"
			},
			{
				"id": "shadow-walk",
				"title": "Shadow Walk"
			},
			{
				"id": "umbral-form",
				"title": "Umbral Form"
			}
		]
	}
}),
	stormSorcery: createInternalPage({
	"href": "/classes/sorcerer/storm-sorcery",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Storm Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Storm Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Storm Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Storm Sorcery Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Storm Sorcery",
	"title": "D&D Portal - Storm Sorcery",
	"subTitle": "Sorcerer subclass",
	"description": "Wind mobility, lightning retaliation, resistance, and storm flight.",
	"descriptions": {
		"short": "Wind mobility, lightning retaliation, resistance, and storm flight.",
		"medium": "Storm Sorcery: Wind mobility, lightning retaliation, resistance, and storm flight.",
		"long": [
			[
				{
					"type": "text",
					"text": "Wind mobility, "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.lightning",
					"label": "lightning"
				},
				{
					"type": "text",
					"text": " retaliation, resistance, and storm flight."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"storm-sorcery"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "wind-speaker-tempestuous-magic",
				"title": "Wind Speaker; Tempestuous Magic",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Speak Primordial and move briefly without provoking after casting a "
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
				"id": "heart-of-the-storm-storm-guide",
				"title": "Heart of the Storm; Storm Guide",
				"subtitle": "6th level",
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
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
							},
							{
								"type": "text",
								"text": " resistance, damage nearby creatures when casting such "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", and control local wind and rain."
							}
						]
					}
				]
			},
			{
				"id": "storm-s-fury",
				"title": "Storm\u2019s Fury",
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
								"text": " when hit in melee to deal "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " damage and push the attacker away."
							}
						]
					}
				]
			},
			{
				"id": "wind-soul",
				"title": "Wind Soul",
				"subtitle": "18th level",
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
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
							},
							{
								"type": "text",
								"text": ", gain permanent flight, and grant temporary flight to allies."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "wind-speaker-tempestuous-magic",
				"title": "Wind Speaker; Tempestuous Magic"
			},
			{
				"id": "heart-of-the-storm-storm-guide",
				"title": "Heart of the Storm; Storm Guide"
			},
			{
				"id": "storm-s-fury",
				"title": "Storm\u2019s Fury"
			},
			{
				"id": "wind-soul",
				"title": "Wind Soul"
			}
		]
	}
}),
	wildMagic: createInternalPage({
	"href": "/classes/sorcerer/wild-magic",
	"img": {
		"href": "/icons/white/classes/sorcerer.svg",
		"alt": "A stylized Sorcerer class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Wild Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Wild Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Wild Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-female-s.webp",
					"m": "/images/classes/sorcerer/card-female-m.webp",
					"l": "/images/classes/sorcerer/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Wild Magic Sorcerer class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/sorcerer/card-male-s.webp",
					"m": "/images/classes/sorcerer/card-male-m.webp",
					"l": "/images/classes/sorcerer/card-male-l.webp"
				}
			}
		}
	},
	"label": "Wild Magic",
	"title": "D&D Portal - Wild Magic",
	"subTitle": "Sorcerer subclass",
	"description": "Random surges, Bend Luck, and controlled chaos.",
	"descriptions": {
		"short": "Random surges, Bend Luck, and controlled chaos.",
		"medium": "Wild Magic: Random surges, Bend Luck, and controlled chaos.",
		"long": [
			[
				{
					"type": "text",
					"text": "Random surges, Bend Luck, and controlled chaos."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.sorcerer.page"
	},
	"tags": [
		"sorcerer",
		"subclass",
		"wild-magic"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "wild-magic-surge-tides-of-chaos",
				"title": "Wild Magic Surge; Tides of Chaos",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spellcasting can trigger random magical surges, and you can gain advantage on one roll before requiring a surge or rest to recharge."
							}
						]
					}
				]
			},
			{
				"id": "bend-luck",
				"title": "Bend Luck",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend sorcery points as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to add or subtract a d4 from another creature\u2019s roll."
							}
						]
					}
				]
			},
			{
				"id": "controlled-chaos",
				"title": "Controlled Chaos",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Roll twice for Wild Magic Surge and choose either result."
							}
						]
					}
				]
			},
			{
				"id": "spell-bombardment",
				"title": "Spell Bombardment",
				"subtitle": "18th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When rolling maximum on a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": "-damage die, roll one additional die once per turn."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "wild-magic-surge-tides-of-chaos",
				"title": "Wild Magic Surge; Tides of Chaos"
			},
			{
				"id": "bend-luck",
				"title": "Bend Luck"
			},
			{
				"id": "controlled-chaos",
				"title": "Controlled Chaos"
			},
			{
				"id": "spell-bombardment",
				"title": "Spell Bombardment"
			}
		]
	}
}),
} as const;

export const sorcerer = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/sorcerer",
	"startingEquipment": [
		{
			"label": "Option 1",
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
			"label": "Two daggers",
			"items": [
				[
					{
						"type": "text",
						"text": "Two daggers"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Sorcerer progression",
		"heading": "Sorcerer Progression",
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
				"key": "sorceryPoints",
				"label": "Sorcery Points"
			},
			{
				"key": "cantrips",
				"label": "Cantrips"
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
						"label": "Spellcasting",
						"sectionId": "spellcasting"
					},
					{
						"label": "Sorcerous Origin",
						"sectionId": "sorcerous-origin"
					}
				],
				"values": {
					"sorceryPoints": "\u2014",
					"cantrips": 4,
					"spellsKnown": 2
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Font of Magic",
						"sectionId": "font-of-magic"
					}
				],
				"values": {
					"sorceryPoints": 2,
					"cantrips": 4,
					"spellsKnown": 3
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Metamagic",
						"sectionId": "metamagic"
					}
				],
				"values": {
					"sorceryPoints": 3,
					"cantrips": 4,
					"spellsKnown": 4
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
						"label": "Sorcerous Versatility",
						"sectionId": "sorcerous-versatility",
						"optional": true
					}
				],
				"values": {
					"sorceryPoints": 4,
					"cantrips": 5,
					"spellsKnown": 5
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Magical Guidance",
						"sectionId": "magical-guidance",
						"optional": true
					}
				],
				"values": {
					"sorceryPoints": 5,
					"cantrips": 5,
					"spellsKnown": 6
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Origin feature",
						"sectionId": "origin-feature"
					}
				],
				"values": {
					"sorceryPoints": 6,
					"cantrips": 5,
					"spellsKnown": 7
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
					"sorceryPoints": 7,
					"cantrips": 5,
					"spellsKnown": 8
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
						"label": "Sorcerous Versatility",
						"sectionId": "sorcerous-versatility",
						"optional": true
					}
				],
				"values": {
					"sorceryPoints": 8,
					"cantrips": 5,
					"spellsKnown": 9
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
					"sorceryPoints": 9,
					"cantrips": 5,
					"spellsKnown": 10
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Metamagic",
						"sectionId": "metamagic"
					}
				],
				"values": {
					"sorceryPoints": 10,
					"cantrips": 6,
					"spellsKnown": 11
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
					"sorceryPoints": 11,
					"cantrips": 6,
					"spellsKnown": 12
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
						"label": "Sorcerous Versatility",
						"sectionId": "sorcerous-versatility",
						"optional": true
					}
				],
				"values": {
					"sorceryPoints": 12,
					"cantrips": 6,
					"spellsKnown": 12
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
					"sorceryPoints": 13,
					"cantrips": 6,
					"spellsKnown": 13
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Origin feature",
						"sectionId": "origin-feature"
					}
				],
				"values": {
					"sorceryPoints": 14,
					"cantrips": 6,
					"spellsKnown": 13
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
					"sorceryPoints": 15,
					"cantrips": 6,
					"spellsKnown": 14
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
						"label": "Sorcerous Versatility",
						"sectionId": "sorcerous-versatility",
						"optional": true
					}
				],
				"values": {
					"sorceryPoints": 16,
					"cantrips": 6,
					"spellsKnown": 14
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Metamagic",
						"sectionId": "metamagic"
					}
				],
				"values": {
					"sorceryPoints": 17,
					"cantrips": 6,
					"spellsKnown": 15
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Origin feature",
						"sectionId": "origin-feature"
					}
				],
				"values": {
					"sorceryPoints": 18,
					"cantrips": 6,
					"spellsKnown": 15
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
						"label": "Sorcerous Versatility",
						"sectionId": "sorcerous-versatility",
						"optional": true
					}
				],
				"values": {
					"sorceryPoints": 19,
					"cantrips": 6,
					"spellsKnown": 15
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Sorcerous Restoration",
						"sectionId": "sorcerous-restoration"
					}
				],
				"values": {
					"sorceryPoints": 20,
					"cantrips": 6,
					"spellsKnown": 15
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
									"path": "internals.rules.abilityScores.charisma",
									"label": "Charisma"
								}
							]
						},
						{
							"label": "Multiclass prerequisite",
							"value": [
								{
									"type": "link",
									"path": "internals.rules.abilityScores.charisma",
									"label": "Charisma"
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
									"path": "internals.rules.abilityScores.charisma",
									"label": "Charisma"
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
									"text": " full-caster progression."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "spellcasting, arcane, innate-magic, metamagic, burst-damage"
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
									"path": "internals.rules.abilityScores.constitution",
									"label": "Constitution"
								},
								{
									"type": "text",
									"text": ", "
								},
								{
									"type": "link",
									"path": "internals.rules.abilityScores.charisma",
									"label": "Charisma"
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
									"path": "internals.rules.skills.persuasion",
									"label": "Persuasion"
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
							"text": "As a sorcerer, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
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
								"text": "Know sorcerer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and cast them with "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " using the full-caster slot table."
							}
						]
					}
				]
			},
			{
				"id": "sorcerous-origin",
				"title": "Sorcerous Origin",
				"subtitle": "Levels 1, 6, 14, 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose the source of innate magic and gain origin features."
							}
						]
					}
				]
			},
			{
				"id": "font-of-magic",
				"title": "Font of Magic",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain Sorcery Points, convert them to "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slots, or convert "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slots into points."
							}
						]
					}
				]
			},
			{
				"id": "metamagic",
				"title": "Metamagic",
				"subtitle": "Levels 3, 10, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn options that alter range, targets, components, timing, damage, or "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throws"
							},
							{
								"type": "text",
								"text": " of "
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
				"id": "sorcerous-versatility",
				"title": "Sorcerous Versatility (Optional)",
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
								"text": "Replace one Metamagic option or one sorcerer "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": " at "
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
				"id": "magical-guidance",
				"title": "Magical Guidance (Optional)",
				"subtitle": "Level 5",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend 1 Sorcery Point to reroll a failed "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability check"
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
				"id": "sorcerous-restoration",
				"title": "Sorcerous Restoration",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain 4 Sorcery Points after a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.shortRest",
								"label": "short rest"
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
									"page": "internals.classes.sorcerer.subclasses.aberrantMind",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.clockworkSoul",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.draconicBloodline",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.divineSoul",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.lunarSorcery",
									"source": "Dragonlance: Shadow of the Dragon Queen"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.shadowMagic",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.stormSorcery",
									"source": "Sword Coast Adventurer\u2019s Guide; Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.sorcerer.subclasses.wildMagic",
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
			"title": "Sorcerer Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "spellcasting",
					"title": "Spellcasting"
				},
				{
					"id": "sorcerous-origin",
					"title": "Sorcerous Origin"
				},
				{
					"id": "font-of-magic",
					"title": "Font of Magic"
				},
				{
					"id": "metamagic",
					"title": "Metamagic"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "sorcerous-versatility",
					"title": "Sorcerous Versatility (Optional)"
				},
				{
					"id": "magical-guidance",
					"title": "Magical Guidance (Optional)"
				},
				{
					"id": "sorcerous-restoration",
					"title": "Sorcerous Restoration"
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
