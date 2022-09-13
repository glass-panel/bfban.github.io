importScripts("/precache-manifest.8cfd20e896f47e0e4f7275cc0d24b436.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function (event) {
  console.log(event);
});
