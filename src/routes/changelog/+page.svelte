<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	import {
		changelog,
		changeTypeLabels,
		type ChangeType
	} from '$lib/data/changelog';

	type ChangeFilter = ChangeType | 'all';

	const changeFilters: Array<{
		value: ChangeFilter;
		label: string;
	}> = [
		{ value: 'all', label: 'All changes' },
		{ value: 'added', label: 'Added' },
		{ value: 'changed', label: 'Changed' },
		{ value: 'fixed', label: 'Fixed' },
		{ value: 'content', label: 'Content' },
		{ value: 'removed', label: 'Removed' },
		{ value: 'security', label: 'Security' }
	];

	let searchQuery = $state('');
	let selectedFilter = $state<ChangeFilter>('all');

	const totalChanges = $derived(
		changelog.reduce((total, release) => total + release.items.length, 0)
	);

	const latestRelease = $derived(changelog[0]);

	const normalisedQuery = $derived(
		searchQuery.trim().toLocaleLowerCase()
	);

	const filteredReleases = $derived(
		changelog
			.map((release) => {
				const releaseMatchesSearch = [
					release.version,
					release.title,
					release.summary,
					release.date
				]
					.join(' ')
					.toLocaleLowerCase()
					.includes(normalisedQuery);

				const items = release.items.filter((item) => {
					const matchesType =
						selectedFilter === 'all' ||
						item.type === selectedFilter;

					if (!matchesType) {
						return false;
					}

					if (!normalisedQuery || releaseMatchesSearch) {
						return true;
					}

					return [
						item.title,
						item.description,
						changeTypeLabels[item.type]
					]
						.join(' ')
						.toLocaleLowerCase()
						.includes(normalisedQuery);
				});

				return {
					...release,
					items
				};
			})
			.filter((release) => release.items.length > 0)
	);

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		}).format(new Date(`${date}T00:00:00Z`));
	}

	function clearFilters() {
		searchQuery = '';
		selectedFilter = 'all';
	}
</script>

<svelte:head>
	<title>Changelog | D&D Portal</title>

	<meta
		name="description"
		content="A chronological overview of new features, content updates, fixes, and other changes made to the D&D Portal Wiki."
	/>
</svelte:head>

<PageHeader
	title="Changelog"
	description="A chronological overview of new features, content additions, improvements, fixes, and other changes made to the D&D Portal Wiki."
	eyebrow="Project development"
/>

<div class="changelog-summary">
	<div>
		<strong>{latestRelease?.version ?? '—'}</strong>
		<span>latest version</span>
	</div>

	<div>
		<strong>{changelog.length}</strong>
		<span>{changelog.length === 1 ? 'release' : 'releases'}</span>
	</div>

	<div>
		<strong>{totalChanges}</strong>
		<span>registered changes</span>
	</div>
</div>

<PageSection title="About the changelog">
	<p>
		This page records meaningful changes made to the D&D Portal Wiki. It
		includes technical improvements, new pages, content additions, corrected
		information, navigation updates, accessibility work, and other project
		developments.
	</p>

	<p>
		Small spelling corrections, minor formatting changes, dependency updates,
		and internal development work may not always receive an individual
		changelog entry.
	</p>

	<p>
		The changelog applies to the public Wiki. The separate D&D Player Portal
		may use its own version history and release process.
	</p>
</PageSection>

<PageSection title="Change categories">
	<div class="changelog-categories">
		<article class="changelog-category changelog-category--added">
			<strong>Added</strong>
			<p>New pages, features, components, or functionality.</p>
		</article>

		<article class="changelog-category changelog-category--changed">
			<strong>Changed</strong>
			<p>Existing behaviour, structure, design, or information that was revised.</p>
		</article>

		<article class="changelog-category changelog-category--fixed">
			<strong>Fixed</strong>
			<p>Errors, broken behaviour, incorrect information, or technical problems.</p>
		</article>

		<article class="changelog-category changelog-category--content">
			<strong>Content</strong>
			<p>Rules, classes, species, campaigns, or other Wiki content.</p>
		</article>

		<article class="changelog-category changelog-category--removed">
			<strong>Removed</strong>
			<p>Features or information that are no longer available.</p>
		</article>

		<article class="changelog-category changelog-category--security">
			<strong>Security</strong>
			<p>Privacy, security, dependency, or vulnerability-related changes.</p>
		</article>
	</div>
</PageSection>

<PageSection title="Release history">
	<div class="changelog-controls">
		<label class="changelog-search">
			<span>Search the changelog</span>

			<input
				type="search"
				bind:value={searchQuery}
				placeholder="Search by version, title, date, or description…"
			/>
		</label>

		<div
			class="changelog-filters"
			aria-label="Filter changelog entries"
		>
			{#each changeFilters as filter}
				<button
					type="button"
					class:changelog-filter--active={selectedFilter === filter.value}
					aria-pressed={selectedFilter === filter.value}
					onclick={() => {
						selectedFilter = filter.value;
					}}
				>
					{filter.label}
				</button>
			{/each}
		</div>
	</div>

	<p class="changelog-result-count" aria-live="polite">
		Showing
		<strong>
			{filteredReleases.reduce(
				(total, release) => total + release.items.length,
				0
			)}
		</strong>
		matching
		{filteredReleases.reduce(
			(total, release) => total + release.items.length,
			0
		) === 1
			? 'change'
			: 'changes'}.
	</p>

	{#if filteredReleases.length > 0}
		<div class="changelog-timeline">
			{#each filteredReleases as release}
				<article
					id={release.id}
					class="changelog-release"
				>
					<div
						class="changelog-release__marker"
						aria-hidden="true"
					></div>

					<header class="changelog-release__header">
						<div>
							<div class="changelog-release__meta">
								<span class="changelog-release__version">
									Version {release.version}
								</span>

								<time datetime={release.date}>
									{formatDate(release.date)}
								</time>
							</div>

							<h3>{release.title}</h3>
							<p>{release.summary}</p>
						</div>

						<a
							class="changelog-release__anchor"
							href={`#${release.id}`}
							aria-label={`Link to version ${release.version}`}
						>
							#
						</a>
					</header>

					<ul class="changelog-items">
						{#each release.items as item}
							<li class="changelog-item">
								<div
									class={`changelog-item__type changelog-item__type--${item.type}`}
								>
									{changeTypeLabels[item.type]}
								</div>

								<div class="changelog-item__content">
									<h4>{item.title}</h4>
									<p>{item.description}</p>

									{#if item.links?.length}
										<div class="changelog-item__links">
											{#each item.links as link}
												<a
													href={resolveAppPath(link.href)}
													target={link.external
														? '_blank'
														: undefined}
													rel={link.external
														? 'noopener noreferrer'
														: undefined}
												>
													{link.label}

													{#if link.external}
														<span aria-hidden="true">
															↗
														</span>
													{/if}
												</a>
											{/each}
										</div>
									{/if}
								</div>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	{:else}
		<div class="changelog-empty">
			<h3>No matching changes found</h3>

			<p>
				Try another search term or select a different change category.
			</p>

			<button type="button" onclick={clearFilters}>
				Clear filters
			</button>
		</div>
	{/if}
</PageSection>

<PageSection title="Versions and release numbering">
	<p>
		D&D Portal uses version numbers to group related changes. A version may
		contain content updates, visual improvements, technical work, or a
		combination of several change types.
	</p>

	<div class="changelog-versioning">
		<div>
			<code>1.0.0</code>
			<strong>Major version</strong>
			<p>
				A substantial release that may introduce major systems or structural
				changes.
			</p>
		</div>

		<div>
			<code>0.1.0</code>
			<strong>Minor version</strong>
			<p>
				New pages, features, content sections, or significant improvements.
			</p>
		</div>

		<div>
			<code>0.0.1</code>
			<strong>Patch version</strong>
			<p>
				Corrections, small improvements, and fixes that do not fundamentally
				change the website.
			</p>
		</div>
	</div>

	<p>
		During early development, version numbers may remain below
		<code>1.0.0</code> while the structure and core features of the Wiki are
		still being developed.
	</p>
</PageSection>

<PageSection title="Reporting missing or incorrect information">
	<p>
		Changes can occasionally introduce incorrect content, broken navigation,
		visual problems, or accessibility issues.
	</p>

	<p>
		When reporting a problem, include the affected page, the version in which
		the issue appeared where known, and a description of the expected
		behaviour.
	</p>

	<div class="changelog-actions">
		<a href="mailto:toonvanberkel.public@gmail.com?subject=D%26D%20Portal%20changelog">
			Contact by email
		</a>

		<a href={resolveAppPath('/credits')}>
			View project credits
		</a>

		<a href={resolveAppPath('/about')}>
			About D&D Portal
		</a>
	</div>
</PageSection>

<style lang="scss">
	@use './Changelog.scss';
</style>
