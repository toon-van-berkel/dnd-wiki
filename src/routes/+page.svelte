<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import WikiTable from '$lib/components/WikiTable.svelte';
	import { dungeonMasterById, parties, type PartyId } from '$lib/config/campaigns';
	import { getWikiPage } from '$lib/wiki/registry';

	const pageMeta = getWikiPage('home');

	const quickLinks = [
		{
			title: 'Search the Wiki',
			href: '/search',
			description: 'Search rules, classes, species, spells, equipment, locations, and other Wiki content.',
			imagePosition: 'center'
		},
		{
			title: 'Species',
			href: '/species',
			description: 'Check which species are available in each campaign.',
			image: '/others/paw.png',
			imagePosition: 'center'
		},
		{
			title: 'Classes',
			href: '/classes',
			description: 'Browse class and subclass guidance.',
			image: '/others/classes-diagram.png',
			imagePosition: 'center'
		},
		{
			title: 'Movement',
			href: '/rules/movement',
			description: 'Read our positioning and travel rulings.',
			image: '/others/movement-running.png',
			imagePosition: 'center'
		},
		{
			title: 'Fighting',
			href: '/rules/fighting',
			description: 'Review the combat rules used at the table.',
			image: '/others/crossed-swords.png',
			imagePosition: 'center'
		},
		{
			title: 'Monsters',
			href: '/monsters',
			description: 'Find creatures the parties have encountered.',
			image: '/others/monster-skull.png',
			imagePosition: 'center'
		},
		{
			title: 'Locations',
			href: '/locations',
			description: 'Explore known places in the campaign world.',
			image: '/others/location-pin.png',
			imagePosition: 'center'
		}
	];

	const partyColumns = ['DM', 'Party ID', 'Party name', 'Members'];

	const partyMembers = {
		i1: 'Tijs, Andy, Stan, Roel & Bryce',
		i2: 'Tijs, Ben, Thomas, Vince & Stijn',
		i3: 'Stan, Roel & Bryce',
		i4: 'Stan & Roel',
		i5: 'Jaydon, Arch & Rafeal',
		i6: 'Jaydon, Rafeal, Mo & Tyler',
		i7: 'Thomas, Ben, Tiago & Toon',
		i8: 'Melvin, Lucas, Toon & Thomas'
	} satisfies Record<PartyId, string>;

	const partyRows = parties.map((party) => [
		dungeonMasterById.get(party.dmId)?.shortName ?? party.dmId,
		party.name.split(' - ')[0],
		party.name.split(' - ')[1] ?? '...',
		partyMembers[party.id]
	]);
</script>

<svelte:head>
	<title>D&D Portal — Rules Wiki</title>
	<meta
		name="description"
		content="The source of truth for our campaign rules, character options, and setting notes."
	/>
</svelte:head>

<PageHeader
	title={pageMeta?.title}
	description={pageMeta?.description}
	eyebrow={pageMeta?.eyebrow}
/>

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
