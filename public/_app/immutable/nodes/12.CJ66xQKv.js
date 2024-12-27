import{s as lt,c as ut,h as st,u as ht,g as mt,a as dt,n as F}from"../chunks/scheduler.DqiQiJ2X.js";import{S as it,i as ot,n as V,o as j,p as A,t as P,m as q,q as B,e as m,s as y,r as rt,c as d,b as H,a as C,u as ft,d as u,f as w,j as S,l as $,k as h,v as ct,g as I}from"../chunks/index.CCwE3_LK.js";import{B as pt}from"../chunks/Box.EXzZb2Un.js";function at(i){let t,n,e;return{c(){t=m("div"),n=m("a"),e=rt(i[4]),this.h()},l(s){t=d(s,"DIV",{class:!0});var l=H(t);n=d(l,"A",{href:!0,class:!0});var a=H(n);e=ft(a,i[4]),a.forEach(u),l.forEach(u),this.h()},h(){w(n,"href",i[3]),w(n,"class","svelte-3zznvc"),w(t,"class","svelte-3zznvc")},m(s,l){$(s,t,l),h(t,n),h(n,e)},p(s,l){l&16&&ct(e,s[4]),l&8&&w(n,"href",s[3])},d(s){s&&u(t)}}}function _t(i){let t,n,e,s,l,a,f,E,L,_,o,x,g=i[3]!=null&&at(i);const T=i[5].default,k=ut(T,i,i[6],null);return{c(){t=m("div"),n=m("img"),s=y(),l=m("div"),a=m("div"),f=m("a"),E=rt(i[2]),L=y(),g&&g.c(),_=y(),o=m("div"),k&&k.c(),this.h()},l(c){t=d(c,"DIV",{class:!0,style:!0});var v=H(t);n=d(v,"IMG",{src:!0,class:!0}),s=C(v),l=d(v,"DIV",{class:!0,style:!0});var z=H(l);a=d(z,"DIV",{class:!0});var G=H(a);f=d(G,"A",{href:!0,class:!0});var M=H(f);E=ft(M,i[2]),M.forEach(u),G.forEach(u),L=C(z),g&&g.l(z),z.forEach(u),_=C(v),o=d(v,"DIV",{class:!0,style:!0});var J=H(o);k&&k.l(J),J.forEach(u),v.forEach(u),this.h()},h(){st(n.src,e=i[0])||w(n,"src",e),w(n,"class","svelte-3zznvc"),w(f,"href",i[1]),w(f,"class","svelte-3zznvc"),w(a,"class","svelte-3zznvc"),w(l,"class","flex svelte-3zznvc"),S(l,"flex","1"),S(l,"flex-direction","column"),S(l,"padding","0 5%"),S(l,"justify-content","space-around"),w(o,"class","flex svelte-3zznvc"),S(o,"flex","2"),S(o,"flex-direction","column"),S(o,"margin","auto"),w(t,"class","flex svelte-3zznvc"),S(t,"flex","1"),S(t,"flex-direction","row"),S(t,"text-align","center"),S(t,"vertical-align","middle")},m(c,v){$(c,t,v),h(t,n),h(t,s),h(t,l),h(l,a),h(a,f),h(f,E),h(l,L),g&&g.m(l,null),h(t,_),h(t,o),k&&k.m(o,null),x=!0},p(c,v){(!x||v&1&&!st(n.src,e=c[0]))&&w(n,"src",e),(!x||v&4)&&ct(E,c[2]),(!x||v&2)&&w(f,"href",c[1]),c[3]!=null?g?g.p(c,v):(g=at(c),g.c(),g.m(l,null)):g&&(g.d(1),g=null),k&&k.p&&(!x||v&64)&&ht(k,T,c,c[6],x?dt(T,c[6],v,null):mt(c[6]),null)},i(c){x||(P(k,c),x=!0)},o(c){q(k,c),x=!1},d(c){c&&u(t),g&&g.d(),k&&k.d(c)}}}function gt(i){let t,n;return t=new pt({props:{style:"flex: 1 1 700px; margin: 0; vertical-align: middle;",$$slots:{default:[_t]},$$scope:{ctx:i}}}),{c(){V(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,[s]){const l={};s&95&&(l.$$scope={dirty:s,ctx:e}),t.$set(l)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function vt(i,t,n){let{$$slots:e={},$$scope:s}=t,{cover:l}=t,{link_a:a}=t,{text_a:f}=t,{link_b:E}=t,{text_b:L}=t;return i.$$set=_=>{"cover"in _&&n(0,l=_.cover),"link_a"in _&&n(1,a=_.link_a),"text_a"in _&&n(2,f=_.text_a),"link_b"in _&&n(3,E=_.link_b),"text_b"in _&&n(4,L=_.text_b),"$$scope"in _&&n(6,s=_.$$scope)},[l,a,f,E,L,e,s]}class X extends it{constructor(t){super(),ot(this,t,vt,gt,lt,{cover:0,link_a:1,text_a:2,link_b:3,text_b:4})}}function bt(i){let t,n="CW: Cannibalism",e,s,l="This one got me through the latter half of senior year. I love just about everything in this track, from the growly and noisy synth to the knife foley, but <i>god</i> the violin at ~0:38 hits.";return{c(){t=m("i"),t.textContent=n,e=y(),s=m("p"),s.innerHTML=l},l(a){t=d(a,"I",{"data-svelte-h":!0}),I(t)!=="svelte-1em4tgf"&&(t.textContent=n),e=C(a),s=d(a,"P",{"data-svelte-h":!0}),I(s)!=="svelte-xcdlmq"&&(s.innerHTML=l)},m(a,f){$(a,t,f),$(a,e,f),$(a,s,f)},p:F,d(a){a&&(u(t),u(e),u(s))}}}function $t(i){let t,n="CW: Gore",e,s,l='Though I&#39;ve yet to fully penetrate the meaning of this one, I appreciate the running theme of <a href="https://www.youtube.com/watch?v=nrsr_-QXCv4">unhealthy relationships between art and the artist</a>. Perhaps there&#39;s something to be said about <i>pouring your heart out</i> with this one.';return{c(){t=m("i"),t.textContent=n,e=y(),s=m("p"),s.innerHTML=l},l(a){t=d(a,"I",{"data-svelte-h":!0}),I(t)!=="svelte-gkimq5"&&(t.textContent=n),e=C(a),s=d(a,"P",{"data-svelte-h":!0}),I(s)!=="svelte-7vzl8j"&&(s.innerHTML=l)},m(a,f){$(a,t,f),$(a,e,f),$(a,s,f)},p:F,d(a){a&&(u(t),u(e),u(s))}}}function xt(i){let t,n="Another I haven&#39;t quite breached the themes of, other than probably being about the constant stream of information available via the internet?<br/><br/>I&#39;ve linked the official English cover in the YouTube slot, I just really like it.";return{c(){t=m("p"),t.innerHTML=n},l(e){t=d(e,"P",{"data-svelte-h":!0}),I(t)!=="svelte-1fbnz8p"&&(t.innerHTML=n)},m(e,s){$(e,t,s)},p:F,d(e){e&&u(t)}}}function wt(i){let t,n="I don't really have anything to say about this one. It kinda just bangs.";return{c(){t=m("p"),t.textContent=n},l(e){t=d(e,"P",{"data-svelte-h":!0}),I(t)!=="svelte-1r20c5u"&&(t.textContent=n)},m(e,s){$(e,t,s)},p:F,d(e){e&&u(t)}}}function kt(i){let t,n="CW: Gore",e,s,l="I'd put some analysis here but the themes of this song are so clear I literally could not convey it more efficiently than the song itself. Just listen to it.";return{c(){t=m("i"),t.textContent=n,e=y(),s=m("p"),s.textContent=l},l(a){t=d(a,"I",{"data-svelte-h":!0}),I(t)!=="svelte-gkimq5"&&(t.textContent=n),e=C(a),s=d(a,"P",{"data-svelte-h":!0}),I(s)!=="svelte-gd7vda"&&(s.textContent=l)},m(a,f){$(a,t,f),$(a,e,f),$(a,s,f)},p:F,d(a){a&&(u(t),u(e),u(s))}}}function yt(i){let t,n="Holy shit nothing notified me about this song. Probably because I didn&#39;t like their last song <i>at all</i> so the ~algorithm~ didn&#39;t bother, but this is so good.";return{c(){t=m("p"),t.innerHTML=n},l(e){t=d(e,"P",{"data-svelte-h":!0}),I(t)!=="svelte-1lj6ayk"&&(t.innerHTML=n)},m(e,s){$(e,t,s)},p:F,d(e){e&&u(t)}}}function Ct(i){let t,n=`@keyframes emphasis {
            0% {
              color: red;
              transform: translateX(8px);
            }
            33% {
              transform: translateY(5px);
            }
            25% {
              transform: translateX(-5px);
            }
            50% {
              color: white;
              transform: translateX(8px);
            }
            66% {
              transform: translateY(-5px);
            }
            75% {
              transform: translateX(-5px);
            }
            100% {
              color: red;
              transform: translateX(5px);
              transform: translateY(-2px);
            }
          }
          
          #usseewa {
            animation: 0.5s linear infinite emphasis;
          }`,e,s,l="USSEE USSEE USSEEWAA";return{c(){t=m("style"),t.textContent=n,e=y(),s=m("i"),s.textContent=l,this.h()},l(a){t=d(a,"STYLE",{"data-svelte-h":!0}),I(t)!=="svelte-107fqus"&&(t.textContent=n),e=C(a),s=d(a,"I",{id:!0,"data-svelte-h":!0}),I(s)!=="svelte-o60ex3"&&(s.textContent=l),this.h()},h(){w(s,"id","usseewa")},m(a,f){$(a,t,f),$(a,e,f),$(a,s,f)},p:F,d(a){a&&(u(t),u(e),u(s))}}}function It(i){let t,n="YouTube showed this to me like right when it came out and it had like 100 views. It's at 20k now and that's not nearly enough.";return{c(){t=m("p"),t.textContent=n},l(e){t=d(e,"P",{"data-svelte-h":!0}),I(t)!=="svelte-9s9qmm"&&(t.textContent=n)},m(e,s){$(e,t,s)},p:F,d(e){e&&u(t)}}}function zt(i){let t,n,e,s="Listening",l,a,f="I decided to share some of the music I'm listening to, in part since the design of this page struck me at 1 AM like a freight train and in part because, it'd be fun?",E,L,_,o,x,g,T,k,c,v,z,G,M,J,D,Q,U,Z,W,R;return x=new X({props:{cover:"https://i.scdn.co/image/ab67616d00001e02193ac4142fa040360d8efe64",link_a:"https://open.spotify.com/track/5w5wBkH4ana9waptVsxJCq",text_a:"Flavor Foley - Butcher Vanity (Spotify)",link_b:"https://www.youtube.com/watch?v=vjBFftpQxxM",text_b:"(YouTube)",$$slots:{default:[bt]},$$scope:{ctx:i}}}),T=new X({props:{cover:"/listening/Vermillion.png",link_a:"https://open.spotify.com/track/3CSIkb7MnhZ8UPvt3ZbGjn",text_a:"CircusP - Vermilion (Spotify)",link_b:"https://www.youtube.com/watch?v=wFLn_d51bNc",text_b:"(YouTube)",$$slots:{default:[$t]},$$scope:{ctx:i}}}),c=new X({props:{cover:"https://i.scdn.co/image/ab67616d00001e0221333eb66e3cf9f3818e789f",link_a:"https://open.spotify.com/track/5ic62hKqeDhZsa9l6YQxzJ",text_a:"32ki - Mesmerizer (Spotify)",link_b:"https://www.youtube.com/watch?v=2c9FqIF600A",text_b:"Will Stetson + rachie - Mesmerizer (English) (YouTube)",$$slots:{default:[xt]},$$scope:{ctx:i}}}),z=new X({props:{cover:"https://i.scdn.co/image/ab67616d00001e02b34e7e66410f3d933d5bcdbd",link_a:"https://open.spotify.com/track/26I5UfjfxqsUAB2Ryr4utP",text_a:"Giga - Beyond the Way (Spotify)",link_b:"https://www.youtube.com/watch?v=SJcgOWsDwi4",text_b:"(YouTube)",$$slots:{default:[wt]},$$scope:{ctx:i}}}),M=new X({props:{cover:"https://i.scdn.co/image/ab67616d00001e0202e855eb06ad7974eadfcf6e",link_a:"https://open.spotify.com/track/3WuBuCMPAJED2LRsSOG6wB",text_a:"Vane Lily - Six Feet Under (Spotify)",link_b:"https://www.youtube.com/watch?v=7gmGYDxlg20",text_b:"(YouTube)",$$slots:{default:[kt]},$$scope:{ctx:i}}}),D=new X({props:{cover:"https://i.scdn.co/image/ab67616d00001e02395fd6d515bb8dfae8f1e3d1",link_a:"https://open.spotify.com/track/2asWe7CTLmXiGRaWqHZ1rk",text_a:"Flavor Foley - weathergirl (Spotify)",link_b:"https://www.youtube.com/watch?v=M7VSEZOQIlg",text_b:"(YouTube)",$$slots:{default:[yt]},$$scope:{ctx:i}}}),U=new X({props:{cover:"https://i.scdn.co/image/ab67616d00001e0289e3b38cb86ef8cfb0cd8def",link_a:"https://open.spotify.com/track/61KYsWS25JXUO4fGb1138X",text_a:"Ado - Usseewa (Spotify)",link_b:"https://www.youtube.com/watch?v=Qp3b-RXtz4w",text_b:"(YouTube)",$$slots:{default:[Ct]},$$scope:{ctx:i}}}),W=new X({props:{cover:"/listening/badtaste.png",link_a:"https://www.youtube.com/watch?v=riaRzUVHEfU",text_a:"om - Bad Taste (YouTube)",$$slots:{default:[It]},$$scope:{ctx:i}}}),{c(){t=m("div"),n=m("main"),e=m("h1"),e.textContent=s,l=y(),a=m("p"),a.textContent=f,E=y(),L=m("hr"),_=y(),o=m("div"),V(x.$$.fragment),g=y(),V(T.$$.fragment),k=y(),V(c.$$.fragment),v=y(),V(z.$$.fragment),G=y(),V(M.$$.fragment),J=y(),V(D.$$.fragment),Q=y(),V(U.$$.fragment),Z=y(),V(W.$$.fragment),this.h()},l(r){t=d(r,"DIV",{class:!0});var p=H(t);n=d(p,"MAIN",{});var Y=H(n);e=d(Y,"H1",{"data-svelte-h":!0}),I(e)!=="svelte-sjt8e9"&&(e.textContent=s),l=C(Y),a=d(Y,"P",{"data-svelte-h":!0}),I(a)!=="svelte-1aagozj"&&(a.textContent=f),E=C(Y),L=d(Y,"HR",{}),_=C(Y),o=d(Y,"DIV",{id:!0,class:!0,style:!0});var b=H(o);j(x.$$.fragment,b),g=C(b),j(T.$$.fragment,b),k=C(b),j(c.$$.fragment,b),v=C(b),j(z.$$.fragment,b),G=C(b),j(M.$$.fragment,b),J=C(b),j(D.$$.fragment,b),Q=C(b),j(U.$$.fragment,b),Z=C(b),j(W.$$.fragment,b),b.forEach(u),Y.forEach(u),p.forEach(u),this.h()},h(){w(o,"id","listening-box-container"),w(o,"class","flex"),S(o,"flex-wrap","wrap"),S(o,"gap","5px"),w(t,"class","flex")},m(r,p){$(r,t,p),h(t,n),h(n,e),h(n,l),h(n,a),h(n,E),h(n,L),h(n,_),h(n,o),A(x,o,null),h(o,g),A(T,o,null),h(o,k),A(c,o,null),h(o,v),A(z,o,null),h(o,G),A(M,o,null),h(o,J),A(D,o,null),h(o,Q),A(U,o,null),h(o,Z),A(W,o,null),R=!0},p(r,[p]){const Y={};p&1&&(Y.$$scope={dirty:p,ctx:r}),x.$set(Y);const b={};p&1&&(b.$$scope={dirty:p,ctx:r}),T.$set(b);const O={};p&1&&(O.$$scope={dirty:p,ctx:r}),c.$set(O);const K={};p&1&&(K.$$scope={dirty:p,ctx:r}),z.$set(K);const N={};p&1&&(N.$$scope={dirty:p,ctx:r}),M.$set(N);const tt={};p&1&&(tt.$$scope={dirty:p,ctx:r}),D.$set(tt);const et={};p&1&&(et.$$scope={dirty:p,ctx:r}),U.$set(et);const nt={};p&1&&(nt.$$scope={dirty:p,ctx:r}),W.$set(nt)},i(r){R||(P(x.$$.fragment,r),P(T.$$.fragment,r),P(c.$$.fragment,r),P(z.$$.fragment,r),P(M.$$.fragment,r),P(D.$$.fragment,r),P(U.$$.fragment,r),P(W.$$.fragment,r),R=!0)},o(r){q(x.$$.fragment,r),q(T.$$.fragment,r),q(c.$$.fragment,r),q(z.$$.fragment,r),q(M.$$.fragment,r),q(D.$$.fragment,r),q(U.$$.fragment,r),q(W.$$.fragment,r),R=!1},d(r){r&&u(t),B(x),B(T),B(c),B(z),B(M),B(D),B(U),B(W)}}}class Mt extends it{constructor(t){super(),ot(this,t,null,zt,lt,{})}}export{Mt as component};
