<!--  
    Location: src\routes\+layout.svelte
    use: 
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import favicon from '$lib/assets/site/favicon.svg';
	import '$lib/scss/style.scss';

	import { buildPage } from '$lib/typescript/pages/pageBuilder';

	import Footer from '$lib/svelte/components/page/Footer.svelte';
	import Tooltip from '$lib/svelte/components/Tooltip.svelte';
	import Link from '$lib/svelte/components/Link.svelte';

	const page = buildPage();
	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>D&D Portal Wiki</title>
	<meta
		name="description"
		content="This wiki contains the information needed for Dungeons & Dragons campaigns."
	/>
</svelte:head>
<!-- <Link goto='github.profile' /> -->
<p>You must have a <Tooltip tip='Strength' /> score of 13 or higher to multiclass into or 
	out of the <Link goto='internals.classes.barbarian.page' /> class.</p>

{#if page.footer}
	<Footer {...page.footer} />
{/if}
<!-- <pre>{JSON.stringify(page, null, 2)}</pre> -->

{@render children()}