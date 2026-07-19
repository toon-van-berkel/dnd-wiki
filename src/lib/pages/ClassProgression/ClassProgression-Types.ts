// site\src\lib\pages\ClassProgression\ClassProgression-Types.ts
export type ClassProgressionValue = string | number;

export type ClassProgressionFeature = {
	label: string;
	href?: string;
	optional?: boolean;
};

export type ClassProgressionMetric = {
	key: string;
	label: string;
	shortLabel?: string;
};

export type ClassProgressionRow = {
	level: number;
	proficiencyBonus: number;
	features: readonly ClassProgressionFeature[];
	values: Readonly<Record<string, ClassProgressionValue>>;
};

export type ClassProgressionData = {
	caption: string;
	description?: string;
	metrics: readonly ClassProgressionMetric[];
	rows: readonly ClassProgressionRow[];
};

export type Props = ClassProgressionData & {
	defaultOpenLevels?: readonly number[];
};