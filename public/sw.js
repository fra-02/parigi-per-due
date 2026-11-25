const CACHE_VERSION = 'paris-a-deux-v2';
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './eiffel.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_VERSION) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never cache external map tiles or live weather APIs
  if (
    url.hostname.includes('tile.openstreetmap.org') ||
    url.hostname.includes('open-meteo.com')
  ) {
    return;
  }

  // Only cache same-origin app assets & local place images
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Background stale-while-revalidate for same-origin assets
        fetch(event.request)
          .then((netResp) => {
            if (netResp && netResp.status === 200) {
              caches.open(CACHE_VERSION).then((c) => c.put(event.request, netResp));
            }
          })
          .catch(() => {});
        return cached;
      }

      return fetch(event.request)
        .then((netResp) => {
          if (!netResp || netResp.status !== 200 || netResp.type !== 'basic') {
            return netResp;
          }
          const clone = netResp.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(event.request, clone));
          return netResp;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
