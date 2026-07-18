<!-- site\src\routes\+page.svelte -->
<script lang="ts">
	import Metadata from '$lib/page/Metadata.svelte';
	import PageHeader from '$lib/page/layout/navigation/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

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

	import { metadata } from './page.meta';
	import { headerdata } from './page.header';
</script>

<Metadata {metadata} />
<PageHeader {headerdata} />

<PageSection title="Quick links">
	<p class="page-section-intro">
		Open one of the primary wiki sections or search for a specific
		rule, option, creature, or location.
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
			The portal combines general D&amp;D reference material with
			campaign-specific rulings. Check the page information before
			using an option in a character or campaign.
		</p>

		<StepList items={wikiSteps} />
	</div>
</PageSection>

<PageSection title="Campaign availability">
	<p class="page-section-intro">
		Species, classes, subclasses, equipment, and other options can
		have a different status in each campaign.
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

<style lang="scss">
	.page-section-content {
		padding: 0.35rem 0.75rem 0.75rem;
	}

	.page-section-intro {
		max-width: 48rem;
		margin: 0 0 1.25rem;

		color: var(--text-secondary);

		line-height: 1.6;
	}

	.guest-player-callout {
		margin-top: var(--content-gap);
	}
</style>