import rulesIcon from '$lib/assets/icons/game/source-book.svg';
import fiendIcon from '$lib/assets/icons/monster/fiend.svg';
import petIcon from '$lib/assets/icons/entity/pet.svg';

import type { WikiIconId } from './icon-ids.js';

export type { WikiIconId } from './icon-ids.js';

export const wikiIcons = {
	rules: rulesIcon,
	fiend: fiendIcon,
	species: petIcon
} satisfies Record<WikiIconId, string>;

export function getWikiIcon(iconId: WikiIconId | undefined): string | undefined {
	if (!iconId) {
		return undefined;
	}

	return wikiIcons[iconId];
}
