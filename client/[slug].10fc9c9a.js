import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,b as c,c as l,f as h,g as u,h as f,k as m,j as p,C as d,n as v}from"./client.f422fc8f.js";function g(t){let s,a,g,j,x,E,H=t[0].title+"",$=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(H),x=e(),E=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,H),s.forEach(r),x=c(t),E=l(t,"DIV",{class:!0}),h(E).forEach(r),this.h()},h(){f(E,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,g,s),p(g,j),m(t,x,s),m(t,E,s),E.innerHTML=$},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&d(j,H),1&a&&$!==($=t[0].html+"")&&(E.innerHTML=$)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(x),t&&r(E)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{j as preload};
