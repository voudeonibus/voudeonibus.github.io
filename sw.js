

var path = '/',
    CACHE_NAME = 'vdb-v1';

this.addEventListener('install', function(event) {
    // Instala app, adicionar os arquivos no cache

    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                path,
                path + 'index.html',
                path + 'src/build/desktop.css',
                path + 'src/build/mobile.css',
                path + 'src/img/logo-app.png',
                path + 'src/img/mobile.png',
                path + 'src/img/page-home_mobile1.jpg',
                path + 'src/img/page-home-full.jpg',
                path + 'src/img/page-home.jpg'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(caches.match(event.request).then(function(r) {
        response = r;
        if(!response){
            throw "Nao tem no cache";
        }
        caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    }).catch(function() {
        return fetch(event.request).then(function(res){
           return  res.clone();
        });
    }));
});

this.addEventListener('activate', function(event) {
    // App active and working
});
