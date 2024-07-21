var ie=Object.defineProperty;var ae=(l,e,s)=>e in l?ie(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s;var I=(l,e,s)=>(ae(l,typeof e!="symbol"?e+"":e,s),s);import{s as z,n as P,o as j,A as ne,h as le,k as ee,B as re,r as oe}from"../chunks/scheduler.DqiQiJ2X.js";import{S as q,i as W,e as y,c as C,g as R,f as w,l as U,d as _,s as B,v as ce,h as te,a as E,b as D,w as he,k as b,y as V,x as de,D as ue,n as H,o as Z,j as v,p as Q,t as G,m as J,q as K}from"../chunks/index.CFf8myiu.js";import{g as fe}from"../chunks/globals.D0QH3NT1.js";function ge(l){let e,s="This page requires Javascript to render. Sorry.";return{c(){e=y("canvas"),e.textContent=s,this.h()},l(o){e=C(o,"CANVAS",{id:!0,class:!0,"data-svelte-h":!0}),R(e)!=="svelte-h7z6jf"&&(e.textContent=s),this.h()},h(){w(e,"id","cell-canvas"),w(e,"class","svelte-mthozf")},m(o,h){U(o,e,h)},p:P,i:P,o:P,d(o){o&&_(e)}}}function pe(l,e,s){let{width:o=100}=e,{height:h=100}=e,{logic:g=(r,c,f,a,n)=>{let t={state:r.state};if(r.state>0)return t.state=r.state-1,t;for(let i of[-1,1])if(a(c+i,f).state==n)return t.state=n,t;for(let i of[-1,1])if(a(c,f+i).state==n)return t.state=n,t;return Math.trunc(Math.random()*1e4)==69&&(t.state=n),t}}=e,d;return j(()=>{class r{constructor(t,i,u=100,m=100){I(this,"palette");I(this,"cells");I(this,"canvas");I(this,"ctx");I(this,"width");I(this,"height");I(this,"cellLogic",()=>{});this.palette=[],this.setPalette(t),this.canvas=i,this.ctx=this.canvas.getContext("2d"),this.cells=Array.from({length:u*m},(A,x)=>{let L={state:Math.random()>.99?this.palette.length-1:0};return L.static&&(L.state=0),L}),this.height=m,this.width=u,this.canvas.width=this.width,this.canvas.height=this.height}setPalette(t){this.palette=[];for(let i of t){let u={r:parseInt(i.substring(1,3),16),g:parseInt(i.substring(3,5),16),b:parseInt(i.substring(5,7),16),a:255};this.palette.push(u)}}getCellWrapping(t,i){if(this.cells)return i%=this.height,t%=this.width,i<0&&(i=this.height+i),t<0&&(t=this.width+t),this.cells[this.width*i+t]}step(){this.cells=this.cells.map((t,i,u)=>{if(t.static)return t;let m=i%this.width,A=(i-m)/this.width;return this.cellLogic.bind(this)(t,m,A,this.getCellWrapping.bind(this),this.palette.length-1)||t})}setCellLogic(t){this.cellLogic=t}render(){let t=new Uint8ClampedArray(4*this.width*this.height);this.cells.map((i,u)=>this.palette.at(i.state%this.palette.length)).forEach((i,u)=>{t[u*4]=i.r,t[u*4+1]=i.g,t[u*4+2]=i.b,t[u*4+3]=i.a}),this.ctx.putImageData(new ImageData(t,this.width,this.height),0,0)}}const c=[["#030516","#2A4347","#218278","#18C0A9","#0FFFDB"],["#05252A","#431F32","#821A3A","#c01442","#FF0F4B"],["#4F1A4D","#432360","#372C73","#2B3686","#1F3F99","#1449AC"],["#000009","#4B00FF","#09DFFF","#4BFF09","#DFFB00","#FFB409","#FF0F4B"]];let f=parseInt(new URL(window.location.href).searchParams.get("palette"))%c.length||0,a=new r(c[f],document.getElementById("cell-canvas"),o,h);a.setCellLogic(g),document.getElementById("cell-canvas").onclick=()=>{f+=1,f%=c.length,a.setPalette(c[f])},d=setInterval(()=>{a.step(),a.render()},1e3/30)}),ne(()=>{d&&clearInterval(d)}),l.$$set=r=>{"width"in r&&s(0,o=r.width),"height"in r&&s(1,h=r.height),"logic"in r&&s(2,g=r.logic)},[o,h,g]}class me extends q{constructor(e){super(),W(this,e,pe,ge,z,{width:0,height:1,logic:2})}}const{document:$}=fe;function ve(l){let e,s="",o,h,g,d,r,c,f;return{c(){e=y("script"),e.innerHTML=s,h=B(),g=y("div"),d=y("div"),r=ce(l[0]),this.h()},l(a){const n=te("svelte-7fphnf",$.head);e=C(n,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0,"data-svelte-h":!0}),R(e)!=="svelte-1but1ta"&&(e.innerHTML=s),n.forEach(_),h=E(a),g=C(a,"DIV",{id:!0,class:!0});var t=D(g);d=C(t,"DIV",{id:!0,class:!0});var i=D(d);r=he(i,l[0]),i.forEach(_),t.forEach(_),this.h()},h(){le(e.src,o="https://cdnjs.cloudflare.com/ajax/libs/ace/1.33.0/ace.min.js")||w(e,"src",o),w(e,"integrity","sha512-RFjWk8prkK/avV0PuBatirOL57/Q/WSh6BZ82tohL95Ug5h+S9sZoVpRtk+L8LI6q0q5z5wCyrb9N2X+IuNcfA=="),w(e,"crossorigin","anonymous"),w(e,"referrerpolicy","no-referrer"),w(d,"id","editor"),w(d,"class","svelte-bz8xh7"),w(g,"id","editor-container"),w(g,"class","svelte-bz8xh7")},m(a,n){b($.head,e),l[4](e),U(a,h,n),U(a,g,n),b(g,d),b(d,r),c||(f=V(e,"load",l[2]),c=!0)},p(a,[n]){n&1&&de(r,a[0])},i:P,o:P,d(a){a&&(_(h),_(g)),_(e),l[4](null),c=!1,f()}}}function we(l,e,s){let{value:o=""}=e,{editor:h=void 0}=e,g;function d(){console.log("script loaded");var c=ace.edit("editor");c.setTheme("ace/theme/gruvbox"),c.session.setMode("ace/mode/javascript");let f=new URL(window.location.href).searchParams.get("script");f&&(n=>{const t=Uint8Array.from(atob(n),m=>m.charCodeAt(0)),i=new DecompressionStream("gzip"),u=i.writable.getWriter();return u.write(t),u.close(),new Response(i.readable).arrayBuffer().then(function(m){return new TextDecoder().decode(m)})})(f).then(n=>{c.setValue(n||o)}),s(3,h=c),document.getElementById("editor").style.display="block"}j(()=>{h||d()});function r(c){ee[c?"unshift":"push"](()=>{g=c,s(1,g)})}return l.$$set=c=>{"value"in c&&s(0,o=c.value),"editor"in c&&s(3,h=c.editor)},[o,g,d,h,r]}class _e extends q{constructor(e){super(),W(this,e,we,ve,z,{value:0,editor:3})}}function be(l){let e,s,o,h='<h2 style="border-bottom: 2px dotted white;">&gt;./CELLULAR_AUTOMATA</h2> <p>I made this after watching a <a href="https://www.youtube.com/watch?v=SqhXQUzVMlQ" target="_blank" class="svelte-1y32402">Steve Mould video</a> on <i class="svelte-1y32402">Excitable Media</i>, which I then learned could be represented with <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank" class="svelte-1y32402">cellular automata</a>. I thought the idea was cool, and it reminded me of <a href="https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction" target="_blank" class="svelte-1y32402">the Belousov-Zhabotinsky reaction</a>, so I wanted to make one. Turns out, onces you have one cellular automata set up, it&#39;s pretty easy to just, make another. Or generalize it. I did that.</p> <br/> <p>WIP. Will include:</p> <ul><li>A few automata presets</li> <li>Customizable palettes</li> <li>Proper documentation</li></ul> <p>(Click the cells to change the palette, btw.)</p>',g,d,r,c,f,a,n,t,i,u,m="Compile",A,x,L="Copy link",F,S,O;function se(p){l[4](p)}let X={value:`/*
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

return new_cell;`};return l[0]!==void 0&&(X.editor=l[0]),r=new _e({props:X}),ee.push(()=>ue(r,"editor",se)),t=new me({props:{logic:l[1]}}),{c(){e=B(),s=y("div"),o=y("div"),o.innerHTML=h,g=B(),d=y("div"),H(r.$$.fragment),f=B(),a=y("div"),n=y("div"),H(t.$$.fragment),i=B(),u=y("button"),u.textContent=m,A=B(),x=y("button"),x.textContent=L,this.h()},l(p){te("svelte-1djkzu0",document.head).forEach(_),e=E(p),s=C(p,"DIV",{style:!0});var k=D(s);o=C(k,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),R(o)!=="svelte-tyqlys"&&(o.innerHTML=h),g=E(k),d=C(k,"DIV",{class:!0,style:!0});var N=D(d);Z(r.$$.fragment,N),N.forEach(_),f=E(k),a=C(k,"DIV",{class:!0,style:!0});var T=D(a);n=C(T,"DIV",{class:!0,style:!0});var Y=D(n);Z(t.$$.fragment,Y),Y.forEach(_),i=E(T),u=C(T,"BUTTON",{"data-svelte-h":!0}),R(u)!=="svelte-1dql93c"&&(u.textContent=m),A=E(T),x=C(T,"BUTTON",{"data-svelte-h":!0}),R(x)!=="svelte-32d48k"&&(x.textContent=L),T.forEach(_),k.forEach(_),this.h()},h(){document.title="CELLULAR_AUTOMATA",w(o,"class","terminal-container svelte-1y32402"),v(o,"flex","1"),w(d,"class","terminal-container svelte-1y32402"),v(d,"flex","2"),v(d,"height","100%"),v(d,"padding","0"),v(d,"overflow","hidden"),w(n,"class","grid svelte-1y32402"),v(n,"width","100%"),w(a,"class","terminal-container svelte-1y32402"),v(a,"flex","1"),v(a,"height","100%"),v(a,"padding","18px"),v(a,"padding-top","30px"),v(s,"display","flex"),v(s,"flex-direction","row"),v(s,"height","100%"),v(s,"margin-top","5px")},m(p,M){U(p,e,M),U(p,s,M),b(s,o),b(s,g),b(s,d),Q(r,d,null),b(s,f),b(s,a),b(a,n),Q(t,n,null),b(a,i),b(a,u),b(a,A),b(a,x),F=!0,S||(O=[V(n,"mousemove",ye),V(u,"click",l[2]),V(x,"click",l[3])],S=!0)},p(p,[M]){const k={};!c&&M&1&&(c=!0,k.editor=p[0],re(()=>c=!1)),r.$set(k)},i(p){F||(G(r.$$.fragment,p),G(t.$$.fragment,p),F=!0)},o(p){J(r.$$.fragment,p),J(t.$$.fragment,p),F=!1},d(p){p&&(_(e),_(s)),K(r),K(t),S=!1,oe(O)}}}function ye(l){const{currentTarget:e}=l,s=e.getBoundingClientRect(),o=l.clientX-s.left,h=l.clientY-s.top;e.style.setProperty("--mouse-x",`${o}px`),e.style.setProperty("--mouse-y",`${h}px`)}function Ce(l,e,s){let o=new Function,h,g=(f,a,n,t,i)=>o(f,a,n,t,i);function d(){h&&(o=new Function("cell","x","y","getCell","max_value",h.getValue()))}function r(){if(h){const f=n=>{const t=A=>new Promise((x,L)=>{const F=new FileReader;F.onloadend=()=>x(F.result.split(",")[1]),F.readAsDataURL(A)}),i=new TextEncoder().encode(n),u=new CompressionStream("gzip"),m=u.writable.getWriter();return m.write(i),m.close(),new Response(u.readable).blob().then(t)};let a=new URL(window.location.href);f(h.getValue()).then(n=>{a.searchParams.set("script",n),navigator.clipboard.writeText(a.href)})}}j(()=>{d()});function c(f){h=f,s(0,h)}return[h,g,d,r,c]}class Ie extends q{constructor(e){super(),W(this,e,Ce,be,z,{})}}export{Ie as component};
