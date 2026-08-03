<!--
	Location: src/routes/spells/+page.svelte
	Use: Top-level spell browser page.
-->
<script lang="ts">
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import SpellBrowser from '$lib/svelte/components/page/SpellBrowser.svelte';
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />
		<SpellBrowser />
	</article>
</div>
