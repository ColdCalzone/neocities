var X=Object.defineProperty;var Z=(l,e,t)=>e in l?X(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var M=(l,e,t)=>(Z(l,typeof e!="symbol"?e+"":e,t),t);import{s as Y,n as F,o as ee,h as te,c as se,u as ne,g as ae,a as re}from"../chunks/scheduler.BDXRdsok.js";import{S as J,i as Q,e as _,s as C,c as v,m as D,g as I,a as A,d as g,k as r,u as S,f as H,b as m,y as le,A as ie,l as V,h as oe,n as q,o as O,t as N,j,p as G}from"../chunks/index.CGq9qK4R.js";import{e as K}from"../chunks/each.D6YF6ztN.js";import{N as ce}from"../chunks/Navigation.D0HRLAdr.js";function U(l,e,t){const n=l.slice();return n[2]=e[t],n}function W(l){let e,t,n,a,i;return{c(){e=_("span"),t=_("a"),n=_("img"),i=C(),this.h()},l(h){e=v(h,"SPAN",{class:!0});var y=D(e);t=v(y,"A",{href:!0});var f=D(t);n=v(f,"IMG",{src:!0,alt:!0}),f.forEach(g),i=A(y),y.forEach(g),this.h()},h(){te(n.src,a=l[2].src)||r(n,"src",a),r(n,"alt",l[2].alt),r(t,"href",l[2].href),r(e,"class","svelte-g6ubyc")},m(h,y){H(h,e,y),m(e,t),m(t,n),m(e,i)},p:F,d(h){h&&g(e)}}}function ue(l){let e,t,n,a,i,h='<img src="https://deep-freezer.neocities.org/images/deepfreeze.gif" alt="Deep Freezer button"/>',y,f,b="(copy button)",k,z,o,s='<webring-css site="https://deep-freezer.neocities.org" class="svelte-g6ubyc"></webring-css> <script type="text/javascript" src="https://wiregrrrl.neocities.org/js/ACDSring.js" class="svelte-g6ubyc"><\/script> <div style="max-width: 180px;" id="nullring" class="svelte-g6ubyc"></div>',u,E,R='<ul class="links-box"><li><a href="https://coldcalzone.tumblr.com">Tumblr</a></li> <li><a href="https://coldcalzone.itch.io">Itch.io</a></li> <li><a href="https://github.com/ColdCalzone">Github</a></li> <li><a href="/shopfalls/prelude/">Shopfalls</a></li> <li><a href="https://acdsstuck.neocities.org/">ACDSstuck</a></li> <li><a href="/homestuck/">Homestuck</a></li></ul>',B,P,x=K(l[0]),p=[];for(let d=0;d<x.length;d+=1)p[d]=W(U(l,x,d));return{c(){e=_("footer"),t=_("div"),n=_("div"),a=_("span"),i=_("a"),i.innerHTML=h,y=C(),f=_("a"),f.textContent=b,k=C();for(let d=0;d<p.length;d+=1)p[d].c();z=C(),o=_("div"),o.innerHTML=s,u=C(),E=_("div"),E.innerHTML=R,this.h()},l(d){e=v(d,"FOOTER",{class:!0});var $=D(e);t=v($,"DIV",{style:!0,class:!0});var c=D(t);n=v(c,"DIV",{class:!0});var w=D(n);a=v(w,"SPAN",{style:!0,class:!0});var T=D(a);i=v(T,"A",{id:!0,href:!0,target:!0,"data-svelte-h":!0}),I(i)!=="svelte-1s4xq33"&&(i.innerHTML=h),y=A(T),f=v(T,"A",{id:!0,href:!0,"data-svelte-h":!0}),I(f)!=="svelte-czkxxh"&&(f.textContent=b),T.forEach(g),k=A(w);for(let L=0;L<p.length;L+=1)p[L].l(w);w.forEach(g),z=A(c),o=v(c,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),I(o)!=="svelte-1f9d1vk"&&(o.innerHTML=s),c.forEach(g),u=A($),E=v($,"DIV",{class:!0,"data-svelte-h":!0}),I(E)!=="svelte-wjafey"&&(E.innerHTML=R),$.forEach(g),this.h()},h(){r(i,"id","deepfreezerButton"),r(i,"href","https://deep-freezer.neocities.org/"),r(i,"target","_blank"),r(f,"id","copyButton"),r(f,"href","javascript:void(0);"),S(a,"display","inline-block"),S(a,"transform","translateY(13px)"),r(a,"class","svelte-g6ubyc"),r(n,"class","footer-button-container svelte-g6ubyc"),r(o,"id","webring-contain"),r(o,"class","svelte-g6ubyc"),S(t,"display","flex"),r(t,"class","svelte-g6ubyc"),r(E,"class","svelte-g6ubyc"),r(e,"class","svelte-g6ubyc")},m(d,$){H(d,e,$),m(e,t),m(t,n),m(n,a),m(a,i),m(a,y),m(a,f),m(n,k);for(let c=0;c<p.length;c+=1)p[c]&&p[c].m(n,null);m(t,z),m(t,o),m(e,u),m(e,E),B||(P=le(f,"click",he),B=!0)},p(d,[$]){if($&1){x=K(d[0]);let c;for(c=0;c<x.length;c+=1){const w=U(d,x,c);p[c]?p[c].p(w,$):(p[c]=W(w),p[c].c(),p[c].m(n,null))}for(;c<p.length;c+=1)p[c].d(1);p.length=x.length}},i:F,o:F,d(d){d&&g(e),ie(p,d),B=!1,P()}}}function he(){var e;let l=(e=document.getElementById("deepfreezerButton"))==null?void 0:e.cloneNode(!0);l.removeAttribute("class"),l.children[0].removeAttribute("class"),navigator.clipboard.writeText(l.outerHTML)}function de(l){class e{constructor(a,i,h){M(this,"href");M(this,"src");M(this,"alt");this.href=a,this.src=i,this.alt=h}}const t=[new e("https://doctorispie.neocities.org/","https://doctorispie.neocities.org/images/DoclingButton.png","Docling invasion button"),new e("https://timelesstinka.neocities.org/","https://timelesstinka.neocities.org/Images/buttonless.png","Timelessness button"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://413.gay/","/images/misc_buttons/sburb.gif","Read Homestuck via the UHC"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif","Read ACDSStuck!"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif","Read ACDSStuck! Feat. Izzy Pendles")];return ee(()=>{var i;let n=document.getElementById("nullring");n.innerHTML="";let a=document.createElement("script");a.src="https://nuthead.neocities.org/ring/ring.js",(i=document.getElementById("nullring"))==null||i.appendChild(a),a.onload=()=>{document.dispatchEvent(new Event("DOMContentLoaded"))}}),[t]}class me extends J{constructor(e){super(),Q(this,e,de,ue,Y,{})}}function fe(l){let e,t,n,a,i,h,y,f,b,k;h=new ce({props:{custom:[["/homestuck/","Home(stuck)"],["/homestuck/classpects","Classpect Analysis (WIP DRAFT BAD ETC.)"]],banner:"/homestuck/images/banner.png"}});const z=l[1].default,o=se(z,l,l[0],null);return b=new me({}),{c(){e=_("link"),t=_("link"),n=_("meta"),a=_("meta"),i=C(),V(h.$$.fragment),y=C(),o&&o.c(),f=C(),V(b.$$.fragment),this.h()},l(s){const u=oe("svelte-9aoapu",document.head);e=v(u,"LINK",{href:!0,rel:!0,type:!0,media:!0}),t=v(u,"LINK",{href:!0,rel:!0,type:!0,media:!0}),n=v(u,"META",{name:!0,content:!0}),a=v(u,"META",{name:!0,content:!0}),u.forEach(g),i=A(s),q(h.$$.fragment,s),y=A(s),o&&o.l(s),f=A(s),q(b.$$.fragment,s),this.h()},h(){document.title="Homestuck | Deep Freezer",r(e,"href","/main.css"),r(e,"rel","stylesheet"),r(e,"type","text/css"),r(e,"media","all"),r(t,"href","/homestuck/hs.css"),r(t,"rel","stylesheet"),r(t,"type","text/css"),r(t,"media","all"),r(n,"name","description"),r(n,"content","A directory of many Homestuck theories, essays, etc."),r(a,"name","author"),r(a,"content","Cold Calzone")},m(s,u){m(document.head,e),m(document.head,t),m(document.head,n),m(document.head,a),H(s,i,u),O(h,s,u),H(s,y,u),o&&o.m(s,u),H(s,f,u),O(b,s,u),k=!0},p(s,[u]){o&&o.p&&(!k||u&1)&&ne(o,z,s,s[0],k?re(z,s[0],u,null):ae(s[0]),null)},i(s){k||(N(h.$$.fragment,s),N(o,s),N(b.$$.fragment,s),k=!0)},o(s){j(h.$$.fragment,s),j(o,s),j(b.$$.fragment,s),k=!1},d(s){s&&(g(i),g(y),g(f)),g(e),g(t),g(n),g(a),G(h,s),o&&o.d(s),G(b,s)}}}function pe(l,e,t){let{$$slots:n={},$$scope:a}=e;return l.$$set=i=>{"$$scope"in i&&t(0,a=i.$$scope)},[a,n]}class ke extends J{constructor(e){super(),Q(this,e,pe,fe,Y,{})}}export{ke as component};
