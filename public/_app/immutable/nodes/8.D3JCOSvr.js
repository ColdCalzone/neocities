import{s as _,b as y,n as v}from"../chunks/scheduler.L480YMyx.js";import{S,i as I,e as o,s as M,h as w,c as u,g as h,d as c,a as q,f as l,k as p,l as T}from"../chunks/index.CSX-Qs3x.js";function H(C){let e,t,m="",f,n,x="",g,s,b=`import { onMount } from "svelte";
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
    });`,d,a,k='<main><section class="horiz"><textarea>WHAT DID YOU DO?</textarea> <fieldset class="outline"><div><input checked="" type="checkbox" name="shake"/> <label for="shake">Shaking?</label></div> <div><input checked="" type="checkbox" name="shadow"/> <label for="shadow">Shadow?</label></div> <div><input checked="" type="checkbox" name="flashing"/> <label for="flashing">Flashing?</label></div> <div><input checked="" type="checkbox" name="motion"/> <label for="motion">Motion blur?</label></div> <div><input checked="" type="checkbox" name="lightning"/> <label for="lightning">Lightning?</label></div> <div><input type="checkbox" name="italic"/> <label for="italic">Italic?</label></div> <div><input type="checkbox" name="transparent"/> <label for="transparent">Transparent?</label></div> <button id="generate-gif">Generate GIF</button></fieldset></section> <section><p>Preview</p> <canvas id="greensun-canvas" width="100" height="150">This site requires JavaScript, soz.</canvas></section> <p>font is Courierstuck, out of necessity. Inacccuracies may occur.</p></main>';return{c(){e=o("link"),t=o("script"),t.innerHTML=m,n=o("script"),n.innerHTML=x,s=o("script"),s.textContent=b,d=M(),a=o("div"),a.innerHTML=k,this.h()},l(r){const i=w("svelte-1k0erhc",document.head);e=u(i,"LINK",{href:!0,rel:!0,type:!0}),t=u(i,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(t)!=="svelte-11csy2a"&&(t.innerHTML=m),n=u(i,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(n)!=="svelte-1h1tbyx"&&(n.innerHTML=x),s=u(i,"SCRIPT",{"data-svelte-h":!0}),h(s)!=="svelte-1lsgeqi"&&(s.textContent=b),i.forEach(c),d=q(r),a=u(r,"DIV",{class:!0,"data-svelte-h":!0}),h(a)!=="svelte-d5gart"&&(a.innerHTML=k),this.h()},h(){document.title="GREEN MOTHERFUCKING SUN",l(e,"href","/homestuck/greensuntext/greensun.css"),l(e,"rel","stylesheet"),l(e,"type","text/css"),y(t.src,f="/homestuck/greensuntext/gif.js")||l(t,"src",f),y(n.src,g="/homestuck/greensuntext/greensun.js")||l(n,"src",g),l(a,"class","flex")},m(r,i){p(document.head,e),p(document.head,t),p(document.head,n),p(document.head,s),T(r,d,i),T(r,a,i)},p:v,i:v,o:v,d(r){r&&(c(d),c(a)),c(e),c(t),c(n),c(s)}}}class X extends S{constructor(e){super(),I(this,e,null,H,_,{})}}export{X as component};
