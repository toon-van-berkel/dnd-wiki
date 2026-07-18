<!-- site\src\lib\pages\IconCallout\IconCallout.svelte -->
<script lang="ts">
	import Icon from '$lib/helpers/Icon.svelte';

	import type {
		IconCalloutProps as Props
	} from './IconCallout-Types';

	let {
		title,
		icon,
		description,
		color = 'var(--accent)',
		background = 'var(--surface)',
		children,
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['icon-callout', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<article
	class={classes}
	style:--callout-color={color}
	style:--callout-background={background}
>
	<header class="icon-callout__header">
		<Icon
			src={icon}
			type="normal"
			color="var(--callout-color)"
			size="1.5rem"
		/>

		<div>
			<h3>{title}</h3>

			{#if description}
				<p>{description}</p>
			{/if}
		</div>
	</header>

	{#if children}
		<div class="icon-callout__content">
			{@render children()}
		</div>
	{/if}
</article>

<style lang="scss">
	@use './IconCallout.scss';
</style>