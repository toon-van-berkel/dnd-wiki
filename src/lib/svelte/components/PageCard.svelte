<script lang="ts">
	import { onMount } from 'svelte';
	import {
		getData,
		type ImageGender,
		type ImageSize,
		type PageData,
		type PagePath,
		type ResponsiveImageData
	} from '$lib/typescript/data/_index_';
	import { getPageLabel } from '$lib/typescript/pages/currentPage';
	import { resolveSessionImageGender } from '$lib/typescript/pages/imageGender';

	type CardVariant = 'icon' | 'image';
	type CardDensity = 'regular' | 'compact';
	type CardFallback = {
		title: string;
		description: string;
		source?: string;
		images?: Partial<Record<ImageGender, ResponsiveImageData>>;
		tags?: readonly string[];
	};

	let {
		page,
		fallback,
		variant = 'icon',
		imageGender,
		imageSize = 's',
		eyebrow,
		density = 'regular'
	}: {
		page?: PagePath | string;
		fallback?: CardFallback;
		variant?: CardVariant;
		imageGender?: ImageGender;
		imageSize?: ImageSize;
		eyebrow?: string;
		density?: CardDensity;
	} = $props();

	let pageData: PageData | undefined = $derived(
		page ? getData(page as PagePath) : undefined
	);
	let resolvedImageGender = $state<ImageGender | null>(null);
	let displayGender = $derived(imageGender ?? resolvedImageGender ?? 'female');
	let cardTitle = $derived(
		page && pageData ? getPageLabel(page as PagePath) : fallback?.title
	);
	let cardSource = $derived(eyebrow ?? fallback?.source);
	let cardDescription = $derived(
		pageData
			? variant === 'image'
				? pageData.descriptions?.short ?? pageData.description
				: pageData.descriptions?.medium ?? pageData.description
			: fallback?.description
	);
	let cardTags = $derived(pageData?.tags ?? fallback?.tags);
	let cardImageSet = $derived(
		pageData?.images?.card ?? fallback?.images
	);

	let cardImage = $derived(
		cardImageSet?.[displayGender] ??
			cardImageSet?.female ??
			cardImageSet?.male
	);

	let cardImageHref = $derived(
		cardImage?.sources[imageSize]
	);

	onMount(() => {
		if (page && !imageGender) {
			resolvedImageGender = resolveSessionImageGender(page as PagePath);
		}
	});
</script>

{#if variant === 'image' && pageData}
	<a
		class="pagecard pagecard--image"
		class:pagecard--pending={!imageGender && resolvedImageGender === null}
		class:pagecard--no-image={!cardImage || !cardImageHref}
		href={pageData.href}
		target={pageData.external ? '_blank' : undefined}
		rel={pageData.external ? 'noopener noreferrer' : undefined}
	>
		{#if cardImage && cardImageHref}
			<img
				class="pagecard__background"
				src={cardImageHref}
				srcset={`${cardImage.sources.s} 314w, ${cardImage.sources.m} 941w, ${cardImage.sources.l} 1254w`}
				sizes="(max-width: 700px) calc(100vw - 40px), 360px"
				alt=""
				style={`object-position: ${cardImage.position ?? 'center'}`}
				loading="lazy"
			/>
		{/if}

		<span class="pagecard__chevron" aria-hidden="true"></span>

		<article class="pagecard__content">
			{#if cardSource}
				<p class="pagecard__eyebrow">{cardSource}</p>
			{/if}

			<h3>{cardTitle}</h3>
			<p>{cardDescription}</p>

			{#if cardTags?.length}
				<ul>
					{#each cardTags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			{/if}
		</article>
	</a>
{:else if variant === 'image' && fallback && cardTitle && cardDescription}
	<article
		class="pagecard pagecard--image pagecard--static"
		class:pagecard--no-image={!cardImage || !cardImageHref}
	>
		{#if cardImage && cardImageHref}
			<img
				class="pagecard__background"
				src={cardImageHref}
				srcset={`${cardImage.sources.s} 314w, ${cardImage.sources.m} 941w, ${cardImage.sources.l} 1254w`}
				sizes="(max-width: 700px) calc(100vw - 40px), 360px"
				alt=""
				style={`object-position: ${cardImage.position ?? 'center'}`}
				loading="lazy"
			/>
		{/if}

		<div class="pagecard__content">
			{#if cardSource}
				<p class="pagecard__eyebrow">{cardSource}</p>
			{/if}

			<h3>{cardTitle}</h3>
			<p>{cardDescription}</p>

			{#if cardTags?.length}
				<ul>
					{#each cardTags as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</article>
{:else if variant === 'icon' && pageData && page}
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

			<h3>{getPageLabel(page as PagePath)}</h3>
			<p>{cardDescription}</p>

			<span class="pagecard__open">
				Open page &#8594;
			</span>
		</article>
	</a>
{/if}
