<!--  
    Location: src\routes\+layout.svelte
    use: 
-->
<script lang='ts'>
	import type { Snippet } from 'svelte';
	import favicon from '$lib/assets/site/favicon.svg';
	import '$lib/scss/style.scss';

	import { buildPage } from '$lib/typescript/pages/pageBuilder';

	import Footer from '$lib/svelte/components/page/Footer.svelte';
	import Sidebar from '$lib/svelte/components/page/Sidebar.svelte';

	const page = buildPage();
	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel='icon' href={favicon} />
	<title>D&D Portal Wiki</title>
	<meta
		name='description'
		content='This wiki contains the information needed for Dungeons & Dragons campaigns.'
	/>
</svelte:head>

<div class='layout'>
	<div class='layout__body'>
		{#if page.sidebar}
			<Sidebar {...page.sidebar} />
		{/if}

		<main class='layout__content'>
			{@render children()}
		</main>
	</div>

	{#if page.footer}
		<Footer {...page.footer} />
	{/if}
</div>
