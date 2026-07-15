<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import WikiPreferences from '$lib/components/WikiPreferences.svelte';
	import { getWikiPage } from '$lib/wiki/registry';
	import { resolveAppPath } from '$lib/utils/paths';

	const pageMeta = getWikiPage('preferences');
</script>

<svelte:head><title>{pageMeta?.title ?? 'Preferences'} | D&D Portal</title></svelte:head>

<PageHeader
	title={pageMeta?.title}
	description={pageMeta?.description}
	eyebrow={pageMeta?.eyebrow}
/>

<WikiPreferences />

<PageSection title="How preferences work">
	<p>
		Party and Dungeon Master preferences can help the Wiki highlight relevant
		availability information. They do not hide unrelated content, and they are
		separate from temporary search filters on the <a href={resolveAppPath('/search')}>Search page</a>.
	</p>
</PageSection>
