<!--
	Location: src/routes/search/+page.svelte
	Use: Dedicated Wiki search page.
-->
<script lang="ts">
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import WikiSearch from '$lib/svelte/components/page/WikiSearch.svelte';
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />
		<WikiSearch />
	</article>
</div>
