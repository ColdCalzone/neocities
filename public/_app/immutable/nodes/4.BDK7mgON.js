import{s as I,c as L,u as M,g as $,a as A,o as E}from"../chunks/scheduler.DqiQiJ2X.js";import{S as T,i as S,e as m,s as v,h as z,c as f,g as k,d as c,a as x,b as q,f as w,j as p,k as _,l as C,t as U,m as j}from"../chunks/index.BpK8XguF.js";function B(r){let a,o,u=`:root {
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
    }`,s,t,l,y=`<pre class="terminal-output"><h2 style="border-bottom: 2px dotted white;">&gt;./CELLULAR_AUTOMATA</h2>I made this after watching a <a href="https://www.youtube.com/watch?v=SqhXQUzVMlQ" target="_blank">Steve
Mould video</a> on <i>Excitable Media</i>, which I then learned could be represented with <a href="https://en.wikipedia.org/wiki/Cellular_automaton" target="_blank">cellular automata</a>. I thought the idea was cool, and it reminded me of <a href="https://en.wikipedia.org/wiki/Belousov%E2%80%93Zhabotinsky_reaction" target="_blank">the Belousov-Zhabotinsky reaction</a>, so I wanted to make one. Turns out, onces you have one cellular automata set up, it&#39;s pretty easy to just, make another. Or generalize it. I did that.


WIP. Will include:
    * A few automata presets
    * Customizable palettes
    * Proper documentation

(Click the cells to change the palette, btw.)
    </pre>`,b,d;const g=r[1].default,n=L(g,r,r[0],null);return{c(){a=m("link"),o=m("style"),o.textContent=u,s=v(),t=m("main"),l=m("div"),l.innerHTML=y,b=v(),n&&n.c(),this.h()},l(e){const i=z("svelte-17t0wea",document.head);a=f(i,"LINK",{rel:!0,href:!0}),o=f(i,"STYLE",{"data-svelte-h":!0}),k(o)!=="svelte-o5w3bx"&&(o.textContent=u),i.forEach(c),s=x(e),t=f(e,"MAIN",{style:!0});var h=q(t);l=f(h,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),k(l)!=="svelte-bagqm8"&&(l.innerHTML=y),b=x(h),n&&n.l(h),h.forEach(c),this.h()},h(){w(a,"rel","icon"),w(a,"href","/favicon_misc.png"),w(l,"class","terminal-container main-terminal"),p(l,"flex","1"),p(t,"height","100vh"),p(t,"background-color","black"),p(t,"display","flex")},m(e,i){_(document.head,a),_(document.head,o),C(e,s,i),C(e,t,i),_(t,l),_(t,b),n&&n.m(t,null),d=!0},p(e,[i]){n&&n.p&&(!d||i&1)&&M(n,g,e,e[0],d?A(g,e[0],i,null):$(e[0]),null)},i(e){d||(U(n,e),d=!0)},o(e){j(n,e),d=!1},d(e){e&&(c(s),c(t)),c(a),c(o),n&&n.d(e)}}}function H(r,a,o){let{$$slots:u={},$$scope:s}=a;return E(async()=>{}),r.$$set=t=>{"$$scope"in t&&o(0,s=t.$$scope)},[s,u]}class P extends T{constructor(a){super(),S(this,a,H,B,I,{})}}export{P as component};
