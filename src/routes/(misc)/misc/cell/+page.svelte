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
      let url = new URL(window.location.href);

      url.searchParams.set("script", btoa(ace_session.getValue()));
      navigator.clipboard.writeText(url.href);
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

  a {
    color: #41ff41;
  }

  i {
    color: #dd41dd;
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

<div style="display: flex; flex-direction: row; height: 100%; margin-top: 5px;">

  <div class="terminal-container" style="flex: 1;">
    <h2 style="border-bottom: 2px dotted white;">>./CELLULAR_AUTOMATA</h2>
    <p>I made this after watching a <a href="https://www.youtube.com/watch?v=SqhXQUzVMlQ" target="_blank">Steve Mould video</a> on <i>Excitable Media</i>, which I then learned could be represented with <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank">cellular automata</a>. I thought the idea was cool, and it reminded me of <a href="https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction" target="_blank">the Belousov-Zhabotinsky reaction</a>, so I wanted to make one. Turns out, onces you have one cellular automata set up, it's pretty easy to just, make another. Or generalize it. I did that.</p>
    <br>
    <p>WIP. Will include:</p>
    <ul>
      <li>A few automata presets</li>
      <li>Customizable palettes</li>
      <li>Proper documentation</li>
    </ul>
    <p>(Click the cells to change the palette, btw.)
  </div>

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
</div>

