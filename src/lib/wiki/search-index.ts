import { getAvailabilityMetadataForHref } from '../utils/availability-metadata.js';
import type { DungeonMasterId, PartyId } from '../config/campaigns.js';
import { wikiPages, type WikiPageEntry, type WikiPageKind } from './registry.js';
import { searchTagById, searchTagGroupLabels, searchTags } from './search-tags.js';

export type SearchEntryKind = WikiPageKind;

export type SearchEntry = {
	id: string;
	title: string;
	href: string;
	description: string;
	kind: SearchEntryKind;
	tags: readonly string[];
	keywords: readonly string[];
	aliases: readonly string[];
	parentTitle?: string;
	searchable: boolean;
	partyIds?: readonly PartyId[];
	dmIds?: readonly DungeonMasterId[];
};

export const contentTypeLabels: Record<SearchEntryKind, string> = {
	collection: 'Collection',
	class: 'Class',
	subclass: 'Subclass',
	species: 'Species',
	background: 'Background',
	feat: 'Feat',
	spell: 'Spell',
	weapon: 'Weapon',
	armour: 'Armour',
	equipment: 'Equipment',
	'magic-item': 'Magic Item',
	monster: 'Monster',
	location: 'Location',
	rule: 'Rule',
	homebrew: 'Homebrew',
	information: 'Information',
	legal: 'Legal',
	settings: 'Settings',
	other: 'Other'
};

export const searchIndex = Object.freeze(buildSearchIndex(wikiPages));
export const searchableEntries = Object.freeze(searchIndex.filter((entry) => entry.searchable));
export const collectionEntries = Object.freeze(searchIndex.filter((entry) => entry.kind === 'collection'));

validateSearchTags();
validateSearchIndex(searchIndex);

function buildSearchIndex(items: readonly WikiPageEntry[]): SearchEntry[] {
	return items.map(toSearchEntry).filter((entry): entry is SearchEntry => Boolean(entry));
}

function toSearchEntry(item: WikiPageEntry): SearchEntry | undefined {
	if (!item.href || item.href === '/') {
		return undefined;
	}

	const kind = item.kind ?? 'other';
	const searchable = item.searchable ?? kind !== 'collection';
	const parentTitle = item.parentId
		? wikiPages.find((page) => page.id === item.parentId)?.title
		: undefined;

	return {
		id: item.id,
		title: item.title,
		href: item.href,
		description: item.description ?? '',
		kind,
		tags: item.tags ?? [],
		keywords: item.keywords ?? [],
		aliases: item.aliases ?? [],
		parentTitle,
		searchable,
		...getAvailabilityMetadataForHref(item.href)
	};
}

function validateSearchIndex(entries: readonly SearchEntry[]) {
	const ids = new Set<string>();
	const hrefs = new Set<string>();
	const allowedKinds = new Set(Object.keys(contentTypeLabels));

	for (const entry of entries) {
		if (!entry.id || !entry.title || !entry.href) {
			throw new Error(`Invalid search entry metadata for ${entry.href || entry.title || 'unknown'}.`);
		}

		if (ids.has(entry.id)) {
			throw new Error(`Duplicate search entry id: ${entry.id}.`);
		}

		if (hrefs.has(entry.href)) {
			throw new Error(`Duplicate search entry href: ${entry.href}.`);
		}

		if (!allowedKinds.has(entry.kind)) {
			throw new Error(`Unknown search entry kind for ${entry.href}: ${entry.kind}.`);
		}

		if (entry.kind === 'collection' && entry.searchable) {
			throw new Error(`Collection entry cannot be a normal search result: ${entry.href}.`);
		}

		for (const tag of entry.tags) {
			if (!searchTagById.has(tag)) {
				throw new Error(`Unknown search tag "${tag}" on ${entry.href}.`);
			}
		}

		ids.add(entry.id);
		hrefs.add(entry.href);
	}
}

function validateSearchTags() {
	const ids = new Set<string>();
	const labels = new Set<string>();
	const allowedGroups = new Set(Object.keys(searchTagGroupLabels));

	for (const tag of searchTags) {
		if (ids.has(tag.id)) {
			throw new Error(`Duplicate search tag id: ${tag.id}.`);
		}

		if (labels.has(tag.label)) {
			throw new Error(`Duplicate search tag label: ${tag.label}.`);
		}

		if (!allowedGroups.has(tag.group)) {
			throw new Error(`Invalid search tag group for ${tag.id}: ${tag.group}.`);
		}

		ids.add(tag.id);
		labels.add(tag.label);
	}
}
