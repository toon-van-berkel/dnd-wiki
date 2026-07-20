import { shinobiTechniques } from './shinobi';
import type {
	Technique,
	TechniqueCategory,
	TechniqueRank,
	TechniqueSource
} from './types';

export type {
	RuleBlock,
	Technique,
	TechniqueCategory,
	TechniqueRank,
	TechniqueSource
} from './types';

export const techniques = [...shinobiTechniques] satisfies Technique[];

export const techniqueCategoryLabels = {
	universal: 'Universal',
	nature: 'Nature',
	heritage: 'Heritage',
	path: 'Path'
} satisfies Record<TechniqueCategory, string>;

export const techniqueSourceLabels = {
	shinobi: 'Shinobi'
} satisfies Record<TechniqueSource, string>;

export function getTechniqueBySlug(slug: string): Technique | undefined {
	return techniques.find((technique) => technique.slug === slug);
}

export function getTechniqueHref(technique: Technique): string {
	return `/spells-and-abilities/techniques/${technique.slug}`;
}

export function getTechniquePageId(technique: Technique): string {
	return `spells-and-abilities--techniques--${technique.slug}`;
}

export function getTechniqueDescription(technique: Technique): string {
	return technique.description.find((block) => block.kind === 'paragraph')?.text ?? '';
}

export function getTechniqueRankLabel(rank: TechniqueRank): string {
	return `Rank ${rank}`;
}

export function getTechniqueCategoryLabel(category: TechniqueCategory): string {
	return techniqueCategoryLabels[category];
}

export function getTechniqueSourceLabel(source: TechniqueSource): string {
	return techniqueSourceLabels[source];
}
