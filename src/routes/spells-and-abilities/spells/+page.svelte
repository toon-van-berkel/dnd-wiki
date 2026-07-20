<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { spells } from '$lib/data/spells';
</script>

<PageSection>
	<p>
		Spells are magical effects created through specific forms of spellcasting. Each spell is organized by level, school, casting time, range, duration and components.
	</p>

	{#if spells.length > 0}
		<p>{spells.length} spells are available.</p>
	{/if}
</PageSection>
