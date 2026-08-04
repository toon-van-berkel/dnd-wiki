<!--
	Location: src/lib/svelte/components/page/WikiSearchResult.svelte
	Use: Renders a single Wiki search result.
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import type { SearchResult } from '$lib/typescript/pages/search';

	let { result }: { result: SearchResult } = $props();

	function getHref(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		const path = href === '/' || href.endsWith('/') ? href : `${href}/`;

		return `${base}${path}`;
	}

	function getDisplayHref(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		return new URL(getHref(href), page.url.origin).href;
	}
</script>

<a class="wiki-search-result" href={getHref(result.href)}>
	<div class="wiki-search-result__top">
		<span class="wiki-search-result__category">{result.category}</span>
		<span class="wiki-search-result__score">Score {result.score}</span>
	</div>

	<div class="wiki-search-result__body">
		<h3>{result.title}</h3>
		<p class="wiki-search-result__subtitle">{result.subtitle}</p>
		<p class="wiki-search-result__description">{result.description}</p>
	</div>

	<div class="wiki-search-result__meta">
		<span>{getDisplayHref(result.href)}</span>

		{#if result.matchedFields.length}
			<span>Matched {result.matchedFields.join(', ')}</span>
		{/if}
	</div>

	{#if result.tags.length}
		<div class="wiki-search-result__tags" aria-label="Tags">
			{#each result.tags.slice(0, 6) as tag}
				<span>{tag}</span>
			{/each}
		</div>
	{/if}
</a>
