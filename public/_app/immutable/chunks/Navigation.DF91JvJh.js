import{s as S,n as V,o as P}from"./scheduler.DqiQiJ2X.js";import{S as R,i as U,e as h,s as I,c as _,b as N,d as r,a as C,g as k,f as u,j as z,l as o,k as g,y as F,z as D,A as G,r as J,u as K,v as O}from"./index.CCwE3_LK.js";import{e as j}from"./each.D6YF6ztN.js";import{a as Q}from"./entry.CxcHOAVA.js";function q(m,s,a){const e=m.slice();return e[3]=s[a][0],e[4]=s[a][1],e}function W(m){let s,a='<a href="/" class="svelte-11yi9ym">Home</a>',e,l,c='<a href="/projects/" class="svelte-11yi9ym">Projects</a>',t,n,p='<a href="/art/" class="svelte-11yi9ym">Art</a>',H,M,b='<a href="/read/" class="svelte-11yi9ym">Reading</a>',E,T,w='<a href="/listening/" class="svelte-11yi9ym">Listening</a>',x,L,d='<a href="/homestuck/" class="svelte-11yi9ym">Homestuck</a>',f,v,A='<a href="/comments/" class="svelte-11yi9ym">Comments</a>';return{c(){s=h("li"),s.innerHTML=a,e=I(),l=h("li"),l.innerHTML=c,t=I(),n=h("li"),n.innerHTML=p,H=I(),M=h("li"),M.innerHTML=b,E=I(),T=h("li"),T.innerHTML=w,x=I(),L=h("li"),L.innerHTML=d,f=I(),v=h("li"),v.innerHTML=A,this.h()},l(i){s=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-1huopth"&&(s.innerHTML=a),e=C(i),l=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-fyezkf"&&(l.innerHTML=c),t=C(i),n=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-nx5331"&&(n.innerHTML=p),H=C(i),M=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(M)!=="svelte-14ue3b5"&&(M.innerHTML=b),E=C(i),T=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(T)!=="svelte-1iyu3ah"&&(T.innerHTML=w),x=C(i),L=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(L)!=="svelte-r9p8a1"&&(L.innerHTML=d),f=C(i),v=_(i,"LI",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-3nl1kz"&&(v.innerHTML=A),this.h()},h(){u(s,"class","svelte-11yi9ym"),u(l,"class","svelte-11yi9ym"),u(n,"class","svelte-11yi9ym"),u(M,"class","svelte-11yi9ym"),u(T,"class","svelte-11yi9ym"),u(L,"class","svelte-11yi9ym"),u(v,"class","svelte-11yi9ym")},m(i,y){o(i,s,y),o(i,e,y),o(i,l,y),o(i,t,y),o(i,n,y),o(i,H,y),o(i,M,y),o(i,E,y),o(i,T,y),o(i,x,y),o(i,L,y),o(i,f,y),o(i,v,y)},p:V,d(i){i&&(r(s),r(e),r(l),r(t),r(n),r(H),r(M),r(E),r(T),r(x),r(L),r(f),r(v))}}}function X(m){let s,a=j(m[0]),e=[];for(let l=0;l<a.length;l+=1)e[l]=B(q(m,a,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=D()},l(l){for(let c=0;c<e.length;c+=1)e[c].l(l);s=D()},m(l,c){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,c);o(l,s,c)},p(l,c){if(c&1){a=j(l[0]);let t;for(t=0;t<a.length;t+=1){const n=q(l,a,t);e[t]?e[t].p(n,c):(e[t]=B(n),e[t].c(),e[t].m(s.parentNode,s))}for(;t<e.length;t+=1)e[t].d(1);e.length=a.length}},d(l){l&&r(s),G(e,l)}}}function B(m){let s,a,e=m[4]+"",l,c;return{c(){s=h("li"),a=h("a"),l=J(e),this.h()},l(t){s=_(t,"LI",{class:!0});var n=N(s);a=_(n,"A",{href:!0,class:!0});var p=N(a);l=K(p,e),p.forEach(r),n.forEach(r),this.h()},h(){u(a,"href",c=m[3]),u(a,"class","svelte-11yi9ym"),u(s,"class","svelte-11yi9ym")},m(t,n){o(t,s,n),g(s,a),g(a,l)},p(t,n){n&1&&e!==(e=t[4]+"")&&O(l,e),n&1&&c!==(c=t[3])&&u(a,"href",c)},d(t){t&&r(s)}}}function Y(m){let s,a,e,l,c='<div class="clickable svelte-11yi9ym" id="header"></div>',t,n,p,H,M,b,E='<div style="pointer-events: none;" class="svelte-11yi9ym"></div>',T,w;function x(f,v){return f[0].length>0?X:W}let L=x(m),d=L(m);return{c(){s=h("div"),a=I(),e=h("div"),l=h("a"),l.innerHTML=c,t=I(),n=h("nav"),p=h("div"),H=h("ul"),d.c(),M=I(),b=h("div"),b.innerHTML=E,this.h()},l(f){s=_(f,"DIV",{class:!0}),N(s).forEach(r),a=C(f),e=_(f,"DIV",{id:!0,style:!0,class:!0});var v=N(e);l=_(v,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1k699fg"&&(l.innerHTML=c),t=C(v),n=_(v,"NAV",{id:!0,class:!0});var A=N(n);p=_(A,"DIV",{class:!0});var i=N(p);H=_(i,"UL",{class:!0});var y=N(H);d.l(y),y.forEach(r),i.forEach(r),A.forEach(r),M=C(v),b=_(v,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),k(b)!=="svelte-125zqna"&&(b.innerHTML=E),v.forEach(r),this.h()},h(){u(s,"class","navigation-shown svelte-11yi9ym"),u(l,"href","/"),u(l,"class","svelte-11yi9ym"),u(H,"class","svelte-11yi9ym"),u(p,"class","svelte-11yi9ym"),u(n,"id","navbar"),u(n,"class","svelte-11yi9ym"),u(b,"id","show"),u(b,"class","svelte-11yi9ym"),u(e,"id","navigation"),z(e,"--banner","url('"+m[1]+"')"),u(e,"class","svelte-11yi9ym")},m(f,v){o(f,s,v),o(f,a,v),o(f,e,v),g(e,l),g(e,t),g(e,n),g(n,p),g(p,H),d.m(H,null),g(e,M),g(e,b),T||(w=F(b,"click",m[2]),T=!0)},p(f,[v]){L===(L=x(f))&&d?d.p(f,v):(d.d(1),d=L(f),d&&(d.c(),d.m(H,null))),v&2&&z(e,"--banner","url('"+f[1]+"')")},i:V,o:V,d(f){f&&(r(s),r(a),r(e)),d.d(),T=!1,w()}}}function Z(m,s,a){let{custom:e=[]}=s,{banner:l="/images/banner.png"}=s;function c(){const t=document.getElementById("navigation");t==null||t.classList.toggle("navigation-shown")}return P(()=>{c()}),Q(()=>{const t=document.getElementById("navigation");t==null||t.classList.remove("navigation-shown")}),m.$$set=t=>{"custom"in t&&a(0,e=t.custom),"banner"in t&&a(1,l=t.banner)},[e,l,c]}class se extends R{constructor(s){super(),U(this,s,Z,Y,S,{custom:0,banner:1})}}export{se as N};
