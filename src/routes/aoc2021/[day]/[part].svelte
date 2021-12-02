<script lang="ts">
    import type { Solution } from "$lib/solution/solution-types";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    let solutionStore: Writable<Solution> = getContext("solutionObject")
    solutionStore.update(_ => null)
</script>

not yet
