<!--
	Location: src/lib/svelte/components/page/PublicRoadmap.svelte
	Use: Renders public roadmap items grouped by status with URL-backed filters.
-->
<script lang="ts">
	import { browser } from '$app/environment';
	import { replaceState } from '$app/navigation';
	import { onMount } from 'svelte';
	import type {
		CommunityLink,
		CommunityMetadata,
		RoadmapItem,
		RoadmapPriority,
		RoadmapStatus
	} from '$lib/typescript/data/_index_';

	import CommunityBadge from './CommunityBadge.svelte';
	import CommunityLinks from './CommunityLinks.svelte';

	let {
		items,
		statuses,
		priorities,
		areas
	}: {
		items: readonly RoadmapItem[];
		statuses: Readonly<Record<RoadmapStatus, CommunityMetadata>>;
		priorities: Readonly<Record<RoadmapPriority, CommunityMetadata>>;
		areas: Readonly<Record<string, CommunityMetadata>>;
	} = $props();

	const allValue = 'all';
	let statusEntries = $derived(
		Object.entries(statuses) as readonly [RoadmapStatus, CommunityMetadata][]
	);
	let areaEntries = $derived(Object.entries(areas));

	let selectedStatus = $state(allValue);
	let selectedArea = $state(allValue);
	let urlStateReady = $state(false);

	let filteredItems = $derived(
		items.filter((item) =>
			(selectedStatus === allValue || item.status === selectedStatus) &&
			(selectedArea === allValue || item.area === selectedArea)
		)
	);

	let activeFilterCount = $derived([
		selectedStatus !== allValue,
		selectedArea !== allValue
	].filter(Boolean).length);

	function getInitialParam(name: string, allowed: readonly string[]): string {
		if (!browser) {
			return allValue;
		}

		const value = new URLSearchParams(window.location.search).get(name) ?? allValue;

		return value === allValue || allowed.includes(value) ? value : allValue;
	}

	function getItemsForStatus(status: RoadmapStatus): readonly RoadmapItem[] {
		return filteredItems.filter((item) => item.status === status);
	}

	function hasStatusItems(status: RoadmapStatus): boolean {
		return getItemsForStatus(status).length > 0;
	}

	function resetFilters(): void {
		selectedStatus = allValue;
		selectedArea = allValue;
	}

	function getLinks(item: RoadmapItem): readonly CommunityLink[] {
		return [
			...(item.githubUrl
				? [{ label: 'GitHub issue', href: item.githubUrl, external: true }]
				: []),
			...(item.relatedPage
				? [{ label: 'Related Wiki page', href: item.relatedPage }]
				: [])
		];
	}

	function getTone(status: RoadmapStatus): 'default' | 'muted' | 'strong' | 'warning' | 'done' {
		if (status === 'completed') {
			return 'done';
		}

		if (status === 'cancelled' || status === 'paused') {
			return 'muted';
		}

		if (status === 'in-progress' || status === 'review') {
			return 'strong';
		}

		return status === 'planned' ? 'warning' : 'default';
	}

	$effect(() => {
		if (!browser || !urlStateReady) {
			return;
		}

		const params = new URLSearchParams(window.location.search);

		for (const [name, value] of [
			['status', selectedStatus],
			['area', selectedArea]
		]) {
			if (value === allValue) {
				params.delete(name);
			} else {
				params.set(name, value);
			}
		}

		const nextUrl = params.toString()
			? `${window.location.pathname}?${params.toString()}`
			: window.location.pathname;

		replaceState(nextUrl, {});
	});

	onMount(() => {
		selectedStatus = getInitialParam('status', statusEntries.map(([status]) => status));
		selectedArea = getInitialParam('area', areaEntries.map(([area]) => area));
		urlStateReady = true;
	});
</script>

<section class="community-panel" aria-labelledby="roadmap-filter-title">
	<header class="community-panel__header">
		<div>
			<h3 id="roadmap-filter-title">Filter Roadmap</h3>
			<p>{filteredItems.length} visible roadmap item{filteredItems.length === 1 ? '' : 's'}.</p>
		</div>
	</header>

	<div class="community-filters">
		<label>
			<span>Status</span>
			<select id="roadmap-status" name="status" bind:value={selectedStatus}>
				<option value={allValue}>All statuses</option>
				{#each statusEntries as [status, metadata]}
					<option value={status}>{metadata.label}</option>
				{/each}
			</select>
		</label>

		<label>
			<span>Area</span>
			<select id="roadmap-area" name="area" bind:value={selectedArea}>
				<option value={allValue}>All areas</option>
				{#each areaEntries as [area, metadata]}
					<option value={area}>{metadata.label}</option>
				{/each}
			</select>
		</label>

		<button type="button" onclick={resetFilters} disabled={activeFilterCount === 0}>
			Reset filters
		</button>
	</div>
</section>

{#if filteredItems.length}
	<div class="community-groups">
		{#each statusEntries as [status, metadata]}
			{#if selectedStatus === allValue || hasStatusItems(status)}
				<section class="community-group" aria-labelledby={`roadmap-${status}-title`}>
					<header class="community-group__header">
						<div>
							<h3 id={`roadmap-${status}-title`}>{metadata.label}</h3>
							{#if metadata.description}
								<p>{metadata.description}</p>
							{/if}
						</div>
					</header>

					{#if getItemsForStatus(status).length}
						<div class="community-grid">
							{#each getItemsForStatus(status) as item}
								<article class="community-card" id={item.id}>
									<header class="community-card__header">
										<div>
											<div class="community-card__badges">
												<CommunityBadge value={item.status} metadata={statuses[item.status]} tone={getTone(item.status)} />
												<CommunityBadge value={item.area} metadata={areas[item.area]} />
												{#if item.priority}
													<CommunityBadge value={item.priority} metadata={priorities[item.priority]} tone="muted" />
												{/if}
											</div>

											<h4>{item.title}</h4>
										</div>
									</header>

									<p>{item.summary}</p>

									{#if item.targetVersion || item.targetDate}
										<dl class="community-card__meta-list">
											{#if item.targetVersion}
												<div>
													<dt>Target version</dt>
													<dd>{item.targetVersion}</dd>
												</div>
											{/if}

											{#if item.targetDate}
												<div>
													<dt>Target date</dt>
													<dd>{item.targetDate}</dd>
												</div>
											{/if}
										</dl>
									{/if}

									<CommunityLinks links={getLinks(item)} />
								</article>
							{/each}
						</div>
					{:else}
						<section class="community-empty" aria-label={`No ${metadata.label} roadmap items`}>
							<h4>No items</h4>
							<p>No public roadmap items currently use this status.</p>
						</section>
					{/if}
				</section>
			{/if}
		{/each}
	</div>
{:else}
	<section class="community-empty" aria-label="No matching roadmap items">
		<h3>No matching roadmap items</h3>
		<p>Reset the filters or choose a broader status or area.</p>
	</section>
{/if}
