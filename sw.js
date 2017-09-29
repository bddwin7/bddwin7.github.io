self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('nokwin_cv').then(cache => {
      return cache.addAll([
        `/`,
        `/index.html?timestamp=${timeStamp}`,
        `/public/css/glitche-basic.css?timestamp=${timeStamp}`,
        `/public/css/glitche-layout.css?timestamp=${timeStamp}`,
        `/public/css/vendor.css?timestamp=${timeStamp}`,
        `/public/fonts/ionicons.eot?timestamp=${timeStamp}`,
        `/public/fonts/ionicons.svg?timestamp=${timeStamp}`,
        `/public/fonts/ionicons.ttf?timestamp=${timeStamp}`,
        `/public/fonts/ionicons.woff?timestamp=${timeStamp}`,
        `/public/images/favicons/apple-touch-icon-72x72.png?timestamp=${timeStamp}`,
        `/public/images/favicons/apple-touch-icon-114x114.png?timestamp=${timeStamp}`,
        `/public/images/favicons/apple-touch-icon.png?timestamp=${timeStamp}`,
        `/public/images/favicons/favicon.ico?timestamp=${timeStamp}`,
        `/public/images/18738360_1696892283657659_4234275519861091339_o.jpg?timestamp=${timeStamp}`,
        `/public/images/me.jpg?timestamp=${timeStamp}`,
        `/public/js/scripts.js?timestamp=${timeStamp}`,
        `/public/js/vendor.js?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
