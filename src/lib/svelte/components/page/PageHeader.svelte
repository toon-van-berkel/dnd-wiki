<!--
	Location: src/lib/svelte/components/page/PageHeader.svelte
	Use: Renders the current page header from centralized metadata.
-->
<script lang="ts">
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import { getPageLabel } from '$lib/typescript/pages/currentPage';
	import type {
		InlineContent as InlineContentData,
		InlineContentBlock
	} from '$lib/typescript/data/_index_';

	import InlineContent from './InlineContent.svelte';
	import PageImage from './PageImage.svelte';

	const currentPage = getCurrentPageContext();

	function isParagraphs(
		content: InlineContentBlock
	): content is readonly InlineContentData[] {
		return Array.isArray(content[0]);
	}

	function getDescriptionParagraphs(
		content: InlineContentBlock | undefined,
		fallback: string
	): readonly InlineContentData[] {
		if (!content) {
			return [
				[
					{
						type: 'text',
						text: fallback
					}
				]
			];
		}

		return isParagraphs(content) ? content : [content];
	}

	let descriptionParagraphs = $derived(
		getDescriptionParagraphs(
			currentPage.data?.descriptions?.long,
			currentPage.data?.description ?? ''
		)
	);
</script>

{#if currentPage.path && currentPage.data}
	<section class="page-header">
		<div class="page-header__content">
			<p class="page-header__subtitle">
				{currentPage.data.subTitle}
			</p>

			<h1>{getPageLabel(currentPage.path)}</h1>

			<div class="page-header__description">
				{#each descriptionParagraphs as paragraph}
					<p>
						<InlineContent content={paragraph} />
					</p>
				{/each}
			</div>

			{#if currentPage.data.header?.sections?.length}
				<div class="page-header__sections">
					{#each currentPage.data.header.sections as section}
						<section
							class="page-header__section"
							id={section.id}
							aria-labelledby={`${section.id}-title`}
						>
							<h2 id={`${section.id}-title`}>{section.title}</h2>

							{#each getDescriptionParagraphs(section.content, '') as paragraph}
								<p>
									<InlineContent content={paragraph} />
								</p>
							{/each}
						</section>
					{/each}
				</div>
			{/if}
		</div>

		<PageImage />
	</section>
{/if}
