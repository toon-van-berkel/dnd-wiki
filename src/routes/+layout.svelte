<!--  
    Location: src\routes\+layout.svelte
    use: 
-->
<script lang='ts'>
	import { base as appBase } from '$app/paths';
	import { page as appPage } from '$app/state';
	import type { Snippet } from 'svelte';
	import '$lib/scss/style.scss';

	import { buildPage } from '$lib/typescript/pages/pageBuilder';
	import { resolveCurrentPage } from '$lib/typescript/pages/currentPage';
	import {
		createSeoMetadata,
		type SeoMetadataInput
	} from '$lib/typescript/pages/seo';
	import { setCurrentPageContext } from '$lib/svelte/context/currentPage';

	import Breadcrumbs from '$lib/svelte/components/page/Breadcrumbs.svelte';
	import Footer from '$lib/svelte/components/page/Footer.svelte';
	import Navbar from '$lib/svelte/components/page/Navbar.svelte';
	import Sidebar from '$lib/svelte/components/page/Sidebar.svelte';

	const page = buildPage();
	let currentPage = $derived(resolveCurrentPage(appPage.url.pathname, appBase));
	let routeSeo = $derived((appPage.data as { seo?: SeoMetadataInput }).seo);
	let seo = $derived(createSeoMetadata({
		path: currentPage.path,
		pageData: currentPage.data,
		routeSeo,
		pathname: appPage.url.pathname,
		basePath: appBase
	}));
	let structuredDataScript = $derived(
		seo.structuredDataJson
			? `<script type="application/ld+json">${seo.structuredDataJson}<` + '/script>'
			: ''
	);
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
	<link rel="icon" href={seo.faviconHref} sizes="any" />
	<link rel="icon" type="image/svg+xml" href={seo.iconSvgHref} />
	<link rel="icon" type="image/png" sizes="96x96" href={seo.icon96Href} />
	<link rel="icon" type="image/png" sizes="192x192" href={seo.icon192Href} />
	<link rel="icon" type="image/png" sizes="512x512" href={seo.icon512Href} />
	<link rel="apple-touch-icon" sizes="180x180" href={seo.appleTouchIconHref} />
	<link rel="manifest" href={seo.manifestHref} />
	<title>{seo.title}</title>
	<meta
		name='description'
		content={seo.description}
	/>
	<link rel="canonical" href={seo.canonicalUrl} />
	<meta name="robots" content="index, follow" />
	<meta name="theme-color" content="#0b0d0c" />
	<meta property="og:site_name" content="D&D Portal Wiki" />
	<meta property="og:type" content={seo.type} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={seo.canonicalUrl} />
	<meta property="og:image" content={seo.imageUrl} />
	<meta property="og:image:alt" content={seo.imageAlt} />
	{#if seo.imageWidth}
		<meta property="og:image:width" content={String(seo.imageWidth)} />
	{/if}
	{#if seo.imageHeight}
		<meta property="og:image:height" content={String(seo.imageHeight)} />
	{/if}
	<meta name="twitter:card" content={seo.twitterCard} />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.imageUrl} />
	<meta name="twitter:image:alt" content={seo.imageAlt} />
	{#if structuredDataScript}
		{@html structuredDataScript}
	{/if}
</svelte:head>

<div class='layout'>
	{#if page.navbar}
		<Navbar {...page.navbar} />
	{/if}

	<div class='layout__body'>
		{#if page.sidebar}
			<Sidebar {...page.sidebar} />
		{/if}

		<main class={`layout__content${currentPage.path === 'internals.website.homepage' ? ' layout__content--home' : ''}`}>
			<Breadcrumbs />
			{@render children()}
		</main>
	</div>

	{#if page.footer}
		<Footer {...page.footer} />
	{/if}
</div>
