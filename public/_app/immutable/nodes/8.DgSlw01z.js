import{s as g,b as y,n as u}from"../chunks/scheduler.L480YMyx.js";import{S as _,i as T,e as o,s as C,h as S,c as d,g as h,d as l,a as w,f as r,k as p,l as b}from"../chunks/index.CSX-Qs3x.js";function I(k){let e,t,v="",m,a,f=`import { onMount } from "svelte";
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
    });`,c,n,x='<main><section class="horiz"><textarea>WHAT DID YOU DO?</textarea> <fieldset class="outline"><div><input checked="" type="checkbox" name="shake"/> <label for="shake">Shaking?</label></div> <div><input checked="" type="checkbox" name="shadow"/> <label for="shadow">Shadow?</label></div> <div><input checked="" type="checkbox" name="flashing"/> <label for="flashing">Flashing?</label></div> <div><input checked="" type="checkbox" name="motion"/> <label for="motion">Motion blur?</label></div> <div><input checked="" type="checkbox" name="lightning"/> <label for="lightning">Lightning?</label></div> <div><input type="checkbox" name="italic"/> <label for="italic">Italic?</label></div> <div><input type="checkbox" name="transparent"/> <label for="transparent">Transparent?</label></div> <button>Generate GIF</button></fieldset></section> <section><p>Preview</p> <canvas width="100" height="150">This site requires JavaScript, soz.</canvas></section> <p>font is Courierstuck, out of necessity. Inacccuracies may occur.</p></main>';return{c(){e=o("link"),t=o("script"),t.innerHTML=v,a=o("script"),a.textContent=f,c=C(),n=o("div"),n.innerHTML=x,this.h()},l(i){const s=S("svelte-1dpfvda",document.head);e=d(s,"LINK",{href:!0,rel:!0,type:!0}),t=d(s,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(t)!=="svelte-11csy2a"&&(t.innerHTML=v),a=d(s,"SCRIPT",{"data-svelte-h":!0}),h(a)!=="svelte-1t99wq4"&&(a.textContent=f),s.forEach(l),c=w(i),n=d(i,"DIV",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-vvdzip"&&(n.innerHTML=x),this.h()},h(){document.title="GREEN MOTHERFUCKING SUN",r(e,"href","/homestuck/greensuntext/greensun.css"),r(e,"rel","stylesheet"),r(e,"type","text/css"),y(t.src,m="/homestuck/greensuntext/gif.js")||r(t,"src",m),r(n,"class","flex")},m(i,s){p(document.head,e),p(document.head,t),p(document.head,a),b(i,c,s),b(i,n,s)},p:u,i:u,o:u,d(i){i&&(l(c),l(n)),l(e),l(t),l(a)}}}class H extends _{constructor(e){super(),T(this,e,null,I,g,{})}}export{H as component};
