<script lang="ts">
	import { onMount } from 'svelte';
	import {
		getData,
		type ImageGender,
		type ImageSize,
		type PageData,
		type PagePath
	} from '$lib/typescript/data/_index_';
	import { getPageLabel } from '$lib/typescript/pages/currentPage';
	import { resolveSessionImageGender } from '$lib/typescript/pages/imageGender';

	type CardVariant = 'icon' | 'image';
	type CardDensity = 'regular' | 'compact';

	let {
		page,
		variant = 'icon',
		imageGender,
		imageSize = 's',
		eyebrow,
		density = 'regular'
	}: {
		page: PagePath;
		variant?: CardVariant;
		imageGender?: ImageGender;
		imageSize?: ImageSize;
		eyebrow?: string;
		density?: CardDensity;
	} = $props();

	let pageData: PageData = $derived(getData(page));
	let resolvedImageGender = $state<ImageGender | null>(null);
	let displayGender = $derived(imageGender ?? resolvedImageGender ?? 'female');
	let cardDescription = $derived(
		variant === 'image'
			? pageData.descriptions?.short ?? pageData.description
			: pageData.descriptions?.medium ?? pageData.description
	);

	let cardImage = $derived(
		pageData.images?.card?.[displayGender] ??
			pageData.images?.card?.female ??
			pageData.images?.card?.male
	);

	let cardImageHref = $derived(
		cardImage?.sources[imageSize]
	);

	onMount(() => {
		if (!imageGender) {
			resolvedImageGender = resolveSessionImageGender(page);
		}
	});
</script>

{#if variant === 'image' && cardImage && cardImageHref}
	<a
		class="pagecard pagecard--image"
		class:pagecard--pending={!imageGender && resolvedImageGender === null}
		href={pageData.href}
		target={pageData.external ? '_blank' : undefined}
		rel={pageData.external ? 'noopener noreferrer' : undefined}
	>
		<img
			class="pagecard__background"
			src={cardImageHref}
			srcset={`${cardImage.sources.s} 314w, ${cardImage.sources.m} 941w, ${cardImage.sources.l} 1254w`}
			sizes="(max-width: 700px) calc(100vw - 40px), 360px"
			alt=""
			style={`object-position: ${cardImage.position ?? 'center'}`}
			loading="lazy"
		/>

		<span class="pagecard__chevron" aria-hidden="true"></span>

		<article class="pagecard__content">
			<h3>{getPageLabel(page)}</h3>
			<p>{cardDescription}</p>

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
		class:pagecard--compact={density === 'compact'}
		href={pageData.href}
		target={pageData.external ? '_blank' : undefined}
		rel={pageData.external ? 'noopener noreferrer' : undefined}
	>
		<article class="pagecard__content">
			{#if eyebrow}
				<p class="pagecard__eyebrow">{eyebrow}</p>
			{/if}

			<span
				class="pagecard__icon"
				style={`--pagecard-icon: url("${pageData.img.href}")`}
				aria-hidden="true"
			></span>

			<h3>{getPageLabel(page)}</h3>
			<p>{cardDescription}</p>

			<span class="pagecard__open">
				Open page &#8594;
			</span>
		</article>
	</a>
{/if}
