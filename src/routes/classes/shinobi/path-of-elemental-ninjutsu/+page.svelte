<script lang="ts">
	import PathPage from '../PathPage.svelte';
	import { getShinobiPath } from '../paths.data';

	const path = getShinobiPath('path-of-elemental-ninjutsu');
</script>

<PathPage {path} />
