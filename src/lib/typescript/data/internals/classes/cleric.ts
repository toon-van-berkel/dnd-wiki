/*
	Location: src/lib/typescript/data/internals/classes/cleric.ts
	Use: Central Cleric class and subclass content data.
*/

import { createInternalPage } from '../_helpers_';

const page = createInternalPage({
	"href": "/classes/cleric",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Cleric",
	"title": "D&D Portal - Cleric",
	"subTitle": "Character class",
	"description": "A Wisdom-based prepared divine full caster whose domain supplies extra spells, armor or weapon options, and themed Channel Divinity powers.",
	"descriptions": {
		"short": "A Wisdom-based prepared divine full caster whose domain supplies extra spells, armor or weapon options, and themed Channel Divinity powers.",
		"medium": "A Wisdom-based prepared divine full caster whose domain supplies extra spells, armor or weapon options, and themed Channel Divinity powers.",
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
					"text": "-based prepared divine full caster whose domain supplies extra "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.spells",
					"label": "spells"
				},
				{
					"type": "text",
					"text": ", armor or weapon options, and themed Channel Divinity powers."
				}
			],
			[
				{
					"type": "text",
					"text": "Mechanically, the Cleric is built around "
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
					"text": "This page collects the Cleric core traits, starting equipment, level progression, class feature summaries, and published subclasses in one place. Spellcasting note: "
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
		"cleric",
		"class",
		"2014"
	]
});

const subclasses = {
	arcana: createInternalPage({
	"href": "/classes/cleric/arcana",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Arcana Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Arcana Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Arcana Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Arcana Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Arcana",
	"title": "D&D Portal - Arcana",
	"subTitle": "Cleric subclass",
	"description": "Blend cleric magic with wizard cantrips and arcane dispelling.",
	"descriptions": {
		"short": "Blend cleric magic with wizard cantrips and arcane dispelling.",
		"medium": "Arcana: Blend cleric magic with wizard cantrips and arcane dispelling.",
		"long": [
			[
				{
					"type": "text",
					"text": "Blend cleric magic with wizard "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.cantrips",
					"label": "cantrips"
				},
				{
					"type": "text",
					"text": " and arcane dispelling."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"arcana"
	],
	"content": {
		"source": "Sword Coast Adventurer\u2019s Guide",
		"featureSections": [
			{
				"id": "domain-spells-arcane-initiate",
				"title": "Domain Spells; Arcane Initiate",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare the domain "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " list, gain "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.arcana",
								"label": "Arcana"
							},
							{
								"type": "text",
								"text": " proficiency, and learn two wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
							},
							{
								"type": "text",
								"text": " that count as cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
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
				"id": "channel-divinity-arcane-abjuration",
				"title": "Channel Divinity: Arcane Abjuration",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Turn a celestial, elemental, fey, or fiend and eventually banish weaker affected creatures."
							}
						]
					}
				]
			},
			{
				"id": "spell-breaker",
				"title": "Spell Breaker",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When a healing "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " restores "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", also end one "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " of an eligible level affecting the target."
							}
						]
					}
				]
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting",
				"subtitle": "8th level",
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
								"text": " to the damage of cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
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
				"id": "arcane-mastery",
				"title": "Arcane Mastery",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add one wizard "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " of 6th, 7th, 8th, and 9th level to your domain "
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
				"id": "domain-spells-arcane-initiate",
				"title": "Domain Spells; Arcane Initiate"
			},
			{
				"id": "channel-divinity-arcane-abjuration",
				"title": "Channel Divinity: Arcane Abjuration"
			},
			{
				"id": "spell-breaker",
				"title": "Spell Breaker"
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting"
			},
			{
				"id": "arcane-mastery",
				"title": "Arcane Mastery"
			}
		]
	}
}),
	death: createInternalPage({
	"href": "/classes/cleric/death-domain",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Death Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Death Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Death Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Death Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Death",
	"title": "D&D Portal - Death",
	"subTitle": "Cleric subclass",
	"description": "Necrotic damage, martial weapons, and death-focused Channel Divinity.",
	"descriptions": {
		"short": "Necrotic damage, martial weapons, and death-focused Channel Divinity.",
		"medium": "Death: Necrotic damage, martial weapons, and death-focused Channel Divinity.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.necrotic",
					"label": "Necrotic"
				},
				{
					"type": "text",
					"text": " damage, "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.martialWeapons",
					"label": "martial weapons"
				},
				{
					"type": "text",
					"text": ", and death-focused Channel Divinity."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"death"
	],
	"content": {
		"source": "Dungeon Master\u2019s Guide",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiency-reaper",
				"title": "Domain Spells; Bonus Proficiency; Reaper",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare death-themed domain "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain martial-weapon proficiency, and learn a necromancy "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": " that can sometimes target two adjacent creatures."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-touch-of-death",
				"title": "Channel Divinity: Touch of Death",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add substantial "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage to a melee hit."
							}
						]
					}
				]
			},
			{
				"id": "inescapable-destruction",
				"title": "Inescapable Destruction",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage ignores resistance."
							}
						]
					}
				]
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.necrotic",
								"label": "necrotic"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "improved-reaper",
				"title": "Improved Reaper",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Single-target necromancy "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": " of lower level can affect two adjacent creatures."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-bonus-proficiency-reaper",
				"title": "Domain Spells; Bonus Proficiency; Reaper"
			},
			{
				"id": "channel-divinity-touch-of-death",
				"title": "Channel Divinity: Touch of Death"
			},
			{
				"id": "inescapable-destruction",
				"title": "Inescapable Destruction"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "improved-reaper",
				"title": "Improved Reaper"
			}
		]
	}
}),
	forge: createInternalPage({
	"href": "/classes/cleric/forge",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Forge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Forge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Forge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Forge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Forge",
	"title": "D&D Portal - Forge",
	"subTitle": "Cleric subclass",
	"description": "Bless equipment, gain heavy armor, and resist fire.",
	"descriptions": {
		"short": "Bless equipment, gain heavy armor, and resist fire.",
		"medium": "Forge: Bless equipment, gain heavy armor, and resist fire.",
		"long": [
			[
				{
					"type": "text",
					"text": "Bless equipment, gain "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.heavyArmor",
					"label": "heavy armor"
				},
				{
					"type": "text",
					"text": ", and resist "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.fire",
					"label": "fire"
				},
				{
					"type": "text",
					"text": "."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"forge"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiency-blessing-of-the-forge",
				"title": "Domain Spells; Bonus Proficiency; Blessing of the Forge",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare forge-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
							},
							{
								"type": "text",
								"text": " and smith\u2019s-tools proficiency, and temporarily make one weapon or armor item magical with a +1 bonus."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-artisan-s-blessing",
				"title": "Channel Divinity: Artisan\u2019s Blessing",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Transform metal of equal value into a nonmagical metal object through a one-hour ritual."
							}
						]
					}
				]
			},
			{
				"id": "soul-of-the-forge",
				"title": "Soul of the Forge",
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
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": " resistance and an "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.armorClass",
								"label": "Armor Class"
							},
							{
								"type": "text",
								"text": " bonus while wearing "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
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
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "saint-of-forge-and-fire",
				"title": "Saint of Forge and Fire",
				"subtitle": "17th level",
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
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": " and resistant to nonmagical "
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
								"text": " damage in "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
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
				"id": "domain-spells-bonus-proficiency-blessing-of-the-forge",
				"title": "Domain Spells; Bonus Proficiency; Blessing of the Forge"
			},
			{
				"id": "channel-divinity-artisan-s-blessing",
				"title": "Channel Divinity: Artisan\u2019s Blessing"
			},
			{
				"id": "soul-of-the-forge",
				"title": "Soul of the Forge"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "saint-of-forge-and-fire",
				"title": "Saint of Forge and Fire"
			}
		]
	}
}),
	grave: createInternalPage({
	"href": "/classes/cleric/grave",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Grave Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Grave Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Grave Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Grave Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Grave",
	"title": "D&D Portal - Grave",
	"subTitle": "Cleric subclass",
	"description": "Protect the dying, expose vulnerability, and suppress critical hits.",
	"descriptions": {
		"short": "Protect the dying, expose vulnerability, and suppress critical hits.",
		"medium": "Grave: Protect the dying, expose vulnerability, and suppress critical hits.",
		"long": [
			[
				{
					"type": "text",
					"text": "Protect the dying, expose vulnerability, and suppress "
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
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"grave"
	],
	"content": {
		"source": "Xanathar\u2019s Guide to Everything",
		"featureSections": [
			{
				"id": "domain-spells-circle-of-mortality-eyes-of-the-grave",
				"title": "Domain Spells; Circle of Mortality; Eyes of the Grave",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare grave-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", maximize healing dice for creatures at 0 "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": ", gain Spare the Dying at range, and sense nearby undead."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-path-to-the-grave",
				"title": "Channel Divinity: Path to the Grave",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Curse a creature so the next attack that hits it deals vulnerability-level damage."
							}
						]
					}
				]
			},
			{
				"id": "sentinel-at-death-s-door",
				"title": "Sentinel at Death\u2019s Door",
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
								"text": " to turn a nearby "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.criticalHit",
								"label": "critical hit"
							},
							{
								"type": "text",
								"text": " into a normal hit."
							}
						]
					}
				]
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting",
				"subtitle": "8th level",
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
								"text": " to the damage of cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
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
				"id": "keeper-of-souls",
				"title": "Keeper of Souls",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "When an enemy dies nearby, restore "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " to yourself or an ally, once per turn."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-circle-of-mortality-eyes-of-the-grave",
				"title": "Domain Spells; Circle of Mortality; Eyes of the Grave"
			},
			{
				"id": "channel-divinity-path-to-the-grave",
				"title": "Channel Divinity: Path to the Grave"
			},
			{
				"id": "sentinel-at-death-s-door",
				"title": "Sentinel at Death\u2019s Door"
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting"
			},
			{
				"id": "keeper-of-souls",
				"title": "Keeper of Souls"
			}
		]
	}
}),
	knowledge: createInternalPage({
	"href": "/classes/cleric/knowledge",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Knowledge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Knowledge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Knowledge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Knowledge Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Knowledge",
	"title": "D&D Portal - Knowledge",
	"subTitle": "Cleric subclass",
	"description": "Expertise-like knowledge, languages, divination, and mental control.",
	"descriptions": {
		"short": "Expertise-like knowledge, languages, divination, and mental control.",
		"medium": "Knowledge: Expertise-like knowledge, languages, divination, and mental control.",
		"long": [
			[
				{
					"type": "text",
					"text": "Expertise-like knowledge, languages, divination, and mental control."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"knowledge"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-blessings-of-knowledge",
				"title": "Domain Spells; Blessings of Knowledge",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare knowledge-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", learn two languages, and gain two knowledge proficiencies with doubled proficiency bonus."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-knowledge-of-the-ages",
				"title": "Channel Divinity: Knowledge of the Ages",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Temporarily gain proficiency with one skill or tool."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-read-thoughts",
				"title": "Channel Divinity: Read Thoughts",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Read a creature\u2019s surface thoughts and potentially cast Suggestion on it without a "
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
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting",
				"subtitle": "8th level",
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
								"text": " to the damage of cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
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
				"id": "visions-of-the-past",
				"title": "Visions of the Past",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Read recent impressions from an object or location through prolonged meditation."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-blessings-of-knowledge",
				"title": "Domain Spells; Blessings of Knowledge"
			},
			{
				"id": "channel-divinity-knowledge-of-the-ages",
				"title": "Channel Divinity: Knowledge of the Ages"
			},
			{
				"id": "channel-divinity-read-thoughts",
				"title": "Channel Divinity: Read Thoughts"
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting"
			},
			{
				"id": "visions-of-the-past",
				"title": "Visions of the Past"
			}
		]
	}
}),
	life: createInternalPage({
	"href": "/classes/cleric/life-domain",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Life Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Life Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Life Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Life Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Life",
	"title": "D&D Portal - Life",
	"subTitle": "Cleric subclass",
	"description": "Maximize healing throughput and gain heavy armor.",
	"descriptions": {
		"short": "Maximize healing throughput and gain heavy armor.",
		"medium": "Life: Maximize healing throughput and gain heavy armor.",
		"long": [
			[
				{
					"type": "text",
					"text": "Maximize healing throughput and gain "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.heavyArmor",
					"label": "heavy armor"
				},
				{
					"type": "text",
					"text": "."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"life"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiency-disciple-of-life",
				"title": "Domain Spells; Bonus Proficiency; Disciple of Life",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare healing and protection "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
							},
							{
								"type": "text",
								"text": ", and add extra "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " whenever you restore "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
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
								"text": "."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-preserve-life",
				"title": "Channel Divinity: Preserve Life",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Distribute a pool of healing among creatures below half their hit point maximum."
							}
						]
					}
				]
			},
			{
				"id": "blessed-healer",
				"title": "Blessed Healer",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Healing another creature with a "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " also restores "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "hit points"
							},
							{
								"type": "text",
								"text": " to you."
							}
						]
					}
				]
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "supreme-healing",
				"title": "Supreme Healing",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use the maximum result instead of rolling dice for healing "
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
				"id": "domain-spells-bonus-proficiency-disciple-of-life",
				"title": "Domain Spells; Bonus Proficiency; Disciple of Life"
			},
			{
				"id": "channel-divinity-preserve-life",
				"title": "Channel Divinity: Preserve Life"
			},
			{
				"id": "blessed-healer",
				"title": "Blessed Healer"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "supreme-healing",
				"title": "Supreme Healing"
			}
		]
	}
}),
	light: createInternalPage({
	"href": "/classes/cleric/light",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Light Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Light Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Light Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Light Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Light",
	"title": "D&D Portal - Light",
	"subTitle": "Cleric subclass",
	"description": "Radiant and fire magic, defensive flares, and daylight control.",
	"descriptions": {
		"short": "Radiant and fire magic, defensive flares, and daylight control.",
		"medium": "Light: Radiant and fire magic, defensive flares, and daylight control.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.radiant",
					"label": "Radiant"
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
					"text": " magic, defensive flares, and daylight control."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"light"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-bonus-cantrip-warding-flare",
				"title": "Domain Spells; Bonus Cantrip; Warding Flare",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare light and "
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
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", learn Light, and impose disadvantage on a nearby attacker as a "
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
				"id": "channel-divinity-radiance-of-the-dawn",
				"title": "Channel Divinity: Radiance of the Dawn",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Dispel magical darkness and deal "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " damage to chosen hostile creatures nearby."
							}
						]
					}
				]
			},
			{
				"id": "improved-flare",
				"title": "Improved Flare",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Use Warding Flare to protect nearby creatures, not only yourself."
							}
						]
					}
				]
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting",
				"subtitle": "8th level",
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
								"text": " to the damage of cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
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
				"id": "corona-of-light",
				"title": "Corona of Light",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create sunlight that gives enemies disadvantage on saves against your "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": " and "
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
				"id": "domain-spells-bonus-cantrip-warding-flare",
				"title": "Domain Spells; Bonus Cantrip; Warding Flare"
			},
			{
				"id": "channel-divinity-radiance-of-the-dawn",
				"title": "Channel Divinity: Radiance of the Dawn"
			},
			{
				"id": "improved-flare",
				"title": "Improved Flare"
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting"
			},
			{
				"id": "corona-of-light",
				"title": "Corona of Light"
			}
		]
	}
}),
	nature: createInternalPage({
	"href": "/classes/cleric/nature",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Nature Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Nature Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Nature Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Nature Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Nature",
	"title": "D&D Portal - Nature",
	"subTitle": "Cleric subclass",
	"description": "Druid cantrip access, heavy armor, and elemental protection.",
	"descriptions": {
		"short": "Druid cantrip access, heavy armor, and elemental protection.",
		"medium": "Nature: Druid cantrip access, heavy armor, and elemental protection.",
		"long": [
			[
				{
					"type": "text",
					"text": "Druid "
				},
				{
					"type": "link",
					"path": "internals.rules.spellcasting.cantrips",
					"label": "cantrip"
				},
				{
					"type": "text",
					"text": " access, "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.heavyArmor",
					"label": "heavy armor"
				},
				{
					"type": "text",
					"text": ", and elemental protection."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"nature"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-acolyte-of-nature-bonus-proficiency",
				"title": "Domain Spells; Acolyte of Nature; Bonus Proficiency",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.nature",
								"label": "nature"
							},
							{
								"type": "text",
								"text": "-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", learn a druid "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrip"
							},
							{
								"type": "text",
								"text": ", gain a "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.nature",
								"label": "nature"
							},
							{
								"type": "text",
								"text": " skill proficiency, and gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
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
				"id": "channel-divinity-charm-animals-and-plants",
				"title": "Channel Divinity: Charm Animals and Plants",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Charm nearby beasts and plants for a limited duration."
							}
						]
					}
				]
			},
			{
				"id": "dampen-elements",
				"title": "Dampen Elements",
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
								"text": " to grant resistance against "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.acid",
								"label": "acid"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.cold",
								"label": "cold"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.fire",
								"label": "fire"
							},
							{
								"type": "text",
								"text": ", "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": ", or "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
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
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add selectable elemental damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "master-of-nature",
				"title": "Master of Nature",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Command beasts and plants currently "
							},
							{
								"type": "link",
								"path": "internals.rules.conditions.charmed",
								"label": "charmed"
							},
							{
								"type": "text",
								"text": " by your Channel Divinity."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-acolyte-of-nature-bonus-proficiency",
				"title": "Domain Spells; Acolyte of Nature; Bonus Proficiency"
			},
			{
				"id": "channel-divinity-charm-animals-and-plants",
				"title": "Channel Divinity: Charm Animals and Plants"
			},
			{
				"id": "dampen-elements",
				"title": "Dampen Elements"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "master-of-nature",
				"title": "Master of Nature"
			}
		]
	}
}),
	order: createInternalPage({
	"href": "/classes/cleric/order",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Order Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Order Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Order Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Order Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Order",
	"title": "D&D Portal - Order",
	"subTitle": "Cleric subclass",
	"description": "Command allies to attack and impose order through enchantment.",
	"descriptions": {
		"short": "Command allies to attack and impose order through enchantment.",
		"medium": "Order: Command allies to attack and impose order through enchantment.",
		"long": [
			[
				{
					"type": "text",
					"text": "Command allies to attack and impose order through enchantment."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"order"
	],
	"content": {
		"source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiencies-voice-of-authority",
				"title": "Domain Spells; Bonus Proficiencies; Voice of Authority",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare command and control "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
							},
							{
								"type": "text",
								"text": " and social proficiency, and let an ally make a "
							},
							{
								"type": "link",
								"path": "internals.rules.actions.reaction",
								"label": "reaction"
							},
							{
								"type": "text",
								"text": " attack when you target it with a "
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
				"id": "channel-divinity-order-s-demand",
				"title": "Channel Divinity: Order\u2019s Demand",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Charm nearby creatures and "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.force",
								"label": "force"
							},
							{
								"type": "text",
								"text": " them to drop held items."
							}
						]
					}
				]
			},
			{
				"id": "embodiment-of-the-law",
				"title": "Embodiment of the Law",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Cast an enchantment "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
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
								"text": " a limited number of times."
							}
						]
					}
				]
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.psychic",
								"label": "psychic"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "order-s-wrath",
				"title": "Order\u2019s Wrath",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Mark a creature hit by Divine Strike so an ally\u2019s next weapon hit deals extra "
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
				"id": "domain-spells-bonus-proficiencies-voice-of-authority",
				"title": "Domain Spells; Bonus Proficiencies; Voice of Authority"
			},
			{
				"id": "channel-divinity-order-s-demand",
				"title": "Channel Divinity: Order\u2019s Demand"
			},
			{
				"id": "embodiment-of-the-law",
				"title": "Embodiment of the Law"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "order-s-wrath",
				"title": "Order\u2019s Wrath"
			}
		]
	}
}),
	peace: createInternalPage({
	"href": "/classes/cleric/peace",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Peace Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Peace Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Peace Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Peace Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Peace",
	"title": "D&D Portal - Peace",
	"subTitle": "Cleric subclass",
	"description": "Bond allies, improve rolls, and share damage through protective movement.",
	"descriptions": {
		"short": "Bond allies, improve rolls, and share damage through protective movement.",
		"medium": "Peace: Bond allies, improve rolls, and share damage through protective movement.",
		"long": [
			[
				{
					"type": "text",
					"text": "Bond allies, improve rolls, and share damage through protective movement."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"peace"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "domain-spells-implement-of-peace-emboldening-bond",
				"title": "Domain Spells; Implement of Peace; Emboldening Bond",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare peace-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain a social skill, and bond allies so they can add a d4 to selected attacks, checks, and saves."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-balm-of-peace",
				"title": "Channel Divinity: Balm of Peace",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Move without provoking opportunity attacks and heal creatures you pass near."
							}
						]
					}
				]
			},
			{
				"id": "protective-bond",
				"title": "Protective Bond",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Bonded creatures can teleport to one another and take damage in each other\u2019s place."
							}
						]
					}
				]
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting",
				"subtitle": "8th level",
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
								"text": " to the damage of cleric "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.cantrips",
								"label": "cantrips"
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
				"id": "expansive-bond",
				"title": "Expansive Bond",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Increase bond range and grant resistance when a bonded creature intercepts damage."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-implement-of-peace-emboldening-bond",
				"title": "Domain Spells; Implement of Peace; Emboldening Bond"
			},
			{
				"id": "channel-divinity-balm-of-peace",
				"title": "Channel Divinity: Balm of Peace"
			},
			{
				"id": "protective-bond",
				"title": "Protective Bond"
			},
			{
				"id": "potent-spellcasting",
				"title": "Potent Spellcasting"
			},
			{
				"id": "expansive-bond",
				"title": "Expansive Bond"
			}
		]
	}
}),
	tempest: createInternalPage({
	"href": "/classes/cleric/tempest",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Tempest Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Tempest Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Tempest Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Tempest Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Tempest",
	"title": "D&D Portal - Tempest",
	"subTitle": "Cleric subclass",
	"description": "Thunder, lightning, heavy armor, and maximized storm damage.",
	"descriptions": {
		"short": "Thunder, lightning, heavy armor, and maximized storm damage.",
		"medium": "Tempest: Thunder, lightning, heavy armor, and maximized storm damage.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.damageTypes.thunder",
					"label": "Thunder"
				},
				{
					"type": "text",
					"text": ", "
				},
				{
					"type": "link",
					"path": "internals.rules.damageTypes.lightning",
					"label": "lightning"
				},
				{
					"type": "text",
					"text": ", "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.heavyArmor",
					"label": "heavy armor"
				},
				{
					"type": "text",
					"text": ", and maximized storm damage."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"tempest"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiencies-wrath-of-the-storm",
				"title": "Domain Spells; Bonus Proficiencies; Wrath of the Storm",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare storm "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.martialWeapons",
								"label": "martial weapons"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
							},
							{
								"type": "text",
								"text": ", and retaliate against nearby attackers with "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
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
				"id": "channel-divinity-destructive-wrath",
				"title": "Channel Divinity: Destructive Wrath",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Deal maximum damage instead of rolling for "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " or "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
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
				"id": "thunderbolt-strike",
				"title": "Thunderbolt Strike",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Push Large or smaller creatures when you deal "
							},
							{
								"type": "link",
								"path": "internals.rules.damageTypes.lightning",
								"label": "lightning"
							},
							{
								"type": "text",
								"text": " damage to them."
							}
						]
					}
				]
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.thunder",
								"label": "thunder"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "stormborn",
				"title": "Stormborn",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain a "
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
								"text": " while outdoors and not underground."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-bonus-proficiencies-wrath-of-the-storm",
				"title": "Domain Spells; Bonus Proficiencies; Wrath of the Storm"
			},
			{
				"id": "channel-divinity-destructive-wrath",
				"title": "Channel Divinity: Destructive Wrath"
			},
			{
				"id": "thunderbolt-strike",
				"title": "Thunderbolt Strike"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "stormborn",
				"title": "Stormborn"
			}
		]
	}
}),
	trickery: createInternalPage({
	"href": "/classes/cleric/trickery",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Trickery Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Trickery Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Trickery Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Trickery Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Trickery",
	"title": "D&D Portal - Trickery",
	"subTitle": "Cleric subclass",
	"description": "Illusory duplicates, stealth support, and deception magic.",
	"descriptions": {
		"short": "Illusory duplicates, stealth support, and deception magic.",
		"medium": "Trickery: Illusory duplicates, stealth support, and deception magic.",
		"long": [
			[
				{
					"type": "text",
					"text": "Illusory duplicates, "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.stealth",
					"label": "stealth"
				},
				{
					"type": "text",
					"text": " support, and "
				},
				{
					"type": "link",
					"path": "internals.rules.skills.deception",
					"label": "deception"
				},
				{
					"type": "text",
					"text": " magic."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"trickery"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-blessing-of-the-trickster",
				"title": "Domain Spells; Blessing of the Trickster",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.deception",
								"label": "deception"
							},
							{
								"type": "text",
								"text": " and mobility "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", and grant another creature advantage on "
							},
							{
								"type": "link",
								"path": "internals.rules.skills.stealth",
								"label": "Stealth"
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
				"id": "channel-divinity-invoke-duplicity",
				"title": "Channel Divinity: Invoke Duplicity",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create an illusory duplicate that can move, grant attack advantage, and serve as the origin of your "
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
				"id": "channel-divinity-cloak-of-shadows",
				"title": "Channel Divinity: Cloak of Shadows",
				"subtitle": "6th level",
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
								"text": " until the end of your next turn or until you attack or cast a "
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
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.poison",
								"label": "poison"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "improved-duplicity",
				"title": "Improved Duplicity",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create multiple duplicates with Invoke Duplicity."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-blessing-of-the-trickster",
				"title": "Domain Spells; Blessing of the Trickster"
			},
			{
				"id": "channel-divinity-invoke-duplicity",
				"title": "Channel Divinity: Invoke Duplicity"
			},
			{
				"id": "channel-divinity-cloak-of-shadows",
				"title": "Channel Divinity: Cloak of Shadows"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "improved-duplicity",
				"title": "Improved Duplicity"
			}
		]
	}
}),
	twilight: createInternalPage({
	"href": "/classes/cleric/twilight",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female Twilight Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Twilight Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female Twilight Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male Twilight Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "Twilight",
	"title": "D&D Portal - Twilight",
	"subTitle": "Cleric subclass",
	"description": "Exceptional darkvision, initiative aid, and a protective twilight aura.",
	"descriptions": {
		"short": "Exceptional darkvision, initiative aid, and a protective twilight aura.",
		"medium": "Twilight: Exceptional darkvision, initiative aid, and a protective twilight aura.",
		"long": [
			[
				{
					"type": "text",
					"text": "Exceptional darkvision, "
				},
				{
					"type": "link",
					"path": "internals.rules.combat.initiativeRoll",
					"label": "initiative"
				},
				{
					"type": "text",
					"text": " aid, and a protective twilight aura."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"twilight"
	],
	"content": {
		"source": "Tasha\u2019s Cauldron of Everything",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiencies-eyes-of-night-vigilant-blessing",
				"title": "Domain Spells; Bonus Proficiencies; Eyes of Night; Vigilant Blessing",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare twilight-themed "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.martialWeapons",
								"label": "martial weapons"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
							},
							{
								"type": "text",
								"text": ", gain extreme darkvision that can be shared, and grant "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.initiativeRoll",
								"label": "initiative"
							},
							{
								"type": "text",
								"text": " advantage."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-twilight-sanctuary",
				"title": "Channel Divinity: Twilight Sanctuary",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Create a moving aura that grants "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.hitPoints",
								"label": "temporary hit points"
							},
							{
								"type": "text",
								"text": " or ends charm and fear on allies."
							}
						]
					}
				]
			},
			{
				"id": "steps-of-night",
				"title": "Steps of Night",
				"subtitle": "6th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Gain temporary flight in dim light or darkness."
							}
						]
					}
				]
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
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
								"path": "internals.rules.damageTypes.radiant",
								"label": "radiant"
							},
							{
								"type": "text",
								"text": " damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "twilight-shroud",
				"title": "Twilight Shroud",
				"subtitle": "17th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Creatures inside Twilight Sanctuary gain half cover."
							}
						]
					}
				]
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-bonus-proficiencies-eyes-of-night-vigilant-blessing",
				"title": "Domain Spells; Bonus Proficiencies; Eyes of Night; Vigilant Blessing"
			},
			{
				"id": "channel-divinity-twilight-sanctuary",
				"title": "Channel Divinity: Twilight Sanctuary"
			},
			{
				"id": "steps-of-night",
				"title": "Steps of Night"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "twilight-shroud",
				"title": "Twilight Shroud"
			}
		]
	}
}),
	war: createInternalPage({
	"href": "/classes/cleric/war",
	"img": {
		"href": "/icons/white/classes/cleric.svg",
		"alt": "A stylized Cleric class icon."
	},
	"images": {
		"card": {
			"female": {
				"alt": "A female War Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male War Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		},
		"header": {
			"female": {
				"alt": "A female War Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-female-s.webp",
					"m": "/images/classes/cleric/card-female-m.webp",
					"l": "/images/classes/cleric/card-female-l.webp"
				}
			},
			"male": {
				"alt": "A male War Cleric class portrait.",
				"position": "right top",
				"sources": {
					"s": "/images/classes/cleric/card-male-s.webp",
					"m": "/images/classes/cleric/card-male-m.webp",
					"l": "/images/classes/cleric/card-male-l.webp"
				}
			}
		}
	},
	"label": "War",
	"title": "D&D Portal - War",
	"subTitle": "Cleric subclass",
	"description": "Martial weapons, heavy armor, bonus attacks, and accuracy boosts.",
	"descriptions": {
		"short": "Martial weapons, heavy armor, bonus attacks, and accuracy boosts.",
		"medium": "War: Martial weapons, heavy armor, bonus attacks, and accuracy boosts.",
		"long": [
			[
				{
					"type": "link",
					"path": "internals.rules.equipment.martialWeapons",
					"label": "Martial weapons"
				},
				{
					"type": "text",
					"text": ", "
				},
				{
					"type": "link",
					"path": "internals.rules.equipment.heavyArmor",
					"label": "heavy armor"
				},
				{
					"type": "text",
					"text": ", bonus attacks, and accuracy boosts."
				}
			]
		]
	},
	"navigation": {
		"parent": "internals.classes.cleric.page"
	},
	"tags": [
		"cleric",
		"subclass",
		"war"
	],
	"content": {
		"source": "Player\u2019s Handbook",
		"featureSections": [
			{
				"id": "domain-spells-bonus-proficiencies-war-priest",
				"title": "Domain Spells; Bonus Proficiencies; War Priest",
				"subtitle": "1st level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Always prepare battle "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", gain "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.martialWeapons",
								"label": "martial weapons"
							},
							{
								"type": "text",
								"text": " and "
							},
							{
								"type": "link",
								"path": "internals.rules.equipment.heavyArmor",
								"label": "heavy armor"
							},
							{
								"type": "text",
								"text": ", and make limited bonus-action weapon attacks."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity-guided-strike",
				"title": "Channel Divinity: Guided Strike",
				"subtitle": "2nd level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add a large bonus to one "
							},
							{
								"type": "link",
								"path": "internals.rules.combat.attackRoll",
								"label": "attack roll"
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
				"id": "channel-divinity-war-god-s-blessing",
				"title": "Channel Divinity: War God\u2019s Blessing",
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
								"text": " to add the same attack bonus to a nearby creature\u2019s roll."
							}
						]
					}
				]
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike",
				"subtitle": "8th level",
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Add weapon-type damage to one weapon hit each turn."
							}
						]
					}
				]
			},
			{
				"id": "avatar-of-battle",
				"title": "Avatar of Battle",
				"subtitle": "17th level",
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
			}
		],
		"tableOfContents": [
			{
				"id": "domain-spells-bonus-proficiencies-war-priest",
				"title": "Domain Spells; Bonus Proficiencies; War Priest"
			},
			{
				"id": "channel-divinity-guided-strike",
				"title": "Channel Divinity: Guided Strike"
			},
			{
				"id": "channel-divinity-war-god-s-blessing",
				"title": "Channel Divinity: War God\u2019s Blessing"
			},
			{
				"id": "divine-strike",
				"title": "Divine Strike"
			},
			{
				"id": "avatar-of-battle",
				"title": "Avatar of Battle"
			}
		]
	}
}),
} as const;

export const cleric = {
	page,
	subclasses,
	content: {
	"source": "https://dnd5e.wikidot.com/cleric",
	"startingEquipment": [
		{
			"label": "Option 1",
			"instruction": "Choose one",
			"choices": [
				[
					{
						"type": "text",
						"text": "Mace"
					}
				],
				[
					{
						"type": "text",
						"text": "warhammer if proficient"
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
						"text": "Scale mail, leather armor,"
					}
				],
				[
					{
						"type": "text",
						"text": "chain mail if proficient"
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
						"text": "a simple weapon"
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
			"label": "Shield and holy symbol",
			"items": [
				[
					{
						"type": "link",
						"path": "internals.rules.equipment.shields",
						"label": "Shield"
					},
					{
						"type": "text",
						"text": " and holy symbol"
					}
				]
			]
		}
	],
	"progression": {
		"title": "Cleric progression",
		"heading": "Cleric Progression",
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
						"label": "Divine Domain",
						"sectionId": "divine-domain"
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
						"label": "Channel Divinity (1)",
						"sectionId": "channel-divinity-1"
					},
					{
						"label": "Domain feature",
						"sectionId": "domain-feature"
					},
					{
						"label": "Harness Divine Power",
						"sectionId": "harness-divine-power",
						"optional": true
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
						"label": "\u2014",
						"sectionId": ""
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
				"level": 5,
				"proficiencyBonus": 3,
				"features": [
					{
						"label": "Destroy Undead (CR 1/2)",
						"sectionId": "destroy-undead-cr-1-2"
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
						"label": "Channel Divinity (2)",
						"sectionId": "channel-divinity-2"
					},
					{
						"label": "Domain feature",
						"sectionId": "domain-feature"
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
					},
					{
						"label": "Destroy Undead (CR 1)",
						"sectionId": "destroy-undead-cr-1"
					},
					{
						"label": "Domain feature",
						"sectionId": "domain-feature"
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
						"label": "Divine Intervention",
						"sectionId": "divine-intervention"
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
						"label": "Destroy Undead (CR 2)",
						"sectionId": "destroy-undead-cr-2"
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
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
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
						"label": "Destroy Undead (CR 3)",
						"sectionId": "destroy-undead-cr-3"
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
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
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
						"label": "Destroy Undead (CR 4)",
						"sectionId": "destroy-undead-cr-4"
					},
					{
						"label": "Domain feature",
						"sectionId": "domain-feature"
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
						"label": "Channel Divinity (3)",
						"sectionId": "channel-divinity-3"
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
					},
					{
						"label": "Cantrip Versatility",
						"sectionId": "cantrip-versatility",
						"optional": true
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
						"label": "Divine Intervention improvement",
						"sectionId": "divine-intervention-improvement"
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
									"text": "spellcasting, divine, healer, support, control"
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
							"text": "As a cleric, you gain the following class features."
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
								"text": "Prepare cleric "
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
								"text": " using the full-caster slot table; a holy symbol serves as a focus and prepared ritual "
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
				"id": "divine-domain",
				"title": "Divine Domain",
				"subtitle": "Levels 1, 2, 6, 8, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Choose a domain that grants always-prepared "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spells"
							},
							{
								"type": "text",
								"text": ", Channel Divinity uses, and themed features."
							}
						]
					}
				]
			},
			{
				"id": "channel-divinity",
				"title": "Channel Divinity",
				"subtitle": "Levels 2, uses improve at 6, 18",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Produce Turn Undead or a domain-specific divine effect, regaining uses on a short or "
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
				"id": "harness-divine-power",
				"title": "Harness Divine Power (Optional)",
				"subtitle": "Level 2",
				"optional": true,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Exchange a Channel Divinity use for a limited-level "
							},
							{
								"type": "link",
								"path": "internals.rules.spellcasting.spells",
								"label": "spell"
							},
							{
								"type": "text",
								"text": " slot, with uses scaling by level."
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
								"text": "Replace one cleric "
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
				"id": "destroy-undead",
				"title": "Destroy Undead",
				"subtitle": "Levels 5, 8, 11, 14, 17",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Automatically destroy sufficiently weak undead that fail Turn Undead."
							}
						]
					}
				]
			},
			{
				"id": "divine-intervention",
				"title": "Divine Intervention",
				"subtitle": "Levels 10, automatic at 20",
				"optional": false,
				"blocks": [
					{
						"type": "paragraph",
						"content": [
							{
								"type": "text",
								"text": "Request direct aid from the deity; normally percentile-based, becoming automatic at 20th level."
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
									"page": "internals.classes.cleric.subclasses.arcana",
									"source": "Sword Coast Adventurer\u2019s Guide"
								},
								{
									"page": "internals.classes.cleric.subclasses.death",
									"source": "Dungeon Master\u2019s Guide"
								},
								{
									"page": "internals.classes.cleric.subclasses.forge",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.cleric.subclasses.grave",
									"source": "Xanathar\u2019s Guide to Everything"
								},
								{
									"page": "internals.classes.cleric.subclasses.knowledge",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.cleric.subclasses.life",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.cleric.subclasses.light",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.cleric.subclasses.nature",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.cleric.subclasses.order",
									"source": "Guildmaster\u2019s Guide to Ravnica; Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.cleric.subclasses.peace",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.cleric.subclasses.tempest",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.cleric.subclasses.trickery",
									"source": "Player\u2019s Handbook"
								},
								{
									"page": "internals.classes.cleric.subclasses.twilight",
									"source": "Tasha\u2019s Cauldron of Everything"
								},
								{
									"page": "internals.classes.cleric.subclasses.war",
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
			"title": "Cleric Progression"
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
					"id": "divine-domain",
					"title": "Divine Domain"
				},
				{
					"id": "channel-divinity",
					"title": "Channel Divinity"
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
					"id": "cantrip-versatility",
					"title": "Cantrip Versatility (Optional)"
				},
				{
					"id": "destroy-undead",
					"title": "Destroy Undead"
				},
				{
					"id": "divine-intervention",
					"title": "Divine Intervention"
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
