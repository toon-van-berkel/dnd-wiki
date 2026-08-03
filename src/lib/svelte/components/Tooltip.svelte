<!--  
    Location: src\lib\svelte\components\Tooltip.svelte
    use: 
-->
<script lang="ts">
	let { tip }: { tip: string } = $props();
</script>

<span>{tip}</span>