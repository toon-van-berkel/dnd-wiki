const logos = {
    simple: {
        href: '/icons/white/classes/barbarian.svg',
        alt: `A stylized Barbarian emblem with two sweeping, flame-like
            blades surrounding a central axe.`
    }
}

export const barbarian = {
	name: {
		normal: 'Barbarian',
		slug: 'barbarian'
	},

    logos,

	subclasses: {
		berserker: {
			name: {
				normal: 'Path of the Berserker',
				short: 'Berserker',
				slug: 'berserker'
			},

            logos
		},

		zealot: {
			name: {
				normal: 'Path of the Zealot',
				short: 'Zealot',
				slug: 'zealot'
			},

            logos
		}
	}
}