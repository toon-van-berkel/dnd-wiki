<!--
	Location: src/lib/svelte/components/page/ReferenceDetail.svelte
	Use: Shared detail layout for equipment and NPC reference pages.
-->
<script lang="ts">
	import type { InlineContent } from '$lib/typescript/data/_index_';

	import InlineContentRenderer from './InlineContent.svelte';

	type ReferenceMetaItem = {
		readonly label: string;
		readonly value: string;
	};

	let {
		eyebrow,
		title,
		description,
		meta,
		tags = [],
		sectionTitle = 'Details'
	}: {
		eyebrow: string;
		title: string;
		description: InlineContent;
		meta: readonly ReferenceMetaItem[];
		tags?: readonly string[];
		sectionTitle?: string;
	} = $props();
</script>

<article class="wiki-article reference-detail">
	<header class="reference-detail__header">
		<p>{eyebrow}</p>
		<h1>{title}</h1>
	</header>

	{#if meta.length}
		<dl class="reference-detail__meta">
			{#each meta as item}
				<div>
					<dt>{item.label}</dt>
					<dd>{item.value}</dd>
				</div>
			{/each}
		</dl>
	{/if}

	<section class="reference-detail__section" aria-labelledby="reference-detail-text-title">
		<h2 id="reference-detail-text-title">{sectionTitle}</h2>
		<p><InlineContentRenderer content={description} /></p>
	</section>

	{#if tags.length}
		<section class="reference-detail__section" aria-labelledby="reference-detail-tags-title">
			<h2 id="reference-detail-tags-title">Tags</h2>

			<ul class="reference-detail__tags">
				{#each tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>
