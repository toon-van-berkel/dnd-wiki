const eyebrowString = 'Class';

export const classes = {
	'classes/rogue': {
		title: 'Rogue',
		description: 'Rogues are skill-focused characters who rely on Dexterity, stealth, precision, and clever positioning. They excel at scouting, infiltration, traps, social tricks, and burst damage through Sneak Attack.',
		eyebrow: eyebrowString,
		tags: ['Class', 'Dexterity', 'Skills']
	}
} as const;

export type ClassCode = keyof typeof classes;
export type ClassData = (typeof classes)[ClassCode];

export function selectClass(path: string): ClassData | undefined {
	if (path in classes) {
		return classes[path as ClassCode];
	}

	return undefined;
}