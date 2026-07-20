export type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SpellRecord = {
	id: string;
	slug: string;
	name: string;
	level: SpellLevel;
	school: string;
	castingTime: string;
	range: string;
	components: string;
	duration: string;
	concentration?: boolean;
	ritual?: boolean;
	classes: readonly string[];
	source: string;
	description: readonly string[];
	higherLevels?: readonly string[];
	searchKeywords?: readonly string[];
};
