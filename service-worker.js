!function(){"use strict";const e=1622653934798,a=`cache${e}`,i=["/client/client.3c0fa8ef.js","/client/inject_styles.5607aec6.js","/client/index.7424ceae.js","/client/Social.2fb0a805.js","/client/ExperienceGrid.fe8f18b0.js","/client/sideprojects.aa379c97.js","/client/healthcare.cb143d84.js","/client/fooddes.c4877b76.js","/client/about.4c6bd49b.js","/client/index.39e85e3e.js","/client/[slug].85b1deb4.js","/client/vote.dcd3a6ec.js","/client/cfm.98f52161.js"].concat(["/service-worker-index.html","/CNAME","/SavannahJoyner_Resume.pdf","/SavannahJoyner_Resume.zip","/ea2e3dec-8dd8-11eb-8b25-0cc47a792c0a_id_ea2e3dec-8dd8-11eb-8b25-0cc47a792c0a.html","/global.css","/images/1553538007167.jpg","/images/3705politics (1).png","/images/3705politics.png","/images/Clinics.png","/images/Drawer (from Home).png","/images/Final M5.pdf","/images/Home (1).png","/images/Hospitals.png","/images/Info.png","/images/M3 Mosaic Plot.pdf","/images/Pharmacies - Selection.png","/images/ProcessBook_Group4.pdf","/images/VoterTurnoutVis.jpeg","/images/about.txt","/images/android-chrome-192x192.png","/images/android-chrome-512x512.png","/images/apple-touch-icon.png","/images/bog.png","/images/box_girl.MP4","/images/cfm/cfm_icon1.png","/images/cfm/cfm_icon2.png","/images/cfm/cfm_icon3.png","/images/cfm/cfm_icon4.png","/images/cfm/cfm_icon5.png","/images/cfm/cfm_lofi.jpg","/images/cfm/cfm_lofi2.jpg","/images/cfm/cfm_lofihome.jpg","/images/cfm/cfm_product.jpg","/images/cfm/cfm_sketch.jpg","/images/cfm/persona1.jpg","/images/cfm/persona2.jpg","/images/cfm/persona3.jpg","/images/cfm/persona4.jpg","/images/cfm_mock.png","/images/complete.png","/images/cropped2.jpg","/images/dataviz_mock.png","/images/designprocess.jpg","/images/disneycreative.png","/images/facebook-icon.png","/images/favicon-16x16.png","/images/favicon-32x32.png","/images/favicon.ico","/images/favicon.png","/images/final2.png","/images/foodalt1.png","/images/foodalt2.png","/images/foodalt3.png","/images/fooddesertfull.png","/images/foodfinal1.png","/images/foodfinal2.png","/images/foodfinal3.png","/images/foodfinal4.png","/images/foodrelated.png","/images/github.png","/images/healthcare_mock.png","/images/healthcaresurvey.png","/images/heroimage.png","/images/home.png","/images/home1.png","/images/insta.png","/images/instagram-icon.png","/images/instagram.png","/images/interviews.png","/images/layout1.png","/images/linkedin-icon.png","/images/linkedin.png","/images/logo-192.png","/images/logo-512.png","/images/mosaic.png","/images/nebo.png","/images/network.png","/images/qualtrics.png","/images/questions.png","/images/sav.png","/images/scenario1.png","/images/scenario2.png","/images/scenario3.png","/images/service1.png","/images/service2.png","/images/service3.png","/images/site.webmanifest","/images/snapchat-icon.png","/images/spotify.png","/images/twitter-icon.png","/images/unnamed.jpg","/images/user1.jpg","/images/user2.jpg","/images/viz1early.png","/images/viz1early2.png","/images/viz1final.png","/images/viz2early.png","/images/viz2final.png","/images/viz3early.png","/images/viz3final.png","/images/vote_mock.png","/images/walkthrough.png","/images/wave1.png","/images/wave2.png","/images/whatsapp-icon.png","/images/yellow.jpg","/manifest.json"]),s=new Set(i);self.addEventListener("install",(e=>{e.waitUntil(caches.open(a).then((e=>e.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const i of e)i!==a&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const i=new URL(a.request.url),g=i.protocol.startsWith("http"),n=i.hostname===self.location.hostname&&i.port!==self.location.port,m=i.host===self.location.host&&s.has(i.pathname),c="only-if-cached"===a.request.cache&&!m;!g||n||c||a.respondWith((async()=>m&&await caches.match(a.request)||async function(a){const i=await caches.open(`offline${e}`);try{const e=await fetch(a);return i.put(a,e.clone()),e}catch(e){const s=await i.match(a);if(s)return s;throw e}}(a.request))())}))}();
