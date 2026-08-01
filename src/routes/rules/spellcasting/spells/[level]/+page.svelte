<!--
	Location: src/routes/rules/spellcasting/spells/[level]/+page.svelte
	Use: Level-specific spell list.
-->
<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import SpellBrowser from '$lib/svelte/components/page/SpellBrowser.svelte';
	import {
		spellLevels,
		type SpellLevel
	} from '$lib/typescript/data/internals/rules/spellcasting/spells/spell-data';

	let level = $derived(
		(spellLevels.find((entry) => entry.slug === page.params.level)?.level ?? 1) as SpellLevel
	);
</script>

<div class="page-layout">
	<article class="wiki-article page-layout__article">
		<PageHeader />
		<SpellBrowser initialLevel={level} showLevelFilter={false} />
	</article>
</div>
