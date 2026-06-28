<script lang="ts">
	import { resolveAppPath, resolveAssetPath } from '$lib/utils/paths';

	type ChildPageLink = { title: string; href: string; description: string; };
	type Props = { links: ChildPageLink[]; imagesInFolder?: string | null; };

	let { links, imagesInFolder = null }: Props = $props();

	function cleanTitle(title: string) {
		return title.toLocaleLowerCase().replaceAll(' ', '-');
	}

	function buildLinkToImage(title: string) {
		if (!imagesInFolder) return null;

		return `/${imagesInFolder}/${cleanTitle(title)}/card-female.webp`;
	}
</script>

<nav class="child-links" aria-label="Related pages">
	{#each links as link}
		{@const imagePath = buildLinkToImage(link.title)}
		<a 
			href={resolveAppPath(link.href)}
			style={imagePath ? `background-image: url("${resolveAssetPath(imagePath)}");` : undefined}
		>
			<span>{link.title}</span>
			<p>{link.description}</p>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
		</a>
	{/each}
</nav>

<style lang="scss">
  @use './ChildLinkGrid.scss';
</style>
