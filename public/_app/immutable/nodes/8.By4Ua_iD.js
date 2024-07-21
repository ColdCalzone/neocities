import{s as _,b as y,n as v}from"../chunks/scheduler.L480YMyx.js";import{S,i as I,e as o,s as w,h as M,c as u,g as h,d as c,a as H,f as l,k as p,l as T}from"../chunks/index.CSX-Qs3x.js";function L(C){let e,t,m="",f,n,x="",b,i,k=`const CANVAS = document.querySelector("canvas");
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

      let button = document.querySelector("button");

      button.onclick = () => render(CTX);`,d,a,g='<main><section class="horiz"><textarea>WHAT DID YOU DO?</textarea> <fieldset class="outline"><div><input checked="" type="checkbox" name="shake"/> <label for="shake">Shaking?</label></div> <div><input checked="" type="checkbox" name="shadow"/> <label for="shadow">Shadow?</label></div> <div><input checked="" type="checkbox" name="flashing"/> <label for="flashing">Flashing?</label></div> <div><input checked="" type="checkbox" name="motion"/> <label for="motion">Motion blur?</label></div> <div><input checked="" type="checkbox" name="lightning"/> <label for="lightning">Lightning?</label></div> <div><input type="checkbox" name="italic"/> <label for="italic">Italic?</label></div> <div><input type="checkbox" name="transparent"/> <label for="transparent">Transparent?</label></div> <button>Generate GIF</button></fieldset></section> <section><p>Preview</p> <canvas width="100" height="150">This site requires JavaScript, soz.</canvas></section> <p>font is Courierstuck, out of necessity. Inacccuracies may occur.</p></main>';return{c(){e=o("link"),t=o("script"),t.innerHTML=m,n=o("script"),n.innerHTML=x,i=o("script"),i.textContent=k,d=w(),a=o("div"),a.innerHTML=g,this.h()},l(r){const s=M("svelte-ufs359",document.head);e=u(s,"LINK",{href:!0,rel:!0,type:!0}),t=u(s,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(t)!=="svelte-11csy2a"&&(t.innerHTML=m),n=u(s,"SCRIPT",{src:!0,"data-svelte-h":!0}),h(n)!=="svelte-1h1tbyx"&&(n.innerHTML=x),i=u(s,"SCRIPT",{"data-svelte-h":!0}),h(i)!=="svelte-1gvhspr"&&(i.textContent=k),s.forEach(c),d=H(r),a=u(r,"DIV",{class:!0,"data-svelte-h":!0}),h(a)!=="svelte-vvdzip"&&(a.innerHTML=g),this.h()},h(){document.title="GREEN MOTHERFUCKING SUN",l(e,"href","/homestuck/greensuntext/greensun.css"),l(e,"rel","stylesheet"),l(e,"type","text/css"),y(t.src,f="/homestuck/greensuntext/gif.js")||l(t,"src",f),y(n.src,b="/homestuck/greensuntext/greensun.js")||l(n,"src",b),l(a,"class","flex")},m(r,s){p(document.head,e),p(document.head,t),p(document.head,n),p(document.head,i),T(r,d,s),T(r,a,s)},p:v,i:v,o:v,d(r){r&&(c(d),c(a)),c(e),c(t),c(n),c(i)}}}class X extends S{constructor(e){super(),I(this,e,null,L,_,{})}}export{X as component};
