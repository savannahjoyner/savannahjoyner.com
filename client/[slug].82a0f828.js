import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,b as c,c as l,f as h,g as u,h as f,l as m,k as d,C as p,n as b}from"./client.c41bbd3b.js";function v(t){let s,a,v,g,j,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),g=o(E),j=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),v=l(t,"H1",{});var s=h(v);g=u(s,E),s.forEach(r),j=c(t),x=l(t,"DIV",{class:!0}),h(x).forEach(r),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,v,s),d(v,g),m(t,j,s),m(t,x,s),x.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&p(g,E),1&a&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:b,o:b,d(t){t&&r(a),t&&r(v),t&&r(j),t&&r(x)}}}async function g({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,v,a,{post:0})}}export{g as preload};