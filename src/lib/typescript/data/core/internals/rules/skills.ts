export const skills = {
	name: {
		normal: 'Skills',
		singular: 'Skill',
		slug: 'skills'
	},

	logos: {
		simple: {
			href: '/icons/white/attribute/skillcheck.svg',
			alt: `A stylized question mark inside a cogwheel representing a
				skill check.`
		}
	},

	baseUrl: '/rules/skills',

	animalHandling: {
		name: {
			normal: 'Animal Handling',
			slug: 'animal-handling'
		},

		logos: {
			simple: {
				href: '/icons/white/skill/animal-handling.svg',
				alt: `A stylized animal handling icon representing calming,
					controlling, or understanding animals.`
			}
		}
	},

	athletics: {
		name: {
			normal: 'Athletics',
			slug: 'athletics'
		},

		logos: {
			simple: {
				href: '/icons/white/skill/athletics.svg',
				alt: `A stylized athletics icon representing climbing, jumping,
					swimming, and physical contests.`
			}
		}
	},

	intimidation: {
		name: {
			normal: 'Intimidation',
			slug: 'intimidation'
		},

		logos: {
			simple: {
				href: '/icons/white/skill/intimidation.svg',
				alt: `A stylized intimidation icon representing forceful social
					pressure.`
			}
		}
	},

	nature: {
		name: {
			normal: 'Nature',
			slug: 'nature'
		},

		logos: {
			simple: {
				href: '/icons/white/skill/nature.svg',
				alt: `A stylized nature icon representing knowledge of terrain,
					plants, animals, and natural lore.`
			}
		}
	},

	perception: {
		name: {
			normal: 'Perception',
			slug: 'perception'
		},

		logos: {
			simple: {
				href: '/icons/white/skill/perception.svg',
				alt: `A stylized perception icon representing awareness and
					observation.`
			}
		}
	},

	survival: {
		name: {
			normal: 'Survival',
			slug: 'survival'
		},

		logos: {
			simple: {
				href: '/icons/white/skill/survival.svg',
				alt: `A stylized survival icon representing tracking,
					foraging, and enduring wilderness hazards.`
			}
		}
	}
} as const;
