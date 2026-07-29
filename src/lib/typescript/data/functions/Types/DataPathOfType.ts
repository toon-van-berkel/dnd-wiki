import type { DataPath } from './DataPath';
import type { DataPathValue } from './DataPathValue';

export type DataPathOfType<T, Expected> = {
	[P in DataPath<T>]:
		DataPathValue<T, P> extends Expected
			? P
			: never;
}[DataPath<T>];