<!--
	Location: src/lib/svelte/components/page/WikiSearchFilters.svelte
	Use: Reusable controls for the Wiki search page.
-->
<script lang="ts">
	import type { SearchCategory } from '$lib/typescript/pages/search';
	import { searchCategories } from '$lib/typescript/pages/search';

	let {
		query = $bindable(),
		category = $bindable(),
		activeFilterCount = 0,
		onReset
	}: {
		query: string;
		category: SearchCategory;
		activeFilterCount?: number;
		onReset: () => void;
	} = $props();
</script>

<div class="wiki-search-filters" aria-label="Wiki search filters">
	<label class="wiki-search-filters__search">
		<span>Search</span>
		<input
			id="wiki-search-query"
			name="q"
			type="search"
			bind:value={query}
			placeholder="Search rules, classes, spells, pages, tags..."
			autocomplete="off"
		>
	</label>

	<div class="wiki-search-filters__row">
		<div class="wiki-search-filters__group" aria-label="Content type">
			<span>Type</span>

			<div class="wiki-search-filters__chips">
				{#each searchCategories as item}
					<label
						class="wiki-search-filters__chip"
						class:wiki-search-filters__chip--active={category === item.value}
					>
						<input
							id={`wiki-search-category-${item.value}`}
							name="type"
							type="radio"
							bind:group={category}
							value={item.value}
						>
						{item.label}
					</label>
				{/each}
			</div>
		</div>

		{#if activeFilterCount > 0}
			<div class="wiki-search-filters__summary" role="status">
				<span>{activeFilterCount} filter{activeFilterCount === 1 ? '' : 's'} active</span>
				<button type="button" onclick={onReset}>Reset filters</button>
			</div>
		{/if}
	</div>
</div>
