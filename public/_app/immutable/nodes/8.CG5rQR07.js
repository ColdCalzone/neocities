import{s as Lt,n as F,h as kt}from"../chunks/scheduler.DqiQiJ2X.js";import{S as Mt,i as Tt,e as f,c as m,b as ht,d as i,f as ot,l as a,k as g,A as yt,s as h,n as W,g as $,a as p,o as Y,j as wt,p as J,t as X,m as K,q as Q}from"../chunks/index.CCwE3_LK.js";import{B as mt}from"../chunks/Box.EXzZb2Un.js";import{e as Ct}from"../chunks/each.D6YF6ztN.js";import{B as It}from"../chunks/Blog.CEGdu2LS.js";function bt(C,t,o){const s=C.slice();return s[1]=t[o],s}function Ht(C){let t,o;return{c(){t=f("img"),this.h()},l(s){t=m(s,"IMG",{src:!0,class:!0}),this.h()},h(){kt(t.src,o=C[1])||ot(t,"src",o),ot(t,"class","svelte-1tb1ilq")},m(s,l){a(s,t,l)},p:F,d(s){s&&i(t)}}}function zt(C){let t,o,s=Ct(C[0]),l=[];for(let r=0;r<s.length;r+=1)l[r]=Ht(bt(C,s,r));return{c(){t=f("div"),o=f("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=m(r,"DIV",{class:!0});var n=ht(t);o=m(n,"DIV",{class:!0});var u=ht(o);for(let _=0;_<l.length;_+=1)l[_].l(u);u.forEach(i),n.forEach(i),this.h()},h(){ot(o,"class","buttons svelte-1tb1ilq"),ot(t,"class","buttonsContainer svelte-1tb1ilq")},m(r,n){a(r,t,n),g(t,o);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(o,null)},p(r,[n]){if(n&1){s=Ct(r[0]);let u;for(u=0;u<s.length;u+=1){const _=bt(r,s,u);l[u]?l[u].p(_,n):(l[u]=Ht(_),l[u].c(),l[u].m(o,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=s.length}},i:F,o:F,d(r){r&&i(t),yt(l,r)}}}function At(C){return[["/images/misc_buttons/tyg.gif","/images/misc_buttons/nonbinary.png","/images/misc_buttons/portal1.png","/images/misc_buttons/transnow2.gif","/images/misc_buttons/queercoded.png","/images/misc_buttons/badapple.gif","/images/misc_buttons/krusie.png","/images/misc_buttons/firefox.gif","/images/misc_buttons/portal2.png","/images/misc_buttons/lagtrain.gif","/images/misc_buttons/i-was-on-cohost.gif"]]}class Et extends Mt{constructor(t){super(),Tt(this,t,At,zt,Lt,{})}}function St(C){let t,o='I make games at <a href="https://coldcalzone.itch.io">my Itch!</a>',s,l,r='More secretive is my <a href="/art/">art</a>, which I don&#39;t post elsewhere!';return{c(){t=f("p"),t.innerHTML=o,s=h(),l=f("p"),l.innerHTML=r},l(n){t=m(n,"P",{"data-svelte-h":!0}),$(t)!=="svelte-1k6u65k"&&(t.innerHTML=o),s=p(n),l=m(n,"P",{"data-svelte-h":!0}),$(l)!=="svelte-z45b55"&&(l.innerHTML=r)},m(n,u){a(n,t,u),a(n,s,u),a(n,l,u)},p:F,d(n){n&&(i(t),i(s),i(l))}}}function qt(C){let t,o="I read things! Sometimes! Less than I'd like!",s,l,r='Here&#39;s a? <a href="/read/">Reading list?</a> It&#39;ll have stuff I&#39;ve read/wanna read.',n,u,_="Be warned, it's gonna be all compsci all the way down.";return{c(){t=f("p"),t.textContent=o,s=h(),l=f("p"),l.innerHTML=r,n=h(),u=f("p"),u.textContent=_},l(v){t=m(v,"P",{"data-svelte-h":!0}),$(t)!=="svelte-1nmmx10"&&(t.textContent=o),s=p(v),l=m(v,"P",{"data-svelte-h":!0}),$(l)!=="svelte-tsimv3"&&(l.innerHTML=r),n=p(v),u=m(v,"P",{"data-svelte-h":!0}),$(u)!=="svelte-xyxrdh"&&(u.textContent=_)},m(v,D){a(v,t,D),a(v,s,D),a(v,l,D),a(v,n,D),a(v,u,D)},p:F,d(v){v&&(i(t),i(s),i(l),i(n),i(u))}}}function Dt(C){let t,o='I use <a href="https://godotengine.org">Godot</a> to make my games, all of which have their source available on my github (see links)',s,l,r='Additionally, if you&#39;d like to see the code behind this site (There&#39;s a few moving parts, y&#39;know!) it&#39;s available <a href="https://github.com/ColdCalzone/neocities">here!</a>';return{c(){t=f("h4"),t.innerHTML=o,s=h(),l=f("h5"),l.innerHTML=r},l(n){t=m(n,"H4",{"data-svelte-h":!0}),$(t)!=="svelte-ocamaw"&&(t.innerHTML=o),s=p(n),l=m(n,"H5",{"data-svelte-h":!0}),$(l)!=="svelte-twc2vv"&&(l.innerHTML=r)},m(n,u){a(n,t,u),a(n,s,u),a(n,l,u)},p:F,d(n){n&&(i(t),i(s),i(l))}}}function Pt(C){let t,o="Changelog",s,l,r,n,u="12/27/24",_,v,D="<li>Patched my age.</li> <li>Changed displayed art.</li> <li>Added some more music.</li>",Z,tt,et,M,pt="8/24/24",A,P,R='<li>Added <a href="/listening/">a page for the music I&#39;m listening to</a>. There&#39;s still *so much* to add.</li>',lt,L,U="7/21/24",nt,T,dt='<li>Added <a class="greensun svelte-a64jz0" href="/homestuck/greensuntext/">GREEN SUN</a> text generator</li> <li>Fixed navigation covering the home button</li>',E,B,j="4/13/24",S,V,ct='<li>Added rudimentary image functionality to blog posts</li> <li>Added the <a href="https://sporewhore.neocities.org/">sporewhore</a> button</li>',H,z,$t="2/20/24",it,w,vt="<li>Added a Homestuck button I made</li>",st,G,O="2/19/24",at,y,rt="<li>Added a toggle to the footer to show only the buttons I made.</li>",d,x,b="2/18/24",q,I,k="<li>Made the colors variables. Now hs.css is cooler. :)</li>",ut,N,_t="2/12/24 - 2/17/24",xt,ft,gt="<li>Split the blog into its own page (experimental)</li> <li>Made the site mobile compatible</li> <li>Added nullring</li> <li>Homestuck</li> <li>Rewrote site in Svelte</li>";return{c(){t=f("h3"),t.textContent=o,s=h(),l=f("hr"),r=h(),n=f("h4"),n.textContent=u,_=h(),v=f("ul"),v.innerHTML=D,Z=h(),tt=f("hr"),et=h(),M=f("h4"),M.textContent=pt,A=h(),P=f("ul"),P.innerHTML=R,lt=h(),L=f("h4"),L.textContent=U,nt=h(),T=f("ul"),T.innerHTML=dt,E=h(),B=f("h4"),B.textContent=j,S=h(),V=f("ul"),V.innerHTML=ct,H=h(),z=f("h4"),z.textContent=$t,it=h(),w=f("ul"),w.innerHTML=vt,st=h(),G=f("h4"),G.textContent=O,at=h(),y=f("ul"),y.innerHTML=rt,d=h(),x=f("h4"),x.textContent=b,q=h(),I=f("ul"),I.innerHTML=k,ut=h(),N=f("h4"),N.textContent=_t,xt=h(),ft=f("ul"),ft.innerHTML=gt},l(e){t=m(e,"H3",{"data-svelte-h":!0}),$(t)!=="svelte-riatt8"&&(t.textContent=o),s=p(e),l=m(e,"HR",{}),r=p(e),n=m(e,"H4",{"data-svelte-h":!0}),$(n)!=="svelte-1in7pio"&&(n.textContent=u),_=p(e),v=m(e,"UL",{"data-svelte-h":!0}),$(v)!=="svelte-zv480x"&&(v.innerHTML=D),Z=p(e),tt=m(e,"HR",{}),et=p(e),M=m(e,"H4",{"data-svelte-h":!0}),$(M)!=="svelte-111o054"&&(M.textContent=pt),A=p(e),P=m(e,"UL",{"data-svelte-h":!0}),$(P)!=="svelte-1hca4ki"&&(P.innerHTML=R),lt=p(e),L=m(e,"H4",{"data-svelte-h":!0}),$(L)!=="svelte-229g10"&&(L.textContent=U),nt=p(e),T=m(e,"UL",{"data-svelte-h":!0}),$(T)!=="svelte-1ovnkyv"&&(T.innerHTML=dt),E=p(e),B=m(e,"H4",{"data-svelte-h":!0}),$(B)!=="svelte-xtrqea"&&(B.textContent=j),S=p(e),V=m(e,"UL",{"data-svelte-h":!0}),$(V)!=="svelte-1tsaao7"&&(V.innerHTML=ct),H=p(e),z=m(e,"H4",{"data-svelte-h":!0}),$(z)!=="svelte-6buyim"&&(z.textContent=$t),it=p(e),w=m(e,"UL",{"data-svelte-h":!0}),$(w)!=="svelte-j9la8d"&&(w.innerHTML=vt),st=p(e),G=m(e,"H4",{"data-svelte-h":!0}),$(G)!=="svelte-sfut3q"&&(G.textContent=O),at=p(e),y=m(e,"UL",{"data-svelte-h":!0}),$(y)!=="svelte-1vt8xpj"&&(y.innerHTML=rt),d=p(e),x=m(e,"H4",{"data-svelte-h":!0}),$(x)!=="svelte-ps8z1p"&&(x.textContent=b),q=p(e),I=m(e,"UL",{"data-svelte-h":!0}),$(I)!=="svelte-17an929"&&(I.innerHTML=k),ut=p(e),N=m(e,"H4",{"data-svelte-h":!0}),$(N)!=="svelte-3znk6g"&&(N.textContent=_t),xt=p(e),ft=m(e,"UL",{"data-svelte-h":!0}),$(ft)!=="svelte-v53uxs"&&(ft.innerHTML=gt)},m(e,c){a(e,t,c),a(e,s,c),a(e,l,c),a(e,r,c),a(e,n,c),a(e,_,c),a(e,v,c),a(e,Z,c),a(e,tt,c),a(e,et,c),a(e,M,c),a(e,A,c),a(e,P,c),a(e,lt,c),a(e,L,c),a(e,nt,c),a(e,T,c),a(e,E,c),a(e,B,c),a(e,S,c),a(e,V,c),a(e,H,c),a(e,z,c),a(e,it,c),a(e,w,c),a(e,st,c),a(e,G,c),a(e,at,c),a(e,y,c),a(e,d,c),a(e,x,c),a(e,q,c),a(e,I,c),a(e,ut,c),a(e,N,c),a(e,xt,c),a(e,ft,c)},p:F,d(e){e&&(i(t),i(s),i(l),i(r),i(n),i(_),i(v),i(Z),i(tt),i(et),i(M),i(A),i(P),i(lt),i(L),i(nt),i(T),i(E),i(B),i(S),i(V),i(H),i(z),i(it),i(w),i(st),i(G),i(at),i(y),i(d),i(x),i(q),i(I),i(ut),i(N),i(xt),i(ft))}}}function Rt(C){let t,o="TODO",s,l,r,n,u="<li>Re-do the Homestuck essay. Preferably just make a new one so the old one can be deleted.</li> <li>Create a &quot;wiki&quot; for Homestuck theory stuff</li> <li>Think of stuff to put on the TODO list</li> <li>Work on ACDSstuck</li>";return{c(){t=f("h3"),t.textContent=o,s=h(),l=f("hr"),r=h(),n=f("ul"),n.innerHTML=u},l(_){t=m(_,"H3",{"data-svelte-h":!0}),$(t)!=="svelte-tc0vbw"&&(t.textContent=o),s=p(_),l=m(_,"HR",{}),r=p(_),n=m(_,"UL",{"data-svelte-h":!0}),$(n)!=="svelte-4rzsnj"&&(n.innerHTML=u)},m(_,v){a(_,t,v),a(_,s,v),a(_,l,v),a(_,r,v),a(_,n,v)},p:F,d(_){_&&(i(t),i(s),i(l),i(r),i(n))}}}function Ut(C){let t,o="<li>I&#39;ve been programming for 12 years now (what the fuck)</li> <li>I&#39;ve been doing game development for 3 years</li> <hr/> <li>I&#39;m 18!!!</li> <li>any pronouns</li> <li>My favorite language is Rust</li>";return{c(){t=f("ul"),t.innerHTML=o,this.h()},l(s){t=m(s,"UL",{style:!0,"data-svelte-h":!0}),$(t)!=="svelte-1l760zv"&&(t.innerHTML=o),this.h()},h(){wt(t,"padding-left","10px")},m(s,l){a(s,t,l)},p:F,d(s){s&&i(t)}}}function Bt(C){let t,o='Last Updated: <span id="lastupdate"></span>',s,l,r='You are visitor #<span id="hitcount"></span>';return{c(){t=f("p"),t.innerHTML=o,s=h(),l=f("p"),l.innerHTML=r},l(n){t=m(n,"P",{"data-svelte-h":!0}),$(t)!=="svelte-zup25j"&&(t.innerHTML=o),s=p(n),l=m(n,"P",{"data-svelte-h":!0}),$(l)!=="svelte-1os0de7"&&(l.innerHTML=r)},m(n,u){a(n,t,u),a(n,s,u),a(n,l,u)},p:F,d(n){n&&(i(t),i(s),i(l))}}}function jt(C){let t,o,s,l="Welcome to my website!",r,n,u="I'm Cold! I'm a programmer, artist, and game developer.",_,v,D="This site contains my games, art, and whatever else I want to put on it.",Z,tt,et,M,pt,A,P,R,lt,L,U,nt,T,dt,E,B,j,S,V='<h1>My Latest Game!</h1> <iframe src="https://itch.io/embed/1397309?bg_color=0d1120&amp;fg_color=cccccc&amp;link_color=f2843c&amp;border_color=bebebe" width="100%" height="200" frameborder="0"><a href="https://coldcalzone.itch.io/bread">Bread Bread Breadvolution: Extra Toasty by ColdCalzone</a></iframe>',ct,H,z,$t="About Me",it,w,vt,st,G,O,at,y,rt;return M=new mt({props:{title:"I make things!",$$slots:{default:[St]},$$scope:{ctx:C}}}),A=new mt({props:{title:"Reading?",$$slots:{default:[qt]},$$scope:{ctx:C}}}),R=new mt({props:{title:"Open Source!",$$slots:{default:[Dt]},$$scope:{ctx:C}}}),U=new mt({props:{style:"flex: 1;",$$slots:{default:[Pt]},$$scope:{ctx:C}}}),T=new mt({props:{style:"flex: 1;",$$slots:{default:[Rt]},$$scope:{ctx:C}}}),E=new It({props:{locked:"5"}}),w=new mt({props:{$$slots:{default:[Ut]},$$scope:{ctx:C}}}),O=new mt({props:{$$slots:{default:[Bt]},$$scope:{ctx:C}}}),y=new Et({}),{c(){t=f("div"),o=f("main"),s=f("h1"),s.textContent=l,r=h(),n=f("p"),n.textContent=u,_=h(),v=f("p"),v.textContent=D,Z=h(),tt=f("hr"),et=h(),W(M.$$.fragment),pt=h(),W(A.$$.fragment),P=h(),W(R.$$.fragment),lt=h(),L=f("div"),W(U.$$.fragment),nt=h(),W(T.$$.fragment),dt=h(),W(E.$$.fragment),B=h(),j=f("aside"),S=f("div"),S.innerHTML=V,ct=h(),H=f("div"),z=f("h2"),z.textContent=$t,it=h(),W(w.$$.fragment),vt=h(),st=f("hr"),G=h(),W(O.$$.fragment),at=h(),W(y.$$.fragment),this.h()},l(d){t=m(d,"DIV",{class:!0});var x=ht(t);o=m(x,"MAIN",{});var b=ht(o);s=m(b,"H1",{"data-svelte-h":!0}),$(s)!=="svelte-1fu2j6n"&&(s.textContent=l),r=p(b),n=m(b,"P",{"data-svelte-h":!0}),$(n)!=="svelte-c6m30"&&(n.textContent=u),_=p(b),v=m(b,"P",{"data-svelte-h":!0}),$(v)!=="svelte-1u1re4x"&&(v.textContent=D),Z=p(b),tt=m(b,"HR",{}),et=p(b),Y(M.$$.fragment,b),pt=p(b),Y(A.$$.fragment,b),P=p(b),Y(R.$$.fragment,b),lt=p(b),L=m(b,"DIV",{style:!0,class:!0});var q=ht(L);Y(U.$$.fragment,q),nt=p(q),Y(T.$$.fragment,q),q.forEach(i),dt=p(b),Y(E.$$.fragment,b),b.forEach(i),B=p(x),j=m(x,"ASIDE",{id:!0});var I=ht(j);S=m(I,"DIV",{id:!0,"data-svelte-h":!0}),$(S)!=="svelte-1f4p0d2"&&(S.innerHTML=V),ct=p(I),H=m(I,"DIV",{});var k=ht(H);z=m(k,"H2",{"data-svelte-h":!0}),$(z)!=="svelte-1ttswb"&&(z.textContent=$t),it=p(k),Y(w.$$.fragment,k),vt=p(k),st=m(k,"HR",{}),G=p(k),Y(O.$$.fragment,k),at=p(k),Y(y.$$.fragment,k),k.forEach(i),I.forEach(i),x.forEach(i),this.h()},h(){wt(L,"margin-top","10px"),ot(L,"class","changes-box svelte-a64jz0"),ot(S,"id","latestGame"),ot(j,"id","leftSidebar"),ot(t,"class","flex")},m(d,x){a(d,t,x),g(t,o),g(o,s),g(o,r),g(o,n),g(o,_),g(o,v),g(o,Z),g(o,tt),g(o,et),J(M,o,null),g(o,pt),J(A,o,null),g(o,P),J(R,o,null),g(o,lt),g(o,L),J(U,L,null),g(L,nt),J(T,L,null),g(o,dt),J(E,o,null),g(t,B),g(t,j),g(j,S),g(j,ct),g(j,H),g(H,z),g(H,it),J(w,H,null),g(H,vt),g(H,st),g(H,G),J(O,H,null),g(H,at),J(y,H,null),rt=!0},p(d,[x]){const b={};x&1&&(b.$$scope={dirty:x,ctx:d}),M.$set(b);const q={};x&1&&(q.$$scope={dirty:x,ctx:d}),A.$set(q);const I={};x&1&&(I.$$scope={dirty:x,ctx:d}),R.$set(I);const k={};x&1&&(k.$$scope={dirty:x,ctx:d}),U.$set(k);const ut={};x&1&&(ut.$$scope={dirty:x,ctx:d}),T.$set(ut);const N={};x&1&&(N.$$scope={dirty:x,ctx:d}),w.$set(N);const _t={};x&1&&(_t.$$scope={dirty:x,ctx:d}),O.$set(_t)},i(d){rt||(X(M.$$.fragment,d),X(A.$$.fragment,d),X(R.$$.fragment,d),X(U.$$.fragment,d),X(T.$$.fragment,d),X(E.$$.fragment,d),X(w.$$.fragment,d),X(O.$$.fragment,d),X(y.$$.fragment,d),rt=!0)},o(d){K(M.$$.fragment,d),K(A.$$.fragment,d),K(R.$$.fragment,d),K(U.$$.fragment,d),K(T.$$.fragment,d),K(E.$$.fragment,d),K(w.$$.fragment,d),K(O.$$.fragment,d),K(y.$$.fragment,d),rt=!1},d(d){d&&i(t),Q(M),Q(A),Q(R),Q(U),Q(T),Q(E),Q(w),Q(O),Q(y)}}}function Gt(C){{let t=new XMLHttpRequest;t.onreadystatechange=function(){if(this.readyState==4&&this.status==200){let o=JSON.parse(this.responseText),s=o.info.views.toString().split(""),l="";for(let r=0;r<s.length;r++){l+=s[r],(s.length-1-r)%3==0&&s.length-1-r!=0&&(l+=","),o.info.last_updated;let n=new Date(o.info.last_updated);document.getElementById("lastupdate").innerHTML=n.getMonth()+1+"-"+n.getDate()+"-"+n.getFullYear()}document.getElementById("hitcount").innerHTML=l}},t.open("GET","https://weirdscifi.ratiosemper.com/neocities.php?sitename=deep-freezer",!0),t.send()}return[]}class Yt extends Mt{constructor(t){super(),Tt(this,t,Gt,jt,Lt,{})}}export{Yt as component};