<!--
	Location: src/lib/svelte/components/page/NpcBrowser.svelte
	Use: Filterable NPC browser for the central NPCs category.
-->
<script lang="ts">
	import type { PugilistNpc as NpcBrowserItem } from '$lib/typescript/data/internals/classes/pugilist';
	import { getPugilistNpcHref } from '$lib/typescript/data/internals/classes/pugilist';
	import type { InlineContentNode } from '$lib/typescript/data/_index_';
	import { getCanonicalInternalHref } from '$lib/typescript/pages/currentPage';

	let { items }: { items: readonly NpcBrowserItem[] } = $props();

	let searchTerm = $state('');
	let selectedChallenge = $state('all');

	let challenges = $derived([...new Set(items.map((item) => item.challenge))].sort());

	function getNodeText(node: InlineContentNode): string {
		if (node.type === 'text') {
			return node.text;
		}

		if (node.type === 'link') {
			return node.label ?? '';
		}

		return node.children.map(getNodeText).join(' ');
	}

	function matchesSearch(item: NpcBrowserItem): boolean {
		const query = searchTerm.trim().toLowerCase();

		if (!query) {
			return true;
		}

		return [
			item.name,
			item.challenge,
			item.description.map(getNodeText).join(' ')
		]
			.join(' ')
			.toLowerCase()
			.includes(query);
	}

	let visibleItems = $derived(
		items.filter((item) => (
			matchesSearch(item) &&
			(selectedChallenge === 'all' || item.challenge === selectedChallenge)
		))
	);
	let activeFilterCount = $derived([
		searchTerm.trim().length > 0,
		selectedChallenge !== 'all'
	].filter(Boolean).length);

	function resetFilters(): void {
		searchTerm = '';
		selectedChallenge = 'all';
	}

	function getItemHref(item: NpcBrowserItem): string {
		return getCanonicalInternalHref(getPugilistNpcHref(item));
	}

	function getDescriptionText(item: NpcBrowserItem): string {
		return item.description.map(getNodeText).join(' ');
	}
</script>

<section class="npc-browser" id="npc-browser" aria-labelledby="npc-browser-title">
	<header class="npc-browser__header">
		<h2 id="npc-browser-title">NPC Browser</h2>
		<p>{visibleItems.length} NPC{visibleItems.length === 1 ? '' : 's'}</p>
	</header>

	<div class="npc-browser__toolbar" aria-label="NPC filters">
		<label
			class="npc-browser__filter npc-browser__filter--search"
			class:npc-browser__filter--active={searchTerm.trim().length > 0}
		>
			<span>Search</span>
			<input
				id="npc-search"
				name="npc-search"
				type="search"
				bind:value={searchTerm}
				placeholder="Name, action, damage, trait..."
			/>
		</label>

		<label
			class="npc-browser__filter"
			class:npc-browser__filter--active={selectedChallenge !== 'all'}
		>
			<span>Challenge</span>
			<select id="npc-challenge" name="npc-challenge" bind:value={selectedChallenge}>
				<option value="all">All CRs</option>
				{#each challenges as challenge}
					<option value={challenge}>CR {challenge}</option>
				{/each}
			</select>
		</label>

		{#if activeFilterCount > 0}
			<div class="npc-browser__filter-summary" role="status">
				<span>{activeFilterCount} filter{activeFilterCount === 1 ? '' : 's'} active</span>
				<button type="button" onclick={resetFilters}>Reset</button>
			</div>
		{/if}
	</div>

	{#if visibleItems.length}
		<div class="npc-browser__grid">
			{#each visibleItems as item}
				<a class="npc-browser-card" href={getItemHref(item)}>
					<header>
						<p>NPC - CR {item.challenge}</p>
						<h3>{item.name}</h3>
					</header>

					<div class="npc-browser-card__description">
						<p>{getDescriptionText(item)}</p>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<p class="npc-browser__empty">
			No NPCs match the current filters.
		</p>
	{/if}
</section>
