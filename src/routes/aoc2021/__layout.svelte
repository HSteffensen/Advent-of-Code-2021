<script lang="ts">
    import SolutionSelectionBar from "$lib/sidebar/SolutionSelectionBar.svelte";
    import type { Solution } from "$lib//solution/solution-types";
    import { onDestroy, setContext } from "svelte";
    import { writable } from "svelte/store";

    let solution: Solution;
    let selectedInput: number;

    let solutionStore = writable<Solution>();
    let unsubscribe = solutionStore.subscribe(value => {
        solution = value;
    });

    setContext("solutionObject", solutionStore);

    onDestroy(() => {
        unsubscribe();
    })
</script>

<div id="main-grid">
    <div id="sidebar">
        <SolutionSelectionBar {solution} bind:selectedInput/>
    </div>
    <div id="content">
        <slot />
    </div>
</div>

<style lang="less">
    div#main-grid {
        display: grid;
        grid-template: ~"100vh / 5rem 1fr";
        height: 100%;
        width: 100%;
        div#sidebar {
            height: 100%;
            padding: 0.5rem;
            box-sizing: border-box;
            border-right: black solid 1px;
        }
        div#content {
            padding: 1rem 0.5rem;
            box-sizing: border-box;
            max-height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
</style>
