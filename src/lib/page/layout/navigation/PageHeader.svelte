<!-- site\src\lib\page\layout\navigation\PageHeader.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import type { PageHeader } from './PageHeader-Types';

	import AllowedIn from './snippets/AllowedIn.svelte';
	import Tags from './snippets/Tags.svelte';
	import BreadCrumbs from './snippets/Breadcrumbs.svelte';

	import { getAllowedIn } from './snippets/AllowedIn-helper';
	import { getTags } from './snippets/Tags-helpers';

	let { headerdata }: { headerdata: PageHeader } = $props();

	const allowedIn = $derived(getAllowedIn(page.url.pathname));
	const pageTags = $derived(getTags(page.url.pathname));

	const hasAllowedIn = $derived(
		Boolean(
			allowedIn?.allowed?.length ||
			allowedIn?.limited?.length ||
			allowedIn?.banned?.length
		)
	);

	const hasTags = $derived(pageTags.length > 0);
	const hasPageInformation = $derived(hasAllowedIn || hasTags);
</script>

<header class="page__header">
	{#if hasPageInformation}
		<div class="page__header__information">
			{#if hasAllowedIn}
				<AllowedIn {allowedIn} />
			{/if}

			{#if hasTags}
				<Tags {pageTags} />
			{/if}
		</div>
	{/if}

	<BreadCrumbs />

	<hr class="page__header-sep" />

	<span class="page__header-eyebrow">{headerdata.eyebrow}</span>
	<h1 class="page__header-title">{headerdata.title}</h1>
	<p class="page__header-description">{headerdata.description}</p>
</header>

<style lang="scss">
	@use './PageHeader.scss';
</style>