<!--
	Location: src/lib/svelte/components/page/EquipmentBrowser.svelte
	Use: Filterable equipment browser for the central equipment category.
-->
<script lang="ts">
	import type { EquipmentItem as EquipmentBrowserItem } from '$lib/typescript/data/internals/equipment-items';
	import { getEquipmentItemHref } from '$lib/typescript/data/internals/equipment-items';
	import type { InlineContentNode } from '$lib/typescript/data/_index_';
	import { getCanonicalInternalHref } from '$lib/typescript/pages/currentPage';

	let {
		items,
		initialType = 'all',
		showTypeFilter = true,
		heading = 'Equipment Browser'
	}: {
		items: readonly EquipmentBrowserItem[];
		initialType?: string;
		showTypeFilter?: boolean;
		heading?: string;
	} = $props();

	let searchTerm = $state('');
	let userSelectedType = $state('all');
	let selectedRarity = $state('all');
	let selectedAttunement = $state('all');

	let selectedType = $derived(showTypeFilter ? userSelectedType : initialType);
	let types = $derived([...new Set(items.map((item) => item.type))].sort());
	let typeScopedItems = $derived(
		items.filter((item) => selectedType === 'all' || item.type === selectedType)
	);
	let rarities = $derived([...new Set(typeScopedItems.map((item) => item.rarity))].sort());

	function getNodeText(node: InlineContentNode): string {
		if (node.type === 'text') {
			return node.text;
		}

		if (node.type === 'link') {
			return node.label ?? '';
		}

		return node.children.map(getNodeText).join('');
	}

	function matchesSearch(item: EquipmentBrowserItem): boolean {
		const query = searchTerm.trim().toLowerCase();

		if (!query) {
			return true;
		}

		return [
			item.name,
			item.type,
			item.rarity,
			item.attunement ? 'requires attunement' : 'no attunement',
			item.tags.join(' '),
			item.description.map(getNodeText).join('')
		]
			.join(' ')
			.toLowerCase()
			.includes(query);
	}

	let visibleItems = $derived(
		items.filter((item) => (
			matchesSearch(item) &&
			(selectedType === 'all' || item.type === selectedType) &&
			(selectedRarity === 'all' || item.rarity === selectedRarity) &&
			(
				selectedAttunement === 'all' ||
				(selectedAttunement === 'required' && item.attunement) ||
				(selectedAttunement === 'none' && !item.attunement)
			)
		))
	);
	let activeFilterCount = $derived([
		searchTerm.trim().length > 0,
		showTypeFilter && selectedType !== 'all',
		selectedRarity !== 'all',
		selectedAttunement !== 'all'
	].filter(Boolean).length);

	function resetFilters(): void {
		searchTerm = '';
		userSelectedType = 'all';
		selectedRarity = 'all';
		selectedAttunement = 'all';
	}

	function getItemHref(item: EquipmentBrowserItem): string {
		return getCanonicalInternalHref(getEquipmentItemHref(item));
	}

	function getDescriptionText(item: EquipmentBrowserItem): string {
		return item.description.map(getNodeText).join('');
	}
</script>

<section
	class="equipment-browser"
	id="equipment-browser"
	aria-labelledby="equipment-browser-title"
>
	<header class="equipment-browser__header">
		<h2 id="equipment-browser-title">{heading}</h2>
		<p>{visibleItems.length} item{visibleItems.length === 1 ? '' : 's'}</p>
	</header>

	<div class="equipment-browser__toolbar" aria-label="Equipment filters">
		<label
			class="equipment-browser__filter equipment-browser__filter--search"
			class:equipment-browser__filter--active={searchTerm.trim().length > 0}
		>
			<span>Search</span>
			<input
				id="equipment-search"
				name="equipment-search"
				type="search"
				bind:value={searchTerm}
				placeholder="Name, type, rarity, damage..."
			/>
		</label>

		{#if showTypeFilter}
			<label
				class="equipment-browser__filter"
				class:equipment-browser__filter--active={selectedType !== 'all'}
			>
				<span>Type</span>
				<select id="equipment-type" name="equipment-type" bind:value={userSelectedType}>
					<option value="all">All types</option>
					{#each types as type}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</label>
		{/if}

		<label
			class="equipment-browser__filter"
			class:equipment-browser__filter--active={selectedRarity !== 'all'}
		>
			<span>Rarity</span>
			<select id="equipment-rarity" name="equipment-rarity" bind:value={selectedRarity}>
				<option value="all">All rarities</option>
				{#each rarities as rarity}
					<option value={rarity}>{rarity}</option>
				{/each}
			</select>
		</label>

		<label
			class="equipment-browser__filter"
			class:equipment-browser__filter--active={selectedAttunement !== 'all'}
		>
			<span>Attunement</span>
			<select id="equipment-attunement" name="equipment-attunement" bind:value={selectedAttunement}>
				<option value="all">Any attunement</option>
				<option value="required">Requires attunement</option>
				<option value="none">No attunement</option>
			</select>
		</label>

		{#if activeFilterCount > 0}
			<div class="equipment-browser__filter-summary" role="status">
				<span>{activeFilterCount} filter{activeFilterCount === 1 ? '' : 's'} active</span>
				<button type="button" onclick={resetFilters}>Reset</button>
			</div>
		{/if}
	</div>

	{#if visibleItems.length}
		<div class="equipment-browser__grid">
			{#each visibleItems as item}
				<a class="equipment-browser-card" href={getItemHref(item)}>
					<header>
						<p>{item.category} - {item.rarity}</p>
						<h3>{item.name}</h3>
					</header>

					{#if item.damage || item.cost || item.weight}
						<dl class="equipment-browser-card__stats">
							{#if item.damage}
								<div>
									<dt>Damage</dt>
									<dd>{getNodeText({ type: 'emphasis', children: item.damage })}</dd>
								</div>
							{/if}
							{#if item.cost}
								<div>
									<dt>Cost</dt>
									<dd>{item.cost}</dd>
								</div>
							{/if}
							{#if item.weight}
								<div>
									<dt>Weight</dt>
									<dd>{item.weight}</dd>
								</div>
							{/if}
						</dl>
					{/if}

					<p class="equipment-browser-card__attunement">
						{item.attunement ? 'Requires attunement' : 'No attunement'}
					</p>

					<div class="equipment-browser-card__description">
						<p>{getDescriptionText(item)}</p>
					</div>

					<ul class="equipment-browser-card__tags">
						{#each item.tags as tag}
							<li>{tag}</li>
						{/each}
					</ul>
				</a>
			{/each}
		</div>
	{:else}
		<p class="equipment-browser__empty">
			No equipment matches the current filters.
		</p>
	{/if}
</section>
