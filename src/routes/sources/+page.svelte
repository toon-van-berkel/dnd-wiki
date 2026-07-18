<script lang="ts">
	import { resolveAppPath } from '$lib/utils/paths';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';

	import {
		sources,
		sourceKindLabels,
		sourceStatusLabels,
		sourceAccessLabels,
		type SourceKind
	} from '$lib/data/sources';

	type SourceFilter = SourceKind | 'all';

	const sourceFilters: Array<{
		value: SourceFilter;
		label: string;
	}> = [
		{ value: 'all', label: 'All sources' },
		{ value: 'official-book', label: 'Official publications' },
		{ value: 'official-online', label: 'Official online sources' },
		{ value: 'third-party', label: 'Third-party sources' },
		{ value: 'project', label: 'Project sources' }
	];

	let searchQuery = $state('');
	let selectedFilter = $state<SourceFilter>('all');

	const normalisedQuery = $derived(searchQuery.trim().toLocaleLowerCase());

	const filteredSources = $derived(
		sources.filter((source) => {
			const matchesFilter =
				selectedFilter === 'all' || source.kind === selectedFilter;

			if (!matchesFilter) {
				return false;
			}

			if (!normalisedQuery) {
				return true;
			}

			const searchableContent = [
				source.title,
				source.publisher,
				source.edition,
				source.description,
				source.usage,
				source.notes,
				source.authors?.join(' ')
			]
				.filter(Boolean)
				.join(' ')
				.toLocaleLowerCase();

			return searchableContent.includes(normalisedQuery);
		})
	);

	const activeSourceCount = $derived(
		sources.filter((source) => source.status === 'actively-used').length
	);
</script>

<div class="source-summary">
	<div>
		<strong>{sources.length}</strong>
		<span>registered sources</span>
	</div>

	<div>
		<strong>{activeSourceCount}</strong>
		<span>actively used sources</span>
	</div>

	<div>
		<strong>{sources.filter((source) => source.kind === 'official-book').length}</strong>
		<span>official publications</span>
	</div>
</div>

<PageSection title="How sources are used">
	<p>
		D&D Portal uses a combination of official publications, official online
		references, campaign documents, original material, and player feedback.
	</p>

	<p>
		A source being listed on this page does not necessarily mean that every part of
		that source has been reproduced or is currently used on the wiki. Some sources
		are used only for historical research, comparison, mechanical inspiration, or
		homebrew development.
	</p>

	<p>
		The website aims to distinguish between:
	</p>

	<ul>
		<li>Official Dungeons & Dragons rules.</li>
		<li>Simplified explanations of official rules.</li>
		<li>Dungeon Master interpretations.</li>
		<li>Campaign-specific house rules.</li>
		<li>Original homebrew material.</li>
		<li>Third-party or community-created material.</li>
	</ul>
</PageSection>

<PageSection title="Source, author, and licence">
	<p>
		A source, an author, and a licence are three different things.
	</p>

	<dl class="source-definitions">
		<div>
			<dt>Source</dt>
			<dd>
				The book, website, document, repository, person, or other location from
				which information was obtained.
			</dd>
		</div>

		<div>
			<dt>Author</dt>
			<dd>
				The person or organisation responsible for creating the original
				material.
			</dd>
		</div>

		<div>
			<dt>Licence or policy</dt>
			<dd>
				The conditions that determine how the material may be copied, modified,
				displayed, or redistributed.
			</dd>
		</div>
	</dl>

	<p>
		Public accessibility does not automatically mean that content is free from
		copyright or may be republished without permission.
	</p>
</PageSection>

<PageSection title="Registered sources">
	<div class="source-controls">
		<label class="source-search">
			<span>Search sources</span>

			<input
				type="search"
				bind:value={searchQuery}
				placeholder="Search by title, edition, publisher, or usage…"
			/>
		</label>

		<div class="source-filters" aria-label="Filter sources">
			{#each sourceFilters as filter}
				<button
					type="button"
					class:source-filter--active={selectedFilter === filter.value}
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

	<p class="source-result-count" aria-live="polite">
		Showing <strong>{filteredSources.length}</strong>
		{filteredSources.length === 1 ? 'source' : 'sources'}.
	</p>

	{#if filteredSources.length > 0}
		<div class="source-list">
			{#each filteredSources as source}
				<article class="source-card">
					<header class="source-card__header">
						<div>
							<p class="source-card__kind">
								{sourceKindLabels[source.kind]}
							</p>

							<h3>{source.title}</h3>
						</div>

						<span
							class="source-card__status"
							class:source-card__status--active={source.status === 'actively-used'}
							class:source-card__status--reference={source.status === 'reference'}
							class:source-card__status--planned={source.status === 'planned'}
						>
							{sourceStatusLabels[source.status]}
						</span>
					</header>

					<p class="source-card__description">
						{source.description}
					</p>

					<dl class="source-card__details">
						{#if source.publisher}
							<div>
								<dt>Publisher</dt>
								<dd>{source.publisher}</dd>
							</div>
						{/if}

						{#if source.authors?.length}
							<div>
								<dt>Author{source.authors.length === 1 ? '' : 's'}</dt>
								<dd>{source.authors.join(', ')}</dd>
							</div>
						{/if}

						{#if source.edition}
							<div>
								<dt>Edition</dt>
								<dd>{source.edition}</dd>
							</div>
						{/if}

						{#if source.publicationYear}
							<div>
								<dt>Published</dt>
								<dd>{source.publicationYear}</dd>
							</div>
						{/if}

						<div>
							<dt>Access</dt>
							<dd>{sourceAccessLabels[source.access]}</dd>
						</div>

						<div>
							<dt>Used for</dt>
							<dd>{source.usage}</dd>
						</div>

						{#if source.notes}
							<div>
								<dt>Notes</dt>
								<dd>{source.notes}</dd>
							</div>
						{/if}
					</dl>

					{#if source.url || source.additionalLinks?.length}
						<div class="source-card__links">
							{#if source.url}
								<a
									href={source.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									Open source
									<span aria-hidden="true">↗</span>
								</a>
							{/if}

							{#each source.additionalLinks ?? [] as link}
								<a
									href={resolveAppPath(link.href)}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.label}
									<span aria-hidden="true">↗</span>
								</a>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{:else}
		<div class="source-empty">
			<h3>No matching sources found</h3>

			<p>
				Try another search term or select a different source category.
			</p>

			<button
				type="button"
				onclick={() => {
					searchQuery = '';
					selectedFilter = 'all';
				}}
			>
				Clear filters
			</button>
		</div>
	{/if}
</PageSection>

<PageSection title="Official publications">
	<p>
		Commercial books are listed for attribution and reference purposes. Their
		inclusion on this page does not mean that D&D Portal distributes those books or
		grants access to their complete contents.
	</p>

	<p>
		Visitors should obtain commercial publications through an authorised retailer,
		publisher, licensed platform, library, or another lawful source.
	</p>

	<p>
		D&D Portal is intended as an informational and campaign-organisational resource,
		not as a replacement for official books or licensed digital services.
	</p>
</PageSection>

<PageSection title="Accuracy and conflicting sources">
	<p>
		Different editions and publications may contain different versions of a rule,
		class, species, spell, monster, or other game element.
	</p>

	<p>
		When sources conflict, the wiki should identify which edition, publication, or
		campaign decision is being used. The rule selected by the Dungeon Master for the
		relevant campaign takes priority during that campaign.
	</p>

	<p>
		If a wiki page unintentionally conflicts with its cited official source, the
		official source should normally be treated as authoritative unless the difference
		is clearly labelled as a house rule or deliberate interpretation.
	</p>
</PageSection>

<PageSection title="Suggesting or correcting a source">
	<p>
		If a source is missing, incorrectly identified, outdated, or linked incorrectly,
		please report it through GitHub or contact the website administrator.
	</p>

	<p>A useful source correction should include:</p>

	<ul>
		<li>The URL of the affected wiki page.</li>
		<li>The title of the source.</li>
		<li>The author or publisher, where known.</li>
		<li>The edition or publication year, where relevant.</li>
		<li>A chapter, page number, or official link.</li>
		<li>A short explanation of what should be corrected.</li>
	</ul>

	<div class="source-contact-links">
		<a href="mailto:toonvanberkel.public@gmail.com">
			Contact by email
		</a>

		<a href={resolveAppPath('/credits')}>
			View credits
		</a>

		<a href={resolveAppPath('/legal')}>
			Read the legal notice
		</a>
	</div>
</PageSection>

<style lang="scss">
	@use './Sources.scss';
</style>
