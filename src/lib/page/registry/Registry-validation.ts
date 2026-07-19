import {
	browseNavigationPageIds,
	footerPageIdsByGroup,
	mainNavigationPageIds,
	resourceNavigationPageIds
} from '$lib/config/navigation';

import { pageRegistry } from './Registry-data';
import type { PageId, PageRegistryEntry } from './Registry-Types';

const routeManifest = new Set([
	'/',
	'/about',
	'/accessibility',
	'/ai',
	'/changelog',
	'/classes',
	'/classes/artificer',
	'/classes/barbarian',
	'/classes/bard',
	'/classes/blood-hunter',
	'/classes/captain',
	'/classes/champion',
	'/classes/cleric',
	'/classes/cleric/death-domain',
	'/classes/cleric/life-domain',
	'/classes/druid',
	'/classes/fighter',
	'/classes/gunslinger',
	'/classes/illrigger',
	'/classes/messenger',
	'/classes/monk',
	'/classes/monster-hunter',
	'/classes/mournbound',
	'/classes/paladin',
	'/classes/pugilist',
	'/classes/ranger',
	'/classes/rogue',
	'/classes/rogue/arcane-trickster',
	'/classes/rogue/assassin',
	'/classes/rogue/inquisitive',
	'/classes/rogue/mastermind',
	'/classes/rogue/phantom',
	'/classes/rogue/scout',
	'/classes/rogue/soulknife',
	'/classes/rogue/swashbuckler',
	'/classes/rogue/thief',
	'/classes/scholar',
	'/classes/shinobi',
	'/classes/shinobi/path-of-elemental-ninjutsu',
	'/classes/shinobi/path-of-fortune',
	'/classes/shinobi/path-of-genjutsu',
	'/classes/shinobi/path-of-sealing',
	'/classes/shinobi/path-of-taijutsu',
	'/classes/shinobi/path-of-the-bloodline',
	'/classes/shinobi/path-of-the-medical-shinobi',
	'/classes/shinobi/techniques',
	'/classes/sorcerer',
	'/classes/treasure-hunter',
	'/classes/vampyr',
	'/classes/warden',
	'/classes/warlock',
	'/classes/wizard',
	'/content-removal',
	'/contribution-terms',
	'/cookies',
	'/credits',
	'/legal',
	'/locations',
	'/monsters',
	'/preferences',
	'/privacy',
	'/rules',
	'/rules/fighting',
	'/rules/movement',
	'/search',
	'/sources',
	'/species',
	'/species/elf',
	'/species/elf/astral-elf',
	'/species/human'
]);

function collectDuplicateValues(entries: readonly PageRegistryEntry[], key: 'id' | 'href'): string[] {
	const seen = new Set<string>();
	const duplicates = new Set<string>();

	for (const entry of entries) {
		if (seen.has(entry[key])) {
			duplicates.add(entry[key]);
		}
		seen.add(entry[key]);
	}

	return Array.from(duplicates);
}

function hasParentCycle(entry: PageRegistryEntry, entriesById: Map<PageId, PageRegistryEntry>): boolean {
	const seen = new Set<PageId>();
	let current = entry;

	while (current.parentId) {
		if (seen.has(current.parentId)) {
			return true;
		}

		seen.add(current.parentId);
		const parent = entriesById.get(current.parentId);
		if (!parent) {
			return false;
		}

		current = parent;
	}

	return false;
}

export function validatePageRegistry(): string[] {
	const errors: string[] = [];
	const entriesById = new Map(pageRegistry.map((entry) => [entry.id, entry]));

	for (const duplicateId of collectDuplicateValues(pageRegistry, 'id')) {
		errors.push(`Duplicate page id ${duplicateId}`);
	}

	for (const duplicateHref of collectDuplicateValues(pageRegistry, 'href')) {
		errors.push(`Duplicate page href ${duplicateHref}`);
	}

	for (const entry of pageRegistry) {
		if (entry.parentId && !entriesById.has(entry.parentId)) {
			errors.push(`${entry.id} references unknown parent ${entry.parentId}`);
		}

		if (hasParentCycle(entry, entriesById)) {
			errors.push(`${entry.id} has a parent cycle`);
		}

		if (!routeManifest.has(entry.href)) {
			errors.push(`${entry.id} references missing route ${entry.href}`);
		}
	}

	const navigationIds = [
		...mainNavigationPageIds,
		...browseNavigationPageIds,
		...resourceNavigationPageIds
	];

	for (const id of navigationIds) {
		if (!entriesById.has(id)) {
			errors.push(`Navigation references unknown page ${id}`);
		}
	}

	for (const [groupId, pageIds] of Object.entries(footerPageIdsByGroup)) {
		for (const id of pageIds) {
			if (!entriesById.has(id)) {
				errors.push(`Footer group ${groupId} references unknown page ${id}`);
			}
		}
	}

	return errors;
}
