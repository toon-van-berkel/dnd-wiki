<script lang="ts">
	import CardGrid from '$lib/pages/CardGrid/CardGrid.svelte';
	import IconLinkCard from '$lib/pages/IconLinkCard/IconLinkCard.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { getPageEntry, type PageRegistryEntry } from '$lib/page/registry';

	const linkCards = [
		{
			page: getPageEntry('spells-and-abilities--techniques'),
			actionLabel: 'View Techniques'
		},
		{
			page: getPageEntry('spells-and-abilities--spells'),
			actionLabel: 'View Spells'
		}
	].filter((entry): entry is { page: PageRegistryEntry; actionLabel: string } => Boolean(entry.page));
</script>

<PageSection>
	<CardGrid minCardWidth="18rem">
		{#each linkCards as card (card.page.id)}
			<IconLinkCard
				title={card.page.title}
				href={card.page.href}
				icon={card.page.icon ?? 'iconsList.game.spell'}
				description={card.page.shortDescription ?? card.page.description}
				actionLabel={card.actionLabel}
				iconSize="5rem"
			/>
		{/each}
	</CardGrid>
</PageSection>
