<script lang="ts">
	import PageSection from '$lib/pages/PageSection/PageSection.svelte';
	import { resolveAppPath } from '$lib/utils/paths';

	import { shinobiPaths } from '../paths.data';
</script>

<PageSection>
	<div class="shinobi-path-grid">
		{#each shinobiPaths as path}
			<article class="shinobi-path-card">
				<h2><a href={resolveAppPath(path.href)}>{path.title}</a></h2>
				<dl>
					<div>
						<dt>Combat Role</dt>
						<dd>{path.combatRole}</dd>
					</div>
					<div>
						<dt>Primary Focus</dt>
						<dd>{path.primaryFocus}</dd>
					</div>
				</dl>
				<p>{path.description}</p>
				<a class="shinobi-path-card__link" href={resolveAppPath(path.href)}>Open Path</a>
			</article>
		{/each}
	</div>
</PageSection>

<style lang="scss">
	@use './paths.scss';
</style>
