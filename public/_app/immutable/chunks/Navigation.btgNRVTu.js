import{s as S,n as w,o as P}from"./scheduler.DqiQiJ2X.js";import{S as R,i as U,e as m,s as g,c as h,l as E,d as v,a as k,p as T,b as o,u as z,g as f,f as M,y as F,z as D,A as G,v as J,w as K,x as O}from"./index.DJQJZrpW.js";import{e as j}from"./each.D6YF6ztN.js";import{a as Q}from"./entry.CMuvvvaX.js";function q(u,i,a){const e=u.slice();return e[3]=i[a][0],e[4]=i[a][1],e}function W(u){let i,a='<a href="/" class="svelte-11yi9ym">Home</a>',e,l,c='<a href="/projects/" class="svelte-11yi9ym">Projects</a>',t,n,d='<a href="/art/" class="svelte-11yi9ym">Art</a>',L,p,b='<a href="/read/" class="svelte-11yi9ym">Reading</a>',I,H,x='<a href="/homestuck/" class="svelte-11yi9ym">Homestuck</a>',C,_,y='<a href="/comments/" class="svelte-11yi9ym">Comments</a>';return{c(){i=m("li"),i.innerHTML=a,e=g(),l=m("li"),l.innerHTML=c,t=g(),n=m("li"),n.innerHTML=d,L=g(),p=m("li"),p.innerHTML=b,I=g(),H=m("li"),H.innerHTML=x,C=g(),_=m("li"),_.innerHTML=y,this.h()},l(s){i=h(s,"LI",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-1huopth"&&(i.innerHTML=a),e=k(s),l=h(s,"LI",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-fyezkf"&&(l.innerHTML=c),t=k(s),n=h(s,"LI",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-nx5331"&&(n.innerHTML=d),L=k(s),p=h(s,"LI",{class:!0,"data-svelte-h":!0}),T(p)!=="svelte-14ue3b5"&&(p.innerHTML=b),I=k(s),H=h(s,"LI",{class:!0,"data-svelte-h":!0}),T(H)!=="svelte-r9p8a1"&&(H.innerHTML=x),C=k(s),_=h(s,"LI",{class:!0,"data-svelte-h":!0}),T(_)!=="svelte-3nl1kz"&&(_.innerHTML=y),this.h()},h(){o(i,"class","svelte-11yi9ym"),o(l,"class","svelte-11yi9ym"),o(n,"class","svelte-11yi9ym"),o(p,"class","svelte-11yi9ym"),o(H,"class","svelte-11yi9ym"),o(_,"class","svelte-11yi9ym")},m(s,r){f(s,i,r),f(s,e,r),f(s,l,r),f(s,t,r),f(s,n,r),f(s,L,r),f(s,p,r),f(s,I,r),f(s,H,r),f(s,C,r),f(s,_,r)},p:w,d(s){s&&(v(i),v(e),v(l),v(t),v(n),v(L),v(p),v(I),v(H),v(C),v(_))}}}function X(u){let i,a=j(u[0]),e=[];for(let l=0;l<a.length;l+=1)e[l]=B(q(u,a,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();i=D()},l(l){for(let c=0;c<e.length;c+=1)e[c].l(l);i=D()},m(l,c){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,c);f(l,i,c)},p(l,c){if(c&1){a=j(l[0]);let t;for(t=0;t<a.length;t+=1){const n=q(l,a,t);e[t]?e[t].p(n,c):(e[t]=B(n),e[t].c(),e[t].m(i.parentNode,i))}for(;t<e.length;t+=1)e[t].d(1);e.length=a.length}},d(l){l&&v(i),G(e,l)}}}function B(u){let i,a,e=u[4]+"",l,c;return{c(){i=m("li"),a=m("a"),l=J(e),this.h()},l(t){i=h(t,"LI",{class:!0});var n=E(i);a=h(n,"A",{href:!0,class:!0});var d=E(a);l=K(d,e),d.forEach(v),n.forEach(v),this.h()},h(){o(a,"href",c=u[3]),o(a,"class","svelte-11yi9ym"),o(i,"class","svelte-11yi9ym")},m(t,n){f(t,i,n),M(i,a),M(a,l)},p(t,n){n&1&&e!==(e=t[4]+"")&&O(l,e),n&1&&c!==(c=t[3])&&o(a,"href",c)},d(t){t&&v(i)}}}function Y(u){let i,a,e,l,c='<div class="clickable svelte-11yi9ym" id="header"></div>',t,n,d,L,p,b,I='<div style="pointer-events: none;" class="svelte-11yi9ym"></div>',H,x;function C(s,r){return s[0].length>0?X:W}let _=C(u),y=_(u);return{c(){i=m("div"),a=g(),e=m("div"),l=m("a"),l.innerHTML=c,t=g(),n=m("nav"),d=m("div"),L=m("ul"),y.c(),p=g(),b=m("div"),b.innerHTML=I,this.h()},l(s){i=h(s,"DIV",{class:!0}),E(i).forEach(v),a=k(s),e=h(s,"DIV",{id:!0,style:!0,class:!0});var r=E(e);l=h(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),T(l)!=="svelte-1k699fg"&&(l.innerHTML=c),t=k(r),n=h(r,"NAV",{id:!0,class:!0});var N=E(n);d=h(N,"DIV",{class:!0});var A=E(d);L=h(A,"UL",{class:!0});var V=E(L);y.l(V),V.forEach(v),A.forEach(v),N.forEach(v),p=k(r),b=h(r,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),T(b)!=="svelte-125zqna"&&(b.innerHTML=I),r.forEach(v),this.h()},h(){o(i,"class","navigation-shown svelte-11yi9ym"),o(l,"href","/"),o(l,"class","svelte-11yi9ym"),o(L,"class","svelte-11yi9ym"),o(d,"class","svelte-11yi9ym"),o(n,"id","navbar"),o(n,"class","svelte-11yi9ym"),o(b,"id","show"),o(b,"class","svelte-11yi9ym"),o(e,"id","navigation"),z(e,"--banner","url('"+u[1]+"')"),o(e,"class","svelte-11yi9ym")},m(s,r){f(s,i,r),f(s,a,r),f(s,e,r),M(e,l),M(e,t),M(e,n),M(n,d),M(d,L),y.m(L,null),M(e,p),M(e,b),H||(x=F(b,"click",u[2]),H=!0)},p(s,[r]){_===(_=C(s))&&y?y.p(s,r):(y.d(1),y=_(s),y&&(y.c(),y.m(L,null))),r&2&&z(e,"--banner","url('"+s[1]+"')")},i:w,o:w,d(s){s&&(v(i),v(a),v(e)),y.d(),H=!1,x()}}}function Z(u,i,a){let{custom:e=[]}=i,{banner:l="/images/banner.png"}=i;function c(){const t=document.getElementById("navigation");t==null||t.classList.toggle("navigation-shown")}return P(()=>{c()}),Q(()=>{const t=document.getElementById("navigation");t==null||t.classList.remove("navigation-shown")}),u.$$set=t=>{"custom"in t&&a(0,e=t.custom),"banner"in t&&a(1,l=t.banner)},[e,l,c]}class se extends R{constructor(i){super(),U(this,i,Z,Y,S,{custom:0,banner:1})}}export{se as N};