// site\src\lib\config\parties-helper.ts
import { parties } from './parties';

export const get = {
	all: {
		names: {
			friendly: {
				basic(): string[] {
					return Object.values(parties)
						.sort((a, b) => a.order - b.order)
						.map((party) => party.names.friendly.basic);
				}
			}
		}
	}
};