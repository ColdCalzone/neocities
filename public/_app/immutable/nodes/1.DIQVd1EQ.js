import{s as x,n as _,e as S}from"../chunks/scheduler.DqiQiJ2X.js";import{S as k,i as q,e as d,v as f,s as w,c as g,b as h,w as v,d as l,a as y,l as m,k as $,x as E}from"../chunks/index.CFf8myiu.js";import{s as C}from"../chunks/entry.oWiMDFWW.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=d("h1"),o=f(r),n=w(),i=d("p"),u=f(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(l),n=y(e),i=g(e,"P",{});var p=h(i);u=v(p,c),p.forEach(l)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:_,o:_,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return S(s,P,n=>r(0,o=n)),[o]}let F=class extends k{constructor(t){super(),q(this,t,z,j,x,{})}};export{F as component};
