const logos = {
    simple: {
        href: '/icons/white/classes/artificer.svg',
        alt: `A stylized Artificer emblem showing a mechanical vessel
            surrounded by a large cogwheel.`
    }
}

export const artificer = {
	name: {
		normal: 'Artificer',
		slug: 'artificer'
	},

    logos,
	
    subclasses: {
		alchemist: {
			name: {
				normal: 'Alchemist',
				short: 'Alchemist',
				slug: 'alchemist'
			},

            logos
		},
		artillerist: {
			name: {
				normal: 'Artillerist',
				short: 'Artillerist',
				slug: 'artillerist'
			},

            logos
		}
	}
}