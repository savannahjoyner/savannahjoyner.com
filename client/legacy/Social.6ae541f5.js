import{_ as a,a as t,b as n,c as r,i as s,s as c,d as o,S as e,e as l,f as i,g as f,k as u,j as h,h as v,m as d,p,o as g,r as m,t as D,l as E,n as y,x as R,B as j}from"./client.325c1b4b.js";function I(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,c=t(a);if(r){var o=t(this).constructor;s=Reflect.construct(c,arguments,o)}else s=c.apply(this,arguments);return n(this,s)}}function S(a,t,n){var r=a.slice();return r[3]=t[n],r}function b(a){var t,n,r,s;return{c:function(){t=l("a"),n=l("img"),s=i(),this.h()},l:function(a){t=f(a,"A",{href:!0,target:!0,class:!0});var r=u(t);n=f(r,"IMG",{src:!0,alt:!0,class:!0}),s=h(r),r.forEach(v),this.h()},h:function(){n.src!==(r=a[3].IMAGE)&&d(n,"src",r),d(n,"alt","Social media"),d(n,"class","svelte-1r30prj"),d(t,"href",a[3].URL),d(t,"target"," _blank "),d(t,"class","svelte-1r30prj")},m:function(a,r){p(a,t,r),g(t,n),g(t,s)},p:m,d:function(a){a&&v(t)}}}function A(a){for(var t,n,r,s,c,o,e,I,A,k,x=a[0],w=[],B=0;B<x.length;B+=1)w[B]=b(S(a,x,B));return{c:function(){t=l("section"),n=l("div"),r=l("h2"),s=D(a[1]),c=i(),o=l("div");for(var f=0;f<w.length;f+=1)w[f].c();e=i(),I=l("a"),A=l("h3"),k=D("Download Resume"),this.h()},l:function(l){t=f(l,"SECTION",{id:!0,class:!0,style:!0});var i=u(t);n=f(i,"DIV",{class:!0});var d=u(n);r=f(d,"H2",{class:!0});var p=u(r);s=E(p,a[1]),p.forEach(v),c=h(d),o=f(d,"DIV",{class:!0});for(var g=u(o),m=0;m<w.length;m+=1)w[m].l(g);g.forEach(v),e=h(d),I=f(d,"A",{class:!0,href:!0,download:!0});var D=u(I);A=f(D,"H3",{class:!0});var y=u(A);k=E(y,"Download Resume"),y.forEach(v),D.forEach(v),d.forEach(v),i.forEach(v),this.h()},h:function(){d(r,"class","heading svelte-1r30prj"),d(o,"class","social-icons section-body svelte-1r30prj"),d(A,"class","link svelte-1r30prj"),d(I,"class","link svelte-1r30prj"),d(I,"href","SavannahJoyner_Resume.pdf"),d(I,"download",""),d(n,"class","container text-center"),d(t,"id","social-media"),d(t,"class","section"),y(t,"background-color","#B3DADC"),y(t,"margin-top","100px")},m:function(a,l){p(a,t,l),g(t,n),g(n,r),g(r,s),g(n,c),g(n,o);for(var i=0;i<w.length;i+=1)w[i].m(o,null);g(n,e),g(n,I),g(I,A),g(A,k)},p:function(a,t){var n=R(t,1)[0];if(1&n){var r;for(x=a[0],r=0;r<x.length;r+=1){var s=S(a,x,r);w[r]?w[r].p(s,n):(w[r]=b(s),w[r].c(),w[r].m(o,null))}for(;r<w.length;r+=1)w[r].d(1);w.length=x.length}},i:m,o:m,d:function(a){a&&v(t),j(w,a)}}}function k(a,t,n){var r=t.socialData,s=void 0===r?{}:r,c=s,o=c.IMAGES_LIST,e=c.HEADING;return a.$$set=function(a){"socialData"in a&&n(2,s=a.socialData)},[o,e,s]}var x=function(t){a(l,e);var n=I(l);function l(a){var t;return r(this,l),t=n.call(this),s(o(t),a,k,A,c,{socialData:2}),t}return l}();export{x as S};