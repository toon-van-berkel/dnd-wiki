<!--
	Location: src/lib/svelte/components/page/PageContentSection.svelte
	Use: Renders reusable structured wiki content sections.
-->
<script lang="ts">
	import type {
		PageContentBlock,
		PageContentField,
		PageContentSection
	} from '$lib/typescript/data/_index_';

	import PageCard from '$lib/svelte/components/PageCard.svelte';

	import Changelog from './Changelog.svelte';
	import CommunityAnnouncements from './CommunityAnnouncements.svelte';
	import CommunityPortalLinks from './CommunityPortalLinks.svelte';
	import CommunityWikiUpdates from './CommunityWikiUpdates.svelte';
	import InlineContent from './InlineContent.svelte';
	import PublicIssues from './PublicIssues.svelte';
	import PublicRoadmap from './PublicRoadmap.svelte';
	import TraitTable from './TraitTable.svelte';

	let {
		section,
		headingLevel = 'section'
	}: {
		section: PageContentSection;
		headingLevel?: 'section' | 'subsection';
	} = $props();
	let hasTable = $derived(section.blocks.some((block) => block.type === 'table'));
</script>

{#snippet renderField(field: PageContentField)}
	<div class="content-section__field">
		<dt>{field.label}</dt>

		<dd>
			{#if field.content}
				<p>
					<InlineContent content={field.content} />
				</p>
			{/if}

			{#if field.items?.length}
				<ul>
					{#each field.items as item}
						<li>
							<InlineContent content={item} />
						</li>
					{/each}
				</ul>
			{/if}
		</dd>
	</div>
{/snippet}

{#snippet renderBlock(block: PageContentBlock)}
	{#if block.type === 'paragraph'}
		<p>
			<InlineContent content={block.content} />
		</p>
	{:else if block.type === 'list'}
		<ul>
			{#each block.items as item}
				<li>
					<InlineContent content={item} />
				</li>
			{/each}
		</ul>
	{:else if block.type === 'field-list'}
		<dl>
			{#each block.items as field}
				{@render renderField(field)}
			{/each}
		</dl>
	{:else if block.type === 'table'}
		<TraitTable
			caption={block.caption}
			columns={block.columns}
			rows={block.rows}
			showCaption={block.showCaption}
		/>
	{:else if block.type === 'card-grid'}
		{#each block.groups as group}
			<section
				class="content-section__card-group"
				aria-labelledby={`${section.id}-${group.title.toLowerCase().replaceAll(' ', '-')}-title`}
			>
				<h3 id={`${section.id}-${group.title.toLowerCase().replaceAll(' ', '-')}-title`}>
					{group.title}
				</h3>

				<div class="wiki-article__image-cards">
					{#each group.cards as card}
						{#if 'page' in card}
							<PageCard
								page={card.page}
								variant="image"
								eyebrow={card.source}
							/>
						{:else}
							<PageCard
								variant="image"
								fallback={{
									title: card.title,
									source: card.source,
									description: card.description,
									tags: card.tags
								}}
							/>
						{/if}
					{/each}
				</div>
			</section>
		{/each}
	{:else if block.type === 'formula'}
		<p class="content-section__formula">
			<InlineContent content={block.content} />
		</p>
	{:else if block.type === 'changelog'}
		<Changelog releases={block.releases} />
	{:else if block.type === 'community-announcements'}
		<CommunityAnnouncements
			announcements={block.announcements}
			categories={block.categories}
		/>
	{:else if block.type === 'community-wiki-updates'}
		<CommunityWikiUpdates
			updates={block.updates}
			categories={block.categories}
			changelogPath={block.changelogPath}
		/>
	{:else if block.type === 'community-portal-links'}
		<CommunityPortalLinks
			links={block.links}
			categories={block.categories}
		/>
	{:else if block.type === 'public-issues'}
		<PublicIssues
			issues={block.issues}
			statuses={block.statuses}
			sources={block.sources}
			categories={block.categories}
			githubIssuesPath={block.githubIssuesPath}
			discordFeedbackPath={block.discordFeedbackPath}
		/>
	{:else if block.type === 'public-roadmap'}
		<PublicRoadmap
			items={block.items}
			statuses={block.statuses}
			priorities={block.priorities}
			areas={block.areas}
		/>
	{/if}
{/snippet}

<section
	class="content-section"
	class:content-section--subsection={headingLevel === 'subsection'}
	class:content-section--table={hasTable}
	id={section.id}
	aria-labelledby={`${section.id}-title`}
>
	<header class="content-section__header">
		<div class="content-section__title-group">
			{#if headingLevel === 'subsection'}
				<h3 id={`${section.id}-title`}>{section.title}</h3>
			{:else}
				<h2 id={`${section.id}-title`}>{section.title}</h2>
			{/if}

			{#if section.subtitleContent}
				<p>
					<InlineContent content={section.subtitleContent} />
				</p>
			{:else if section.subtitle}
				<p>{section.subtitle}</p>
			{/if}
		</div>

		{#if section.optional}
			<span class="content-section__badge">Optional</span>
		{/if}
	</header>

	<div class="content-section__body">
		{#each section.blocks as block}
			{@render renderBlock(block)}
		{/each}
	</div>
</section>
