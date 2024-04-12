var me=Object.defineProperty;var ve=(n,e,i)=>e in n?me(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var U=(n,e,i)=>(ve(n,typeof e!="symbol"?e+"":e,i),i);import{s as _e,n as T,r as Z,o as ye,h as X}from"../chunks/scheduler.BDXRdsok.js";import{S as ge,i as we,e as h,s as H,c as m,l as L,a as j,d as c,p as q,b as a,u as D,g as w,f as y,y as B,A as ke,H as F,B as K,z as te}from"../chunks/index.BZDGbRj9.js";import{h as be,u as Ie}from"../chunks/await_block.B5fEFvxi.js";import{e as ie}from"../chunks/each.D6YF6ztN.js";class Le{constructor(e,i){U(this,"x");U(this,"y");this.x=e,this.y=i}}class xe{constructor(e,i){U(this,"pos");U(this,"size");this.pos=e,this.size=i}static fromCoordinates(e,i,r,t){return new this({x:e,y:i},{w:r,h:t})}pointWithinBounds(e){return this.pos.x<e.x&&this.pos.x+this.size.w>e.x&&this.pos.y<e.y&&this.pos.y+this.size.h>e.y}}class ce{constructor(e,i,r,t,o,l,s,d){U(this,"rect");U(this,"sprite");U(this,"name");U(this,"description");U(this,"count");this.rect=xe.fromCoordinates(e,i,r,t),this.sprite=o,this.name=l,this.description=s,this.count=d}}class de{constructor(){U(this,"inventory");U(this,"equipment");U(this,"mode");this.inventory=[],this.equipment=[],this.mode="inventory"}}{var fe=fetch("/shopfalls/items.json").then(n=>n.json()).then(n=>n),pe=new Image(400,252);pe.src="/shopfalls/Inventory1.png";var ue=new Image(400,252);ue.src="/shopfalls/Inventory2.png"}async function Me(n,e){e.inventory===void 0&&(e.inventory=new de);const i=32,r=29,t=6;let o=0,l=await fe;for(let s in n){let d=o%t,u=Math.floor(o/t),_=new Image(i,r);_.onload=()=>{Y(e.inventory.inventory)},_.src=l[s].sprite;let f=new ce(d*i+3,u*r+4,i,r,_,l[s].name,l[s].description,n[s]);e.inventory.inventory.push(f),o++}Y(e.inventory.inventory)}async function Re(n,e){e.inventory||(e.inventory=new de);const i=32,r=29;let t=await fe,o={head:[34,8],left_arm:[22,46],right_arm:[136,46]};for(let l in n){if(n[l]===void 0||!("sprite"in t[n[l]]))continue;let s=o[l][0],d=o[l][1],u=new Image(i,r);u.src=t[n[l]].sprite;let _=new ce(s,d,i,r,u,t[n[l]].name,t[n[l]].description,void 0);e.inventory.equipment.push(_)}}function Y(n){let r=document.getElementById("inventoryGrid"),t=r.getContext("2d");t.clearRect(0,0,r.width,r.height),t.drawImage(pe,0,0);for(let o of n){let l=o.sprite,s=o.rect.pos.x,d=o.rect.pos.y;t.drawImage(l,s,d);let u=o.count;u==null&&(u=1),t.fillStyle="#ffffff",t.direction="rtl",t.font="Pixellari",t.fillText("x"+u,s+32,d+29)}}function ne(n){let e=document.getElementById("inventoryGrid"),i=e.getContext("2d");i.clearRect(0,0,e.width,e.height),i.drawImage(ue,0,0);for(let r of n){let t=r.sprite,o=r.rect.pos.x,l=r.rect.pos.y;i.drawImage(t,o,l)}}function Ce(n,e){if(console.log("displaying tooltip!"),e.inventory===void 0)return;let i=e.inventory.mode=="inventory"?e.inventory.inventory:e.inventory.equipment;console.log(i);for(let r of i)if(console.log(r.rect),r.rect.pointWithinBounds(n)){e.tooltipName=r.name,e.tooltipDescription=r.description;return}e.tooltipName=void 0,e.tooltipDescription=void 0}let Ae=new AbortController;function Ee(n,e){let i=[];Array.isArray(n)?i=n:i=[n];for(let r of i){let[t,o,l,s,d]=Pe(r);e.panelMode.push(t),e.panels.push(o)}}function Pe(n){const e=/(?:\.([^.]+))?$/;let i="image",r,t,o,l;return typeof n=="string"?(r=n,e.exec(n)[1]=="mp4"?i="video":n.startsWith("http")&&(i="embed")):(r=n.source,n.mode&&(i=n.mode),t=n.width,o=n.height,l=n.loadscreen),[i,r,t,o,l]}async function Q(n){window.scrollTo(0,0);let i=new URL(document.URL).searchParams.get("page");i===null&&(i="0");let r=parseInt(i);return fetch("story/"+r+".json").then(t=>t.json()).then(t=>(Te(r),De(t,n))).catch(t=>(console.error(t),window.location.replace("/shopfalls/not_found.html"),n))}function he(n){Ae.abort(),n.panelMode=[],n.panels=[],n.call=void 0,n.response=void 0,n.inventory=void 0,n.tooltipName=void 0,n.tooltipDescription=void 0;for(let e of document.getElementsByClassName("temp-style"))e.remove();for(let e of document.getElementsByClassName("temp-script"))e.remove()}async function W(n,e){let i=new URL(document.URL);return i.searchParams.set("page",String(n)+(n==69?"_hahanice":"")),history.pushState({},"",i),he(e),await Q(e)}function Te(n){document.getElementById("nextPage"),new URL(document.URL),fetch("story/"+(n+1)+".json").then(e=>e.json()).then(e=>{}).catch(e=>{console.error(e)})}function De(n,e){const i={call:r=>{e.call=r},panel:Ee,response:r=>{e.response=r},inventory:Me,equipment:Re};for(let r in n){if(!(r in i))continue;let t=n[r];i[r](t,e)}return e}function re(n,e,i){const r=n.slice();return r[11]=e[i],r[13]=i,r}function oe(n){let e,i,r,t,o=n[0].call+"";return{c(){e=h("main"),i=h("div"),r=h("strong"),t=new F(!1),this.h()},l(l){e=m(l,"MAIN",{id:!0,style:!0});var s=L(e);i=m(s,"DIV",{class:!0});var d=L(i);r=m(d,"STRONG",{});var u=L(r);t=K(u,!1),u.forEach(c),d.forEach(c),s.forEach(c),this.h()},h(){t.a=null,a(i,"class","centered"),a(e,"id","call"),D(e,"margin-bottom","2px"),D(e,"padding-top","2px")},m(l,s){w(l,e,s),y(e,i),y(i,r),t.m(o,r)},p(l,s){s&1&&o!==(o=l[0].call+"")&&t.p(o)},d(l){l&&c(e)}}}function Ne(n){return{c:T,l:T,m:T,p:T,d:T}}function He(n){let e,i,r,t,o,l,s,d,u;function _(...f){return n[6](n[13],...f)}return{c(){e=h("div"),i=h("video"),t=H(),o=h("div"),l=H(),s=h("div"),this.h()},l(f){e=m(f,"DIV",{"data-panel-type":!0});var v=L(e);i=m(v,"VIDEO",{width:!0,preload:!0,src:!0}),L(i).forEach(c),v.forEach(c),t=j(f),o=m(f,"DIV",{style:!0,class:!0}),L(o).forEach(c),l=j(f),s=m(f,"DIV",{class:!0,style:!0}),L(s).forEach(c),this.h()},h(){i.autoplay=!0,a(i,"width","100%"),a(i,"preload","auto"),X(i.src,r=n[11])||a(i,"src",r),a(e,"data-panel-type","video"),D(o,"background-color","#696969"),D(o,"bottom","5px"),a(o,"class","videoProgress"),a(s,"class","videoProgress"),D(s,"width",n[1][n[13]]+"%")},m(f,v){w(f,e,v),y(e,i),w(f,t,v),w(f,o,v),w(f,l,v),w(f,s,v),d||(u=B(i,"timeupdate",_),d=!0)},p(f,v){n=f,v&1&&!X(i.src,r=n[11])&&a(i,"src",r),v&2&&D(s,"width",n[1][n[13]]+"%")},d(f){f&&(c(e),c(t),c(o),c(l),c(s)),d=!1,u()}}}function je(n){let e,i;return{c(){e=h("img"),this.h()},l(r){e=m(r,"IMG",{width:!0,"data-panel-type":!0,src:!0}),this.h()},h(){a(e,"width","100%"),a(e,"data-panel-type","image"),X(e.src,i=n[11])||a(e,"src",i)},m(r,t){w(r,e,t)},p(r,t){t&1&&!X(e.src,i=r[11])&&a(e,"src",i)},d(r){r&&c(e)}}}function le(n){let e;function i(o,l){if(o[0].panelMode[o[13]]="image")return je;if(o[0].panelMode[o[13]]="video")return He;if(o[0].panelMode[o[13]]="embed")return Ne}let r=i(n),t=r&&r(n);return{c(){t&&t.c(),e=te()},l(o){t&&t.l(o),e=te()},m(o,l){t&&t.m(o,l),w(o,e,l)},p(o,l){r===(r=i(o))&&t?t.p(o,l):(t&&t.d(1),t=r&&r(o),t&&(t.c(),t.m(e.parentNode,e)))},d(o){o&&c(e),t&&t.d(o)}}}function se(n){let e,i,r,t=n[0].response+"";return{c(){e=h("main"),i=h("div"),r=new F(!1),this.h()},l(o){e=m(o,"MAIN",{id:!0,style:!0});var l=L(e);i=m(l,"DIV",{class:!0});var s=L(i);r=K(s,!1),s.forEach(c),l.forEach(c),this.h()},h(){r.a=null,a(i,"class","centered"),a(e,"id","response"),D(e,"padding","10px")},m(o,l){w(o,e,l),y(e,i),r.m(t,i)},p(o,l){l&1&&t!==(t=o[0].response+"")&&r.p(t)},d(o){o&&c(e)}}}function Ue(n){return{c:T,l:T,m:T,p:T,d:T}}function ze(n){let e,i='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRight.png" width="7%"/>',r,t,o='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRightRight.png" width="7%"/>',l,s;function d(){return n[8](n[10])}function u(){return n[9](n[10])}return{c(){e=h("a"),e.innerHTML=i,r=H(),t=h("a"),t.innerHTML=o,this.h()},l(_){e=m(_,"A",{id:!0,href:!0,"data-svelte-h":!0}),q(e)!=="svelte-c4qr3z"&&(e.innerHTML=i),r=j(_),t=m(_,"A",{id:!0,href:!0,"data-svelte-h":!0}),q(t)!=="svelte-brxfse"&&(t.innerHTML=o),this.h()},h(){a(e,"id","NextPage"),a(e,"href","javascript:void(0);"),a(t,"id","LastPage"),a(t,"href","javascript:void(0);")},m(_,f){w(_,e,f),w(_,r,f),w(_,t,f),l||(s=[B(e,"click",d),B(t,"click",u)],l=!0)},p(_,f){n=_},d(_){_&&(c(e),c(r),c(t)),l=!1,Z(s)}}}function Ve(n){let e,i='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRight.png" width="7%"/>',r,t,o='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRightRight.png" width="7%"/>';return{c(){e=h("a"),e.innerHTML=i,r=H(),t=h("a"),t.innerHTML=o,this.h()},l(l){e=m(l,"A",{id:!0,href:!0,"data-svelte-h":!0}),q(e)!=="svelte-19rm0tr"&&(e.innerHTML=i),r=j(l),t=m(l,"A",{id:!0,href:!0,"data-svelte-h":!0}),q(t)!=="svelte-nteu9r"&&(t.innerHTML=o),this.h()},h(){a(e,"id","NextPage"),a(e,"href","javascript:void(0);"),a(t,"id","LastPage"),a(t,"href","javascript:void(0);")},m(l,s){w(l,e,s),w(l,r,s),w(l,t,s)},p:T,d(l){l&&(c(e),c(r),c(t))}}}function ae(n){let e,i,r="The inventory display relies on canvas rendering, sorry.",t,o,l,s,d,u,_;function f(k,P){return k[0].tooltipName?qe:Se}let v=f(n),p=v(n);function g(k,P){return k[0].tooltipDescription?Be:Ge}let x=g(n),N=x(n);return{c(){e=h("div"),i=h("canvas"),i.textContent=r,t=H(),o=h("main"),p.c(),l=H(),s=h("hr"),d=H(),N.c(),this.h()},l(k){e=m(k,"DIV",{id:!0,style:!0});var P=L(e);i=m(P,"CANVAS",{id:!0,width:!0,height:!0,"data-svelte-h":!0}),q(i)!=="svelte-19jpf7"&&(i.textContent=r),t=j(P),o=m(P,"MAIN",{id:!0,style:!0});var V=L(o);p.l(V),l=j(V),s=m(V,"HR",{}),d=j(V),N.l(V),V.forEach(c),P.forEach(c),this.h()},h(){a(i,"id","inventoryGrid"),a(i,"width","200"),a(i,"height","126"),a(o,"id","description"),D(o,"float","right"),D(o,"width","425px"),D(o,"max-width","450px"),a(e,"id","inventory"),D(e,"display","inline-block"),D(e,"width","100%")},m(k,P){w(k,e,P),y(e,i),y(e,t),y(e,o),p.m(o,null),y(o,l),y(o,s),y(o,d),N.m(o,null),u||(_=[B(i,"mousemove",n[4]),B(i,"click",n[5])],u=!0)},p(k,P){v===(v=f(k))&&p?p.p(k,P):(p.d(1),p=v(k),p&&(p.c(),p.m(o,l))),x===(x=g(k))&&N?N.p(k,P):(N.d(1),N=x(k),N&&(N.c(),N.m(o,null)))},d(k){k&&c(e),p.d(),N.d(),u=!1,Z(_)}}}function qe(n){let e,i,r,t=n[0].tooltipName+"";return{c(){e=h("h2"),i=h("strong"),r=new F(!1),this.h()},l(o){e=m(o,"H2",{id:!0});var l=L(e);i=m(l,"STRONG",{});var s=L(i);r=K(s,!1),s.forEach(c),l.forEach(c),this.h()},h(){r.a=null,a(e,"id","descriptionName")},m(o,l){w(o,e,l),y(e,i),r.m(t,i)},p(o,l){l&1&&t!==(t=o[0].tooltipName+"")&&r.p(t)},d(o){o&&c(e)}}}function Se(n){let e,i="Item";return{c(){e=h("h2"),e.textContent=i,this.h()},l(r){e=m(r,"H2",{id:!0,"data-svelte-h":!0}),q(e)!=="svelte-1vexjfw"&&(e.textContent=i),this.h()},h(){a(e,"id","descriptionName")},m(r,t){w(r,e,t)},p:T,d(r){r&&c(e)}}}function Be(n){let e,i,r=n[0].tooltipDescription+"";return{c(){e=h("p"),i=new F(!1),this.h()},l(t){e=m(t,"P",{id:!0,style:!0});var o=L(e);i=K(o,!1),o.forEach(c),this.h()},h(){i.a=null,a(e,"id","descriptionDescription"),D(e,"color","white")},m(t,o){w(t,e,o),i.m(r,e)},p(t,o){o&1&&r!==(r=t[0].tooltipDescription+"")&&i.p(r)},d(t){t&&c(e)}}}function Ge(n){let e,i="Item descriptions will appear here.";return{c(){e=h("p"),e.textContent=i,this.h()},l(r){e=m(r,"P",{id:!0,style:!0,"data-svelte-h":!0}),q(e)!=="svelte-14qrb3k"&&(e.textContent=i),this.h()},h(){a(e,"id","descriptionDescription"),D(e,"color","white")},m(r,t){w(r,e,t)},p:T,d(r){r&&c(e)}}}function Oe(n){let e,i,r,t,o,l,s,d,u,_='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowLeftLeft.png" width="7%"/>',f,v,p='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowLeft.png" width="7%"/>',g,x,N='<img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/Return.png" width="7%"/>',k,P,V,$,C=n[0].call!==void 0&&oe(n),G=ie(n[0].panels),M=[];for(let R=0;R<G.length;R+=1)M[R]=le(re(n,G,R));let A=n[0].response!==void 0&&se(n),z={ctx:n,current:null,token:null,hasCatch:!1,pending:Ve,then:ze,catch:Ue,value:10};be(fetch("/shopfalls/shopfalls.json").then(We).then(Xe).catch(Ye),z);let E=n[0].inventory!==void 0&&ae(n);return{c(){e=h("div"),C&&C.c(),i=H(),r=h("div"),t=h("main");for(let R=0;R<M.length;R+=1)M[R].c();o=H(),A&&A.c(),l=H(),s=h("div"),d=h("div"),u=h("a"),u.innerHTML=_,f=H(),v=h("a"),v.innerHTML=p,g=H(),x=h("a"),x.innerHTML=N,k=H(),z.block.c(),P=H(),E&&E.c(),this.h()},l(R){e=m(R,"DIV",{id:!0});var I=L(e);C&&C.l(I),i=j(I),r=m(I,"DIV",{class:!0});var b=L(r);t=m(b,"MAIN",{id:!0});var O=L(t);for(let J=0;J<M.length;J+=1)M[J].l(O);O.forEach(c),b.forEach(c),o=j(I),A&&A.l(I),l=j(I),s=m(I,"DIV",{id:!0,style:!0});var ee=L(s);d=m(ee,"DIV",{class:!0});var S=L(d);u=m(S,"A",{href:!0,"data-svelte-h":!0}),q(u)!=="svelte-1yv11jj"&&(u.innerHTML=_),f=j(S),v=m(S,"A",{id:!0,href:!0,"data-svelte-h":!0}),q(v)!=="svelte-l8qh9f"&&(v.innerHTML=p),g=j(S),x=m(S,"A",{href:!0,"data-svelte-h":!0}),q(x)!=="svelte-ix519k"&&(x.innerHTML=N),k=j(S),z.block.l(S),S.forEach(c),ee.forEach(c),P=j(I),E&&E.l(I),I.forEach(c),this.h()},h(){a(t,"id","panel"),a(r,"class","flex"),a(u,"href","javascript:void(0);"),a(v,"id","PrevPage"),a(v,"href","javascript:void(0);"),a(x,"href","/"),a(d,"class","centered"),a(s,"id","navi"),D(s,"padding","10px"),a(e,"id","container")},m(R,I){w(R,e,I),C&&C.m(e,null),y(e,i),y(e,r),y(r,t);for(let b=0;b<M.length;b+=1)M[b]&&M[b].m(t,null);y(e,o),A&&A.m(e,null),y(e,l),y(e,s),y(s,d),y(d,u),y(d,f),y(d,v),y(d,g),y(d,x),y(d,k),z.block.m(d,z.anchor=null),z.mount=()=>d,z.anchor=null,y(e,P),E&&E.m(e,null),V||($=[B(u,"click",n[7]),B(v,"click",n[2])],V=!0)},p(R,[I]){if(n=R,n[0].call!==void 0?C?C.p(n,I):(C=oe(n),C.c(),C.m(e,i)):C&&(C.d(1),C=null),I&3){G=ie(n[0].panels);let b;for(b=0;b<G.length;b+=1){const O=re(n,G,b);M[b]?M[b].p(O,I):(M[b]=le(O),M[b].c(),M[b].m(t,null))}for(;b<M.length;b+=1)M[b].d(1);M.length=G.length}n[0].response!==void 0?A?A.p(n,I):(A=se(n),A.c(),A.m(e,l)):A&&(A.d(1),A=null),Ie(z,n,I),n[0].inventory!==void 0?E?E.p(n,I):(E=ae(n),E.c(),E.m(e,null)):E&&(E.d(1),E=null)},i:T,o:T,d(R){R&&c(e),C&&C.d(),ke(M,R),A&&A.d(),z.block.d(),z.token=null,z=null,E&&E.d(),V=!1,Z($)}}}const We=n=>n.json(),Xe=n=>n.last,Ye=()=>0;function Fe(n,e,i){let r=[],t={panelMode:[],panels:[],call:void 0,response:void 0,inventory:void 0,tooltipName:void 0,tooltipDescription:void 0};async function o(){let g=new URL(document.URL).searchParams.get("page");g||(g="0"),g&&await W(parseInt(g)-1,t),i(0,t)}async function l(){let g=new URL(document.URL).searchParams.get("page");g||(g="0"),g&&await W(parseInt(g)+1,t),i(0,t)}function s(p){t.inventory.mode=="inventory"?Y(t.inventory.inventory):t.inventory.mode=="equipment"&&ne(t.inventory.equipment),console.log(p.offsetX),console.log(p.offsetY),Ce(new Le(p.offsetX,p.offsetY),t),i(0,t)}function d(){t.inventory.mode=="equipment"?(i(0,t.inventory.mode="inventory",t),Y(t.inventory.inventory)):(i(0,t.inventory.mode="equipment",t),ne(t.inventory.equipment)),i(0,t)}ye(()=>{window.onpopstate=()=>{he(t),Q(t),i(0,t)},window.onkeyup=p=>{p.altKey||(p.key=="ArrowRight"?l():p.key=="ArrowLeft"&&o())},(async()=>(i(0,t=await Q(t)),i(0,t)))()});const u=(p,g)=>{i(1,r[p]=String(g.currentTarget.currentTime/g.currentTarget.duration*100),r),i(1,r)},_=async p=>{p.preventDefault(),await W(0,t),i(0,t)},f=p=>{let x=new URL(document.URL).searchParams.get("page");x||(x="0"),parseInt(x)<=p&&l()},v=async p=>{new URL(document.URL).searchParams.get("page")&&await W(parseInt(p),t),i(0,t)};return n.$$.update=()=>{n.$$.dirty&1&&(console.log(`Updated state: ${t.call}`),console.log(t))},[t,r,o,l,s,d,u,_,f,v]}class et extends ge{constructor(e){super(),we(this,e,Fe,Oe,_e,{})}}export{et as component};
