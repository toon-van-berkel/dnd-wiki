/*
	Location: src/lib/typescript/data/internals/classes/bard.ts
	Use: Central Bard class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/bard",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Bard",
	"title": "D&D Portal - Bard",
	"subTitle": "Character class",
	"description": "A Charisma-based full caster and expert skill user who inspires allies, manipulates enemies, and borrows magic from every spell list.",
	"descriptions": {
		"short": "A Charisma-based full caster and expert skill user who inspires allies, manipulates enemies, and borrows magic from every spell list.",
		"medium": "A Charisma-based full caster and expert skill user who inspires allies, manipulates enemies, and borrows magic from every spell list.",
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
					"text": "-based full caster and expert skill user who inspires allies, manipulates enemies, and borrows magic from every "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spell"
				},
				{
					"type": "text",
					"text": " list."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Bard is built around "
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
					"text": "This page collects the Bard core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
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
		"bard",
		"class",
		"2014"
	]
});

const subclasses = {
	creation: createInternalPage({
	"href": "/classes/bard/creation",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Creation Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Creation Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Creation Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Creation Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Creation",
	"title": "D&D Portal - Creation",
	"subTitle": "Bard subclass",
	"description": "Animate objects and amplify inspiration through the Song of Creation.",
	"descriptions": {
		"short": "Animate objects and amplify inspiration through the Song of Creation.",
		"medium": "Creation: Animate objects and amplify inspiration through the Song of Creation.",
		"long": [
			[
				{
					"type": "text",
					"text": "Animate objects and amplify inspiration through the Song of Creation."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"creation"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "mote-of-potential-performance-of-creation",
				"title": "Mote of Potential; Performance of Creation",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Bardic Inspiration creates an extra mote effect based on how the die is used, and you can create a temporary nonmagical object through the Song of Creation."
							}
						]
					}
				]
			},
			{
				"id": "animating-performance",
				"title": "Animating Performance",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Animate a Large or smaller object as a Dancing Item companion that moves and fights under your direction."
							}
						]
					}
				]
			},
			{
				"id": "creative-crescendo",
				"title": "Creative Crescendo",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create multiple objects at once and remove most value limits from "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.performance",
								"label": "Performance"
							},
							{
								"type": "text",
								"text": " of Creation."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "mote-of-potential-performance-of-creation",
				"title": "Mote of Potential; Performance of Creation"
			},
			{
				"id": "animating-performance",
				"title": "Animating Performance"
			},
			{
				"id": "creative-crescendo",
				"title": "Creative Crescendo"
			}
		]
	}
}),
	eloquence: createInternalPage({
	"href": "/classes/bard/eloquence",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Eloquence Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Eloquence Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Eloquence Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Eloquence Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Eloquence",
	"title": "D&D Portal - Eloquence",
	"subTitle": "Bard subclass",
	"description": "Exceptional persuasion, reliable inspiration, and verbal debilitation.",
	"descriptions": {
		"short": "Exceptional persuasion, reliable inspiration, and verbal debilitation.",
		"medium": "Eloquence: Exceptional persuasion, reliable inspiration, and verbal debilitation.",
		"long": [
			[
				{
					"type": "text",
					"text": "Exceptional "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.persuasion",
					"label": "persuasion"
				},
				{
					"type": "text",
					"text": ", reliable inspiration, and verbal debilitation."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"eloquence"
	],
	"content": {
		"source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "silver-tongue-unsettling-words",
				"title": "Silver Tongue; Unsettling Words",
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
								"path": "internals.rules.skills.persuasion",
								"label": "Persuasion"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.deception",
								"label": "Deception"
							},
							{
								"type": "text",
								"text": " rolls as 10, and spend Bardic Inspiration to reduce a creature\u2019s next "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
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
				"id": "unfailing-inspiration-universal-speech",
				"title": "Unfailing Inspiration; Universal Speech",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "A failed use of Bardic Inspiration does not consume the die, and you can temporarily communicate with creatures regardless of language."
							}
						]
					}
				]
			},
			{
				"id": "infectious-inspiration",
				"title": "Infectious Inspiration",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When a creature succeeds using your Bardic Inspiration, use a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to inspire another creature without spending another use."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "silver-tongue-unsettling-words",
				"title": "Silver Tongue; Unsettling Words"
			},
			{
				"id": "unfailing-inspiration-universal-speech",
				"title": "Unfailing Inspiration; Universal Speech"
			},
			{
				"id": "infectious-inspiration",
				"title": "Infectious Inspiration"
			}
		]
	}
}),
	glamour: createInternalPage({
	"href": "/classes/bard/glamour",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Glamour Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Glamour Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Glamour Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Glamour Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Glamour",
	"title": "D&D Portal - Glamour",
	"subTitle": "Bard subclass",
	"description": "Fey majesty, battlefield repositioning, and supernatural command.",
	"descriptions": {
		"short": "Fey majesty, battlefield repositioning, and supernatural command.",
		"medium": "Glamour: Fey majesty, battlefield repositioning, and supernatural command.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fey majesty, battlefield repositioning, and supernatural command."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"glamour"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "mantle-of-inspiration-enthralling-performance",
				"title": "Mantle of Inspiration; Enthralling Performance",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend Bardic Inspiration to grant "
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
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " movement, and use a "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.performance",
								"label": "performance"
							},
							{
								"type": "text",
								"text": " to charm selected listeners."
							}
						]
					}
				]
			},
			{
				"id": "mantle-of-majesty",
				"title": "Mantle of Majesty",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Adopt a commanding fey appearance, cast Command repeatedly as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.bonusAction",
								"label": "bonus action"
							},
							{
								"type": "text",
								"text": ", and make "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.charmed",
								"label": "charmed"
							},
							{
								"type": "text",
								"text": " creatures more likely to fail."
							}
						]
					}
				]
			},
			{
				"id": "unbreakable-majesty",
				"title": "Unbreakable Majesty",
				"subtitle": "14th level",
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
								"text": " attackers to overcome a "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " save before they can target you; on failure they must redirect or lose the attack."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "mantle-of-inspiration-enthralling-performance",
				"title": "Mantle of Inspiration; Enthralling Performance"
			},
			{
				"id": "mantle-of-majesty",
				"title": "Mantle of Majesty"
			},
			{
				"id": "unbreakable-majesty",
				"title": "Unbreakable Majesty"
			}
		]
	}
}),
	lore: createInternalPage({
	"href": "/classes/bard/lore",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Lore Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Lore Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Lore Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Lore Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Lore",
	"title": "D&D Portal - Lore",
	"subTitle": "Bard subclass",
	"description": "Extra skills, Cutting Words, and earlier Magical Secrets.",
	"descriptions": {
		"short": "Extra skills, Cutting Words, and earlier Magical Secrets.",
		"medium": "Lore: Extra skills, Cutting Words, and earlier Magical Secrets.",
		"long": [
			[
				{
					"type": "text",
					"text": "Extra skills, Cutting Words, and earlier Magical Secrets."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"lore"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "bonus-proficiencies-cutting-words",
				"title": "Bonus Proficiencies; Cutting Words",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain three skill proficiencies and spend Bardic Inspiration as a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " to reduce an enemy\u2019s attack, check, or "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.damageRoll",
								"label": "damage roll"
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
				"id": "additional-magical-secrets",
				"title": "Additional Magical Secrets",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn two "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " from any class without counting them against bard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " known."
							}
						]
					}
				]
			},
			{
				"id": "peerless-skill",
				"title": "Peerless Skill",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend Bardic Inspiration on your own "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability check"
							},
							{
								"type": "text",
								"text": " after rolling."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-proficiencies-cutting-words",
				"title": "Bonus Proficiencies; Cutting Words"
			},
			{
				"id": "additional-magical-secrets",
				"title": "Additional Magical Secrets"
			},
			{
				"id": "peerless-skill",
				"title": "Peerless Skill"
			}
		]
	}
}),
	spirits: createInternalPage({
	"href": "/classes/bard/spirits",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Spirits Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Spirits Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Spirits Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Spirits Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Spirits",
	"title": "D&D Portal - Spirits",
	"subTitle": "Bard subclass",
	"description": "Channel random tales and spiritual guidance through a focus.",
	"descriptions": {
		"short": "Channel random tales and spiritual guidance through a focus.",
		"medium": "Spirits: Channel random tales and spiritual guidance through a focus.",
		"long": [
			[
				{
					"type": "text",
					"text": "Channel random tales and spiritual guidance through a focus."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"spirits"
	],
	"content": {
		"source": "Van Richten\u2019s Guide to Ravenloft",
		"featureSections": [
			{
				"id": "guiding-whispers-spiritual-focus-tales-from-beyond",
				"title": "Guiding Whispers; Spiritual Focus; Tales from Beyond",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain Guidance at range, cast through a spiritual focus, and spend Bardic Inspiration to roll a random spirit tale with a distinct effect."
							}
						]
					}
				]
			},
			{
				"id": "spirit-session",
				"title": "Spirit Session",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Conduct a ritual with allies to temporarily learn a divination or necromancy "
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
				"id": "mystical-connection",
				"title": "Mystical Connection",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When rolling on Tales from Beyond, roll twice and choose either result."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "guiding-whispers-spiritual-focus-tales-from-beyond",
				"title": "Guiding Whispers; Spiritual Focus; Tales from Beyond"
			},
			{
				"id": "spirit-session",
				"title": "Spirit Session"
			},
			{
				"id": "mystical-connection",
				"title": "Mystical Connection"
			}
		]
	}
}),
	swords: createInternalPage({
	"href": "/classes/bard/swords",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Swords Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Swords Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Swords Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Swords Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Swords",
	"title": "D&D Portal - Swords",
	"subTitle": "Bard subclass",
	"description": "Weapon flourishes, fighting style, and mobile melee performance.",
	"descriptions": {
		"short": "Weapon flourishes, fighting style, and mobile melee performance.",
		"medium": "Swords: Weapon flourishes, fighting style, and mobile melee performance.",
		"long": [
			[
				{
					"type": "text",
					"text": "Weapon flourishes, fighting style, and mobile melee "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.performance",
					"label": "performance"
				},
				{
					"type": "text",
					"text": "."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"swords"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "bonus-proficiencies-fighting-style-blade-flourish",
				"title": "Bonus Proficiencies; Fighting Style; Blade Flourish",
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
								"path": "internals.rules.equipment.mediumArmor",
								"label": "medium armor"
							},
							{
								"type": "text",
								"text": " and scimitar proficiency, choose Dueling or Two-Weapon Fighting, and spend Bardic Inspiration on defensive, mobile, or sweeping flourishes."
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
				"id": "master-s-flourish",
				"title": "Master\u2019s Flourish",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use a d6 for Blade Flourish without expending Bardic Inspiration, or spend a normal die for a larger result."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "bonus-proficiencies-fighting-style-blade-flourish",
				"title": "Bonus Proficiencies; Fighting Style; Blade Flourish"
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack"
			},
			{
				"id": "master-s-flourish",
				"title": "Master\u2019s Flourish"
			}
		]
	}
}),
	valor: createInternalPage({
	"href": "/classes/bard/valor",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Valor Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Valor Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Valor Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Valor Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Valor",
	"title": "D&D Portal - Valor",
	"subTitle": "Bard subclass",
	"description": "Martial armor and weapon support with combat-focused inspiration.",
	"descriptions": {
		"short": "Martial armor and weapon support with combat-focused inspiration.",
		"medium": "Valor: Martial armor and weapon support with combat-focused inspiration.",
		"long": [
			[
				{
					"type": "text",
					"text": "Martial armor and weapon support with combat-focused inspiration."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"valor"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "bonus-proficiencies-combat-inspiration",
				"title": "Bonus Proficiencies; Combat Inspiration",
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
								"label": "shield"
							},
							{
								"type": "text",
								"text": ", and martial-weapon proficiency; allies can spend your Bardic Inspiration on weapon damage or "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
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
				"subtitle": "6th level",
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
				"id": "battle-magic",
				"title": "Battle Magic",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "After casting a bard "
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
				"id": "bonus-proficiencies-combat-inspiration",
				"title": "Bonus Proficiencies; Combat Inspiration"
			},
			{
				"id": "extra-attack",
				"title": "Extra Attack"
			},
			{
				"id": "battle-magic",
				"title": "Battle Magic"
			}
		]
	}
}),
	whispers: createInternalPage({
	"href": "/classes/bard/whispers",
	"img": {
		"href": "/icons/white/classes/bard.svg",
		"alt": "A stylized Bard class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Whispers Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Whispers Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Whispers Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-female-s.webp",
					"m": "/images/classes/bard/card-female-m.webp",
					"l": "/images/classes/bard/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Whispers Bard class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/bard/card-male-s.webp",
					"m": "/images/classes/bard/card-male-m.webp",
					"l": "/images/classes/bard/card-male-l.webp"
				}
			}
		}
	},
	"label": "Whispers",
	"title": "D&D Portal - Whispers",
	"subTitle": "Bard subclass",
	"description": "Psychic strikes, fear, and stolen identities.",
	"descriptions": {
		"short": "Psychic strikes, fear, and stolen identities.",
		"medium": "Whispers: Psychic strikes, fear, and stolen identities.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.psychic",
					"label": "Psychic"
				},
				{
					"type": "text",
					"text": " strikes, fear, and stolen identities."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.bard.page"
	},
	"tags": [
		"bard",
		"subclass",
		"whispers"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "psychic-blades-words-of-terror",
				"title": "Psychic Blades; Words of Terror",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend Bardic Inspiration to add "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " damage to a weapon hit, and use private conversation to frighten a humanoid."
							}
						]
					}
				]
			},
			{
				"id": "mantle-of-whispers",
				"title": "Mantle of Whispers",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Capture the shadow of a dead humanoid and later assume its appearance and surface memories."
							}
						]
					}
				]
			},
			{
				"id": "shadow-lore",
				"title": "Shadow Lore",
				"subtitle": "14th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Whisper a magical threat that charms a creature into believing you know and can reveal its darkest secret."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "psychic-blades-words-of-terror",
				"title": "Psychic Blades; Words of Terror"
			},
			{
				"id": "mantle-of-whispers",
				"title": "Mantle of Whispers"
			},
			{
				"id": "shadow-lore",
				"title": "Shadow Lore"
			}
		]
	}
}),
} as const;

export const bard = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/bard",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Rapier, longsword,"
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
						"text": "Diplomat\u2019s pack"
					}
				],
				[
					{
						"type": "text",
						"text": "entertainer\u2019s pack"
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
						"text": "Lute"
					}
				],
				[
					{
						"type": "text",
						"text": "another musical instrument"
					}
				]
			]
		},
		{
			"label": "Leather armor and a dagger",
			"items": [
				[
					{
						"type": "text",
						"text": "Leather armor and a dagger"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Bard progression",
		"heading": "Bard Progression",
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
				"key": "inspirationDie",
				"label": "Inspiration Die"
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
						"label": "Bardic Inspiration (d6)",
						"sectionId": "bardic-inspiration-d6"
					}
				],
				"values": {
					"inspirationDie": "d6",
					"cantrips": 2,
					"spellsKnown": 4
				}
			},
			{
				"level": 2,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Jack of All Trades",
						"sectionId": "jack-of-all-trades"
					},
					{
						"label": "Song of Rest (d6)",
						"sectionId": "song-of-rest-d6"
					},
					{
						"label": "Magical Inspiration",
						"sectionId": "magical-inspiration",
						"optional": true
					}
				],
				"values": {
					"inspirationDie": "d6",
					"cantrips": 2,
					"spellsKnown": 5
				}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Bard College",
						"sectionId": "bard-college"
					},
					{
						"label": "Expertise",
						"sectionId": "expertise"
					}
				],
				"values": {
					"inspirationDie": "d6",
					"cantrips": 2,
					"spellsKnown": 6
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
						"label": "Bardic Versatility",
						"sectionId": "bardic-versatility",
						"optional": true
					}
				],
				"values": {
					"inspirationDie": "d6",
					"cantrips": 3,
					"spellsKnown": 7
				}
			},
			{
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Bardic Inspiration (d8)",
						"sectionId": "bardic-inspiration-d8"
					},
					{
						"label": "Font of Inspiration",
						"sectionId": "font-of-inspiration"
					}
				],
				"values": {
					"inspirationDie": "d8",
					"cantrips": 3,
					"spellsKnown": 8
				}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Countercharm",
						"sectionId": "countercharm"
					},
					{
						"label": "College feature",
						"sectionId": "college-feature"
					}
				],
				"values": {
					"inspirationDie": "d8",
					"cantrips": 3,
					"spellsKnown": 9
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
					"inspirationDie": "d8",
					"cantrips": 3,
					"spellsKnown": 10
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
						"label": "Bardic Versatility",
						"sectionId": "bardic-versatility",
						"optional": true
					}
				],
				"values": {
					"inspirationDie": "d8",
					"cantrips": 3,
					"spellsKnown": 11
				}
			},
			{
				"level": 9,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Song of Rest (d8)",
						"sectionId": "song-of-rest-d8"
					}
				],
				"values": {
					"inspirationDie": "d8",
					"cantrips": 3,
					"spellsKnown": 12
				}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Bardic Inspiration (d10)",
						"sectionId": "bardic-inspiration-d10"
					},
					{
						"label": "Expertise",
						"sectionId": "expertise"
					},
					{
						"label": "Magical Secrets",
						"sectionId": "magical-secrets"
					}
				],
				"values": {
					"inspirationDie": "d10",
					"cantrips": 4,
					"spellsKnown": 14
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
					"inspirationDie": "d10",
					"cantrips": 4,
					"spellsKnown": 15
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
						"label": "Bardic Versatility",
						"sectionId": "bardic-versatility",
						"optional": true
					}
				],
				"values": {
					"inspirationDie": "d10",
					"cantrips": 4,
					"spellsKnown": 15
				}
			},
			{
				"level": 13,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Song of Rest (d10)",
						"sectionId": "song-of-rest-d10"
					}
				],
				"values": {
					"inspirationDie": "d10",
					"cantrips": 4,
					"spellsKnown": 16
				}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Magical Secrets",
						"sectionId": "magical-secrets"
					},
					{
						"label": "College feature",
						"sectionId": "college-feature"
					}
				],
				"values": {
					"inspirationDie": "d10",
					"cantrips": 4,
					"spellsKnown": 18
				}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Bardic Inspiration (d12)",
						"sectionId": "bardic-inspiration-d12"
					}
				],
				"values": {
					"inspirationDie": "d12",
					"cantrips": 4,
					"spellsKnown": 19
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
						"label": "Bardic Versatility",
						"sectionId": "bardic-versatility",
						"optional": true
					}
				],
				"values": {
					"inspirationDie": "d12",
					"cantrips": 4,
					"spellsKnown": 19
				}
			},
			{
				"level": 17,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Song of Rest (d12)",
						"sectionId": "song-of-rest-d12"
					}
				],
				"values": {
					"inspirationDie": "d12",
					"cantrips": 4,
					"spellsKnown": 20
				}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Magical Secrets",
						"sectionId": "magical-secrets"
					}
				],
				"values": {
					"inspirationDie": "d12",
					"cantrips": 4,
					"spellsKnown": 22
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
						"label": "Bardic Versatility",
						"sectionId": "bardic-versatility",
						"optional": true
					}
				],
				"values": {
					"inspirationDie": "d12",
					"cantrips": 4,
					"spellsKnown": 22
				}
			},
			{
				"level": 20,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Superior Inspiration",
						"sectionId": "superior-inspiration"
					}
				],
				"values": {
					"inspirationDie": "d12",
					"cantrips": 4,
					"spellsKnown": 22
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
									"text": "spellcasting, support, face, skills, control"
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
									"text": "Three musical instruments"
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
									"text": "Choose any three skills"
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
							"text": "As a bard, you gain the following class features."
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
								"text": "Cast known bard "
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
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " using the full-caster slot table; musical instruments can serve as a focus and known ritual "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " can be cast as rituals."
							}
						]
					}
				]
			},
			{
				"id": "bardic-inspiration",
				"title": "Bardic Inspiration",
				"subtitle": "Levels 1, die improves at 5, 10, 15",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Grant another creature an inspiration die that can improve an "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability check"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.attackRoll",
								"label": "attack roll"
							},
							{
								"type": "text",
								"text": ", or "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throw"
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
				"id": "jack-of-all-trades",
				"title": "Jack of All Trades",
				"subtitle": "Level 2",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add half proficiency to "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.abilityCheck",
								"label": "ability checks"
							},
							{
								"type": "text",
								"text": " that do not already use proficiency."
							}
						]
					}
				]
			},
			{
				"id": "song-of-rest",
				"title": "Song of Rest",
				"subtitle": "Levels 2, improves at 9, 13, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase healing gained by allies spending Hit Dice during a "
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
			},
			{
				"id": "magical-inspiration",
				"title": "Magical Inspiration (Optional)",
				"subtitle": "Level 2",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Allow Bardic Inspiration to improve one damage or healing roll of a "
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
				"id": "bard-college",
				"title": "Bard College",
				"subtitle": "Levels 3, 6, 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass that determines the bard\u2019s specialist identity."
							}
						]
					}
				]
			},
			{
				"id": "expertise",
				"title": "Expertise",
				"subtitle": "Levels 3, 10",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Double proficiency for two skills at each listed level."
							}
						]
					}
				]
			},
			{
				"id": "font-of-inspiration",
				"title": "Font of Inspiration",
				"subtitle": "Level 5",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain Bardic Inspiration on a short or "
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
				"id": "countercharm",
				"title": "Countercharm",
				"subtitle": "Level 6",
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
								"path": "internals.rules.skills.performance",
								"label": "performance"
							},
							{
								"type": "text",
								"text": " to grant nearby allies advantage against charm and fear saves."
							}
						]
					}
				]
			},
			{
				"id": "magical-secrets",
				"title": "Magical Secrets",
				"subtitle": "Levels 10, 14, 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Learn "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " from any class list and treat them as bard "
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
				"id": "superior-inspiration",
				"title": "Superior Inspiration",
				"subtitle": "Level 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Regain one Bardic Inspiration use when "
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
									"page": "internals.classes.bard.subclasses.creation",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.bard.subclasses.eloquence",
									"source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.bard.subclasses.glamour",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.bard.subclasses.lore",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.bard.subclasses.spirits",
									"source": "Van Richten\u2019s Guide to Ravenloft"
								},
								{
									"page": "internals.classes.bard.subclasses.swords",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.bard.subclasses.valor",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.bard.subclasses.whispers",
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
			"title": "Bard Progression"
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
					"id": "bardic-inspiration",
					"title": "Bardic Inspiration"
				},
				{
					"id": "jack-of-all-trades",
					"title": "Jack of All Trades"
				},
				{
					"id": "song-of-rest",
					"title": "Song of Rest"
				},
				{
					"id": "magical-inspiration",
					"title": "Magical Inspiration (Optional)"
				},
				{
					"id": "bard-college",
					"title": "Bard College"
				},
				{
					"id": "expertise",
					"title": "Expertise"
				},
				{
					"id": "font-of-inspiration",
					"title": "Font of Inspiration"
				},
				{
					"id": "countercharm",
					"title": "Countercharm"
				},
				{
					"id": "magical-secrets",
					"title": "Magical Secrets"
				},
				{
					"id": "superior-inspiration",
					"title": "Superior Inspiration"
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
