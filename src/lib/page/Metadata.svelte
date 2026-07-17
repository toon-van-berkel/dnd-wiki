<!-- site\src\lib\page\Metadata.svelte -->
<script lang="ts">
	import type { PageMetadata } from './Metadata-Types';

	let { metadata }: { metadata: PageMetadata } = $props();
</script>

<svelte:head>
	<title>{metadata.title}</title>

	<!-- Search engines -->
	<meta name="description" content={metadata.description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={metadata.headUrl} />
	<meta name="author" content={metadata.author} />
	{#each metadata.alternatives ?? [] as alternative}
		<link rel="alternate" hreflang={alternative.language} href={alternative.url} />
	{/each}
	{#if metadata.prevUrl}
		<link rel="prev" href={metadata.prevUrl} />
	{/if}
	{#if metadata.nextUrl}
		<link rel="next" href={metadata.nextUrl} />
	{/if}

	<!-- Universal social-media card -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={metadata.og.currentUrl} />
	<meta property="og:title" content={metadata.og.title} />
	<meta property="og:description" content={metadata.og.description} />
	<meta property="og:image" content={metadata.og.image} />
	<meta property="og:site_name" content={metadata.og.siteName} />
	<meta property="og:locale" content={metadata.og.language} />
	<meta property="og:image:alt" content={metadata.og.imageAlt} />

	<!-- Platform-specific social-media cards -->
	{#each metadata.socials ?? [] as social}
		<meta name={`${social.socialName}:card`} content="summary_large_image" />

		{#if social.username}
			<meta name={`${social.socialName}:site`} content={social.username} />
		{/if}

		<meta name={`${social.socialName}:title`} content={social.title} />
		<meta name={`${social.socialName}:description`} content={social.description} />
		<meta name={`${social.socialName}:image`} content={social.image} />
	{/each}
</svelte:head>

