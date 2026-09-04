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
	}
} as const;
