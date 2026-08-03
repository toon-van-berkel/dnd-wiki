<!--
	Location: src/lib/svelte/components/page/Changelog.svelte
	Use: Renders release-history data as a searchable, filterable timeline.
-->
<script lang="ts">
	import type {
		ChangelogCategory,
		ChangelogChange,
		ChangelogRelease,
		LinkPath
	} from '$lib/typescript/data/_index_';

	import Link from '$lib/svelte/components/Link.svelte';

	let { releases }: { releases: readonly ChangelogRelease[] } = $props();

	const categoryOptions = [
		{ value: 'all', label: 'All changes' },
		{ value: 'added', label: 'Added' },
		{ value: 'changed', label: 'Changed' },
		{ value: 'fixed', label: 'Fixed' },
		{ value: 'content', label: 'Content' },
		{ value: 'removed', label: 'Removed' },
		{ value: 'security', label: 'Security' }
	] as const;

	let searchTerm = $state('');
	let selectedCategory = $state<ChangelogCategory | 'all'>('all');
	let expandedReleases = $state<ReadonlySet<string>>(new Set());

	function changeMatchesSearch(
		change: ChangelogChange,
		release: ChangelogRelease,
		query: string
	): boolean {
		if (!query) {
			return true;
		}

		return [
			release.version,
			release.date,
			release.title,
			release.description,
			change.category,
			change.title,
			change.description
		]
			.join(' ')
			.toLowerCase()
			.includes(query);
	}

	function changeMatchesCategory(change: ChangelogChange): boolean {
		return selectedCategory === 'all' || change.category === selectedCategory;
	}

	let normalizedSearch = $derived(searchTerm.trim().toLowerCase());
	let filteredReleases = $derived(
		releases
			.map((release) => ({
				...release,
				changes: release.changes.filter(
					(change) =>
						changeMatchesCategory(change) &&
						changeMatchesSearch(change, release, normalizedSearch)
				)
			}))
			.filter((release) => release.changes.length > 0)
	);
	let visibleChangeCount = $derived(
		filteredReleases.reduce((count, release) => count + release.changes.length, 0)
	);

	function setCategory(category: ChangelogCategory | 'all'): void {
		selectedCategory = category;
	}

	function isExpanded(release: ChangelogRelease): boolean {
		return expandedReleases.has(release.version);
	}

	function isExpandable(release: ChangelogRelease): boolean {
		return release.changes.length > 8;
	}

	function getVisibleChanges(release: ChangelogRelease): readonly ChangelogChange[] {
		return isExpanded(release) ? release.changes : release.changes.slice(0, 8);
	}

	function toggleRelease(release: ChangelogRelease): void {
		const next = new Set(expandedReleases);

		if (next.has(release.version)) {
			next.delete(release.version);
		} else {
			next.add(release.version);
		}

		expandedReleases = next;
	}
</script>

<div class="changelog">
	<div class="changelog__toolbar" aria-label="Changelog filters">
		<label class="changelog__search">
			<span>Search the changelog</span>
			<input
				type="search"
				bind:value={searchTerm}
				placeholder="Search by version, title, date, or description..."
			>
		</label>

		<div class="changelog__filters" aria-label="Change categories">
			{#each categoryOptions as category}
				<button
					type="button"
					class="changelog__filter"
					class:changelog__filter--active={selectedCategory === category.value}
					onclick={() => setCategory(category.value)}
				>
					{category.label}
				</button>
			{/each}
		</div>

		<p class="changelog__count" role="status">
			Showing {visibleChangeCount} matching change{visibleChangeCount === 1 ? '' : 's'}.
		</p>
	</div>

	<div class="changelog__timeline">
		{#each filteredReleases as release}
			<article class="changelog-release" id={`version-${release.version.replaceAll('.', '-')}`}>
				<header class="changelog-release__header">
					<div>
						<p class="changelog-release__meta">
							<span>Version {release.version}</span>
							<time datetime={release.date}>{release.date}</time>
						</p>

						<h3>{release.title}</h3>
						<p>{release.description}</p>
					</div>

					<a
						class="changelog-release__anchor"
						href={`#version-${release.version.replaceAll('.', '-')}`}
						aria-label={`Link to version ${release.version}`}
					>
						#
					</a>
				</header>

				<ul
					id={`version-${release.version.replaceAll('.', '-')}-changes`}
					class="changelog-release__changes"
					class:changelog-release__changes--collapsed={isExpandable(release) && !isExpanded(release)}
				>
					{#each getVisibleChanges(release) as change}
						<li class="changelog-change changelog-change--{change.category}">
							<span class="changelog-change__badge">{change.category}</span>

							<div class="changelog-change__content">
								<h4>{change.title}</h4>
								<p>{change.description}</p>

								{#if change.action}
									<Link
										goto={change.action.path as LinkPath}
										placeholder={change.action.label}
										popup="description"
									/>
								{/if}
							</div>
						</li>
					{/each}
				</ul>

				{#if isExpandable(release)}
					<div class="changelog-release__more">
						<button
							type="button"
							aria-expanded={isExpanded(release)}
							aria-controls={`version-${release.version.replaceAll('.', '-')}-changes`}
							onclick={() => toggleRelease(release)}
						>
							{isExpanded(release)
								? 'Show less'
								: `Show more (${release.changes.length - getVisibleChanges(release).length} more)`}
						</button>
					</div>
				{/if}
			</article>
		{/each}
	</div>
</div>
