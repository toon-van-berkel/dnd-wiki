<!--
	Location: src/lib/svelte/components/page/WikiSearch.svelte
	Use: Search the central Wiki data and spell dataset.
-->
<script lang="ts">
	import { browser } from '$app/environment';
	import { replaceState } from '$app/navigation';
	import { onMount } from 'svelte';
	import {
		searchIndex,
		searchWiki,
		type SearchCategory
	} from '$lib/typescript/pages/search';

	import WikiSearchFilters from './WikiSearchFilters.svelte';
	import WikiSearchResult from './WikiSearchResult.svelte';

	const pageSize = 30;
	const validCategories = new Set<SearchCategory>([
		'all',
		'classes',
		'subclasses',
		'rules',
		'spells',
		'species',
		'monsters',
		'locations',
		'community',
		'project',
		'legal'
	]);

	function getInitialCategory(): SearchCategory {
		if (!browser) {
			return 'all';
		}

		const value = new URLSearchParams(window.location.search).get('type') ?? 'all';

		return validCategories.has(value as SearchCategory)
			? value as SearchCategory
			: 'all';
	}

	function getInitialPage(): number {
		if (!browser) {
			return 1;
		}

		const value = Number(new URLSearchParams(window.location.search).get('page') ?? '1');

		return Number.isFinite(value) && value > 0 ? Math.floor(value) : 1;
	}

	let query = $state('');
	let category = $state<SearchCategory>('all');
	let currentPage = $state(1);
	let previousFilterKey = $state('|all');
	let urlStateReady = $state(false);

	let results = $derived(searchWiki(query, category));
	let pageCount = $derived(Math.max(1, Math.ceil(results.length / pageSize)));
	let visibleResults = $derived(
		results.slice((currentPage - 1) * pageSize, currentPage * pageSize)
	);
	let activeFilterCount = $derived([
		query.trim().length > 0,
		category !== 'all'
	].filter(Boolean).length);

	$effect(() => {
		if (currentPage > pageCount) {
			currentPage = pageCount;
		}
	});

	$effect(() => {
		const filterKey = `${query.trim()}|${category}`;

		if (filterKey !== previousFilterKey) {
			previousFilterKey = filterKey;
			currentPage = 1;
		}
	});

	$effect(() => {
		if (!browser || !urlStateReady) {
			return;
		}

		const params = new URLSearchParams();
		const cleanQuery = query.trim();

		if (cleanQuery) {
			params.set('q', cleanQuery);
		}

		if (category !== 'all') {
			params.set('type', category);
		}

		if (currentPage > 1) {
			params.set('page', String(currentPage));
		}

		const pathname = window.location.pathname;
		const nextUrl = params.toString()
			? `${pathname}?${params.toString()}`
			: pathname;

		replaceState(nextUrl, {});
	});

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const nextQuery = params.get('q') ?? '';
		const nextCategory = getInitialCategory();

		query = nextQuery;
		category = nextCategory;
		currentPage = getInitialPage();
		previousFilterKey = `${nextQuery.trim()}|${nextCategory}`;
		urlStateReady = true;
	});

	function resetFilters(): void {
		query = '';
		category = 'all';
		currentPage = 1;
	}

	function setPage(value: number): void {
		currentPage = Math.max(1, Math.min(value, pageCount));
	}
</script>

<section class="wiki-search" aria-labelledby="wiki-search-title">
	<header class="wiki-search__header">
		<div>
			<h2 id="wiki-search-title">Search the Wiki</h2>
			<p>
				Searches {searchIndex.length} indexed pages and spells from central Wiki data,
				route metadata, tags, structured content, and spell text.
			</p>
		</div>

		<p>{results.length} results</p>
	</header>

	<WikiSearchFilters
		bind:query
		bind:category
		{activeFilterCount}
		onReset={resetFilters}
	/>

	<section class="wiki-search__explanation" aria-labelledby="wiki-search-how-title">
		<h3 id="wiki-search-how-title">How Search Works</h3>
		<p>
			Results come from the central internal data tree and the generated spell dataset.
			The index only returns real internal pages or spell routes. It searches titles,
			subtitles, descriptions, long page-header text, tags, URLs, and structured page
			content where available.
		</p>
		<p>
			Matches in titles and tags score higher than matches in long body text. This keeps
			exact page names, class names, spell names, rules, and abbreviations near the top
			while still allowing deeper content text to be found.
		</p>
	</section>

	{#if results.length}
		<div class="wiki-search__results">
			{#each visibleResults as result}
				<WikiSearchResult {result} />
			{/each}
		</div>

		{#if pageCount > 1}
			<nav class="wiki-search__pagination" aria-label="Search results pages">
				<button type="button" onclick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
					Previous
				</button>
				<span>Page {currentPage} of {pageCount}</span>
				<button type="button" onclick={() => setPage(currentPage + 1)} disabled={currentPage === pageCount}>
					Next
				</button>
			</nav>
		{/if}
	{:else}
		<section class="wiki-search__empty" aria-label="No search results">
			<h3>No results found</h3>
			<p>Try a broader term, another content type, or a rules term such as action, spell, rage, AC, or concentration.</p>
		</section>
	{/if}
</section>
