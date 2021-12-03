<script lang="ts">
    import DaySelectionBar from "$lib/sidebar/DaySelectionBar.svelte";

</script>

<div id="main-grid">
    <div id="sidebar"><DaySelectionBar /></div>
    <div id="content">
        <slot />
    </div>
</div>

<style lang="less">
    div#main-grid {
        display: grid;
        grid-template: ~"100vh / 5rem 1fr";
        height: 100vh;
        width: 100vw;
        div#sidebar {
            height: 100%;
            padding: 0.5rem;
            box-sizing: border-box;
            border-right: black solid 1px;
        }
        div#content {
            // padding: 1rem 0.5rem;
            // box-sizing: border-box;
            max-height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
</style>
