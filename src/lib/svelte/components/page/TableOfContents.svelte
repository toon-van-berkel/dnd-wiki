<!--
	Location: src/lib/svelte/components/page/TableOfContents.svelte
	Use: Renders sticky in-page navigation from structured page-section data.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageSection } from '$lib/typescript/data/_index_';

	let { sections }: { sections: readonly PageSection[] } = $props();
	let activeSectionId = $state('');

	onMount(() => {
		activeSectionId = sections[0]?.id ?? '';

		const sectionElements = sections
			.map((section) => document.getElementById(section.id))
			.filter((element): element is HTMLElement => element !== null);

		if (!sectionElements.length) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntry = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

				if (visibleEntry?.target.id) {
					activeSectionId = visibleEntry.target.id;
				}
			},
			{
				rootMargin: '-96px 0px -60% 0px',
				threshold: [0, 0.1, 0.4]
			}
		);

		for (const sectionElement of sectionElements) {
			observer.observe(sectionElement);
		}

		return () => {
			observer.disconnect();
		};
	});
</script>

{#if sections.length >= 3}
	<nav class="table-of-contents" aria-label="On this page">
		<p class="table-of-contents__title">On this page</p>

		<ol class="table-of-contents__list">
			{#each sections as section}
				<li>
					<a
						href={`#${section.id}`}
						aria-current={activeSectionId === section.id ? 'location' : undefined}
					>
						{section.title}
					</a>
				</li>
			{/each}
		</ol>
	</nav>
{/if}
