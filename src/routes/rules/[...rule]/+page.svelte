<!--
	Location: src/routes/rules/[...rule]/+page.svelte
	Use: Generic data-driven rule pages.
-->
<script lang="ts">
	import {
		data,
		type PageContentSection as PageContentSectionData,
		type PageData,
		type PagePath,
		type PageTableOfContentsSection
	} from '$lib/typescript/data/_index_';
	import { getCurrentPageContext } from '$lib/svelte/context/currentPage';
	import { getPageLabel } from '$lib/typescript/pages/currentPage';

	import NotFound from '$lib/svelte/components/page/NotFound.svelte';
	import PageCard from '$lib/svelte/components/PageCard.svelte';
	import PageContentSection from '$lib/svelte/components/page/PageContentSection.svelte';
	import PageHeader from '$lib/svelte/components/page/PageHeader.svelte';
	import TableOfContents from '$lib/svelte/components/page/TableOfContents.svelte';

	type RulePageContent = {
		readonly sections: readonly PageContentSectionData[];
		readonly tableOfContents: readonly PageTableOfContentsSection[];
	};

	function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
		return typeof value === 'object' && value !== null && !Array.isArray(value);
	}

	function isPageData(value: unknown): value is PageData {
		return (
			isRecord(value) &&
			typeof value.href === 'string' &&
			value.external === false &&
			typeof value.title === 'string' &&
			typeof value.subTitle === 'string' &&
			typeof value.description === 'string' &&
			isRecord(value.img)
		);
	}

	function isRulePageContent(value: unknown): value is RulePageContent {
		return (
			isRecord(value) &&
			Array.isArray(value.sections) &&
			Array.isArray(value.tableOfContents)
		);
	}

	function getRulePageContent(value: unknown): RulePageContent | null {
		if (!isRecord(value) || !isRulePageContent(value.content)) {
			return null;
		}

		return value.content;
	}

	function getValue(path: string): unknown {
		return path
			.split('.')
			.reduce<unknown>((current, key) => {
				if (!isRecord(current)) {
					return undefined;
				}

				return current[key];
			}, data);
	}

	function getChildPagePaths(path: PagePath | null): readonly PagePath[] {
		if (!path) {
			return [];
		}

		const parentPath = path.endsWith('.page') ? path.slice(0, -5) : path;
		const parent = getValue(parentPath);

		if (!isRecord(parent)) {
			return [];
		}

		return Object.entries(parent)
			.flatMap(([key, value]) => {
				if (key === 'page') {
					return [];
				}

				if (isPageData(value)) {
					return [`${parentPath}.${key}` as PagePath];
				}

				if (isRecord(value) && isPageData(value.page)) {
					return [`${parentPath}.${key}.page` as PagePath];
				}

				return [];
			})
			.sort((left, right) => getPageLabel(left).localeCompare(getPageLabel(right)));
	}

	const currentPage = getCurrentPageContext();
	let content = $derived(getRulePageContent(currentPage.data));
	let childPagePaths = $derived(getChildPagePaths(currentPage.path));
</script>

{#if currentPage.data}
	<div class="page-layout">
		<article class="wiki-article page-layout__article">
			<PageHeader />

			{#if content}
				{#each content.sections as section}
					<PageContentSection {section} />
				{/each}
			{/if}

			{#if childPagePaths.length}
				<section class="wiki-article__section" aria-labelledby="rule-references-title">
					<h2 id="rule-references-title">Rule References</h2>

					<div class="wiki-article__image-cards">
						{#each childPagePaths as childPath}
							<PageCard page={childPath} density="compact" />
						{/each}
					</div>
				</section>
			{/if}
		</article>

		{#if content?.tableOfContents.length}
			<aside class="page-layout__toc">
				<TableOfContents sections={content.tableOfContents} />
			</aside>
		{/if}
	</div>
{:else}
	<NotFound />
{/if}
