if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-44c90a21"],(function(e){"use strict";importScripts("/worker-21860a9eb099c65e.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Home.png",revision:"75a0476284e572082a88c433f72c4445"},{url:"/_next/static/7Fwi-5viOwoT-HFdX_p30/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/7Fwi-5viOwoT-HFdX_p30/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/120-6f826f97ff6726d6.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/250-8fc7157c437160e5.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/283-ac798f91dba401f0.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/343-f38641ba97b156ce.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/362-d2ead860155dc4a1.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/363-d49af63ad7f8e97a.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/482-a8a2f2e8181907fc.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/50-b6e7a89b3eca9ced.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/_not-found-8f91b1274a91646e.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/dashboard/billing/page-6663836ce2c7b198.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/dashboard/layout-a70efa31ebd204e9.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/dashboard/new/%5Bid%5D/page-4e21e6c62b4c99fa.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/dashboard/new/page-f5ddde5fc863815b.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/dashboard/page-d4eb6b7383c001d0.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/dashboard/settings/page-afb18c34d395754d.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/layout-edf0168ec8c16bfe.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/page-dd99b1683416f3c7.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/payment/cancelled/page-febd18234c31b841.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/app/payment/success/page-e712a306c8e77f98.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/fd9d1056-76286ddac84065c4.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/main-98dd25ed0adf54e8.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/main-app-a29faef0401eb4be.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-31b1d05ef7f2086e.js",revision:"7Fwi-5viOwoT-HFdX_p30"},{url:"/_next/static/css/cd46ada08939cae5.css",revision:"cd46ada08939cae5"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/favicon.ico",revision:"27bb4a7d24cfbd9487d50fadfd27ab05"},{url:"/icons/android-chrome-192x192.png",revision:"0bbd64d1ee937300fb1505ec5c88b154"},{url:"/icons/apple-touch-icon.png",revision:"7090a7b2693181947331e38efa4f3486"},{url:"/icons/icon-512x512.png",revision:"9312927ec9f042055794a59d924e8c03"},{url:"/manifest.json",revision:"0950b6c383ae8405f6c83f0a1c2bff21"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"2edd009582e7ab50ed33d74974fad96c"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/worker-21860a9eb099c65e.js",revision:"be757de12850d7a83ef4886c2798c8c2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
