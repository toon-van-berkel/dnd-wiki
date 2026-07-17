<!-- site\src\lib\page\layout\navigation\snippets\Breadcrumbs.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import * as helper from './Breadcrumbs-helpers';

	const breadcrumbs = $derived(helper.getUrl(page.url.pathname));
	const canGoBack = $derived(breadcrumbs.urls.length > 1);
</script>

<div class="breadcrumbs">
	<button 
		class="breadcrumbs-button"
		onclick={() => helper.handleBack(breadcrumbs)} 
		disabled={!canGoBack}
	>
		Back
	</button> |

	<ul class="breadcrumbs__list">
		{#each breadcrumbs.names as name, index}
			<li class="breadcrumbs__list-item_container">
				<a 
					class="breadcrumbs__list-item"
					href={breadcrumbs.urls[index]}
				>
					{name}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use './Breadcrumbs.scss';
</style>