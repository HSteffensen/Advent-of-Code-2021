<script lang="ts">
    import { Day01 } from "$lib/solution/day01/day01";
    import type { Solution } from "$lib/solution/solution-types";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    export const solution = new Day01();
    let solutionStore: Writable<Solution> = getContext("solutionObject")
    solutionStore.update(_ => solution)
</script>

Day 1 <br/>
{solution.examples.length} examples available

<style lang="less">

</style>
