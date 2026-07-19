import type { ClassProgressionData } from '$lib/pages/ClassProgression/ClassProgression-Types';
import type { ClassTraitsData } from '$lib/pages/ClassTraits/ClassTraits-Types';

export type RuleBlock =
	| {
			kind: 'paragraph';
			text: string;
	  }
	| {
			kind: 'list';
			items: readonly string[];
	  };

export type FeatureRule = {
	level: number;
	title: string;
	blocks: readonly RuleBlock[];
};

export type ShinobiPath = {
	id: string;
	title: string;
	href: string;
	description: string;
	combatRole: string;
	primaryFocus: string;
	requirement?: string;
	introduction: readonly string[];
	features: readonly FeatureRule[];
	playIf: readonly string[];
};

export type TechniqueRank = 'I' | 'II' | 'III' | 'IV' | 'V';

export type TechniqueCategory = 'Universal' | 'Nature' | 'Heritage' | 'Path';

export type ShinobiTechnique = {
	id: string;
	name: string;
	rank: TechniqueRank;
	category: TechniqueCategory;
	chakraCost: string;
	activation: string;
	range: string;
	duration: string;
	requirements?: string;
	description: readonly RuleBlock[];
	augment?: readonly RuleBlock[];
	restricted?: boolean;
	nature?: string;
	heritage?: string;
	path?: string;
	damageType?: string;
	concentration?: boolean;
	source: string;
};

export type ShinobiPageData = {
	coreTraits: ClassTraitsData;
	progression: ClassProgressionData;
	summaryRows: readonly (readonly [string, string])[];
	hitPointRows: readonly (readonly [string, string])[];
	proficiencyRows: readonly (readonly [string, string])[];
	weaponRows: readonly (readonly [string, string])[];
	startingEquipment: readonly string[];
	rareHeritageRows: readonly (readonly [string, string])[];
	initialManifestations: readonly (readonly [string, string])[];
};
