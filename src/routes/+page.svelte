<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import WikiTable from '$lib/components/WikiTable.svelte';

	const quickLinks = [
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

	const partyRows = [
		['Toon', 'Party 1', '...', 				'Tijs, Andy, Stan, Roel & Bryce'],
		['Toon', 'Party 2', 'LuckyClover', 		'Tijs, Ben, Thomas, Vince & Stijn'],
		['Toon', 'Party 3', 'FCGoonUnited', 	'Stan, Roel & Bryce'],
		['Toon', 'Party 4', '...',				'Stan & Roel'],
		['Toon', 'Party 5', 'FemboyAss', 		'Jaydon, Arch & Rafeal'],
		['Toon', 'Party 6', 'Crops', 			'Jaydon, Rafeal, Mo & Tyler'],
		['Tijs', 'Main', 	'750',				'Thomas, Ben, Tiago & Toon'],
		['Tijs', 'Scouting','MotelyCrew',		'Melvin, Lucas, Toon & Thomas']
	];
</script>

<svelte:head>
	<title>D&D Portal — Rules Wiki</title>
	<meta
		name="description"
		content="The source of truth for our campaign rules, character options, and setting notes."
	/>
</svelte:head>

<PageHeader
	title="Rules for our table"
	description="A practical campaign wiki for our players. Use it as the source of truth for table rulings, character options, and campaign-specific exceptions."
	eyebrow="D&D Portal wiki"
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