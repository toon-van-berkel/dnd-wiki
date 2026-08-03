type DataPathTerminal = readonly unknown[] | ((...args: never[]) => unknown);
type DataPathKey<T> = Extract<keyof T, string>;

export type DataPath<T> = T extends DataPathTerminal
	? never
	: T extends object
		? {
				[K in DataPathKey<T>]:
					| K
					| (T[K] extends DataPathTerminal
							? never
							: T[K] extends object
								? `${K}.${DataPath<T[K]>}`
								: never);
			}[DataPathKey<T>]
		: never;
