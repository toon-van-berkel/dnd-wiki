<!-- site\src\lib\pages\IconLinkCard\IconLinkCard.svelte -->
<script lang="ts">
	import Icon from '$lib/helpers/Icon.svelte';

	import type {
		IconLinkCardProps as Props
	} from './IconLinkCard-Types';

	let {
		title,
		href,
		icon,
		description,
		eyebrow,
		actionLabel = 'Open page',
		color = 'var(--accent)',
		iconSize = '8rem',
		class: className = ''
	}: Props = $props();

	let classes = $derived(
		['icon-link-card', className]
			.filter(Boolean)
			.join(' ')
	);
</script>

<a
	class={classes}
	href={href}
	style:--icon-link-color={color}
	style:--icon-link-icon-size={iconSize}
>
	<Icon
		class="icon-link-card__background-icon"
		src={icon}
		type="normal"
		color="var(--icon-link-color)"
		size="var(--icon-link-icon-size)"
	/>

	<span class="icon-link-card__content">
		{#if eyebrow}
			<span class="icon-link-card__eyebrow">
				{eyebrow}
			</span>
		{/if}

		<span class="icon-link-card__title">
			{title}
		</span>

		{#if description}
			<span class="icon-link-card__description">
				{description}
			</span>
		{/if}

		<span class="icon-link-card__action">
			{actionLabel}
			<span aria-hidden="true">→</span>
		</span>
	</span>
</a>

<style lang="scss">
	@use './IconLinkCard.scss';
</style>