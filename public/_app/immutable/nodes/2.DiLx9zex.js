var X=Object.defineProperty;var Z=(i,e,t)=>e in i?X(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var T=(i,e,t)=>Z(i,typeof e!="symbol"?e+"":e,t);import{s as J,n as R,o as ee,h as te,c as se,u as ne,g as ae,a as re}from"../chunks/scheduler.DqiQiJ2X.js";import{S as Q,i as W,e as v,s as w,c as _,b as H,g as I,a as x,d as g,f as r,j as D,l as M,k as d,y as ie,A as oe,n as V,h as le,o as G,p as O,t as N,m as j,q as P}from"../chunks/index.CCwE3_LK.js";import{e as K}from"../chunks/each.D6YF6ztN.js";import{N as ce}from"../chunks/Navigation.C2iGWkyG.js";function U(i,e,t){const n=i.slice();return n[2]=e[t],n}function Y(i){let e,t,n,a,o;return{c(){e=v("span"),t=v("a"),n=v("img"),o=w(),this.h()},l(h){e=_(h,"SPAN",{class:!0});var b=H(e);t=_(b,"A",{href:!0});var m=H(t);n=_(m,"IMG",{src:!0,alt:!0}),m.forEach(g),o=x(b),b.forEach(g),this.h()},h(){te(n.src,a=i[2].src)||r(n,"src",a),r(n,"alt",i[2].alt),r(t,"href",i[2].href),r(e,"class","svelte-g6ubyc")},m(h,b){M(h,e,b),d(e,t),d(t,n),d(e,o)},p:R,d(h){h&&g(e)}}}function ue(i){let e,t,n,a,o,h='<img src="https://deep-freezer.neocities.org/images/deepfreeze.gif" alt="Deep Freezer button"/>',b,m,y="(copy button)",k,E,l,s='<webring-css site="https://deep-freezer.neocities.org" class="svelte-g6ubyc"></webring-css> <script type="text/javascript" src="https://wiregrrrl.neocities.org/js/ACDSring.js" class="svelte-g6ubyc"><\/script> <div style="max-width: 180px;" id="nullring" class="svelte-g6ubyc"></div>',u,z,F='<ul class="links-box"><li><a href="https://coldcalzone.tumblr.com">Tumblr</a></li> <li><a href="https://coldcalzone.itch.io">Itch.io</a></li> <li><a href="https://github.com/ColdCalzone">Github</a></li> <li><a href="/shopfalls/prelude/">Shopfalls</a></li> <li><a href="https://alternativefunction.neocities.org/">Shattered Space</a></li> <li><a href="/homestuck/">Homestuck</a></li></ul>',L,q,C=K(i[0]),p=[];for(let f=0;f<C.length;f+=1)p[f]=Y(U(i,C,f));return{c(){e=v("footer"),t=v("div"),n=v("div"),a=v("span"),o=v("a"),o.innerHTML=h,b=w(),m=v("a"),m.textContent=y,k=w();for(let f=0;f<p.length;f+=1)p[f].c();E=w(),l=v("div"),l.innerHTML=s,u=w(),z=v("div"),z.innerHTML=F,this.h()},l(f){e=_(f,"FOOTER",{class:!0});var $=H(e);t=_($,"DIV",{style:!0,class:!0});var c=H(t);n=_(c,"DIV",{class:!0});var S=H(n);a=_(S,"SPAN",{style:!0,class:!0});var A=H(a);o=_(A,"A",{id:!0,href:!0,target:!0,"data-svelte-h":!0}),I(o)!=="svelte-1s4xq33"&&(o.innerHTML=h),b=x(A),m=_(A,"A",{id:!0,href:!0,"data-svelte-h":!0}),I(m)!=="svelte-czkxxh"&&(m.textContent=y),A.forEach(g),k=x(S);for(let B=0;B<p.length;B+=1)p[B].l(S);S.forEach(g),E=x(c),l=_(c,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),I(l)!=="svelte-1f9d1vk"&&(l.innerHTML=s),c.forEach(g),u=x($),z=_($,"DIV",{class:!0,"data-svelte-h":!0}),I(z)!=="svelte-12eyj9h"&&(z.innerHTML=F),$.forEach(g),this.h()},h(){r(o,"id","deepfreezerButton"),r(o,"href","https://deep-freezer.neocities.org/"),r(o,"target","_blank"),r(m,"id","copyButton"),r(m,"href","javascript:void(0);"),D(a,"display","inline-block"),D(a,"transform","translateY(13px)"),r(a,"class","svelte-g6ubyc"),r(n,"class","footer-button-container svelte-g6ubyc"),r(l,"id","webring-contain"),r(l,"class","svelte-g6ubyc"),D(t,"display","flex"),r(t,"class","svelte-g6ubyc"),r(z,"class","svelte-g6ubyc"),r(e,"class","svelte-g6ubyc")},m(f,$){M(f,e,$),d(e,t),d(t,n),d(n,a),d(a,o),d(a,b),d(a,m),d(n,k);for(let c=0;c<p.length;c+=1)p[c]&&p[c].m(n,null);d(t,E),d(t,l),d(e,u),d(e,z),L||(q=ie(m,"click",he),L=!0)},p(f,[$]){if($&1){C=K(f[0]);let c;for(c=0;c<C.length;c+=1){const S=U(f,C,c);p[c]?p[c].p(S,$):(p[c]=Y(S),p[c].c(),p[c].m(n,null))}for(;c<p.length;c+=1)p[c].d(1);p.length=C.length}},i:R,o:R,d(f){f&&g(e),oe(p,f),L=!1,q()}}}function he(){var e;let i=(e=document.getElementById("deepfreezerButton"))==null?void 0:e.cloneNode(!0);i.removeAttribute("class"),i.children[0].removeAttribute("class"),navigator.clipboard.writeText(i.outerHTML)}function fe(i){class e{constructor(a,o,h){T(this,"href");T(this,"src");T(this,"alt");this.href=a,this.src=o,this.alt=h}}const t=[new e("https://doctorispie.neocities.org/","https://doctorispie.neocities.org/images/DoclingButton.png","Docling invasion button"),new e("https://timelesstinka.neocities.org/","https://timelesstinka.neocities.org/Images/buttonless.gif","Timelessness button"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://413.gay/","/images/misc_buttons/sburb.gif","Read Homestuck via the UHC"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/ShatteredSpaceButton.gif","Read Shattered Space!"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/izzybutton.gif","Read Shattered Space! Feat. Izzy Pendles"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/drewbutton.gif","Read Shattered Space! Feat. Drew Tinker")];return ee(()=>{var o;let n=document.getElementById("nullring");n.innerHTML="";let a=document.createElement("script");a.src="https://nuthead.neocities.org/ring/ring.js",(o=document.getElementById("nullring"))==null||o.appendChild(a),a.onload=()=>{document.dispatchEvent(new Event("DOMContentLoaded"))}}),[t]}class de extends Q{constructor(e){super(),W(this,e,fe,ue,J,{})}}function me(i){let e,t,n,a,o,h,b,m,y,k;h=new ce({props:{custom:[["/homestuck/","Home(stuck)"],["/homestuck/greensuntext","GREEN SUN text generator"]],banner:"/homestuck/images/banner.png"}});const E=i[1].default,l=se(E,i,i[0],null);return y=new de({}),{c(){e=v("link"),t=v("link"),n=v("meta"),a=v("meta"),o=w(),V(h.$$.fragment),b=w(),l&&l.c(),m=w(),V(y.$$.fragment),this.h()},l(s){const u=le("svelte-9aoapu",document.head);e=_(u,"LINK",{href:!0,rel:!0,type:!0,media:!0}),t=_(u,"LINK",{href:!0,rel:!0,type:!0,media:!0}),n=_(u,"META",{name:!0,content:!0}),a=_(u,"META",{name:!0,content:!0}),u.forEach(g),o=x(s),G(h.$$.fragment,s),b=x(s),l&&l.l(s),m=x(s),G(y.$$.fragment,s),this.h()},h(){document.title="Homestuck | Deep Freezer",r(e,"href","/main.css"),r(e,"rel","stylesheet"),r(e,"type","text/css"),r(e,"media","all"),r(t,"href","/homestuck/hs.css"),r(t,"rel","stylesheet"),r(t,"type","text/css"),r(t,"media","all"),r(n,"name","description"),r(n,"content","A directory of many Homestuck theories, essays, etc."),r(a,"name","author"),r(a,"content","Cold Calzone")},m(s,u){d(document.head,e),d(document.head,t),d(document.head,n),d(document.head,a),M(s,o,u),O(h,s,u),M(s,b,u),l&&l.m(s,u),M(s,m,u),O(y,s,u),k=!0},p(s,[u]){l&&l.p&&(!k||u&1)&&ne(l,E,s,s[0],k?re(E,s[0],u,null):ae(s[0]),null)},i(s){k||(N(h.$$.fragment,s),N(l,s),N(y.$$.fragment,s),k=!0)},o(s){j(h.$$.fragment,s),j(l,s),j(y.$$.fragment,s),k=!1},d(s){s&&(g(o),g(b),g(m)),g(e),g(t),g(n),g(a),P(h,s),l&&l.d(s),P(y,s)}}}function pe(i,e,t){let{$$slots:n={},$$scope:a}=e;return i.$$set=o=>{"$$scope"in o&&t(0,a=o.$$scope)},[a,n]}class ke extends Q{constructor(e){super(),W(this,e,pe,me,J,{})}}export{ke as component};
