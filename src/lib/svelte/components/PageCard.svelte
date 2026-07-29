<script lang="ts">
	import {
		getData,
		type ImageGender,
		type ImageSize,
		type PageData,
		type PagePath
	} from '$lib/typescript/data/_index_';

	type CardVariant = 'icon' | 'image';

	let {
		page,
		variant = 'icon',
		imageGender = 'female',
		imageSize = 's'
	}: {
		page: PagePath;
		variant?: CardVariant;
		imageGender?: ImageGender;
		imageSize?: ImageSize;
	} = $props();

	let pageData = $derived(
		getData(page) as PageData
	);

	let cardImage = $derived(
		pageData.images?.card?.[imageGender]
	);

	let cardImageHref = $derived(
		cardImage?.sources[imageSize]
	);
</script>

{#if variant === 'image' && cardImage && cardImageHref}
	<a
		class="pagecard pagecard--image"
		href={pageData.href}
		target={pageData.external ? '_blank' : undefined}
		rel={pageData.external ? 'noopener noreferrer' : undefined}
	>
		<img
			class="pagecard__background"
			src={cardImageHref}
			alt=""
			style={`object-position: ${cardImage.position ?? 'center'}`}
		/>

		<article class="pagecard__content">
			<h3>{pageData.title}</h3>
			<p>{pageData.description}</p>

			{#if pageData.tags?.length}
				<ul>
					{#each pageData.tags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			{/if}
		</article>
	</a>
{:else if variant === 'icon'}
	<a
		class="pagecard pagecard--icon"
		href={pageData.href}
		target={pageData.external ? '_blank' : undefined}
		rel={pageData.external ? 'noopener noreferrer' : undefined}
	>
		<article class="pagecard__content">
			<span
				class="pagecard__icon"
				style={`--pagecard-icon: url("${pageData.img.href}")`}
				aria-hidden="true"
			></span>

			<h3>{pageData.title}</h3>
			<p>{pageData.description}</p>

			<span class="pagecard__open">
				Open page →
			</span>
		</article>
	</a>
{/if}