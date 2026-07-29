import { data } from '../_index_';
import type * as functionType from './Types/_index_';

export function getData<P extends functionType.DataPath<functionType.Data>>(
	path: P
): functionType.DataPathValue<functionType.Data, P> {
	const keys = path.split('.');

	let current: unknown = data;

	for (const key of keys) {
		if (
			typeof current !== 'object' ||
			current === null ||
			!(key in current)
		) {
			throw new Error(`Data path "${path}" does not exist.`);
		}

		current = (current as Record<string, unknown>)[key];
	}

	return current as functionType.DataPathValue<functionType.Data, P>;
}