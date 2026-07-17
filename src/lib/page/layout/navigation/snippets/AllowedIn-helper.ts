// site\src\lib\page\layout\navigation\snippets\AllowedIn-helper.ts
import { allowedIn } from './AllowedIn-data';
import type { Availability } from './AllowedIn-Types';

export function getAllowedIn(path: string): Availability | undefined {
	const parts = path
		.split('?')[0]
		.split('#')[0]
		.split('/')
		.filter(Boolean);

	const result = parts.reduce<unknown>((current, part) => {
		if (
			typeof current !== 'object' ||
			current === null ||
			!(part in current)
		) {
			return undefined;
		}

		return (current as Record<string, unknown>)[part];
	}, allowedIn);

	return result as Availability | undefined;
}