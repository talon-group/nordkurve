if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),o={module:{uri:n},exports:i,require:r};s[n]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-1b7837c0"],(function(e){"use strict";importScripts("/worker-21860a9eb099c65e.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Home.png",revision:"75a0476284e572082a88c433f72c4445"},{url:"/_next/static/U-rwWHuxW_RxotkrR2a5c/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/U-rwWHuxW_RxotkrR2a5c/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/150-caf39b3093a4490a.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/212.9724dd470a65cfb4.js",revision:"9724dd470a65cfb4"},{url:"/_next/static/chunks/222-b1107d3be86fdaba.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/250-2d7f0d42a6ffa62d.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/283-ae278b80fb89043f.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/362-892784189dbf89ee.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/37-828fef741d736bd3.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/372-e50342e45ac075b0.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/42-0a13bcaa95c440f6.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/43-b884592b7776df64.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/50-62a12b762424f3d9.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/58-39ce15d7e2f143ad.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/591-37a935109e526620.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/606-93bb12d7940966cf.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/682-b1d522895dbf1c9f.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/69-2355f92385f5f45d.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/699-e7a9d65ba6878396.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/880-61fdac1154fa2b4a.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/_not-found-3abd874152452a67.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/about/page-e31079f448743c71.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/billing/page-3f4a4574777fb3f2.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/layout-aa34056e2d1d31a4.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/new/%5Bid%5D/page-fcafcdb2bf09f6f3.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/new/page-86188d64d0e8f65b.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/page-3708b0d23c8b6316.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/posts/%5Bslug%5D/page-29235c081a05a676.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/posts/create/page-6afb25d5751edd1e.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/posts/page-485dd19a0adddfc4.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/dashboard/settings/page-6c2d7a5b3147935a.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/layout-fdfa30bf96ec2db6.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/page-e03f4978b0ad989e.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/payment/cancelled/page-4b03d246e21b4abc.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/payment/success/page-ff7d1f32cb6fd712.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/store/%5Bid%5D/page-71829c5b2cae70d1.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/store/layout-220073468ca1ff21.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/app/store/page-d1f6fc8669d9b7a4.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/fd9d1056-0cef586987676f71.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/main-2dd58ecd2addd037.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/main-app-d44e28d34d933874.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3f560d6f4c4ead83.js",revision:"U-rwWHuxW_RxotkrR2a5c"},{url:"/_next/static/css/4a320d360e2d553d.css",revision:"4a320d360e2d553d"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/favicon.ico",revision:"27bb4a7d24cfbd9487d50fadfd27ab05"},{url:"/icons/android-chrome-192x192.png",revision:"0bbd64d1ee937300fb1505ec5c88b154"},{url:"/icons/apple-touch-icon.png",revision:"7090a7b2693181947331e38efa4f3486"},{url:"/icons/icon-512x512.png",revision:"9312927ec9f042055794a59d924e8c03"},{url:"/manifest.json",revision:"e7f267d38646e83069d42fcde079c419"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"2edd009582e7ab50ed33d74974fad96c"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/worker-21860a9eb099c65e.js",revision:"be757de12850d7a83ef4886c2798c8c2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
