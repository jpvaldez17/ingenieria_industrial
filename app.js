'use strict';
/* ===== Utilidades e iconos (estilo Lucide, SVG en línea: funcionan sin conexión) ===== */
const $=s=>document.querySelector(s),app=$('#app');
const I={home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
cap:'<path d="M21.42 10.92a1 1 0 0 0 0-1.84l-8.59-3.9a2 2 0 0 0-1.66 0l-8.57 3.9a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
lib:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
calc:'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',chevR:'<path d="m9 18 6-6-6-6"/>',chevL:'<path d="m15 18-6-6 6-6"/>',
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
Object.assign(I,{gear:'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',ext:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',bookopen:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',download:'<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>'});
const PAL=['#1d8fe0','#f97316','#16a34a','#e11d48','#7c3aed','#0d9488','#eab308','#db2777','#0ea5e9','#ef4444'];
const ic=(n,s=20,f='none')=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${f}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]||''}</svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const fmt=n=>typeof n==='number'?(+n.toFixed(4)).toLocaleString('es-BO',{maximumFractionDigits:4}):n;
const toggle=(a,k)=>{const i=a.indexOf(k);i<0?a.push(k):a.splice(i,1)};
/* x̄ (x con raya): Winky Sans no trae la raya, así que se dibuja con la letra del sistema para que quede bien pegada */
const fixM=h=>h.replace(/([xy])\u0304/g,'<span class="xb">$1\u0304</span>');
/* Materia actual (se elige en Mi carrera) */
const curId=()=>S.cur&&SUBJ()[S.cur]?S.cur:D.career.current;
const hexRGB=h=>{h=h.replace('#','');return[0,2,4].map(i=>parseInt(h.substr(i,2),16)).join(',')};
const ORD=['','Primer','Segundo','Tercer','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo'];
const semTxt=k=>{const m=D.career.semesters.find(x=>x.items.includes(k));return m?`${ORD[m.n]||m.n+'.º'} semestre`:''};
/* Colores de los números de semestre (sin rosado, violeta ni amarillo) */
const SEMC=['#2f9cf4','#22c55e','#f97316','#ef4444','#14b8a6','#22d3ee','#c58a5a','#84cc16','#38bdf8'];
/* Colores de las pastillas de materias (sin rosado ni amarillo) */
const PIL=['#1d6fe0','#16a34a','#ea580c','#dc2626','#0d9488','#8b5e3c'];
const nf=()=>'<div class="empty">No encontrado. <a href="#/inicio"><b>Volver al inicio</b></a></div>';

/* ===== Almacenamiento local (IndexedDB): favoritos, progreso y archivos de la biblioteca ===== */
const db=new Promise((ok,ko)=>{const r=indexedDB.open('ii-upds',1);
 r.onupgradeneeded=()=>{r.result.createObjectStore('kv');r.result.createObjectStore('files',{keyPath:'id',autoIncrement:true})};
 r.onsuccess=()=>ok(r.result);r.onerror=ko});
const tx=async(s,m,f)=>{const d=await db;return new Promise((ok,ko)=>{const t=d.transaction(s,m),q=f(t.objectStore(s));t.oncomplete=()=>ok(q&&q.result);t.onerror=ko})};
const kvGet=k=>tx('kv','readonly',s=>s.get(k)),kvSet=(k,v)=>tx('kv','readwrite',s=>s.put(v,k));

/* ===== Estado y datos (los contenidos viven en /data/*.json) ===== */
let D={},S={favs:[],done:[],misf:[],cur:null,notas:{},est:{},sc:{ok:0,bad:0}},tab='c',cat='pdf',fsub='estadistica';
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
 return{r:mx==1?'Sin moda':m.join(', '),st:[`Frecuencias: ${Object.entries(c).map(([k,v])=>`${k}→${v}`).join(', ')}`,`Frecuencia máxima = ${mx}`]}}
};
const chkN=(a,m)=>{if(a.length<m)throw Error(`Se necesitan al menos ${m} datos.`)};
const xyS=(x,y)=>{if(x.length!=y.length)throw Error('X e Y deben tener la misma cantidad de datos.');chkN(x,2);const mx=mean(x),my=mean(y);let sxy=0,sxx=0,syy=0;x.forEach((v,i)=>{sxy+=(v-mx)*(y[i]-my);sxx+=(v-mx)**2;syy+=(y[i]-my)**2});return{mx,my,sxy,sxx,syy}};
Object.assign(F,{
varianza:a=>{chkN(a,2);const q=vr(a),v=q.s/(a.length-1);return{r:v,st:[`x̄ = ${fmt(q.m)}`,`Σ(xᵢ − x̄)² = ${q.d.map(fmt).join(' + ')} = ${fmt(q.s)}`,`s² = ${fmt(q.s)} / ${a.length-1} (varianza muestral, n − 1)`]}},
desv:a=>{chkN(a,2);const q=vr(a),v=q.s/(a.length-1);return{r:Math.sqrt(v),st:[`x̄ = ${fmt(q.m)}`,`s² = ${fmt(q.s)} / ${a.length-1} = ${fmt(v)}`,`s = √${fmt(v)}`]}},
cv:a=>{chkN(a,2);const q=vr(a),s=Math.sqrt(q.s/(a.length-1));if(!q.m)throw Error('La media es 0: el CV no está definido.');
 return{r:s/Math.abs(q.m)*100,st:[`x̄ = ${fmt(q.m)}`,`s = ${fmt(s)}`,`CV = ${fmt(s)} / ${fmt(Math.abs(q.m))} × 100`]}},
mediaAgr:(x,f)=>{if(x.length!=f.length)throw Error('Las dos listas deben tener la misma cantidad de datos.');const n=sum(f);if(!n)throw Error('La suma de frecuencias es 0.');const sx=sum(x.map((v,i)=>v*f[i]));
 return{r:sx/n,st:[`n = Σfᵢ = ${fmt(n)}`,`Σ fᵢ·xᵢ = ${x.map((v,i)=>`${fmt(f[i])}·${fmt(v)}`).join(' + ')} = ${fmt(sx)}`,`x̄ = ${fmt(sx)} / ${fmt(n)}`]}},
nProp:(Z,p,e)=>{if(!(p>0&&p<1))throw Error('p debe estar entre 0 y 1 (ej. 0,5).');if(!(e>0))throw Error('El error e debe ser mayor que 0.');const q=1-p,n0=Z*Z*p*q/(e*e);
 return{r:Math.ceil(n0),st:[`q = 1 − p = ${fmt(q)}`,`n₀ = Z²·p·q / e² = ${fmt(Z*Z)} · ${fmt(p)} · ${fmt(q)} / ${fmt(e*e)} = ${fmt(n0)}`,`Se redondea hacia arriba: n₀ = ${Math.ceil(n0)}`]}},
nFin:(N,Z,p,e)=>{if(!(p>0&&p<1))throw Error('p debe estar entre 0 y 1 (ej. 0,5).');if(!(e>0)||!(N>1))throw Error('N debe ser mayor que 1 y e mayor que 0.');const q=1-p,t=Z*Z*p*q,n=N*t/(e*e*(N-1)+t);
 return{r:Math.ceil(n),st:[`q = 1 − p = ${fmt(q)}`,`Z²·p·q = ${fmt(t)}`,`n = N·Z²·p·q / [e²(N − 1) + Z²·p·q] = ${fmt(N*t)} / ${fmt(e*e*(N-1)+t)} = ${fmt(n)}`,`Se redondea hacia arriba: n = ${Math.ceil(n)}`]}},
sturges:n=>{if(!(n>=1))throw Error('n debe ser al menos 1.');const k=1+3.322*Math.log10(n);return{r:Math.round(k),st:[`k = 1 + 3,322 · log₁₀(${fmt(n)}) = ${fmt(k)}`,`Se redondea: k = ${Math.round(k)}`]}},
atip:(q1,q3)=>{if(q3<q1)throw Error('Q₃ no puede ser menor que Q₁.');const ric=q3-q1,li=q1-1.5*ric,ls=q3+1.5*ric;
 return{r:`[${fmt(li)} ; ${fmt(ls)}]`,st:[`RIC = Q₃ − Q₁ = ${fmt(q3)} − ${fmt(q1)} = ${fmt(ric)}`,`Límite inferior = Q₁ − 1,5·RIC = ${fmt(li)}`,`Límite superior = Q₃ + 1,5·RIC = ${fmt(ls)}`,'Los datos fuera de ese intervalo son atípicos.']}},
pearson:(x,y)=>{const q=xyS(x,y);if(!q.sxx||!q.syy)throw Error('Los datos no varían: r no está definido.');const r=q.sxy/Math.sqrt(q.sxx*q.syy);
 return{r,st:[`x̄ = ${fmt(q.mx)} ; y\u0304 = ${fmt(q.my)}`,`Σ(xᵢ − x̄)(yᵢ − y\u0304) = ${fmt(q.sxy)}`,`Σ(xᵢ − x̄)² = ${fmt(q.sxx)} ; Σ(yᵢ − y\u0304)² = ${fmt(q.syy)}`,`r = ${fmt(q.sxy)} / √(${fmt(q.sxx)} · ${fmt(q.syy)})`]}},
pendiente:(x,y)=>{const q=xyS(x,y);if(!q.sxx)throw Error('Todos los valores de X son iguales: la pendiente no está definida.');
 return{r:q.sxy/q.sxx,st:[`x̄ = ${fmt(q.mx)} ; y\u0304 = ${fmt(q.my)}`,`Sxy = Σ(xᵢ − x̄)(yᵢ − y\u0304) = ${fmt(q.sxy)}`,`Sxx = Σ(xᵢ − x̄)² = ${fmt(q.sxx)}`,`b = ${fmt(q.sxy)} / ${fmt(q.sxx)}`]}}
});
function runCalc(id){
 const f=D.formulas.find(x=>x.id==id),out=$('#out'),ins=[...app.querySelectorAll('[data-v]')];
 try{let r;
  const vals=f.vars.map(v=>{
   if(v.list){const a=[...app.querySelectorAll(`[data-g="${v.id}"]`)].map(x=>x.value.trim()).filter(Boolean).map(s=>Number(s.replace(',','.')));
    if(!a.length||a.some(isNaN))throw Error('Escribe al menos un número en los cuadritos (con punto o coma decimal).');return a}
   const el=app.querySelector(`[data-v="${v.id}"]`),n=el?parseFloat(el.value.replace(',','.')):NaN;
   if(isNaN(n)){app.querySelectorAll(`[data-v="${v.id}"]`).forEach(x=>x.classList.add('miss'));throw Error('Completa todos los cuadritos con números.')}return n});
  if(f.custom){const vv={};f.vars.forEach((v,i)=>vv[v.id]=vals[i]);const x=sciEval(f.expr,f.deg!==false,0,vv);
   r={r:x,st:[f.plain,`Sustituyendo: ${f.expr.replace(IDRE,m=>m in vv?fmt(vv[m]):m)}`,`Resultado = ${fmt(x)} ${f.unit||''}`]}}
  else if(f.fn)r=F[f.fn](...vals);
  else{const ids=f.vars.map(v=>v.id),x=new Function(...ids,'return '+f.expr)(...vals);if(!isFinite(x))throw Error('Resultado no definido (revisa divisiones entre cero).');
   r={r:x,st:[f.plain||f.tex,`Sustituyendo: ${f.expr.replace(/[A-Za-z_][A-Za-z0-9_]*/g,m=>ids.includes(m)?fmt(vals[ids.indexOf(m)]):m)}`,`Resultado = ${fmt(x)} ${f.unit||''}`]}}
  out.innerHTML=fixM(`<div class="res ok"><small>Resultado</small><strong>${fmt(r.r)} <span>${f.unit||''}</span></strong></div><h3>Procedimiento</h3><ol class="steps">${r.st.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`);
 }catch(e){out.innerHTML=`<div class="res bad">${esc(e.message)}</div>`}}

/* ===== Componentes ===== */
const row=(h,i,t,s,c)=>`<a class="row card" href="${h}" style="--c:${c}"><span class="bd">${ic(i,18)}</span><span>${esc(t)}<br><small>${s}</small></span>${ic('chevR',16)}</a>`;
const mx=f=>`<span class="fm2 fit"><span class="mw">${f.mathml}</span></span>`;
const fcard=f=>`<a class="fc" href="#/calc/${f.id}" style="--c:${SUBJ()[f.subject].color}"><span class="bd">${ic(f.icon||'sigma',18)}</span><span class="ft"><b>${f.name}${f.custom?' <i class="mine">propia</i>':''}</b>${f.mathml?mx(f):`<code>${f.tex}</code>`}</span>${ic('chevR',16)}</a>`;

/* ===== Dato del día (glosario de la materia actual; cambia al actualizar la app) y Dato técnico (glosario general) ===== */
let DIA={},DT={h:[],i:-1},DTL=null;
function diaPick(sid){
 if(DIA[sid])return DIA[sid];
 const c=(D.sub[sid]&&D.sub[sid].content)||{},pool=[];
 for(const tid in c)(c[tid].glos||[]).forEach(g=>pool.push({t:g.t,p:g.p,tid}));
 let r;
 if(pool.length){const x=pool[Math.floor(Math.random()*pool.length)];r={t:x.t,p:/^[a-záéíóúñ]/.test(x.p)?x.p[0].toUpperCase()+x.p.slice(1):x.p,href:`#/tema/${sid}/${x.tid}`}}
 else{const k=D.career.datos,d=k[Math.floor(Math.random()*k.length)];r={t:d.t,p:d.p,href:`#/materia/${sid}`}}
 return DIA[sid]=r}
function dtList(){if(!DTL&&GL)DTL=GL.secciones.flatMap(s=>s.items.map(x=>({n:s.n,g:s.t,t:x[0],p:x[1]})));return DTL||[]}
function dtCur(){const L=dtList();if(!L.length)return null;if(DT.i<0){DT.h=[Math.floor(Math.random()*L.length)];DT.i=0}return L[DT.h[DT.i]]}
function dtMove(dir){
 const L=dtList();if(!L.length)return;
 if(dir>0){if(DT.i<DT.h.length-1)DT.i++;else{let r,t=0;do{r=Math.floor(Math.random()*L.length)}while(r==DT.h[DT.i]&&++t<5);DT.h.push(r);DT.i++}}
 else if(DT.i>0)DT.i--;
 const e=document.getElementById('dtec');if(e)dtFill(e)}
function dtInner(){
 const x=dtCur();
 if(!x)return`<div class="dh"><span class="bd w">${ic('gear',22)}</span><b>DATO TÉCNICO</b></div><div class="db"><p>Cargando glosario…</p></div>`;
 return`<div class="dh"><span class="bd w">${ic('gear',22)}</span><b>DATO TÉCNICO</b><span class="dnav"><button data-act="dtp" aria-label="Anterior"${DT.i>0?'':' disabled'}>${ic('chevL',18)}</button><button data-act="dtn" aria-label="Siguiente">${ic('chevR',18)}</button></span></div><div class="dgr">${esc(x.g)}</div><div class="db"><strong>${esc(x.t)}</strong><p>${esc(x.p)}</p></div>`}
function dtFill(e){const x=dtCur();if(x)e.style.setProperty('--g',gcol(x.n));e.innerHTML=dtInner()}
const dtHTML=()=>{
 if(!GL)loadGlos().then(()=>{const e=document.getElementById('dtec');if(e)dtFill(e)});
 const x=dtCur();return`<div class="dato dtec" id="dtec" style="--g:${x?gcol(x.n):'#336B75'}">${dtInner()}</div>`};

/* ===== Pantallas ===== */
function home(){
 const cur=curId(),s=SUBJ()[cur],T=topics(cur),d=S.done.filter(x=>x.startsWith(cur+'/')).length,p=T.length?Math.round(d/T.length*100):0;
 const dt=diaPick(cur),stand=matchMedia('(display-mode: standalone)').matches;
 const favs=S.favs.map(f=>{const[sid,tid]=f.split('/'),t=topics(sid).find(x=>x.id==tid);return t?`<a class="row" href="#/tema/${f}">${ic('bookmark',16)}<span>${esc(t.t)}</span>${ic('chevR',16)}</a>`:''}).join('');
 const tl=(h,c,hz,i,t,sb)=>`<a class="acc" href="${h}" style="--c:${c};--haz:${hz}"><span class="bd">${ic(i,22)}</span><span class="at"><b>${t}</b><small>${sb}</small></span></a>`;
 return `<div class="search"><a href="#/buscar">${ic('search')}<span>Buscar materia, tema, fórmula…</span></a>${stand?'':`<button data-act="inst">${ic('download',16)} Instalar</button>`}</div>
 <a class="card cur" href="#/materia/${cur}" style="--c:var(--tq)"><div class="r"><span><b>${s.name}</b> <small>· ${semTxt(cur)}</small></span>${ic('chevR',18)}</div><div class="bar"><i style="width:${p}%"></i></div><small>${T.length?`${d} de ${T.length} temas estudiados · ${p}%`:'Contenido próximamente'}</small></a>
 <div class="dato"><div class="dh"><span class="bd w">${ic('bulb',22)}</span><b>DATO DEL DÍA</b><a class="pillb" href="${dt.href}">Más información ${ic('arrow',14)}</a></div><div class="db"><strong>${dt.t}</strong><p>${dt.p}</p></div></div>
 ${dtHTML()}
 <h2 class="acch">${ic('grid',20)} ACCESOS DIRECTOS</h2>
 <div class="accs">${tl('#/materia/'+cur,'#1686c9','42,160,240',s.icon,s.short,D.sub[cur]?'Unidades y temas':'Próximamente')}${tl('#/formulario/'+cur,'#15965a','34,192,111','calc','Calculadoras','Fórmulas y cálculo')}${tl('#/biblioteca','#e67e00','255,122,0','lib','Biblioteca','PDF y apuntes')}${tl('#/carrera','#8b5e3c','185,28,40','cap','Mi carrera','Materias por semestre')}</div>
 ${favs?`<h2>Favoritos</h2><div class="card">${favs}</div>`:''}
 ${chartNotas()}`}

/* Estado y nota de cada materia: lo que marques o escribas se guarda en este dispositivo */
const ESTS=[['aprobada','Aprobada'],['curso','En curso'],['pendiente','Pendiente']];
const estOf=k=>notaOf(k)!=null?'aprobada':(k==curId()?'curso':'pendiente');
/* Privacidad: las notas se leen SOLO de la memoria de este dispositivo (nunca de career.json) */
const notaOf=k=>S.notas[k]!==undefined?S.notas[k]:null;
const prom=ks=>{const v=ks.map(notaOf).filter(x=>x!=null&&!isNaN(x));return v.length?v.reduce((a,b)=>a+b,0)/v.length:null};
const fp=n=>n==null?'---':(+n.toFixed(1)).toLocaleString('es',{maximumFractionDigits:1});
const gpText=all=>{const n=all.filter(k=>notaOf(k)!=null).length,a=all.filter(k=>estOf(k)=='aprobada').length;return `${n} ${n==1?'materia':'materias'} con nota · ${a} ${a==1?'aprobada':'aprobadas'}`};
let SEL=null;const OPEN=new Set();let openInit=false;
/* Actualiza los promedios en pantalla sin volver a dibujar todo (así no se pierde el cursor al escribir) */
const refreshAvg=()=>{D.career.semesters.forEach(sm=>{const el=document.querySelector(`details.sem[data-n="${sm.n}"] .avg b`);if(el)el.textContent=fp(prom(sm.items))});
 const all=Object.keys(SUBJ()),g=$('.gpn');if(g)g.textContent=fp(prom(all))};
/* Gráfico de notas (solo las que esta persona escribió en este dispositivo). Meta: promedio 90 */
function chartNotas(){
 const G=[];D.career.semesters.forEach(sm=>{const p=sm.items.map(k=>({k,v:notaOf(k)})).filter(x=>x.v!=null&&!isNaN(x.v));if(p.length)G.push({n:sm.n,p})});
 const n=G.reduce((t,g)=>t+g.p.length,0);
 const head='<div class="nth"><b>Evolución de notas</b><span class="ntm"><i></i>Meta 90</span></div>';
 const foot=`<div class="ntf"><span class="ntl"><span><i style="background:#336B75"></i>Sobre 90</span><span><i style="background:#9b1c28"></i>Bajo 90</span></span><span class="ntk">${ic('lock',14)}Solo en tu celular</span></div>`;
 if(!n)return `<div class="ntcard">${head}<p class="ntempty">Escribe tus notas en cada materia y aquí verás cómo van.</p>${foot}</div>`;
 const vs=G.flatMap(g=>g.p.map(x=>x.v)),lo=Math.min(80,Math.floor(Math.min(...vs)/10)*10),hi=100;
 const Y=v=>118-(Math.min(hi,v)-lo)*104/(hi-lo),slots=n+G.length-1,st=280/slots;
 let s=0,pts=[],seps='',labs='';
 G.forEach((g,gi)=>{
  if(gi){const x=(30+st*(s+.5)).toFixed(1);seps+=`<line x1="${x}" y1="14" x2="${x}" y2="118" stroke="#d1d5db" stroke-dasharray="3 4"/>`;s++}
  const xs=[];g.p.forEach(x=>{const cx=30+st*(s+.5);xs.push(cx);pts.push({k:x.k,v:x.v,cx,cy:Y(x.v)});s++});
  labs+=`<text x="${((xs[0]+xs[xs.length-1])/2).toFixed(1)}" y="146" text-anchor="middle" fill="#6b7280">${g.n}.º sem</text>`});
 const ticks=[...new Set([lo,90,100])].map(t=>`<text x="24" y="${(Y(t)+4).toFixed(1)}" text-anchor="end" fill="#6b7280">${t}</text>`).join('');
 const line=pts.map(p=>`${p.cx.toFixed(1)},${p.cy.toFixed(1)}`).join(' ');
 const dots=pts.map(p=>{const ok=p.v>=90,c=ok?'#336B75':'#9b1c28',ly=ok?p.cy-9:p.cy+17;
  return `<g data-act="gpt" data-k="${p.k}" data-v="${p.v}"><circle cx="${p.cx.toFixed(1)}" cy="${p.cy.toFixed(1)}" r="12" fill="transparent"/><circle cx="${p.cx.toFixed(1)}" cy="${p.cy.toFixed(1)}" r="4.5" fill="${c}" stroke="#fff" stroke-width="2"/><text x="${p.cx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" fill="${ok?'#374151':'#9b1c28'}">${fp(p.v)}</text></g>`}).join('');
 const y90=Y(90).toFixed(1);
 return `<div class="ntcard">${head}<svg class="ntsvg" viewBox="0 -8 320 160" role="img" aria-label="Gráfico de tus notas por materia con la meta de 90"><rect x="30" y="14" width="280" height="${(Y(90)-14).toFixed(1)}" fill="#336B75" fill-opacity=".08"/><line x1="30" y1="118" x2="310" y2="118" stroke="#d1d5db"/><line x1="30" y1="14" x2="310" y2="14" stroke="#e5e7eb"/>${seps}<line x1="30" y1="${y90}" x2="310" y2="${y90}" stroke="#8b5e3c" stroke-width="1.5" stroke-dasharray="5 4"/>${ticks}<polyline points="${line}" fill="none" stroke="#111" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>${dots}${labs}</svg>${foot}</div>`}
function carrera(){
 if(!openInit){openInit=true;const m=D.career.semesters.find(x=>x.items.includes(curId()));if(m)OPEN.add(m.n)}
 const all=Object.keys(SUBJ());
 return `<div class="chead"><h1>Ingeniería Industrial</h1><div class="gpm" title="${gpText(all)}"><i>general</i><b class="gpn">${fp(prom(all))}</b></div></div>`+D.career.semesters.map(sm=>`<details class="card sem" data-n="${sm.n}" ${OPEN.has(sm.n)?'open':''}><summary><span class="num" style="color:${SEMC[(sm.n-1)%SEMC.length]}">${sm.n}</span>${ORD[sm.n]||sm.n+'.º'} Semestre<span class="avg"><i>PROM.</i><b>${fp(prom(sm.items))}</b></span><span class="cv">${ic('chevR',20)}</span></summary>${
  sm.items.map(k=>{const s=SUBJ()[k],on=k==curId(),sel=k==(SEL??curId()),e=estOf(k),n=notaOf(k);return `<div class="srow ${sel?'act':''}" data-e="${e}" style="--c:${s.color}"><div class="srt"><span class="row"><span class="sn" data-act="setsel" data-k="${k}"><i class="ok" aria-label="Aprobada">✓</i><i class="sd" aria-hidden="true"></i><span class="nm">${s.name}</span></span><a class="go ${on?'r':'g'}" href="#/materia/${k}" aria-label="Abrir temario de ${s.name}">${ic('chevR',16)}</a></span><button class="cbtn ${on?'on':''}" data-act="setcur" data-k="${k}">${on?'✓ Actual':'Usar'}</button></div><div class="srm"><span class="nw"><span class="nac" data-k="${k}" hidden><button class="ns" data-act="nsave" data-k="${k}" aria-label="Guardar nota">✓</button><button class="nc" data-act="ncancel" data-k="${k}" aria-label="Cancelar">✕</button></span><input class="nota" type="number" inputmode="decimal" min="0" max="100" step="any" placeholder="---" value="${n??''}" data-k="${k}" data-orig="${n??''}" aria-label="Nota de ${s.name}"></span></div></div>`}).join('')}</details>`).join('')}

function materia(sid){
 const s=SUBJ()[sid],d=D.sub[sid];if(!s)return nf();
 if(!d)return `<a class="back" href="#/carrera">${ic('chevL')}<span class="bk">Volver</span></a><div class="thead" style="--c:${s.color}"><p class="eyebrow">${semTxt(sid)}</p><h1>${s.name}</h1></div><div class="empty">Contenido próximamente.<br><small>Se activa subiendo <code>${sid}.json</code> y agregando <code>"data": "${sid}"</code> a esta materia en career.json.</small></div>`;
 const T=topics(sid),n=S.done.filter(x=>x.startsWith(sid+'/')).length,p=T.length?Math.round(n/T.length*100):0;
 return `<a class="back" href="#/carrera">${ic('chevL')}<span class="bk">Volver</span></a>
 <div class="thead sh" style="--c:${s.color}"><p class="eyebrow">${semTxt(sid)}</p><h1>${s.name}</h1><p>${s.desc}</p><div class="bar"><i class="${p>=100?'full':''}" style="width:${p}%"></i></div><small style="color:#9fb4d3">${p}% de avance · ${n}/${T.length} temas</small></div>
 <h2>Unidades temáticas</h2>`+d.units.map(u=>`<details class="card unit" style="--c:${PAL[(u.n-1)%10]}" ${u.n==1?'open':''}><summary><span class="num">${u.n}</span>${u.title}<span class="ucv" aria-hidden="true">${ic('chevR',16)}</span></summary>${
  u.topics.map((t,i)=>{const id=`u${u.n}t${i+1}`;return `<a class="row" href="#/tema/${sid}/${id}"><span class="idx">${u.n}.${i+1}</span><span>${t}${S.done.includes(sid+'/'+id)?'<i class="tk" aria-label="Estudiado">✓</i>':''}</span><span class="go2">${ic('chevR',16)}</span></a>`}).join('')}</details>`).join('')}

function tema(sid,tid){
 const s=SUBJ()[sid],T=topics(sid),k=T.findIndex(x=>x.id==tid);if(k<0)return nf();
 const t=T[k],c=D.sub[sid].content?.[tid]||{},key=`${sid}/${tid}`,fav=S.favs.includes(key),dn=S.done.includes(key);
 const tabs=[['c','Contenido','book'],['f','Fórmulas','sigma'],['g','Glosario','list']],TC={c:'#9b1c2e',f:'#2b7f8c',g:'#8b5e3c'};
 const lst=a=>`<ul class="chk">${a.map(i=>`<li>${i}</li>`).join('')}</ul>`,emp=m=>`<div class="empty">${m}</div>`;
 let p;
 if(tab=='c'){p=c.sections?c.sections.map(x=>`<section class="sec">${x.h?`<h3>${x.h}</h3>`:''}${x.p?`<p>${x.p}</p>`:''}${x.html||''}${x.l?lst(x.l):''}</section>`).join('')
  :emp(`Plantilla lista. Agrega el contenido en <code>${sid}.json</code> → <code>content.${tid}</code>.`);
  p+=`<button class="btn ghost" data-act="done" data-k="${key}">${dn?'Estudiado ✓ (quitar)':'Marcar como estudiado'}</button>`}
 if(tab=='f')p=c.frm?`<p class="tabnote">Para leer y repasar. Para calcular usa la pestaña <b>Formulario</b>.</p><div class="fhd"><span>Nombre</span><span>Fórmula</span></div>${c.frm.join('')}`:emp('Este tema es conceptual: no tiene fórmulas esenciales.');
 if(tab=='g')p=c.glos?`<p class="tabnote">📚 Vocabulario del tema · ${c.glos.length} términos</p>`+c.glos.map(g=>`<div class="dgl"><b>${g.t}</b><p>${g.p}</p>${g.e?`<small>${g.e}</small>`:''}</div>`).join(''):emp('Este apartado no tiene glosario.');
 return `<div class="thead" style="--tc:${TC[tab]}"><div class="r"><a class="icb vb" href="#/materia/${sid}" aria-label="Volver al índice">${ic('chevL',18)} <span class="bk">Volver</span></a><span class="eyebrow">${s.name}</span><button class="icb" data-act="fav" data-k="${key}" aria-label="Favorito">${ic('bookmark',20,fav?'currentColor':'none')}</button></div>
 <p class="eyebrow" style="margin-top:10px">Unidad ${t.u.n} · ${t.u.title}</p><h1>${t.u.n}.${t.i} ${t.t}</h1></div>
 <div class="tabs">${tabs.map(([k,n,i])=>`<button class="tab ${tab==k?'on':''}" data-act="tab" data-t="${k}" style="--tc:${TC[k]}">${ic(i,14)}${n}</button>`).join('')}</div>${p}
 <div class="nav2">${k>0?`<a href="#/tema/${sid}/${T[k-1].id}">${ic('chevL',16)}Anterior</a>`:'<span>Anterior</span>'}<a href="#/materia/${sid}">${ic('list',16)}Índice</a>${k<T.length-1?`<a class="pri" href="#/tema/${sid}/${T[k+1].id}">Siguiente${ic('chevR',16)}</a>`:'<span>Siguiente</span>'}</div>`}

function formulario(a){
 fsub=(a&&SUBJ()[a])?a:curId();const s=SUBJ()[fsub],fs=D.formulas.filter(f=>f.subject==fsub),cats=[...new Set(fs.map(f=>f.cat))];
 const sm=D.career.semesters.find(x=>x.items.includes(fsub))||D.career.semesters[0],pick=x=>x.n==sm.n?fsub:(x.items.find(k=>D.formulas.some(f=>f.subject==k))||x.items[0]);
 return `<div class="fhead"><h1>Formulario</h1><div class="fh-r"><button class="abk" data-act="addf" aria-label="Agregar fórmula">${ic('plus',26)}</button><button class="cbk" data-act="sci" aria-label="Calculadora científica">${ic('calc',26)}</button></div></div> <div class="fl">Semestre</div><div class="sems">${D.career.semesters.map(x=>`<a class="sbtn ${x.n==sm.n?'on':''}" href="#/formulario/${pick(x)}" style="--sc:${SEMC[(x.n-1)%SEMC.length]}">${x.n}</a>`).join('')}</div>
 <div class="fl">${ORD[sm.n]||sm.n+'.º'} Semestre</div><div class="pills">${sm.items.map((k,i)=>`<a class="pl ${k==fsub?'on':''}" href="#/formulario/${k}" style="--c:${PIL[i%PIL.length]}">${SUBJ()[k].short}</a>`).join('')}</div>
 ${fs.length?cats.map(c=>`<h3>${c}</h3><div class="grid2">${fs.filter(f=>f.cat==c).map(fcard).join('')}</div>`).join(''):`<div class="empty">${s.name}: fórmulas próximamente.</div>`}`}

function calc(id){
 const f=D.formulas.find(x=>x.id==id);if(!f)return nf();const s=SUBJ()[f.subject];
 let fx,used=new Set();
 if(f.mathml){const r=mathHTML(f.mathml,{map:f.map});used=r.used;fx=`<div class="fx fit"><span class="mw">${r.html}</span></div>`}else fx=`<div class="fx"><code>${f.tex}</code></div>`;
 const dd=f.donde?(f.donde.length?`<ul class="dd">${f.donde.map(([a,b])=>`<li><b>${a}</b><span>${b}</span></li>`).join('')}</ul>`:''):`<h3>Variables</h3><ul class="vars">${f.vars.map(v=>`<li><b>${v.id}</b>${v.meaning||''}</li>`).join('')}</ul>`;
 const lists=f.vars.filter(v=>v.list),rest=f.vars.filter(v=>!v.list&&!used.has(v.id));
 const hint=used.size?'Escribe los números en los cuadritos de la fórmula.':(lists.length?'Escribe tus datos en los cuadritos.':'Completa los cuadritos con tus datos.');
 return `<a class="back" href="#/formulario/${f.subject}">${ic('chevL')}Formulario</a><div class="card" style="--c:${s.color}"><p class="eyebrow">${s.short} · ${f.cat}</p><h1>${f.name}</h1>${f.short?`<p class="muted" style="margin:0 0 4px">${f.short}</p>`:''}
 ${fx}<p class="hint">${hint}</p>
 ${lists.map(v=>`<div class="dgl"><div class="dgl-t">${v.label.replace(/\s*\(separad[ao]s por comas\)/,'')}</div><div class="dgl-r">${[0,1,2,3,4].map(i=>gbox(v.id,i)).join('')}<button class="dgl-b" data-act="gadd" aria-label="Agregar cuadrito">+</button><button class="dgl-b m" data-act="gdel" aria-label="Quitar cuadrito">−</button></div></div>`).join('')}
 ${rest.length?`<div class="dg">${rest.map(v=>`<label class="dgc"><span>${v.label}</span><input class="bx w" data-v="${v.id}" inputmode="decimal" enterkeyhint="next" autocomplete="off" placeholder="0"></label>`).join('')}</div>`:''}
 ${dd}
 <button class="btn" data-act="calc" data-f="${f.id}">${ic('calc',18)} Calcular</button><div id="out"></div>${f.custom?`<div class="rowb"><button class="btn2" data-act="editf" data-f="${f.id}">Editar</button><button class="btn2 del" data-act="delf" data-f="${f.id}">Eliminar</button></div>`:''}</div>`}

/* ===== Biblioteca: archivos guardados en este dispositivo (IndexedDB, sin servidores externos) ===== */
const LMAX=150*1024*1024; // límite por archivo (150 MB)
const DOC_EXT=['pdf','doc','docx','odt','rtf','txt','md','xls','xlsx','ods','csv','ppt','pptx','odp'],
 IMG_EXT=['jpg','jpeg','png','gif','webp','bmp','heic','heif','avif'],
 MIME={pdf:'application/pdf',doc:'application/msword',docx:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',odt:'application/vnd.oasis.opendocument.text',rtf:'application/rtf',txt:'text/plain',md:'text/markdown',xls:'application/vnd.ms-excel',xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',ods:'application/vnd.oasis.opendocument.spreadsheet',csv:'text/csv',ppt:'application/vnd.ms-powerpoint',pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation',odp:'application/vnd.oasis.opendocument.presentation',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',gif:'image/gif',webp:'image/webp',bmp:'image/bmp',heic:'image/heic',heif:'image/heif',avif:'image/avif'};
const fext=n=>{const m=/\.([a-z0-9]+)$/i.exec(n||'');return m?m[1].toLowerCase():''};
const fsize=n=>n<1024?n+' B':n<1048576?(n/1024).toFixed(0)+' KB':(n/1048576).toFixed(1)+' MB';
const isImg=(e,m)=>/^image\//.test(m||'')||IMG_EXT.includes(e);
/* Tipo de archivo → etiqueta, color e icono */
function fk(r){
 const e=r.ext||fext(r.title),m=r.mime||(r.blob&&r.blob.type)||'',E=(e||'?').toUpperCase().slice(0,4);
 if(isImg(e,m))return{k:'img',c:'#336B75',i:'image',l:E};
 if(e=='pdf'||m=='application/pdf')return{k:'pdf',c:'#b3202c',i:'file',l:'PDF'};
 if(['doc','docx','odt','rtf'].includes(e))return{k:'word',c:'#1d6fe0',i:'file',l:E};
 if(['xls','xlsx','ods','csv'].includes(e))return{k:'xls',c:'#16a34a',i:'file',l:E};
 if(['ppt','pptx','odp'].includes(e))return{k:'ppt',c:'#ea580c',i:'file',l:E};
 if(['txt','md'].includes(e))return{k:'txt',c:'#64748b',i:'file',l:E};
 return{k:'otro',c:'#8b5e3c',i:'file',l:E};
}
/* Acceso a la tabla 'files' con manejo de errores (cuota llena, transacción abortada) */
const lt=async(m,f)=>{const d=await db;return new Promise((ok,ko)=>{let q;const t=d.transaction('files',m);
 try{q=f(t.objectStore('files'))}catch(e){return ko(e)}
 t.oncomplete=()=>ok(q&&q.result);t.onerror=()=>ko(t.error||(q&&q.error));t.onabort=()=>ko(t.error||(q&&q.error)||Error('abort'))})};
const lall=()=>lt('readonly',s=>{const out=[],q={};const r=s.openCursor();r.onsuccess=()=>{const c=r.result;if(c){const v=c.value;if(v.blob)out.push({...v,blob:{size:v.blob.size,type:v.blob.type}});c.continue()}else q.result=out};return q}),
 
 lget=id=>lt('readonly',s=>s.get(id)),lput=r=>lt('readwrite',s=>s.add(r)),ldelRaw=id=>lt('readwrite',s=>s.delete(id));
const lkey=(n,s)=>n+'|'+s;

/* Unidades / temas sugeridos para la materia elegida (opcional) */
const unitOpts=sid=>((D.sub[sid]&&D.sub[sid].units)||[]).flatMap(u=>[`Unidad ${u.n} · ${u.title}`,...u.topics.map((t,i)=>`${u.n}.${i+1} ${t}`)]).map(v=>`<option value="${esc(v)}">`).join('');

/* Guardar uno o varios archivos */
async function lsave(){
 const inp=$('#fi'),fl=inp?[...inp.files]:[];if(!fl.length)return alert('Selecciona un archivo primero.');
 const btn=$('[data-act="savef"]');if(btn)btn.disabled=true;
 const base={cat,subject:$('#fs').value,unit:$('#fu').value.trim()};
 let ok=0;const dup=[],bad=[];
 try{
  const have=new Set((await lall()).filter(x=>x.cat==cat).map(x=>lkey(x.title,x.blob.size)));
  for(const f of fl){
   const e=fext(f.name),im=isImg(e,f.type);
   if(cat=='foto'&&!im){bad.push(f.name+': en Apuntes solo se guardan fotografías e imágenes.');continue}
   if(cat=='pdf'&&(im||!DOC_EXT.includes(e))){bad.push(f.name+(im?': las imágenes se guardan en Apuntes.':': formato no compatible.'));continue}
   if(f.size>LMAX){bad.push(f.name+': supera los 150 MB.');continue}
   const key=lkey(f.name,f.size);if(have.has(key)){dup.push(f.name);continue}
   try{
    const mime=MIME[e]||f.type||'application/octet-stream',blob=f.slice(0,f.size,mime); // referencia, sin cargar el archivo en RAM
    await lput({...base,title:f.name,ext:e,mime,size:f.size,date:Date.now(),blob});have.add(key);ok++}
   catch(er){bad.push(f.name+(er&&er.name=='QuotaExceededError'?': no hay espacio suficiente en el dispositivo.':': no se pudo leer o guardar el archivo.'))}}
  if(ok&&navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
 }catch(er){bad.push('No se pudo acceder al almacenamiento del navegador.')}
 await render();
 const m=[];if(ok)m.push(ok==1?'Archivo guardado ✓':ok+' archivos guardados ✓');
 if(dup.length)m.push('Ya estaba guardado: '+dup.join(', '));
 bad.forEach(x=>m.push(x));
 if(dup.length||bad.length)alert(m.join('\n'));else if(m.length)toast(m[0])}

/* Abrir / visualizar */
function closeVisor(){const v=document.getElementById('vw');if(v){URL.revokeObjectURL(v.dataset.u);v.remove()}}
function visor(r,u,k){
 closeVisor();const v=document.createElement('div');v.id='vw';v.dataset.u=u;
 v.innerHTML=`<div class="vh"><b>${esc(r.title)}</b><button class="vx" data-act="vclose" aria-label="Cerrar">${ic('x',20)}</button></div><div class="vbody">${k.k=='img'?`<img src="${u}" alt="${esc(r.title)}">`:`<iframe src="${u}" title="${esc(r.title)}"></iframe>`}</div>`;
 document.body.appendChild(v)}
async function lopen(id){
 let r;try{r=await lget(id)}catch(e){}
 if(!r||!r.blob)return toast('No se encontró el archivo');
 const k=fk(r),u=URL.createObjectURL(r.blob);
 if(k.k=='img'||(k.k=='pdf'&&navigator.pdfViewerEnabled))return visor(r,u,k);
 const a=document.createElement('a');a.href=u;
 if(k.k=='pdf'){a.target='_blank';a.rel='noopener'}else{a.download=r.title;toast('Se descargará para abrirlo con otra app')}
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),120000)}
addEventListener('hashchange',closeVisor);
addEventListener('keydown',e=>{if(e.key=='Escape')closeVisor()});

async function ldel(id){
 if(!confirm('¿Eliminar este archivo del dispositivo? Esta acción no se puede deshacer.'))return;
 try{await ldelRaw(id);await render();toast('Archivo eliminado')}catch(e){alert('No se pudo eliminar el archivo.')}}

/* Glosario de Ingeniería Industrial: datos en glosario.json (se guarda en caché y funciona sin conexión) */
const GC=['#1d6fe0','#ea580c','#16a34a','#dc2626','#7c3aed','#0d9488','#0284c7','#8b5e3c','#4f46e5','#475569','#0891b2','#9a3412','#166534','#1e3a8a','#581c87'];
let GL=null,GQ='',GF=new Set(),GP=false;const GOPEN=new Set();
async function loadGlos(){if(GL)return;try{const r=await fetch('glosario.json');if(r.ok)GL=await r.json()}catch(e){}}
const gcol=n=>GC[(n-1)%GC.length];
function gData(){
 const q=norm(GQ.trim()),act=!!q||GF.size>0;let tot=0;
 const secs=GL.secciones.filter(s=>!GF.size||GF.has(s.n)).map(s=>{
  const it=q?s.items.filter(x=>norm(x[0]).includes(q)||norm(x[1]).includes(q)):s.items;tot+=it.length;return{...s,it}}).filter(s=>s.it.length);
 return{secs,tot,act,q}}
function gBody(){
 const{secs,tot,act}=gData(),all=GL.secciones.reduce((a,s)=>a+s.items.length,0);
 const info=act?`${tot} resultado${tot==1?'':'s'}`:`${all} términos · ${GL.secciones.length} grupos`;
 if(!secs.length)return`<p class="gcount">${info}</p><div class="empty">Sin resultados${GQ.trim()?' para «'+esc(GQ.trim())+'»':''}.</div>`;
 return`<p class="gcount">${info}</p>`+secs.map(s=>`<details class="gs card" data-n="${s.n}" style="--c:${gcol(s.n)}" ${act||GOPEN.has(s.n)?'open':''}><summary><span class="gnum">${s.n}</span><span class="gst">${esc(s.t)}</span><span class="muted">${s.it.length}</span>${ic('chevR',16)}</summary>${s.it.map((x,i)=>(x[2]&&x[2]!=(s.it[i-1]||[])[2]?`<div class="ga">${esc(x[2])}</div>`:'')+`<div class="gt"><b>${esc(x[0])}</b><p>${esc(x[1])}</p></div>`).join('')}</details>`).join('')}
const gPanel=()=>`<div class="gfh"><b>Filtrar por área</b><button class="gclr" data-act="gfclr"${GF.size?'':' disabled'}>Limpiar</button></div><div class="gchips">${GL.secciones.map(s=>`<button class="gchip${GF.has(s.n)?' on':''}" style="--c:${gcol(s.n)}" data-act="gfsec" data-n="${s.n}">${esc(s.t)}</button>`).join('')}</div>`;
function gRefresh(){
 const b=document.getElementById('gbody'),p=document.getElementById('gfp'),d=document.getElementById('gbd');
 if(b)b.innerHTML=gBody();if(p){p.hidden=!GP||!!GQ.trim();p.innerHTML=gPanel()}if(d){d.textContent=GF.size;d.hidden=!GF.size}}
function glosarioHTML(){
 if(!GL)return'<div class="empty">No se pudo cargar el glosario. Conéctate una vez a internet para descargarlo; luego funcionará sin conexión.</div>';
 return`<h2 class="gtit">${esc(GL.titulo)}</h2><p class="muted gsub">${esc(GL.sub)}</p>
 <div class="gsb"><span class="gsi">${ic('search',20)}</span><input id="gq" type="search" placeholder="Buscar término o definición…" autocomplete="off" enterkeyhint="search" value="${esc(GQ)}"><button class="gfb" data-act="gfilt" aria-label="Filtros">${ic('menu',20)}<i class="gbd" id="gbd"${GF.size?'':' hidden'}>${GF.size}</i></button></div>
 <div class="gfp card" id="gfp"${GP&&!GQ.trim()?'':' hidden'}>${gPanel()}</div><div id="gbody">${gBody()}</div>`}
document.addEventListener('input',e=>{if(e.target&&e.target.id=='gq'){GQ=e.target.value;gRefresh()}});
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target&&e.target.id=='gq')e.target.blur()});
document.addEventListener('toggle',e=>{const d=e.target;if(d.matches&&d.matches('details.gs')&&!GQ.trim()&&!GF.size){const n=+d.dataset.n;d.open?GOPEN.add(n):GOPEN.delete(n)}},true);

async function biblioteca(){
 const C=[['pdf','Documentos','file','tpdf'],['foto','Apuntes','image','tapu'],['eval','Glosario','bookopen','tglo']];
 const head=`<h1 class="up">Biblioteca</h1><p class="muted">Guarda tus archivos en este dispositivo y ábrelos sin conexión.</p>
 <div class="tabs">${C.map(([k,n,i,c])=>`<button class="tab ${c} ${cat==k?'on':''}" data-act="cat" data-c="${k}">${ic(i,14)}${n}</button>`).join('')}</div>`;
 const drive=`<a class="btn gdrv" href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">${ic('cloud',20)}<span>Consultar en Google Drive</span>${ic('ext',16)}</a>`;
 if(cat=='eval'){await loadGlos();return head+glosarioHTML()+drive}
 let all=[],err='';try{all=await lall()}catch(e){err='No se pudo acceder al almacenamiento de este navegador. Si estás en modo privado, abre la app en una ventana normal.'}
 const L=all.filter(x=>x.cat==cat);
 const order=[...D.career.semesters.flatMap(s=>s.items),...new Set(L.map(x=>x.subject))].filter((k,i,a)=>a.indexOf(k)==i);
 const list=order.map(k=>{const it=L.filter(x=>x.subject==k).sort((a,b)=>b.date-a.date);if(!it.length)return'';
  return`<div class="lgh">${esc((SUBJ()[k]&&SUBJ()[k].name)||'Otra materia')} · ${it.length}</div>`+it.map(x=>{const t=fk(x);
   return`<div class="card lf"><div class="r2"><span class="fic" style="--c:${t.c}">${ic(t.i,20)}<em>${esc(t.l)}</em></span><div><b>${esc(x.title)}</b><br><small>${x.unit?esc(x.unit)+' · ':''}${fsize(x.blob.size)} · ${new Date(x.date).toLocaleDateString('es',{day:'numeric',month:'short',year:'numeric'})}</small></div><button class="btn sm" data-act="open" data-id="${x.id}">Abrir</button><button class="btn ghost sm" data-act="del" data-id="${x.id}" aria-label="Eliminar">${ic('trash',16)}</button></div></div>`}).join('')}).join('');
 const acc=cat=='foto'?'accept="image/*"':'accept="'+DOC_EXT.map(e=>'.'+e).join(',')+',application/pdf"';
 return head+`<div class="lbar"><h3 class="lh">En este dispositivo</h3><button class="btn ghost sm" data-act="lrefresh" aria-label="Actualizar lista">${ic('refresh',16)} Actualizar</button></div>
 ${err?`<div class="empty">${esc(err)}</div>`:L.length?list:'<div class="empty">Aún no hay archivos en esta categoría.</div>'}
 <div class="card"><h3 style="margin-top:0">Añadir archivo</h3>
 <div class="fpick"><label class="fbtn" for="fi">${ic('plus',18)} Seleccionar archivo</label><span class="fname" id="fn">Sin archivo</span></div><input type="file" id="fi" multiple style="display:none" ${acc}>
 <label>Materia<select id="fs">${D.career.semesters.map(sm=>`<optgroup label="Semestre ${sm.n}">${sm.items.map(k=>`<option value="${k}" ${k==curId()?'selected':''}>${SUBJ()[k].name}</option>`).join('')}</optgroup>`).join('')}</select></label>
 <div class="sep"></div><label>Unidad / tema (opcional)<input id="fu" list="fus" autocomplete="off"><datalist id="fus">${unitOpts(curId())}</datalist></label><button class="btn gbtn" data-act="savef">${ic('plus',18)}<span>Guardar archivo</span></button></div>`+drive}

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
 if(route=='buscar'){const q=$('#q');q.focus();q.oninput=()=>$('#res').innerHTML=results(q.value)}
 fitMath();document.querySelectorAll('.sbtn.on,.pl.on').forEach(e=>e.scrollIntoView({block:'nearest',inline:'center'}));if(document.fonts)document.fonts.ready.then(fitMath)}
/* Fórmulas más anchas que su tarjeta: se reducen para que quepan completas */
function fitMath(){document.querySelectorAll('.fit').forEach(c=>{const w=c.querySelector('.mw'),m=c.querySelector('math,.mx');if(!w||!m)return;m.style.fontSize='';const cw=c.clientWidth-6,mw=w.getBoundingClientRect().width;if(cw>0&&mw>cw){const fs=parseFloat(getComputedStyle(m).fontSize);m.style.fontSize=Math.max(c.classList.contains('fx')?fs*.78:10,fs*cw/mw)+'px'}})}
addEventListener('resize',fitMath);
window.addEventListener('hashchange',()=>{tab='c';scrollTo(0,0);render()});

document.addEventListener('click',async e=>{
 const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,d=b.dataset;
 if(a=='fav'){toggle(S.favs,d.k);save();render()}
 else if(a=='done'){toggle(S.done,d.k);save();render()}
 else if(a=='setst'){S.est[d.k]=d.v;kvSet('est',S.est);[...b.parentNode.querySelectorAll('.stb')].forEach(x=>x.classList.toggle('on',x==b));b.closest('.srow').dataset.e=d.v;refreshAvg()}
 else if(a=='nsave')notaSave(d.k);
 else if(a=='ncancel')notaCancel(d.k);
 else if(a=='setsel'){SEL=d.k;render()}
 else if(a=='gpt'){toast(`${SUBJ()[d.k].name}: ${fp(+d.v)}`)}
 else if(a=='setcur'){S.cur=d.k;SEL=d.k;kvSet('cur',S.cur);render()}
 else if(a=='tab'){tab=d.t;render()}
 else if(a=='cat'){cat=d.c;render()}
 else if(a=='calc')runCalc(d.f);
 else if(a=='sci')sciOpen();
 else if(a=='gadd'){document.querySelectorAll('.dgl-r').forEach(r=>{const bx=r.querySelectorAll('.bx');bx[bx.length-1].insertAdjacentHTML('afterend',gbox(bx[0].dataset.g,bx.length))})}
 else if(a=='gdel'){document.querySelectorAll('.dgl-r').forEach(r=>{const bx=r.querySelectorAll('.bx');if(bx.length>2)bx[bx.length-1].remove()})}
 else if(a=='addf')afOpen();
 else if(a=='editf')afOpen(d.f);
 else if(a=='delf'){const f=S.misf.find(x=>x.id==d.f);if(f&&confirm('¿Eliminar esta fórmula?')){S.misf=S.misf.filter(x=>x.id!=d.f);kvSet('misf',S.misf);mergeF();location.hash='#/formulario/'+f.subject}}
 else if(a=='inst'){if(ip){ip.prompt();await ip.userChoice;ip=null}else alert('Para instalar: menú ⋮ de Chrome → "Instalar app" o "Agregar a la pantalla de inicio".')}
 else if(a=='ans'){[...b.parentNode.children].forEach((x,i)=>{x.disabled=true;if(i==+d.a)x.classList.add('ok')});const ok=+d.i==+d.a,hoy=new Date().toDateString();
  if(!ok)b.classList.add('bad');if(S.sc.day!==hoy){S.sc.day=hoy;ok?S.sc.ok++:S.sc.bad++;save();$('.sc').innerHTML=`<i class="g">✓ ${S.sc.ok}</i><i class="r">✕ ${S.sc.bad}</i>`}}
 else if(a=='lrefresh'){await render();toast('Lista actualizada ✓')}
 else if(a=='savef')lsave();
 else if(a=='open')lopen(+d.id);
 else if(a=='del')ldel(+d.id);
 else if(a=='vclose')closeVisor()
 else if(a=='dtn')dtMove(1);
 else if(a=='dtp')dtMove(-1);
 else if(a=='gfilt'){GP=!GP;gRefresh()}
 else if(a=='gfsec'){const n=+d.n;GF.has(n)?GF.delete(n):GF.add(n);gRefresh()}
 else if(a=='gfclr'){GF.clear();gRefresh()}});

const toast=m=>{let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)}t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),1600)};
const notaIn=k=>document.querySelector(`input.nota[data-k="${k}"]`),notaAc=k=>document.querySelector(`.nac[data-k="${k}"]`);
function notaSave(k){const i=notaIn(k);let n=i.value.trim()===''?null:parseFloat(i.value.replace(',','.'));if(n!=null&&isNaN(n))n=null;
 if(n!=null){n=Math.min(100,Math.max(0,n));i.value=n}
 S.notas[k]=n;kvSet('notas',S.notas);i.dataset.orig=n??'';notaAc(k).hidden=true;i.closest('.srow').dataset.e=estOf(k);refreshAvg();toast(n==null?'Nota borrada':'Nota guardada ✓')}
function notaCancel(k){const i=notaIn(k);i.value=i.dataset.orig;notaAc(k).hidden=true}
document.addEventListener('input',e=>{const i=e.target;if(i.classList&&i.classList.contains('nota'))notaAc(i.dataset.k).hidden=(i.value.trim()===i.dataset.orig)});
document.addEventListener('keydown',e=>{const i=e.target;if(e.key==='Enter'&&i.classList&&i.classList.contains('nota')){e.preventDefault();notaSave(i.dataset.k);i.blur()}});
document.addEventListener('toggle',e=>{const d=e.target;if(d.matches&&d.matches('details.sem')){const n=+d.dataset.n;d.open?OPEN.add(n):OPEN.delete(n)}},true);

/* ===== Fórmula dibujada con cuadritos para escribir los números ===== */
const SUBU={'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','i':'ᵢ','s':'ₛ','t':'ₜ','+':'₊','−':'₋','n':'ₙ','x':'ₓ','u':'ᵤ','p':'ₚ'};
const symU=g=>{g=GREEK[g]||g;return g.replace(/_(.+)$/,(_,s)=>[...s].map(c=>SUBU[c]||c).join(''))};
const RAD='<svg viewBox="0 0 10 20" preserveAspectRatio="none"><path d="M0.4 11.2 L2.6 9.6 L5.6 19.2 L9.6 0.4 L10 0.4" fill="none" stroke="currentColor" stroke-width="1.3" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>';
function mathHTML(mathml,opt={}){
 const t=document.createElement('template');t.innerHTML=mathml;const root=t.content.firstElementChild,used=new Set(),map=opt.map||{},sigs=Object.keys(map).sort((a,b)=>b.length-a.length);
 const ln=e=>e.localName,tx=e=>e.textContent.trim();
 const sig=e=>{const n=ln(e);if(n=='mi')return tx(e);
  if(n=='msub'){const b=sig(e.children[0]);return b==null?null:b+'_'+tx(e.children[1])}
  if(n=='mover'&&/^[‾¯ˉ]$/.test(tx(e.children[1]))){const b=sig(e.children[0]);return b==null?null:b+'\u0304'}return null};
 const box=(v,lab)=>{used.add(v);return`<input class="bx" data-v="${v}" inputmode="decimal" enterkeyhint="next" autocomplete="off" placeholder="${lab}" aria-label="${lab}">`};
 function seq(kids,on){let h='';for(let i=0;i<kids.length;){const k=kids[i],dv=k.getAttribute&&k.getAttribute('data-v');
   if(on&&dv){h+=box(dv,symU(dv));i++;continue}
   if(on&&sigs.length){let hit=null;for(const s of sigs){let acc='',j=i;while(j<kids.length&&acc.length<s.length){const g=sig(kids[j]);if(g==null)break;acc+=g;j++}if(acc==s){hit={s,n:j-i};break}}
    if(hit){h+=box(map[hit.s],symU(hit.s));i+=hit.n;continue}}
   h+=node(k,on);i++}return h}
 function node(e,on){const n=ln(e),K=[...e.children];
  switch(n){
   case'math':case'mrow':{
    if(n=='math'&&K.length==1)return node(K[0],on);
    if(n=='mrow'&&K.length>=2){const a=K[0],z=K[K.length-1];
     if(ln(a)=='mo'&&/^[(\[]$/.test(tx(a))&&ln(z)=='mo'&&/^[)\]]$/.test(tx(z))){const inner=seq(K.slice(1,-1),on),tall=/class="(fr|sm|sq)"/.test(inner);
      return tall?`<span class="pg"><span class="lp"></span><span class="in">${inner}</span><span class="rp"></span></span>`:`${tx(a)}${inner}${tx(z)}`}}
    const q=K.findIndex(k=>ln(k)=='mo'&&tx(k)=='=');
    return q>=0?seq(K.slice(0,q+1),false)+seq(K.slice(q+1),on):seq(K,on)}
   case'mi':{const s=tx(e);return s.length==1&&e.getAttribute('mathvariant')!='normal'?`<i class="v">${s}</i>`:`<span class="up">${s}</span>`}
   case'mn':return tx(e);
   case'mo':{const s=tx(e);if(s=='min')return'<span class="up">mín</span>';return s&&'=+−·×÷±≤≥≈≠/'.includes(s)?`<span class="op">${s}</span>`:s}
   case'mspace':return'<span class="ts"></span>';
   case'mtext':return`<span class="tx">${tx(e)}</span>`;
   case'msub':return seq([K[0]],on)+`<sub>${seq([K[1]],false)}</sub>`;
   case'msup':return seq([K[0]],on)+`<sup>${seq([K[1]],false)}</sup>`;
   case'msubsup':return seq([K[0]],on)+`<span class="ssp"><sup>${seq([K[2]],false)}</sup><sub>${seq([K[1]],false)}</sub></span>`;
   case'mfrac':return`<span class="fr"><span class="nu">${seq([K[0]],on)}</span><span class="de">${seq([K[1]],on)}</span></span>`;
   case'msqrt':return`<span class="sq">${RAD}<span class="ra">${seq(K,on)}</span></span>`;
   case'mover':return/^[‾¯ˉ]$/.test(tx(K[1]))?`<span class="ba">${seq([K[0]],on)}</span>`:`<span class="ht">${seq([K[0]],on)}</span>`;
   case'munderover':return`<span class="sm"><span class="up2">${seq([K[2]],false)}</span><span class="sg">Σ</span><span class="lo">${seq([K[1]],false)}</span></span>`;
   default:return seq(K,on)}}
 return{html:`<span class="mx">${node(root,true)}</span>`,used}}
const gbox=(id,i)=>`<input class="bx g" data-g="${id}" inputmode="decimal" enterkeyhint="next" autocomplete="off" placeholder="${i+1}">`;
document.addEventListener('input',e=>{const t=e.target;if(!t.classList||!t.classList.contains('bx'))return;t.classList.remove('miss');
 if(t.dataset.v)document.querySelectorAll(`[data-v="${t.dataset.v}"]`).forEach(x=>{if(x!==t)x.value=t.value})});
document.addEventListener('keydown',e=>{const t=e.target;if(e.key!='Enter'||!t.classList||!t.classList.contains('bx'))return;e.preventDefault();
 const all=[...document.querySelectorAll('#app .bx')],nx=all[all.indexOf(t)+1];if(nx)nx.focus();else{t.blur();const b=document.querySelector('[data-act=calc]');if(b)b.click()}});
/* ===== Fórmulas propias (botón +) ===== */
const FNS=['asin','acos','atan','sin','cos','tan','log','ln','abs'];
const GREEK={alpha:'α',beta:'β',gamma:'γ',delta:'δ',epsilon:'ε',eta:'η',theta:'θ',lambda:'λ',mu:'μ',nu:'ν',rho:'ρ',sigma:'σ',tau:'τ',phi:'φ',chi:'χ',omega:'ω',Delta:'Δ',Sigma:'Σ',Omega:'Ω'};
const IDRE=/[A-Za-zα-ωΑ-Ω][A-Za-z0-9_]*/g;
const mergeF=()=>{D.formulas=[...D.fbase,...S.misf]};
const normE=t=>t.replace(/\s+/g,'').replace(/\^\{([^}]*)\}/g,'^($1)').replace(/[{}]/g,'').replace(/\*|·/g,'×').replace(/²/g,'^2').replace(/³/g,'^3').replace(/sqrt\(/g,'√(').replace(/(^|[^A-Za-z0-9_])pi(?![A-Za-z0-9_])/g,'$1π');
const varsOf=t=>[...new Set((t.match(IDRE)||[]).filter(n=>n!='π'&&!FNS.includes(n)))];
const symHTML=v=>{v=GREEK[v]||v;const m=v.match(/^(.+?)_(.+)$/);return m?`${GREEK[m[1]]||m[1]}<sub>${GREEK[m[2]]||m[2]}</sub>`:v};
/* Texto escrito (F = m*a) → MathML apilado */
function mlExpr(src,BOX=true){
 const s=src.replace(/\s+/g,'').replace(/\*|·/g,'×').replace(/²/g,'^2').replace(/³/g,'^3').replace(/(^|[^A-Za-z0-9_])pi(?![A-Za-z0-9_])/g,'$1π');
 let i=0;const G=new Map(),bad=m=>{throw Error(m)};
 const mi=x=>`<mi>${x}</mi>`,mo=x=>`<mo>${x}</mo>`,mn=x=>`<mn>${x}</mn>`,un=x=>G.has(x)?G.get(x):x;
 const ID=new Map(),dv=n=>BOX?` data-v="${n}"`:'';
 const idm=(n,v)=>GREEK[n]?`<mi${v||''}>${GREEK[n]}</mi>`:n.length==1?`<mi${v||''}>${n}</mi>`:`<mi mathvariant="normal"${v||''}>${n}</mi>`;
 const atomStart=()=>{const c=s[i];return c!==undefined&&/[A-Za-z0-9α-ωΑ-Ω(√,.]/.test(c)};
 const close=()=>{if(s[i]!=')')bad('Falta cerrar un paréntesis');i++};
 function pAtom(){const c=s[i];if(c===undefined)bad('La fórmula está incompleta');
  if(c=='('){i++;const e=pExpr();close();const ml=`<mrow>${mo('(')}${e}${mo(')')}</mrow>`;G.set(ml,e);return ml}
  if(c=='√'){i++;if(s[i]!='(')bad('Después de sqrt va un paréntesis');i++;const e=pExpr();close();return `<msqrt>${e}</msqrt>`}
  const n=s.slice(i).match(/^(\d+(?:[.,]\d+)?|[.,]\d+)/);if(n){i+=n[0].length;return mn(n[0])}
  const f=s.slice(i).match(/^(asin|acos|atan|sin|cos|tan|log|ln|abs)\(/);
  if(f){i+=f[1].length+1;const e=pExpr();close();return f[1]=='abs'?`<mrow>${mo('|')}${e}${mo('|')}</mrow>`:`<mrow>${mi(f[1])}${mo('⁡')}<mrow>${mo('(')}${e}${mo(')')}</mrow></mrow>`}
  if(/[A-Za-zα-ωΑ-Ω]/.test(c)){const m=s.slice(i).match(/^[A-Za-zα-ωΑ-Ω][A-Za-z0-9]*/)[0];i+=m.length;const d=m.match(/^([A-Za-z])(\d+)$/);if(d)return `<msub${dv(m)}>${mi(d[1])}${mn(d[2])}</msub>`;const ml=idm(m,dv(m));ID.set(ml,m);return ml}
  bad('No entiendo el símbolo «'+c+'»')}
 function pScript(){if(s[i]=='{'){i++;const e=pExpr();if(s[i]!='}')bad('Falta cerrar una llave');i++;return e}
  if(s[i]=='(')return un(pAtom());
  const m=s.slice(i).match(/^(\d+|[A-Za-zα-ωΑ-Ω]+)/);if(!m)bad('Falta el valor del exponente o del subíndice');i+=m[0].length;return/^\d/.test(m[0])?mn(m[0]):idm(m[0])}
 function pPow(){const b=pAtom();let sub=null,sup=null,raw='';
  while(s[i]=='_'||s[i]=='^'){const t=s[i++];let sg='';if(s[i]=='-'||s[i]=='−'){i++;sg=mo('−')}const a0=i,v=pScript(),w=sg?`<mrow>${sg}${v}</mrow>`:v;if(t=='_'){sub=w;raw=s.slice(a0,i).replace(/[{}]/g,'')}else sup=w}
  if(sub&&!sup&&BOX&&ID.has(b))return `<msub data-v="${ID.get(b)}_${raw}">${b}${sub}</msub>`;
  return sub&&sup?`<msubsup>${b}${sub}${sup}</msubsup>`:sup?`<msup>${b}${sup}</msup>`:sub?`<msub>${b}${sub}</msub>`:b}
 function pTerm(){let acc=[pPow()];for(;;){const c=s[i];
  if(c=='×'){i++;acc.push(mo('·'));acc.push(pPow())}
  else if(c=='/'||c=='÷'){i++;const d=pPow();acc=[`<mfrac><mrow>${acc.length==1?un(acc[0]):acc.join('')}</mrow><mrow>${un(d)}</mrow></mfrac>`]}
  else if(atomStart())acc.push(pPow());else return acc.join('')}}
 function pExpr(){const p=[];if(s[i]=='-'||s[i]=='−'){i++;p.push(mo('−'))}p.push(pTerm());
  while(s[i]=='+'||s[i]=='-'||s[i]=='−'){p.push(mo(s[i]=='+'?'+':'−'));i++;p.push(pTerm())}return p.join('')}
 const e=pExpr();if(i<s.length)bad('No entiendo «'+s.slice(i,i+6)+'»');return e}
function buildF(text,deg=true){
 const t=text.trim();if(!t)throw Error('Escribe la fórmula.');const p=t.split('=');if(p.length>2)throw Error('Usa un solo signo =.');
 const rhs=p.length==2?p[1]:p[0],lhs=p.length==2?p[0]:'';
 if(!rhs.trim())throw Error('Falta la parte derecha de la fórmula.');if(p.length==2&&!lhs.trim())throw Error('Falta el nombre del resultado (a la izquierda del =).');
 const mathml=`<math display="block"><mrow>${lhs?mlExpr(lhs,false)+'<mo>=</mo>':''}${mlExpr(rhs)}</mrow></math>`;
 const expr=normE(rhs),vars=varsOf(expr);if(!vars.length)throw Error('La fórmula necesita al menos una variable (una letra).');
 const test={};vars.forEach(v=>test[v]=0.5);
 try{sciEval(expr,deg,0,test)}catch(e){if(/^(Expresión|Símbolo)/.test(e.message))throw Error('La fórmula no es válida: '+e.message.charAt(0).toLowerCase()+e.message.slice(1))}
 return{mathml,expr,vars,lhs:lhs.trim()}}
let AF=null,AFV='';
function afCats(sub){return[...new Set(D.formulas.filter(f=>f.subject==sub).map(f=>f.cat))]}
function afOpen(id){AF=id?S.misf.find(x=>x.id==id):null;AFV='';let p=$('#af');
 if(!p){p=document.createElement('div');p.id='af';p.className='af';document.body.appendChild(p);
  p.addEventListener('click',e=>{const b=e.target.closest('[data-af]');if(!b)return;b.dataset.af=='close'?afClose():afSave()});
  p.addEventListener('input',e=>afSync(e.target.id=='afS'));p.addEventListener('change',e=>afSync(e.target.id=='afS'))}
 const sub=AF?AF.subject:fsub;
 p.innerHTML=`<div class="af-bk" data-af="close"></div><div class="af-p"><div class="af-h"><b>${AF?'Editar fórmula':'Nueva fórmula'}</b><button data-af="close" aria-label="Cerrar">✕</button></div>
 <label>Materia<select id="afS">${D.career.semesters.map(sm=>`<optgroup label="${ORD[sm.n]||sm.n+'.º'} Semestre">${sm.items.map(k=>`<option value="${k}" ${k==sub?'selected':''}>${SUBJ()[k].name}</option>`).join('')}</optgroup>`).join('')}</select></label>
 <label>Sección (tema)<select id="afC"></select></label>
 <label id="afCnW" hidden>Nombre de la nueva sección<input id="afCn" placeholder="Ej.: Tema 6 · Mis fórmulas" autocomplete="off"></label>
 <label>Nombre de la fórmula<input id="afN" placeholder="Ej.: Segunda ley de Newton" autocomplete="off" value="${AF?esc(AF.name):''}"></label>
 <label>Fórmula<input id="afF" placeholder="F = m * a" autocomplete="off" autocapitalize="off" spellcheck="false" value="${AF?esc(AF.plain):''}"></label>
 <div class="af-pv" id="afPv"></div>
 <p class="af-hint">Usa <b>*</b> para multiplicar, <b>/</b> para dividir (se dibuja como fracción), <b>^</b> para potencias, <b>_</b> para subíndices (<b>x_i</b>), <b>sqrt( )</b>, <b>sin( )</b>, <b>cos( )</b>, <b>tan( )</b>, <b>log( )</b>, <b>ln( )</b> y <b>pi</b>. Cada letra o nombre distinto se pedirá como dato.</p>
 <div id="afV"></div>
 <label>Unidad del resultado (opcional)<input id="afU" placeholder="Ej.: N, m/s, %" autocomplete="off" value="${AF?esc(AF.unit||''):''}"></label>
 <label>Ángulos (si usas sin, cos o tan)<select id="afD"><option value="1" ${AF&&AF.deg===false?'':'selected'}>Grados</option><option value="0" ${AF&&AF.deg===false?'selected':''}>Radianes</option></select></label>
 <div class="af-err" id="afE"></div><button class="btn" data-af="save">Guardar fórmula</button></div>`;
 afSync(true);p.hidden=false;document.body.style.overflow='hidden'}
function afClose(){const p=$('#af');if(p)p.hidden=true;document.body.style.overflow=''}
addEventListener('hashchange',afClose);
/* Mantiene al día secciones, vista previa y lista de variables */
function afSync(subChanged){
 const sub=$('#afS').value,C=$('#afC');
 if(subChanged||!C.options.length){const prev=C.value||(AF&&AF.cat)||'',cs=afCats(sub);
  C.innerHTML=cs.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')+`<option value="__new">＋ Nueva sección…</option>`;
  C.value=cs.includes(prev)?prev:(cs[0]||'__new')}
 $('#afCnW').hidden=C.value!='__new';
 const pv=$('#afPv'),V=$('#afV');
 try{const b=buildF($('#afF').value,$('#afD').value=='1');pv.innerHTML=`<span class="fm2 fit"><span class="mw">${b.mathml}</span></span>`;
  const names=[...(b.lhs&&/^[A-Za-zα-ωΑ-Ω][A-Za-z0-9_]*$/.test(b.lhs)?[b.lhs]:[]),...b.vars],sig=names.join('|');
  if(sig!=AFV){const old={};V.querySelectorAll('[data-var]').forEach(x=>old[x.dataset.var]=x.value);const ex={};if(AF)(AF.donde||[]).forEach(([a,m])=>ex[a]=m);
   V.innerHTML=names.length?`<div class="fl">Qué significa cada letra (opcional)</div>`+names.map((n,k)=>`<label>${symHTML(n)}${k==0&&b.lhs==n?' (resultado)':''}<input data-var="${esc(n)}" placeholder="Ej.: fuerza, masa…" autocomplete="off" value="${esc(old[n]??ex[n]??'')}"></label>`).join(''):'';AFV=sig}
  $('#afE').textContent='';fitMath()}
 catch(e){pv.innerHTML=$('#afF').value.trim()?`<span class="af-bad">${esc(e.message)}</span>`:'<span class="af-ph">Aquí verás cómo se dibuja tu fórmula</span>';V.innerHTML='';AFV=''}}
function afSave(){
 const E=$('#afE'),name=$('#afN').value.trim(),sub=$('#afS').value,deg=$('#afD').value=='1';let cat=$('#afC').value;
 try{if(cat=='__new')cat=$('#afCn').value.trim();if(!cat)throw Error('Escribe el nombre de la nueva sección.');if(!name)throw Error('Escribe el nombre de la fórmula.');
  const text=$('#afF').value.trim(),b=buildF(text,deg),desc={};document.querySelectorAll('#afV [data-var]').forEach(x=>desc[x.dataset.var]=x.value.trim());
  const donde=[];if(b.lhs&&desc[b.lhs])donde.push([symHTML(b.lhs),desc[b.lhs]]);b.vars.forEach(v=>{if(desc[v])donde.push([symHTML(v),desc[v]])});
  const o={id:AF?AF.id:'u'+Date.now(),custom:true,subject:sub,cat,name,short:'',icon:'sigma',plain:text,mathml:b.mathml,expr:b.expr,deg,unit:$('#afU').value.trim(),donde,
   vars:b.vars.map(v=>({id:v,label:desc[v]?`${symHTML(v)} · ${esc(desc[v])}`:`Valor de ${symHTML(v)}`}))};
  S.misf=AF?S.misf.map(x=>x.id==AF.id?o:x):[...S.misf,o];kvSet('misf',S.misf);mergeF();afClose();
  const h='#/formulario/'+sub;if(location.hash==h)render();else location.hash=h}
 catch(e){E.textContent=e.message}}

/* ===== Calculadora científica (sin eval: analizador propio) ===== */
function sciEval(src,deg=true,ans=0,vars=null){
 const s=src.replace(/\s+/g,''),err=m=>{throw Error(m)},names=vars?Object.keys(vars).sort((a,b)=>b.length-a.length):[];let i=0;
 const rad=x=>deg?x*Math.PI/180:x,back=x=>deg?x*180/Math.PI:x,clean=x=>Math.abs(x)<1e-12?0:x;
 const starts=()=>{const c=s[i];return c!==undefined&&(/[0-9,(πe√]/.test(c)||s.startsWith('Ans',i)||names.some(n=>s.startsWith(n,i))||/^(asin|acos|atan|sin|cos|tan|log|ln|abs)/.test(s.slice(i,i+4)))};
 function fact(n){if(n<0||n!=Math.floor(n))err('n! requiere un entero mayor o igual a 0');if(n>170)err('n! demasiado grande');let r=1;for(let k=2;k<=n;k++)r*=k;return r}
 function fn(n,a){switch(n){
  case'sin':return clean(Math.sin(rad(a)));case'cos':return clean(Math.cos(rad(a)));
  case'tan':if(deg&&Math.abs(((a%180)+180)%180-90)<1e-9)err('tan no está definida en ese ángulo');return clean(Math.tan(rad(a)));
  case'asin':if(Math.abs(a)>1)err('sin⁻¹ solo admite valores entre −1 y 1');return back(Math.asin(a));
  case'acos':if(Math.abs(a)>1)err('cos⁻¹ solo admite valores entre −1 y 1');return back(Math.acos(a));
  case'atan':return back(Math.atan(a));
  case'log':if(a<=0)err('log: el valor debe ser positivo');return Math.log10(a);
  case'ln':if(a<=0)err('ln: el valor debe ser positivo');return Math.log(a);
  default:return Math.abs(a)}}
 function arg(){if(s[i]=='('){i++;const v=expr();if(s[i]==')')i++;return v}return power()}
 function prim(){const c=s[i];if(c===undefined)err('Expresión incompleta');
  if(c=='('){i++;const v=expr();if(s[i]==')')i++;return v}
  const m=s.slice(i).match(/^(\d+(?:,\d*)?|,\d+)(E[+−-]?\d+)?/);
  if(m){i+=m[0].length;return parseFloat(m[1].replace(',','.')+(m[2]?'e'+m[2].slice(1).replace('−','-'):''))}
  if(names.length){const f0=s.slice(i).match(/^(asin|acos|atan|sin|cos|tan|log|ln|abs)(?=\()/);if(f0){i+=f0[0].length;return fn(f0[0],arg())}
   for(const n of names)if(s.startsWith(n,i)){i+=n.length;return vars[n]}}
  if(s.startsWith('Ans',i)){i+=3;return ans}
  if(c=='π'){i++;return Math.PI}
  if(c=='e'){i++;return Math.E}
  if(c=='√'){i++;const a=arg();if(a<0)err('Raíz de un número negativo');return Math.sqrt(a)}
  const f=s.slice(i).match(/^(asin|acos|atan|sin|cos|tan|log|ln|abs)/);
  if(f){i+=f[0].length;return fn(f[0],arg())}
  err('Símbolo no válido: '+c)}
 function post(){let v=prim();for(;;){if(s[i]=='!'){i++;v=fact(v)}else if(s[i]=='%'){i++;v/=100}else return v}}
 function power(){const b=post();if(s[i]=='^'){i++;const e=unary(),r=Math.pow(b,e);if(isNaN(r))err('Resultado no definido');return r}return b}
 function unary(){if(s[i]=='−'||s[i]=='-'){i++;return -unary()}if(s[i]=='+'){i++;return unary()}return power()}
 function term(){let v=unary();for(;;){const c=s[i];
  if(c=='×'||c=='*'){i++;v*=unary()}
  else if(c=='÷'||c=='/'){i++;const d=unary();if(d==0)err('No se puede dividir entre cero');v/=d}
  else if(starts())v*=unary();else return v}}
 function expr(){let v=term();while(s[i]=='+'||s[i]=='−'||s[i]=='-'){const o=s[i++],r=term();v=o=='+'?v+r:v-r}return v}
 const v=expr();if(i<s.length)err('Expresión no válida');if(!isFinite(v))err('Resultado no definido');return v}
const sciFmt=x=>{if(!isFinite(x))return 'Error';const a=Math.abs(x);let t;
 if(a!=0&&(a>=1e12||a<1e-9)){const[m,e]=x.toExponential(9).split('e');t=`${+m}E${+e}`}else t=String(+x.toPrecision(12));
 return t.replace('.',',').replace('-','−')};
/* ---- Calculadora científica con pantalla natural (fracciones, raíces y potencias editables con flechas) ---- */
const SCI={deg:true,ans:0,eq:false,sh:false,err:'',res:''};
const mkRow=(node,k)=>({it:[],node,k}),mkNode=(t,n)=>{const nd={t,s:[]};for(let k=0;k<n;k++)nd.s.push(mkRow(nd,k));return nd};
let CR=mkRow(null,0),CC={r:CR,i:0};
const sciReset=()=>{CR=mkRow(null,0);CC={r:CR,i:0};SCI.err=''};
const addC=v=>{CC.r.it.splice(CC.i,0,{c:v});CC.i++};
function addN(nd,into){const r=CC.r;r.it.splice(CC.i,0,nd);nd.row=r;CC.i++;if(into!=null)CC={r:nd.s[into],i:0};return nd}
function addSup(txt){const nd=mkNode('sup',1);addN(nd);if(txt!=null)[...txt].forEach(ch=>nd.s[0].it.push({c:ch}));else CC={r:nd.s[0],i:0}}
function insFrac(){const r=CC.r,j=CC.i;let st=j;const isNum=x=>x.c&&/^([0-9,]|π|e|Ans)$/.test(x.c);
 if(j>0&&r.it[j-1].c==')'){let d=0;for(let q=j-1;q>=0;q--){const c=r.it[q].c;if(c==')')d++;else if(c&&c.endsWith('('))d--;if(d==0){st=q;break}}}
 else while(st>0&&isNum(r.it[st-1]))st--;
 let taken=r.it.splice(st,j-st);if(taken.length>2&&taken[0].c=='('&&taken[taken.length-1].c==')')taken=taken.slice(1,-1);
 const nd=mkNode('frac',2);r.it.splice(st,0,nd);nd.row=r;taken.forEach(x=>{nd.s[0].it.push(x);if(x.t)x.row=nd.s[0]});
 CC={r:nd.s[taken.length?1:0],i:0}}
function mvR(){const{r,i}=CC;if(i<r.it.length){const x=r.it[i];if(x.t)CC={r:x.s[0],i:0};else CC.i++;return}
 const nd=r.node;if(!nd)return;if(r.k<nd.s.length-1)CC={r:nd.s[r.k+1],i:0};else{const pr=nd.row;CC={r:pr,i:pr.it.indexOf(nd)+1}}}
function mvL(){const{r,i}=CC;if(i>0){const x=r.it[i-1];if(x.t){const lr=x.s[x.s.length-1];CC={r:lr,i:lr.it.length}}else CC.i--;return}
 const nd=r.node;if(!nd)return;if(r.k>0){const pr=nd.s[r.k-1];CC={r:pr,i:pr.it.length}}else{const pr=nd.row;CC={r:pr,i:pr.it.indexOf(nd)}}}
function mvV(d){for(let rr=CC.r;rr.node;rr=rr.node.row){const nd=rr.node;
  if((nd.t=='frac'||nd.t=='nroot')&&((d>0&&rr.k==0)||(d<0&&rr.k==1))){const tr=nd.s[d>0?1:0];CC={r:tr,i:Math.min(CC.r==rr?CC.i:0,tr.it.length)};return}}
 if(d>0&&CC.r.node&&CC.r.node.t=='sup')mvR()}
const rowEmpty=r=>!r.it.length;
function bs(){const{r,i}=CC;
 if(i>0){const x=r.it[i-1];if(x.t){if(x.s.every(rowEmpty)){r.it.splice(i-1,1);CC.i--}else{const lr=x.s[x.s.length-1];CC={r:lr,i:lr.it.length}}}else{r.it.splice(i-1,1);CC.i--}return}
 const nd=r.node;if(!nd)return;const pr=nd.row,ix=pr.it.indexOf(nd);if(nd.s.every(rowEmpty))pr.it.splice(ix,1);CC={r:pr,i:ix}}
const ser=r=>r.it.map(x=>x.c!==undefined?x.c:x.t=='frac'?`((${ser(x.s[0])})÷(${ser(x.s[1])}))`:x.t=='sqrt'?`√(${ser(x.s[0])})`:x.t=='sup'?`^(${ser(x.s[0])})`:x.t=='abs'?`abs(${ser(x.s[0])})`:`((${ser(x.s[1])})^(1÷(${ser(x.s[0])})))`).join('');
const CURH='<span class="sc-cur"></span>',FNL={'asin(':'sin⁻¹(','acos(':'cos⁻¹(','atan(':'tan⁻¹('};
function rowH(r){let h='';const here=CC.r==r;r.it.forEach((x,i)=>{if(here&&CC.i==i)h+=CURH;h+=itemH(x)});if(here&&CC.i==r.it.length)h+=CURH;return r.node&&!r.it.length?`<span class="ph">${h}</span>`:h}
function itemH(x){if(x.c!==undefined)return`<span class="ch${'+−×÷'.includes(x.c)?' o':''}">${FNL[x.c]||x.c}</span>`;
 const[a,b]=x.s;switch(x.t){
  case'frac':return`<span class="fr"><span class="nu">${rowH(a)}</span><span class="de">${rowH(b)}</span></span>`;
  case'sqrt':return`<span class="sq">${RAD}<span class="ra">${rowH(a)}</span></span>`;
  case'sup':return`<sup class="sp">${rowH(a)}</sup>`;
  case'abs':return`<span class="ab">|</span>${rowH(a)}<span class="ab">|</span>`;
  default:return`<span class="sq"><sup class="ix">${rowH(a)}</sup>${RAD}<span class="ra">${rowH(b)}</span></span>`}}
const SCK={top:[['2nd','2nd',0,'sh'],['DEG','DEG'],['◀','◀',0,'a'],['▲','▲',0,'a'],['▼','▼',0,'a'],['▶','▶',0,'a'],
 ['frac','a⁄b'],['√','√','ⁿ√'],['x²','x²','x³'],['xʸ','xʸ'],['log','log','10ˣ'],['ln','ln','eˣ'],
 ['sin','sin','sin⁻¹'],['cos','cos','cos⁻¹'],['tan','tan','tan⁻¹'],['π','π'],['e','e'],['abs','|x|'],
 ['(','('],[')',')'],['x!','x!'],['1/x','x⁻¹'],['%','%'],['EXP','EXP']],
 num:[['7','7'],['8','8'],['9','9'],['⌫','⌫',0,'r'],['AC','AC',0,'r'],['4','4'],['5','5'],['6','6'],['×','×',0,'o'],['÷','÷',0,'o'],['1','1'],['2','2'],['3','3'],['+','+',0,'o'],['−','−',0,'o'],['0','0'],[',',','],['Ans','Ans'],['=','=',0,'g']]};
const SH={sin:'asin',cos:'acos',tan:'atan',log:'10ˣ',ln:'eˣ','x²':'x³','√':'nroot'};
function sciOpen(){let p=$('#sci');
 if(!p){p=document.createElement('div');p.id='sci';p.className='sci';
  const K=a=>a.map(([k,l,s,c])=>`<button class="k k${c||'f'}" data-sk="${k}" data-l="${l}" ${s?`data-s="${s}"`:''} ${k=='2nd'?'id="sciSh"':''}>${l}</button>`).join('');
  p.innerHTML=`<div class="sci-bk" data-sk="close"></div><div class="sci-p"><div class="sci-h"><b>Calculadora científica</b><button data-sk="close" aria-label="Cerrar">✕</button></div>
  <div class="sci-d"><div class="sci-s"><span id="sciM"></span></div><div id="sciE" class="mx"></div><div id="sciR"></div></div>
  <div class="sci-f">${K(SCK.top)}</div><div class="sci-n">${K(SCK.num)}</div></div>`;
  p.addEventListener('click',e=>{const b=e.target.closest('[data-sk]');if(!b)return;b.dataset.sk=='close'?sciClose():sciKey(b.dataset.sk)});
  document.body.appendChild(p);kvGet('deg').then(v=>{if(typeof v=='boolean'){SCI.deg=v;sciDraw()}}).catch(()=>{})}
 p.hidden=false;document.body.style.overflow='hidden';sciDraw()}
function sciClose(){const p=$('#sci');if(p)p.hidden=true;document.body.style.overflow=''}
addEventListener('hashchange',sciClose);
function sciDraw(){const E=$('#sciE');if(!E)return;E.innerHTML=rowH(CR);const t=ser(CR);let r='';
 if(SCI.err)r=SCI.err;else if(SCI.eq)r=SCI.res;else if(t){try{r='= '+sciFmt(sciEval(t,SCI.deg,SCI.ans))}catch(e){r=''}}
 const R=$('#sciR');R.textContent=r;R.classList.toggle('bad',!!SCI.err);R.classList.toggle('big',SCI.eq&&!SCI.err);
 $('#sciM').textContent=(SCI.deg?'DEG':'RAD')+(SCI.sh?' · 2nd':'');
 document.querySelectorAll('#sci .k').forEach(b=>{if(b.dataset.sk=='DEG')b.textContent=SCI.deg?'DEG':'RAD';else if(b.dataset.s)b.textContent=SCI.sh?b.dataset.s:b.dataset.l});
 $('#sciSh').classList.toggle('on',SCI.sh);const c=E.querySelector('.sc-cur');if(c)c.scrollIntoView({block:'nearest',inline:'nearest'})}
function sciKey(k0){const S_=SCI;let k=k0;
 if(k=='2nd'){S_.sh=!S_.sh;return sciDraw()}
 if(S_.sh&&SH[k])k=SH[k];S_.sh=false;
 if(k=='DEG'){S_.deg=!S_.deg;kvSet('deg',S_.deg);return sciDraw()}
 S_.err='';const nav={'◀':mvL,'▶':mvR,'▲':()=>mvV(-1),'▼':()=>mvV(1)};
 if(nav[k]){S_.eq=false;nav[k]();return sciDraw()}
 if(k=='AC'){sciReset();S_.eq=false;return sciDraw()}
 if(k=='⌫'){S_.eq=false;bs();return sciDraw()}
 if(k=='='){const t=ser(CR);if(!t)return;try{const v=sciEval(t,S_.deg,S_.ans);S_.ans=v;S_.eq=true;S_.res=sciFmt(v)}catch(e){S_.err=e.message=='Expresión incompleta'?'Completa los cuadritos vacíos':e.message}return sciDraw()}
 if(S_.eq){S_.eq=false;const cont=['+','−','×','÷','xʸ','x²','x³','1/x','x!','%'].includes(k);sciReset();if(cont)addC('Ans')}
 if(['sin','cos','tan','asin','acos','atan','log','ln'].includes(k))addC(k+'(');
 else if(k=='frac')insFrac();else if(k=='√')addN(mkNode('sqrt',1),0);else if(k=='nroot')addN(mkNode('nroot',2),0);else if(k=='abs')addN(mkNode('abs',1),0);
 else if(k=='x²')addSup('2');else if(k=='x³')addSup('3');else if(k=='1/x')addSup('−1');else if(k=='xʸ')addSup(null);
 else if(k=='10ˣ'){addC('1');addC('0');addSup(null)}else if(k=='eˣ'){addC('e');addSup(null)}
 else if(k=='EXP'){addC('×');addC('1');addC('0');addSup(null)}else if(k=='x!')addC('!');else addC(k);
 sciDraw()}

/* ===== Arranque, estado de conexión y PWA ===== */
document.querySelectorAll('[data-i]').forEach(n=>n.innerHTML=ic(n.dataset.i,+n.dataset.s||22));
(async()=>{
 const j=async u=>(await fetch(u)).json();
 try{D.career=await j('career.json');D.formulas=await j('formulas.json');D.fbase=D.formulas;D.sub={};
  for(const[k,s]of Object.entries(D.career.subjects))if(s.data){try{D.sub[k]=await j(`${s.data}.json`)}catch(e){}}
  S.favs=(await kvGet('favs'))||[];S.done=(await kvGet('done'))||[];S.sc=(await kvGet('sc'))||S.sc;S.cur=(await kvGet('cur'))||null;S.notas=(await kvGet('notas'))||{};S.est=(await kvGet('est'))||{};S.misf=(await kvGet('misf'))||[];
  if(/[?&]migrar\b/.test(location.search)){let c=0;for(const[k,s]of Object.entries(D.career.subjects))if(s.nota!=null&&S.notas[k]===undefined){S.notas[k]=s.nota;c++}await kvSet('notas',S.notas);history.replaceState(null,'',location.pathname+location.hash);setTimeout(()=>toast(c?`Notas copiadas a este celular: ${c}`:'No había notas por copiar'),700)}
 tx('kv','readwrite',s=>s.delete('gdrive')).catch(()=>{});mergeF();render()}
 catch(e){app.innerHTML='<div class="empty">No se pudieron cargar los datos. Abre la app desde un servidor (no con doble clic) o conéctate una vez a internet.</div>'}})();
if('serviceWorker'in navigator){const had=navigator.serviceWorker.controller;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(had)location.reload()});
 addEventListener('load',()=>navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}))}

/* Instalación PWA: guarda el evento para el botón Instalar de Inicio */
let ip;addEventListener('beforeinstallprompt',e=>{e.preventDefault();ip=e});

document.addEventListener('change',e=>{const t=e.target;if(!t)return;
 if(t.id=='fi'){const n=document.getElementById('fn'),f=t.files;if(n){n.textContent=!f.length?'Sin archivo':f.length==1?f[0].name:f.length+' archivos';n.classList.toggle('on',!!f.length)}}
 else if(t.id=='fs'){const l=document.getElementById('fus');if(l)l.innerHTML=unitOpts(t.value)}});
