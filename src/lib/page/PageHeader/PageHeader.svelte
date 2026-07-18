<script lang="ts">
	import { getAvailabilityForPage } from '$lib/data/availability';
	import type { PageRegistryEntry } from '$lib/page/registry';

	import AllowedIn from './AllowedIn/AllowedIn.svelte';
	import Breadcrumbs from './Breadcrumbs/Breadcrumbs.svelte';
	import Tags from './Tags/Tags.svelte';

	let { pageEntry }: { pageEntry: PageRegistryEntry } = $props();

	const availability = $derived(getAvailabilityForPage(pageEntry.id));
	const hasAvailability = $derived(
		Boolean(
			availability.allowed?.length ||
				availability.limited?.length ||
				availability.banned?.length ||
				availability.approval?.length
		)
	);
	const tags = $derived(pageEntry.tags ?? []);
	const hasTags = $derived(tags.length > 0);
	const hasPageInformation = $derived(hasAvailability || hasTags);
</script>

<header class="page__header">
	{#if hasPageInformation}
		<div class="page__header__information">
			{#if hasAvailability}
				<AllowedIn {availability} />
			{/if}

			{#if hasTags}
				<Tags {tags} />
			{/if}
		</div>
	{/if}

	<Breadcrumbs {pageEntry} />

	<hr class="page__header-sep" />

	{#if pageEntry.eyebrow}
		<span class="page__header-eyebrow">{pageEntry.eyebrow}</span>
	{/if}
	<h1 class="page__header-title">{pageEntry.title}</h1>
	{#if pageEntry.description}
		<p class="page__header-description">{pageEntry.description}</p>
	{/if}
</header>

<style lang="scss">
	@use './PageHeader.scss';
</style>
