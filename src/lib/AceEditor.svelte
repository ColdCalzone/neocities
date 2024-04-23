<svelte:head>
  <script bind:this={script} on:load={scriptLoaded} src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.33.0/ace.min.js" integrity="sha512-RFjWk8prkK/avV0PuBatirOL57/Q/WSh6BZ82tohL95Ug5h+S9sZoVpRtk+L8LI6q0q5z5wCyrb9N2X+IuNcfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  
  export let value = "";
  export let editor = undefined;

  let script = undefined;

  function scriptLoaded() {
    console.log("script loaded");
    var edit = ace.edit("editor");
    edit.setTheme("ace/theme/gruvbox");
    edit.session.setMode("ace/mode/javascript");

    editor = edit;

    document.getElementById("editor").style.display = "block";
  }

  onMount(() => {
    if(editor) return;

    scriptLoaded();
  })
</script>
<style>
  #editor {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*z-index: -1;*/
    display: none;
  }

  #editor-container {
    width: 100%;
    height: 100%;
  }
</style>

<div id="editor-container">
  <div id="editor">{value}</div>
</div>
