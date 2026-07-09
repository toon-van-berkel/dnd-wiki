import { elfs } from "./species-elfs"
import { humans } from "./species-humans"

export const species = {
    title: 'Species',
	href: '/species',
	description: 'Playable peoples and campaign availability.',
	children: [
        humans,
		elfs
	]
}