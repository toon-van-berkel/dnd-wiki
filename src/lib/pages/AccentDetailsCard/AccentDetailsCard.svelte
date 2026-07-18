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
		href,
		actionLabel = 'Open',
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		[
			'accent-details-card',
			href ? 'accent-details-card--link' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#snippet cardContent()}
	<header class="accent-details-card__header">
		<span
			class="accent-details-card__dot"
			aria-hidden="true"
		></span>

		<h3>{title}</h3>

		{#if href}
			<span
				class="accent-details-card__arrow"
				aria-hidden="true"
			>
				→
			</span>
		{/if}
	</header>

	<dl class="accent-details-card__details">
		{#each details as detail}
			<div>
				<dt>{detail.label}</dt>
				<dd>{detail.value}</dd>
			</div>
		{/each}
	</dl>
{/snippet}

{#if href}
	<a
		class={classes}
		href={href}
		style:--details-accent={accentColor}
		style:--details-accent-soft={softColor}
		aria-label={`${actionLabel} ${title}`}
	>
		{@render cardContent()}
	</a>
{:else}
	<article
		class={classes}
		style:--details-accent={accentColor}
		style:--details-accent-soft={softColor}
	>
		{@render cardContent()}
	</article>
{/if}

<style lang="scss">
	@use './AccentDetailsCard.scss';
</style>