// Service Worker v3: red primero (siempre ve la versión nueva si hay internet) y caché de respaldo (offline).
const V='ii-upds-v5',A=['./','index.html','styles.css','app.js','manifest.webmanifest','icon.svg','logo-gear.png','logo-upds.png','career.json','estadistica.json','formulas.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r,{cache:'no-cache'}).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(h=>h.put(r,c))}return x})
  .catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))))});
