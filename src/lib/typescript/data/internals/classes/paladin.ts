/*
	Location: src/lib/typescript/data/internals/classes/paladin.ts
	Use: Central Paladin class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/paladin",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Paladin",
	"title": "D&D Portal - Paladin",
	"subTitle": "Character class",
	"description": "A Strength- and Charisma-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone.",
	"descriptions": {
		"short": "A Strength- and Charisma-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone.",
		"medium": "A Strength- and Charisma-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone.",
		"long": [
			[
				{
					"type": "text",
					"text": "A "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.strength",
					"label": "Strength"
				},
				{
					"type": "text",
					"text": "- and "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": "-based armored half caster who combines healing, protective auras, divine smites, and an oath-defined capstone."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Paladin is built around "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.strength",
					"label": "Strength"
				},
				{
					"type": "text",
					"text": " and "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": ", uses a d10 Hit Die, and follows the progression table below for proficiency bonus, class features, and class-specific resources."
				}
			],
			[
				{
					"type": "text",
					"text": "This page collects the Paladin core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
				},
				{
					"type": "link",
					"path": "internals.rules.abilityScores.charisma",
					"label": "Charisma"
				},
				{
					"type": "text",
					"text": "; prepared half-caster progression beginning at 2nd level."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.page"
	},
	"tags": [
		"paladin",
		"class",
		"2014"
	]
});

const subclasses = {
	ancients: createInternalPage({
	"href": "/classes/paladin/ancients",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Ancients Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ancients Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Ancients Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Ancients Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Ancients",
	"title": "D&D Portal - Ancients",
	"subTitle": "Paladin subclass",
	"description": "Nature and fey-themed oath with magic resistance aura.",
	"descriptions": {
		"short": "Nature and fey-themed oath with magic resistance aura.",
		"medium": "Ancients: Nature and fey-themed oath with magic resistance aura.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.skills.nature",
					"label": "Nature"
				},
				{
					"type": "text",
					"text": " and fey-themed oath with magic resistance aura."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"ancients"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-nature-s-wrath-turn-the-faithless",
				"title": "Oath Spells; Channel Divinity: Nature\u2019s Wrath, Turn the Faithless",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", restrain a nearby foe with spectral vines, or turn fey and fiends."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-warding",
				"title": "Aura of Warding",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "You and nearby allies gain resistance to damage from "
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
				"id": "undying-sentinel",
				"title": "Undying Sentinel",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Once per "
							},
							{
								"type": "link",
								"path": "internals.rules.rests.longRest",
								"label": "long rest"
							},
							{
								"type": "text",
								"text": ", remain at 1 hit point instead of dropping to 0 and stop suffering drawbacks from old age."
							}
						]
					}
				]
			},
			{
				"id": "elder-champion",
				"title": "Elder Champion",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Assume a primal form that regenerates "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", speeds paladin spellcasting, and hampers nearby enemies against your "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " and Channel Divinity."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-nature-s-wrath-turn-the-faithless",
				"title": "Oath Spells; Channel Divinity: Nature\u2019s Wrath, Turn the Faithless"
			},
			{
				"id": "aura-of-warding",
				"title": "Aura of Warding"
			},
			{
				"id": "undying-sentinel",
				"title": "Undying Sentinel"
			},
			{
				"id": "elder-champion",
				"title": "Elder Champion"
			}
		]
	}
}),
	conquest: createInternalPage({
	"href": "/classes/paladin/conquest",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Conquest Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Conquest Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Conquest Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Conquest Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Conquest",
	"title": "D&D Portal - Conquest",
	"subTitle": "Paladin subclass",
	"description": "Fear, immobilization, and punishment of frightened enemies.",
	"descriptions": {
		"short": "Fear, immobilization, and punishment of frightened enemies.",
		"medium": "Conquest: Fear, immobilization, and punishment of frightened enemies.",
		"long": [
			[
				{
					"type": "text",
					"text": "Fear, immobilization, and punishment of "
				},
				{
					"type": "link",
					"path": "internals.rules.conditions.frightened",
					"label": "frightened"
				},
				{
					"type": "text",
					"text": " enemies."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"conquest"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-conquering-presence-guided-strike",
				"title": "Oath Spells; Channel Divinity: Conquering Presence, Guided Strike",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", frighten nearby creatures, or add a large bonus to one "
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
				"id": "aura-of-conquest",
				"title": "Aura of Conquest",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "link",
								"path": "internals.rules.conditions.frightened",
								"label": "Frightened"
							},
							{
								"type": "text",
								"text": " enemies in your aura have "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " 0 and take "
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
				"id": "scornful-rebuke",
				"title": "Scornful Rebuke",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Deal "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " damage to creatures that hit you with attacks."
							}
						]
					}
				]
			},
			{
				"id": "invincible-conqueror",
				"title": "Invincible Conqueror",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Temporarily gain resistance to all damage, an extra attack, and improved critical range."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-conquering-presence-guided-strike",
				"title": "Oath Spells; Channel Divinity: Conquering Presence, Guided Strike"
			},
			{
				"id": "aura-of-conquest",
				"title": "Aura of Conquest"
			},
			{
				"id": "scornful-rebuke",
				"title": "Scornful Rebuke"
			},
			{
				"id": "invincible-conqueror",
				"title": "Invincible Conqueror"
			}
		]
	}
}),
	crown: createInternalPage({
	"href": "/classes/paladin/crown",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Crown Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Crown Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Crown Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Crown Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Crown",
	"title": "D&D Portal - Crown",
	"subTitle": "Paladin subclass",
	"description": "Protect allies and force enemies to remain nearby.",
	"descriptions": {
		"short": "Protect allies and force enemies to remain nearby.",
		"medium": "Crown: Protect allies and force enemies to remain nearby.",
		"long": [
			[
				{
					"type": "text",
					"text": "Protect allies and "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.force",
					"label": "force"
				},
				{
					"type": "text",
					"text": " enemies to remain nearby."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"crown"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-champion-challenge-turn-the-tide",
				"title": "Oath Spells; Channel Divinity: Champion Challenge, Turn the Tide",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", keep chosen enemies close, or heal nearby allies below half health."
							}
						]
					}
				]
			},
			{
				"id": "divine-allegiance",
				"title": "Divine Allegiance",
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
								"text": " to take damage in place of a nearby creature."
							}
						]
					}
				]
			},
			{
				"id": "unyielding-spirit",
				"title": "Unyielding Spirit",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain advantage on saves against paralysis and stun."
							}
						]
					}
				]
			},
			{
				"id": "exalted-champion",
				"title": "Exalted Champion",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Temporarily gain resistance to nonmagical weapon damage and grant nearby allies advantage on death and "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.wisdom",
								"label": "Wisdom"
							},
							{
								"type": "text",
								"text": " saves."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-champion-challenge-turn-the-tide",
				"title": "Oath Spells; Channel Divinity: Champion Challenge, Turn the Tide"
			},
			{
				"id": "divine-allegiance",
				"title": "Divine Allegiance"
			},
			{
				"id": "unyielding-spirit",
				"title": "Unyielding Spirit"
			},
			{
				"id": "exalted-champion",
				"title": "Exalted Champion"
			}
		]
	}
}),
	devotion: createInternalPage({
	"href": "/classes/paladin/devotion",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Devotion Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Devotion Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Devotion Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Devotion Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Devotion",
	"title": "D&D Portal - Devotion",
	"subTitle": "Paladin subclass",
	"description": "Classic holy warrior with sacred weapon and charm immunity.",
	"descriptions": {
		"short": "Classic holy warrior with sacred weapon and charm immunity.",
		"medium": "Devotion: Classic holy warrior with sacred weapon and charm immunity.",
		"long": [
			[
				{
					"type": "text",
					"text": "Classic holy warrior with sacred weapon and charm immunity."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"devotion"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-sacred-weapon-turn-the-unholy",
				"title": "Oath Spells; Channel Divinity: Sacred Weapon, Turn the Unholy",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", empower a weapon with "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": "-based accuracy and light, or turn fiends and undead."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-devotion",
				"title": "Aura of Devotion",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "You and nearby allies cannot be "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.charmed",
								"label": "charmed"
							},
							{
								"type": "text",
								"text": " while conscious."
							}
						]
					}
				]
			},
			{
				"id": "purity-of-spirit",
				"title": "Purity of Spirit",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Remain under the effects of Protection from Evil and Good."
							}
						]
					}
				]
			},
			{
				"id": "holy-nimbus",
				"title": "Holy Nimbus",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Emit sunlight that damages hostile creatures and grants advantage on saves against fiend and undead "
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
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-sacred-weapon-turn-the-unholy",
				"title": "Oath Spells; Channel Divinity: Sacred Weapon, Turn the Unholy"
			},
			{
				"id": "aura-of-devotion",
				"title": "Aura of Devotion"
			},
			{
				"id": "purity-of-spirit",
				"title": "Purity of Spirit"
			},
			{
				"id": "holy-nimbus",
				"title": "Holy Nimbus"
			}
		]
	}
}),
	glory: createInternalPage({
	"href": "/classes/paladin/glory",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Glory Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Glory Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Glory Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Glory Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Glory",
	"title": "D&D Portal - Glory",
	"subTitle": "Paladin subclass",
	"description": "Athletic heroism, mobility, and inspiring defense.",
	"descriptions": {
		"short": "Athletic heroism, mobility, and inspiring defense.",
		"medium": "Glory: Athletic heroism, mobility, and inspiring defense.",
		"long": [
			[
				{
					"type": "text",
					"text": "Athletic heroism, mobility, and inspiring defense."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"glory"
	],
	"content": {
		"source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-peerless-athlete-inspiring-smite",
				"title": "Oath Spells; Channel Divinity: Peerless Athlete, Inspiring Smite",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", dramatically improve athletic checks and jumps, or distribute "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " after a smite."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-alacrity",
				"title": "Aura of Alacrity",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase your "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " and the "
							},
							{
								"type": "link",
								"path": "internals.rules.movement.speed",
								"label": "speed"
							},
							{
								"type": "text",
								"text": " of nearby allies."
							}
						]
					}
				]
			},
			{
				"id": "glorious-defense",
				"title": "Glorious Defense",
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
								"text": " to add "
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
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": " against an attack and counterattack if it misses."
							}
						]
					}
				]
			},
			{
				"id": "living-legend",
				"title": "Living Legend",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Temporarily gain advantage on "
							},
							{
								"type": "link",
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " checks, reroll one failed save each turn, and turn one missed attack into a hit each turn."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-peerless-athlete-inspiring-smite",
				"title": "Oath Spells; Channel Divinity: Peerless Athlete, Inspiring Smite"
			},
			{
				"id": "aura-of-alacrity",
				"title": "Aura of Alacrity"
			},
			{
				"id": "glorious-defense",
				"title": "Glorious Defense"
			},
			{
				"id": "living-legend",
				"title": "Living Legend"
			}
		]
	}
}),
	redemption: createInternalPage({
	"href": "/classes/paladin/redemption",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Redemption Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Redemption Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Redemption Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Redemption Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Redemption",
	"title": "D&D Portal - Redemption",
	"subTitle": "Paladin subclass",
	"description": "De-escalation, damage redirection, and nonviolent control.",
	"descriptions": {
		"short": "De-escalation, damage redirection, and nonviolent control.",
		"medium": "Redemption: De-escalation, damage redirection, and nonviolent control.",
		"long": [
			[
				{
					"type": "text",
					"text": "De-escalation, damage redirection, and nonviolent control."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"redemption"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-emissary-of-peace-rebuke-the-violent",
				"title": "Oath Spells; Channel Divinity: Emissary of Peace, Rebuke the Violent",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", greatly improve a "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.persuasion",
								"label": "Persuasion"
							},
							{
								"type": "text",
								"text": " check, or reflect damage from a violent attacker."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-the-guardian",
				"title": "Aura of the Guardian",
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
								"text": " to take damage in place of a nearby creature."
							}
						]
					}
				]
			},
			{
				"id": "protective-spirit",
				"title": "Protective Spirit",
				"subtitle": "15th level",
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
								"text": " at the end of turns while below half health."
							}
						]
					}
				]
			},
			{
				"id": "emissary-of-redemption",
				"title": "Emissary of Redemption",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain resistance to damage from creatures you have not attacked or affected and reflect part of their damage back to them."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-emissary-of-peace-rebuke-the-violent",
				"title": "Oath Spells; Channel Divinity: Emissary of Peace, Rebuke the Violent"
			},
			{
				"id": "aura-of-the-guardian",
				"title": "Aura of the Guardian"
			},
			{
				"id": "protective-spirit",
				"title": "Protective Spirit"
			},
			{
				"id": "emissary-of-redemption",
				"title": "Emissary of Redemption"
			}
		]
	}
}),
	vengeance: createInternalPage({
	"href": "/classes/paladin/vengeance",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Vengeance Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Vengeance Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Vengeance Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Vengeance Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Vengeance",
	"title": "D&D Portal - Vengeance",
	"subTitle": "Paladin subclass",
	"description": "Single-target pursuit, advantage, and relentless mobility.",
	"descriptions": {
		"short": "Single-target pursuit, advantage, and relentless mobility.",
		"medium": "Vengeance: Single-target pursuit, advantage, and relentless mobility.",
		"long": [
			[
				{
					"type": "text",
					"text": "Single-target pursuit, advantage, and relentless mobility."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"vengeance"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-abjure-enemy-vow-of-enmity",
				"title": "Oath Spells; Channel Divinity: Abjure Enemy, Vow of Enmity",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", frighten and slow one enemy, or gain advantage on attacks against a chosen target."
							}
						]
					}
				]
			},
			{
				"id": "relentless-avenger",
				"title": "Relentless Avenger",
				"subtitle": "7th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move after hitting with an opportunity attack without provoking opportunity attacks."
							}
						]
					}
				]
			},
			{
				"id": "soul-of-vengeance",
				"title": "Soul of Vengeance",
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
								"text": " to attack the target of your Vow of Enmity when it attacks."
							}
						]
					}
				]
			},
			{
				"id": "avenging-angel",
				"title": "Avenging Angel",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Assume an angelic form with flight and a fear aura."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-abjure-enemy-vow-of-enmity",
				"title": "Oath Spells; Channel Divinity: Abjure Enemy, Vow of Enmity"
			},
			{
				"id": "relentless-avenger",
				"title": "Relentless Avenger"
			},
			{
				"id": "soul-of-vengeance",
				"title": "Soul of Vengeance"
			},
			{
				"id": "avenging-angel",
				"title": "Avenging Angel"
			}
		]
	}
}),
	watchers: createInternalPage({
	"href": "/classes/paladin/watchers",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Watchers Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Watchers Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Watchers Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Watchers Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Watchers",
	"title": "D&D Portal - Watchers",
	"subTitle": "Paladin subclass",
	"description": "Defend against extraplanar threats and improve initiative.",
	"descriptions": {
		"short": "Defend against extraplanar threats and improve initiative.",
		"medium": "Watchers: Defend against extraplanar threats and improve initiative.",
		"long": [
			[
				{
					"type": "text",
					"text": "Defend against extraplanar threats and improve "
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
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"watchers"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-watcher-s-will-abjure-the-extraplanar",
				"title": "Oath Spells; Channel Divinity: Watcher\u2019s Will, Abjure the Extraplanar",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", grant allies advantage on mental saves, or turn extraplanar creatures."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-the-sentinel",
				"title": "Aura of the Sentinel",
				"subtitle": "7th level",
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
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " for you and nearby allies."
							}
						]
					}
				]
			},
			{
				"id": "vigilant-rebuke",
				"title": "Vigilant Rebuke",
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
								"text": " to deal "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " damage when a nearby creature succeeds on an "
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
								"text": " save."
							}
						]
					}
				]
			},
			{
				"id": "mortal-bulwark",
				"title": "Mortal Bulwark",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain truesight, advantage against extraplanar creatures, and banish such a creature when you hit it."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-watcher-s-will-abjure-the-extraplanar",
				"title": "Oath Spells; Channel Divinity: Watcher\u2019s Will, Abjure the Extraplanar"
			},
			{
				"id": "aura-of-the-sentinel",
				"title": "Aura of the Sentinel"
			},
			{
				"id": "vigilant-rebuke",
				"title": "Vigilant Rebuke"
			},
			{
				"id": "mortal-bulwark",
				"title": "Mortal Bulwark"
			}
		]
	}
}),
	oathbreaker: createInternalPage({
	"href": "/classes/paladin/oathbreaker",
	"img": {
		"href": "/icons/white/classes/paladin.svg",
		"alt": "A stylized Paladin class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Oathbreaker Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Oathbreaker Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Oathbreaker Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-female-s.webp",
					"m": "/images/classes/paladin/card-female-m.webp",
					"l": "/images/classes/paladin/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Oathbreaker Paladin class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/paladin/card-male-s.webp",
					"m": "/images/classes/paladin/card-male-m.webp",
					"l": "/images/classes/paladin/card-male-l.webp"
				}
			}
		}
	},
	"label": "Oathbreaker",
	"title": "D&D Portal - Oathbreaker",
	"subTitle": "Paladin subclass",
	"description": "Necrotic damage, undead control, and fear; a villainous DM option.",
	"descriptions": {
		"short": "Necrotic damage, undead control, and fear; a villainous DM option.",
		"medium": "Oathbreaker: Necrotic damage, undead control, and fear; a villainous DM option.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.necrotic",
					"label": "Necrotic"
				},
				{
					"type": "text",
					"text": " damage, undead control, and fear; a villainous DM option."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.paladin.page"
	},
	"tags": [
		"paladin",
		"subclass",
		"oathbreaker"
	],
	"content": {
		"source": "Dungeon Master\u2019s Guide",
		"featureSections": [
			{
				"id": "oath-spells-channel-divinity-control-undead-dreadful-aspect",
				"title": "Oath Spells; Channel Divinity: Control Undead, Dreadful Aspect",
				"subtitle": "3rd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain always-prepared dark "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", seize control of an undead creature, or frighten nearby creatures."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-hate",
				"title": "Aura of Hate",
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
								"path": "internals.rules.abilityScores.charisma",
								"label": "Charisma"
							},
							{
								"type": "text",
								"text": " to melee weapon damage dealt by you and nearby fiends and undead."
							}
						]
					}
				]
			},
			{
				"id": "supernatural-resistance",
				"title": "Supernatural Resistance",
				"subtitle": "15th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain resistance to nonmagical "
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
			},
			{
				"id": "dread-lord",
				"title": "Dread Lord",
				"subtitle": "20th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create an aura of supernatural darkness that frightens and damages enemies and grants a bonus-action shadow attack."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "oath-spells-channel-divinity-control-undead-dreadful-aspect",
				"title": "Oath Spells; Channel Divinity: Control Undead, Dreadful Aspect"
			},
			{
				"id": "aura-of-hate",
				"title": "Aura of Hate"
			},
			{
				"id": "supernatural-resistance",
				"title": "Supernatural Resistance"
			},
			{
				"id": "dread-lord",
				"title": "Dread Lord"
			}
		]
	}
}),
} as const;

export const paladin = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/paladin",
	"startingEquipment": [
		{
			"label": "Option 1",
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
			"label": "Option 2",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Five "
					},
					{
						"type": "link",
						"path": "internals.rules.equipment.javelins",
						"label": "javelins"
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
			"label": "Option 3",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Priest\u2019s pack"
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
			"label": "Chain mail and holy symbol",
			"items": [
				[
					{
						"type": "text",
						"text": "Chain mail and holy symbol"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Paladin progression",
		"heading": "Paladin Progression",
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
						"label": "Divine Sense",
						"sectionId": "divine-sense"
					},
					{
						"label": "Lay on Hands",
						"sectionId": "lay-on-hands"
					}
				],
				"values": {}
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
						"label": "Divine Smite",
						"sectionId": "divine-smite"
					}
				],
				"values": {}
			},
			{
				"level": 3,
				"proficiencyBonus": 2,
				"features": [
					{
						"label": "Divine Health",
						"sectionId": "divine-health"
					},
					{
						"label": "Sacred Oath",
						"sectionId": "sacred-oath"
					},
					{
						"label": "Harness Divine Power",
						"sectionId": "harness-divine-power",
						"optional": true
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
						"label": "Extra Attack",
						"sectionId": "extra-attack"
					}
				],
				"values": {}
			},
			{
				"level": 6,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Aura of Protection",
						"sectionId": "aura-of-protection"
					}
				],
				"values": {}
			},
			{
				"level": 7,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Oath feature",
						"sectionId": "oath-feature"
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
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {}
			},
			{
				"level": 10,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Aura of Courage",
						"sectionId": "aura-of-courage"
					}
				],
				"values": {}
			},
			{
				"level": 11,
				"proficiencyBonus": 4,
				"features": [
					{
						"label": "Improved Divine Smite",
						"sectionId": "improved-divine-smite"
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
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {}
			},
			{
				"level": 14,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Cleansing Touch",
						"sectionId": "cleansing-touch"
					}
				],
				"values": {}
			},
			{
				"level": 15,
				"proficiencyBonus": 5,
				"features": [
					{
						"label": "Oath feature",
						"sectionId": "oath-feature"
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
						"label": "\u2014",
						"sectionId": ""
					}
				],
				"values": {}
			},
			{
				"level": 18,
				"proficiencyBonus": 6,
				"features": [
					{
						"label": "Aura improvements",
						"sectionId": "aura-improvements"
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
						"label": "Oath feature",
						"sectionId": "oath-feature"
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
									"text": " and "
								},
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
									"path": "internals.rules.abilityScores.strength",
									"label": "Strength"
								},
								{
									"type": "text",
									"text": " 13 and "
								},
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
									"text": "; prepared half-caster progression beginning at 2nd level."
								}
							]
						},
						{
							"label": "Suggested tags",
							"value": [
								{
									"type": "text",
									"text": "tank, melee, divine, support, burst-damage"
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
									"path": "internals.rules.skills.intimidation",
									"label": "Intimidation"
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
							"text": "As a paladin, you gain the following class features."
						}
					]
				}
			]
		},
		"featureSections": [
			{
				"id": "divine-sense",
				"title": "Divine Sense",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Detect nearby celestials, fiends, undead, and consecrated or desecrated places a limited number of times per "
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
				"id": "lay-on-hands",
				"title": "Lay on Hands",
				"subtitle": "Level 1",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Spend a healing pool equal to five times paladin level to restore "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " or cure disease and "
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
								"text": "Choose a paladin-compatible persistent combat style."
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
								"text": "Prepare paladin "
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
								"text": " using the half-caster slot table and a holy symbol as a focus."
							}
						]
					}
				]
			},
			{
				"id": "divine-smite",
				"title": "Divine Smite",
				"subtitle": "Level 2",
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
								"text": " slot after a melee hit to add "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " damage, with an extra die against fiends and undead."
							}
						]
					}
				]
			},
			{
				"id": "divine-health",
				"title": "Divine Health",
				"subtitle": "Level 3",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Become immune to disease."
							}
						]
					}
				]
			},
			{
				"id": "sacred-oath",
				"title": "Sacred Oath",
				"subtitle": "Levels 3, 7, 15, 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a subclass that grants oath "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", Channel Divinity options, and an oath capstone."
							}
						]
					}
				]
			},
			{
				"id": "harness-divine-power",
				"title": "Harness Divine Power (Optional)",
				"subtitle": "Level 3",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Exchange Channel Divinity for a limited-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slot, with uses increasing by level."
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
				"id": "aura-of-protection",
				"title": "Aura of Protection",
				"subtitle": "Levels 6, range improves at 18",
				"optional": false,
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
								"text": " modifier to "
							},
							{
								"type": "link",
								"path": "internals.rules.d20Tests.savingThrow",
								"label": "saving throws"
							},
							{
								"type": "text",
								"text": " for the paladin and nearby allies."
							}
						]
					}
				]
			},
			{
				"id": "aura-of-courage",
				"title": "Aura of Courage",
				"subtitle": "Levels 10, range improves at 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Prevent fear for the paladin and nearby allies while conscious."
							}
						]
					}
				]
			},
			{
				"id": "improved-divine-smite",
				"title": "Improved Divine Smite",
				"subtitle": "Level 11",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Every melee weapon hit deals an additional 1d8 "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
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
				"id": "cleansing-touch",
				"title": "Cleansing Touch",
				"subtitle": "Level 14",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "End one "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " on yourself or a willing touched creature a limited number of times per "
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
									"page": "internals.classes.paladin.subclasses.ancients",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.paladin.subclasses.conquest",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.paladin.subclasses.crown",
									"source": "Sword Coast Adventurer\u2019s Guide"
								},
								{
									"page": "internals.classes.paladin.subclasses.devotion",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.paladin.subclasses.glory",
									"source": "Mythic Odysseys of Theros; Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.paladin.subclasses.redemption",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.paladin.subclasses.vengeance",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.paladin.subclasses.watchers",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.paladin.subclasses.oathbreaker",
									"source": "Dungeon Master\u2019s Guide"
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
			"title": "Paladin Progression"
		},
		{
			"id": "class-features",
			"title": "Class Features",
			"children": [
				{
					"id": "divine-sense",
					"title": "Divine Sense"
				},
				{
					"id": "lay-on-hands",
					"title": "Lay on Hands"
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
					"id": "divine-smite",
					"title": "Divine Smite"
				},
				{
					"id": "divine-health",
					"title": "Divine Health"
				},
				{
					"id": "sacred-oath",
					"title": "Sacred Oath"
				},
				{
					"id": "harness-divine-power",
					"title": "Harness Divine Power (Optional)"
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
					"id": "aura-of-protection",
					"title": "Aura of Protection"
				},
				{
					"id": "aura-of-courage",
					"title": "Aura of Courage"
				},
				{
					"id": "improved-divine-smite",
					"title": "Improved Divine Smite"
				},
				{
					"id": "cleansing-touch",
					"title": "Cleansing Touch"
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
