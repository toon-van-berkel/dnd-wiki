<!-- site/src/lib$lib/components/Icon/Icon.svelte -->
<script lang="ts">
	import { resolveAssetPath } from '$lib/utils/paths';
	import { resolveIcon } from './Icon-helper';
	import type { Props } from './Icon-Types';

	let {
		src,
		type = 'normal',
		color = 'currentColor',
		hoverColor = 'var(--accent, currentColor)',
		changeOnHover = false,
		size,
		label,
		class: className = ''
	}: Props = $props();

	let resolvedSrc = $derived(resolveAssetPath(resolveIcon(src)));

	let iconClass = $derived(
		[
			'icon',
			`icon--${type}`,
			changeOnHover ? 'icon--change-on-hover' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<span
	class={iconClass}
	style:--icon-source={`url("${resolvedSrc}")`}
	style:--icon-color={color}
	style:--icon-hover-color={hoverColor}
	style:--icon-size={size}
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
></span>

<style lang="scss">
	@use './Icon.scss';
</style>
