const CACHE_NAME = 'dosithink-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw-register.js',
  '/icon-192.png',
  '/icon-512.png'
];

// Install service worker and cache files
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});