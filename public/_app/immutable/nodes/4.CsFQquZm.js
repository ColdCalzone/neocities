import{s as R,c as C,u as E,g as U,a as W,o as S}from"../chunks/scheduler.DqiQiJ2X.js";import{S as $,i as D,e as b,s as x,h as q,c as _,p as A,d,a as L,l as z,b as v,u as w,f as p,g as M,t as B,j as N}from"../chunks/index.DJQJZrpW.js";let m;const T=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&T.decode();let f=null;function O(){return(f===null||f.byteLength===0)&&(f=new Uint8Array(m.memory.buffer)),f}function H(e,t){return e=e>>>0,T.decode(O().subarray(e,e+t))}async function j(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(s){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function F(){const e={};return e.wbg={},e.wbg.__wbg_alert_bcc85d6b5a7e8ee9=function(t,n){alert(H(t,n))},e}function P(e,t){return m=e.exports,I.__wbindgen_wasm_module=t,f=null,m}async function I(e){if(m!==void 0)return m;typeof e>"u"&&(e=new URL(""+new URL("../assets/misc_terminal_bg.D0Hkrtb9.wasm",import.meta.url).href,import.meta.url));const t=F();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:s}=await j(await e,t);return P(n,s)}function Q(e){let t,n,s=`:root {
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
    }`,c,o,l,k=`<pre class="terminal-output"><h2 style="border-bottom: 2px dotted white;">&gt;./CELLULAR_AUTOMATA</h2>I made this after watching a <a href="https://www.youtube.com/watch?v=SqhXQUzVMlQ" target="_blank">Steve
Mould video</a> on <i>Excitable Media</i>, which I then learned could be represented with <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank">cellular automata</a>. I thought the idea was cool, and it reminded me of <a href="https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction" target="_blank">the Belousov-Zhabotinsky reaction</a>, so I wanted to make one. Turns out, onces you have one cellular automata set up, it&#39;s pretty easy to just, make another. Or generalize it. I did that.


WIP. Will include:
    * A few automata presets
    * Customizable palettes
    * Proper documentation

(Click the cells to change the palette, btw.)
    </pre>`,g,u;const y=e[1].default,i=C(y,e,e[0],null);return{c(){t=b("link"),n=b("style"),n.textContent=s,c=x(),o=b("main"),l=b("div"),l.innerHTML=k,g=x(),i&&i.c(),this.h()},l(a){const r=q("svelte-17t0wea",document.head);t=_(r,"LINK",{rel:!0,href:!0}),n=_(r,"STYLE",{"data-svelte-h":!0}),A(n)!=="svelte-o5w3bx"&&(n.textContent=s),r.forEach(d),c=L(a),o=_(a,"MAIN",{style:!0});var h=z(o);l=_(h,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),A(l)!=="svelte-bagqm8"&&(l.innerHTML=k),g=L(h),i&&i.l(h),h.forEach(d),this.h()},h(){v(t,"rel","icon"),v(t,"href","/favicon_misc.png"),v(l,"class","terminal-container main-terminal"),w(l,"flex","1"),w(o,"height","100vh"),w(o,"background-color","black"),w(o,"display","flex")},m(a,r){p(document.head,t),p(document.head,n),M(a,c,r),M(a,o,r),p(o,l),p(o,g),i&&i.m(o,null),u=!0},p(a,[r]){i&&i.p&&(!u||r&1)&&E(i,y,a,a[0],u?W(y,a[0],r,null):U(a[0]),null)},i(a){u||(B(i,a),u=!0)},o(a){N(i,a),u=!1},d(a){a&&(d(c),d(o)),d(t),d(n),i&&i.d(a)}}}function V(e,t,n){let{$$slots:s={},$$scope:c}=t;return S(async()=>{(await I()).greet()}),e.$$set=o=>{"$$scope"in o&&n(0,c=o.$$scope)},[c,s]}class X extends ${constructor(t){super(),D(this,t,V,Q,R,{})}}export{X as component};
