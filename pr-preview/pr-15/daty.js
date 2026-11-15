/* ---------- ruchome „dziś”: daty w danych liczą się od dnia oglądania ----------
   Dane są pisane tak, jakby dziś był 15.11.2026 (BAZA). Przy wczytaniu przesuwamy każdą datę z okna BAZA −90…+100 dni
   o pełne tygodnie, o ile minęło od BAZY (dni tygodnia się zgadzają: sobota zostaje sobotą). Dalej niż do 28.02.2027
   nie idziemy, bo wtedy rozjechałyby się terminy ustawowe, lata i nazwy miesięcy w tekstach.
   Datę „@” przed liczbą (@31.12) zostawiamy bez zmian: to termin ustawowy, nie wydarzenie z życia osoby.
   Te same zasady ma serwer (serwer/daty.py). Do testów: ?dzis=2026-12-20. */
(function(){
 const D=864e5, dn=(y,m,d)=>Date.UTC(y,m-1,d)/D, odDn=n=>new Date(n*D);
 const BAZA=dn(2026,11,15), KONIEC=dn(2027,2,28), OD=BAZA-90, DO=BAZA+100;
 let t=new Date(),q=null;try{q=new URLSearchParams(location.search).get('dzis')}catch(e){}
 const qm=/^(\d{4})-(\d{2})-(\d{2})$/.exec(q||'');
 let T=qm?dn(+qm[1],+qm[2],+qm[3]):dn(t.getFullYear(),t.getMonth()+1,t.getDate());
 T=Math.min(Math.max(T,BAZA),KONIEC);
 const O=Math.floor((T-BAZA)/7)*7;                     // przesunięcie danych, w pełnych tygodniach
 const SW=['01-01','01-06','05-01','05-03','08-15','11-01','11-11','12-24','12-25','12-26'];
 const md=n=>{const x=odDn(n);return String(x.getUTCMonth()+1).padStart(2,'0')+'-'+String(x.getUTCDate()).padStart(2,'0')};
 const roboczy=n=>{const w=odDn(n).getUTCDay();return w>0&&w<6&&!SW.includes(md(n))};
 // dzień roboczy, który po przesunięciu wypadłby w święto, idzie na następny dzień roboczy (sesja rady nie w Wigilię)
 function przesunDzien(n){
  if(n<OD||n>DO)return n;
  const r=n+O;if(!O||!roboczy(n)||roboczy(r)||r===T)return r;
  let x=r;while(!roboczy(x))x++;
  return r<T&&x>=T?r:x;          // przeszłe zostaje przeszłym
 }
 const MG=['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];
 const MM=['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'];
 const ML=['styczniu','lutym','marcu','kwietniu','maju','czerwcu','lipcu','sierpniu','wrześniu','październiku','listopadzie','grudniu'];
 const R=new RegExp('(@?)(?:(\\d{4})-(\\d{2})-(\\d{2})|(?<![\\d.,])(\\d{1,2})\\.(\\d{2})(?:\\.(\\d{4}))?(?!\\d|\\.\\d)|(?<![\\d,])(\\d{1,2}) ('+MG.join('|')+')(?: (\\d{4}))?|('+MM.concat(ML).join('|')+') (\\d{4}))','g');
 // rok dla daty bez roku: ten, w którym data leży najbliżej BAZY
 const bezRoku=(d,m)=>[2025,2026,2027].map(y=>dn(y,m,d)).sort((a,b)=>Math.abs(a-BAZA)-Math.abs(b-BAZA))[0];
 const dd=(n,jed)=>{const d=odDn(n).getUTCDate();return jed&&d<10?String(d):String(d).padStart(2,'0')};
 /* przesuwa daty w tekście; zbior (Set) dostaje dni przesuniętych dat, żeby policzyć „za N dni” */
 function przesun(s,zbior){
  if(!s||!/\d/.test(s))return s;
  return s.replace(R,(c,at,iy,im,id,d,m,y,gd,gm,gy,mn,my)=>{
   if(at)return c.slice(1);
   let n,f;
   if(iy){n=dn(+iy,+im,+id);f=r=>{const x=odDn(r);return x.getUTCFullYear()+'-'+md(r)}}
   else if(d){if(+m<1||+m>12||+d<1||+d>31)return c;n=y?dn(+y,+m,+d):bezRoku(+d,+m);
    f=r=>dd(r,d.length===1)+'.'+String(odDn(r).getUTCMonth()+1).padStart(2,'0')+(y?'.'+odDn(r).getUTCFullYear():'')}
   else if(gd){const i=MG.indexOf(gm);n=gy?dn(+gy,i+1,+gd):bezRoku(+gd,i+1);
    f=r=>odDn(r).getUTCDate()+' '+MG[odDn(r).getUTCMonth()]+(gy?' '+odDn(r).getUTCFullYear():'')}
   else{const lok=ML.includes(mn),i=(lok?ML:MM).indexOf(mn);n=dn(+my,i+1,15);
    f=r=>(lok?ML:MM)[odDn(r).getUTCMonth()]+' '+odDn(r).getUTCFullYear()}
   const r=przesunDzien(n);
   if(n>=OD&&n<=DO&&zbior)zbior.add(r);
   return r===n?c:f(r);
  });
 }
 const ileDni=n=>n===1?'1 dzień':n+' dni';
 /* kod pliku: przesuwa daty linia po linii; „za N dni” liczy od nowa, gdy w linii jest jedna taka data */
 function przesunKod(kod){
  return kod.split('\n').map(l=>{
   const z=new Set(),n=przesun(l,z);
   if(z.size!==1||!/(za|jeszcze) \d+ dni/i.test(n))return n;
   const k=[...z][0]-T;return k<1?n:n.replace(/\b(za|jeszcze) \d+ dni/gi,(c,w)=>w+' '+ileDni(k));
  }).join('\n');
 }
 /* zamiast <script src>: pobiera plik, przesuwa daty i wykonuje go od razu, w tej samej kolejności */
 function wczytaj(src){
  let kod=null;
  try{const x=new XMLHttpRequest();x.open('GET',src,false);x.send();if(x.status>=200&&x.status<300)kod=x.responseText}catch(e){}
  if(kod==null){document.write('<script src="'+src+'"><\/script>');return}
  const s=document.createElement('script');s.text=przesunKod(kod)+'\n//# sourceURL='+src;document.head.appendChild(s);
 }
 const pl=n=>dd(n)+'.'+String(odDn(n).getUTCMonth()+1).padStart(2,'0')+'.'+odDn(n).getUTCFullYear();
 const krotko=n=>pl(n).slice(0,5);
 const naRoboczy=n=>{while(!roboczy(n))n++;return n};
 /* terminy ustawowe: zawsze najbliższy, który jeszcze nie minął */
 function rata(){   // podatek od nieruchomości: 15.03, 15.05, 15.09, 15.11
  const RZ=['I','II','III','IV'];
  for(let y=2026;y<2029;y++)for(let i=0;i<4;i++){const n=naRoboczy(dn(y,[3,5,9,11][i],15));if(n>=T)return {n,kr:krotko(n),pelna:pl(n),rata:RZ[i]+' rata '+y,rataKr:RZ[i]+', '+y}}
 }
 function zus(){    // składki za poprzedni miesiąc do 20.
  const x=odDn(T);let y=x.getUTCFullYear(),m=x.getUTCMonth()+1;
  let n=naRoboczy(dn(y,m,20));if(n<T){m++;if(m>12){m=1;y++}n=naRoboczy(dn(y,m,20))}
  const pm=m===1?12:m-1;return {n,kr:krotko(n),pelna:pl(n),za:MM[pm-1],zaNr:String(pm).padStart(2,'0')+'.'+(m===1?y-1:y)};
 }
 function ikze(){   // wpłata do 31.12, odliczenie w PIT za ten rok; przypomnienie 1 grudnia albo jutro
  const y=odDn(T).getUTCFullYear(),p=Math.max(dn(y,12,1),T+1);
  return {rok:y,przyp:pl(p)};
 }
 window.DATY={BAZA,T,O,dzis:pl(T),przesun:s=>przesun(s),przesunKod,wczytaj,rata,zus,ikze,
  przesunEl:el=>{if(el)el.innerHTML=przesun(el.innerHTML)}};
 window.wczytaj=wczytaj;
})();
