var versionStamp = 'be10d477-1a56-4839-ac4d-d1ac42723d6b';
var installFiles = ['./', './index.html', './favicon.ico', './manifest.json', './scripts/CanvasTools.js', './scripts/playcanvas-ammo.js', './scripts/playcanvas-anim.js', './scripts/playcanvas-gltf.js', './scripts/playcanvas-stick.js', './scripts/playcanvas-tools.js', './scripts/playcanvas-webvr.js', './scripts/playcanvas.js', './scene/PlayCanvasToolkit.js', './scene/TestScene.bin', './scene/TestScene.gltf', './scene/assets/Country_env.dds', './scene/assets/Country_negx.png', './scene/assets/Country_negy.png', './scene/assets/Country_negz.png', './scene/assets/Country_posx.png', './scene/assets/Country_posy.png', './scene/assets/Country_posz.png', './scene/assets/TestScene_Lightmap-0_comp_light.png'];

// Install Service Worker Cache Files
self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(versionStamp).then(function(cache) {
            console.warn("===> Installing cache: " + versionStamp);
            return cache.addAll(installFiles);
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

// Remove Service Worker Cache Files
self.addEventListener('activate', function(evt) {
    evt.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cache) {
                    if (cache !== versionStamp) {
                        console.warn("===> Cleaning cache: " + cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Cache Service Worker First Pattern
self.addEventListener('fetch', function(evt) {
    if (evt.request.url.indexOf('version.js') < 0) {
        evt.respondWith(
            caches.match(evt.request).then(function(response) {
                return response || fetch(evt.request);
            })
        );
    }
});

// Fetch Service Worker First Pattern
// self.addEventListener('fetch', function(evt) {
//    if (evt.request.url.indexOf('version.js') < 0) {
//        evt.respondWith(
//            fetch(evt.request).catch(function() {
//                return caches.match(evt.request);
//            })
//        );
//    }
// });

// On Service Worker Message Received
// self.addEventListener('message', function(evt) {
// });
