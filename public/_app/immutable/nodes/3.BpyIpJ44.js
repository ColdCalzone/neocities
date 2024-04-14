var pe=Object.defineProperty;var ge=(o,t,i)=>t in o?pe(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var G=(o,t,i)=>(ge(o,typeof t!="symbol"?t+"":t,i),i);import{s as ne,l as V,n as K,r as he,o as fe,h as le,c as ve,u as _e,g as we,a as be}from"../chunks/scheduler.BDXRdsok.js";import{S as ie,i as oe,e as y,s as B,c as k,l as R,d as f,a as D,p as j,b as a,g as $,f as _,y as P,A as me,u as U,k as Z,h as ye,m as ee,n as te,t as X,j as Y,o as se}from"../chunks/index.BZDGbRj9.js";import{e as J}from"../chunks/each.D6YF6ztN.js";import{N as ke}from"../chunks/Navigation.DS5yQpyy.js";function re(o,t,i){const e=o.slice();return e[11]=t[i],e[13]=i,e}function ae(o){let t,i,e;function r(){return o[8](o[13])}return{c(){t=y("div"),this.h()},l(n){t=k(n,"DIV",{class:!0,style:!0}),R(t).forEach(f),this.h()},h(){a(t,"class","palette-color"),U(t,"background-color",o[11])},m(n,m){$(n,t,m),i||(e=P(t,"mousedown",r),i=!0)},p(n,m){o=n,m&1&&U(t,"background-color",o[11])},d(n){n&&f(t),i=!1,e()}}}function Ae(o){let t,i,e,r,n='<img src="/images/drawing/brush.png"/>',m,u,d='<img src="/images/drawing/eraser.png"/>',M,p,v,F='<img src="/images/drawing/palette.png"/>',g,s,h,z,E,x,H=J(o[0]),w=[];for(let c=0;c<H.length;c+=1)w[c]=ae(re(o,H,c));return{c(){t=y("canvas"),i=B(),e=y("div"),r=y("button"),r.innerHTML=n,m=B(),u=y("button"),u.innerHTML=d,M=B(),p=y("div"),v=y("button"),v.innerHTML=F,g=B(),s=y("div");for(let c=0;c<w.length;c+=1)w[c].c();h=B(),z=y("input"),this.h()},l(c){t=k(c,"CANVAS",{id:!0}),R(t).forEach(f),i=D(c),e=k(c,"DIV",{id:!0});var A=R(e);r=k(A,"BUTTON",{id:!0,"data-svelte-h":!0}),j(r)!=="svelte-6uqv5f"&&(r.innerHTML=n),m=D(A),u=k(A,"BUTTON",{id:!0,"data-svelte-h":!0}),j(u)!=="svelte-180mwel"&&(u.innerHTML=d),A.forEach(f),M=D(c),p=k(c,"DIV",{id:!0});var l=R(p);v=k(l,"BUTTON",{id:!0,"data-svelte-h":!0}),j(v)!=="svelte-1welh0e"&&(v.innerHTML=F),l.forEach(f),g=D(c),s=k(c,"DIV",{id:!0});var b=R(s);for(let C=0;C<w.length;C+=1)w[C].l(b);h=D(b),z=k(b,"INPUT",{id:!0,type:!0}),b.forEach(f),this.h()},h(){a(t,"id","canvas"),a(r,"id","brush"),a(u,"id","erase"),a(e,"id","drawing-control"),a(v,"id","toggle"),a(p,"id","drawing-toggle"),a(z,"id","colorpick"),a(z,"type","color"),a(s,"id","palette")},m(c,A){$(c,t,A),$(c,i,A),$(c,e,A),_(e,r),_(e,m),_(e,u),$(c,M,A),$(c,p,A),_(p,v),$(c,g,A),$(c,s,A);for(let l=0;l<w.length;l+=1)w[l]&&w[l].m(s,null);_(s,h),_(s,z),E||(x=[P(r,"click",function(){V(o[1])&&o[1].apply(this,arguments)}),P(u,"click",function(){V(o[2])&&o[2].apply(this,arguments)}),P(v,"click",function(){V(o[3])&&o[3].apply(this,arguments)}),P(z,"change",function(){V(o[5])&&o[5].apply(this,arguments)}),P(z,"input",function(){V(o[6])&&o[6].apply(this,arguments)})],E=!0)},p(c,[A]){if(o=c,A&17){H=J(o[0]);let l;for(l=0;l<H.length;l+=1){const b=re(o,H,l);w[l]?w[l].p(b,A):(w[l]=ae(b),w[l].c(),w[l].m(s,h))}for(;l<w.length;l+=1)w[l].d(1);w.length=H.length}},i:K,o:K,d(c){c&&(f(t),f(i),f(e),f(M),f(p),f(g),f(s)),me(w,c),E=!1,he(x)}}}function Me(o,t,i){let e,r,n,m=["#030621","#FFFFFF","#FF0000","#00FF00","#0000FF"],u=s=>{},d=s=>{},M=s=>{},p=s=>{},v=s=>{},F=s=>{};fe(()=>{console.log("AAAAAAAAAAAaa"),i(7,e=document.getElementById("palette")),r=document.getElementById("drawing-control"),n=document.getElementById("canvas");const s=n.getContext("2d"),h=8,z=8;let E={mode:"draw",func:s?s.rect:void 0,drawing:!1,last:void 0},x=!1;i(3,M=l=>{x=!x,console.log(e),x?(e.classList.add("animate"),r.classList.add("animate"),n.classList.add("animate")):(e.classList.remove("animate"),r.classList.remove("animate"),n.classList.remove("animate"))}),i(1,u=l=>{n.classList.remove("erase"),E.mode="draw",E.func=s.rect}),i(2,d=l=>{n.classList.add("erase"),E.mode="erase",E.func=s.clearRect}),i(5,v=l=>{m.push(l.target.value),i(0,m)}),i(6,F=l=>{l.target.style.backgroundColor=l.target.value});function H(){let l=window.innerHeight,b=window.innerWidth;if(b>l){n.width=2e3;let C=b/l;n.height=n.width/C}else{n.height=2e3;let C=l/b;n.width=n.height/C}}addEventListener("resize",H);function w(l){s.beginPath();let b=l.x/n.clientWidth*n.width,C=l.y/n.clientHeight*n.height;b/=h,b=Math.floor(b)*h,C/=z,C=Math.floor(C)*z,E.func.apply(s,[b,C,h,z]),s.fill(),E.drawing=!0}function c(l){if(!E.drawing)return;let b=l.x/n.clientWidth*n.width,C=l.y/n.clientHeight*n.height;b/=h,b=Math.floor(b)*h,C/=z,C=Math.floor(C)*z,E.func.apply(s,[b,C,h,z]),s.fill()}function A(l){E.drawing=!1,s.closePath()}n.addEventListener("mousedown",w,!1),n.addEventListener("mousemove",c,!1),n.addEventListener("mouseup",A,!1),n.addEventListener("touchstart",w,!1),n.addEventListener("touchmove",c,!1),n.addEventListener("touchend",A,!1),n.addEventListener("touchcancel",A,!1),document.getElementById("colorpick").innerText="+",H(),i(4,p=l=>{if(E.mode=="erase")return;let b=e.children[l];E.last!=null&&(E.last.style.outlineColor="#000000"),b.style.outlineColor="#FFFFFF",E.last=b,s.fillStyle=m[l]})});const g=s=>{p(s)};return o.$$.update=()=>{if(o.$$.dirty&128&&e){let s=e.children[e.children.length-1];s.nodeName.toLowerCase()=="div"&&s.click()}},[m,u,d,M,p,v,F,e,g]}class Ce extends ie{constructor(t){super(),oe(this,t,Me,Ae,ne,{})}}function ce(o,t,i){const e=o.slice();return e[6]=t[i],e}function ue(o){let t,i,e,r,n,m;return{c(){t=y("span"),i=y("a"),e=y("img"),this.h()},l(u){t=k(u,"SPAN",{class:!0});var d=R(t);i=k(d,"A",{href:!0});var M=R(i);e=k(M,"IMG",{src:!0,alt:!0}),M.forEach(f),d.forEach(f),this.h()},h(){le(e.src,r=o[6].src)||a(e,"src",r),a(e,"alt",n=o[6].alt),a(i,"href",m=o[6].href),a(t,"class","svelte-4zw51u")},m(u,d){$(u,t,d),_(t,i),_(i,e)},p(u,d){d&1&&!le(e.src,r=u[6].src)&&a(e,"src",r),d&1&&n!==(n=u[6].alt)&&a(e,"alt",n),d&1&&m!==(m=u[6].href)&&a(i,"href",m)},d(u){u&&f(t)}}}function de(o){let t,i='These buttons were made by me! Feel free to use them. Credit&#39;s appreciated, though just leaving a <a href="/comments/">comment</a> would more than suffice.';return{c(){t=y("p"),t.innerHTML=i,this.h()},l(e){t=k(e,"P",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-blkgft"&&(t.innerHTML=i),this.h()},h(){a(t,"class","svelte-4zw51u")},m(e,r){$(e,t,r)},d(e){e&&f(t)}}}function ze(o){let t,i,e,r,n,m='<img src="https://deep-freezer.neocities.org/images/deepfreeze.gif" alt="Deep Freezer button"/>',u,d,M="(copy button)",p,v,F,g,s='<webring-css site="https://deep-freezer.neocities.org" class="svelte-4zw51u"></webring-css> <script type="text/javascript" src="https://wiregrrrl.neocities.org/js/ACDSring.js" class="svelte-4zw51u"><\/script> <div style="max-width: 180px;" id="nullring" class="svelte-4zw51u"></div>',h,z,E='<ul class="links-box"><li><a href="https://coldcalzone.tumblr.com">Tumblr</a></li> <li><a href="https://coldcalzone.itch.io">Itch.io</a></li> <li><a href="https://github.com/ColdCalzone">Github</a></li> <li><a href="/shopfalls/prelude/">Shopfalls</a></li> <li><a href="https://acdsstuck.neocities.org/">ACDSstuck</a></li> <li><a href="/homestuck/">Homestuck</a></li></ul>',x,H,w,c,A,l,b,C=J(o[0]),I=[];for(let T=0;T<C.length;T+=1)I[T]=ue(ce(o,C,T));let S=o[1]&&de();return{c(){t=y("footer"),i=y("div"),e=y("div"),r=y("span"),n=y("a"),n.innerHTML=m,u=B(),d=y("a"),d.textContent=M,p=B();for(let T=0;T<I.length;T+=1)I[T].c();v=B(),S&&S.c(),F=B(),g=y("div"),g.innerHTML=s,h=B(),z=y("div"),z.innerHTML=E,x=B(),H=y("label"),w=y("input"),c=B(),A=y("span"),this.h()},l(T){t=k(T,"FOOTER",{class:!0});var N=R(t);i=k(N,"DIV",{style:!0,class:!0});var L=R(i);e=k(L,"DIV",{class:!0});var O=R(e);r=k(O,"SPAN",{style:!0,class:!0});var q=R(r);n=k(q,"A",{id:!0,href:!0,target:!0,"data-svelte-h":!0}),j(n)!=="svelte-1s4xq33"&&(n.innerHTML=m),u=D(q),d=k(q,"A",{id:!0,href:!0,"data-svelte-h":!0}),j(d)!=="svelte-czkxxh"&&(d.textContent=M),q.forEach(f),p=D(O);for(let Q=0;Q<I.length;Q+=1)I[Q].l(O);v=D(O),S&&S.l(O),O.forEach(f),F=D(L),g=k(L,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),j(g)!=="svelte-1f9d1vk"&&(g.innerHTML=s),L.forEach(f),h=D(N),z=k(N,"DIV",{class:!0,"data-svelte-h":!0}),j(z)!=="svelte-wjafey"&&(z.innerHTML=E),x=D(N),H=k(N,"LABEL",{class:!0});var W=R(H);w=k(W,"INPUT",{type:!0,class:!0}),c=D(W),A=k(W,"SPAN",{class:!0}),R(A).forEach(f),W.forEach(f),N.forEach(f),this.h()},h(){a(n,"id","deepfreezerButton"),a(n,"href","https://deep-freezer.neocities.org/"),a(n,"target","_blank"),a(d,"id","copyButton"),a(d,"href","javascript:void(0);"),U(r,"display","inline-block"),U(r,"transform","translateY(13px)"),a(r,"class","svelte-4zw51u"),a(e,"class","footer-button-container svelte-4zw51u"),a(g,"id","webring-contain"),a(g,"class","svelte-4zw51u"),U(i,"display","flex"),a(i,"class","svelte-4zw51u"),a(z,"class","svelte-4zw51u"),a(w,"type","checkbox"),a(w,"class","svelte-4zw51u"),a(A,"class","button-slider svelte-4zw51u"),a(H,"class","button-switch svelte-4zw51u"),a(t,"class","svelte-4zw51u")},m(T,N){$(T,t,N),_(t,i),_(i,e),_(e,r),_(r,n),_(r,u),_(r,d),_(e,p);for(let L=0;L<I.length;L+=1)I[L]&&I[L].m(e,null);_(e,v),S&&S.m(e,null),_(i,F),_(i,g),_(t,h),_(t,z),_(t,x),_(t,H),_(H,w),_(H,c),_(H,A),l||(b=[P(d,"click",Le),P(w,"change",o[2])],l=!0)},p(T,[N]){if(N&1){C=J(T[0]);let L;for(L=0;L<C.length;L+=1){const O=ce(T,C,L);I[L]?I[L].p(O,N):(I[L]=ue(O),I[L].c(),I[L].m(e,v))}for(;L<I.length;L+=1)I[L].d(1);I.length=C.length}T[1]?S||(S=de(),S.c(),S.m(e,null)):S&&(S.d(1),S=null)},i:K,o:K,d(T){T&&f(t),me(I,T),S&&S.d(),l=!1,he(b)}}}function Le(){var t;let o=(t=document.getElementById("deepfreezerButton"))==null?void 0:t.cloneNode(!0);o.removeAttribute("class"),o.children[0].removeAttribute("class"),navigator.clipboard.writeText(o.outerHTML)}function Ee(o,t,i){class e{constructor(p,v,F){G(this,"href");G(this,"src");G(this,"alt");this.href=p,this.src=v,this.alt=F}}const r=[new e("https://wiregrrrl.neocities.org/","https://wiregrrrl.neocities.org/design/wiregrrrlbutton.gif","WIREGRRRL button"),new e("https://other-space.neocities.org/","https://other-space.neocities.org/resources/OSbuttonX.gif","Other Space button"),new e("https://sadgrl.online/","https://sadgrl.online/assets/images/buttons/sadgrlonline.gif","sadgrl button"),new e("https://excessiveclownery.neocities.org/","https://excessiveclownery.neocities.org/Buttons/DaCircus.png","da circus button"),new e("https://doctorispie.neocities.org/","https://doctorispie.neocities.org/images/DoclingButton.png","Docling invasion button"),new e("https://oberon-industries.neocities.org/","https://oberon-industries.neocities.org/buttons/OberonButton.gif","Oberon Industries button"),new e("https://undeadmel.neocities.org/","https://doctorispie.neocities.org/images/Mel.png","Undead Mel button"),new e("https://timelesstinka.neocities.org/","https://timelesstinka.neocities.org/Images/buttonless.png","Timelessness button"),new e("https://timewatcher.neocities.org/","https://timewatcher.neocities.org/img/site-button.gif","A button that will take you to Timewatcher's website/fake OS."),new e("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/","https://deep-freezer.neocities.org/images/RAM.gif","RAM: Random Access Mayhem"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://413.gay/","/images/misc_buttons/sburb.gif","Read Homestuck via the UHC"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif","Read ACDSStuck!"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif","Read ACDSStuck! Feat. Izzy Pendles"),new e("https://sporewhore.neocities.org/","https://sporewhore.neocities.org/Button.gif","Sporewhore button")],n=[new e("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/","https://deep-freezer.neocities.org/images/RAM.gif","RAM: Random Access Mayhem"),new e("https://homestuck.com/","/images/misc_buttons/HomestuckButton.gif","Read Homestuck"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif","Read ACDSStuck!"),new e("https://acdsstuck.neocities.org/","https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif","Read ACDSStuck! Feat. Izzy Pendles")];let m=r,u=!1;function d(M){M.target&&(M.target.checked?(i(0,m=n),i(1,u=!0)):(i(0,m=r),i(1,u=!1)),i(0,m))}return fe(()=>{var v;let M=document.getElementById("nullring");M.innerHTML="";let p=document.createElement("script");p.src="https://nuthead.neocities.org/ring/ring.js",(v=document.getElementById("nullring"))==null||v.appendChild(p),p.onload=()=>{document.dispatchEvent(new Event("DOMContentLoaded"))}}),[m,u,d]}class Te extends ie{constructor(t){super(),oe(this,t,Ee,ze,ne,{})}}function He(o){let t,i,e,r,n,m,u,d,M,p,v;n=new ke({});const F=o[1].default,g=ve(F,o,o[0],null);return d=new Te({}),p=new Ce({}),{c(){t=y("link"),i=y("meta"),e=y("meta"),r=B(),Z(n.$$.fragment),m=B(),g&&g.c(),u=B(),Z(d.$$.fragment),M=B(),Z(p.$$.fragment),this.h()},l(s){const h=ye("svelte-74jp8c",document.head);t=k(h,"LINK",{href:!0,rel:!0,type:!0,media:!0}),i=k(h,"META",{name:!0,content:!0}),e=k(h,"META",{name:!0,content:!0}),h.forEach(f),r=D(s),ee(n.$$.fragment,s),m=D(s),g&&g.l(s),u=D(s),ee(d.$$.fragment,s),M=D(s),ee(p.$$.fragment,s),this.h()},h(){document.title="Home of Cold Calzones",a(t,"href","/main.css"),a(t,"rel","stylesheet"),a(t,"type","text/css"),a(t,"media","all"),a(i,"name","description"),a(i,"content","A website full of stuff made by a person"),a(e,"name","author"),a(e,"content","Cold Calzone")},m(s,h){_(document.head,t),_(document.head,i),_(document.head,e),$(s,r,h),te(n,s,h),$(s,m,h),g&&g.m(s,h),$(s,u,h),te(d,s,h),$(s,M,h),te(p,s,h),v=!0},p(s,[h]){g&&g.p&&(!v||h&1)&&_e(g,F,s,s[0],v?be(F,s[0],h,null):we(s[0]),null)},i(s){v||(X(n.$$.fragment,s),X(g,s),X(d.$$.fragment,s),X(p.$$.fragment,s),v=!0)},o(s){Y(n.$$.fragment,s),Y(g,s),Y(d.$$.fragment,s),Y(p.$$.fragment,s),v=!1},d(s){s&&(f(r),f(m),f(u),f(M)),f(t),f(i),f(e),se(n,s),g&&g.d(s),se(d,s),se(p,s)}}}function Ie(o,t,i){let{$$slots:e={},$$scope:r}=t;return o.$$set=n=>{"$$scope"in n&&i(0,r=n.$$scope)},[r,e]}class Re extends ie{constructor(t){super(),oe(this,t,Ie,He,ne,{})}}export{Re as component};
