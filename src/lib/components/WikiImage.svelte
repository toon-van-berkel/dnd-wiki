<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { resolveAssetPath, resolveSrcset } from '$lib/utils/paths';

	type Props = Omit<HTMLImgAttributes, 'src' | 'srcset'> & {
		src?: string | null;
		srcset?: string | null;
		alt: string;
	};

	let { src = '', srcset, ...rest }: Props = $props();

	const resolvedSrc = $derived(resolveAssetPath(src));
	const resolvedSrcset = $derived(resolveSrcset(srcset));
</script>

<img {...rest} src={resolvedSrc} srcset={resolvedSrcset || undefined} />
