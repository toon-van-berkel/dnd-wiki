<!-- site\src\routes\rules\+page.svelte -->
<script lang="ts">
	import ChildLinkGrid from '$lib/components/ChildLinkGrid.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	
	import PageHeader from '$lib/page/layout/navigation/PageHeader.svelte';
	import { headerdata } from './page.header';

	import { getNavigationChildren } from '$lib/wiki/navigation';

	const rulePages = getNavigationChildren('/rules').map(({ title, href, description }) => ({
		title,
		href,
		description: description ?? ''
	}));
</script>

<PageHeader {headerdata} />

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
