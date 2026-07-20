<!-- site\src\lib\pages\ClassTraits\ClassTraits.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	import WikiImage from '$lib/components/WikiImage.svelte';

	import {
		pageCardAssets,
		type PageCardAssetManifest,
		type PageCardGender
	} from '$lib/data/generated/PageCardAssets';

	import {
		getOppositePageCardGender,
		getPageCardGenderForLoad
	} from '$lib/preferences/page-card-gender';

	import type { Props } from './ClassTraits-Types';

	let {
		imageHref,
		imageAlt,
		imageCaption,
		imagePosition = 'center center',
		rows
	}: Props = $props();

	const manifest = pageCardAssets as PageCardAssetManifest;

	let imageGender = $state<PageCardGender>('female');

	function normalizeHref(href: string): string {
		if (href === '/') {
			return href;
		}

		return href.replace(/\/+$/, '');
	}

	function getLargeImage(
		href: string,
		gender: PageCardGender
	): string | null {
		const assets = manifest[normalizeHref(href)];

		if (!assets) {
			return null;
		}

		return (
			assets[gender]?.large ??
			assets[getOppositePageCardGender(gender)]?.large ??
			null
		);
	}

	const imageSrc = $derived(
		getLargeImage(imageHref, imageGender)
	);

	const imageStyle = $derived(
		`--class-traits-image-position: ${imagePosition};`
	);

	onMount(() => {
		imageGender = getPageCardGenderForLoad();
	});
</script>

<div
	class="class-traits"
	class:class-traits--without-image={!imageSrc}
>
	<div class="class-traits__layout">
		{#if imageSrc}
			<figure
				class="class-traits__artwork"
				style={imageStyle}
			>
				<div class="class-traits__image-frame">
					<WikiImage
						class="class-traits__image"
						src={imageSrc}
						alt={imageAlt}
						loading="eager"
						decoding="async"
					/>
				</div>

				{#if imageCaption}
					<figcaption class="class-traits__caption">
						{imageCaption}
					</figcaption>
				{/if}
			</figure>
		{/if}

		<dl class="class-traits__table">
			{#each rows as row}
				<div class="class-traits__row">
					<dt>{row.label}</dt>

					<dd>
						{#each row.value as part}
							{#if part.variant === 'emphasis'}
								<em>{part.text}</em>
							{:else if part.variant === 'strong'}
								<strong>{part.text}</strong>
							{:else if part.variant === 'accent'}
								<strong class="class-traits__accent">
									{part.text}
								</strong>
							{:else if part.text}
								<span>{part.text}</span>
							{/if}

							{#if part.items?.length}
								<ul>
									{#each part.items as item}
										<li>{item}</li>
									{/each}
								</ul>
							{/if}
						{/each}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>

<style lang="scss">
	@use './ClassTraits.scss';
</style>
