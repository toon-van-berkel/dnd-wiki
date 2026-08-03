<!--  
    Location: src\routes\+layout.svelte
    use: 
-->
<script lang='ts'>
	import { base } from '$app/paths';
	import { page as appPage } from '$app/state';
	import type { Snippet } from 'svelte';
	import favicon from '$lib/assets/site/favicon.svg';
	import '$lib/scss/style.scss';

	import { buildPage } from '$lib/typescript/pages/pageBuilder';
	import { resolveCurrentPage } from '$lib/typescript/pages/currentPage';
	import { setCurrentPageContext } from '$lib/svelte/context/currentPage';

	import Breadcrumbs from '$lib/svelte/components/page/Breadcrumbs.svelte';
	import Footer from '$lib/svelte/components/page/Footer.svelte';
	import Navbar from '$lib/svelte/components/page/Navbar.svelte';
	import Sidebar from '$lib/svelte/components/page/Sidebar.svelte';

	const page = buildPage();
	let currentPage = $derived(resolveCurrentPage(appPage.url.pathname, base));
	setCurrentPageContext({
		get pathname() {
			return appPage.url.pathname;
		},
		get path() {
			return currentPage.path;
		},
		get data() {
			return currentPage.data;
		}
	});

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
	{#if page.navbar}
		<Navbar {...page.navbar} />
	{/if}

	<div class='layout__body'>
		{#if page.sidebar}
			<Sidebar {...page.sidebar} />
		{/if}

		<main class='layout__content'>
			<Breadcrumbs />
			{@render children()}
		</main>
	</div>

	{#if page.footer}
		<Footer {...page.footer} />
	{/if}
</div>
