<script lang="ts">
    
</script>

<div id="side-flex">
    <slot />
</div>

<style lang="less">
    div#side-flex {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        :global(:hover) {
            background-color: gray;
        }
        :global(a:visited) {
            color: black;
        }
        :global(.selected) {
            background-color: slategrey;
            color: white;
        }
        :global(.selectable) {
            display: block;
            min-height: 2em;
            border: 1px solid black;
            text-align: center;
            position: relative;
            border-radius: 4px;
            color: black;
            :global(p) {
                margin: auto;
                padding: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%) translateX(-50%);
            }
        }
    }
</style>
