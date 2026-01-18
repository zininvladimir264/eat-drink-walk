self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('SW-v2 activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
