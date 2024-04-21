<svelte:head>
  <link rel="icon" href="/favicon_misc.png">
  <style>
    body {
      margin: 0;
    }
  </style>
</svelte:head>

<main style="height: 100vh; background-color: #1b0320; display:flex; flex-direction: column;">
  <div style="height:30px; border: 2px solid #00ff00; border-radius: 10px;margin-bottom:2px;">
    <a style="color: #00A639" href="/">BACK</a>
  </div>

  <slot />

</main>
