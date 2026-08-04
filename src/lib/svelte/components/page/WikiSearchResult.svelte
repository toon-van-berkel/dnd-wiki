<!--
	Location: src/lib/svelte/components/page/WikiSearchResult.svelte
	Use: Renders a single Wiki search result.
-->
<script lang="ts">
	import { base } from '$app/paths';
	import { base as site } from '$lib/typescript/data/core/_index_';
	import { getCanonicalInternalHref } from '$lib/typescript/pages/currentPage';
	import type { SearchResult } from '$lib/typescript/pages/search';

	let { result }: { result: SearchResult } = $props();

	function getHref(href: string): string {
		return getCanonicalInternalHref(href, base);
	}

	function getDisplayHref(href: string): string {
		if (!href.startsWith('/')) {
			return href;
		}

		return new URL(getHref(href), site.siteLink).href;
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
