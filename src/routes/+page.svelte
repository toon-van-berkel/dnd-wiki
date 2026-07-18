<!-- site\src\routes\+page.svelte -->
<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';

	import AccentDetailsCard from '$lib/pages/AccentDetailsCard/AccentDetailsCard.svelte';
	import CardGrid from '$lib/pages/CardGrid/CardGrid.svelte';
	import IconCallout from '$lib/pages/IconCallout/IconCallout.svelte';
	import IconLinkCard from '$lib/pages/IconLinkCard/IconLinkCard.svelte';
	import StatusLegend from '$lib/pages/StatusLegend/StatusLegend.svelte';
	import StepList from '$lib/pages/StepList/StepList.svelte';
	import TagList from '$lib/pages/TagList/TagList.svelte';

	import {
		availabilityStatuses,
		guestPlayers,
		partyCards,
		quickLinks,
		wikiSteps
	} from './page.data';

</script>

<PageSection title="Quick links">
	<p class="page-section-intro">
		Open one of the primary wiki sections or search for a specific rule, option, creature, or location.
	</p>

	<CardGrid minCardWidth="14rem">
		{#each quickLinks as link}
			<IconLinkCard {...link} />
		{/each}
	</CardGrid>
</PageSection>

<PageSection title="How to use this wiki">
	<div class="page-section-content">
		<p class="page-section-intro">
			The portal combines general D&amp;D reference material with campaign-specific rulings. Check the page 
			information before using an option in a character or campaign.
		</p>

		<StepList items={wikiSteps} />
	</div>
</PageSection>

<PageSection title="Campaign availability">
	<p class="page-section-intro">
		Species, classes, subclasses, equipment, and other options can have a different status in each campaign.
	</p>

	<StatusLegend items={availabilityStatuses} />
</PageSection>

<PageSection title="Check your party">
	<p class="page-section-intro">
		Use the party name and member list below to determine which
		campaign rules apply to your character.
	</p>

	<CardGrid minCardWidth="17rem">
		{#each partyCards as party}
			<AccentDetailsCard {...party} />
		{/each}
	</CardGrid>

	<div class="guest-player-callout">
		<IconCallout
			title="Dedicated guest players"
			description="Guest players can join campaigns without belonging to one permanent party."
			icon="iconsList.game.party"
			color="var(--guest)"
			background="var(--guest-soft)"
		>
			<TagList items={guestPlayers} />
		</IconCallout>
	</div>
</PageSection>
