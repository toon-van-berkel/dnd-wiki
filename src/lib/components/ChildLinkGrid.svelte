<script lang="ts">
	type ChildPageLink = { title: string; href: string; description: string; };
	type Props = { links: ChildPageLink[]; imagesInFolder: string | null; };

	let props = $props<Props>();

	function cleanTitle(title: string) {
		return title.toLocaleLowerCase().replaceAll(' ', '-');
	}

	function maleOrFemale() {
		return Math.random() < 0.5 ? "male" : "female";
	}

	function buildLinkToImage(title: string) {
		const folder = props.imagesInFolder || 'default-folder'; 
		const gender = maleOrFemale();
		console.log(`/${folder}/${cleanTitle(title)}/card-${gender}.webp`);
		return `/${folder}/${cleanTitle(title)}/card-${gender}.webp`;
	}
</script>

<nav class="child-links" aria-label="Related pages">
	{#each props.links as link} <!-- Access via props.links -->
		<a 
			href={link.href} 
			style="background-image: url({buildLinkToImage(link.title)});"
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