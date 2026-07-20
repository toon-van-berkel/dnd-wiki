export type RuleBlock =
	| {
			kind: 'paragraph';
			text: string;
	  }
	| {
			kind: 'list';
			items: readonly string[];
	  };

export type TechniqueRank = 'I' | 'II' | 'III' | 'IV' | 'V';

export type TechniqueCategory = 'universal' | 'nature' | 'heritage' | 'path';

export type TechniqueSource = 'shinobi';

export type Technique = {
	id: string;
	slug: string;
	name: string;
	rank: TechniqueRank;
	category: TechniqueCategory;
	source: TechniqueSource;
	chakraCost: string;
	activation: string;
	range: string;
	duration: string;
	requirements?: string;
	concentration?: boolean;
	restricted?: boolean;
	restriction?: string;
	nature?: string;
	heritage?: string;
	path?: string;
	damageType?: string;
	description: readonly RuleBlock[];
	augment?: readonly RuleBlock[];
	scaling?: readonly RuleBlock[];
	searchKeywords?: readonly string[];
};
