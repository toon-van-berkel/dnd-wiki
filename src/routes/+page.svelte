<script lang="ts">
	import Link from '$lib/svelte/components/Link.svelte';

	import PageCard from '$lib/svelte/components/PageCard.svelte';
</script>
 
<p>
	You must have a
	<Link goto='internals.rules.abilityScores.strength' placeholder='strength' showIcon />
	score of 13 or higher to
	<Link goto='internals.rules.characterCreation.multiclassing' placeholder='multiclassing' showIcon />
	into or out of the
	<Link goto='internals.classes.barbarian.page' placeholder='barbarian' showIcon />
	class.
</p>

<!-- 
<PageCard
	page="internals.classes.barbarian.page"
	variant="image"
/> -->