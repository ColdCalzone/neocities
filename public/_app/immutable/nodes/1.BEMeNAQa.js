import{s as x,n as _,e as S}from"../chunks/scheduler.DqiQiJ2X.js";import{S as q,i as w,e as f,v as d,s as y,c as g,l as h,w as v,d as l,a as C,g as m,f as $,x as E}from"../chunks/index.CR_WoLMa.js";import{s as H}from"../chunks/entry.Cz6G0eq3.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),o=d(r),n=y(),i=f("p"),u=d(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(l),n=C(e),i=g(e,"P",{});var p=h(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:_,o:_,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return S(s,j,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),w(this,t,z,k,x,{})}};export{F as component};
