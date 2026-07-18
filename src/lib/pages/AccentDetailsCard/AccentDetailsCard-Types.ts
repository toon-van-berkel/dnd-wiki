// site\src\lib\pages\AccentDetailsCard
export type AccentDetailsRow = {
	label: string;
	value: string;
};

export type AccentDetailsCardData = {
	title: string;
	accentColor: string;
	softColor?: string;
	details: readonly AccentDetailsRow[];
};

export type AccentDetailsCardProps = AccentDetailsCardData & {
	class?: string;
};