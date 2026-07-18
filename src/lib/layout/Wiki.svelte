<!-- site\src\lib\layout\Wiki.svelte -->
<script lang="ts">
    import Sidebar from "./snippets/Sidebar.svelte";

	let { children } = $props();
</script>
<nav>
</nav>

<div>
	<div>		
		<img 
			src="/dndportal_wiki-74x32.svg" 
			alt=""
		>
		<span>Rules Wiki</span>
	</div>
	<div>

	</div>
	<div>
		<input 
			type="text" 
			placeholder="Search pages..."
		>
	</div>
</div>
<div class="wiki__content">
    <Sidebar/>
    <main class="wiki__content-main">
        {@render children()}
    </main>
</div>

<style lang="scss">
    @use './Wiki.scss';
</style>