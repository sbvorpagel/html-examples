const CACHE_NAME = 'offline-first-v1';

self.addEventListener('install', (event) =>
  event.waitUntil(
    console.log('instalando')
  )
);

self.addEventListener('activate', (event) =>
  event.waitUntil(
    console.log('ativando')
  )
);
