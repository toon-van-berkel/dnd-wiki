<!--
	Location: src/lib/svelte/components/page/CommunityEntryCard.svelte
	Use: Shared card layout for community timeline-style entries.
-->
<script lang="ts">
	import type {
		CommunityLink,
		CommunityMetadata
	} from '$lib/typescript/data/_index_';

	import CommunityBadge from './CommunityBadge.svelte';
	import CommunityLinks from './CommunityLinks.svelte';

	let {
		id,
		title,
		summary,
		date,
		category,
		categoryMetadata,
		links = []
	}: {
		id: string;
		title: string;
		summary: string;
		date?: string;
		category?: string;
		categoryMetadata?: CommunityMetadata;
		links?: readonly CommunityLink[];
	} = $props();
</script>

<article class="community-card" id={id}>
	<header class="community-card__header">
		<div>
			{#if category}
				<CommunityBadge value={category} metadata={categoryMetadata} />
			{/if}

			<h3>{title}</h3>
		</div>

		{#if date}
			<time datetime={date}>{date}</time>
		{/if}
	</header>

	<p>{summary}</p>

	<CommunityLinks {links} />
</article>
