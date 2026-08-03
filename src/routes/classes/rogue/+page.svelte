<!--
	Location: src/routes/classes/rogue/+page.svelte
	Use: Rogue class page using central class data.
-->
<script lang="ts">
	import { getData } from '$lib/typescript/data/_index_';

	import ClassPageContent from '$lib/svelte/components/page/ClassPageContent.svelte';

	const rogue = getData('internals.classes.rogue');
</script>

<ClassPageContent content={rogue.content} />
