<script lang="ts">
	import PathPage from '../PathPage.svelte';
	import { getShinobiPath } from '../paths.data';

	const path = getShinobiPath('path-of-fortune');
</script>

<PathPage {path} />
