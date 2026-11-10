'use strict';
/* ===== Utilidades e iconos (estilo Lucide, SVG en línea: funcionan sin conexión) ===== */
const $=s=>document.querySelector(s),app=$('#app');
const I={home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
cap:'<path d="M21.42 10.92a1 1 0 0 0 0-1.84l-8.59-3.9a2 2 0 0 0-1.66 0l-8.57 3.9a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
lib:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
calc:'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',chevR:'<path d="m9 18 6-6-6-6"/>',chevL:'<path d="m15 18-6-6 6-6"/>',
bookmark:'<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
sigma:'<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>',
chart:'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
flask:'<path d="M10 2v7.53a2 2 0 0 1-.21.9L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14.21 10.43A2 2 0 0 1 14 9.53V2"/><path d="M8.5 2h7"/>',
file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
clip:'<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
off:'<path d="M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M5 12.86a10 10 0 0 1 5.17-2.69M19 12.86a10 10 0 0 0-2-1.52M2 8.82a15 15 0 0 1 4.18-2.64M22 8.82a15 15 0 0 0-11.29-3.76"/><path d="m2 2 20 20"/>',
plus:'<path d="M5 12h14M12 5v14"/>',trash:'<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
list:'<path d="M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"/>',check:'<path d="M20 6 9 17l-5-5"/>',
book:'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>'};
const ic=(n,s=20,f='none')=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${f}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]||''}</svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const fmt=n=>typeof n==='number'?(+n.toFixed(4)).toLocaleString('es-BO',{maximumFractionDigits:4}):n;
const toggle=(a,k)=>{const i=a.indexOf(k);i<0?a.push(k):a.splice(i,1)};
const nf=()=>'<div class="empty">No encontrado. <a href="#/inicio"><b>Volver al inicio</b></a></div>';

/* ===== Almacenamiento local (IndexedDB): favoritos, progreso y archivos de la biblioteca ===== */
const db=new Promise((ok,ko)=>{const r=indexedDB.open('ii-upds',1);
 r.onupgradeneeded=()=>{r.result.createObjectStore('kv');r.result.createObjectStore('files',{keyPath:'id',autoIncrement:true})};
 r.onsuccess=()=>ok(r.result);r.onerror=ko});
const tx=async(s,m,f)=>{const d=await db;return new Promise((ok,ko)=>{const t=d.transaction(s,m),q=f(t.objectStore(s));t.oncomplete=()=>ok(q&&q.result);t.onerror=ko})};
const kvGet=k=>tx('kv','readonly',s=>s.get(k)),kvSet=(k,v)=>tx('kv','readwrite',s=>s.put(v,k));

/* ===== Estado y datos (los contenidos viven en /data/*.json) ===== */
let D={},S={favs:[],done:[]},tab='c',cat='pdf',fsub='estadistica';
const save=()=>{kvSet('favs',S.favs);kvSet('done',S.done)};
const topics=sid=>(D.sub[sid]?.units||[]).flatMap(u=>u.topics.map((t,i)=>({id:`u${u.n}t${i+1}`,t,u,i:i+1,sid})));
const SUBJ=()=>D.career.subjects;

/* ===== Lógica de calculadoras ===== */
const sum=a=>a.reduce((s,v)=>s+v,0),mean=a=>sum(a)/a.length;
const vr=a=>{const m=mean(a),d=a.map(v=>(v-m)**2);return{m,d,s:sum(d),v:sum(d)/a.length}};
const F={
media:a=>({r:mean(a),st:[`Σxᵢ = ${a.join(' + ')} = ${fmt(sum(a))}`,`n = ${a.length}`,`x̄ = ${fmt(sum(a))} / ${a.length}`]}),
mediana:a=>{const b=[...a].sort((x,y)=>x-y),n=b.length,m=n%2?b[(n-1)/2]:(b[n/2-1]+b[n/2])/2;
 return{r:m,st:[`Datos ordenados: ${b.join(', ')}`,`n = ${n} (${n%2?'impar: dato central':'par: promedio de los dos centrales'})`,`Me = ${fmt(m)}`]}},
moda:a=>{const c={};a.forEach(v=>c[v]=(c[v]||0)+1);const mx=Math.max(...Object.values(c)),m=Object.keys(c).filter(k=>c[k]==mx);
 return{r:mx==1?'Sin moda':m.join(', '),st:[`Frecuencias: ${Object.entries(c).map(([k,v])=>`${k}→${v}`).join(', ')}`,`Frecuencia máxima = ${mx}`]}},
varianza:a=>{const q=vr(a);return{r:q.v,st:[`x̄ = ${fmt(q.m)}`,`Σ(xᵢ − x̄)² = ${q.d.map(fmt).join(' + ')} = ${fmt(q.s)}`,`σ² = ${fmt(q.s)} / ${a.length} (varianza poblacional)`]}},
desv:a=>{const q=vr(a);return{r:Math.sqrt(q.v),st:[`x̄ = ${fmt(q.m)}`,`σ² = ${fmt(q.v)}`,`σ = √${fmt(q.v)}`]}},
cv:a=>{const q=vr(a),s=Math.sqrt(q.v);if(!q.m)throw Error('La media es 0: el CV no está definido.');
 return{r:s/Math.abs(q.m)*100,st:[`x̄ = ${fmt(q.m)}`,`σ = ${fmt(s)}`,`CV = ${fmt(s)} / ${fmt(Math.abs(q.m))} × 100`]}}};
function runCalc(id){
 const f=D.formulas.find(x=>x.id==id),out=$('#out'),ins=[...app.querySelectorAll('[data-v]')];
 try{let r;
  if(f.fn){const a=ins[0].value.split(/[;,\s]+/).filter(Boolean).map(Number);
   if(!a.length||a.some(isNaN))throw Error('Ingresa números separados por comas (usa punto como decimal).');r=F[f.fn](a)}
  else{const ids=f.vars.map(v=>v.id),vals=ins.map(i=>parseFloat(i.value.replace(',','.')));
   if(vals.some(isNaN))throw Error('Completa todos los campos con números.');
   const x=new Function(...ids,'return '+f.expr)(...vals);if(!isFinite(x))throw Error('Resultado no definido (revisa divisiones entre cero).');
   r={r:x,st:[f.tex,`Sustituyendo: ${f.expr.replace(/[A-Za-z]+/g,m=>vals[ids.indexOf(m)]??m)}`,`Resultado = ${fmt(x)} ${f.unit}`]}}
  out.innerHTML=`<div class="res ok"><small>Resultado</small><strong>${fmt(r.r)} <span>${f.unit||''}</span></strong></div><h3>Procedimiento</h3><ol class="steps">${r.st.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`;
 }catch(e){out.innerHTML=`<div class="res bad">${esc(e.message)}</div>`}}

/* ===== Componentes ===== */
const row=(h,i,t,s,c)=>`<a class="row card" href="${h}" style="--c:${c}">${ic(i,18)}<span>${esc(t)}<br><small>${s}</small></span>${ic('chevR',16)}</a>`;
const fcard=f=>`<a class="fc" href="#/calc/${f.id}" style="--c:${SUBJ()[f.subject].color}"><span class="fi">${ic(f.icon||'sigma',18)}</span><span class="ft"><b>${f.name}</b><code>${f.tex}</code></span>${ic('chevR',16)}</a>`;

/* ===== Pantallas ===== */
function home(){
 const cur=D.career.current,s=SUBJ()[cur],T=topics(cur),d=S.done.filter(x=>x.startsWith(cur+'/')).length,p=T.length?Math.round(d/T.length*100):0;
 const day=new Date().getDate(),dt=D.career.datos[day%D.career.datos.length],ch=D.career.desafios[day%D.career.desafios.length];
 const favs=S.favs.map(f=>{const[sid,tid]=f.split('/'),t=topics(sid).find(x=>x.id==tid);return t?`<a class="row" href="#/tema/${f}">${ic('bookmark',16)}<span>${esc(t.t)}</span>${ic('chevR',16)}</a>`:''}).join('');
 return `<section class="hero"><p class="eyebrow">Bienvenido a tu espacio académico</p><h1>Aprende. Practica. Aplica.</h1><a class="search" href="#/buscar">${ic('search')}<span>Buscar materias, temas, fórmulas…</span></a></section>
 <h2>Mi semestre <span class="pill desarrollo">Segundo semestre</span></h2>
 <a class="card" href="#/materia/${cur}" style="--c:${s.color}"><div class="r"><b>${s.name}</b>${ic('chevR',18)}</div><div class="bar"><i style="width:${p}%"></i></div><small>${d} de ${T.length} temas estudiados · ${p}%</small></a>
 <div class="card tip"><b>Dato del día</b><p>${dt}</p></div>
 <div class="card"><b>Desafío breve</b><p style="margin:4px 0">${ch.q}</p><div class="opts">${ch.o.map((o,i)=>`<button data-act="ans" data-i="${i}" data-a="${ch.a}">${o}</button>`).join('')}</div></div>
 <div class="tiles"><a class="tile" href="#/formulario">${ic('calc')}Calculadoras</a><a class="tile" href="#/biblioteca">${ic('lib')}Biblioteca</a></div>
 ${favs?`<h2>Favoritos</h2><div class="card">${favs}</div>`:''}`}

function carrera(){
 const st={disponible:'Disponible',desarrollo:'En desarrollo',pendiente:'Pendiente'};
 return `<h1>Mi carrera</h1><p class="muted">Materias por semestre.</p>`+D.career.semesters.map(sm=>`<details class="card sem" ${sm.items.length?'open':''}><summary><span class="num">${sm.n}</span>Semestre ${sm.n}<span class="muted">${sm.items.length?sm.items.length+' materias':'Sin materias'}</span></summary>${
  sm.items.map(k=>{const s=SUBJ()[k];return `<a class="row" ${s.data?`href="#/materia/${k}"`:''} style="--c:${s.color}">${ic(s.icon,18)}<span>${s.name}</span><em class="pill ${s.status}">${st[s.status]}</em></a>`}).join('')}</details>`).join('')}

function materia(sid){
 const s=SUBJ()[sid],d=D.sub[sid];if(!s)return nf();
 if(!d)return `<a class="back" href="#/carrera">${ic('chevL')}Mi carrera</a><div class="empty">${s.name}: aún sin contenido.</div>`;
 const T=topics(sid),n=S.done.filter(x=>x.startsWith(sid+'/')).length,p=T.length?Math.round(n/T.length*100):0;
 return `<a class="back" href="#/carrera">${ic('chevL')}Mi carrera</a>
 <div class="thead" style="--c:${s.color}"><p class="eyebrow">Segundo semestre</p><h1>${s.name}</h1><p>${s.desc}</p><div class="bar"><i style="width:${p}%"></i></div><small style="color:#9fb4d3">${p}% de avance · ${n}/${T.length} temas</small></div>
 <h2>Unidades temáticas</h2>`+d.units.map(u=>`<details class="card unit" ${u.n==1?'open':''}><summary><span class="num">${u.n}</span>${u.title}<span class="muted">${u.topics.length}</span></summary>${
  u.topics.map((t,i)=>{const id=`u${u.n}t${i+1}`;return `<a class="row" href="#/tema/${sid}/${id}"><span class="idx">${u.n}.${i+1}</span><span>${t}</span>${S.done.includes(sid+'/'+id)?ic('check',16):''}${ic('chevR',16)}</a>`}).join('')}</details>`).join('')}

function tema(sid,tid){
 const s=SUBJ()[sid],T=topics(sid),k=T.findIndex(x=>x.id==tid);if(k<0)return nf();
 const t=T[k],c=D.sub[sid].content?.[tid]||{},key=`${sid}/${tid}`,fav=S.favs.includes(key),dn=S.done.includes(key);
 const tabs=[['c','Contenido','book'],['r','Resumen','list'],['f','Fórmulas','sigma'],['e','Ejemplos','clip']];
 const lst=a=>`<ul class="chk">${a.map(i=>`<li>${i}</li>`).join('')}</ul>`,emp=m=>`<div class="empty">${m}</div>`;
 let p;
 if(tab=='c')p=c.sections?(c.demo?'<p class="note">Texto de demostración propio; no proviene de los libros.</p>':'')+c.sections.map(x=>`<section class="sec"><h3>${x.h}</h3>${x.p?`<p>${x.p}</p>`:''}${x.l?lst(x.l):''}</section>`).join('')
  :emp(`Plantilla lista. Agrega el contenido en <code>${sid}.json</code> → <code>content.${tid}</code>.`);
 if(tab=='c')p+=`<button class="btn ghost" data-act="done" data-k="${key}">${dn?'Estudiado ✓ (quitar)':'Marcar como estudiado'}</button>`;
 if(tab=='r')p=c.resumen?`<section class="sec">${lst(c.resumen)}</section>`:emp('Sin resumen todavía.');
 if(tab=='f'){const fs=(c.formulas||[]).map(id=>D.formulas.find(f=>f.id==id)).filter(Boolean);
  p=fs.length?fs.map(f=>`<div class="card"><div class="tex">${f.tex}</div><ul class="vars">${f.vars.map(v=>`<li><b>${v.id}</b>${v.meaning}</li>`).join('')}</ul>${fcard(f)}</div>`).join(''):emp('Este tema no tiene fórmulas asociadas.')}
 if(tab=='e')p=c.ejemplos?c.ejemplos.map(x=>`<div class="card"><b>${x.t}</b><p>${x.q}</p><ol class="steps">${x.s.map(i=>`<li>${i}</li>`).join('')}</ol><p><b>Respuesta: ${x.a}</b></p></div>`).join(''):emp('Sin ejemplos todavía.');
 return `<div class="thead"><div class="r"><a class="icb" href="#/materia/${sid}" aria-label="Índice">${ic('chevL')}</a><span class="eyebrow">${s.name}</span><button class="icb" data-act="fav" data-k="${key}" aria-label="Favorito">${ic('bookmark',20,fav?'currentColor':'none')}</button></div>
 <p class="eyebrow" style="margin-top:10px">Unidad ${t.u.n} · ${t.u.title}</p><h1>${t.u.n}.${t.i} ${t.t}</h1></div>
 <div class="tabs">${tabs.map(([k,n,i])=>`<button class="tab ${tab==k?'on':''}" data-act="tab" data-t="${k}">${ic(i,14)}${n}</button>`).join('')}</div>${p}
 <div class="nav2">${k>0?`<a href="#/tema/${sid}/${T[k-1].id}">${ic('chevL',16)}Anterior</a>`:'<span>Anterior</span>'}<a href="#/materia/${sid}">${ic('list',16)}Índice</a>${k<T.length-1?`<a class="pri" href="#/tema/${sid}/${T[k+1].id}">Siguiente${ic('chevR',16)}</a>`:'<span>Siguiente</span>'}</div>`}

function formulario(a){
 if(a&&SUBJ()[a])fsub=a;const s=SUBJ()[fsub],fs=D.formulas.filter(f=>f.subject==fsub),cats=[...new Set(fs.map(f=>f.cat))];
 return `<h1>Formulario</h1><p class="muted">Fórmulas y calculadoras por materia.</p>
 <div class="chips">${Object.entries(SUBJ()).map(([k,v])=>`<a class="chip ${k==fsub?'on':''}" href="#/formulario/${k}" style="--c:${v.color}">${ic(v.icon,14)}${v.short}</a>`).join('')}</div>
 ${fs.length?cats.map(c=>`<h3>${c}</h3><div class="grid2">${fs.filter(f=>f.cat==c).map(fcard).join('')}</div>`).join(''):`<div class="empty">${s.name}: fórmulas próximamente.</div>`}`}

function calc(id){
 const f=D.formulas.find(x=>x.id==id);if(!f)return nf();const s=SUBJ()[f.subject];
 return `<a class="back" href="#/formulario/${f.subject}">${ic('chevL')}Formulario</a><div class="card" style="--c:${s.color}"><p class="eyebrow">${s.short} · ${f.cat}</p><h1>${f.name}</h1><div class="tex">${f.tex}</div>
 <h3>Variables</h3><ul class="vars">${f.vars.map(v=>`<li><b>${v.id}</b>${v.meaning}</li>`).join('')}</ul><h3>Datos</h3>
 ${f.vars.map(v=>`<label>${v.label}<input data-v ${v.list?'placeholder="Ej.: 12, 15, 18, 20, 25"':'inputmode="decimal" placeholder="0"'}></label>`).join('')}
 <button class="btn" data-act="calc" data-f="${f.id}">${ic('calc',18)} Calcular</button><div id="out"></div></div>`}

async function biblioteca(){
 const all=await tx('files','readonly',s=>s.getAll()),C=[['pdf','PDF','file'],['foto','Apuntes','image'],['eval','Evaluaciones','clip']],L=all.filter(x=>x.cat==cat).sort((a,b)=>b.date-a.date);
 return `<h1>Biblioteca</h1><p class="muted">Tus archivos se guardan en este dispositivo y se abren sin conexión.</p>
 <div class="tabs">${C.map(([k,n,i])=>`<button class="tab ${cat==k?'on':''}" data-act="cat" data-c="${k}">${ic(i,14)}${n}</button>`).join('')}</div>
 ${L.length?L.map(x=>`<div class="card"><div class="r2"><div><b>${esc(x.title)}</b><br><small>${esc(SUBJ()[x.subject]?.short||'')}${x.unit?' · '+esc(x.unit):''}</small></div><button class="btn sm" data-act="open" data-id="${x.id}">Abrir</button><button class="btn ghost sm" data-act="del" data-id="${x.id}" aria-label="Eliminar">${ic('trash',16)}</button></div></div>`).join(''):'<div class="empty">Aún no hay archivos en esta categoría.</div>'}
 <div class="card"><h3 style="margin-top:0">Añadir archivo</h3><input type="file" id="fi" accept="${cat=='foto'?'image/*':'application/pdf,image/*'}">
 <label>Materia<select id="fs">${Object.entries(SUBJ()).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join('')}</select></label>
 <label>Unidad / tema (opcional)<input id="fu"></label><button class="btn" data-act="addf">${ic('plus',18)} Guardar en el dispositivo</button></div>`}

function results(q){
 q=norm(q.trim());if(q.length<2)return'<p class="muted">Escribe al menos 2 letras.</p>';const o=[];
 for(const[k,s]of Object.entries(SUBJ()))if(norm(s.name).includes(q))o.push(row(s.data?`#/materia/${k}`:'#/carrera',s.icon,s.name,'Materia',s.color));
 for(const k in D.sub)for(const t of topics(k))if(norm(t.t).includes(q))o.push(row(`#/tema/${k}/${t.id}`,'book',t.t,`Tema ${t.u.n}.${t.i}`,SUBJ()[k].color));
 D.formulas.forEach(f=>{if(norm(f.name+' '+f.cat+' '+f.short).includes(q))o.push(row(`#/calc/${f.id}`,'calc',f.name,'Fórmula',SUBJ()[f.subject].color))});
 return o.join('')||'<p class="muted">Sin resultados.</p>'}
const buscar=()=>`<div class="searchbox">${ic('search')}<input id="q" placeholder="Materias, temas, fórmulas…" autocomplete="off"></div><div id="res"><p class="muted">Escribe al menos 2 letras.</p></div>`;

/* ===== Router (hash): #/inicio #/carrera #/materia/id #/tema/id/tid #/biblioteca #/formulario/id #/calc/id #/buscar ===== */
async function render(){
 const[r,a,b]=location.hash.slice(2).split('/'),route=r||'inicio';
 const V={inicio:home,carrera,biblioteca,formulario:()=>formulario(a),materia:()=>materia(a),tema:()=>tema(a,b),calc:()=>calc(a),buscar};
 app.innerHTML=await (V[route]||home)();
 const act={materia:'carrera',tema:'carrera',calc:'formulario',buscar:'inicio'}[route]||route;
 document.querySelectorAll('nav a').forEach(n=>n.classList.toggle('on',n.dataset.r==act));
 if(route=='buscar'){const q=$('#q');q.focus();q.oninput=()=>$('#res').innerHTML=results(q.value)}}
window.addEventListener('hashchange',()=>{tab='c';scrollTo(0,0);render()});

document.addEventListener('click',async e=>{
 const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,d=b.dataset;
 if(a=='fav'){toggle(S.favs,d.k);save();render()}
 else if(a=='done'){toggle(S.done,d.k);save();render()}
 else if(a=='tab'){tab=d.t;render()}
 else if(a=='cat'){cat=d.c;render()}
 else if(a=='calc')runCalc(d.f);
 else if(a=='ans'){const g=b.parentNode.children;[...g].forEach((x,i)=>{x.disabled=true;if(i==+d.a)x.classList.add('ok')});if(+d.i!=+d.a)b.classList.add('bad')}
 else if(a=='addf'){const f=$('#fi').files[0];if(!f)return alert('Selecciona un archivo primero.');
  await tx('files','readwrite',s=>s.add({cat,subject:$('#fs').value,unit:$('#fu').value.trim(),title:f.name,blob:f,date:Date.now()}));render()}
 else if(a=='open'){const r=await tx('files','readonly',s=>s.get(+d.id));if(r)window.open(URL.createObjectURL(r.blob),'_blank')}
 else if(a=='del'){if(confirm('¿Eliminar este archivo del dispositivo?')){await tx('files','readwrite',s=>s.delete(+d.id));render()}}});

/* ===== Arranque, estado de conexión y PWA ===== */
const net=()=>$('#net').hidden=navigator.onLine;
addEventListener('online',net);addEventListener('offline',net);
document.querySelectorAll('[data-i]').forEach(n=>n.innerHTML=ic(n.dataset.i,+n.dataset.s||22));
(async()=>{
 const j=async u=>(await fetch(u)).json();
 try{D.career=await j('career.json');D.formulas=await j('formulas.json');D.sub={};
  for(const[k,s]of Object.entries(D.career.subjects))if(s.data)D.sub[k]=await j(`${s.data}.json`);
  S.favs=(await kvGet('favs'))||[];S.done=(await kvGet('done'))||[];net();render()}
 catch(e){app.innerHTML='<div class="empty">No se pudieron cargar los datos. Abre la app desde un servidor (no con doble clic) o conéctate una vez a internet.</div>'}})();
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
