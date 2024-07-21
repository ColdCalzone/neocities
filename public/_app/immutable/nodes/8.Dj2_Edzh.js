import{s as C,b as y,n as v}from"../chunks/scheduler.L480YMyx.js";import{S,i as I,e as o,s as M,h as w,c as u,g as h,d as c,a as H,f as l,k as p,l as _}from"../chunks/index.CSX-Qs3x.js";function L(T){let e,t,m="",f,n,x="",b,s,k=`import { onMount } from "svelte";
    onMount(() => {
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

      let button = document.querySelector("button");

      button.onclick = () => render(CTX);
    });`,d,a,g='<main><section class="horiz"><textarea>WHAT DID YOU DO?</textarea> <fieldset class="outline"><div><input checked="" type="checkbox" name="shake"/> <label for="shake">Shaking?</label></div> <div><input checked="" type="checkbox" name="shadow"/> <label for="shadow">Shadow?</label></div> <div><input checked="" type="checkbox" name="flashing"/> <label for="flashing">Flashing?</label></div> <div><input checked="" type="checkbox" name="motion"/> <label for="motion">Motion blur?</label></div> <div><input checked="" type="checkbox" name="lightning"/> <label for="lightning">Lightning?</label></div> <div><input type="checkbox" name="italic"/> <label for="italic">Italic?</label></div> <div><input type="checkbox" name="transparent"/> <label for="transparent">Transparent?</label></div> <button>Generate GIF</button></fieldset></section> <section><p>Preview</p> <canvas width="100" height="150">This site requires JavaScript, soz.</canvas></section> <p>font is Courierstuck, out of necessity. Inacccuracies may occur.</p></main>';return{c(){e=o("link"),t=o("script"),t.innerHTML=m,n=o("script"),n.innerHTML=x,s=o("script"),s.textContent=k,d=M(),a=o("div"),a.innerHTML=g,this.h()},l(r){const i=w("svelte-o3m2jm",document.head);e=u(i,"LINK",{href:!0,rel:!0,type:!0}),t=u(i,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(t)!=="svelte-11csy2a"&&(t.innerHTML=m),n=u(i,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(n)!=="svelte-1h1tbyx"&&(n.innerHTML=x),s=u(i,"SCRIPT",{"data-svelte-h":!0}),h(s)!=="svelte-1t99wq4"&&(s.textContent=k),i.forEach(c),d=H(r),a=u(r,"DIV",{class:!0,"data-svelte-h":!0}),h(a)!=="svelte-vvdzip"&&(a.innerHTML=g),this.h()},h(){document.title="GREEN MOTHERFUCKING SUN",l(e,"href","/homestuck/greensuntext/greensun.css"),l(e,"rel","stylesheet"),l(e,"type","text/css"),y(t.src,f="/homestuck/greensuntext/gif.js")||l(t,"src",f),y(n.src,b="/homestuck/greensuntext/greensun.js")||l(n,"src",b),l(a,"class","flex")},m(r,i){p(document.head,e),p(document.head,t),p(document.head,n),p(document.head,s),_(r,d,i),_(r,a,i)},p:v,i:v,o:v,d(r){r&&(c(d),c(a)),c(e),c(t),c(n),c(s)}}}class E extends S{constructor(e){super(),I(this,e,null,L,C,{})}}export{E as component};
