export type DataPathValue<T, P extends string> =
	P extends `${infer Key}.${infer Rest}`
		? Key extends keyof T
			? DataPathValue<T[Key], Rest>
			: never
		: P extends keyof T
			? T[P]
			: never;