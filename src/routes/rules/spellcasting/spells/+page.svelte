<!--
	Location: src/routes/rules/spellcasting/spells/+page.svelte
	Use: Filterable spell index.
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
