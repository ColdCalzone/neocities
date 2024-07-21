<svelte:head>
  <title>GREEN MOTHERFUCKING SUN</title>
  <link href="/homestuck/greensuntext/greensun.css" rel="stylesheet" type="text/css">
  <script src="/homestuck/greensuntext/gif.js"></script>
  <script src="/homestuck/greensuntext/greensun.js"></script>
  <script>
    import { onMount } from "svelte";
    onMount(() => {
      const CANVAS = document.querySelector("#greensun-canvas");
      const CTX = CANVAS.getContext("2d");

      setText(CTX);
      preview(CTX);

      // Makes the preview for your text
      let textarea = document.querySelector("textarea");
      textarea.onkeyup = () => {
      	renderText = textarea.value;
      	preview(CTX);
      }

      [...document.querySelector("fieldset").children]
      .filter((child) => child.tagName == "DIV")
      .map((div) => div.children[0])
      .forEach((input) => {
      	console.log(input);
      	input.onchange = () => {
      		options[input.name] = input.checked || false;
      		renderText = textarea.value;
      		preview(CTX);
      	}
      });

      let button = document.querySelector("#generate-gif");

      button.onclick = () => render(CTX);
    });
  </script>
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
        <button id="generate-gif">Generate GIF</button>
      </fieldset>
    </section>
    <section>
      <p>Preview</p>
      <canvas id="greensun-canvas" width=100 height=150>This site requires JavaScript, soz.</canvas>
    </section>
  <p>font is Courierstuck, out of necessity. Inacccuracies may occur.</p>
  </main>
</div>
