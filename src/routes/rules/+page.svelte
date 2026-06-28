<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	const rulePages = [
		{ title: 'Movement', href: '/rules/movement', description: 'Positioning, difficult terrain, and travel rulings.' },
		{ title: 'Fighting', href: '/rules/fighting', description: 'Combat rulings, critical hits, and flanking.' }
	];
</script>

<svelte:head><title>Rules — D&D Portal</title></svelte:head>

<PageHeader title="Rules" description="Custom rulings used at our table. These pages summarize how we resolve common situations without reproducing book text." eyebrow="House rules" tags={['Global Rules']} />

<PageSection title="How rulings work">
	<p>Use these pages when a table ruling differs from your usual expectations. If an edge case is not covered, the DM makes a temporary call so play can continue.</p>
	<p>A one-time cinematic ruling does not automatically become a permanent rule.</p>
</PageSection>

<section class="rule-links" aria-labelledby="rule-pages-heading">
	<h2 id="rule-pages-heading">Rule pages</h2>
	<ChildLinkGrid links={rulePages} />
</section>

<style lang="scss">
	.rule-links { margin-top: 2.25rem; h2 { margin: 0 0 1rem; color: var(--text-heading); font-size: 1.05rem; } }
</style>
