<!--
	Location: src/routes/classes/[class]/+page.svelte
	Use: Generic class page for central class data.
-->
<script lang="ts">
	import { page } from '$app/state';
	import { getClassBySlug } from '$lib/typescript/data/internals/classes/_index_';

	import ClassPageContent from '$lib/svelte/components/page/ClassPageContent.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';

	let classData = $derived(getClassBySlug(page.params.class ?? ''));
	let content = $derived(classData?.content);
</script>

{#if content}
	<ClassPageContent {content} />
{:else}
	<NotFound />
{/if}
