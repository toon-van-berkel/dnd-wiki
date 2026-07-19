import { classPages } from './data/classes';
import { corePages } from './data/core';
import { legalPages } from './data/legal';
import { projectPages } from './data/project';
import { rulePages } from './data/rules';
import { speciesPages } from './data/species';
import type { PageRegistryEntry } from './Registry-Types';

export const pageRegistry: PageRegistryEntry[] = [
	...corePages,
	...rulePages,
	...classPages,
	...speciesPages,
	...projectPages,
	...legalPages
];
