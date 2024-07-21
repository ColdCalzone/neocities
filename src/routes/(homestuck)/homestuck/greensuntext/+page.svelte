<svelte:head>
  <title>GREEN MOTHERFUCKING SUN</title>
  <link href="/homestuck/greensuntext/greensun.css" rel="stylesheet" type="text/css">
  <script src="/homestuck/greensuntext/gif.js"></script>
</svelte:head>

<div class="flex">
  <main>
    <section class="horiz">
      <textarea>WHAT DID YOU DO?</textarea>
      <fieldset class="outline">
        <div>
          <input checked type="checkbox" name="shake" />
          <label for="shake">Shaking?</label>
        </div>
        <div>
          <input checked type="checkbox" name="shadow" />
          <label for="shadow">Shadow?</label>
        </div>
        <div>
          <input checked type="checkbox" name="flashing" />
          <label for="flashing">Flashing?</label>
        </div>
        <div>
          <input checked type="checkbox" name="motion" />
          <label for="motion">Motion blur?</label>
        </div>
        <div>
          <input checked type="checkbox" name="lightning" />
          <label for="lightning">Lightning?</label>
        </div>
        <div>
          <input type="checkbox" name="italic" />
          <label for="italic">Italic?</label>
        </div>
        <div>
          <input type="checkbox" name="transparent" />
          <label for="transparent">Transparent?</label>
        </div>
        <button>Generate GIF</button>
      </fieldset>
    </section>
    <section>
      <p>Preview</p>
      <canvas width=100 height=150>This site requires JavaScript, soz.</canvas>
    </section>
  <p>font is Courierstuck, out of necessity. Inacccuracies may occur.</p>
  </main>
</div>
