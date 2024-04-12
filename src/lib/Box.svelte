<script lang="ts">
    export let title : string = "";
    export let style : string = "";
    export let id : string | undefined = undefined;
</script>
<style>
    .box {
        background-color: rgb(var(--dark-background-color));
        border: 1px solid rgb(var(--link-color));
        padding: 5px;
        margin-bottom: 10px;

        scrollbar-width: thin;
    }

    :global(.box img) {
        max-width: 100%;
    }
    /* button.box:hover:enabled {
        color: orangered;
    }
    button.box:enabled {
        color: white;
    } */
</style>

<div class="box" {style} id={id}>
    {#if title != ""}
    <h2>{title}</h2>
    <hr>
    {/if}
    <slot />
</div>
