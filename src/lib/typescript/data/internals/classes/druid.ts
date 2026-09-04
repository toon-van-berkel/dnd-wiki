/*
	Location: src/lib/typescript/data/internals/classes/druid.ts
	Use: Central Druid class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/druid",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Druid",
	"title": "D&D Portal - Druid",
	"subTitle": "Character class",
	"description": "A Wisdom-based prepared primal full caster who can transform into beasts and specialize through a druid circle.",
	"descriptions": {
		"short": "A Wisdom-based prepared primal full caster who can transform into beasts and specialize through a druid circle.",
		"medium": "A Wisdom-based prepared primal full caster who can transform into beasts and specialize through a druid circle.",
		"long": [
			[
				{
					"type": "text",
					"text": "A "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": "-based prepared primal full caster who can transform into beasts and specialize through a druid circle."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Druid is built around "
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
					"text": "This page collects the Druid core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.wisdom",
					"label": "Wisdom"
				},
				{
					"type": "text",
					"text": "; prepared full-caster progression."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"druid",
		"class",
		"2014"
	]
});

const subclasses = {
	dreams: createInternalPage({
	"href": "/classes/druid/dreams",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Dreams Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Dreams Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Dreams Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Dreams Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Dreams",
	"title": "D&D Portal - Dreams",
	"subTitle": "Druid subclass",
	"description": "Fey healing, teleportation, and protective rest magic.",
	"descriptions": {
		"short": "Fey healing, teleportation, and protective rest magic.",
		"medium": "Dreams: Fey healing, teleportation, and protective rest magic.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fey healing, teleportation, and protective rest magic."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"dreams"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "balm-of-the-summer-court",
				"title": "Balm of the Summer Court",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use a pool of d6s as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " to heal a distant creature and grant "
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
				"id": "hearth-of-moonlight-and-shadow",
				"title": "Hearth of Moonlight and Shadow",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "During a rest, create a hidden protective area that improves "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "Stealth"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.perception",
								"label": "Perception"
							},
							{
								"type": "text",
								"text": " for your group."
							}
						]
					}
				]
			},
			{
				"id": "hidden-paths",
				"title": "Hidden Paths",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Teleport yourself as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": " or teleport an ally as an action, with limited uses."
							}
						]
					}
				]
			},
			{
				"id": "walker-in-dreams",
				"title": "Walker in Dreams",
				"subtitle": "14th level",
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
								"path": "internals.rules.rests.shortRest",
								"label": "short rest"
							},
							{
								"type": "text",
								"text": ", cast Dream, Scrying, or a specialized Teleportation Circle without a "
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
			}
		],
		"tableOfContents": [
			{
				"id": "balm-of-the-summer-court",
				"title": "Balm of the Summer Court"
			},
			{
				"id": "hearth-of-moonlight-and-shadow",
				"title": "Hearth of Moonlight and Shadow"
			},
			{
				"id": "hidden-paths",
				"title": "Hidden Paths"
			},
			{
				"id": "walker-in-dreams",
				"title": "Walker in Dreams"
			}
		]
	}
}),
	land: createInternalPage({
	"href": "/classes/druid/land",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Land Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Land Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Land Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Land Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Land",
	"title": "D&D Portal - Land",
	"subTitle": "Druid subclass",
	"description": "Expanded spell preparation and improved natural spell recovery.",
	"descriptions": {
		"short": "Expanded spell preparation and improved natural spell recovery.",
		"medium": "Land: Expanded spell preparation and improved natural spell recovery.",
		"long": [
			[
				{
					"type": "text",
					"text": "Expanded "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": " preparation and improved natural "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": " recovery."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"land"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "bonus-cantrip-natural-recovery-circle-spells",
				"title": "Bonus Cantrip; Natural Recovery; Circle Spells",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn an extra druid "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
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
								"text": " slots during a "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.shortRest",
								"label": "short rest"
							},
							{
								"type": "text",
								"text": ", and gain always-prepared "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " based on a chosen land type."
							}
						]
					}
				]
			},
			{
				"id": "land-s-stride",
				"title": "Land\u2019s Stride",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move through nonmagical "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.difficultTerrain",
								"label": "difficult terrain"
							},
							{
								"type": "text",
								"text": " and plants without penalty and resist magically created plants."
							}
						]
					}
				]
			},
			{
				"id": "nature-s-ward",
				"title": "Nature\u2019s Ward",
				"subtitle": "10th level",
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
								"text": " and disease and immune to charm or fear from elementals and fey."
							}
						]
					}
				]
			},
			{
				"id": "nature-s-sanctuary",
				"title": "Nature\u2019s Sanctuary",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Beasts and plants must overcome a "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " save to attack you."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-cantrip-natural-recovery-circle-spells",
				"title": "Bonus Cantrip; Natural Recovery; Circle Spells"
			},
			{
				"id": "land-s-stride",
				"title": "Land\u2019s Stride"
			},
			{
				"id": "nature-s-ward",
				"title": "Nature\u2019s Ward"
			},
			{
				"id": "nature-s-sanctuary",
				"title": "Nature\u2019s Sanctuary"
			}
		]
	}
}),
	moon: createInternalPage({
	"href": "/classes/druid/moon",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Moon Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Moon Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Moon Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Moon Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Moon",
	"title": "D&D Portal - Moon",
	"subTitle": "Druid subclass",
	"description": "Stronger and faster combat Wild Shape progression.",
	"descriptions": {
		"short": "Stronger and faster combat Wild Shape progression.",
		"medium": "Moon: Stronger and faster combat Wild Shape progression.",
		"long": [
			[
				{
					"type": "text",
					"text": "Stronger and faster combat Wild Shape progression."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"moon"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "combat-wild-shape-circle-forms",
				"title": "Combat Wild Shape; Circle Forms",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Wild Shape as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": ", restore "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " by spending "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slots while transformed, and access stronger beast forms earlier."
							}
						]
					}
				]
			},
			{
				"id": "primal-strike",
				"title": "Primal Strike",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Wild Shape attacks count as magical for overcoming resistance and immunity."
							}
						]
					}
				]
			},
			{
				"id": "elemental-wild-shape",
				"title": "Elemental Wild Shape",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend two Wild Shape uses to become an air, earth, "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": ", or water elemental."
							}
						]
					}
				]
			},
			{
				"id": "thousand-forms",
				"title": "Thousand Forms",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast Alter Self at will."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "combat-wild-shape-circle-forms",
				"title": "Combat Wild Shape; Circle Forms"
			},
			{
				"id": "primal-strike",
				"title": "Primal Strike"
			},
			{
				"id": "elemental-wild-shape",
				"title": "Elemental Wild Shape"
			},
			{
				"id": "thousand-forms",
				"title": "Thousand Forms"
			}
		]
	}
}),
	shepherd: createInternalPage({
	"href": "/classes/druid/shepherd",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Shepherd Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Shepherd Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Shepherd Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Shepherd Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Shepherd",
	"title": "D&D Portal - Shepherd",
	"subTitle": "Druid subclass",
	"description": "Spirit totems and enhanced summoned creatures.",
	"descriptions": {
		"short": "Spirit totems and enhanced summoned creatures.",
		"medium": "Shepherd: Spirit totems and enhanced summoned creatures.",
		"long": [
			[
				{
					"type": "text",
					"text": "Spirit totems and enhanced summoned creatures."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"shepherd"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "speech-of-the-woods-spirit-totem",
				"title": "Speech of the Woods; Spirit Totem",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Communicate with beasts and summon a bear, hawk, or unicorn spirit aura that grants different group benefits."
							}
						]
					}
				]
			},
			{
				"id": "mighty-summoner",
				"title": "Mighty Summoner",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Summoned beasts and fey gain more "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " and magical natural attacks."
							}
						]
					}
				]
			},
			{
				"id": "guardian-spirit",
				"title": "Guardian Spirit",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Your Spirit Totem heals summoned or created beasts and fey that end their turns in its aura."
							}
						]
					}
				]
			},
			{
				"id": "faithful-summons",
				"title": "Faithful Summons",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.incapacitated",
								"label": "incapacitated"
							},
							{
								"type": "text",
								"text": " or reduced to 0 "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", automatically summon beasts that protect you."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "speech-of-the-woods-spirit-totem",
				"title": "Speech of the Woods; Spirit Totem"
			},
			{
				"id": "mighty-summoner",
				"title": "Mighty Summoner"
			},
			{
				"id": "guardian-spirit",
				"title": "Guardian Spirit"
			},
			{
				"id": "faithful-summons",
				"title": "Faithful Summons"
			}
		]
	}
}),
	spores: createInternalPage({
	"href": "/classes/druid/spores",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Spores Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Spores Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Spores Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Spores Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Spores",
	"title": "D&D Portal - Spores",
	"subTitle": "Druid subclass",
	"description": "Fungal halo damage, temporary hit points, and undead animation.",
	"descriptions": {
		"short": "Fungal halo damage, temporary hit points, and undead animation.",
		"medium": "Spores: Fungal halo damage, temporary hit points, and undead animation.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fungal halo damage, "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.hitPoints",
					"label": "temporary hit points"
				},
				{
					"type": "text",
					"text": ", and undead animation."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"spores"
	],
	"content": {
		"source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "circle-spells-halo-of-spores-symbiotic-entity",
				"title": "Circle Spells; Halo of Spores; Symbiotic Entity",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared fungal and necromantic "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", deal "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage nearby, and spend Wild Shape to gain "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " and stronger spores and weapon attacks."
							}
						]
					}
				]
			},
			{
				"id": "fungal-infestation",
				"title": "Fungal Infestation",
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
								"text": " to animate a nearby dead humanoid or beast as a short-lived zombie."
							}
						]
					}
				]
			},
			{
				"id": "spreading-spores",
				"title": "Spreading Spores",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a stationary spore cloud that damages creatures entering or starting within it."
							}
						]
					}
				]
			},
			{
				"id": "fungal-body",
				"title": "Fungal Body",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Become immune to blindness, deafness, fear, and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.poison",
								"label": "poison"
							},
							{
								"type": "text",
								"text": ", and resist "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.criticalHit",
								"label": "critical hits"
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
				"id": "circle-spells-halo-of-spores-symbiotic-entity",
				"title": "Circle Spells; Halo of Spores; Symbiotic Entity"
			},
			{
				"id": "fungal-infestation",
				"title": "Fungal Infestation"
			},
			{
				"id": "spreading-spores",
				"title": "Spreading Spores"
			},
			{
				"id": "fungal-body",
				"title": "Fungal Body"
			}
		]
	}
}),
	stars: createInternalPage({
	"href": "/classes/druid/stars",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Stars Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Stars Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Stars Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Stars Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Stars",
	"title": "D&D Portal - Stars",
	"subTitle": "Druid subclass",
	"description": "Starry forms, guidance, and cosmic omen support.",
	"descriptions": {
		"short": "Starry forms, guidance, and cosmic omen support.",
		"medium": "Stars: Starry forms, guidance, and cosmic omen support.",
		"long": [
			[
				{
					"type": "text",
					"text": "Starry forms, guidance, and cosmic omen support."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"stars"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "star-map-starry-form",
				"title": "Star Map; Starry Form",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain Guidance, Guiding Bolt, limited free Guiding Bolts, and expend Wild Shape to assume Archer, Chalice, or Dragon constellation forms."
							}
						]
					}
				]
			},
			{
				"id": "cosmic-omen",
				"title": "Cosmic Omen",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After a rest, gain a limited "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " that adds or subtracts a d6 from nearby attacks, saves, or checks."
							}
						]
					}
				]
			},
			{
				"id": "twinkling-constellations",
				"title": "Twinkling Constellations",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Improve all Starry Form benefits and switch constellation form at the start of each turn."
							}
						]
					}
				]
			},
			{
				"id": "full-of-stars",
				"title": "Full of Stars",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "While in Starry Form, gain resistance to "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.bludgeoning",
								"label": "bludgeoning"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.piercing",
								"label": "piercing"
							},
							{
								"type": "text",
								"text": ", and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.slashing",
								"label": "slashing"
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
				"id": "star-map-starry-form",
				"title": "Star Map; Starry Form"
			},
			{
				"id": "cosmic-omen",
				"title": "Cosmic Omen"
			},
			{
				"id": "twinkling-constellations",
				"title": "Twinkling Constellations"
			},
			{
				"id": "full-of-stars",
				"title": "Full of Stars"
			}
		]
	}
}),
	wildfire: createInternalPage({
	"href": "/classes/druid/wildfire",
	"img": {
		"href": "/icons/white/classes/druid.svg",
		"alt": "A stylized Druid class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Wildfire Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Wildfire Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Wildfire Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-female-s.webp",
					"m": "/images/classes/druid/card-female-m.webp",
					"l": "/images/classes/druid/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Wildfire Druid class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/druid/card-male-s.webp",
					"m": "/images/classes/druid/card-male-m.webp",
					"l": "/images/classes/druid/card-male-l.webp"
				}
			}
		}
	},
	"label": "Wildfire",
	"title": "D&D Portal - Wildfire",
	"subTitle": "Druid subclass",
	"description": "A teleporting wildfire spirit and fire/restoration synergy.",
	"descriptions": {
		"short": "A teleporting wildfire spirit and fire/restoration synergy.",
		"medium": "Wildfire: A teleporting wildfire spirit and fire/restoration synergy.",
		"long": [
			[
				{
					"type": "text",
					"text": "A teleporting wildfire spirit and "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.fire",
					"label": "fire"
				},
				{
					"type": "text",
					"text": "/restoration synergy."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.druid.page"
	},
	"tags": [
		"druid",
		"subclass",
		"wildfire"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "circle-spells-summon-wildfire-spirit",
				"title": "Circle Spells; Summon Wildfire Spirit",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": " and healing "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and spend Wild Shape to summon a spirit that attacks and teleports nearby creatures."
							}
						]
					}
				]
			},
			{
				"id": "enhanced-bond",
				"title": "Enhanced Bond",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "While the spirit is present, add a d8 to one "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": "-damage or healing roll and cast "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " from the spirit\u2019s space."
							}
						]
					}
				]
			},
			{
				"id": "cauterizing-flames",
				"title": "Cauterizing Flames",
				"subtitle": "10th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a spectral flame when a creature dies and use it to heal an ally or damage an enemy."
							}
						]
					}
				]
			},
			{
				"id": "blazing-revival",
				"title": "Blazing Revival",
				"subtitle": "14th level",
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
								"text": ", dismiss the spirit to return with half your "
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
				"id": "circle-spells-summon-wildfire-spirit",
				"title": "Circle Spells; Summon Wildfire Spirit"
			},
			{
				"id": "enhanced-bond",
				"title": "Enhanced Bond"
			},
			{
				"id": "cauterizing-flames",
				"title": "Cauterizing Flames"
			},
			{
				"id": "blazing-revival",
				"title": "Blazing Revival"
			}
		]
	}
}),
} as const;

export const druid = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/druid",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Wooden "
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
						"text": "Scimitar"
					}
				],
				[
					{
						"type": "text",
						"text": "simple melee weapon"
					}
				]
			]
		},
		{
			"label": "Leather armor",
			"items": [
				[
					{
						"type": "text",
						"text": "Leather armor"
					}
				]
			]
		},
		{
			"label": "Explorer\u2019s pack",
			"items": [
				[
					{
						"type": "text",
						"text": "Explorer\u2019s pack"
					}
				]
			]
		},
		{
			"label": "Druidic focus",
			"items": [
				[
					{
						"type": "text",
						"text": "Druidic focus"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Druid progression",
		"heading": "Druid Progression",
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
						"label": "Druidic",
						"sectionId": "druidic"
					},
					{
						"label": "Spellcasting",
						"sectionId": "spellcasting"
					}
				],
				"values": {
					"cantrips": 2
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Wild Shape",
						"sectionId": "wild-shape"
					},
					{
						"label": "Druid Circle",
						"sectionId": "druid-circle"
					},
					{
						"label": "Wild Companion",
						"sectionId": "wild-companion",
						"optional": true
					}
				],
				"values": {
					"cantrips": 2
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {
					"cantrips": 2
				}
			},
			{
				"level": 4,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Wild Shape improvement",
						"sectionId": "wild-shape-improvement"
					},
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 3
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
					"cantrips": 3
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Circle feature",
						"sectionId": "circle-feature"
					}
				],
				"values": {
					"cantrips": 3
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
					"cantrips": 3
				}
			},
			{
				"level": 8,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Wild Shape improvement",
						"sectionId": "wild-shape-improvement"
					},
					{
						"label": "Ability Score Improvement",
						"sectionId": "ability-score-improvement"
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 3
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
					"cantrips": 3
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Circle feature",
						"sectionId": "circle-feature"
					}
				],
				"values": {
					"cantrips": 4
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
					"cantrips": 4
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
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 4
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
					"cantrips": 4
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Circle feature",
						"sectionId": "circle-feature"
					}
				],
				"values": {
					"cantrips": 4
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
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
					}
				],
				"values": {
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
					"cantrips": 4
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Timeless Body",
						"sectionId": "timeless-body"
					},
					{
						"label": "Beast Spells",
						"sectionId": "beast-spells"
					}
				],
				"values": {
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
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
					}
				],
				"values": {
					"cantrips": 4
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Archdruid",
						"sectionId": "archdruid"
					}
				],
				"values": {
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
									"text": "; prepared full-caster progression."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "spellcasting, primal, healer, utility, shapeshifting"
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
								},
								{
									"type": "text",
									"text": "; the Wikidot page retains the 2014 nonmetal restriction."
								}
							]
						},
						{
							"label": "Weapons",
							"value": [
								{
									"type": "text",
									"text": "Clubs, daggers, darts, "
								},
								{
									"type": "link",
									"path": "internals.equipment.javelins",
									"label": "javelins"
								},
								{
									"type": "text",
									"text": ", maces, quarterstaffs, scimitars, sickles, slings, spears"
								}
							]
						},
						{
							"label": "Tools",
							"value": [
								{
									"type": "text",
									"text": "Herbalism kit"
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
									"path": "internals.rules.skills.animalHandling",
									"label": "Animal Handling"
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
							"text": "As a druid, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "druidic",
				"title": "Druidic",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Know the secret druid language and its hidden-message conventions."
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
								"text": "Prepare druid "
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
								"text": " using the full-caster slot table; a druidic focus can be used and prepared ritual "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " may be cast as rituals."
							}
						]
					}
				]
			},
			{
				"id": "wild-shape",
				"title": "Wild Shape",
				"subtitle": "Levels 2, improves at 4, 8",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Transform into a previously seen beast, using class level to determine maximum challenge rating and movement restrictions."
							}
						]
					}
				]
			},
			{
				"id": "druid-circle",
				"title": "Druid Circle",
				"subtitle": "Levels 2, 6, 10, 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass defining the druid\u2019s main magical and Wild Shape specialization."
							}
						]
					}
				]
			},
			{
				"id": "wild-companion",
				"title": "Wild Companion (Optional)",
				"subtitle": "Level 2",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend Wild Shape to cast Find Familiar without material components; the spirit is fey and temporary."
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
				"id": "cantrip-versatility",
				"title": "Cantrip Versatility (Optional)",
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
								"text": "Replace a druid "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": " when an "
							},
							{
								"type": "link",
								"path": "internals.rules.abbreviations.asi",
								"label": "ASI"
							},
							{
								"type": "text",
								"text": " is gained."
							}
						]
					}
				]
			},
			{
				"id": "timeless-body",
				"title": "Timeless Body",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Age at one-tenth the normal rate."
							}
						]
					}
				]
			},
			{
				"id": "beast-spells",
				"title": "Beast Spells",
				"subtitle": "Level 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Perform verbal and somatic components of many druid "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " while in Wild Shape."
							}
						]
					}
				]
			},
			{
				"id": "archdruid",
				"title": "Archdruid",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use Wild Shape without limit and ignore many "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " components in normal or beast form."
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
									"page": "internals.classes.druid.subclasses.dreams",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.druid.subclasses.land",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.druid.subclasses.moon",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.druid.subclasses.shepherd",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.druid.subclasses.spores",
									"source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.druid.subclasses.stars",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.druid.subclasses.wildfire",
									"source": "Tasha\u2019s Cauldron of Everything"
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
			"title": "Druid Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "druidic",
					"title": "Druidic"
				},
				{
					"id": "spellcasting",
					"title": "Spellcasting"
				},
				{
					"id": "wild-shape",
					"title": "Wild Shape"
				},
				{
					"id": "druid-circle",
					"title": "Druid Circle"
				},
				{
					"id": "wild-companion",
					"title": "Wild Companion (Optional)"
				},
				{
					"id": "ability-score-improvement",
					"title": "Ability Score Improvement"
				},
				{
					"id": "cantrip-versatility",
					"title": "Cantrip Versatility (Optional)"
				},
				{
					"id": "timeless-body",
					"title": "Timeless Body"
				},
				{
					"id": "beast-spells",
					"title": "Beast Spells"
				},
				{
					"id": "archdruid",
					"title": "Archdruid"
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
