<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig, siteOwner } from '$lib/config/site';
	import { resolveAssetPath } from '$lib/utils/paths';
	import type { PageRegistryEntry } from '$lib/page/registry';

	let { pageEntry }: { pageEntry: PageRegistryEntry | undefined } = $props();

	const pageTitle = $derived(pageEntry?.metadata?.title ?? pageEntry?.title ?? siteConfig.projectName);
	const title = $derived(
		pageTitle === siteConfig.projectName
			? siteConfig.longProjectName
			: `${pageTitle} | ${siteConfig.projectName}`
	);
	const description = $derived(
		pageEntry?.metadata?.description ??
			pageEntry?.description ??
			siteConfig.defaultMetadata.description
	);
	const image = $derived(
		resolveAssetPath(pageEntry?.metadata?.image ?? siteConfig.defaultSocialImage)
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={pageEntry?.metadata?.noindex ? 'noindex, follow' : 'index, follow'} />
	<link rel="canonical" href={page.url.href} />
	<meta name="author" content={siteOwner.name} />

	<meta property="og:type" content={pageEntry?.metadata?.type ?? siteConfig.defaultMetadata.type} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content={siteConfig.longProjectName} />
	<meta property="og:locale" content={siteConfig.locale} />
	<meta property="og:image:alt" content={`${siteConfig.projectName} social image`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
