export const wikiIconIds = ['rules', 'fiend', 'species'] as const;

export type WikiIconId = (typeof wikiIconIds)[number];

export function isWikiIconId(value: unknown): value is WikiIconId {
	return typeof value === 'string' && wikiIconIds.includes(value as WikiIconId);
}
