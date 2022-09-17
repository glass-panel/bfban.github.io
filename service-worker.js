importScripts("/precache-manifest.ef8d4c232cdbd8cfd530d7e1053ca63a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function (event) {
  console.log(event);
});
