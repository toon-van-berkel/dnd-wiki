// site\src\lib\page\layout\navigation\snippets\AllowedIn-data.ts
import * as partiesHelper from '$lib/config/parties-helper';
import type { Availability } from './AllowedIn-Types';

export const allowedIn = {
	rules: {
		movement: {
			allowed: partiesHelper.get.all.names.friendly.basic(),
			limited: [],
			banned: []
		},
		fighting: {
			allowed: partiesHelper.get.all.names.friendly.basic(),
			limited: [],
			banned: []
		}
	}
} satisfies Record<string, Record<string, Availability>>;