<svelte:head>
  <title>CELLULAR_AUTOMATA</title>
</svelte:head>

<script lang="ts">
  import Cell from "$lib/misc/Cell.svelte";
  import AceEditor from "$lib/AceEditor.svelte";
  import { onMount } from "svelte";

  let logic : Function = new Function();
  let ace_session : any = undefined;

  let logicCaller = (cell : any, x : any, y : any, getCell : any, max_value : any) => {
    return logic(cell, x, y, getCell, max_value);
  }

  function updateLogic() {
    if(ace_session) logic = new Function('cell', 'x', 'y', 'getCell', 'max_value', ace_session.getValue());
  }

  function copyLink() {
    if(ace_session) {
      // https://gist.github.com/asidko/9c7064027039411a11323eaf7d8ea2a4
      const compress = string => {
        const blobToBase64 = blob => new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(blob);
        });
        const byteArray = new TextEncoder().encode(string);
        const cs = new CompressionStream('gzip');
        const writer = cs.writable.getWriter();
        writer.write(byteArray);
        writer.close();
        return new Response(cs.readable).blob().then(blobToBase64);
      };

      let url = new URL(window.location.href);

      compress(ace_session.getValue())
      .then((o) => {
        url.searchParams.set("script", o);
        navigator.clipboard.writeText(url.href);
      });
    }
  }

  onMount(() => {
    // let codeEdit = document.getElementById("code-edit")! as HTMLTextAreaElement;
    updateLogic();
  });

  function handleOnMouseMove(event : MouseEvent) {
    const { currentTarget: target } = event;

    const rect = (<HTMLElement>target!).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    (<HTMLElement>target).style.setProperty('--mouse-x', `${x}px`);
    (<HTMLElement>target).style.setProperty('--mouse-y', `${y}px`);
  }
</script>

<style>
  .terminal-container {
    border: 2px solid white; border-radius: 10px;
    color: white;
    padding: 10px;
  }

  .terminal-container:not(:last-of-type) {
    margin-right: 5px;
  }

  .grid {
    position: relative;
    z-index: 1;
  }
  :global(.grid > canvas) {
    border: 2px solid transparent;
    z-index: 2;
  }
  .grid::before {
    content: '';

    height: 100%;
    width: 100%;
    position: absolute;
    background: #4e4e6e;
    left: 0;
    top: 0;

    z-index: -1;
  }

  .grid:hover::before {
    background: radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), #fff, #4e4e6e 30% );
  }
</style>

<div class="terminal-container" style="flex: 2; height: 100%; padding: 0; overflow: hidden;">
  <AceEditor
    bind:editor={ace_session}
    value={`/*
  This JS code is run once per cell (100x100 = 10000 calls per frame. Be mindful.).
  variables:
    x: X position of the cell
    y: Y position of the cell
    cell: The original cell. It is advised you make a new cell as seen below.
    getCell(x, y): Gets a cell based on the coordinates.
    max_value: The highest state a cell can be in (based on the palette)

  Review the below code to get some ideas.
*/

let new_cell = {
  state: cell.state
};

if(cell.state > 0) {
  new_cell.state = cell.state - 1;
  return new_cell;
}

for(let offsetX of [-1, 1]) {
  if(getCell(x + offsetX, y).state == max_value) {
    new_cell.state = max_value;
    return new_cell;
  }
}

for(let offsetY of [-1, 1]) {
  if(getCell(x, y + offsetY).state == max_value) {
    new_cell.state = max_value; 
    return new_cell;
  }
}

if(Math.trunc(Math.random() * 10000) == 69) {
  new_cell.state = max_value;
}

return new_cell;`}/>
  </div>

<div class="terminal-container" style="flex: 1; height: 100%; padding: 18px; padding-top: 30px;">
  <div class="grid" style="width: 100%;" on:mousemove={handleOnMouseMove}>
    <Cell logic={logicCaller}/>
  </div>
  <button on:click={updateLogic}>Compile</button>
  <button on:click={copyLink}>Copy link</button>
</div>

