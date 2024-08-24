import{s as gt,n as F,h as Ht}from"../chunks/scheduler.DqiQiJ2X.js";import{S as xt,i as bt,e as m,c as h,b as at,d as i,f as nt,l as o,k as x,A as Lt,s as p,n as W,g as _,a as d,o as Y,j as Ct,p as J,t as X,m as K,q as Q}from"../chunks/index.BpK8XguF.js";import{B as it}from"../chunks/Box.Bhw8lZVz.js";import{e as $t}from"../chunks/each.D6YF6ztN.js";import{B as Mt}from"../chunks/Blog.rpTSmXEW.js";function vt(C,t,a){const s=C.slice();return s[1]=t[a],s}function _t(C){let t,a;return{c(){t=m("img"),this.h()},l(s){t=h(s,"IMG",{src:!0,class:!0}),this.h()},h(){Ht(t.src,a=C[1])||nt(t,"src",a),nt(t,"class","svelte-1tb1ilq")},m(s,l){o(s,t,l)},p:F,d(s){s&&i(t)}}}function Tt(C){let t,a,s=$t(C[0]),l=[];for(let r=0;r<s.length;r+=1)l[r]=_t(vt(C,s,r));return{c(){t=m("div"),a=m("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=h(r,"DIV",{class:!0});var n=at(t);a=h(n,"DIV",{class:!0});var u=at(a);for(let v=0;v<l.length;v+=1)l[v].l(u);u.forEach(i),n.forEach(i),this.h()},h(){nt(a,"class","buttons svelte-1tb1ilq"),nt(t,"class","buttonsContainer svelte-1tb1ilq")},m(r,n){o(r,t,n),x(t,a);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(a,null)},p(r,[n]){if(n&1){s=$t(r[0]);let u;for(u=0;u<s.length;u+=1){const v=vt(r,s,u);l[u]?l[u].p(v,n):(l[u]=_t(v),l[u].c(),l[u].m(a,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=s.length}},i:F,o:F,d(r){r&&i(t),Lt(l,r)}}}function wt(C){return[["/images/misc_buttons/tyg.gif","/images/misc_buttons/nonbinary.png","/images/misc_buttons/portal1.png","/images/misc_buttons/transnow2.gif","/images/misc_buttons/queercoded.png","/images/misc_buttons/badapple.gif","/images/misc_buttons/krusie.png","/images/misc_buttons/firefox.gif","/images/misc_buttons/portal2.png","/images/misc_buttons/lagtrain.gif"]]}class kt extends xt{constructor(t){super(),bt(this,t,wt,Tt,gt,{})}}function It(C){let t,a='I make games at <a href="https://coldcalzone.itch.io">my Itch!</a>',s,l,r='More secretive is my <a href="/art/">art</a>, which I don&#39;t post elsewhere!';return{c(){t=m("p"),t.innerHTML=a,s=p(),l=m("p"),l.innerHTML=r},l(n){t=h(n,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1k6u65k"&&(t.innerHTML=a),s=d(n),l=h(n,"P",{"data-svelte-h":!0}),_(l)!=="svelte-z45b55"&&(l.innerHTML=r)},m(n,u){o(n,t,u),o(n,s,u),o(n,l,u)},p:F,d(n){n&&(i(t),i(s),i(l))}}}function yt(C){let t,a="I read things! Sometimes! Less than I'd like!",s,l,r='Here&#39;s a? <a href="/read/">Reading list?</a> It&#39;ll have stuff I&#39;ve read/wanna read.',n,u,v="Be warned, it's gonna be all compsci all the way down.";return{c(){t=m("p"),t.textContent=a,s=p(),l=m("p"),l.innerHTML=r,n=p(),u=m("p"),u.textContent=v},l($){t=h($,"P",{"data-svelte-h":!0}),_(t)!=="svelte-1nmmx10"&&(t.textContent=a),s=d($),l=h($,"P",{"data-svelte-h":!0}),_(l)!=="svelte-tsimv3"&&(l.innerHTML=r),n=d($),u=h($,"P",{"data-svelte-h":!0}),_(u)!=="svelte-xyxrdh"&&(u.textContent=v)},m($,q){o($,t,q),o($,s,q),o($,l,q),o($,n,q),o($,u,q)},p:F,d($){$&&(i(t),i(s),i(l),i(n),i(u))}}}function Et(C){let t,a='I use <a href="https://godotengine.org">Godot</a> to make my games, all of which have their source available on my github (see links)',s,l,r='Additionally, if you&#39;d like to see the code behind this site (There&#39;s a few moving parts, y&#39;know!) it&#39;s available <a href="https://github.com/ColdCalzone/neocities">here!</a>';return{c(){t=m("h4"),t.innerHTML=a,s=p(),l=m("h5"),l.innerHTML=r},l(n){t=h(n,"H4",{"data-svelte-h":!0}),_(t)!=="svelte-ocamaw"&&(t.innerHTML=a),s=d(n),l=h(n,"H5",{"data-svelte-h":!0}),_(l)!=="svelte-twc2vv"&&(l.innerHTML=r)},m(n,u){o(n,t,u),o(n,s,u),o(n,l,u)},p:F,d(n){n&&(i(t),i(s),i(l))}}}function At(C){let t,a="Changelog",s,l,r,n,u="8/24/24",v,$,q='<li>Added <a href="/listening/">a page for the music I&#39;m listening to</a>. There&#39;s still *so much* to add.</li>',Z,z,ot="7/21/24",I,D,B='<li>Added <a class="greensun svelte-a64jz0" href="/homestuck/greensuntext/">GREEN SUN</a> text generator</li> <li>Fixed navigation covering the home button</li>',tt,H,rt="4/13/24",k,L,ut='<li>Added rudimentary image functionality to blog posts</li> <li>Added the <a href="https://sporewhore.neocities.org/">sporewhore</a> button</li>',y,P,G="2/20/24",et,M,O="<li>Added a Homestuck button I made</li>",st,R,T="2/19/24",U,V,ft="<li>Added a toggle to the footer to show only the buttons I made.</li>",E,j,mt="2/18/24",lt,w,ht="<li>Made the colors variables. Now hs.css is cooler. :)</li>",A,S,c="2/12/24 - 2/17/24",b,g,N="<li>Split the blog into its own page (experimental)</li> <li>Made the site mobile compatible</li> <li>Added nullring</li> <li>Homestuck</li> <li>Rewrote site in Svelte</li>";return{c(){t=m("h3"),t.textContent=a,s=p(),l=m("hr"),r=p(),n=m("h4"),n.textContent=u,v=p(),$=m("ul"),$.innerHTML=q,Z=p(),z=m("h4"),z.textContent=ot,I=p(),D=m("ul"),D.innerHTML=B,tt=p(),H=m("h4"),H.textContent=rt,k=p(),L=m("ul"),L.innerHTML=ut,y=p(),P=m("h4"),P.textContent=G,et=p(),M=m("ul"),M.innerHTML=O,st=p(),R=m("h4"),R.textContent=T,U=p(),V=m("ul"),V.innerHTML=ft,E=p(),j=m("h4"),j.textContent=mt,lt=p(),w=m("ul"),w.innerHTML=ht,A=p(),S=m("h4"),S.textContent=c,b=p(),g=m("ul"),g.innerHTML=N},l(e){t=h(e,"H3",{"data-svelte-h":!0}),_(t)!=="svelte-riatt8"&&(t.textContent=a),s=d(e),l=h(e,"HR",{}),r=d(e),n=h(e,"H4",{"data-svelte-h":!0}),_(n)!=="svelte-111o054"&&(n.textContent=u),v=d(e),$=h(e,"UL",{"data-svelte-h":!0}),_($)!=="svelte-1hca4ki"&&($.innerHTML=q),Z=d(e),z=h(e,"H4",{"data-svelte-h":!0}),_(z)!=="svelte-229g10"&&(z.textContent=ot),I=d(e),D=h(e,"UL",{"data-svelte-h":!0}),_(D)!=="svelte-1ovnkyv"&&(D.innerHTML=B),tt=d(e),H=h(e,"H4",{"data-svelte-h":!0}),_(H)!=="svelte-xtrqea"&&(H.textContent=rt),k=d(e),L=h(e,"UL",{"data-svelte-h":!0}),_(L)!=="svelte-1tsaao7"&&(L.innerHTML=ut),y=d(e),P=h(e,"H4",{"data-svelte-h":!0}),_(P)!=="svelte-6buyim"&&(P.textContent=G),et=d(e),M=h(e,"UL",{"data-svelte-h":!0}),_(M)!=="svelte-j9la8d"&&(M.innerHTML=O),st=d(e),R=h(e,"H4",{"data-svelte-h":!0}),_(R)!=="svelte-sfut3q"&&(R.textContent=T),U=d(e),V=h(e,"UL",{"data-svelte-h":!0}),_(V)!=="svelte-1vt8xpj"&&(V.innerHTML=ft),E=d(e),j=h(e,"H4",{"data-svelte-h":!0}),_(j)!=="svelte-ps8z1p"&&(j.textContent=mt),lt=d(e),w=h(e,"UL",{"data-svelte-h":!0}),_(w)!=="svelte-17an929"&&(w.innerHTML=ht),A=d(e),S=h(e,"H4",{"data-svelte-h":!0}),_(S)!=="svelte-3znk6g"&&(S.textContent=c),b=d(e),g=h(e,"UL",{"data-svelte-h":!0}),_(g)!=="svelte-v53uxs"&&(g.innerHTML=N)},m(e,f){o(e,t,f),o(e,s,f),o(e,l,f),o(e,r,f),o(e,n,f),o(e,v,f),o(e,$,f),o(e,Z,f),o(e,z,f),o(e,I,f),o(e,D,f),o(e,tt,f),o(e,H,f),o(e,k,f),o(e,L,f),o(e,y,f),o(e,P,f),o(e,et,f),o(e,M,f),o(e,st,f),o(e,R,f),o(e,U,f),o(e,V,f),o(e,E,f),o(e,j,f),o(e,lt,f),o(e,w,f),o(e,A,f),o(e,S,f),o(e,b,f),o(e,g,f)},p:F,d(e){e&&(i(t),i(s),i(l),i(r),i(n),i(v),i($),i(Z),i(z),i(I),i(D),i(tt),i(H),i(k),i(L),i(y),i(P),i(et),i(M),i(st),i(R),i(U),i(V),i(E),i(j),i(lt),i(w),i(A),i(S),i(b),i(g))}}}function St(C){let t,a="TODO",s,l,r,n,u="<li>Re-do the Homestuck essay. Preferably just make a new one so the old one can be deleted.</li> <li>Create a &quot;wiki&quot; for Homestuck theory stuff</li> <li>Think of stuff to put on the TODO list</li> <li>Work on ACDSstuck</li>";return{c(){t=m("h3"),t.textContent=a,s=p(),l=m("hr"),r=p(),n=m("ul"),n.innerHTML=u},l(v){t=h(v,"H3",{"data-svelte-h":!0}),_(t)!=="svelte-tc0vbw"&&(t.textContent=a),s=d(v),l=h(v,"HR",{}),r=d(v),n=h(v,"UL",{"data-svelte-h":!0}),_(n)!=="svelte-4rzsnj"&&(n.innerHTML=u)},m(v,$){o(v,t,$),o(v,s,$),o(v,l,$),o(v,r,$),o(v,n,$)},p:F,d(v){v&&(i(t),i(s),i(l),i(r),i(n))}}}function qt(C){let t,a="<li>I&#39;ve been programming for 11 years now (what the fuck)</li> <li>I&#39;ve been doing game development for 3 years</li> <hr/> <li>I&#39;m 17!!!</li> <li>any pronouns!!!!!</li> <li>My favorite language is Rust</li>";return{c(){t=m("ul"),t.innerHTML=a,this.h()},l(s){t=h(s,"UL",{style:!0,"data-svelte-h":!0}),_(t)!=="svelte-1lxh5fg"&&(t.innerHTML=a),this.h()},h(){Ct(t,"padding-left","10px")},m(s,l){o(s,t,l)},p:F,d(s){s&&i(t)}}}function zt(C){let t,a='Last Updated: <span id="lastupdate"></span>',s,l,r='You are visitor #<span id="hitcount"></span>';return{c(){t=m("p"),t.innerHTML=a,s=p(),l=m("p"),l.innerHTML=r},l(n){t=h(n,"P",{"data-svelte-h":!0}),_(t)!=="svelte-zup25j"&&(t.innerHTML=a),s=d(n),l=h(n,"P",{"data-svelte-h":!0}),_(l)!=="svelte-1os0de7"&&(l.innerHTML=r)},m(n,u){o(n,t,u),o(n,s,u),o(n,l,u)},p:F,d(n){n&&(i(t),i(s),i(l))}}}function Dt(C){let t,a,s,l="Welcome to my website!",r,n,u="I'm Cold! I'm a programmer, artist, and game developer.",v,$,q="This site contains my games, art, and whatever else I want to put on it.",Z,z,ot,I,D,B,tt,H,rt,k,L,ut,y,P,G,et,M,O,st='<h1>My Latest Game!</h1> <iframe src="https://itch.io/embed/1397309?bg_color=0d1120&amp;fg_color=cccccc&amp;link_color=f2843c&amp;border_color=bebebe" width="100%" height="200" frameborder="0"><a href="https://coldcalzone.itch.io/bread">Bread Bread Breadvolution: Extra Toasty by ColdCalzone</a></iframe>',R,T,U,V="About Me",ft,E,j,mt,lt,w,ht,A,S;return I=new it({props:{title:"I make things!",$$slots:{default:[It]},$$scope:{ctx:C}}}),B=new it({props:{title:"Reading?",$$slots:{default:[yt]},$$scope:{ctx:C}}}),H=new it({props:{title:"Open Source!",$$slots:{default:[Et]},$$scope:{ctx:C}}}),L=new it({props:{style:"flex: 1;",$$slots:{default:[At]},$$scope:{ctx:C}}}),y=new it({props:{style:"flex: 1;",$$slots:{default:[St]},$$scope:{ctx:C}}}),G=new Mt({props:{locked:"5"}}),E=new it({props:{$$slots:{default:[qt]},$$scope:{ctx:C}}}),w=new it({props:{$$slots:{default:[zt]},$$scope:{ctx:C}}}),A=new kt({}),{c(){t=m("div"),a=m("main"),s=m("h1"),s.textContent=l,r=p(),n=m("p"),n.textContent=u,v=p(),$=m("p"),$.textContent=q,Z=p(),z=m("hr"),ot=p(),W(I.$$.fragment),D=p(),W(B.$$.fragment),tt=p(),W(H.$$.fragment),rt=p(),k=m("div"),W(L.$$.fragment),ut=p(),W(y.$$.fragment),P=p(),W(G.$$.fragment),et=p(),M=m("aside"),O=m("div"),O.innerHTML=st,R=p(),T=m("div"),U=m("h2"),U.textContent=V,ft=p(),W(E.$$.fragment),j=p(),mt=m("hr"),lt=p(),W(w.$$.fragment),ht=p(),W(A.$$.fragment),this.h()},l(c){t=h(c,"DIV",{class:!0});var b=at(t);a=h(b,"MAIN",{});var g=at(a);s=h(g,"H1",{"data-svelte-h":!0}),_(s)!=="svelte-1fu2j6n"&&(s.textContent=l),r=d(g),n=h(g,"P",{"data-svelte-h":!0}),_(n)!=="svelte-c6m30"&&(n.textContent=u),v=d(g),$=h(g,"P",{"data-svelte-h":!0}),_($)!=="svelte-1u1re4x"&&($.textContent=q),Z=d(g),z=h(g,"HR",{}),ot=d(g),Y(I.$$.fragment,g),D=d(g),Y(B.$$.fragment,g),tt=d(g),Y(H.$$.fragment,g),rt=d(g),k=h(g,"DIV",{style:!0,class:!0});var N=at(k);Y(L.$$.fragment,N),ut=d(N),Y(y.$$.fragment,N),N.forEach(i),P=d(g),Y(G.$$.fragment,g),g.forEach(i),et=d(b),M=h(b,"ASIDE",{id:!0});var e=at(M);O=h(e,"DIV",{id:!0,"data-svelte-h":!0}),_(O)!=="svelte-1f4p0d2"&&(O.innerHTML=st),R=d(e),T=h(e,"DIV",{});var f=at(T);U=h(f,"H2",{"data-svelte-h":!0}),_(U)!=="svelte-1ttswb"&&(U.textContent=V),ft=d(f),Y(E.$$.fragment,f),j=d(f),mt=h(f,"HR",{}),lt=d(f),Y(w.$$.fragment,f),ht=d(f),Y(A.$$.fragment,f),f.forEach(i),e.forEach(i),b.forEach(i),this.h()},h(){Ct(k,"margin-top","10px"),nt(k,"class","changes-box svelte-a64jz0"),nt(O,"id","latestGame"),nt(M,"id","leftSidebar"),nt(t,"class","flex")},m(c,b){o(c,t,b),x(t,a),x(a,s),x(a,r),x(a,n),x(a,v),x(a,$),x(a,Z),x(a,z),x(a,ot),J(I,a,null),x(a,D),J(B,a,null),x(a,tt),J(H,a,null),x(a,rt),x(a,k),J(L,k,null),x(k,ut),J(y,k,null),x(a,P),J(G,a,null),x(t,et),x(t,M),x(M,O),x(M,R),x(M,T),x(T,U),x(T,ft),J(E,T,null),x(T,j),x(T,mt),x(T,lt),J(w,T,null),x(T,ht),J(A,T,null),S=!0},p(c,[b]){const g={};b&1&&(g.$$scope={dirty:b,ctx:c}),I.$set(g);const N={};b&1&&(N.$$scope={dirty:b,ctx:c}),B.$set(N);const e={};b&1&&(e.$$scope={dirty:b,ctx:c}),H.$set(e);const f={};b&1&&(f.$$scope={dirty:b,ctx:c}),L.$set(f);const pt={};b&1&&(pt.$$scope={dirty:b,ctx:c}),y.$set(pt);const dt={};b&1&&(dt.$$scope={dirty:b,ctx:c}),E.$set(dt);const ct={};b&1&&(ct.$$scope={dirty:b,ctx:c}),w.$set(ct)},i(c){S||(X(I.$$.fragment,c),X(B.$$.fragment,c),X(H.$$.fragment,c),X(L.$$.fragment,c),X(y.$$.fragment,c),X(G.$$.fragment,c),X(E.$$.fragment,c),X(w.$$.fragment,c),X(A.$$.fragment,c),S=!0)},o(c){K(I.$$.fragment,c),K(B.$$.fragment,c),K(H.$$.fragment,c),K(L.$$.fragment,c),K(y.$$.fragment,c),K(G.$$.fragment,c),K(E.$$.fragment,c),K(w.$$.fragment,c),K(A.$$.fragment,c),S=!1},d(c){c&&i(t),Q(I),Q(B),Q(H),Q(L),Q(y),Q(G),Q(E),Q(w),Q(A)}}}function Bt(C){{let t=new XMLHttpRequest;t.onreadystatechange=function(){if(this.readyState==4&&this.status==200){let a=JSON.parse(this.responseText),s=a.info.views.toString().split(""),l="";for(let r=0;r<s.length;r++){l+=s[r],(s.length-1-r)%3==0&&s.length-1-r!=0&&(l+=","),a.info.last_updated;let n=new Date(a.info.last_updated);document.getElementById("lastupdate").innerHTML=n.getMonth()+1+"-"+n.getDate()+"-"+n.getFullYear()}document.getElementById("hitcount").innerHTML=l}},t.open("GET","https://weirdscifi.ratiosemper.com/neocities.php?sitename=deep-freezer",!0),t.send()}return[]}class Ot extends xt{constructor(t){super(),bt(this,t,Bt,Dt,gt,{})}}export{Ot as component};
