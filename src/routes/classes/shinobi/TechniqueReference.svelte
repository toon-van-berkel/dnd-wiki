<script lang="ts">
	import { onMount, tick } from 'svelte';

	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import type { ShinobiTechnique, TechniqueCategory, TechniqueRank } from './types';
	import RuleBlocks from './RuleBlocks.svelte';

	type Props = {
		techniques: readonly ShinobiTechnique[];
	};

	let { techniques }: Props = $props();

	const ranks: readonly TechniqueRank[] = ['I', 'II', 'III', 'IV', 'V'];
	const categories: readonly TechniqueCategory[] = ['Universal', 'Nature', 'Heritage', 'Path'];

	let openSections = $state(new Set<string>(['rank-i']));

	function rankSectionId(rank: TechniqueRank): string {
		return `rank-${rank.toLowerCase()}`;
	}

	function restrictedSectionId(): string {
		return 'restricted-techniques';
	}

	function isOpen(sectionId: string): boolean {
		return openSections.has(sectionId);
	}

	function toggleSection(sectionId: string): void {
		const next = new Set(openSections);

		if (next.has(sectionId)) {
			next.delete(sectionId);
		} else {
			next.add(sectionId);
		}

		openSections = next;
	}

	function techniquesForRank(rank: TechniqueRank): ShinobiTechnique[] {
		return techniques.filter((technique) => technique.rank === rank && !technique.restricted);
	}

	function restrictedTechniques(): ShinobiTechnique[] {
		return techniques.filter((technique) => technique.restricted);
	}

	const restricted = $derived(restrictedTechniques());

	function groupedTechniques(items: readonly ShinobiTechnique[]) {
		return categories
			.map((category) => ({
				category,
				techniques: items.filter((technique) => technique.category === category)
			}))
			.filter((group) => group.techniques.length > 0);
	}

	function metadata(technique: ShinobiTechnique) {
		return [
			['Rank', technique.rank],
			['Category', technique.category],
			['Chakra Cost', technique.chakraCost],
			['Activation', technique.activation],
			['Range', technique.range],
			['Duration', technique.duration],
			['Requirements', technique.requirements ?? 'None']
		] as const;
	}

	async function openFragmentTechnique(): Promise<void> {
		const fragment = window.location.hash.slice(1);
		if (!fragment) return;

		const technique = techniques.find((entry) => entry.id === fragment);
		if (!technique) return;

		const sectionId = technique.restricted
			? restrictedSectionId()
			: rankSectionId(technique.rank);

		openSections = new Set([...openSections, sectionId]);
		await tick();

		const target = document.getElementById(technique.id);
		target?.scrollIntoView({ block: 'start' });
		target?.focus({ preventScroll: true });
	}

	onMount(() => {
		openFragmentTechnique();
		window.addEventListener('hashchange', openFragmentTechnique);

		return () => window.removeEventListener('hashchange', openFragmentTechnique);
	});
</script>

<div class="technique-reference">
	{#each ranks as rank}
		{@const sectionId = rankSectionId(rank)}
		{@const sectionTechniques = techniquesForRank(rank)}
		<section class="technique-section">
			<header class="technique-section__header">
				<div>
					<h2 id={`${sectionId}-heading`}>Rank {rank} Techniques</h2>
					<span>{sectionTechniques.length} techniques</span>
				</div>

				<button
					type="button"
					aria-expanded={isOpen(sectionId)}
					aria-controls={`${sectionId}-content`}
					onclick={() => toggleSection(sectionId)}
				>
					{isOpen(sectionId) ? 'Collapse' : 'Expand'}
				</button>
			</header>

			{#if isOpen(sectionId)}
				<div id={`${sectionId}-content`} class="technique-section__content">
					{#each groupedTechniques(sectionTechniques) as group}
						<section class="technique-group" aria-labelledby={`${sectionId}-${group.category.toLowerCase()}-heading`}>
							<h3 id={`${sectionId}-${group.category.toLowerCase()}-heading`}>{group.category}</h3>

							<div class="technique-grid technique-grid--desktop">
								<div class="technique-grid__header">Technique</div>
								<div class="technique-grid__header">Category</div>
								<div class="technique-grid__header">Chakra</div>
								<div class="technique-grid__header">Activation</div>
								<div class="technique-grid__header">Range</div>
								<div class="technique-grid__header">Duration</div>

								{#each group.techniques as technique}
									<a href={`#${technique.id}`}>{technique.name}</a>
									<span>{technique.category}</span>
									<span>{technique.chakraCost}</span>
									<span>{technique.activation}</span>
									<span>{technique.range}</span>
									<span>{technique.duration}</span>
								{/each}
							</div>

							<div class="technique-grid--mobile">
								{#each group.techniques as technique}
									<article class="technique-card" aria-labelledby={`${technique.id}-mobile-title`}>
										<h4 id={`${technique.id}-mobile-title`}>
											<a href={`#${technique.id}`}>{technique.name}</a>
										</h4>

										<dl>
											{#each metadata(technique) as [label, value]}
												<div>
													<dt>{label}</dt>
													<dd>{value}</dd>
												</div>
											{/each}
										</dl>

										<RuleBlocks blocks={technique.description} />

										{#if technique.augment}
											<h5>Augment</h5>
											<RuleBlocks blocks={technique.augment} />
										{/if}
									</article>
								{/each}
							</div>

							<div class="technique-details">
								{#each group.techniques as technique}
									<article
										id={technique.id}
										tabindex="-1"
										class="technique-detail"
										aria-labelledby={`${technique.id}-title`}
									>
										<h4 id={`${technique.id}-title`}>{technique.name}</h4>

										<dl class="technique-detail__meta">
											{#each metadata(technique) as [label, value]}
												<div>
													<dt>{label}</dt>
													<dd>{value}</dd>
												</div>
											{/each}
										</dl>

										<RuleBlocks blocks={technique.description} />

										{#if technique.augment}
											<h5>
												<IconLabel icon="attribute.bonus"><strong>Augment</strong></IconLabel>
											</h5>
											<RuleBlocks blocks={technique.augment} />
										{/if}
									</article>
								{/each}
							</div>
						</section>
					{/each}
				</div>
			{/if}
		</section>
	{/each}
	<section class="technique-section">
		<header class="technique-section__header">
			<div>
				<h2 id="restricted-techniques-heading">Restricted Techniques</h2>
				<span>{restricted.length} techniques</span>
			</div>

			<button
				type="button"
				aria-expanded={isOpen(restrictedSectionId())}
				aria-controls="restricted-techniques-content"
				onclick={() => toggleSection(restrictedSectionId())}
			>
				{isOpen(restrictedSectionId()) ? 'Collapse' : 'Expand'}
			</button>
		</header>

		{#if isOpen(restrictedSectionId())}
			<div id="restricted-techniques-content" class="technique-section__content">
				{#each groupedTechniques(restricted) as group}
					<section class="technique-group">
						<h3>{group.category}</h3>
					</section>
				{/each}
			</div>
		{/if}
	</section>
</div>

<style lang="scss">
	@use './techniques.scss';
</style>
