<!-- site\src\lib\page\layout\navigation\snippets\AllowedIn.svelte -->
<script lang="ts">
	import type { Availability } from './AllowedIn-Types';

	let {
		allowedIn
	}: {
		allowedIn: Availability | undefined;
	} = $props();
</script>

<div class="allowedin">
	<h2 class="allowedin-title">Page information:</h2>
	{#if allowedIn?.allowed?.length}
		<div class="allowedin__allowed">
			<h3 class="allowedin__allowed-title">Allowed:</h3>

			<ul class="allowedin__allowed__list">
				{#each allowedIn.allowed as party, index}
					<li class="allowedin__allowed__list-item">
						{party}{#if index < allowedIn.allowed.length - 1},{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if allowedIn?.limited?.length}
		<div class="allowedin__limited">
			<h3 class="allowedin__limited-title">Limited:</h3>

			<ul class="allowedin__limited__list">
				{#each allowedIn.limited as party, index}
					<li class="allowedin__limited__list-item">
						{party}{#if index < allowedIn.limited.length - 1},{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if allowedIn?.banned?.length}
		<div class="allowedin__banned">
			<h3 class="allowedin__banned-title">Banned:</h3>

			<ul class="allowedin__banned__list">
				{#each allowedIn.banned as party, index}
					<li class="allowedin__banned__list-item">
						{party}{#if index < allowedIn.banned.length - 1},{/if}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	@use './Allowedin.scss';
</style>