<!-- site\src\lib\pages\AccentDetailsCard\AccentDetailsCard.svelte -->
<script lang="ts">
	import type {
		AccentDetailsCardProps as Props
	} from './AccentDetailsCard-Types';

	let {
		title,
		accentColor,
		softColor = 'transparent',
		details,
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['accent-details-card', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<article
	class={classes}
	style:--details-accent={accentColor}
	style:--details-accent-soft={softColor}
>
	<header class="accent-details-card__header">
		<span
			class="accent-details-card__dot"
			aria-hidden="true"
		></span>

		<h3>{title}</h3>
	</header>

	<dl class="accent-details-card__details">
		{#each details as detail}
			<div>
				<dt>{detail.label}</dt>
				<dd>{detail.value}</dd>
			</div>
		{/each}
	</dl>
</article>

<style lang="scss">
	@use './AccentDetailsCard.scss';
</style>