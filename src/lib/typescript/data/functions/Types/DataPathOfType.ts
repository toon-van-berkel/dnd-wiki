import type { DataPathValue } from './DataPathValue';
import type { DataPath } from './DataPath';

export type DataPathOfType<T, Expected> = DataPath<T> extends infer Path
	? Path extends string
		? DataPathValue<T, Path> extends Expected
			? Path
			: never
		: never
	: never;
