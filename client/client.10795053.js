function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}function l(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function f(e,t,n,r,o,s,a){const i=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(i){const o=l(t,n,r,a);e.p(o,i)}}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function v(){return g(" ")}function _(){return g("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e){return Array.from(e.childNodes)}function E(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):m(t)}function w(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return g(t)}function A(e){return w(e," ")}function S(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function N(e,t,n){e.classList[n?"add":"remove"](t)}function P(e,t=document.body){return Array.from(t.querySelectorAll(e))}let R;function k(e){R=e}function T(){if(!R)throw new Error("Function called outside component initialization");return R}function L(e){T().$$.on_mount.push(e)}function x(e){T().$$.on_destroy.push(e)}function C(e,t){T().$$.context.set(e,t)}function j(e){return T().$$.context.get(e)}const O=[],D=[],U=[],J=[],M=Promise.resolve();let G=!1;function B(e){U.push(e)}let V=!1;const K=new Set;function q(){if(!V){V=!0;do{for(let e=0;e<O.length;e+=1){const t=O[e];k(t),z(t.$$)}for(k(null),O.length=0;D.length;)D.pop()();for(let e=0;e<U.length;e+=1){const t=U[e];K.has(t)||(K.add(t),t())}U.length=0}while(O.length);for(;J.length;)J.pop()();G=!1,V=!1,K.clear()}}function z(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const H=new Set;let F;function Y(){F={r:0,c:[],p:F}}function W(){F.r||o(F.c),F=F.p}function X(e,t){e&&e.i&&(H.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(H.has(e))return;H.add(e),F.c.push((()=>{H.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function Z(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const a=e[s],i=t[s];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[s]=i}else for(const e in a)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ee(e){return"object"==typeof e&&null!==e?e:{}}function te(e){e&&e.c()}function ne(e,t){e&&e.l(t)}function re(e,t,r,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:f}=e.$$;i&&i.m(t,r),a||B((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),f.forEach(B)}function oe(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(O.push(e),G||(G=!0,M.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,s,a,i,c,l=[-1]){const f=R;k(t);const u=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(u.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return u.ctx&&i(u.ctx[e],u.ctx[e]=o)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](o),d&&se(t,e)),n})):[],u.update(),d=!0,o(u.before_update),u.fragment=!!a&&a(u.ctx),n.target){if(n.hydrate){const e=$(n.target);u.fragment&&u.fragment.l(e),e.forEach(h)}else u.fragment&&u.fragment.c();n.intro&&X(t.$$.fragment),re(t,n.target,n.anchor,n.customElement),q()}k(f)}class ie{$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ce=[];function le(t,n=e){let r;const o=[];function s(e){if(a(t,e)&&(t=e,r)){const e=!ce.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),ce.push(n,t)}if(e){for(let e=0;e<ce.length;e+=2)ce[e][0](ce[e+1]);ce.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(a,i=e){const c=[a,i];return o.push(c),1===o.length&&(r=n(s)||e),a(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const fe={};function ue(t){let n,r,o,s,a,i,c,l,f,p,_,S,I,R,k,T,L,x,C,j,O,D,U,J,M,G,V,K,q,z,H,F,Y,W=!1,X=()=>{W=!1};return B(t[3]),{c(){r=m("link"),o=m("link"),s=m("link"),a=m("link"),i=m("link"),c=m("link"),l=v(),f=m("section"),p=m("nav"),_=m("div"),S=m("a"),I=g("SAVJOYNER"),R=v(),k=m("button"),T=m("span"),L=v(),x=m("div"),C=m("ul"),j=m("div"),O=m("a"),D=g("Work"),U=v(),J=m("ul"),M=m("div"),G=m("a"),V=g("About"),K=v(),q=m("div"),z=m("a"),H=g("My Resume"),this.h()},l(e){const t=P('[data-svelte="svelte-192ppof"]',document.head);r=E(t,"LINK",{rel:!0,href:!0}),o=E(t,"LINK",{href:!0,rel:!0}),s=E(t,"LINK",{rel:!0,href:!0}),a=E(t,"LINK",{href:!0,rel:!0}),i=E(t,"LINK",{rel:!0,href:!0}),c=E(t,"LINK",{href:!0,rel:!0}),t.forEach(h),l=A(e),f=E(e,"SECTION",{id:!0,class:!0});var n=$(f);p=E(n,"NAV",{class:!0});var u=$(p);_=E(u,"DIV",{class:!0});var d=$(_);S=E(d,"A",{href:!0,class:!0});var m=$(S);I=w(m,"SAVJOYNER"),m.forEach(h),d.forEach(h),R=A(u),k=E(u,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var g=$(k);T=E(g,"SPAN",{class:!0}),$(T).forEach(h),g.forEach(h),L=A(u),x=E(u,"DIV",{class:!0,id:!0});var v=$(x);C=E(v,"UL",{class:!0});var y=$(C);j=E(y,"DIV",{class:!0});var b=$(j);O=E(b,"A",{class:!0,href:!0});var N=$(O);D=w(N,"Work"),N.forEach(h),b.forEach(h),y.forEach(h),U=A(v),J=E(v,"UL",{class:!0});var B=$(J);M=E(B,"DIV",{class:!0});var F=$(M);G=E(F,"A",{class:!0,href:!0});var Y=$(G);V=w(Y,"About"),Y.forEach(h),F.forEach(h),K=A(B),q=E(B,"DIV",{class:!0});var W=$(q);z=E(W,"A",{class:!0,href:!0});var X=$(z);H=w(X,"My Resume"),X.forEach(h),W.forEach(h),B.forEach(h),v.forEach(h),u.forEach(h),n.forEach(h),this.h()},h(){b(r,"rel","preconnect"),b(r,"href","https://fonts.gstatic.com"),b(o,"href","https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito:wght@200;300;800&family=Source+Serif+Pro:wght@300;400;600&display=swap"),b(o,"rel","stylesheet"),b(s,"rel","preconnect"),b(s,"href","https://fonts.gstatic.com"),b(a,"href","https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Proza+Libre:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"),b(a,"rel","stylesheet"),b(i,"rel","preconnect"),b(i,"href","https://fonts.gstatic.com"),b(c,"href","https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400&family=Cormorant+Garamond:wght@300;400&family=Crimson+Text&family=EB+Garamond&family=Raleway:wght@100;200;300;400&display=swap"),b(c,"rel","stylesheet"),b(S,"href","#home"),b(S,"class","active svelte-1ssr4ik"),b(_,"class","topnav-centered svelte-1ssr4ik"),b(T,"class","navbar-toggler-icon"),b(k,"class","navbar-toggler"),b(k,"type","button"),b(k,"data-toggle","collapse"),b(k,"data-target","#navbarNav"),b(k,"aria-controls","navbarNav"),b(k,"aria-expanded","false"),b(k,"aria-label","Toggle navigation"),b(O,"class","nav-link dropbtn svelte-1ssr4ik"),b(O,"href","/"),b(j,"class","nav-item dropdown svelte-1ssr4ik"),b(C,"class","navbar-nav svelte-1ssr4ik"),b(G,"class","nav-link dropbtn svelte-1ssr4ik"),b(G,"href","about"),b(M,"class","nav-item dropdown svelte-1ssr4ik"),b(z,"class","nav-link dropbtn svelte-1ssr4ik"),b(z,"href","SavannahJoyner_Resume_2021.pdf"),b(q,"class","nav-item dropdown  svelte-1ssr4ik"),b(J,"class","navbar-nav ml-auto svelte-1ssr4ik"),b(x,"class","collapse navbar-collapse"),b(x,"id","navbarNav"),b(p,"class","navbar navbar-expand-md navbar-light main-bgcolor svelte-1ssr4ik"),N(p,"shrink",t[0]>=80),b(f,"id","nav-bar"),b(f,"class","svelte-1ssr4ik")},m(e,h){u(document.head,r),u(document.head,o),u(document.head,s),u(document.head,a),u(document.head,i),u(document.head,c),d(e,l,h),d(e,f,h),u(f,p),u(p,_),u(_,S),u(S,I),u(p,R),u(p,k),u(k,T),u(p,L),u(p,x),u(x,C),u(C,j),u(j,O),u(O,D),u(x,U),u(x,J),u(J,M),u(M,G),u(G,V),u(J,K),u(J,q),u(q,z),u(z,H),F||(Y=y(window,"scroll",(()=>{W=!0,clearTimeout(n),n=setTimeout(X,100),t[3]()})),F=!0)},p(e,[t]){1&t&&!W&&(W=!0,clearTimeout(n),scrollTo(window.pageXOffset,e[0]),n=setTimeout(X,100)),1&t&&N(p,"shrink",e[0]>=80)},i:e,o:e,d(e){h(r),h(o),h(s),h(a),h(i),h(c),e&&h(l),e&&h(f),F=!1,Y()}}}function de(e,t,n){let{navlists:r=[]}=t,{header:o}=t,s=0;return e.$$set=e=>{"navlists"in e&&n(1,r=e.navlists),"header"in e&&n(2,o=e.header)},[s,r,o,function(){n(0,s=window.pageYOffset)}]}class he extends ie{constructor(e){super(),ae(this,e,de,ue,a,{navlists:1,header:2})}}const pe={HEADER:"Savannah Joyner",NAVBAR_DATA:[{id:1,url:"/",label:"Home"},{id:2,url:"#projects",label:"Projects"},{id:3,url:"about",label:"About"}],BANNER_DATA:{HEADING:"Hello!",DESCRIPTION:"I'm Savannah Joyner",INTRO:"I'm a UX designer/researcher based in Atlanta, Ga. I'm passionate about people finding their purpose and doing the most good with it. I'd like to help make that possible through my work."},PROJECT_DATA:{HEADING:"My Work",ALL_PROJECTS:"Projects",PROJECT_LIST:[{LABEL:"Georgia Food Deserts",DESCRIPTION:"To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",URL:"images/dataviz_mock.png",PAGE:"{segment === 'cfm' ? 'page' : undefined}",NAME:"cfm"},{LABEL:"Atlanta's Vote Changes Politics",DESCRIPTION:"It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",URL:"images/favicon.png",PAGE:"#georgia-food-deserts",NAME:"cfm"},{LABEL:"Healthcare Abroad",DESCRIPTION:"Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",URL:"images/favicon.png",PAGE:"#georgia-food-deserts",NAME:"cfm"},{LABEL:"CFM Sustainable Initiative",DESCRIPTION:"Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",URL:"images/favicon.png",PAGE:"#georgia-food-deserts",NAME:"cfm"}]},ABOUT_DATA:{HEADING:"About Me",TITLE:"My Background",IMAGE_URL:"images/favicon.png"},SOCIAL_DATA:{HEADING:"Find me on social media",IMAGES_LIST:[{IMAGE:"images/instagram.png",URL:"https://www.instagram.com/savjoyner/"},{IMAGE:"images/linkedin.png",URL:"https://www.linkedin.com/in/savannah-joyner-5a4b69180/"},{IMAGE:"images/github.png",URL:"https://github.com/savannahjoyner"},{IMAGE:"images/spotify.png",URL:"https://open.spotify.com/user/savannah.joyner"}]}};function me(e){let t,n,r,o,s,a,i,l,p,g,_;a=new he({props:{stickToTop:ge,navlists:pe.NAVBAR_DATA,header:pe.HEADER}});const w=e[2].default,S=c(w,e,e[1],null);return{c(){t=m("link"),n=m("link"),r=m("link"),o=m("link"),s=v(),te(a.$$.fragment),i=v(),l=m("main"),S&&S.c(),this.h()},l(e){const c=P('[data-svelte="svelte-ln6u36"]',document.head);t=E(c,"LINK",{rel:!0,sizes:!0,href:!0}),n=E(c,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),r=E(c,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),o=E(c,"LINK",{rel:!0,href:!0}),c.forEach(h),s=A(e),ne(a.$$.fragment,e),i=A(e),l=E(e,"MAIN",{});var f=$(l);S&&S.l(f),f.forEach(h),this.h()},h(){b(t,"rel","apple-touch-icon"),b(t,"sizes","180x180"),b(t,"href","../images/apple-touch-icon.png"),b(n,"rel","icon"),b(n,"type","image/png"),b(n,"sizes","32x32"),b(n,"href","../images/favicon-32x32.png"),b(r,"rel","icon"),b(r,"type","image/png"),b(r,"sizes","16x16"),b(r,"href","../images/favicon-16x16.png"),b(o,"rel","manifest"),b(o,"href","/site.webmanifest")},m(c,f){u(document.head,t),u(document.head,n),u(document.head,r),u(document.head,o),d(c,s,f),re(a,c,f),d(c,i,f),d(c,l,f),S&&S.m(l,null),p=!0,g||(_=y(window,"scroll",e[0]),g=!0)},p(e,[t]){S&&S.p&&2&t&&f(S,w,e,e[1],t,null,null)},i(e){p||(X(a.$$.fragment,e),X(S,e),p=!0)},o(e){Q(a.$$.fragment,e),Q(S,e),p=!1},d(e){h(t),h(n),h(r),h(o),e&&h(s),oe(a,e),e&&h(i),e&&h(l),S&&S.d(e),g=!1,_()}}}let ge=!0;function ve(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&n(1,o=e.$$scope)},[({target:{documentElement:e,body:t}})=>{t.scrollTop>0||e.scrollTop},o,r]}class _e extends ie{constructor(e){super(),ae(this,e,ve,me,a,{})}}function ye(e){let t,n,r=e[1].stack+"";return{c(){t=m("pre"),n=g(r)},l(e){t=E(e,"PRE",{});var o=$(t);n=w(o,r),o.forEach(h)},m(e,r){d(e,t,r),u(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&S(n,r)},d(e){e&&h(t)}}}function be(t){let n,r,o,s,a,i,c,l,f,p=t[1].message+"";document.title=n=t[0];let y=t[2]&&t[1].stack&&ye(t);return{c(){r=v(),o=m("h1"),s=g(t[0]),a=v(),i=m("p"),c=g(p),l=v(),y&&y.c(),f=_(),this.h()},l(e){P('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=A(e),o=E(e,"H1",{class:!0});var n=$(o);s=w(n,t[0]),n.forEach(h),a=A(e),i=E(e,"P",{class:!0});var u=$(i);c=w(u,p),u.forEach(h),l=A(e),y&&y.l(e),f=_(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(i,"class","svelte-8od9u6")},m(e,t){d(e,r,t),d(e,o,t),u(o,s),d(e,a,t),d(e,i,t),u(i,c),d(e,l,t),y&&y.m(e,t),d(e,f,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&S(s,e[0]),2&t&&p!==(p=e[1].message+"")&&S(c,p),e[2]&&e[1].stack?y?y.p(e,t):(y=ye(e),y.c(),y.m(f.parentNode,f)):y&&(y.d(1),y=null)},i:e,o:e,d(e){e&&h(r),e&&h(o),e&&h(a),e&&h(i),e&&h(l),y&&y.d(e),e&&h(f)}}}function $e(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Ee extends ie{constructor(e){super(),ae(this,e,$e,be,a,{status:0,error:1})}}function we(e){let n,r,o;const s=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&te(n.$$.fragment),r=_()},l(e){n&&ne(n.$$.fragment,e),r=_()},m(e,t){n&&re(n,e,t),d(e,r,t),o=!0},p(e,t){const o=16&t?Z(s,[ee(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){Y();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),W()}a?(n=new a(i()),te(n.$$.fragment),X(n.$$.fragment,1),re(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(e){o||(n&&X(n.$$.fragment,e),o=!0)},o(e){n&&Q(n.$$.fragment,e),o=!1},d(e){e&&h(r),n&&oe(n,e)}}}function Ae(e){let t,n;return t=new Ee({props:{error:e[0],status:e[1]}}),{c(){te(t.$$.fragment)},l(e){ne(t.$$.fragment,e)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Se(e){let t,n,r,o;const s=[Ae,we],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=s[t](e),{c(){n.c(),r=_()},l(e){n.l(e),r=_()},m(e,n){a[t].m(e,n),d(e,r,n),o=!0},p(e,o){let c=t;t=i(e),t===c?a[t].p(e,o):(Y(),Q(a[c],1,1,(()=>{a[c]=null})),W(),n=a[t],n?n.p(e,o):(n=a[t]=s[t](e),n.c()),X(n,1),n.m(r.parentNode,r))},i(e){o||(X(n),o=!0)},o(e){Q(n),o=!1},d(e){a[t].d(e),e&&h(r)}}}function Ie(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Se]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new _e({props:s}),{c(){te(n.$$.fragment)},l(e){ne(n.$$.fragment,e)},m(e,t){re(n,e,t),r=!0},p(e,[t]){const r=12&t?Z(o,[4&t&&{segment:e[2][0]},8&t&&ee(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(X(n.$$.fragment,e),r=!0)},o(e){Q(n.$$.fragment,e),r=!1},d(e){oe(n,e)}}}function Ne(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var f;return f=l,T().$$.after_update.push(f),C(fe,r),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,a,i,c,r,l]}class Pe extends ie{constructor(e){super(),ae(this,e,Ne,Ie,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Re=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],ke=[{js:()=>Promise.all([import("./index.39117ded.js"),__inject_styles(["client-e208ffc5.css","Social-7220619d.css","ExperienceGrid-3066e23d.css","index-db4c12f7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./FitnessVillage.090a86d1.js"),__inject_styles(["client-e208ffc5.css","Social-7220619d.css","FitnessVillage-4683f3e7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./sideprojects.04143b03.js"),__inject_styles(["client-e208ffc5.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./healthcare.0812b037.js"),__inject_styles(["client-e208ffc5.css","Social-7220619d.css","healthcare-0ff71d04.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./fooddes.e0946a53.js"),__inject_styles(["client-e208ffc5.css","Social-7220619d.css","fooddes-086edd73.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./about.c33f436b.js"),__inject_styles(["client-e208ffc5.css","ExperienceGrid-3066e23d.css","Social-7220619d.css","about-13d72134.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./index.d6b79084.js"),__inject_styles(["client-e208ffc5.css","index-7ed37c94.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[slug].df827ad7.js"),__inject_styles(["client-e208ffc5.css","[slug]-5bc8f95f.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./vote.4f9953d9.js"),__inject_styles(["client-e208ffc5.css","Social-7220619d.css","vote-90764f18.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./cfm.0787712b.js"),__inject_styles(["client-e208ffc5.css","Social-7220619d.css","cfm-b5656a9c.css"])]).then((function(e){return e[0]}))}],Te=(Le=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/FitnessVillage\/?$/,parts:[{i:1}]},{pattern:/^\/sideprojects\/?$/,parts:[{i:2}]},{pattern:/^\/healthcare\/?$/,parts:[{i:3}]},{pattern:/^\/fooddes\/?$/,parts:[{i:4}]},{pattern:/^\/about\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:7,params:e=>({slug:Le(e[1])})}]},{pattern:/^\/vote\/?$/,parts:[{i:8}]},{pattern:/^\/cfm\/?$/,parts:[{i:9}]}]);var Le;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function xe(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))}function Ce(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let je,Oe=1;const De="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ue={};let Je,Me;function Ge(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function Be(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Je))return null;let t=e.pathname.slice(Je.length);if(""===t&&(t="/"),!Re.some((e=>e.test(t))))for(let n=0;n<Te.length;n+=1){const r=Te[n],o=r.pattern.exec(t);if(o){const n=Ge(e.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:o,page:i}}}}function Ve(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Ce(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Be(o);if(s){ze(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),De.pushState({id:je},"",o.href)}}function Ke(){return{x:pageXOffset,y:pageYOffset}}function qe(e){if(Ue[je]=Ke(),e.state){const t=Be(new URL(location.href));t?ze(t,e.state.id):location.href=location.href}else Oe=Oe+1,function(e){je=e}(Oe),De.replaceState({id:je},"",location.href)}function ze(e,t,n,r){return xe(this,void 0,void 0,(function*(){const o=!!t;if(o)je=t;else{const e=Ke();Ue[je]=e,je=t=++Oe,Ue[je]=n?e:{x:0,y:0}}if(yield Me(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Ue[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Ue[je]=n,o||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function He(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Fe,Ye=null;function We(e){const t=Ce(e.target);t&&"prefetch"===t.rel&&function(e){const t=Be(new URL(e,He(document)));if(t)Ye&&e===Ye.href||(Ye={href:e,promise:ht(t)}),Ye.promise}(t.href)}function Xe(e){clearTimeout(Fe),Fe=setTimeout((()=>{We(e)}),20)}function Qe(e,t={noscroll:!1,replaceState:!1}){const n=Be(new URL(e,He(document)));return n?(De[t.replaceState?"replaceState":"pushState"]({id:je},"",e),ze(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const Ze="undefined"!=typeof __SAPPER__&&__SAPPER__;let et,tt,nt,rt=!1,ot=[],st="{}";const at={page:function(e){const t=le(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:le(null),session:le(Ze&&Ze.session)};let it,ct,lt;function ft(e,t){const{error:n}=e;return Object.assign({error:n},t)}function ut(e){return xe(this,void 0,void 0,(function*(){et&&at.preloading.set(!0);const t=function(e){return Ye&&Ye.href===e.href?Ye.promise:ht(e)}(e),n=tt={},r=yield t,{redirect:o}=r;if(n===tt)if(o)yield Qe(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield dt(n,t,ft(t,e.page))}}))}function dt(e,t,n){return xe(this,void 0,void 0,(function*(){at.page.set(n),at.preloading.set(!1),et?et.$set(t):(t.stores={page:{subscribe:at.page.subscribe},preloading:{subscribe:at.preloading.subscribe},session:at.session},t.level0={props:yield nt},t.notify=at.page.notify,et=new Pe({target:lt,props:t,hydrate:!0})),ot=e,st=JSON.stringify(n.query),rt=!0,ct=!1}))}function ht(e){return xe(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!nt){const e=()=>({});nt=Ze.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},it)}let i,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let f=!1;i=yield Promise.all(t.parts.map(((t,i)=>xe(this,void 0,void 0,(function*(){const u=r[i];if(function(e,t,n,r){if(r!==st)return!0;const o=ot[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,u,l,o)&&(f=!0),s.segments[c]=r[i+1],!t)return{segment:u};const d=c++;if(!ct&&!f&&ot[i]&&ot[i].part===t.i)return ot[i];f=!1;const{default:h,preload:p}=yield ke[t.i].js();let m;return m=rt||!Ze.preloaded[i+1]?p?yield p.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},it):{}:Ze.preloaded[i+1],s[`level${d}`]={component:h,props:m,segment:u,match:l,part:t.i}})))))}catch(e){s.error=e,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var pt,mt,gt;at.session.subscribe((e=>xe(void 0,void 0,void 0,(function*(){if(it=e,!rt)return;ct=!0;const t=Be(new URL(location.href)),n=tt={},{redirect:r,props:o,branch:s}=yield ht(t);n===tt&&(r?yield Qe(r.location,{replaceState:!0}):yield dt(s,o,ft(o,t.page)))})))),pt={target:document.querySelector("#sapper")},mt=pt.target,lt=mt,gt=Ze.baseUrl,Je=gt,Me=ut,"scrollRestoration"in De&&(De.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{De.scrollRestoration="auto"})),addEventListener("load",(()=>{De.scrollRestoration="manual"})),addEventListener("click",Ve),addEventListener("popstate",qe),addEventListener("touchstart",We),addEventListener("mousemove",Xe),Ze.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:a}=Ze;nt||(nt=o&&o[0]);const i={error:a,status:s,session:r,level0:{props:nt},level1:{props:{status:s,error:a},component:Ee},segments:o},c=Ge(n);dt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;De.replaceState({id:Oe},"",t);const n=Be(new URL(location.href));if(n)return ze(n,Oe,!0,e)}));export{j as A,i as B,N as C,y as D,B as E,te as F,ne as G,re as H,oe as I,p as J,L as K,S as L,pe as M,ie as S,v as a,A as b,E as c,h as d,m as e,$ as f,w as g,b as h,ae as i,I as j,u as k,d as l,c as m,e as n,X as o,Q as p,P as q,C as r,a as s,g as t,f as u,x as v,le as w,_ as x,Y as y,W as z};

import __inject_styles from './inject_styles.5607aec6.js';