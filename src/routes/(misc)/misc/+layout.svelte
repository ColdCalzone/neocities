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
  // import { onMount } from "svelte";

  // onMount(async () => {
    // const TERMINAL = await wasm();

    // var session = TERMINAL.get_session();
    // session.output_handler((x) => {
      // document.querySelector(".terminal-output").innerHTML = x;
    // });

    // session.run();
  // });
</script>

<main style="height: 100vh; background-color: black;  display:flex;">
  <div class="terminal-container main-terminal" style="flex: 1;">
    <pre class="terminal-output"></pre>
  </div>
  <slot />

</main>
