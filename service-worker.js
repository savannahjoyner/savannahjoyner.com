!function(){"use strict";const e=1616563319573,a=`cache${e}`,s=["/client/client.2eef930a.js","/client/inject_styles.5607aec6.js","/client/index.e7ea435f.js","/client/ExperienceGrid.7ad1c742.js","/client/sideprojects.8f0fd405.js","/client/healthcare.f7efd7d4.js","/client/fooddes.fde04568.js","/client/about.3a41635a.js","/client/index.8c231ee0.js","/client/[slug].79603bc1.js","/client/vote.2d320510.js","/client/cfm.02a33746.js"].concat(["/service-worker-index.html","/CNAME","/SavannahJoyner_Resume.pdf","/SavannahJoyner_Resume.zip","/global.css","/images/1553538007167.jpg","/images/bog.png","/images/box_girl.MP4","/images/cfm_mock.png","/images/complete.png","/images/cropped2.jpg","/images/dataviz_mock.png","/images/facebook-icon.png","/images/favicon.png","/images/healthcare_mock.png","/images/heroimage.png","/images/home.png","/images/home1.png","/images/instagram-icon.png","/images/linkedin-icon.png","/images/logo-192.png","/images/logo-512.png","/images/nebo.png","/images/network.png","/images/sav.png","/images/service1.png","/images/service2.png","/images/service3.png","/images/snapchat-icon.png","/images/twitter-icon.png","/images/unnamed.jpg","/images/user1.jpg","/images/user2.jpg","/images/vote_mock.png","/images/wave1.png","/images/wave2.png","/images/whatsapp-icon.png","/images/yellow.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(a).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==a&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const s=new URL(a.request.url),i=s.protocol.startsWith("http"),t=s.hostname===self.location.hostname&&s.port!==self.location.port,c=s.host===self.location.host&&n.has(s.pathname),g="only-if-cached"===a.request.cache&&!c;!i||t||g||a.respondWith((async()=>c&&await caches.match(a.request)||async function(a){const s=await caches.open(`offline${e}`);try{const e=await fetch(a);return s.put(a,e.clone()),e}catch(e){const n=await s.match(a);if(n)return n;throw e}}(a.request))())}))}();