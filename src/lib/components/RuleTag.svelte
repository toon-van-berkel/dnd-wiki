<script lang="ts">
	type Props = {
		label: string;
	};

	let { label }: Props = $props();
</script>

<span class="tag">{label}</span>

<style lang="scss">
	@use './RuleTag.scss';
</style>
