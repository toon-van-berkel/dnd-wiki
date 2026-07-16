<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import WikiTable from '$lib/components/WikiTable.svelte';
	import { getDungeonMasterForParty, parties } from '$lib/config/campaigns';
	import { getWikiPage } from '$lib/wiki/registry';

	const homeQuickLinkIds = [
		'search',
		'species',
		'classes',
		'rules--movement',
		'rules--fighting',
		'monsters',
		'locations'
	];
	const quickLinkAssets: Record<string, { image?: string; imagePosition: string }> = {
		search: { imagePosition: 'center' },
		species: { image: '/others/paw.png', imagePosition: 'center' },
		classes: { image: '/others/classes-diagram.png', imagePosition: 'center' },
		'rules--movement': { image: '/others/movement-running.png', imagePosition: 'center' },
		'rules--fighting': { image: '/others/crossed-swords.png', imagePosition: 'center' },
		monsters: { image: '/others/monster-skull.png', imagePosition: 'center' },
		locations: { image: '/others/location-pin.png', imagePosition: 'center' }
	};

	const quickLinks = homeQuickLinkIds.map((pageId) => {
		const page = getWikiPage(pageId);

		if (!page) {
			throw new Error(`Home quick link references unknown Wiki page ${pageId}.`);
		}

		return {
			title: page.title,
			href: page.href,
			description: page.description ?? '',
			...quickLinkAssets[pageId]
		};
	});

	const partyColumns = ['DM', 'Party', 'Short name', 'Members'];

	const partyRows = parties.map((party) => [
		getDungeonMasterForParty(party.id)?.shortName ?? party.dmId,
		party.name,
		party.shortName,
		party.members
	]);
</script>

<PageSection title="How to use this wiki">
	<p>
		Rules can differ between parties because each campaign has its own premise and tone.
		Campaign notes clearly identify exceptions that only apply to one group.
	</p>

	<p>
		Species and class pages show whether an option is <strong>Allowed</strong>,
		<strong>Limited</strong>, <strong>Banned</strong>, or needs DM approval in each campaign.
	</p>
</PageSection>

<PageSection title="Check your party">
	<p>If you are unsure which party you are in, please check this list:</p>

	<WikiTable
		caption="Campaign parties and their members"
		columns={partyColumns}
		rows={partyRows}
	/>

	<h2>Dedicated guest players</h2>
	<ol>
		<li>Sam</li>
		<li>Casper</li>
		<li>Liam</li>
		<li>Ronin</li>
		<li>Aron</li>
		<li>Mathijs</li>
	</ol>
</PageSection>

<section class="home-links" aria-labelledby="quick-links-heading">
	<h2 id="quick-links-heading">Quick links</h2>
	<ChildLinkGrid links={quickLinks} />
</section>

<style lang="scss">
	.home-links {
		margin-top: 2.25rem;

		h2 {
			margin: 0 0 1rem;
			color: var(--text-heading);
			font-size: 1.05rem;
			letter-spacing: -0.01em;
		}
	}
</style>
