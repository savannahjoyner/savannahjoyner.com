import{S as s,i as a,s as e,e as l,a as t,c as r,f as c,b as o,d as n,h,l as i,k as f,n as d,t as v,g as p,j as u,w as g}from"./client.d76e0f05.js";function m(s,a,e){const l=s.slice();return l[3]=a[e],l}function E(s){let a,e,v,p;return{c(){a=l("a"),e=l("img"),p=t(),this.h()},l(s){a=r(s,"A",{href:!0,target:!0,class:!0});var l=c(a);e=r(l,"IMG",{src:!0,alt:!0,class:!0}),p=o(l),l.forEach(n),this.h()},h(){e.src!==(v=s[3].IMAGE)&&h(e,"src",v),h(e,"alt","Social media"),h(e,"class","svelte-1r30prj"),h(a,"href",s[3].URL),h(a,"target"," _blank "),h(a,"class","svelte-1r30prj")},m(s,l){i(s,a,l),f(a,e),f(a,p)},p:d,d(s){s&&n(a)}}}function j(s){let a,e,j,D,I,b,k,A,S,G,R,w=s[0],y=[];for(let a=0;a<w.length;a+=1)y[a]=E(m(s,w,a));return{c(){a=l("section"),e=l("div"),j=l("div");for(let s=0;s<y.length;s+=1)y[s].c();D=t(),I=l("a"),b=l("h3"),k=v("Download Resume"),A=t(),S=l("a"),G=l("h3"),R=v("Github Repo"),this.h()},l(s){a=r(s,"SECTION",{id:!0,class:!0,style:!0});var l=c(a);e=r(l,"DIV",{class:!0});var t=c(e);j=r(t,"DIV",{class:!0});var h=c(j);for(let s=0;s<y.length;s+=1)y[s].l(h);h.forEach(n),D=o(t),I=r(t,"A",{class:!0,href:!0,download:!0});var i=c(I);b=r(i,"H3",{class:!0});var f=c(b);k=p(f,"Download Resume"),f.forEach(n),i.forEach(n),A=o(t),S=r(t,"A",{class:!0,href:!0});var d=c(S);G=r(d,"H3",{class:!0});var v=c(G);R=p(v,"Github Repo"),v.forEach(n),d.forEach(n),t.forEach(n),l.forEach(n),this.h()},h(){h(j,"class","social-icons section-body svelte-1r30prj"),h(b,"class","link svelte-1r30prj"),h(I,"class","link svelte-1r30prj"),h(I,"href","SavannahJoyner_Resume.pdf"),h(I,"download",""),h(G,"class","link svelte-1r30prj"),h(S,"class","link svelte-1r30prj"),h(S,"href","https://github.com/savannahjoyner/savannahjoyner.com"),h(e,"class","container text-center"),h(a,"id","social-media"),h(a,"class","section"),u(a,"background-color","#B3DADC"),u(a,"margin-top","100px")},m(s,l){i(s,a,l),f(a,e),f(e,j);for(let s=0;s<y.length;s+=1)y[s].m(j,null);f(e,D),f(e,I),f(I,b),f(b,k),f(e,A),f(e,S),f(S,G),f(G,R)},p(s,[a]){if(1&a){let e;for(w=s[0],e=0;e<w.length;e+=1){const l=m(s,w,e);y[e]?y[e].p(l,a):(y[e]=E(l),y[e].c(),y[e].m(j,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=w.length}},i:d,o:d,d(s){s&&n(a),g(y,s)}}}function D(s,a,e){let{socialData:l={}}=a;const{IMAGES_LIST:t,HEADING:r}=l;return s.$$set=s=>{"socialData"in s&&e(1,l=s.socialData)},[t,l]}class I extends s{constructor(s){super(),a(this,s,D,j,e,{socialData:1})}}export{I as S};
