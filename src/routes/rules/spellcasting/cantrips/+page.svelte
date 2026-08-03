<!--
	Location: src/routes/rules/spellcasting/cantrips/+page.svelte
	Use: Cantrip spell list.
-->
<script lang="ts">
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import SpellBrowser from '$lib/svelte/components/page/SpellBrowser.svelte';
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />
		<SpellBrowser initialLevel={0} showLevelFilter={false} />
	</article>
</div>
