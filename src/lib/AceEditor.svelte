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

    let new_script = new URL(window.location.href).searchParams.get("script")
    if(new_script) {
      // https://gist.github.com/asidko/9c7064027039411a11323eaf7d8ea2a4
      const decompress = base64string => {
        const bytes = Uint8Array.from(atob(base64string), c => c.charCodeAt(0));
        const cs = new DecompressionStream('gzip');
        const writer = cs.writable.getWriter();
        writer.write(bytes);
        writer.close();
        return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
            return new TextDecoder().decode(arrayBuffer);
        });
      }
      decompress(new_script)
      .then( (o) => {
        edit.setValue(o || value);
      });
    }

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

  :global(#editor *) {
    overflow: clip;
  }

  #editor-container {
    width: 100%;
    height: 100%;
  }
</style>

<div id="editor-container">
  <div id="editor">{value}</div>
</div>
