const CACHE_NAME = 'aula-6-lacos-de-acucar'
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/images/banner.png',
    './assets/images/laco-rosa-de-morango.png',
    './assets/images/laco-tropical-gelado.png',
    './assets/images/Laco-Trufado-Supremo.png',
    './assets/images/lacos-de-avela-encantada.png',
    './assets/images/lacos-de-baunilha-doce.png',
    './assets/images/lacos-de-baunilha.png',
    './assets/images/lacos-de-chocolate-cremoso.png',
    './assets/images/lacos-de-chocolate.png',
    './assets/images/lacos-de-morango.png',
    './assets/images/lacos-de-ouro.png',
    './assets/images/lacos-do-verao.png',
    './assets/images/lacos-romeu-e-julieta.png',
    './assets/images/lacos-tropicais.png',
    './assets/images/lacos-trufados.png',
    './assets/images/logo.png',
    './assets/images/whatsapp.png',
    './assets/images/Sem nome(64 x 64px).png',
    './assets/images/Sem nome(512 x 512px).png',
    

];


//Instala o Serviço Worker e coloca os arquivos no Cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Laços artesanais com carinho no cache! 🎀✨');
            return cache.addAll(ASSETS);
        })
    );
});

//Faz as requisições olharem pro cache primeiro
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

//Remove caches antigos quando atualizar
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});

