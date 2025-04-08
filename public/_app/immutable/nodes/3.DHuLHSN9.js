var pe=Object.defineProperty;var ge=(i,t,s)=>t in i?pe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var G=(i,t,s)=>ge(i,typeof t!="symbol"?t+"":t,s);import{s as ne,l as V,n as Y,r as de,o as fe,h as oe,c as ve,u as _e,g as we,a as be}from"../chunks/scheduler.DqiQiJ2X.js";import{S as ie,i as re,e as _,s as F,c as w,b as D,d as m,a as I,g as q,f as c,l as $,k as v,y as P,A as me,j as U,n as Z,h as ye,o as ee,p as te,t as K,m as X,q as se}from"../chunks/index.CCwE3_LK.js";import{e as J}from"../chunks/each.D6YF6ztN.js";import{N as Ae}from"../chunks/Navigation.DF91JvJh.js";function ae(i,t,s){const e=i.slice();return e[11]=t[s],e[13]=s,e}function le(i){let t,s,e;function l(){return i[8](i[13])}return{c(){t=_("div"),this.h()},l(n){t=w(n,"DIV",{class:!0,style:!0}),D(t).forEach(m),this.h()},h(){c(t,"class","palette-color"),U(t,"background-color",i[11])},m(n,f){$(n,t,f),s||(e=P(t,"mousedown",l),s=!0)},p(n,f){i=n,f&1&&U(t,"background-color",i[11])},d(n){n&&m(t),s=!1,e()}}}function ke(i){let t,s,e,l,n='<img src="/images/drawing/brush.png"/>',f,d,p='<img src="/images/drawing/eraser.png"/>',b,k,g,H='<img src="/images/drawing/palette.png"/>',T,o,r,u,C,x,R=J(i[0]),y=[];for(let h=0;h<R.length;h+=1)y[h]=le(ae(i,R,h));return{c(){t=_("canvas"),s=F(),e=_("div"),l=_("button"),l.innerHTML=n,f=F(),d=_("button"),d.innerHTML=p,b=F(),k=_("div"),g=_("button"),g.innerHTML=H,T=F(),o=_("div");for(let h=0;h<y.length;h+=1)y[h].c();r=F(),u=_("input"),this.h()},l(h){t=w(h,"CANVAS",{id:!0}),D(t).forEach(m),s=I(h),e=w(h,"DIV",{id:!0});var M=D(e);l=w(M,"BUTTON",{id:!0,"data-svelte-h":!0}),q(l)!=="svelte-6uqv5f"&&(l.innerHTML=n),f=I(M),d=w(M,"BUTTON",{id:!0,"data-svelte-h":!0}),q(d)!=="svelte-180mwel"&&(d.innerHTML=p),M.forEach(m),b=I(h),k=w(h,"DIV",{id:!0});var a=D(k);g=w(a,"BUTTON",{id:!0,"data-svelte-h":!0}),q(g)!=="svelte-1welh0e"&&(g.innerHTML=H),a.forEach(m),T=I(h),o=w(h,"DIV",{id:!0});var A=D(o);for(let L=0;L<y.length;L+=1)y[L].l(A);r=I(A),u=w(A,"INPUT",{id:!0,type:!0}),A.forEach(m),this.h()},h(){c(t,"id","canvas"),c(l,"id","brush"),c(d,"id","erase"),c(e,"id","drawing-control"),c(g,"id","toggle"),c(k,"id","drawing-toggle"),c(u,"id","colorpick"),c(u,"type","color"),c(o,"id","palette")},m(h,M){$(h,t,M),$(h,s,M),$(h,e,M),v(e,l),v(e,f),v(e,d),$(h,b,M),$(h,k,M),v(k,g),$(h,T,M),$(h,o,M);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m(o,null);v(o,r),v(o,u),C||(x=[P(l,"click",function(){V(i[1])&&i[1].apply(this,arguments)}),P(d,"click",function(){V(i[2])&&i[2].apply(this,arguments)}),P(g,"click",function(){V(i[3])&&i[3].apply(this,arguments)}),P(u,"change",function(){V(i[5])&&i[5].apply(this,arguments)}),P(u,"input",function(){V(i[6])&&i[6].apply(this,arguments)})],C=!0)},p(h,[M]){if(i=h,M&17){R=J(i[0]);let a;for(a=0;a<R.length;a+=1){const A=ae(i,R,a);y[a]?y[a].p(A,M):(y[a]=le(A),y[a].c(),y[a].m(o,r))}for(;a<y.length;a+=1)y[a].d(1);y.length=R.length}},i:Y,o:Y,d(h){h&&(m(t),m(s),m(e),m(b),m(k),m(T),m(o)),me(y,h),C=!1,de(x)}}}function Me(i,t,s){let e,l,n,f=["#030621","#FFFFFF","#FF0000","#00FF00","#0000FF"],d=o=>{},p=o=>{},b=o=>{},k=o=>{},g=o=>{},H=o=>{};fe(()=>{console.log("AAAAAAAAAAAaa"),s(7,e=document.getElementById("palette")),l=document.getElementById("drawing-control"),n=document.getElementById("canvas");const o=n.getContext("2d"),r=8,u=8;let C={mode:"draw",func:o?o.rect:void 0,drawing:!1,last:void 0},x=!1;s(3,b=a=>{x=!x,console.log(e),x?(e.classList.add("animate"),l.classList.add("animate"),n.classList.add("animate")):(e.classList.remove("animate"),l.classList.remove("animate"),n.classList.remove("animate"))}),s(1,d=a=>{n.classList.remove("erase"),C.mode="draw",C.func=o.rect}),s(2,p=a=>{n.classList.add("erase"),C.mode="erase",C.func=o.clearRect}),s(5,g=a=>{f.push(a.target.value),s(0,f)}),s(6,H=a=>{a.target.style.backgroundColor=a.target.value});function R(){let a=window.innerHeight,A=window.innerWidth;if(A>a){n.width=2e3;let L=A/a;n.height=n.width/L}else{n.height=2e3;let L=a/A;n.width=n.height/L}}addEventListener("resize",R);function y(a){o.beginPath();let A=a.x/n.clientWidth*n.width,L=a.y/n.clientHeight*n.height;A/=r,A=Math.floor(A)*r,L/=u,L=Math.floor(L)*u,C.func.apply(o,[A,L,r,u]),o.fill(),C.drawing=!0}function h(a){if(!C.drawing)return;let A=a.x/n.clientWidth*n.width,L=a.y/n.clientHeight*n.height;A/=r,A=Math.floor(A)*r,L/=u,L=Math.floor(L)*u,C.func.apply(o,[A,L,r,u]),o.fill()}function M(a){C.drawing=!1,o.closePath()}n.addEventListener("mousedown",y,!1),n.addEventListener("mousemove",h,!1),n.addEventListener("mouseup",M,!1),n.addEventListener("touchstart",y,!1),n.addEventListener("touchmove",h,!1),n.addEventListener("touchend",M,!1),n.addEventListener("touchcancel",M,!1),document.getElementById("colorpick").innerText="+",R(),s(4,k=a=>{if(C.mode=="erase")return;let A=e.children[a];C.last!=null&&(C.last.style.outlineColor="#000000"),A.style.outlineColor="#FFFFFF",C.last=A,o.fillStyle=f[a]})});const T=o=>{k(o)};return i.$$.update=()=>{if(i.$$.dirty&128&&e){let o=e.children[e.children.length-1];o.nodeName.toLowerCase()=="div"&&o.click()}},[f,d,p,b,k,g,H,e,T]}class Le extends ie{constructor(t){super(),re(this,t,Me,ke,ne,{})}}function ce(i,t,s){const e=i.slice();return e[6]=t[s],e}function ue(i){let t,s,e,l,n,f;return{c(){t=_("span"),s=_("a"),e=_("img"),this.h()},l(d){t=w(d,"SPAN",{class:!0});var p=D(t);s=w(p,"A",{href:!0});var b=D(s);e=w(b,"IMG",{src:!0,alt:!0}),b.forEach(m),p.forEach(m),this.h()},h(){oe(e.src,l=i[6].src)||c(e,"src",l),c(e,"alt",n=i[6].alt),c(s,"href",f=i[6].href),c(t,"class","svelte-ema3ms")},m(d,p){$(d,t,p),v(t,s),v(s,e)},p(d,p){p&1&&!oe(e.src,l=d[6].src)&&c(e,"src",l),p&1&&n!==(n=d[6].alt)&&c(e,"alt",n),p&1&&f!==(f=d[6].href)&&c(s,"href",f)},d(d){d&&m(t)}}}function he(i){let t,s='These buttons were made by me! Feel free to use them. Credit&#39;s appreciated, though just leaving a <a href="/comments/">comment</a> would more than suffice.';return{c(){t=_("p"),t.innerHTML=s,this.h()},l(e){t=w(e,"P",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-blkgft"&&(t.innerHTML=s),this.h()},h(){c(t,"class","svelte-ema3ms")},m(e,l){$(e,t,l)},d(e){e&&m(t)}}}function Ee(i){let t,s,e,l,n,f='<img src="https://deep-freezer.neocities.org/images/deepfreeze.gif" alt="Deep Freezer button"/>',d,p,b="(copy button)",k,g,H,T,o='<webring-css site="https://deep-freezer.neocities.org" class="svelte-ema3ms"></webring-css> <script type="text/javascript" src="https://raw.githack.com/wiregrrrl/ACDSring/refs/heads/failsafe/ACDSring.js" class="svelte-ema3ms"><\/script> <div style="max-width: 180px;" id="nullring" class="svelte-ema3ms"></div>',r,u,C='<ul class="links-box"><li><a href="https://cohost.org/coldcalzone">Cohost</a></li> <li><a href="https://coldcalzone.itch.io">Itch.io</a></li> <li><a href="https://github.com/ColdCalzone">Github</a></li> <li><a href="/shopfalls/prelude/">Shopfalls</a></li> <li><a href="https://alternativefunction.neocities.org/">Shattered Space</a></li> <li><a href="/homestuck/">Homestuck</a></li></ul>',x,R,y,h,M,a,A,L=J(i[0]),z=[];for(let S=0;S<L.length;S+=1)z[S]=ue(ce(i,L,S));let B=i[1]&&he();return{c(){t=_("footer"),s=_("div"),e=_("div"),l=_("span"),n=_("a"),n.innerHTML=f,d=F(),p=_("a"),p.textContent=b,k=F();for(let S=0;S<z.length;S+=1)z[S].c();g=F(),B&&B.c(),H=F(),T=_("div"),T.innerHTML=o,r=F(),u=_("div"),u.innerHTML=C,x=F(),R=_("label"),y=_("input"),h=F(),M=_("span"),this.h()},l(S){t=w(S,"FOOTER",{class:!0});var N=D(t);s=w(N,"DIV",{style:!0,class:!0});var E=D(s);e=w(E,"DIV",{class:!0});var O=D(e);l=w(O,"SPAN",{style:!0,class:!0});var j=D(l);n=w(j,"A",{id:!0,href:!0,target:!0,"data-svelte-h":!0}),q(n)!=="svelte-1s4xq33"&&(n.innerHTML=f),d=I(j),p=w(j,"A",{id:!0,href:!0,"data-svelte-h":!0}),q(p)!=="svelte-czkxxh"&&(p.textContent=b),j.forEach(m),k=I(O);for(let Q=0;Q<z.length;Q+=1)z[Q].l(O);g=I(O),B&&B.l(O),O.forEach(m),H=I(E),T=w(E,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),q(T)!=="svelte-1t8yc71"&&(T.innerHTML=o),E.forEach(m),r=I(N),u=w(N,"DIV",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-1gcmfbf"&&(u.innerHTML=C),x=I(N),R=w(N,"LABEL",{class:!0});var W=D(R);y=w(W,"INPUT",{type:!0,class:!0}),h=I(W),M=w(W,"SPAN",{class:!0}),D(M).forEach(m),W.forEach(m),N.forEach(m),this.h()},h(){c(n,"id","deepfreezerButton"),c(n,"href","https://deep-freezer.neocities.org/"),c(n,"target","_blank"),c(p,"id","copyButton"),c(p,"href","javascript:void(0);"),U(l,"display","inline-block"),U(l,"transform","translateY(13px)"),c(l,"class","svelte-ema3ms"),c(e,"class","footer-button-container svelte-ema3ms"),c(T,"id","webring-contain"),c(T,"class","svelte-ema3ms"),U(s,"display","flex"),c(s,"class","svelte-ema3ms"),c(u,"class","svelte-ema3ms"),c(y,"type","checkbox"),c(y,"class","svelte-ema3ms"),c(M,"class","button-slider svelte-ema3ms"),c(R,"class","button-switch svelte-ema3ms"),c(t,"class","svelte-ema3ms")},m(S,N){$(S,t,N),v(t,s),v(s,e),v(e,l),v(l,n),v(l,d),v(l,p),v(e,k);for(let E=0;E<z.length;E+=1)z[E]&&z[E].m(e,null);v(e,g),B&&B.m(e,null),v(s,H),v(s,T),v(t,r),v(t,u),v(t,x),v(t,R),v(R,y),v(R,h),v(R,M),a||(A=[P(p,"click",Ce),P(y,"change",i[2])],a=!0)},p(S,[N]){if(N&1){L=J(S[0]);let E;for(E=0;E<L.length;E+=1){const O=ce(S,L,E);z[E]?z[E].p(O,N):(z[E]=ue(O),z[E].c(),z[E].m(e,g))}for(;E<z.length;E+=1)z[E].d(1);z.length=L.length}S[1]?B||(B=he(),B.c(),B.m(e,null)):B&&(B.d(1),B=null)},i:Y,o:Y,d(S){S&&m(t),me(z,S),B&&B.d(),a=!1,de(A)}}}function Ce(){var t;let i=(t=document.getElementById("deepfreezerButton"))==null?void 0:t.cloneNode(!0);i.removeAttribute("class"),i.children[0].removeAttribute("class"),navigator.clipboard.writeText(i.outerHTML)}function Te(i,t,s){class e{constructor(k,g,H){G(this,"href");G(this,"src");G(this,"alt");this.href=k,this.src=g,this.alt=H}}const l=[new e("https://wiregrrrl.neocities.org/","https://wiregrrrl.neocities.org/design/wiregrrrlbutton.gif","WIREGRRRL button"),new e("https://other-space.neocities.org/","https://other-space.neocities.org/resources/OSbuttonX.gif","Other Space button"),new e("https://sadgrl.online/","https://sadgrl.online/assets/images/buttons/sadgrlonline.gif","sadgrl button"),new e("https://excessiveclownery.neocities.org/","https://excessiveclownery.neocities.org/Buttons/DaCircus.png","da circus button"),new e("https://oberon-industries.neocities.org/","https://oberon-industries.neocities.org/buttons/OberonButton.gif","Oberon Industries button"),new e("https://undeadmel.neocities.org/","https://doctorispie.neocities.org/images/Mel.png","Undead Mel button"),new e("https://timelesstinka.neocities.org/","https://timelesstinka.neocities.org/Images/buttonless.gif","Timelessness button"),new e("https://timewatcher.neocities.org/","https://timewatcher.neocities.org/img/site-button.gif","A button that will take you to Timewatcher's website/fake OS."),new e("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/","https://deep-freezer.neocities.org/images/RAM.gif","RAM: Random Access Mayhem"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://413.gay/","/images/misc_buttons/sburb.gif","Read Homestuck via the UHC"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/ShatteredSpaceButton.gif","Read Shattered Space!"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/izzybutton.gif","Read Shattered Space! Feat. Izzy Pendles"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/drewbutton.gif","Read Shattered Space! Feat. Drew Tinker"),new e("https://sporewhore.neocities.org/","https://sporewhore.neocities.org/Button.gif","Sporewhore button"),new e("https://corru.observer/","https://corru.observer/8831.gif","corru.observer button"),new e("https://brynnadarosa.neocities.org/","https://brynnadarosa.neocities.org/graphics/BrynnaDaRosas_88x31.gif","BrynnaDaRosas button"),new e("https://thinliquid.dev","https://thinliquid.dev/thnlqd.png","thinliquid's site")],n=[new e("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/","https://deep-freezer.neocities.org/images/RAM.gif","RAM: Random Access Mayhem"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/ShatteredSpaceButton.gif","Read Shattered Space!"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/izzybutton.gif","Read Shattered Space! Feat. Izzy Pendles"),new e("https://alternativefunction.neocities.org/","https://alternativefunction.neocities.org/MiscAssets/drewbutton.gif","Read Shattered Space! Feat. Drew Tinker")];let f=l,d=!1;function p(b){b.target&&(b.target.checked?(s(0,f=n),s(1,d=!0)):(s(0,f=l),s(1,d=!1)),s(0,f))}return fe(()=>{var g;let b=document.getElementById("nullring");b.innerHTML="";let k=document.createElement("script");k.src="https://nuthead.neocities.org/ring/ring.js",(g=document.getElementById("nullring"))==null||g.appendChild(k),k.onload=()=>{document.dispatchEvent(new Event("DOMContentLoaded"))}}),[f,d,p]}class Se extends ie{constructor(t){super(),re(this,t,Te,Ee,ne,{})}}function He(i){let t,s,e,l,n,f,d,p,b,k,g,H;f=new Ae({});const T=i[1].default,o=ve(T,i,i[0],null);return b=new Se({}),g=new Le({}),{c(){t=_("link"),s=_("link"),e=_("meta"),l=_("meta"),n=F(),Z(f.$$.fragment),d=F(),o&&o.c(),p=F(),Z(b.$$.fragment),k=F(),Z(g.$$.fragment),this.h()},l(r){const u=ye("svelte-1cwoews",document.head);t=w(u,"LINK",{href:!0,rel:!0,type:!0,media:!0}),s=w(u,"LINK",{rel:!0,href:!0}),e=w(u,"META",{name:!0,content:!0}),l=w(u,"META",{name:!0,content:!0}),u.forEach(m),n=I(r),ee(f.$$.fragment,r),d=I(r),o&&o.l(r),p=I(r),ee(b.$$.fragment,r),k=I(r),ee(g.$$.fragment,r),this.h()},h(){document.title="Home of Cold Calzones",c(t,"href","/main.css"),c(t,"rel","stylesheet"),c(t,"type","text/css"),c(t,"media","all"),c(s,"rel","icon"),c(s,"href","/favicon.png"),c(e,"name","description"),c(e,"content","A website full of stuff made by a person"),c(l,"name","author"),c(l,"content","Cold Calzone")},m(r,u){v(document.head,t),v(document.head,s),v(document.head,e),v(document.head,l),$(r,n,u),te(f,r,u),$(r,d,u),o&&o.m(r,u),$(r,p,u),te(b,r,u),$(r,k,u),te(g,r,u),H=!0},p(r,[u]){o&&o.p&&(!H||u&1)&&_e(o,T,r,r[0],H?be(T,r[0],u,null):we(r[0]),null)},i(r){H||(K(f.$$.fragment,r),K(o,r),K(b.$$.fragment,r),K(g.$$.fragment,r),H=!0)},o(r){X(f.$$.fragment,r),X(o,r),X(b.$$.fragment,r),X(g.$$.fragment,r),H=!1},d(r){r&&(m(n),m(d),m(p),m(k)),m(t),m(s),m(e),m(l),se(f,r),o&&o.d(r),se(b,r),se(g,r)}}}function Re(i,t,s){let{$$slots:e={},$$scope:l}=t;return i.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,e]}class De extends ie{constructor(t){super(),re(this,t,Re,He,ne,{})}}export{De as component};
