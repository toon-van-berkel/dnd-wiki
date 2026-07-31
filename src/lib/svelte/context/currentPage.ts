/*
	Location: src/lib/svelte/context/currentPage.ts
	Use: Svelte context helpers for the current internal page.
*/

import {
	getContext,
	setContext
} from 'svelte';
import type { CurrentPageContext } from '$lib/typescript/pages/currentPage';

const currentPageContextKey = Symbol('current-page-context');

export function setCurrentPageContext(context: CurrentPageContext): CurrentPageContext {
	return setContext(currentPageContextKey, context);
}

export function getCurrentPageContext(): CurrentPageContext {
	return getContext(currentPageContextKey);
}
