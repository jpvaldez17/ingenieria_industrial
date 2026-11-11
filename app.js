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
Object.assign(I,{bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>'});
const PAL=['#1d8fe0','#f97316','#16a34a','#e11d48','#7c3aed','#0d9488','#eab308','#db2777','#0ea5e9','#ef4444'];
const ic=(n,s=20,f='none')=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${f}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]||''}</svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const fmt=n=>typeof n==='number'?(+n.toFixed(4)).toLocaleString('es-BO',{maximumFractionDigits:4}):n;
const toggle=(a,k)=>{const i=a.indexOf(k);i<0?a.push(k):a.splice(i,1)};
/* x̄ (x con raya): Winky Sans no trae la raya, así que se dibuja con la letra del sistema para que quede bien pegada */
const fixM=h=>h.replace(/x\u0304/g,'<span class="xb">x\u0304</span>');
/* Materia actual (se elige en Mi carrera) */
const curId=()=>S.cur&&SUBJ()[S.cur]?S.cur:D.career.current;
const hexRGB=h=>{h=h.replace('#','');return[0,2,4].map(i=>parseInt(h.substr(i,2),16)).join(',')};
const ORD=['','Primer','Segundo','Tercer','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo'];
const semTxt=k=>{const m=D.career.semesters.find(x=>x.items.includes(k));return m?`${ORD[m.n]||m.n+'.º'} semestre`:''};
/* Colores de los números de semestre (sin rosado, violeta ni amarillo) */
const SEMC=['#2f9cf4','#22c55e','#f97316','#ef4444','#14b8a6','#22d3ee','#c58a5a','#84cc16','#38bdf8'];
const nf=()=>'<div class="empty">No encontrado. <a href="#/inicio"><b>Volver al inicio</b></a></div>';

/* ===== Almacenamiento local (IndexedDB): favoritos, progreso y archivos de la biblioteca ===== */
const db=new Promise((ok,ko)=>{const r=indexedDB.open('ii-upds',1);
 r.onupgradeneeded=()=>{r.result.createObjectStore('kv');r.result.createObjectStore('files',{keyPath:'id',autoIncrement:true})};
 r.onsuccess=()=>ok(r.result);r.onerror=ko});
const tx=async(s,m,f)=>{const d=await db;return new Promise((ok,ko)=>{const t=d.transaction(s,m),q=f(t.objectStore(s));t.oncomplete=()=>ok(q&&q.result);t.onerror=ko})};
const kvGet=k=>tx('kv','readonly',s=>s.get(k)),kvSet=(k,v)=>tx('kv','readwrite',s=>s.put(v,k));

/* ===== Estado y datos (los contenidos viven en /data/*.json) ===== */
let D={},S={favs:[],done:[],cur:null,notas:{},est:{},sc:{ok:0,bad:0}},tab='c',cat='pdf',fsub='estadistica';
const save=()=>{kvSet('favs',S.favs);kvSet('done',S.done);kvSet('sc',S.sc)};
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
  out.innerHTML=fixM(`<div class="res ok"><small>Resultado</small><strong>${fmt(r.r)} <span>${f.unit||''}</span></strong></div><h3>Procedimiento</h3><ol class="steps">${r.st.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`);
 }catch(e){out.innerHTML=`<div class="res bad">${esc(e.message)}</div>`}}

/* ===== Componentes ===== */
const row=(h,i,t,s,c)=>`<a class="row card" href="${h}" style="--c:${c}"><span class="bd">${ic(i,18)}</span><span>${esc(t)}<br><small>${s}</small></span>${ic('chevR',16)}</a>`;
const fcard=f=>`<a class="fc" href="#/calc/${f.id}" style="--c:${SUBJ()[f.subject].color}"><span class="bd">${ic(f.icon||'sigma',18)}</span><span class="ft"><b>${f.name}</b><code>${f.tex}</code></span>${ic('chevR',16)}</a>`;

/* ===== Pantallas ===== */
function home(){
 const cur=curId(),s=SUBJ()[cur],T=topics(cur),d=S.done.filter(x=>x.startsWith(cur+'/')).length,p=T.length?Math.round(d/T.length*100):0;
 const dt=D.career.datos[new Date().getDate()%D.career.datos.length],stand=matchMedia('(display-mode: standalone)').matches;
 const favs=S.favs.map(f=>{const[sid,tid]=f.split('/'),t=topics(sid).find(x=>x.id==tid);return t?`<a class="row" href="#/tema/${f}">${ic('bookmark',16)}<span>${esc(t.t)}</span>${ic('chevR',16)}</a>`:''}).join('');
 const tl=(h,c,hz,i,t,sb)=>`<a class="acc" href="${h}" style="--c:${c};--haz:${hz}"><span class="bd">${ic(i,22)}</span><span class="at"><b>${t}</b><small>${sb}</small></span></a>`;
 return `<div class="search"><a href="#/buscar">${ic('search')}<span>Buscar materia, tema, fórmula…</span></a>${stand?'':`<button data-act="inst">${ic('download',16)} Instalar</button>`}</div>
 <a class="card cur" href="#/materia/${cur}" style="--c:var(--tq)"><div class="r"><span><b>${s.name}</b> <small>· ${semTxt(cur)}</small></span>${ic('chevR',18)}</div><div class="bar"><i style="width:${p}%"></i></div><small>${T.length?`${d} de ${T.length} temas estudiados · ${p}%`:'Contenido próximamente'}</small></a>
 <div class="dato"><div class="dh"><span class="bd w">${ic('bulb',22)}</span><b>DATO DEL DÍA</b><a class="pillb" href="#/materia/${cur}">Más información ${ic('arrow',14)}</a></div><div class="db"><strong>${dt.t}</strong><p>${dt.p}</p></div></div>
 <h2 class="acch">${ic('grid',20)} ACCESOS DIRECTOS</h2>
 <div class="accs">${tl('#/materia/'+cur,'#1686c9','42,160,240',s.icon,s.short,D.sub[cur]?'Unidades y temas':'Próximamente')}${tl('#/formulario/'+cur,'#15965a','34,192,111','calc','Calculadoras','Fórmulas y cálculo')}${tl('#/biblioteca','#e67e00','255,122,0','lib','Biblioteca','PDF y apuntes')}${tl('#/carrera','#8b5e3c','185,28,40','cap','Mi carrera','Materias por semestre')}</div>
 ${favs?`<h2>Favoritos</h2><div class="card">${favs}</div>`:''}`}

/* Estado y nota de cada materia: lo que marques o escribas se guarda en este dispositivo */
const ESTS=[['aprobada','Aprobada'],['curso','En curso'],['pendiente','Pendiente']];
const estOf=k=>{const v=S.est[k]||SUBJ()[k].status;return ESTS.some(x=>x[0]==v)?v:'pendiente'};
const notaOf=k=>S.notas[k]!==undefined?S.notas[k]:(SUBJ()[k].nota??null);
const prom=ks=>{const v=ks.map(notaOf).filter(x=>x!=null&&!isNaN(x));return v.length?v.reduce((a,b)=>a+b,0)/v.length:null};
const fp=n=>n==null?'---':(+n.toFixed(1)).toLocaleString('es',{maximumFractionDigits:1});
const gpText=all=>{const n=all.filter(k=>notaOf(k)!=null).length,a=all.filter(k=>estOf(k)=='aprobada').length;return `${n} ${n==1?'materia':'materias'} con nota · ${a} ${a==1?'aprobada':'aprobadas'}`};
const OPEN=new Set();let openInit=false;
/* Actualiza los promedios en pantalla sin volver a dibujar todo (así no se pierde el cursor al escribir) */
const refreshAvg=()=>{D.career.semesters.forEach(sm=>{const el=document.querySelector(`details.sem[data-n="${sm.n}"] .avg b`);if(el)el.textContent=fp(prom(sm.items))});
 const all=Object.keys(SUBJ()),g=$('.gpn');if(g)g.textContent=fp(prom(all))};
function carrera(){
 if(!openInit){openInit=true;const m=D.career.semesters.find(x=>x.items.includes(curId()));if(m)OPEN.add(m.n)}
 const all=Object.keys(SUBJ());
 return `<div class="chead"><h1>Ingeniería Industrial</h1><div class="gpm" title="${gpText(all)}"><i>PROM. GENERAL</i><b class="gpn">${fp(prom(all))}</b></div></div><p class="muted">Marca el estado de cada materia, escribe tu nota y toca «Usar» para elegir tu materia actual.</p>
 <div class="leg"><span><i class="ld aprobada"></i>Aprobada</span><span><i class="ld curso"></i>En curso</span><span><i class="ld pendiente"></i>Pendiente</span></div>`+D.career.semesters.map(sm=>`<details class="card sem" data-n="${sm.n}" ${OPEN.has(sm.n)?'open':''}><summary><span class="num" style="color:${SEMC[(sm.n-1)%SEMC.length]}">${sm.n}</span>${ORD[sm.n]||sm.n+'.º'} Semestre<span class="avg"><i>PROM.</i><b>${fp(prom(sm.items))}</b></span><span class="cv">${ic('chevR',20)}</span></summary>${
  sm.items.map(k=>{const s=SUBJ()[k],on=k==curId(),e=estOf(k),n=notaOf(k);return `<div class="srow" style="--c:${s.color}"><div class="srt"><a class="row" href="#/materia/${k}"><span class="bd">${ic(s.icon,18)}</span><span>${s.name}</span>${s.data?ic('chevR',14):''}</a><button class="cbtn ${on?'on':''}" data-act="setcur" data-k="${k}">${on?'✓ Actual':'Usar'}</button></div><div class="srm">${ESTS.map(([v,t])=>`<button class="dt ${v} ${e==v?'on':''}" data-act="setst" data-k="${k}" data-v="${v}" title="${t}" aria-label="${t}"></button>`).join('')}<input class="nota" type="number" inputmode="decimal" min="0" max="100" step="any" placeholder="Nota" value="${n??''}" data-k="${k}" aria-label="Nota de ${s.name}"></div></div>`}).join('')}</details>`).join('')}

function materia(sid){
 const s=SUBJ()[sid],d=D.sub[sid];if(!s)return nf();
 if(!d)return `<a class="back" href="#/carrera">${ic('chevL')}Mi carrera</a><div class="thead" style="--c:${s.color}"><p class="eyebrow">${semTxt(sid)}</p><h1>${s.name}</h1></div><div class="empty">Contenido próximamente.<br><small>Se activa subiendo <code>${sid}.json</code> y agregando <code>"data": "${sid}"</code> a esta materia en career.json.</small></div>`;
 const T=topics(sid),n=S.done.filter(x=>x.startsWith(sid+'/')).length,p=T.length?Math.round(n/T.length*100):0;
 return `<a class="back" href="#/carrera">${ic('chevL')}Mi carrera</a>
 <div class="thead" style="--c:${s.color}"><p class="eyebrow">${semTxt(sid)}</p><h1>${s.name}</h1><p>${s.desc}</p><div class="bar"><i style="width:${p}%"></i></div><small style="color:#9fb4d3">${p}% de avance · ${n}/${T.length} temas</small></div>
 <h2>Unidades temáticas</h2>`+d.units.map(u=>`<details class="card unit" style="--c:${PAL[(u.n-1)%10]}" ${u.n==1?'open':''}><summary><span class="num">${u.n}</span>${u.title}<span class="muted">${u.topics.length}</span></summary>${
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
 fsub=(a&&SUBJ()[a])?a:curId();const s=SUBJ()[fsub],fs=D.formulas.filter(f=>f.subject==fsub),cats=[...new Set(fs.map(f=>f.cat))];
 return `<h1>Formulario</h1><p class="muted">Fórmulas y calculadoras por materia.</p>
 <div class="chips">${Object.entries(SUBJ()).filter(([k,v])=>v.data||k==fsub||D.formulas.some(f=>f.subject==k)).map(([k,v])=>`<a class="chip ${k==fsub?'on':''}" href="#/formulario/${k}" style="--c:${v.color}">${ic(v.icon,14)}${v.short}</a>`).join('')}</div>
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
 <label>Materia<select id="fs">${D.career.semesters.map(sm=>`<optgroup label="Semestre ${sm.n}">${sm.items.map(k=>`<option value="${k}">${SUBJ()[k].name}</option>`).join('')}</optgroup>`).join('')}</select></label>
 <label>Unidad / tema (opcional)<input id="fu"></label><button class="btn" data-act="addf">${ic('plus',18)} Guardar en el dispositivo</button></div>`}

function results(q){
 q=norm(q.trim());if(q.length<2)return'<p class="muted">Escribe al menos 2 letras.</p>';const o=[];
 for(const[k,s]of Object.entries(SUBJ()))if(norm(s.name).includes(q))o.push(row(`#/materia/${k}`,s.icon,s.name,'Materia',s.color));
 for(const k in D.sub)for(const t of topics(k))if(norm(t.t).includes(q))o.push(row(`#/tema/${k}/${t.id}`,'book',t.t,`Tema ${t.u.n}.${t.i}`,SUBJ()[k].color));
 D.formulas.forEach(f=>{if(norm(f.name+' '+f.cat+' '+f.short).includes(q))o.push(row(`#/calc/${f.id}`,'calc',f.name,'Fórmula',SUBJ()[f.subject].color))});
 return o.join('')||'<p class="muted">Sin resultados.</p>'}
const buscar=()=>`<div class="searchbox">${ic('search')}<input id="q" placeholder="Materias, temas, fórmulas…" autocomplete="off"></div><div id="res"><p class="muted">Escribe al menos 2 letras.</p></div>`;

/* ===== Router (hash): #/inicio #/carrera #/materia/id #/tema/id/tid #/biblioteca #/formulario/id #/calc/id #/buscar ===== */
async function render(){
 const[r,a,b]=location.hash.slice(2).split('/'),route=r||'inicio';
 const V={inicio:home,carrera,biblioteca,formulario:()=>formulario(a),materia:()=>materia(a),tema:()=>tema(a,b),calc:()=>calc(a),buscar};
 app.innerHTML=fixM(await (V[route]||home)());
 const act={materia:'carrera',tema:'carrera',calc:'formulario',buscar:'inicio'}[route]||route;
 document.querySelectorAll('nav a').forEach(n=>n.classList.toggle('on',n.dataset.r==act));
 if(route=='buscar'){const q=$('#q');q.focus();q.oninput=()=>$('#res').innerHTML=results(q.value)}}
window.addEventListener('hashchange',()=>{tab='c';scrollTo(0,0);render()});

document.addEventListener('click',async e=>{
 const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,d=b.dataset;
 if(a=='fav'){toggle(S.favs,d.k);save();render()}
 else if(a=='done'){toggle(S.done,d.k);save();render()}
 else if(a=='setst'){S.est[d.k]=d.v;kvSet('est',S.est);[...b.parentNode.querySelectorAll('.dt')].forEach(x=>x.classList.toggle('on',x==b));refreshAvg()}
 else if(a=='setcur'){S.cur=d.k;kvSet('cur',S.cur);render()}
 else if(a=='tab'){tab=d.t;render()}
 else if(a=='cat'){cat=d.c;render()}
 else if(a=='calc')runCalc(d.f);
 else if(a=='inst'){if(ip){ip.prompt();await ip.userChoice;ip=null}else alert('Para instalar: menú ⋮ de Chrome → "Instalar app" o "Agregar a la pantalla de inicio".')}
 else if(a=='ans'){[...b.parentNode.children].forEach((x,i)=>{x.disabled=true;if(i==+d.a)x.classList.add('ok')});const ok=+d.i==+d.a,hoy=new Date().toDateString();
  if(!ok)b.classList.add('bad');if(S.sc.day!==hoy){S.sc.day=hoy;ok?S.sc.ok++:S.sc.bad++;save();$('.sc').innerHTML=`<i class="g">✓ ${S.sc.ok}</i><i class="r">✕ ${S.sc.bad}</i>`}}
 else if(a=='addf'){const f=$('#fi').files[0];if(!f)return alert('Selecciona un archivo primero.');
  await tx('files','readwrite',s=>s.add({cat,subject:$('#fs').value,unit:$('#fu').value.trim(),title:f.name,blob:f,date:Date.now()}));render()}
 else if(a=='open'){const r=await tx('files','readonly',s=>s.get(+d.id));if(r)window.open(URL.createObjectURL(r.blob),'_blank')}
 else if(a=='del'){if(confirm('¿Eliminar este archivo del dispositivo?')){await tx('files','readwrite',s=>s.delete(+d.id));render()}}});

document.addEventListener('change',e=>{const i=e.target;if(!i.classList||!i.classList.contains('nota'))return;
 let n=i.value.trim()===''?null:parseFloat(i.value.replace(',','.'));if(n!=null&&isNaN(n))n=null;
 if(n!=null){n=Math.min(100,Math.max(0,n));i.value=n}
 S.notas[i.dataset.k]=n;kvSet('notas',S.notas);refreshAvg()});
document.addEventListener('toggle',e=>{const d=e.target;if(d.matches&&d.matches('details.sem')){const n=+d.dataset.n;d.open?OPEN.add(n):OPEN.delete(n)}},true);

/* ===== Arranque, estado de conexión y PWA ===== */
document.querySelectorAll('[data-i]').forEach(n=>n.innerHTML=ic(n.dataset.i,+n.dataset.s||22));
(async()=>{
 const j=async u=>(await fetch(u)).json();
 try{D.career=await j('career.json');D.formulas=await j('formulas.json');D.sub={};
  for(const[k,s]of Object.entries(D.career.subjects))if(s.data){try{D.sub[k]=await j(`${s.data}.json`)}catch(e){}}
  S.favs=(await kvGet('favs'))||[];S.done=(await kvGet('done'))||[];S.sc=(await kvGet('sc'))||S.sc;S.cur=(await kvGet('cur'))||null;S.notas=(await kvGet('notas'))||{};S.est=(await kvGet('est'))||{};render()}
 catch(e){app.innerHTML='<div class="empty">No se pudieron cargar los datos. Abre la app desde un servidor (no con doble clic) o conéctate una vez a internet.</div>'}})();
if('serviceWorker'in navigator){const had=navigator.serviceWorker.controller;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(had)location.reload()});
 addEventListener('load',()=>navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}))}

/* Instalación PWA: guarda el evento para el botón Instalar de Inicio */
let ip;addEventListener('beforeinstallprompt',e=>{e.preventDefault();ip=e});
