import{i as o,b as p,d as a,f as m}from"./scheduler.DqiQiJ2X.js";import{r as v,m as g,u as x,t as w}from"./index.BpK8XguF.js";function j(e,t){const h=t.token={};function c(r,s,d,k){if(t.token!==h)return;t.resolved=k;let l=t.ctx;d!==void 0&&(l=l.slice(),l[d]=k);const u=r&&(t.current=r)(l);let b=!1;t.block&&(t.blocks?t.blocks.forEach((n,_)=>{_!==s&&n&&(v(),g(n,1,1,()=>{t.blocks[_]===n&&(t.blocks[_]=null)}),x())}):t.block.d(1),u.c(),w(u,1),u.m(t.mount(),t.anchor),b=!0),t.block=u,t.blocks&&(t.blocks[s]=u),b&&m()}if(o(e)){const r=p();if(e.then(s=>{a(r),c(t.then,1,t.value,s),a(null)},s=>{if(a(r),c(t.catch,2,t.error,s),a(null),!t.hasCatch)throw s}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function q(e,t,h){const c=t.slice(),{resolved:r}=e;e.current===e.then&&(c[e.value]=r),e.current===e.catch&&(c[e.error]=r),e.block.p(c,h)}export{j as h,q as u};
