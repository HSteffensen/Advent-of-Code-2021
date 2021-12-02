<script lang="ts">
    import type { Solution } from "$lib/solution/solution-types";
    import Sidebar from "./Sidebar.svelte";

    export let solution: Solution;
    export var selectedPart = 1;
    export var selectedInput = 1;
</script>

<Sidebar>
    Part:
    <a
        class="{selectedPart == 1 ? 'selected' : ''} selectable"
        href="part1"
        on:click="{() => selectedPart = 1}"
    >
        <p>
            Part&nbsp;1
        </p>
    </a>
    <a
        class="{selectedPart == 2 ? 'selected' : ''} selectable"
        href="part2"
        on:click="{() => selectedPart = 2}"
    >
        <p>
            Part&nbsp;2
        </p>
    </a>
    <div />

    {#if solution}
        Input:
        <div
            class="{selectedInput == 0 ? 'selected' : ''} selectable"
            on:click="{() => selectedInput = 0}"
        >
            <p>
                Actual
            </p>
        </div>
        {#each solution.examples as example, index}
            <div
                class="{selectedInput == index+1 ? 'selected' : ''} selectable"
                on:click="{() => selectedInput = index+1}"
            >
                <p>
                    Test&nbsp;{index+1}
                </p>
            </div>
        {/each}
        <div />
    {/if}
</Sidebar>

<style lang="less">
    div, a {
        height: fit-content;
        padding: 0;
    }
</style>
