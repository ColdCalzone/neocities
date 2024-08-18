<svelte:head>
  <link rel="icon" href="/favicon_misc.png">
  <style>
    :root {
      font-family: "courier-std", courier, monospace;
      font-weight: bold;
    }

    body {
      margin: 0;
    }

    * {
      box-sizing: border-box;
    }

    .terminal-container {
      border: 2px solid white; border-radius: 10px;
      color: white;
      background-color: #1b0320;
    }

    .main-terminal {
      height: 100%;
    }

    .terminal-output {
      font-family: "courier-std", courier, monospace;
      font-weight: bold;
      width: 100%;
      margin: 0;
      padding: 10px;
      text-wrap: wrap;
    }

    main * {
      overflow-y: auto;
      overflow-x: hidden;
    }

    a {
      color: #41ff41;
    }

    i {
      color: #dd41dd;
    }
  </style>
</svelte:head>
<script>
  // import wasm from "$lib/misc/pkg/misc_terminal";
  import { onMount } from "svelte";

  onMount(async () => {
    // const TERMINAL = await wasm();

    // TERMINAL.greet();
  });
</script>

<main style="height: 100vh; background-color: black;  display:flex;">
  <div class="terminal-container main-terminal" style="flex: 1;">
    <pre class="terminal-output"><h2 style="border-bottom: 2px dotted white;">>./CELLULAR_AUTOMATA</h2>I made this after watching a <a href="https://www.youtube.com/watch?v=SqhXQUzVMlQ" target="_blank">Steve
Mould video</a> on <i>Excitable Media</i>, which I then learned could be represented with <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank">cellular automata</a>. I thought the idea was cool, and it reminded me of <a href="https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction" target="_blank">the Belousov-Zhabotinsky reaction</a>, so I wanted to make one. Turns out, onces you have one cellular automata set up, it's pretty easy to just, make another. Or generalize it. I did that.


WIP. Will include:
    * A few automata presets
    * Customizable palettes
    * Proper documentation

(Click the cells to change the palette, btw.)
    </pre>
  </div>
  <slot />

</main>
