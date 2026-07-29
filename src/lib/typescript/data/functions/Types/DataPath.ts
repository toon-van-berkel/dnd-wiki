export type DataPath<T> = T extends object
	? {
			[K in Extract<keyof T, string>]:
				| K
				| (T[K] extends object
						? `${K}.${DataPath<T[K]>}`
						: never);
		}[Extract<keyof T, string>]
	: never;