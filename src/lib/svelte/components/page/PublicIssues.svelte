<!--
	Location: src/lib/svelte/components/page/PublicIssues.svelte
	Use: Renders curated public issues with URL-backed filters.
-->
<script lang="ts">
	import { browser } from '$app/environment';
	import { replaceState } from '$app/navigation';
	import { onMount } from 'svelte';
	import type {
		CommunityLink,
		CommunityMetadata,
		PublicIssue,
		PublicIssueSource,
		PublicIssueStatus
	} from '$lib/typescript/data/_index_';

	import CommunityBadge from './CommunityBadge.svelte';
	import CommunityLinks from './CommunityLinks.svelte';

	let {
		issues,
		statuses,
		sources,
		categories,
		githubIssuesPath,
		discordFeedbackPath
	}: {
		issues: readonly PublicIssue[];
		statuses: Readonly<Record<PublicIssueStatus, CommunityMetadata>>;
		sources: Readonly<Record<PublicIssueSource, CommunityMetadata>>;
		categories: Readonly<Record<string, CommunityMetadata>>;
		githubIssuesPath: string;
		discordFeedbackPath: string;
	} = $props();

	const allValue = 'all';
	let statusEntries = $derived(
		Object.entries(statuses) as readonly [PublicIssueStatus, CommunityMetadata][]
	);
	let sourceEntries = $derived(
		Object.entries(sources) as readonly [PublicIssueSource, CommunityMetadata][]
	);
	let categoryEntries = $derived(Object.entries(categories));

	let selectedStatus = $state(allValue);
	let selectedSource = $state(allValue);
	let selectedCategory = $state(allValue);
	let urlStateReady = $state(false);

	let filteredIssues = $derived(
		issues.filter((issue) =>
			(selectedStatus === allValue || issue.status === selectedStatus) &&
			(selectedSource === allValue || issue.source === selectedSource) &&
			(selectedCategory === allValue || issue.category === selectedCategory)
		)
	);

	let activeFilterCount = $derived([
		selectedStatus !== allValue,
		selectedSource !== allValue,
		selectedCategory !== allValue
	].filter(Boolean).length);

	function getInitialParam(name: string, allowed: readonly string[]): string {
		if (!browser) {
			return allValue;
		}

		const value = new URLSearchParams(window.location.search).get(name) ?? allValue;

		return value === allValue || allowed.includes(value) ? value : allValue;
	}

	function resetFilters(): void {
		selectedStatus = allValue;
		selectedSource = allValue;
		selectedCategory = allValue;
	}

	function getIssueLinks(issue: PublicIssue): readonly CommunityLink[] {
		return [
			...(issue.githubUrl
				? [{ label: 'GitHub issue', href: issue.githubUrl, external: true }]
				: []),
			...(issue.relatedPage
				? [{ label: 'Related Wiki page', href: issue.relatedPage }]
				: []),
			...(issue.relatedRelease
				? [{ label: 'Related release', href: issue.relatedRelease, external: true }]
				: [])
		];
	}

	function getTone(status: PublicIssueStatus): 'default' | 'muted' | 'strong' | 'warning' | 'done' {
		if (status === 'resolved') {
			return 'done';
		}

		if (status === 'declined' || status === 'duplicate') {
			return 'muted';
		}

		if (status === 'in-progress' || status === 'accepted' || status === 'planned') {
			return 'strong';
		}

		return status === 'under-review' ? 'warning' : 'default';
	}

	$effect(() => {
		if (!browser || !urlStateReady) {
			return;
		}

		const params = new URLSearchParams(window.location.search);

		for (const [name, value] of [
			['status', selectedStatus],
			['source', selectedSource],
			['category', selectedCategory]
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
		selectedSource = getInitialParam('source', sourceEntries.map(([source]) => source));
		selectedCategory = getInitialParam('category', categoryEntries.map(([category]) => category));
		urlStateReady = true;
	});
</script>

<section class="community-panel" aria-labelledby="public-issues-filter-title">
	<header class="community-panel__header">
		<div>
			<h3 id="public-issues-filter-title">Filter Public Issues</h3>
			<p>{filteredIssues.length} visible issue{filteredIssues.length === 1 ? '' : 's'}.</p>
		</div>

		<CommunityLinks
			label="Issue reporting links"
			links={[
				{ label: 'Open GitHub Issues', href: githubIssuesPath },
				{ label: 'Open Discord feedback', href: discordFeedbackPath }
			]}
		/>
	</header>

	<div class="community-filters">
		<label>
			<span>Status</span>
			<select id="public-issues-status" name="status" bind:value={selectedStatus}>
				<option value={allValue}>All statuses</option>
				{#each statusEntries as [status, metadata]}
					<option value={status}>{metadata.label}</option>
				{/each}
			</select>
		</label>

		<label>
			<span>Source</span>
			<select id="public-issues-source" name="source" bind:value={selectedSource}>
				<option value={allValue}>All sources</option>
				{#each sourceEntries as [source, metadata]}
					<option value={source}>{metadata.label}</option>
				{/each}
			</select>
		</label>

		<label>
			<span>Category</span>
			<select id="public-issues-category" name="category" bind:value={selectedCategory}>
				<option value={allValue}>All categories</option>
				{#each categoryEntries as [category, metadata]}
					<option value={category}>{metadata.label}</option>
				{/each}
			</select>
		</label>

		<button type="button" onclick={resetFilters} disabled={activeFilterCount === 0}>
			Reset filters
		</button>
	</div>
</section>

{#if filteredIssues.length}
	<div class="community-grid community-grid--timeline">
		{#each filteredIssues as issue}
			<article class="community-card" id={issue.id}>
				<header class="community-card__header">
					<div>
						<div class="community-card__badges">
							<CommunityBadge
								value={issue.status}
								metadata={statuses[issue.status]}
								tone={getTone(issue.status)}
							/>
							<CommunityBadge value={issue.source} metadata={sources[issue.source]} tone="muted" />
							<CommunityBadge value={issue.category} metadata={categories[issue.category]} />
						</div>

						<h3>{issue.title}</h3>
					</div>

					<time datetime={issue.updatedAt ?? issue.reportedAt}>
						Updated {issue.updatedAt ?? issue.reportedAt}
					</time>
				</header>

				<p>{issue.summary}</p>

				{#if issue.resolution}
					<p class="community-card__resolution">{issue.resolution}</p>
				{/if}

				<CommunityLinks links={getIssueLinks(issue)} />
			</article>
		{/each}
	</div>
{:else}
	<section class="community-empty" aria-label="No matching public issues">
		<h3>No matching public issues</h3>
		<p>Reset the filters or choose a broader status, source, or category.</p>
	</section>
{/if}
