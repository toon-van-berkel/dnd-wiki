// site\src\lib\page\layout\navigation\snippets\Tags-helpers.ts
import { getPathParts } from '$lib/utils/index';
import { tags } from './Tags-data';

export function getTags(path: string): string[] {
	const parts = getPathParts(path);
	let current: unknown = tags;

	for (const part of parts) {
		if (typeof current !== 'object' || current === null || !(part in current)) {
			return [];
		}

		current = (current as Record<string, unknown>)[part];
	}

	if (typeof current !== 'object' || current === null || !('tags' in current)) {
		return [];
	}

	const pageTags = (current as { tags?: unknown }).tags;

	return Array.isArray(pageTags) ? pageTags : [];
}