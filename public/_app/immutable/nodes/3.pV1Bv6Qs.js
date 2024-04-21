var pe=Object.defineProperty;var ge=(i,t,s)=>t in i?pe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var G=(i,t,s)=>(ge(i,typeof t!="symbol"?t+"":t,s),s);import{s as ne,l as j,n as Y,r as he,o as fe,h as le,c as ve,u as we,g as _e,a as be}from"../chunks/scheduler.BDXRdsok.js";import{S as ie,i as oe,e as w,s as D,c as _,b as R,d as m,a as F,g as V,f as c,l as $,k as v,y as P,A as me,j as U,n as Z,h as ye,o as ee,p as te,t as K,m as X,q as se}from"../chunks/index.CZd9ryWx.js";import{e as J}from"../chunks/each.D6YF6ztN.js";import{N as ke}from"../chunks/Navigation.CL12RZTF.js";function re(i,t,s){const e=i.slice();return e[11]=t[s],e[13]=s,e}function ae(i){let t,s,e;function a(){return i[8](i[13])}return{c(){t=w("div"),this.h()},l(n){t=_(n,"DIV",{class:!0,style:!0}),R(t).forEach(m),this.h()},h(){c(t,"class","palette-color"),U(t,"background-color",i[11])},m(n,f){$(n,t,f),s||(e=P(t,"mousedown",a),s=!0)},p(n,f){i=n,f&1&&U(t,"background-color",i[11])},d(n){n&&m(t),s=!1,e()}}}function Ae(i){let t,s,e,a,n='<img src="/images/drawing/brush.png"/>',f,h,p='<img src="/images/drawing/eraser.png"/>',b,A,g,H='<img src="/images/drawing/palette.png"/>',E,l,o,u,L,x,I=J(i[0]),y=[];for(let d=0;d<I.length;d+=1)y[d]=ae(re(i,I,d));return{c(){t=w("canvas"),s=D(),e=w("div"),a=w("button"),a.innerHTML=n,f=D(),h=w("button"),h.innerHTML=p,b=D(),A=w("div"),g=w("button"),g.innerHTML=H,E=D(),l=w("div");for(let d=0;d<y.length;d+=1)y[d].c();o=D(),u=w("input"),this.h()},l(d){t=_(d,"CANVAS",{id:!0}),R(t).forEach(m),s=F(d),e=_(d,"DIV",{id:!0});var C=R(e);a=_(C,"BUTTON",{id:!0,"data-svelte-h":!0}),V(a)!=="svelte-6uqv5f"&&(a.innerHTML=n),f=F(C),h=_(C,"BUTTON",{id:!0,"data-svelte-h":!0}),V(h)!=="svelte-180mwel"&&(h.innerHTML=p),C.forEach(m),b=F(d),A=_(d,"DIV",{id:!0});var r=R(A);g=_(r,"BUTTON",{id:!0,"data-svelte-h":!0}),V(g)!=="svelte-1welh0e"&&(g.innerHTML=H),r.forEach(m),E=F(d),l=_(d,"DIV",{id:!0});var k=R(l);for(let M=0;M<y.length;M+=1)y[M].l(k);o=F(k),u=_(k,"INPUT",{id:!0,type:!0}),k.forEach(m),this.h()},h(){c(t,"id","canvas"),c(a,"id","brush"),c(h,"id","erase"),c(e,"id","drawing-control"),c(g,"id","toggle"),c(A,"id","drawing-toggle"),c(u,"id","colorpick"),c(u,"type","color"),c(l,"id","palette")},m(d,C){$(d,t,C),$(d,s,C),$(d,e,C),v(e,a),v(e,f),v(e,h),$(d,b,C),$(d,A,C),v(A,g),$(d,E,C),$(d,l,C);for(let r=0;r<y.length;r+=1)y[r]&&y[r].m(l,null);v(l,o),v(l,u),L||(x=[P(a,"click",function(){j(i[1])&&i[1].apply(this,arguments)}),P(h,"click",function(){j(i[2])&&i[2].apply(this,arguments)}),P(g,"click",function(){j(i[3])&&i[3].apply(this,arguments)}),P(u,"change",function(){j(i[5])&&i[5].apply(this,arguments)}),P(u,"input",function(){j(i[6])&&i[6].apply(this,arguments)})],L=!0)},p(d,[C]){if(i=d,C&17){I=J(i[0]);let r;for(r=0;r<I.length;r+=1){const k=re(i,I,r);y[r]?y[r].p(k,C):(y[r]=ae(k),y[r].c(),y[r].m(l,o))}for(;r<y.length;r+=1)y[r].d(1);y.length=I.length}},i:Y,o:Y,d(d){d&&(m(t),m(s),m(e),m(b),m(A),m(E),m(l)),me(y,d),L=!1,he(x)}}}function Ce(i,t,s){let e,a,n,f=["#030621","#FFFFFF","#FF0000","#00FF00","#0000FF"],h=l=>{},p=l=>{},b=l=>{},A=l=>{},g=l=>{},H=l=>{};fe(()=>{console.log("AAAAAAAAAAAaa"),s(7,e=document.getElementById("palette")),a=document.getElementById("drawing-control"),n=document.getElementById("canvas");const l=n.getContext("2d"),o=8,u=8;let L={mode:"draw",func:l?l.rect:void 0,drawing:!1,last:void 0},x=!1;s(3,b=r=>{x=!x,console.log(e),x?(e.classList.add("animate"),a.classList.add("animate"),n.classList.add("animate")):(e.classList.remove("animate"),a.classList.remove("animate"),n.classList.remove("animate"))}),s(1,h=r=>{n.classList.remove("erase"),L.mode="draw",L.func=l.rect}),s(2,p=r=>{n.classList.add("erase"),L.mode="erase",L.func=l.clearRect}),s(5,g=r=>{f.push(r.target.value),s(0,f)}),s(6,H=r=>{r.target.style.backgroundColor=r.target.value});function I(){let r=window.innerHeight,k=window.innerWidth;if(k>r){n.width=2e3;let M=k/r;n.height=n.width/M}else{n.height=2e3;let M=r/k;n.width=n.height/M}}addEventListener("resize",I);function y(r){l.beginPath();let k=r.x/n.clientWidth*n.width,M=r.y/n.clientHeight*n.height;k/=o,k=Math.floor(k)*o,M/=u,M=Math.floor(M)*u,L.func.apply(l,[k,M,o,u]),l.fill(),L.drawing=!0}function d(r){if(!L.drawing)return;let k=r.x/n.clientWidth*n.width,M=r.y/n.clientHeight*n.height;k/=o,k=Math.floor(k)*o,M/=u,M=Math.floor(M)*u,L.func.apply(l,[k,M,o,u]),l.fill()}function C(r){L.drawing=!1,l.closePath()}n.addEventListener("mousedown",y,!1),n.addEventListener("mousemove",d,!1),n.addEventListener("mouseup",C,!1),n.addEventListener("touchstart",y,!1),n.addEventListener("touchmove",d,!1),n.addEventListener("touchend",C,!1),n.addEventListener("touchcancel",C,!1),document.getElementById("colorpick").innerText="+",I(),s(4,A=r=>{if(L.mode=="erase")return;let k=e.children[r];L.last!=null&&(L.last.style.outlineColor="#000000"),k.style.outlineColor="#FFFFFF",L.last=k,l.fillStyle=f[r]})});const E=l=>{A(l)};return i.$$.update=()=>{if(i.$$.dirty&128&&e){let l=e.children[e.children.length-1];l.nodeName.toLowerCase()=="div"&&l.click()}},[f,h,p,b,A,g,H,e,E]}class Me extends ie{constructor(t){super(),oe(this,t,Ce,Ae,ne,{})}}function ce(i,t,s){const e=i.slice();return e[6]=t[s],e}function ue(i){let t,s,e,a,n,f;return{c(){t=w("span"),s=w("a"),e=w("img"),this.h()},l(h){t=_(h,"SPAN",{class:!0});var p=R(t);s=_(p,"A",{href:!0});var b=R(s);e=_(b,"IMG",{src:!0,alt:!0}),b.forEach(m),p.forEach(m),this.h()},h(){le(e.src,a=i[6].src)||c(e,"src",a),c(e,"alt",n=i[6].alt),c(s,"href",f=i[6].href),c(t,"class","svelte-4zw51u")},m(h,p){$(h,t,p),v(t,s),v(s,e)},p(h,p){p&1&&!le(e.src,a=h[6].src)&&c(e,"src",a),p&1&&n!==(n=h[6].alt)&&c(e,"alt",n),p&1&&f!==(f=h[6].href)&&c(s,"href",f)},d(h){h&&m(t)}}}function de(i){let t,s='These buttons were made by me! Feel free to use them. Credit&#39;s appreciated, though just leaving a <a href="/comments/">comment</a> would more than suffice.';return{c(){t=w("p"),t.innerHTML=s,this.h()},l(e){t=_(e,"P",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-blkgft"&&(t.innerHTML=s),this.h()},h(){c(t,"class","svelte-4zw51u")},m(e,a){$(e,t,a)},d(e){e&&m(t)}}}function ze(i){let t,s,e,a,n,f='<img src="https://deep-freezer.neocities.org/images/deepfreeze.gif" alt="Deep Freezer button"/>',h,p,b="(copy button)",A,g,H,E,l='<webring-css site="https://deep-freezer.neocities.org" class="svelte-4zw51u"></webring-css> <script type="text/javascript" src="https://wiregrrrl.neocities.org/js/ACDSring.js" class="svelte-4zw51u"><\/script> <div style="max-width: 180px;" id="nullring" class="svelte-4zw51u"></div>',o,u,L='<ul class="links-box"><li><a href="https://cohost.org/coldcalzone">Cohost</a></li> <li><a href="https://coldcalzone.itch.io">Itch.io</a></li> <li><a href="https://github.com/ColdCalzone">Github</a></li> <li><a href="/shopfalls/prelude/">Shopfalls</a></li> <li><a href="https://acdsstuck.neocities.org/">ACDSstuck</a></li> <li><a href="/homestuck/">Homestuck</a></li></ul>',x,I,y,d,C,r,k,M=J(i[0]),B=[];for(let T=0;T<M.length;T+=1)B[T]=ue(ce(i,M,T));let S=i[1]&&de();return{c(){t=w("footer"),s=w("div"),e=w("div"),a=w("span"),n=w("a"),n.innerHTML=f,h=D(),p=w("a"),p.textContent=b,A=D();for(let T=0;T<B.length;T+=1)B[T].c();g=D(),S&&S.c(),H=D(),E=w("div"),E.innerHTML=l,o=D(),u=w("div"),u.innerHTML=L,x=D(),I=w("label"),y=w("input"),d=D(),C=w("span"),this.h()},l(T){t=_(T,"FOOTER",{class:!0});var N=R(t);s=_(N,"DIV",{style:!0,class:!0});var z=R(s);e=_(z,"DIV",{class:!0});var O=R(e);a=_(O,"SPAN",{style:!0,class:!0});var q=R(a);n=_(q,"A",{id:!0,href:!0,target:!0,"data-svelte-h":!0}),V(n)!=="svelte-1s4xq33"&&(n.innerHTML=f),h=F(q),p=_(q,"A",{id:!0,href:!0,"data-svelte-h":!0}),V(p)!=="svelte-czkxxh"&&(p.textContent=b),q.forEach(m),A=F(O);for(let Q=0;Q<B.length;Q+=1)B[Q].l(O);g=F(O),S&&S.l(O),O.forEach(m),H=F(z),E=_(z,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),V(E)!=="svelte-1f9d1vk"&&(E.innerHTML=l),z.forEach(m),o=F(N),u=_(N,"DIV",{class:!0,"data-svelte-h":!0}),V(u)!=="svelte-16v5tdw"&&(u.innerHTML=L),x=F(N),I=_(N,"LABEL",{class:!0});var W=R(I);y=_(W,"INPUT",{type:!0,class:!0}),d=F(W),C=_(W,"SPAN",{class:!0}),R(C).forEach(m),W.forEach(m),N.forEach(m),this.h()},h(){c(n,"id","deepfreezerButton"),c(n,"href","https://deep-freezer.neocities.org/"),c(n,"target","_blank"),c(p,"id","copyButton"),c(p,"href","javascript:void(0);"),U(a,"display","inline-block"),U(a,"transform","translateY(13px)"),c(a,"class","svelte-4zw51u"),c(e,"class","footer-button-container svelte-4zw51u"),c(E,"id","webring-contain"),c(E,"class","svelte-4zw51u"),U(s,"display","flex"),c(s,"class","svelte-4zw51u"),c(u,"class","svelte-4zw51u"),c(y,"type","checkbox"),c(y,"class","svelte-4zw51u"),c(C,"class","button-slider svelte-4zw51u"),c(I,"class","button-switch svelte-4zw51u"),c(t,"class","svelte-4zw51u")},m(T,N){$(T,t,N),v(t,s),v(s,e),v(e,a),v(a,n),v(a,h),v(a,p),v(e,A);for(let z=0;z<B.length;z+=1)B[z]&&B[z].m(e,null);v(e,g),S&&S.m(e,null),v(s,H),v(s,E),v(t,o),v(t,u),v(t,x),v(t,I),v(I,y),v(I,d),v(I,C),r||(k=[P(p,"click",Le),P(y,"change",i[2])],r=!0)},p(T,[N]){if(N&1){M=J(T[0]);let z;for(z=0;z<M.length;z+=1){const O=ce(T,M,z);B[z]?B[z].p(O,N):(B[z]=ue(O),B[z].c(),B[z].m(e,g))}for(;z<B.length;z+=1)B[z].d(1);B.length=M.length}T[1]?S||(S=de(),S.c(),S.m(e,null)):S&&(S.d(1),S=null)},i:Y,o:Y,d(T){T&&m(t),me(B,T),S&&S.d(),r=!1,he(k)}}}function Le(){var t;let i=(t=document.getElementById("deepfreezerButton"))==null?void 0:t.cloneNode(!0);i.removeAttribute("class"),i.children[0].removeAttribute("class"),navigator.clipboard.writeText(i.outerHTML)}function Ee(i,t,s){class e{constructor(A,g,H){G(this,"href");G(this,"src");G(this,"alt");this.href=A,this.src=g,this.alt=H}}const a=[new e("https://wiregrrrl.neocities.org/","https://wiregrrrl.neocities.org/design/wiregrrrlbutton.gif","WIREGRRRL button"),new e("https://other-space.neocities.org/","https://other-space.neocities.org/resources/OSbuttonX.gif","Other Space button"),new e("https://sadgrl.online/","https://sadgrl.online/assets/images/buttons/sadgrlonline.gif","sadgrl button"),new e("https://excessiveclownery.neocities.org/","https://excessiveclownery.neocities.org/Buttons/DaCircus.png","da circus button"),new e("https://doctorispie.neocities.org/","https://doctorispie.neocities.org/images/DoclingButton.png","Docling invasion button"),new e("https://oberon-industries.neocities.org/","https://oberon-industries.neocities.org/buttons/OberonButton.gif","Oberon Industries button"),new e("https://undeadmel.neocities.org/","https://doctorispie.neocities.org/images/Mel.png","Undead Mel button"),new e("https://timelesstinka.neocities.org/","https://timelesstinka.neocities.org/Images/buttonless.gif","Timelessness button"),new e("https://timewatcher.neocities.org/","https://timewatcher.neocities.org/img/site-button.gif","A button that will take you to Timewatcher's website/fake OS."),new e("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/","https://deep-freezer.neocities.org/images/RAM.gif","RAM: Random Access Mayhem"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://413.gay/","/images/misc_buttons/sburb.gif","Read Homestuck via the UHC"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif","Read ACDSStuck!"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif","Read ACDSStuck! Feat. Izzy Pendles"),new e("https://sporewhore.neocities.org/","https://sporewhore.neocities.org/Button.gif","Sporewhore button"),new e("https://corru.observer/","https://corru.observer/8831.gif","corru.observer button")],n=[new e("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/","https://deep-freezer.neocities.org/images/RAM.gif","RAM: Random Access Mayhem"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif","Read ACDSStuck!"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif","Read ACDSStuck! Feat. Izzy Pendles")];let f=a,h=!1;function p(b){b.target&&(b.target.checked?(s(0,f=n),s(1,h=!0)):(s(0,f=a),s(1,h=!1)),s(0,f))}return fe(()=>{var g;let b=document.getElementById("nullring");b.innerHTML="";let A=document.createElement("script");A.src="https://nuthead.neocities.org/ring/ring.js",(g=document.getElementById("nullring"))==null||g.appendChild(A),A.onload=()=>{document.dispatchEvent(new Event("DOMContentLoaded"))}}),[f,h,p]}class Te extends ie{constructor(t){super(),oe(this,t,Ee,ze,ne,{})}}function He(i){let t,s,e,a,n,f,h,p,b,A,g,H;f=new ke({});const E=i[1].default,l=ve(E,i,i[0],null);return b=new Te({}),g=new Me({}),{c(){t=w("link"),s=w("link"),e=w("meta"),a=w("meta"),n=D(),Z(f.$$.fragment),h=D(),l&&l.c(),p=D(),Z(b.$$.fragment),A=D(),Z(g.$$.fragment),this.h()},l(o){const u=ye("svelte-1cwoews",document.head);t=_(u,"LINK",{href:!0,rel:!0,type:!0,media:!0}),s=_(u,"LINK",{rel:!0,href:!0}),e=_(u,"META",{name:!0,content:!0}),a=_(u,"META",{name:!0,content:!0}),u.forEach(m),n=F(o),ee(f.$$.fragment,o),h=F(o),l&&l.l(o),p=F(o),ee(b.$$.fragment,o),A=F(o),ee(g.$$.fragment,o),this.h()},h(){document.title="Home of Cold Calzones",c(t,"href","/main.css"),c(t,"rel","stylesheet"),c(t,"type","text/css"),c(t,"media","all"),c(s,"rel","icon"),c(s,"href","/favicon.png"),c(e,"name","description"),c(e,"content","A website full of stuff made by a person"),c(a,"name","author"),c(a,"content","Cold Calzone")},m(o,u){v(document.head,t),v(document.head,s),v(document.head,e),v(document.head,a),$(o,n,u),te(f,o,u),$(o,h,u),l&&l.m(o,u),$(o,p,u),te(b,o,u),$(o,A,u),te(g,o,u),H=!0},p(o,[u]){l&&l.p&&(!H||u&1)&&we(l,E,o,o[0],H?be(E,o[0],u,null):_e(o[0]),null)},i(o){H||(K(f.$$.fragment,o),K(l,o),K(b.$$.fragment,o),K(g.$$.fragment,o),H=!0)},o(o){X(f.$$.fragment,o),X(l,o),X(b.$$.fragment,o),X(g.$$.fragment,o),H=!1},d(o){o&&(m(n),m(h),m(p),m(A)),m(t),m(s),m(e),m(a),se(f,o),l&&l.d(o),se(b,o),se(g,o)}}}function Ie(i,t,s){let{$$slots:e={},$$scope:a}=t;return i.$$set=n=>{"$$scope"in n&&s(0,a=n.$$scope)},[a,e]}class Re extends ie{constructor(t){super(),oe(this,t,Ie,He,ne,{})}}export{Re as component};
