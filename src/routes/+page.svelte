<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	const quickLinks = [
		{ title: 'Species', href: '/species', description: 'Check which species are available in each campaign.' },
		{ title: 'Classes', href: '/classes', description: 'Browse class and subclass guidance.' },
		{ title: 'Movement', href: '/rules/movement', description: 'Read our positioning and travel rulings.' },
		{ title: 'Fighting', href: '/rules/fighting', description: 'Review the combat rules used at the table.' },
		{ title: 'Monsters', href: '/monsters', description: 'Find creatures the parties have encountered.' },
		{ title: 'Locations', href: '/locations', description: 'Explore known places in the campaign world.' }
	];
</script>

<svelte:head>
	<title>D&D Portal — Rules Wiki</title>
	<meta name="description" content="The source of truth for our campaign rules, character options, and setting notes." />
</svelte:head>

<PageHeader
	title="Rules for our table"
	description="A practical campaign wiki for our players. Use it as the source of truth for table rulings, character options, and campaign-specific exceptions."
	eyebrow="D&D Portal wiki"
/>

<PageSection title="How to use this wiki">
	<p>Rules can differ between parties because each campaign has its own premise and tone. Campaign notes clearly identify exceptions that only apply to one group.</p>
	<p>Species and class pages show whether an option is <strong>Allowed</strong>, <strong>Limited</strong>, <strong>Banned</strong>, or needs DM approval in each campaign.</p>
</PageSection>

<PageSection title="Check your party">
	<p>If you are unsure which party you are in please check this list:</p>
	<ul>
		<li><b>Party 1:</b> Tijs, Andy, Stan, Roel & Bryce</li>
		<li><b>Party 2:</b> Tijs, Ben, Thomas, Vince & Stijn</li>
		<li><b>Party 3:</b> Stan, Roel & Bryce</li>
		<li><b>Party 4:</b> Stan & Roel</li>
		<li><b>Party 5:</b> Jaydon, Arch & Rafeal</li>
		<li><b>Party 6:</b> Jaydon, Rafeal, Mo, & Tyler</li>
	</ul>
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
