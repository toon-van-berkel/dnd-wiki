import type { ClassProgressionData } from '$lib/pages/ClassProgression/ClassProgression-Types';
import type { ClassTraitsData } from '$lib/pages/ClassTraits/ClassTraits-Types';
import type { RuleBlock } from '$lib/data/techniques';

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
