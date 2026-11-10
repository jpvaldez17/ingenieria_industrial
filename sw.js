// Service Worker: precarga el "shell" y los datos; luego responde desde caché y actualiza en segundo plano.
const V='ii-upds-v1',A=['./','index.html','styles.css','app.js','manifest.webmanifest','icon.svg','career.json','estadistica.json','formulas.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return; // recursos externos: directo a la red
 e.respondWith(caches.match(r).then(h=>{
  const n=fetch(r).then(x=>{if(x.ok)caches.open(V).then(c=>c.put(r,x.clone()));return x}).catch(()=>h||caches.match('index.html'));
  return h||n}))});
