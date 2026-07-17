<!-- <script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';
	import {
		buildHeaderSearchHref,
		getCollectionSuggestions,
		getSearchSuggestions
	} from '$lib/utils/wiki-search';
	import { contentTypeLabels } from '$lib/wiki/search-index';

	type Props = {
		menuOpen: boolean;
		onMenuToggle: () => void;
		onSearchNavigate: () => void;
	};

	let { menuOpen, onMenuToggle, onSearchNavigate }: Props = $props();
	let searchQuery = $state('');

	let normalizedQuery = $derived(searchQuery.trim().toLowerCase());
	let results = $derived(normalizedQuery ? getSearchSuggestions(searchQuery, 6) : []);
	let collections = $derived(normalizedQuery ? getCollectionSuggestions(searchQuery, 3) : []);

	$effect(() => {
		if (page.route.id === '/search') {
			searchQuery = page.url.searchParams.get('q') ?? '';
		}
	});

	function clearSearch() {
		searchQuery = '';
	}

	function submitSearch() {
		const href = buildHeaderSearchHref(searchQuery, {
			currentRouteId: page.route.id,
			currentSearchParams: page.url.searchParams
		});

		clearSearch();
		onSearchNavigate();
		void goto(resolveAppPath(href));
	}

	function handleResultNavigation() {
		clearSearch();
		onSearchNavigate();
	}
</script>

<header class="header">
	<a class="header__brand" href={resolveAppPath('/')} aria-label="D&D Portal wiki home">
		<img src={resolveAssetPath('/dndportal_wiki-74x32.svg')} alt="D&D Portal" width="74" height="32" />
		<span class="header__divider" aria-hidden="true"></span>
		<span class="header__name">Rules Wiki</span>
	</a>

	<div class="header__actions">
		<form
			class="search"
			role="search"
			onsubmit={(event) => {
				event.preventDefault();
				submitSearch();
			}}
		>
			<label class="search__field">
				<span class="sr-only">Search wiki pages</span>
				<button class="search__submit" type="submit" aria-label="Search the Wiki">
					<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
					<path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
					</svg>
				</button>
				<input bind:value={searchQuery} type="search" placeholder="Search pages..." autocomplete="off" />
				{#if searchQuery}
					<button class="search__clear" type="button" onclick={clearSearch} aria-label="Clear search">x</button>
				{/if}
			</label>

			{#if normalizedQuery}
				<div class="search__results" aria-label="Search results" aria-live="polite">
					{#each results as result}
						<a href={resolveAppPath(result.href)} onclick={handleResultNavigation}>
							<span class="search__result-copy">
								<strong>{result.title}</strong>
								<small>{contentTypeLabels[result.kind]} - {result.description}</small>
							</span>
							<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
						</a>
					{/each}

					{#if collections.length}
						<p>Browse sections</p>
						{#each collections as collection}
							<a href={resolveAppPath(collection.href)} onclick={handleResultNavigation}>
								<span class="search__result-copy">
									<strong>{collection.title}</strong>
									<small>{collection.description}</small>
								</span>
								<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
							</a>
						{/each}
					{/if}

					<a href={resolveAppPath(buildHeaderSearchHref(searchQuery, {
						currentRouteId: page.route.id,
						currentSearchParams: page.url.searchParams
					}))} onclick={handleResultNavigation}>
						<span class="search__result-copy">
							<strong>Search the Wiki</strong>
							<small>Open full search results and filters</small>
						</span>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
					</a>

					{#if !results.length && !collections.length}
						<p>No pages found</p>
					{/if}
				</div>
			{/if}
		</form>

		<button
			class="header__menu"
			type="button"
			onclick={onMenuToggle}
			aria-expanded={menuOpen}
			aria-controls="wiki-navigation"
		>
			<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
			<span class="sr-only">Toggle wiki navigation</span>
		</button>
	</div>
</header>

<style lang="scss">
	@use './Header.scss';
</style> -->
