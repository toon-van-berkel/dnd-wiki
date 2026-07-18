// site\src\lib\pages\CardGrid\CardGrid-Types.ts
import type { Snippet } from 'svelte';

export type CardGridProps = {
	children: Snippet;
	minCardWidth?: string;
	gap?: string;
	class?: string;
};