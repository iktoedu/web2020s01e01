'use strict';

const cachePrefix = 'web';

const offlinePageUrl = '/offline.html';

const precacheUrls = [
    offlinePageUrl,
    '/css/main.min.css',
];

self.addEventListener('install', (event) => {
    console.log('SW install');

    event.waitUntil(
        caches
            .open(cachePrefix)
            .then((cache) => Promise.all(precacheUrls.map((url) => fetch(url).then((response) => cache.put(url, response)))))
    );
});

self.addEventListener('activate', () => {
    console.log('SW activate');
});

self.addEventListener('fetch', (event) => {
    let url = event.request.url;

    console.log('SW fetch: ' + url);

    let is_get = event.request.method === 'GET';

    if (is_get) {
        event.respondWith(
            fetch(event.request)
                .then((response) => response)
                .catch((error) => caches.match(url).then((response) => {
                    if (!response) {
                        return Promise.reject(new Error('Not in cache.'));
                    }
                    return response;
                }).catch((error) => caches.match(offlinePageUrl)))
        );
    }
});
