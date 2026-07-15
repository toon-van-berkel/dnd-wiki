<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import EmptyState from '$lib/components/feedback/EmptyState.svelte';
	import ActionButton from '$lib/components/forms/ActionButton.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SearchFilterGroup from '$lib/components/search/SearchFilterGroup.svelte';
	import { resolveAppPath } from '$lib/utils/paths';
	import { getWikiPage } from '$lib/wiki/registry';
	import {
		createEmptySearchState,
		getCollectionSuggestions,
		getSearchSuggestions,
		getSearchTagLabel,
		getTagFacets,
		getTypeFacets,
		groupTagFacets,
		paginateResults,
		readSearchStateFromParams,
		searchWiki,
		writeSearchStateToParams,
		type WikiSearchState
	} from '$lib/utils/wiki-search';
	import { contentTypeLabels, type SearchEntryKind } from '$lib/wiki/search-index';

	const pageMeta = getWikiPage('search');

	let query = $state('');
	let queryInput = $state('');
	let typeIds = $state<SearchEntryKind[]>([]);
	let tagIds = $state<string[]>([]);
	let currentPage = $state(1);
	let suggestionsOpen = $state(false);
	let filtersOpen = $state(false);
	let activeSuggestionIndex = $state(-1);
	let syncedUrlSearch = $state('');
	let resultsHeading: HTMLHeadingElement;

	let searchState = $derived({
		query,
		typeIds,
		tagIds,
		page: currentPage
	} as WikiSearchState);
	let results = $derived(searchWiki(searchState));
	let pagination = $derived(paginateResults(results, currentPage));
	let suggestions = $derived(getSearchSuggestions(queryInput));
	let collectionSuggestions = $derived(getCollectionSuggestions(query));
	let typeFacets = $derived(getTypeFacets(searchState));
	let tagFacets = $derived(getTagFacets(searchState));
	let tagFacetGroups = $derived(groupTagFacets(tagFacets));
	let activeFilterCount = $derived(typeIds.length + tagIds.length);
	let hasSearchState = $derived(Boolean(query || activeFilterCount));
	let hasFacetControls = $derived(Boolean(typeFacets.length || tagFacetGroups.length));

	onMount(() => {
		applyStateFromUrl();
	});

	$effect(() => {
		if (page.url.search !== syncedUrlSearch) {
			applyStateFromUrl();
		}
	});

	function applyStateFromUrl() {
		const state = readSearchStateFromParams(page.url.searchParams);

		query = state.query;
		queryInput = state.query;
		typeIds = state.typeIds;
		tagIds = state.tagIds;
		currentPage = state.page;
		syncedUrlSearch = page.url.search;
	}

	function setQueryInput(value: string) {
		queryInput = value;
		suggestionsOpen = Boolean(value.trim());
		activeSuggestionIndex = -1;
	}

	function submitSearch(replaceState = false) {
		query = queryInput.trim().replace(/\s+/g, ' ');
		currentPage = 1;
		suggestionsOpen = false;
		activeSuggestionIndex = -1;
		void syncUrlState(replaceState);
	}

	function toggleType(typeId: SearchEntryKind, checked: boolean) {
		typeIds = toggleId(typeIds, typeId, checked);
		currentPage = 1;
		closeFiltersOnMobile();
		void syncUrlState(true);
	}

	function toggleTag(tagId: string, checked: boolean) {
		tagIds = toggleId(tagIds, tagId, checked);
		currentPage = 1;
		closeFiltersOnMobile();
		void syncUrlState(true);
	}

	function clearFilters() {
		typeIds = [];
		tagIds = [];
		currentPage = 1;
		void syncUrlState(true);
	}

	function resetSearch() {
		const emptyState = createEmptySearchState();

		query = emptyState.query;
		queryInput = emptyState.query;
		typeIds = emptyState.typeIds;
		tagIds = emptyState.tagIds;
		currentPage = emptyState.page;
		suggestionsOpen = false;
		activeSuggestionIndex = -1;
		void syncUrlState(true);
	}

	function closeFiltersOnMobile() {
		if (browser && window.matchMedia('(max-width: 38rem)').matches) {
			filtersOpen = false;
		}
	}

	function removeType(typeId: SearchEntryKind) {
		toggleType(typeId, false);
	}

	function removeTag(tagId: string) {
		toggleTag(tagId, false);
	}

	function chooseSuggestion(href: string) {
		suggestionsOpen = false;
		activeSuggestionIndex = -1;
		void goto(resolveAppPath(href));
	}

	function handleSuggestionKeydown(event: KeyboardEvent) {
		if (!suggestions.length) {
			return;
		}

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			suggestionsOpen = true;
			activeSuggestionIndex = (activeSuggestionIndex + 1) % suggestions.length;
		}

		if (event.key === 'ArrowUp') {
			event.preventDefault();
			suggestionsOpen = true;
			activeSuggestionIndex =
				activeSuggestionIndex <= 0 ? suggestions.length - 1 : activeSuggestionIndex - 1;
		}

		if (event.key === 'Enter' && activeSuggestionIndex >= 0) {
			event.preventDefault();
			chooseSuggestion(suggestions[activeSuggestionIndex].href);
		}

		if (event.key === 'Escape') {
			suggestionsOpen = false;
			activeSuggestionIndex = -1;
		}
	}

	async function goToResultsPage(pageNumber: number) {
		currentPage = pageNumber;
		await syncUrlState(false);
		await tick();
		resultsHeading?.focus();
	}

	async function syncUrlState(replaceState: boolean) {
		if (!browser) {
			return;
		}

		const nextResults = searchWiki({ query, typeIds, tagIds, page: currentPage } as WikiSearchState);
		const nextPagination = paginateResults(nextResults, currentPage);

		if (currentPage !== nextPagination.page) {
			currentPage = nextPagination.page;
		}

		const nextUrl = new URL(page.url);
		nextUrl.search = writeSearchStateToParams(nextUrl.searchParams, {
			query,
			typeIds,
			tagIds,
			page: currentPage
		} as WikiSearchState).toString();

		if (nextUrl.href !== page.url.href) {
			syncedUrlSearch = nextUrl.search;
			await goto(nextUrl, {
				replaceState,
				noScroll: replaceState,
				keepFocus: true
			});
		}
	}

	function toggleId<T extends string>(ids: T[], id: T, checked: boolean) {
		return checked ? [...new Set([...ids, id])] : ids.filter((selectedId) => selectedId !== id);
	}
</script>

<svelte:head>
	<title>{pageMeta?.title ?? 'Search the Wiki'} | D&D Portal</title>
	<meta
		name="description"
		content={pageMeta?.description ?? 'Search individual D&D Portal Wiki rules, character options, species, locations, and other content.'}
	/>
</svelte:head>

<PageHeader
	title={pageMeta?.title}
	description={pageMeta?.description}
	eyebrow={pageMeta?.eyebrow}
/>

<div class="search-page">
	<div class="search-page__mobile-actions">
		<button
			type="button"
			aria-expanded={filtersOpen}
			aria-controls="search-filter-panel"
			onclick={() => (filtersOpen = !filtersOpen)}
		>
			Filters
			{#if activeFilterCount}
				<span>{activeFilterCount}</span>
			{/if}
		</button>
	</div>

	<section
		id="search-filter-panel"
		class="search-panel"
		class:search-panel--open={filtersOpen}
		aria-labelledby="search-form-heading"
	>
		<h2 id="search-form-heading">Search</h2>

		<form
			class="search-panel__form"
			role="search"
			onsubmit={(event) => {
				event.preventDefault();
				submitSearch(false);
			}}
		>
			<label class="search-panel__field">
				<span>Search terms</span>
				<input
					class="form-control"
					type="search"
					value={queryInput}
					role="combobox"
					aria-autocomplete="list"
					aria-expanded={suggestionsOpen && suggestions.length > 0}
					aria-controls="wiki-search-suggestions"
					placeholder="Try rogue, stealth, divine, movement..."
					oninput={(event) => setQueryInput((event.currentTarget as HTMLInputElement).value)}
					onkeydown={handleSuggestionKeydown}
					onfocus={() => (suggestionsOpen = Boolean(queryInput.trim()))}
				/>
			</label>

			<button type="submit">Search</button>
		</form>

		{#if suggestionsOpen && suggestions.length}
			<ul id="wiki-search-suggestions" class="search-suggestions" role="listbox">
				{#each suggestions as suggestion, index}
					<li role="option" aria-selected={index === activeSuggestionIndex}>
						<button type="button" onclick={() => chooseSuggestion(suggestion.href)}>
							<strong>{suggestion.title}</strong>
							<span>{contentTypeLabels[suggestion.kind]}</span>
						</button>
					</li>
				{/each}
			</ul>
		{/if}

		<div class="search-panel__actions">
			<button
				type="button"
				onclick={() => {
					queryInput = '';
					submitSearch(true);
				}}
				disabled={!query && !queryInput}
			>
				Clear search
			</button>
			<button type="button" onclick={resetSearch} disabled={!hasSearchState}>Reset search</button>
		</div>

		{#if typeFacets.length}
			<SearchFilterGroup
				title="Content type"
				options={typeFacets}
				selectedIds={typeIds}
				onToggle={(id, checked) => toggleType(id as SearchEntryKind, checked)}
			/>
		{/if}

		{#if tagFacetGroups.length}
			<div class="search-tag-groups" aria-label="Tags">
				<h3>Tags</h3>

				{#each tagFacetGroups as group}
					<SearchFilterGroup
						title={group.label}
						options={group.facets}
						selectedIds={tagIds}
						collapsible
						defaultExpanded={group.selectedCount > 0}
						onToggle={toggleTag}
					/>
				{/each}
			</div>
		{/if}

		{#if !hasFacetControls}
			<p class="search-panel__empty">No additional filters are available for this search.</p>
		{/if}
	</section>

	<section class="search-results" aria-labelledby="search-results-heading">
		<div class="search-results__summary">
			<div>
				<h2 id="search-results-heading" tabindex="-1" bind:this={resultsHeading}>
					Search results
				</h2>
				<p aria-live="polite">
					{#if pagination.total}
						Showing {pagination.start}-{pagination.end} of {pagination.total} results.
					{:else if hasSearchState}
						No matching Wiki content found.
					{:else}
						Search by title, tag, type, alias, or keyword.
					{/if}
				</p>
			</div>

			{#if activeFilterCount}
				<button type="button" onclick={clearFilters}>Clear filters</button>
			{/if}
		</div>

		{#if activeFilterCount}
			<div class="active-search-filters" aria-label="Active filters">
				<ul>
					{#each typeIds as typeId}
						<li>
							<span>{contentTypeLabels[typeId]}</span>
							<button type="button" onclick={() => removeType(typeId)}>Remove</button>
						</li>
					{/each}

					{#each tagIds as tagId}
						{@const tag = tagFacets.find((filter) => filter.id === tagId)}
						<li>
							<span>{tag?.label ?? getSearchTagLabel(tagId)}</span>
							<button type="button" onclick={() => removeTag(tagId)}>Remove</button>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		{#if collectionSuggestions.length}
			<section class="browse-sections" aria-labelledby="browse-sections-heading">
				<h3 id="browse-sections-heading">Browse sections</h3>
				<ul>
					{#each collectionSuggestions as collection}
						<li>
							<a href={resolveAppPath(collection.href)}>
								Browse all {collection.title}
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if pagination.items.length}
			<ol class="result-list" start={pagination.start}>
				{#each pagination.items as result}
					<li>
						<a href={resolveAppPath(result.href)}>
							<span>{contentTypeLabels[result.kind]}</span>
							<strong>{result.title}</strong>
							{#if result.parentTitle}
								<small>{result.parentTitle}</small>
							{/if}
							<p>{result.description || 'No description available.'}</p>
							{#if result.tags.length}
								<ul>
									{#each result.tags.slice(0, 6) as tagId}
										<li>{getSearchTagLabel(tagId)}</li>
									{/each}
								</ul>
							{/if}
						</a>
					</li>
				{/each}
			</ol>

			<nav class="search-pagination" aria-label="Search result pages">
				<button
					type="button"
					onclick={() => goToResultsPage(pagination.page - 1)}
					disabled={pagination.page === 1}
				>
					<span aria-hidden="true">&larr;</span>
					Previous
				</button>

				<span aria-current="page">Page {pagination.page} of {pagination.totalPages}</span>

				<button
					type="button"
					onclick={() => goToResultsPage(pagination.page + 1)}
					disabled={pagination.page === pagination.totalPages}
				>
					Next
					<span aria-hidden="true">&rarr;</span>
				</button>
		</nav>
		{:else if hasSearchState}
			<EmptyState
				title="No matching Wiki content found"
				description="Try another search term, remove one or more filters, or browse a Wiki section."
			>
				{#snippet actions()}
					<ActionButton onclick={clearFilters} disabled={!activeFilterCount}>Clear filters</ActionButton>
					<ActionButton onclick={resetSearch}>Reset search</ActionButton>
					<ActionButton href={resolveAppPath('/')}>Browse Wiki sections</ActionButton>
				{/snippet}
			</EmptyState>
		{:else}
			<EmptyState
				title="Start with a title, tag, or rules concept"
				description="Search rules, classes, species, spells, equipment, locations, and other Wiki content. Use content-type and tag filters to narrow the results."
			/>
		{/if}
	</section>
</div>

<style lang="scss">
	@use './Search.scss';
</style>
