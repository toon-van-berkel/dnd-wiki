<script lang="ts">
	import { searchIndex } from '$lib/wiki/search-index';

	type Props = {
		menuOpen: boolean;
		onMenuToggle: () => void;
		onSearchNavigate: () => void;
	};

	let { menuOpen, onMenuToggle, onSearchNavigate }: Props = $props();
	let searchQuery = $state('');

	let normalizedQuery = $derived(searchQuery.trim().toLowerCase());
	let results = $derived(
		normalizedQuery
			? searchIndex
					.filter((entry) =>
						[entry.title, entry.category, entry.description, ...(entry.tags ?? [])]
							.join(' ')
							.toLowerCase()
							.includes(normalizedQuery)
					)
					.slice(0, 6)
			: []
	);

	function clearSearch() {
		searchQuery = '';
	}

	function handleResultNavigation() {
		clearSearch();
		onSearchNavigate();
	}
</script>

<header class="header">
	<a class="header__brand" href="/" aria-label="D&D Portal wiki home">
		<img src="/dndportal_wiki-74x32.svg" alt="D&D Portal" width="74" height="32" />
		<span class="header__divider" aria-hidden="true"></span>
		<span class="header__name">Rules Wiki</span>
	</a>

	<div class="header__actions">
		<div class="search">
			<label class="search__field">
				<span class="sr-only">Search wiki pages</span>
				<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
					<path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
				</svg>
				<input bind:value={searchQuery} type="search" placeholder="Search pages…" autocomplete="off" />
				{#if searchQuery}
					<button class="search__clear" type="button" onclick={clearSearch} aria-label="Clear search">×</button>
				{/if}
			</label>

			{#if normalizedQuery}
				<div class="search__results" aria-label="Search results" aria-live="polite">
					{#each results as result}
						<a href={result.href} onclick={handleResultNavigation}>
							<span class="search__result-copy">
								<strong>{result.title}</strong>
								<small>{result.category} · {result.description}</small>
							</span>
							<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
						</a>
					{:else}
						<p>No pages found</p>
					{/each}
				</div>
			{/if}
		</div>

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
</style>
