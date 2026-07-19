<script lang="ts">
	import Icon from './Icon.svelte';
	import type { IconReference } from './Icon-Types';
	import type { Snippet } from 'svelte';

	type Props = {
		icon: IconReference;
		children: Snippet;
		size?: string;
		color?: string;
		class?: string;
	};

	let {
		icon,
		children,
		size = '1em',
		color = 'currentColor',
		class: className = ''
	}: Props = $props();

	let labelClass = $derived(['icon-label', className].filter(Boolean).join(' '));
</script>

<span
	class={labelClass}
	style:--icon-label-color={color}
>
	<Icon
		src={icon}
		type="in-text"
		size={size}
	/>
	<span class="icon-label__text">
		{@render children()}
	</span>
</span>

<style lang="scss">
	@use './IconLabel.scss';
</style>
