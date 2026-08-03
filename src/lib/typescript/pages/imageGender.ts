/*
	Location: src/lib/typescript/pages/imageGender.ts
	Use: SSR-safe client helpers for page-image gender selection.
*/

import type { ImageGender } from '$lib/typescript/data/_index_';

export const imageGenderPreferenceStorageKey =
	'dnd-portal-image-gender-preference';

const imageGenderSessionSeedStorageKey = 'dnd-portal-image-gender-seed';

function isImageGender(value: string | null): value is ImageGender {
	return value === 'female' || value === 'male';
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
	const storedSeed = sessionStorage.getItem(imageGenderSessionSeedStorageKey);

	if (storedSeed) {
		return storedSeed;
	}

	const seed = createSessionSeed();
	sessionStorage.setItem(imageGenderSessionSeedStorageKey, seed);

	return seed;
}

function hash(value: string): number {
	let hashValue = 0;

	for (let index = 0; index < value.length; index += 1) {
		hashValue = (hashValue * 31 + value.charCodeAt(index)) >>> 0;
	}

	return hashValue;
}

export function getPreferredImageGender(): ImageGender | null {
	const storedPreference = localStorage.getItem(imageGenderPreferenceStorageKey);

	return isImageGender(storedPreference) ? storedPreference : null;
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
