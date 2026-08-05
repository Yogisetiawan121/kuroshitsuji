/* ============================================================
 * KUROSHITSUJI DOSSIER — Service Worker
 * ------------------------------------------------------------
 *  HOW TO PUBLISH A SITE UPDATE:
 *  Bump CACHE_VERSION below (v2 → v3 → ...) whenever you deploy
 *  new content. Old caches are wiped on activation, so every
 *  visitor instantly gets the fresh version. Without a bump,
 *  images/audio refresh themselves automatically once they are
 *  older than MEDIA_MAX_AGE_MS.
 *
 *  STRATEGY
 *  - HTML navigations ....... NETWORK-FIRST   (always latest page)
 *  - JS/CSS (hashed) ........ STALE-WHILE-REVALIDATE
 *  - Images/Audio/Fonts ..... freshness-gated CACHE-FIRST
 *  - Every cached copy doubles as the offline fallback.
 * ============================================================ */

const CACHE_VERSION = 'v2';
const CACHE_NAME = `kuroshitsuji-dossier-${CACHE_VERSION}`;

// Media is served instantly from cache while younger than this,
// then re-fetched from the network (so your image edits show up
// on their own, even without a version bump).
const MEDIA_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 1 day

// Safety valve: if the cache ever outgrows this many entries it is
// reset on activation and rebuilt on demand (protects mobile storage).
const MAX_CACHE_ENTRIES = 600;

const MEDIA_PATTERNS = [
  /\/img\//i,
  /\/audio\//i,
  /fonts\.gstatic\.com/i,
  /fonts\.googleapis\.com/i,
  /favicon\.ico/i
];

const isMedia = (url) => MEDIA_PATTERNS.some((pattern) => pattern.test(url));
const isNavigation = (request) => request.mode === 'navigate';

// Tiny metadata entries record *when* the SW cached each URL, so the
// freshness gate doesn't depend on server-supplied Date headers
// (which can be misleading when served from a CDN / HTTP cache).
const metaKey = (url) => `${url}__sw-meta`;

async function readCachedAt(cache, url) {
  const meta = await cache.match(metaKey(url));
  const value = meta && Number(meta.headers.get('x-cached-at'));
  return Number.isFinite(value) ? value : 0;
}

async function writeCachedAt(cache, url, when = Date.now()) {
  const meta = new Response('', { headers: { 'x-cached-at': String(when) } });
  await cache.put(metaKey(url), meta);
}

// NETWORK-FIRST: newest wins; cached copy only when offline.
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (networkError) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) return cachedResponse;
    throw networkError;
  }
}

// STALE-WHILE-REVALIDATE: serve cached instantly, refresh in background.
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => {
      if (cachedResponse) return cachedResponse;
      throw new Error('Network unavailable and no cached response');
    });
  return cachedResponse || fetchPromise;
}

// Freshness-gated CACHE-FIRST: instant repeat loads, never stale forever.
async function freshnessCachedFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cacheKey = request.url;
  const cachedResponse = await cache.match(request);

  const cachedAt = await readCachedAt(cache, cacheKey);
  const isFresh = cachedAt > 0 && Date.now() - cachedAt < MEDIA_MAX_AGE_MS;
  if (cachedResponse && isFresh) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    // 304 = content unchanged → keep serving the cached copy, just
    // refresh our freshness timestamp.
    if (networkResponse.status === 304 && cachedResponse) {
      await writeCachedAt(cache, cacheKey);
      return cachedResponse;
    }

    if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
      await cache.put(request, networkResponse.clone());
      await writeCachedAt(cache, cacheKey);
    }
    return networkResponse;
  } catch (networkError) {
    if (cachedResponse) return cachedResponse; // offline -> keep old copy
    throw networkError;
  }
}

// INSTALL: take over as soon as possible.
self.addEventListener('install', () => {
  self.skipWaiting();
});

// ACTIVATE: drop every cache from an older CACHE_VERSION, reset an
// oversized cache, then claim clients.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() =>
        caches.open(CACHE_NAME).then((cache) =>
          cache.keys().then((keys) =>
            keys.length > MAX_CACHE_ENTRIES ? caches.delete(CACHE_NAME) : undefined
          )
        )
      )
      .then(() => self.clients.claim())
  );
});

// FETCH: route each request to its strategy.
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Don't intercept unrelated cross-origin requests (analytics, embeds, ...).
  if (url.origin !== self.location.origin && !isMedia(url.href)) return;

  // Audio/video range requests (streaming & seeking) -> network-first.
  if (request.headers.get('range')) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isNavigation(request)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isMedia(url.href)) {
    event.respondWith(freshnessCachedFirst(request));
    return;
  }

  // App code: hashed JS/CSS and any other same-origin request.
  event.respondWith(staleWhileRevalidate(request));
});
