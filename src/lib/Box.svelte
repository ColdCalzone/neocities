<script lang="ts">
    export let title : string = "";
    export let style : string = "";
</script>
<style>
    .box {
        background-color: #13092D;
        border: 1px solid #d7cdf7;
        padding: 5px;
        margin-bottom: 10px;
    }
    /* button.box:hover:enabled {
        color: orangered;
    }
    button.box:enabled {
        color: white;
    } */
</style>

<div class="box" {style}>
    {#if title != ""}
    <h2>{title}</h2>
    <hr>
    {/if}
    <slot />
</div>