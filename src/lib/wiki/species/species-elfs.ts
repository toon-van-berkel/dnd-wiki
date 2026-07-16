import type { WikiDomainPage } from '../domain.js';

export const elfs = {
	title: 'Elf',
	href: '/species/elf',
	description: 'Long-lived people with several distinct cultures.',
	kind: 'species',
	aliases: ['elves'],
	keywords: ['lineage', 'race'],
    children: [
		{
			title: 'Astral Elf',
			href: '/species/elf/astral-elf',
			description: 'Elves shaped by life beyond the ordinary world.',
			kind: 'species',
			aliases: ['astral elves'],
			keywords: ['lineage', 'race', 'elf']
		}
	]
} satisfies WikiDomainPage;
