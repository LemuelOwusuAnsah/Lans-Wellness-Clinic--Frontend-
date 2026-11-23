const CACHE_NAME = 'lans-wellness-v2';
const BASE = self.registration.scope;
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'css/style.css',
  BASE + 'js/data.js',
  BASE + 'js/render.js',
  BASE + 'js/filters.js',
  BASE + 'js/booking.js',
  BASE + 'js/theme.js',
  BASE + 'js/main.js',
  BASE + 'js/pwa.js',
  BASE + 'manifest.json'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.map(function (name) {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
      .catch(function () {
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      })
  );
});
