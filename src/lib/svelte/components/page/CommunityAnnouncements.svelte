<!--
	Location: src/lib/svelte/components/page/CommunityAnnouncements.svelte
	Use: Renders curated public Discord announcements.
-->
<script lang="ts">
	import type {
		CommunityAnnouncement,
		CommunityLink,
		CommunityMetadata
	} from '$lib/typescript/data/_index_';

	import CommunityEntryCard from './CommunityEntryCard.svelte';

	let {
		announcements,
		categories
	}: {
		announcements: readonly CommunityAnnouncement[];
		categories: Readonly<Record<string, CommunityMetadata>>;
	} = $props();

	function getLinks(announcement: CommunityAnnouncement): readonly CommunityLink[] {
		return [
			...(announcement.links ?? []),
			...(announcement.discordMessageUrl
				? [
						{
							label: 'Original Discord message',
							href: announcement.discordMessageUrl,
							external: true
						}
					]
				: [])
		];
	}
</script>

{#if announcements.length}
	<div class="community-grid community-grid--timeline">
		{#each announcements as announcement}
			<CommunityEntryCard
				id={announcement.id}
				title={announcement.title}
				summary={announcement.summary}
				date={announcement.date}
				category={announcement.category}
				categoryMetadata={categories[announcement.category]}
				links={getLinks(announcement)}
			/>
		{/each}
	</div>
{:else}
	<section class="community-empty" aria-label="No announcements">
		<h3>No public announcements yet</h3>
		<p>Meaningful public Discord announcements will appear here after they are manually selected.</p>
	</section>
{/if}
