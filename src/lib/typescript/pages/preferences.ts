/*
	Location: src/lib/typescript/pages/preferences.ts
	Use: SSR-safe browser preference helpers shared by page images and spell views.
*/

import type { ImageGender } from '$lib/typescript/data/_index_';

export type ImageGenderPreference = ImageGender | 'random';
export type SpellViewPreference = 'cards' | 'list' | 'table';

export const imageGenderPreferenceStorageKey =
	'dnd-portal-image-gender-preference';
export const spellViewPreferenceStorageKey =
	'dnd-portal-spell-view-preference';

const imageGenderSessionSeedStorageKey = 'dnd-portal-image-gender-seed';

export const imageGenderPreferences = [
	'random',
	'female',
	'male'
] as const satisfies readonly ImageGenderPreference[];

export const spellViewPreferences = [
	'cards',
	'list',
	'table'
] as const satisfies readonly SpellViewPreference[];

function getLocalStorage(): Storage | null {
	try {
		return globalThis.localStorage ?? null;
	} catch {
		return null;
	}
}

function getSessionStorage(): Storage | null {
	try {
		return globalThis.sessionStorage ?? null;
	} catch {
		return null;
	}
}

function isImageGender(value: string | null): value is ImageGender {
	return value === 'female' || value === 'male';
}

function isImageGenderPreference(
	value: string | null
): value is ImageGenderPreference {
	return value === 'random' || isImageGender(value);
}

function isSpellViewPreference(
	value: string | null
): value is SpellViewPreference {
	return value === 'cards' || value === 'list' || value === 'table';
}

function createSessionSeed(): string {
	const browserCrypto = globalThis.crypto;

	if (browserCrypto?.randomUUID) {
		return browserCrypto.randomUUID();
	}

	if (browserCrypto) {
		const values = new Uint32Array(2);
		browserCrypto.getRandomValues(values);

		return `${values[0].toString(36)}-${values[1].toString(36)}`;
	}

	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function getSessionSeed(): string {
	const storage = getSessionStorage();
	const storedSeed = storage?.getItem(imageGenderSessionSeedStorageKey);

	if (storedSeed) {
		return storedSeed;
	}

	const seed = createSessionSeed();
	storage?.setItem(imageGenderSessionSeedStorageKey, seed);

	return seed;
}

function hash(value: string): number {
	let hashValue = 0;

	for (let index = 0; index < value.length; index += 1) {
		hashValue = (hashValue * 31 + value.charCodeAt(index)) >>> 0;
	}

	return hashValue;
}

export function getImageGenderPreference(): ImageGenderPreference {
	const storedPreference = getLocalStorage()?.getItem(
		imageGenderPreferenceStorageKey
	) ?? null;

	return isImageGenderPreference(storedPreference)
		? storedPreference
		: 'random';
}

export function setImageGenderPreference(
	preference: ImageGenderPreference
): void {
	getLocalStorage()?.setItem(imageGenderPreferenceStorageKey, preference);
}

export function getPreferredImageGender(): ImageGender | null {
	const preference = getImageGenderPreference();

	return isImageGender(preference) ? preference : null;
}

export function resolveSessionImageGender(pagePath: string): ImageGender {
	const preferredGender = getPreferredImageGender();

	if (preferredGender) {
		return preferredGender;
	}

	return hash(`${getSessionSeed()}:${pagePath}`) % 2 === 0
		? 'female'
		: 'male';
}

export function getSpellViewPreference(): SpellViewPreference {
	const storedPreference = getLocalStorage()?.getItem(
		spellViewPreferenceStorageKey
	) ?? null;

	return isSpellViewPreference(storedPreference)
		? storedPreference
		: 'cards';
}

export function setSpellViewPreference(preference: SpellViewPreference): void {
	getLocalStorage()?.setItem(spellViewPreferenceStorageKey, preference);
}
