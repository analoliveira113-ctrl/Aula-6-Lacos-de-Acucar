const CACHE_NAME = 'aula-6-lacos-de-acucar'
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/img/banner.png',
    './assets/img/laco-rosa-de-morango.png',
    './assets/img/laco-tropical-gelado.png',
    './assets/img/Laco-Trufado-Supremo.png',
    './assets/img/lacos-de-avela-encantada.png',
    './assets/img/lacos-de-baunilha-doce.png',
    './assets/img/lacos-de-baunilha.png',
    './assets/img/lacos-de-chocolate-cremoso.png',
    './assets/img/lacos-de-chocolate.png',
    './assets/img/lacos-de-morango.png',
    './assets/img/lacos-de-ouro.png',
    './assets/img/lacos-do-verao.png',
    './assets/img/lacos-romeu-e-julieta.png',
    './assets/img/lacos-tropicais.png',
    './assets/img/lacos-trufados.png',
    './assets/img/logo.png',
    './assets/img/whatsapp.png',
    './assets/img/Sem nome(64 x 64px).png',
    './assets/img/Sem nome(512 x 512px).png',
    

];


//Instala o Serviço Worker e coloca os arquivos no Cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((chache) => {
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

