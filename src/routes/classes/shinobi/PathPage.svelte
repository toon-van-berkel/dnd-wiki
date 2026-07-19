<script lang="ts">
	import IconLabel from '$lib/components/Icon/IconLabel.svelte';
	import WikiTable from '$lib/components/WikiTable/WikiTable.svelte';
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { resolveAppPath } from '$lib/utils/paths';

	import RuleBlocks from './RuleBlocks.svelte';
	import type { ShinobiPath } from './types';

	type Props = {
		path: ShinobiPath;
	};

	let { path }: Props = $props();

	const featureRows = $derived(
		path.features.map((feature) => [String(feature.level), feature.title] as const)
	);

	function featureId(title: string): string {
		return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
	}
</script>

<PageSection
	title="Path Overview"
	description={path.description}
>
	<div class="shinobi-path-summary">
		<dl>
			<div>
				<dt>
					<IconLabel icon="combat.action"><strong>Combat Role</strong></IconLabel>
				</dt>
				<dd>{path.combatRole}</dd>
			</div>

			<div>
				<dt>
					<IconLabel icon="game.spell"><strong>Primary Focus</strong></IconLabel>
				</dt>
				<dd>{path.primaryFocus}</dd>
			</div>

			{#if path.requirement}
				<div>
					<dt>
						<IconLabel icon="game.lock"><strong>Requirement</strong></IconLabel>
					</dt>
					<dd>{path.requirement}</dd>
				</div>
			{/if}
		</dl>
	</div>

	{#each path.introduction as paragraph}
		<p>{paragraph}</p>
	{/each}
</PageSection>

<PageSection title="Path Features">
	<WikiTable
		caption={`${path.title} Features`}
		columns={['Shinobi Level', 'Feature']}
		rows={featureRows}
	/>
</PageSection>

{#each path.features as feature}
	<PageSection
		id={featureId(feature.title)}
		eyebrow={`${feature.level}th Level`}
		title={feature.title}
	>
		<RuleBlocks blocks={feature.blocks} />
	</PageSection>
{/each}

<PageSection title="Play This Path If You Want To">
	<ul>
		{#each path.playIf as item}
			<li>{item}</li>
		{/each}
	</ul>

	<p class="shinobi-path-links">
		<a href={resolveAppPath('/classes/shinobi')}>Return to the Shinobi class</a>
		<a href={resolveAppPath('/classes/shinobi/techniques')}>View Shinobi Techniques</a>
	</p>
</PageSection>

<style lang="scss">
	@use './shinobi-route.scss';
</style>
