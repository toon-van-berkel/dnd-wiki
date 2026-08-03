/*
	Location: src/lib/typescript/data/internals/classes/warlock.ts
	Use: Central Warlock class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/warlock",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Warlock",
	"title": "D&D Portal - Warlock",
	"subTitle": "Character class",
	"description": "A Charisma-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations.",
	"descriptions": {
		"short": "A Charisma-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations.",
		"medium": "A Charisma-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations.",
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
					"text": "-based pact caster who recovers a small number of high-level slots on short rests and customizes persistent powers through Eldritch Invocations."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Warlock is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": ", uses a d8 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Warlock core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": "; Pact Magic uses a small number of equal-level slots recovered on a short or "
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
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"warlock",
		"class",
		"2014"
	]
});

const subclasses = {
	archfey: createInternalPage({
	"href": "/classes/warlock/archfey",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Archfey Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Archfey Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Archfey Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Archfey Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Archfey",
	"title": "D&D Portal - Archfey",
	"subTitle": "Warlock subclass",
	"description": "Charm, fear, illusion, and fey escape magic.",
	"descriptions": {
		"short": "Charm, fear, illusion, and fey escape magic.",
		"medium": "Archfey: Charm, fear, illusion, and fey escape magic.",
		"long": [
			[
				{
					"type": "text",
					"text": "Charm, fear, illusion, and fey escape magic."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"archfey"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "expanded-spell-list-fey-presence",
				"title": "Expanded Spell List; Fey Presence",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain additional fey-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options and briefly charm or frighten creatures in a nearby cube."
							}
						]
					}
				]
			},
			{
				"id": "misty-escape",
				"title": "Misty Escape",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When damaged, use a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to turn "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.invisible",
								"label": "invisible"
							},
							{
								"type": "text",
								"text": " and teleport."
							}
						]
					}
				]
			},
			{
				"id": "beguiling-defenses",
				"title": "Beguiling Defenses",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Become immune to charm and reflect attempted charm back at the source."
							}
						]
					}
				]
			},
			{
				"id": "dark-delirium",
				"title": "Dark Delirium",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Charm or frighten one creature inside an illusory realm for up to a minute."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-fey-presence",
				"title": "Expanded Spell List; Fey Presence"
			},
			{
				"id": "misty-escape",
				"title": "Misty Escape"
			},
			{
				"id": "beguiling-defenses",
				"title": "Beguiling Defenses"
			},
			{
				"id": "dark-delirium",
				"title": "Dark Delirium"
			}
		]
	}
}),
	celestial: createInternalPage({
	"href": "/classes/warlock/celestial",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Celestial Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Celestial Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Celestial Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Celestial Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Celestial",
	"title": "D&D Portal - Celestial",
	"subTitle": "Warlock subclass",
	"description": "Healing dice, radiant and fire magic, and resilient revival.",
	"descriptions": {
		"short": "Healing dice, radiant and fire magic, and resilient revival.",
		"medium": "Celestial: Healing dice, radiant and fire magic, and resilient revival.",
		"long": [
			[
				{
					"type": "text",
					"text": "Healing dice, "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.radiant",
					"label": "radiant"
				},
				{
					"type": "text",
					"text": " and "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.fire",
					"label": "fire"
				},
				{
					"type": "text",
					"text": " magic, and resilient revival."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"celestial"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "expanded-spell-list-bonus-cantrips-healing-light",
				"title": "Expanded Spell List; Bonus Cantrips; Healing Light",
				"subtitle": "1st level",
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
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " and restorative "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options, learn Light and Sacred Flame, and use a pool of d6s for bonus-action healing."
							}
						]
					}
				]
			},
			{
				"id": "radiant-soul",
				"title": "Radiant Soul",
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
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " resistance and add "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " to one "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.damageRoll",
								"label": "damage roll"
							},
							{
								"type": "text",
								"text": " of a "
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
				"id": "celestial-resilience",
				"title": "Celestial Resilience",
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
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " after rests and grant some to allies."
							}
						]
					}
				]
			},
			{
				"id": "searing-vengeance",
				"title": "Searing Vengeance",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When making a death save, instead rise with half "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", damage and blind nearby enemies, once per "
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
				"id": "expanded-spell-list-bonus-cantrips-healing-light",
				"title": "Expanded Spell List; Bonus Cantrips; Healing Light"
			},
			{
				"id": "radiant-soul",
				"title": "Radiant Soul"
			},
			{
				"id": "celestial-resilience",
				"title": "Celestial Resilience"
			},
			{
				"id": "searing-vengeance",
				"title": "Searing Vengeance"
			}
		]
	}
}),
	fathomless: createInternalPage({
	"href": "/classes/warlock/fathomless",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Fathomless Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fathomless Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Fathomless Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fathomless Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Fathomless",
	"title": "D&D Portal - Fathomless",
	"subTitle": "Warlock subclass",
	"description": "Tentacle attacks, ocean adaptation, and deep-sea control.",
	"descriptions": {
		"short": "Tentacle attacks, ocean adaptation, and deep-sea control.",
		"medium": "Fathomless: Tentacle attacks, ocean adaptation, and deep-sea control.",
		"long": [
			[
				{
					"type": "text",
					"text": "Tentacle attacks, ocean adaptation, and deep-sea control."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"fathomless"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "expanded-spell-list-tentacle-of-the-deeps-gift-of-the-sea",
				"title": "Expanded Spell List; Tentacle of the Deeps; Gift of the Sea",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain ocean-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options, summon a bonus-action tentacle attack that slows targets, and gain "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.swimming",
								"label": "swimming"
							},
							{
								"type": "text",
								"text": " and underwater breathing."
							}
						]
					}
				]
			},
			{
				"id": "oceanic-soul-guardian-coil",
				"title": "Oceanic Soul; Guardian Coil",
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
								"path": "internals.rules.damageTypes.cold",
								"label": "cold"
							},
							{
								"type": "text",
								"text": " resistance and underwater communication; use the tentacle as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to reduce damage."
							}
						]
					}
				]
			},
			{
				"id": "grasping-tentacles",
				"title": "Grasping Tentacles",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast Evard\u2019s Black Tentacles without a slot once per rest and gain stronger "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.concentration",
								"label": "concentration"
							},
							{
								"type": "text",
								"text": " while casting it."
							}
						]
					}
				]
			},
			{
				"id": "fathomless-plunge",
				"title": "Fathomless Plunge",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport yourself and allies to a body of water you have seen within a vast distance."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-tentacle-of-the-deeps-gift-of-the-sea",
				"title": "Expanded Spell List; Tentacle of the Deeps; Gift of the Sea"
			},
			{
				"id": "oceanic-soul-guardian-coil",
				"title": "Oceanic Soul; Guardian Coil"
			},
			{
				"id": "grasping-tentacles",
				"title": "Grasping Tentacles"
			},
			{
				"id": "fathomless-plunge",
				"title": "Fathomless Plunge"
			}
		]
	}
}),
	fiend: createInternalPage({
	"href": "/classes/warlock/fiend",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Fiend Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fiend Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Fiend Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Fiend Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Fiend",
	"title": "D&D Portal - Fiend",
	"subTitle": "Warlock subclass",
	"description": "Temporary hit points, luck, damage resistance, and infernal punishment.",
	"descriptions": {
		"short": "Temporary hit points, luck, damage resistance, and infernal punishment.",
		"medium": "Fiend: Temporary hit points, luck, damage resistance, and infernal punishment.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.combat.hitPoints",
					"label": "Temporary hit points"
				},
				{
					"type": "text",
					"text": ", luck, damage resistance, and infernal punishment."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"fiend"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "expanded-spell-list-dark-one-s-blessing",
				"title": "Expanded Spell List; Dark One\u2019s Blessing",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain destructive fiend "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " whenever you reduce a hostile creature to 0 "
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
				"id": "dark-one-s-own-luck",
				"title": "Dark One\u2019s Own Luck",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add a d10 to one "
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
								"text": " after seeing the roll."
							}
						]
					}
				]
			},
			{
				"id": "fiendish-resilience",
				"title": "Fiendish Resilience",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose one damage type to resist after each rest."
							}
						]
					}
				]
			},
			{
				"id": "hurl-through-hell",
				"title": "Hurl Through Hell",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After a hit, send the target through a nightmare realm and deal massive "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
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
				"id": "expanded-spell-list-dark-one-s-blessing",
				"title": "Expanded Spell List; Dark One\u2019s Blessing"
			},
			{
				"id": "dark-one-s-own-luck",
				"title": "Dark One\u2019s Own Luck"
			},
			{
				"id": "fiendish-resilience",
				"title": "Fiendish Resilience"
			},
			{
				"id": "hurl-through-hell",
				"title": "Hurl Through Hell"
			}
		]
	}
}),
	genie: createInternalPage({
	"href": "/classes/warlock/genie",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Genie Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Genie Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Genie Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Genie Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Genie",
	"title": "D&D Portal - Genie",
	"subTitle": "Warlock subclass",
	"description": "Elemental patron choice, vessel refuge, flight, and limited wish.",
	"descriptions": {
		"short": "Elemental patron choice, vessel refuge, flight, and limited wish.",
		"medium": "Genie: Elemental patron choice, vessel refuge, flight, and limited wish.",
		"long": [
			[
				{
					"type": "text",
					"text": "Elemental patron choice, vessel refuge, flight, and limited wish."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"genie"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "expanded-spell-list-genie-s-vessel",
				"title": "Expanded Spell List; Genie\u2019s Vessel",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a genie kind and related "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain a magical vessel, enter it for refuge, and add elemental damage to one attack each turn."
							}
						]
					}
				]
			},
			{
				"id": "elemental-gift",
				"title": "Elemental Gift",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain resistance based on patron type and temporary flight as a "
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
				"id": "sanctuary-vessel",
				"title": "Sanctuary Vessel",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Bring allies into the vessel and improve short-rest recovery inside it."
							}
						]
					}
				]
			},
			{
				"id": "limited-wish",
				"title": "Limited Wish",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Ask the patron to reproduce a lower-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " without components, followed by a long recharge."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-genie-s-vessel",
				"title": "Expanded Spell List; Genie\u2019s Vessel"
			},
			{
				"id": "elemental-gift",
				"title": "Elemental Gift"
			},
			{
				"id": "sanctuary-vessel",
				"title": "Sanctuary Vessel"
			},
			{
				"id": "limited-wish",
				"title": "Limited Wish"
			}
		]
	}
}),
	greatOldOne: createInternalPage({
	"href": "/classes/warlock/great-old-one",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Great Old One Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Great Old One Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Great Old One Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Great Old One Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Great Old One",
	"title": "D&D Portal - Great Old One",
	"subTitle": "Warlock subclass",
	"description": "Telepathy, mental defenses, and psychic domination.",
	"descriptions": {
		"short": "Telepathy, mental defenses, and psychic domination.",
		"medium": "Great Old One: Telepathy, mental defenses, and psychic domination.",
		"long": [
			[
				{
					"type": "text",
					"text": "Telepathy, mental defenses, and "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.psychic",
					"label": "psychic"
				},
				{
					"type": "text",
					"text": " domination."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"great-old-one"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "expanded-spell-list-awakened-mind",
				"title": "Expanded Spell List; Awakened Mind",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain aberrant "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options and communicate telepathically with nearby creatures."
							}
						]
					}
				]
			},
			{
				"id": "entropic-ward",
				"title": "Entropic Ward",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Impose disadvantage on an attack against you and gain advantage on your next attack against that creature if it misses."
							}
						]
					}
				]
			},
			{
				"id": "thought-shield",
				"title": "Thought Shield",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Protect thoughts, gain "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " resistance, and reflect "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
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
				"id": "create-thrall",
				"title": "Create Thrall",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Charm an "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.incapacitated",
								"label": "incapacitated"
							},
							{
								"type": "text",
								"text": " humanoid indefinitely and communicate with it telepathically across any distance on the same plane."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-awakened-mind",
				"title": "Expanded Spell List; Awakened Mind"
			},
			{
				"id": "entropic-ward",
				"title": "Entropic Ward"
			},
			{
				"id": "thought-shield",
				"title": "Thought Shield"
			},
			{
				"id": "create-thrall",
				"title": "Create Thrall"
			}
		]
	}
}),
	hexblade: createInternalPage({
	"href": "/classes/warlock/hexblade",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Hexblade Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Hexblade Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Hexblade Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Hexblade Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Hexblade",
	"title": "D&D Portal - Hexblade",
	"subTitle": "Warlock subclass",
	"description": "Medium armor, martial weapons, Charisma weapon attacks, and curses.",
	"descriptions": {
		"short": "Medium armor, martial weapons, Charisma weapon attacks, and curses.",
		"medium": "Hexblade: Medium armor, martial weapons, Charisma weapon attacks, and curses.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.equipment.mediumArmor",
					"label": "Medium armor"
				},
				{
					"type": "text",
					"text": ", "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.martialWeapons",
					"label": "martial weapons"
				},
				{
					"type": "text",
					"text": ", "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": " weapon attacks, and curses."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"hexblade"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "expanded-spell-list-hexblade-s-curse-hex-warrior",
				"title": "Expanded Spell List; Hexblade\u2019s Curse; Hex Warrior",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain martial "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options, curse one enemy for stronger damage and criticals plus healing on its death, and use "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " with selected weapons while gaining armor, "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.shields",
								"label": "shield"
							},
							{
								"type": "text",
								"text": ", and martial proficiency."
							}
						]
					}
				]
			},
			{
				"id": "accursed-specter",
				"title": "Accursed Specter",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Raise a slain humanoid\u2019s spirit as a temporary specter servant."
							}
						]
					}
				]
			},
			{
				"id": "armor-of-hexes",
				"title": "Armor of Hexes",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "The creature cursed by Hexblade\u2019s Curse can miss you automatically on a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " d6 roll."
							}
						]
					}
				]
			},
			{
				"id": "master-of-hexes",
				"title": "Master of Hexes",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move Hexblade\u2019s Curse to a new creature when the current target dies."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-hexblade-s-curse-hex-warrior",
				"title": "Expanded Spell List; Hexblade\u2019s Curse; Hex Warrior"
			},
			{
				"id": "accursed-specter",
				"title": "Accursed Specter"
			},
			{
				"id": "armor-of-hexes",
				"title": "Armor of Hexes"
			},
			{
				"id": "master-of-hexes",
				"title": "Master of Hexes"
			}
		]
	}
}),
	undead: createInternalPage({
	"href": "/classes/warlock/undead",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Undead Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Undead Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Undead Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Undead Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Undead",
	"title": "D&D Portal - Undead",
	"subTitle": "Warlock subclass",
	"description": "Form of Dread, fear, necrotic damage, and spirit projection.",
	"descriptions": {
		"short": "Form of Dread, fear, necrotic damage, and spirit projection.",
		"medium": "Undead: Form of Dread, fear, necrotic damage, and spirit projection.",
		"long": [
			[
				{
					"type": "text",
					"text": "Form of Dread, fear, "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.necrotic",
					"label": "necrotic"
				},
				{
					"type": "text",
					"text": " damage, and spirit projection."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"undead"
	],
	"content": {
		"source": "Van Richten\u2019s Guide to Ravenloft",
		"featureSections": [
			{
				"id": "expanded-spell-list-form-of-dread",
				"title": "Expanded Spell List; Form of Dread",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain undeath-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options and assume a frightening form that grants "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": ", fear on hits, and fear immunity."
							}
						]
					}
				]
			},
			{
				"id": "grave-touched",
				"title": "Grave Touched",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Stop needing food, drink, or breath, change one attack\u2019s damage to "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": ", and add extra damage while in Form of Dread."
							}
						]
					}
				]
			},
			{
				"id": "necrotic-husk",
				"title": "Necrotic Husk",
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
								"text": " resistance or immunity in Form of Dread and explode with "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " energy instead of dropping to 0 "
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
				"id": "spirit-projection",
				"title": "Spirit Projection",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Project the spirit from the body, gaining movement through objects, flight, stronger "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " healing, and flexible spellcasting."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-form-of-dread",
				"title": "Expanded Spell List; Form of Dread"
			},
			{
				"id": "grave-touched",
				"title": "Grave Touched"
			},
			{
				"id": "necrotic-husk",
				"title": "Necrotic Husk"
			},
			{
				"id": "spirit-projection",
				"title": "Spirit Projection"
			}
		]
	}
}),
	undying: createInternalPage({
	"href": "/classes/warlock/undying",
	"img": {
		"href": "/icons/white/classes/warlock.svg",
		"alt": "A stylized Warlock class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Undying Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Undying Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Undying Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-female-s.webp",
					"m": "/images/classes/warlock/card-female-m.webp",
					"l": "/images/classes/warlock/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Undying Warlock class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/warlock/card-male-s.webp",
					"m": "/images/classes/warlock/card-male-m.webp",
					"l": "/images/classes/warlock/card-male-l.webp"
				}
			}
		}
	},
	"label": "Undying",
	"title": "D&D Portal - Undying",
	"subTitle": "Warlock subclass",
	"description": "Disease resistance, death avoidance, and slow bodily decay.",
	"descriptions": {
		"short": "Disease resistance, death avoidance, and slow bodily decay.",
		"medium": "Undying: Disease resistance, death avoidance, and slow bodily decay.",
		"long": [
			[
				{
					"type": "text",
					"text": "Disease resistance, death avoidance, and slow bodily decay."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.warlock.page"
	},
	"tags": [
		"warlock",
		"subclass",
		"undying"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide",
		"featureSections": [
			{
				"id": "expanded-spell-list-among-the-dead",
				"title": "Expanded Spell List; Among the Dead",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain death-defying "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " options, learn Spare the Dying, resist disease, and make undead save before attacking you."
							}
						]
					}
				]
			},
			{
				"id": "defy-death",
				"title": "Defy Death",
				"subtitle": "6th level",
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
								"text": " after succeeding on a death save or stabilizing another creature."
							}
						]
					}
				]
			},
			{
				"id": "undying-nature",
				"title": "Undying Nature",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Stop needing air, food, drink, or sleep and age far more slowly."
							}
						]
					}
				]
			},
			{
				"id": "indestructible-life",
				"title": "Indestructible Life",
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
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " to regain "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " and reattach severed body parts."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "expanded-spell-list-among-the-dead",
				"title": "Expanded Spell List; Among the Dead"
			},
			{
				"id": "defy-death",
				"title": "Defy Death"
			},
			{
				"id": "undying-nature",
				"title": "Undying Nature"
			},
			{
				"id": "indestructible-life",
				"title": "Indestructible Life"
			}
		]
	}
}),
} as const;

export const warlock = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/warlock",
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
						"text": "Scholar\u2019s pack"
					}
				],
				[
					{
						"type": "text",
						"text": "dungeoneer\u2019s pack"
					}
				]
			]
		},
		{
			"label": "Leather armor, simple weapon, two daggers",
			"items": [
				[
					{
						"type": "text",
						"text": "Leather armor, simple weapon, two daggers"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Warlock progression",
		"heading": "Warlock Progression",
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
			},
			{
				"key": "spells",
				"label": "Spells"
			},
			{
				"key": "slots",
				"label": "Slots"
			},
			{
				"key": "slotLevel",
				"label": "Slot Level"
			},
			{
				"key": "invocations",
				"label": "Invocations"
			}
		],
		"rows": [
			{
				"level": 1,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Otherworldly Patron",
						"sectionId": "otherworldly-patron"
					},
					{
						"label": "Pact Magic",
						"sectionId": "pact-magic"
					}
				],
				"values": {
					"cantrips": 2,
					"spells": 2,
					"slots": 1,
					"slotLevel": "1st",
					"invocations": "\u2014"
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Eldritch Invocations",
						"sectionId": "eldritch-invocations"
					}
				],
				"values": {
					"cantrips": 2,
					"spells": 3,
					"slots": 2,
					"slotLevel": "1st",
					"invocations": 2
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Pact Boon",
						"sectionId": "pact-boon"
					}
				],
				"values": {
					"cantrips": 2,
					"spells": 4,
					"slots": 2,
					"slotLevel": "2nd",
					"invocations": 2
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
						"label": "Eldritch Versatility",
						"sectionId": "eldritch-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 3,
					"spells": 5,
					"slots": 2,
					"slotLevel": "2nd",
					"invocations": 2
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
					"cantrips": 3,
					"spells": 6,
					"slots": 2,
					"slotLevel": "3rd",
					"invocations": 3
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Patron feature",
						"sectionId": "patron-feature"
					}
				],
				"values": {
					"cantrips": 3,
					"spells": 7,
					"slots": 2,
					"slotLevel": "3rd",
					"invocations": 3
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
					"cantrips": 3,
					"spells": 8,
					"slots": 2,
					"slotLevel": "4th",
					"invocations": 4
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
						"label": "Eldritch Versatility",
						"sectionId": "eldritch-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 3,
					"spells": 9,
					"slots": 2,
					"slotLevel": "4th",
					"invocations": 4
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
					"cantrips": 3,
					"spells": 10,
					"slots": 2,
					"slotLevel": "5th",
					"invocations": 5
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Patron feature",
						"sectionId": "patron-feature"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 10,
					"slots": 2,
					"slotLevel": "5th",
					"invocations": 5
				}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Mystic Arcanum (6th)",
						"sectionId": "mystic-arcanum-6th"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 11,
					"slots": 3,
					"slotLevel": "5th",
					"invocations": 5
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
						"label": "Eldritch Versatility",
						"sectionId": "eldritch-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 11,
					"slots": 3,
					"slotLevel": "5th",
					"invocations": 6
				}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Mystic Arcanum (7th)",
						"sectionId": "mystic-arcanum-7th"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 12,
					"slots": 3,
					"slotLevel": "5th",
					"invocations": 6
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Patron feature",
						"sectionId": "patron-feature"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 12,
					"slots": 3,
					"slotLevel": "5th",
					"invocations": 6
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Mystic Arcanum (8th)",
						"sectionId": "mystic-arcanum-8th"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 13,
					"slots": 3,
					"slotLevel": "5th",
					"invocations": 7
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
						"label": "Eldritch Versatility",
						"sectionId": "eldritch-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 13,
					"slots": 3,
					"slotLevel": "5th",
					"invocations": 7
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Mystic Arcanum (9th)",
						"sectionId": "mystic-arcanum-9th"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 14,
					"slots": 4,
					"slotLevel": "5th",
					"invocations": 7
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 14,
					"slots": 4,
					"slotLevel": "5th",
					"invocations": 8
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
						"label": "Eldritch Versatility",
						"sectionId": "eldritch-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 15,
					"slots": 4,
					"slotLevel": "5th",
					"invocations": 8
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Eldritch Master",
						"sectionId": "eldritch-master"
					}
				],
				"values": {
					"cantrips": 4,
					"spells": 15,
					"slots": 4,
					"slotLevel": "5th",
					"invocations": 8
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
									"text": "; Pact Magic uses a small number of equal-level slots recovered on a short or "
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
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "spellcasting, arcane, dark-magic, pact-magic, customizable"
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
									"path": "internals.rules.abilityScores.wisdom",
									"label": "Wisdom"
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
									"path": "internals.rules.skills.history",
									"label": "History"
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
									"path": "internals.rules.skills.nature",
									"label": "Nature"
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
							"text": "As a warlock, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "otherworldly-patron",
				"title": "Otherworldly Patron",
				"subtitle": "Levels 1, 6, 10, 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose the entity granting power and gain patron features."
							}
						]
					}
				]
			},
			{
				"id": "pact-magic",
				"title": "Pact Magic",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Know warlock "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and cast them through equal-level slots that refresh on short or long rests."
							}
						]
					}
				]
			},
			{
				"id": "eldritch-invocations",
				"title": "Eldritch Invocations",
				"subtitle": "Levels 2, number increases with level",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose persistent or at-will magical benefits; many have level, "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": ", or Pact Boon prerequisites."
							}
						]
					}
				]
			},
			{
				"id": "pact-boon",
				"title": "Pact Boon",
				"subtitle": "Level 3",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose Pact of the Chain, Blade, Tome, or the optional Talisman to define a major customization track."
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
				"id": "eldritch-versatility",
				"title": "Eldritch Versatility (Optional)",
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
								"text": "Replace a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": ", Pact Boon, or Mystic Arcanum "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " under the optional rules."
							}
						]
					}
				]
			},
			{
				"id": "mystic-arcanum",
				"title": "Mystic Arcanum",
				"subtitle": "Levels 11, 13, 15, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn one 6th-, 7th-, 8th-, and 9th-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " cast once per "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": " without Pact Magic slots."
							}
						]
					}
				]
			},
			{
				"id": "eldritch-master",
				"title": "Eldritch Master",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend 1 minute entreating the patron to recover all Pact Magic slots once per "
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
									"page": "internals.classes.warlock.subclasses.archfey",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.warlock.subclasses.celestial",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.warlock.subclasses.fathomless",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.warlock.subclasses.fiend",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.warlock.subclasses.genie",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.warlock.subclasses.greatOldOne",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.warlock.subclasses.hexblade",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.warlock.subclasses.undead",
									"source": "Van Richten\u2019s Guide to Ravenloft"
								},
								{
									"page": "internals.classes.warlock.subclasses.undying",
									"source": "Sword Coast Adventurer\u2019s Guide"
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
			"title": "Warlock Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "otherworldly-patron",
					"title": "Otherworldly Patron"
				},
				{
					"id": "pact-magic",
					"title": "Pact Magic"
				},
				{
					"id": "eldritch-invocations",
					"title": "Eldritch Invocations"
				},
				{
					"id": "pact-boon",
					"title": "Pact Boon"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "eldritch-versatility",
					"title": "Eldritch Versatility (Optional)"
				},
				{
					"id": "mystic-arcanum",
					"title": "Mystic Arcanum"
				},
				{
					"id": "eldritch-master",
					"title": "Eldritch Master"
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
