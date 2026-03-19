self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (url.includes('mission-control-v2.html')) {
    event.respondWith(fetch(event.request));
  }
});
