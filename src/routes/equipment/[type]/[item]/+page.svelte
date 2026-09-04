<!--
	Location: src/routes/equipment/[type]/[item]/+page.svelte
	Use: Nested equipment detail pages.
-->
<script lang="ts">
	import { page } from '$app/state';
	import {
		getEquipmentItemBySlug,
		getEquipmentItemTypeSlug
	} from '$lib/typescript/data/internals/equipment-items';

	import EquipmentDetail from '$lib/svelte/components/page/EquipmentDetail.svelte';
	import NotFound from '$lib/svelte/components/page/NotFound.svelte';

	const item = $derived(getEquipmentItemBySlug(page.params.item ?? ''));
	const isMatchingType = $derived(
		item ? getEquipmentItemTypeSlug(item) === page.params.type : false
	);
</script>

{#if item && isMatchingType}
	<EquipmentDetail {item} />
{:else}
	<NotFound />
{/if}
