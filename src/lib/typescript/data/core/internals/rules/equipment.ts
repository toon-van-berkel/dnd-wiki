export const equipment = {
	name: {
		normal: 'Equipment',
		slug: 'equipment'
	},

	logos: {
		simple: {
			href: '/icons/white/entity/tool.svg',
			alt: `A stylized tool icon representing equipment and carried gear.`
		}
	},

	baseUrl: '/rules/equipment',

	simpleWeapons: {
		name: {
			normal: 'Simple Weapons',
			slug: 'simple-weapons'
		},

		logos: {
			simple: {
				href: '/icons/white/entity/weapon.svg',
				alt: `A stylized weapon icon representing simple weapon
					proficiency.`
			}
		}
	},

	martialWeapons: {
		name: {
			normal: 'Martial Weapons',
			slug: 'martial-weapons'
		},

		logos: {
			simple: {
				href: '/icons/white/weapon/sword.svg',
				alt: `A stylized sword icon representing martial weapon
					proficiency.`
			}
		}
	},

	lightArmor: {
		name: {
			normal: 'Light Armor',
			slug: 'light-armor'
		},

		logos: {
			simple: {
				href: '/icons/white/entity/armor.svg',
				alt: `A stylized armor icon representing light armor.`
			}
		}
	},

	mediumArmor: {
		name: {
			normal: 'Medium Armor',
			slug: 'medium-armor'
		},

		logos: {
			simple: {
				href: '/icons/white/entity/armor.svg',
				alt: `A stylized armor icon representing medium armor.`
			}
		}
	},

	heavyArmor: {
		name: {
			normal: 'Heavy Armor',
			slug: 'heavy-armor'
		},

		logos: {
			simple: {
				href: '/icons/white/entity/armor.svg',
				alt: `A stylized armor icon representing heavy armor.`
			}
		}
	},

	shields: {
		name: {
			normal: 'Shields',
			slug: 'shields'
		},

		logos: {
			simple: {
				href: '/icons/white/attribute/ac.svg',
				alt: `A stylized armor class icon representing shields.`
			}
		}
	},

	greataxe: {
		name: {
			normal: 'Greataxe',
			slug: 'greataxe'
		},

		logos: {
			simple: {
				href: '/icons/white/weapon/battleaxe.svg',
				alt: `A stylized axe icon representing a greataxe.`
			}
		}
	},

	handaxes: {
		name: {
			normal: 'Handaxes',
			slug: 'handaxes'
		},

		logos: {
			simple: {
				href: '/icons/white/weapon/handaxe.svg',
				alt: `A stylized handaxe icon representing handaxes.`
			}
		}
	},

	explorersPack: {
		name: {
			normal: `Explorer's Pack`,
			slug: 'explorers-pack'
		},

		logos: {
			simple: {
				href: '/icons/white/entity/pack.svg',
				alt: `A stylized pack icon representing an explorer's pack.`
			}
		}
	},

	javelins: {
		name: {
			normal: 'Javelins',
			slug: 'javelins'
		},

		logos: {
			simple: {
				href: '/icons/white/weapon/spear.svg',
				alt: `A stylized spear icon representing javelins.`
			}
		}
	}
} as const;
