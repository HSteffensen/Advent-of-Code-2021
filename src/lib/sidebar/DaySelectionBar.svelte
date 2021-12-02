<script lang="ts">
    import Sidebar from "./Sidebar.svelte";

    let numbers = [...Array(25)]
    export var selected = 1;

</script>

<Sidebar>
    <div>
        Days:
    </div>
    {#each numbers as _, index}
        <a 
        class="{selected == index+1 ? 'selected' : ''} selectable"
        href="/aoc2021/day{("00"+(index+1)).slice(-2)}/part1"
        on:click="{() => selected = index+1}"
        >
            <p>{("00"+(index+1)).slice(-2)}</p>
        </a>
    {/each}
</Sidebar>

<style lang="less">
    a {
        flex: 1;
    }
</style>
