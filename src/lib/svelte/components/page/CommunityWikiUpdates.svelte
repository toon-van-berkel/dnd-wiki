<!--
	Location: src/lib/svelte/components/page/CommunityWikiUpdates.svelte
	Use: Renders short community-friendly Wiki updates.
-->
<script lang="ts">
	import type {
		CommunityLink,
		CommunityMetadata,
		CommunityWikiUpdate
	} from '$lib/typescript/data/_index_';

	import CommunityEntryCard from './CommunityEntryCard.svelte';
	import CommunityLinks from './CommunityLinks.svelte';

	let {
		updates,
		categories,
		changelogPath
	}: {
		updates: readonly CommunityWikiUpdate[];
		categories: Readonly<Record<string, CommunityMetadata>>;
		changelogPath: string;
	} = $props();

	function getLinks(update: CommunityWikiUpdate): readonly CommunityLink[] {
		return [
			...(update.relatedPage
				? [
						{
							label: 'Related Wiki page',
							href: update.relatedPage
						}
					]
				: []),
			...(update.changelogUrl
				? [
						{
							label: 'Full changelog',
							href: changelogPath
						}
					]
				: []),
			...(update.releaseUrl
				? [
						{
							label: 'GitHub release',
							href: update.releaseUrl,
							external: true
						}
					]
				: [])
		];
	}
</script>

<CommunityLinks
	label="Full release history"
	links={[{ label: 'Open the full changelog', href: changelogPath }]}
/>

{#if updates.length}
	<div class="community-grid community-grid--timeline">
		{#each updates as update}
			<CommunityEntryCard
				id={update.id}
				title={update.title}
				summary={update.summary}
				date={update.date}
				category={update.category}
				categoryMetadata={categories[update.category]}
				links={getLinks(update)}
			/>
		{/each}
	</div>
{:else}
	<section class="community-empty" aria-label="No Wiki updates">
		<h3>No Wiki updates yet</h3>
		<p>Short community updates will appear here when public Wiki changes are selected for Discord-style summaries.</p>
	</section>
{/if}
