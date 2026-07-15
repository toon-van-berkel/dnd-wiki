import { elfs } from "./species-elfs.js"
import { humans } from "./species-humans.js"

export const species = {
    title: 'Species',
	href: '/species',
	description: 'Playable peoples and campaign availability.',
	kind: 'collection',
	searchable: false,
	children: [
        humans,
		elfs
	]
}
