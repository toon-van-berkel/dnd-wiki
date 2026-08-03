import { website } from './website';
import { utility } from './utility';
import { classes } from './classes/_index_';
import { spells } from './spells/_index_';
import { species } from './species/_index_';
import { rules } from './rules/_index_';
import { locations } from './locations/_index_';
import { monsters } from './monsters/_index_';
import { project } from './project';
import { legal } from './legal';

export const internals = {
	website,
	utility,

	classes,
	spells,
	species,
	rules,
	locations,
	monsters,

	project,
	legal
} as const;
