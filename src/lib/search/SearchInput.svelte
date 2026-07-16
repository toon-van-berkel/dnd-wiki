<script lang="ts">
    import searchIcon from '$lib/lib/assets/icons/util/search.svg'

    const results = [
        'test','test'
    ]
</script>

<div>
    <form action="">
        <input 
            type="submit"
            aria-hidden="true"
            aria-label="click to search through the wiki"

            class="navigation-item__icon"
            style={`--navigation-icon: url("${searchIcon}")`}
        />
        <input 
            type="text"
        >
    </form>
    <div>
        {#each results as result}
            {result}
        {/each}
    </div>
</div>