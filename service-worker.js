importScripts("/precache-manifest.ef86eba89f2921563df372cc60e3cee2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('fetch', function (event) {
  console.log(event);
});
