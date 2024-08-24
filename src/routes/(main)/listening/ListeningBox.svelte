<script lang="ts">
  import Box from "$lib/Box.svelte";

  export let cover : string;
  export let link_a : string;
  export let text_a : string;
  export let link_b : string | undefined;
  export let text_b : string | undefined;
</script>

<style>
  * {
    text-wrap: balance;
  }
  img {
    image-rendering:auto;
    width: 200px;
    height: 200px;
  }
</style>

<Box style="flex: 1 1 700px; margin: 0; vertical-align: middle;">
  <div class="flex" style="flex: 1; flex-direction: row; text-align: center; vertical-align: middle;">
    <img src={cover}>
    <div class="flex" style="flex: 1; flex-direction: column;padding: 0 5%; justify-content: space-around;">
      <div><a href={link_a}>{text_a}</a></div>
      {#if link_b != undefined}
      <div><a href={link_b}>{text_b}</a></div>
      {/if}
    </div>
    <div class="flex" style="flex: 2; flex-direction: column; margin: auto;">
      <slot />
    </div>
  </div>
</Box>
