/* ====== PERSONALIZA AQUÍ ====== */
const START = new Date(2024, 10, 7); // 7 nov 2024
const PHRASES = ["Gracias por cada risa compartida…", "Contigo todo es mejor.", "Eres mi lugar favorito en el mundo.", "Y lo mejor todavía está por venir."];
const TIMELINE = [
  ["7 nov 2024","Empezó todo","El día en que nuestra historia comenzó.","💫"],
  ["Primeras semanas","Conociéndonos","Cada charla nos acercaba un poquito más.","💬"],
  ["Nuestra primera aventura","Un viaje inolvidable","Fuimos a la playa: el sol, el mar y tú a mi lado. Un día que guardo para siempre.","🏖️"],
  ["Un día cualquiera","Los pequeños momentos","Los que parecen simples y son los mejores.","🌅"],
  ["Hoy","Seguimos juntos","Y lo mejor está por venir.","💍"]
];
// Para fotos reales: pon la ruta en src, por ejemplo "fotos/foto1.jpg"
const PHOTOS = [
  {src:"img/1.jpeg",cap:"Nuestro comienzo"},{src:"img/2.jpeg",cap:"Aquella tarde"},{src:"img/3.jpeg",cap:"Mi risa favorita"},
  {src:"img/4.jpeg",cap:"Una aventura"},{src:"img/5.jpeg",cap:"Nosotros"},{src:"img/6.jpeg",cap:"Siempre juntos"}
];
const LETTER = "Mi amor:\n\nHoy celebramos otro año juntos y quiero darte las gracias por cada risa, cada abrazo y cada momento compartido.\n\nContigo aprendí que el amor es sencillo, bonito y verdadero. Gracias por elegirme cada día.\n\nTe amo muchísimo.\n\nSiempre tuyo ❤️";
const REASONS = `Por tu sonrisa que ilumina mis días|Por cómo me haces reír hasta llorar|Por tu paciencia infinita conmigo|Por ser mi lugar seguro|Por creer en mí cuando yo dudo|Por tu forma de abrazarme|Por cómo me miras|Por tu risa contagiosa|Por cuidar de mí|Por ser mi mejor compañía|Por escucharme sin juzgar|Por tus mensajes que me alegran el día|Por cada “buenos días” tuyo|Por hacerme sentir especial|Por tus ocurrencias|Por tu mirada cuando te emocionas|Por tus manos en las mías|Por animarme siempre|Por soñar conmigo|Por tus abrazos largos|Por tu voz que me calma|Por esperar conmigo lo que viene|Por tu autenticidad|Por tu ternura|Por tus detalles pequeños|Por aguantar mis días malos|Por celebrar mis logros como tuyos|Por tus ganas de vivir|Por tu corazón enorme|Por las noches de película contigo|Por las caminatas sin rumbo|Por los viajes que vamos a hacer|Por las comidas que compartimos|Por tus chistes malos que amo|Por tus besos de sorpresa|Por cómo me tomas de la mano|Por hacerme sentir en casa|Por tu apoyo incondicional|Por tu sinceridad|Por tu forma de ver la vida|Por enseñarme a ser mejor|Por tu valentía|Por tu manera de perdonar|Por no rendirte con nosotros|Por cada primera vez contigo|Por tus bromas a deshoras|Por cómo cantas cuando crees que nadie escucha|Por tus ojos|Por tu olor que reconozco en cualquier lado|Por tus caricias|Por tu energía|Por tu calma en mis tormentas|Por tu compañía en el silencio|Por las risas en medio del caos|Por tus consejos honestos|Por tu cariño con la gente que quiero|Por tu dedicación|Por tu espíritu aventurero|Por tus abrazos de bienvenida|Por las llamadas eternas|Por tus cosquillas|Por tus ideas locas|Por la forma en que dices mi nombre|Por tu humildad|Por tus ganas de crecer juntos|Por tu lealtad|Por los planes que hacemos|Por los domingos perezosos contigo|Por tus ocurrencias en el camino|Por tu generosidad|Por cuidarme cuando estoy mal|Por tu mirada de complicidad|Por las fotos que nos tomamos|Por tus sorpresas|Por cómo celebras la vida|Por tu determinación|Por tu cara cuando duermes|Por tus “te quiero” inesperados|Por darme tu tiempo|Por la paz que siento contigo|Por tu inteligencia|Por tu creatividad|Por tu optimismo|Por hacerme querer ser mejor|Por reírte de mis chistes|Por tu mano en mi espalda cuando la necesito|Por los apodos que solo tú me dices|Por la forma en que me defiendes|Por tu dulzura|Por todo lo que callamos y entendemos|Por tu alegría sencilla|Por cada atardecer a tu lado|Por las canciones que ya son nuestras|Por tu confianza en mí|Por tus ganas de hacerme feliz|Por haberme encontrado|Por elegirme todos los días|Por darle sentido a mis días|Por ser mi hogar|Por ser tú, simplemente tú`.split("|");
const GIFT = {
  title: "Para ti, mi amor",
  text: "Este regalo es pequeño, pero lo hice con todo mi cariño. Gracias por ser mi mejor sorpresa.",
  icon: "💝",
  img: "" // opcional: "fotos/sorpresa.jpg"
};
const COUPONS = [
  ["🤗","Un abrazo eterno","Válido por un abrazo largo, sin prisa y sin soltar."],
  ["🍷","Una cita especial","Yo planeo todo; tú solo te arreglas y disfrutas."],
  ["🎬","Noche de película","Tú eliges la película, yo pongo las palomitas."],
  ["💋","Un beso de los buenos","Canjeable en cualquier momento y lugar."],
  ["🍳","Desayuno en la cama","Preparado por mí, con todo el amor del mundo."],
  ["💆","Masaje relajante","Válido por 20 minutos de consentimiento total."]
];
const MOVIE = {
  title: "Nuestra Historia de Amor",
  tag: "Una historia real",
  date: "07 · 11 · 2024",
  cast: "Tú & Yo",
  genre: "Romance · Aventura",
  dur: "Para siempre",
  phrase: "Y de todas las historias, la mejor es la que escribimos juntos.",
  img: "img/7.jpeg" // foto de ustedes en el póster
};
const KEYS = ["07/11/2024","7/11/2024","07/11","7/11","7 de noviembre","07 de noviembre","7 de noviembre de 2024","07 de noviembre de 2024","7 nov","07 nov","noviembre 7","0711","20241107"];
const KEYHINT = "Es el día en que empezó nuestra historia 💫 (día y mes)";
const SECRET = {
  icon: "💖",
  title: "Tienes la llave de mi corazón",
  text: "Desde aquel 7 de noviembre, mi corazón te pertenece. Gracias por abrirlo con tanto cariño.",
  img: "" // opcional: "fotos/secreto.jpg"
};
const CERT = {
  to: "Christian & Yin Coral",
  text: "Por convertir cada día en una aventura, cada risa en un recuerdo y cada abrazo en un hogar. Este certificado tiene validez eterna.",
  date: "7 de noviembre de 2024",
  sign1: "Mi amor",
  sign2: "Tu amor"
};
const STARS = [
  {x:9,  y:64, icon:"💫", title:"La primera chispa",   text:"Fue un día cualquiera, pero algo cambió. Una mirada, una sonrisa… y supe que quería quedarme.", bg:"linear-gradient(135deg,#2b1055,#7597de)"},
  {x:23, y:30, icon:"💬", title:"Charlas sin fin",      text:"Las horas volaban hablando de todo y de nada. Contigo hasta el silencio es bonito.", bg:"linear-gradient(135deg,#232526,#5f2c82)"},
  {x:37, y:68, icon:"🏖️", title:"El mar y tú",          text:"Fuimos a la playa: el sol, las olas y tu risa. Ese día guardé el mar entero en un recuerdo.", bg:"linear-gradient(135deg,#0f2027,#2c7a9b)"},
  {x:51, y:32, icon:"🎬", title:"Noches de película",   text:"Una manta, palomitas y tu mano en la mía. Qué importa la película si la mejor escena eres tú.", bg:"linear-gradient(135deg,#41295a,#b24592)"},
  {x:65, y:70, icon:"🌅", title:"Atardeceres contigo",  text:"Cada atardecer a tu lado se siente como un pequeño milagro que solo nosotros entendemos.", bg:"linear-gradient(135deg,#ff7e5f,#6a1b4d)"},
  {x:79, y:30, icon:"🎶", title:"Nuestra canción",      text:"Suena y todo se detiene. Es imposible escucharla sin pensar en ti.", bg:"linear-gradient(135deg,#1d2b64,#c33764)"},
  {x:91, y:60, icon:"💍", title:"Lo que viene",         text:"Mil planes, mil viajes, mil días más. Lo mejor de nuestra historia todavía no se ha escrito.", bg:"linear-gradient(135deg,#3a1c71,#d76d77)"}
];
const PUZZLE = {
  imgs: ["img/8.jpeg", "img/9.jpeg"],
  title: "💌 Mensaje escondido",
  text: "Si estás leyendo esto es porque armaste cada pieza con paciencia, igual que armamos nuestra historia: pieza a pieza. Contigo todo encaja. Te amo.",
  button: "Con todo mi amor 💖"
};
const PLANS = [
  ["💬","Mejor comunicación","Hablar siempre con sinceridad, escucharnos sin juzgar y resolver todo juntos."],
  ["🌆","Más salidas","Más citas, paseos y escapadas, aunque sea a un lugar sencillo. Lo importante es estar juntos."],
  ["🤗","Más abrazos","Abrazos largos, de bienvenida, de buenas noches y de “aquí estoy contigo”."],
  ["💕","Más cariños","Más detalles, besos, mensajes bonitos y palabras que recuerden cuánto nos queremos."],
  ["🏡","Más tiempo juntos","Más estadía entre nosotros: tiempo de calidad, sin prisas y sin distracciones."],
  ["😄","Más risas","Reírnos de todo, hasta de nuestros días malos, porque contigo todo pesa menos."],
  ["✈️","Más viajes y aventuras","Conocer lugares nuevos y crear recuerdos que podamos contar toda la vida."],
  ["🌱","Crecer juntos","Apoyar nuestras metas y sueños, y celebrar cada logro como si fuera de los dos."],
  ["🕊️","Más paciencia y comprensión","Cuidarnos, perdonar a tiempo y elegirnos todos los días, incluso cuando cueste."]
];
const STARDONE = {
  icon: "🌌",
  title: "Nuestra constelación",
  text: "Cada estrella eres tú iluminando mi cielo. Unidas forman el dibujo más bonito: nuestra historia. Gracias por brillar a mi lado.",
  bg: "linear-gradient(135deg,#0b1030,#6a1b4d,#c9184a)"
};
const FINALE = {
  lines: ["Todo empezó un 7 de noviembre de 2024…", "Entre risas, abrazos y pequeñas aventuras…", "fuimos escribiendo la historia más bonita.", "Y lo mejor… todavía está por venir."],
  dedication: "Gracias por ser mi hogar, mi risa favorita y mi mejor casualidad. Te amo hoy, mañana y siempre."
};
/* ================================ */

const $ = id => document.getElementById(id);
/* efecto de escritura */
function typeInto(el, txt, sp){
  const id = el._id = (el._id || 0) + 1, ch = [...txt]; let i = 0; el.textContent = "";
  (function s(){ if (el._id !== id) return; el.textContent = ch.slice(0, ++i).join(""); if (i < ch.length) setTimeout(s, sp); })();
}
let demo = false;
const plural = (n,s,p) => n + " " + (n === 1 ? s : p);
const isAnniv = n => n.getMonth()===START.getMonth() && n.getDate()===START.getDate() && n.getFullYear()>START.getFullYear();
function nextAnniv(n){
  const today = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let d = new Date(n.getFullYear(), START.getMonth(), START.getDate());
  if (d < today) d = new Date(n.getFullYear()+1, START.getMonth(), START.getDate());
  return d;
}

function hero(){
  const n = new Date(), nx = nextAnniv(n), on = isAnniv(n) || demo;
  const yrs = nx.getFullYear() - START.getFullYear();
  $("title").textContent = on ? "¡Feliz aniversario!" : "Cada día contigo es especial";
  $("pre").textContent = on ? "Hoy celebramos" : "Nuestra historia";
  $("years").textContent = on ? "Felices " + plural(yrs,"año","años") + " juntos 💞" : "Faltan para nuestros " + plural(yrs,"año","años");
  if (on) $("sub").textContent = "Gracias por cada momento a tu lado";
  else {
    const ms = nx - n, d = Math.floor(ms/864e5), h = Math.floor(ms%864e5/36e5), m = Math.floor(ms%36e5/6e4), s = Math.floor(ms%6e4/1e3);
    $("sub").textContent = d + " días · " + h + " h · " + m + " min · " + s + " s";
  }
}

function elapsed(){
  const n = new Date();
  let y = n.getFullYear()-START.getFullYear(), mo = n.getMonth()-START.getMonth(), d = n.getDate()-START.getDate();
  if (d < 0){ mo--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
  if (mo < 0){ y--; mo += 12; }
  const total = Math.floor((n-START)/864e5);
  const it = [[y,"años",1],[mo,"meses"],[d,"días"],[n.getHours(),"horas"],[n.getMinutes(),"minutos"],[n.getSeconds(),"segundos"],[total.toLocaleString("es"),"días totales",1]];
  $("elapsed").innerHTML = it.map(i => '<div class="box'+(i[2]?' big':'')+'"><b>'+i[0]+'</b><span>'+i[1]+'</span></div>').join("");
  const nx = nextAnniv(n), prev = new Date(nx.getFullYear()-1, START.getMonth(), START.getDate());
  const pct = Math.min(100, Math.max(0, (n-prev)/(nx-prev)*100));
  $("barfill").style.width = pct.toFixed(1) + "%";
  $("barlbl").textContent = pct.toFixed(1) + "% del camino hacia nuestro próximo aniversario";
}
function tick(){ hero(); elapsed(); }
setInterval(tick, 1000); tick();
$("demo").onclick = () => { demo = !demo; hero(); $("demo").textContent = demo ? "Volver a la vista normal" : "Ver modo aniversario"; if (demo) rain(); };

/* escritura en el hero */
let pi = 0, ci = 0, del = false;
(function type(){
  const t = PHRASES[pi];
  ci += del ? -1 : 1;
  $("type").textContent = t.slice(0, ci);
  let wait = del ? 30 : 70;
  if (!del && ci === t.length){ del = true; wait = 1800; }
  else if (del && ci === 0){ del = false; pi = (pi+1) % PHRASES.length; wait = 400; }
  setTimeout(type, wait);
})();

/* línea del tiempo */
$("tl").innerHTML = TIMELINE.map(t => '<div class="ti"><span class="ic">'+t[3]+'</span><small>'+t[0]+'</small><h3>'+t[1]+'</h3><p>'+t[2]+'</p></div>').join("");
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }), {threshold:.2});
document.querySelectorAll(".ti").forEach(el => io.observe(el));

/* corazones */
function rain(){
  for (let i = 0; i < 40; i++){
    const h = document.createElement("div");
    h.className = "heart"; h.textContent = ["❤","💖","💕","💗"][i%4];
    h.style.left = Math.random()*100 + "vw"; h.style.fontSize = (16+Math.random()*24) + "px";
    h.style.animationDuration = (3+Math.random()*3) + "s"; h.style.animationDelay = Math.random()*1.5 + "s";
    document.body.appendChild(h); setTimeout(() => h.remove(), 7500);
  }
}
$("hearts").onclick = rain;

/* recuerdos (fotos fijas) */
const ph = i => "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc2d1"/><stop offset="1" stop-color="#ff8fab"/></linearGradient></defs><rect width="200" height="200" fill="url(#g)"/><text x="100" y="115" font-size="64" text-anchor="middle">❤</text><text x="100" y="165" font-size="16" text-anchor="middle" fill="#fff" font-family="Georgia">Foto ' + (i+1) + '</text></svg>');
$("gal").innerHTML = PHOTOS.map((p,i) => '<figure class="pol" style="--r:'+((i%2?1:-1)*(1+i%3*1.5))+'deg"><img src="'+(p.src||ph(i))+'" alt="'+p.cap+'"><figcaption>'+p.cap+'</figcaption></figure>').join("");
document.querySelectorAll("#gal img").forEach((im,i) => { im.onerror = () => { im.onerror = null; im.src = ph(i); }; });
$("gal").onclick = e => { const im = e.target.closest(".pol img"); if (im){ $("lb").style.display = "flex"; $("lb").querySelector("img").src = im.src; } };
$("lb").onclick = () => $("lb").style.display = "none";

/* carta */
$("letter").textContent = LETTER;
$("env").onclick = () => { const L = $("letter"), o = L.classList.toggle("open"); if (o){ rain(); typeInto(L, LETTER, 35); } else { L._id++; L.textContent = LETTER; } };

/* razones */
let ri = 0;
const showR = i => { ri = (i + REASONS.length) % REASONS.length; $("rnum").textContent = "#" + (ri+1); typeInto($("reason"), REASONS[ri], 28); };
$("rprev").onclick = () => showR(ri-1);
$("rnext").onclick = () => showR(ri+1);
$("rrand").onclick = () => { let j; do { j = Math.floor(Math.random()*REASONS.length); } while (j === ri); showR(j); };
$("rlist").innerHTML = REASONS.map((r,i) => '<span><b>'+(i+1)+'</b>'+r+'</span>').join("");
$("rall").onclick = () => { const s = $("rlist").classList.toggle("show"); $("rall").textContent = s ? "Ocultar" : "Ver las 100"; };
showR(Math.floor(Math.random()*REASONS.length));

/* juego de parejas */
const ICONS = ["💍","🌹","🍫","🧸","💌","🥂","🎁","🌙"];
let first = null, lock = false, moves = 0, pairs = 0, t0 = 0, tmr = null;
function newGame(){
  clearInterval(tmr); first = null; lock = false; moves = 0; pairs = 0; t0 = 0;
  $("gm").textContent = 0; $("gp").textContent = "0/8"; $("gt").textContent = "0s"; $("gwin").textContent = "";
  const deck = [...ICONS, ...ICONS].sort(() => Math.random() - .5);
  $("mem").innerHTML = deck.map(e => '<div class="mc" data-e="'+e+'"><div class="in"><div class="bk">❤</div><div class="fr">'+e+'</div></div></div>').join("");
}
$("mem").onclick = e => {
  const c = e.target.closest(".mc");
  if (!c || lock || c.classList.contains("f")) return;
  if (!t0){ t0 = Date.now(); tmr = setInterval(() => $("gt").textContent = Math.floor((Date.now()-t0)/1000) + "s", 500); }
  c.classList.add("f");
  if (!first){ first = c; return; }
  moves++; $("gm").textContent = moves;
  if (first.dataset.e === c.dataset.e){
    first.classList.add("ok"); c.classList.add("ok"); first = null; pairs++; $("gp").textContent = pairs + "/8";
    if (pairs === 8){ clearInterval(tmr); $("gwin").textContent = "¡Lo lograste en " + moves + " movimientos! 💖"; rain(); }
  } else {
    lock = true; const a = first; first = null;
    setTimeout(() => { a.classList.remove("f"); c.classList.remove("f"); lock = false; }, 800);
  }
};
$("greset").onclick = newGame;
newGame();

/* regalo */
$("giftbtn").onclick = () => {
  const g = $("giftbtn"), r = $("giftreveal"), o = g.classList.toggle("open");
  r.classList.toggle("open", o);
  if (o){
    $("gifttitle").textContent = GIFT.title; $("gifttext").textContent = GIFT.text; $("gifticon").textContent = GIFT.icon;
    const im = $("giftimg"); if (GIFT.img){ im.src = GIFT.img; im.style.display = "block"; }
    g.querySelector("span").textContent = "Toca para cerrar"; rain();
  } else g.querySelector("span").textContent = "Toca para abrir";
};

/* cupones */
$("coupons").innerHTML = COUPONS.map((c,i) => '<div class="cp" data-i="'+i+'"><div class="cpcover"><span>💌</span><b>Cupón #'+(i+1)+'</b><small>Toca para descubrir</small></div><div class="cpin"><span class="cpic">'+c[0]+'</span><h3>'+c[1]+'</h3><p>'+c[2]+'</p><button class="ghost cpuse">Canjear</button></div></div>').join("");
$("coupons").onclick = e => {
  const c = e.target.closest(".cp"); if (!c) return;
  if (e.target.closest(".cpuse")){ const u = c.classList.toggle("used"); e.target.textContent = u ? "Canjeado ✓" : "Canjear"; if (u) rain(); return; }
  if (!c.classList.contains("rev")){ c.classList.add("rev"); }
};

/* película */
$("movie").innerHTML = '<div class="ticket"><div class="poster"'+(MOVIE.img?' style="background-image:url(\''+MOVIE.img+'\')"':'')+'><div class="pov"></div><small>'+MOVIE.tag+'</small>'+(MOVIE.img?'<span></span>':'<div class="pe">👫</div>')+'<div class="pt">'+MOVIE.title+'</div><div class="pd">'+MOVIE.date+'</div></div>'
 + '<div class="tinfo"><small>★ Presentación especial ★</small><div class="pq">“'+MOVIE.phrase+'”</div><div class="prow"><div><small>Estreno</small><b>'+MOVIE.date+'</b></div><div><small>Protagonistas</small><b>'+MOVIE.cast+'</b></div><div><small>Género</small><b>'+MOVIE.genre+'</b></div><div><small>Duración</small><b>'+MOVIE.dur+'</b></div></div></div>'
 + '<div class="stub"><div class="adm">ADMIT TWO</div><div class="no">Nº 0711</div></div></div>';

/* llave del corazón */
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"");
function tryKey(){
  const v = norm($("keyin").value), msg = $("keymsg"), pl = $("padlock");
  if (!v){ msg.textContent = "Escribe la fecha para abrir el candado ✍️"; return; }
  if (KEYS.map(norm).includes(v)){
    pl.textContent = "🔓"; pl.classList.remove("shake"); pl.classList.add("open"); msg.textContent = "¡Lo lograste! 💖";
    $("keytitle").textContent = SECRET.title; $("keytext").textContent = SECRET.text; $("keyicon").textContent = SECRET.icon;
    if (SECRET.img){ $("keyimg").src = SECRET.img; $("keyimg").style.display = "block"; }
    $("keyreveal").classList.add("open"); rain();
  } else {
    msg.textContent = "Mmm, esa no es… inténtalo otra vez 💭";
    pl.classList.remove("shake"); void pl.offsetWidth; pl.classList.add("shake");
  }
}
$("keybtn").onclick = tryKey;
$("keyin").onkeydown = e => { if (e.key === "Enter") tryKey(); };
$("keyhint").onclick = () => { $("keymsg").textContent = KEYHINT; };

/* menú responsive */
function closeMenu(){ $("links").classList.remove("open"); $("burger").classList.remove("open"); $("burger").setAttribute("aria-expanded","false"); }
$("burger").onclick = e => { e.stopPropagation(); const o = $("links").classList.toggle("open"); $("burger").classList.toggle("open", o); $("burger").setAttribute("aria-expanded", o); };
$("links").onclick = e => { if (e.target.closest("a")) closeMenu(); };
document.addEventListener("click", e => { if (!e.target.closest("#nav")) closeMenu(); });

/* certificado */
$("cert").innerHTML = '<div class="diploma"><b class="cn c1">❦</b><b class="cn c2">❦</b><b class="cn c3">❦</b><b class="cn c4">❦</b>'
 + '<small class="dk">★ Certificado de aniversario ★</small><div class="dt">Certificado</div><div class="ds">al amor más bonito</div>'
 + '<p class="dp">Se otorga con todo cariño a</p><div class="dn">'+CERT.to+'</div><p class="dtx">'+CERT.text+'</p>'
 + '<div class="dfoot"><div><i></i><span>'+CERT.sign1+'</span></div><div class="seal">❤<small>Amor verdadero</small></div><div><i></i><span>'+CERT.sign2+'</span></div></div>'
 + '<small class="dd">Expedido el '+CERT.date+'</small></div>';

/* mapa de estrellas */
const sky = $("sky"), unlocked = new Set(); let doneT;
for (let i = 0; i < 70; i++){
  const d = document.createElement("i"), z = 1 + Math.random()*2;
  d.className = "tw"; d.style.left = Math.random()*100 + "%"; d.style.top = Math.random()*100 + "%";
  d.style.width = d.style.height = z + "px"; d.style.animationDelay = Math.random()*3 + "s"; sky.appendChild(d);
}
$("skylines").innerHTML = STARS.slice(1).map((s,i) => '<line class="ln" id="ln'+i+'" x1="'+STARS[i].x+'" y1="'+STARS[i].y+'" x2="'+s.x+'" y2="'+s.y+'"/>').join("");
STARS.forEach((s,i) => {
  const b = document.createElement("button");
  b.className = "star"; b.style.left = s.x + "%"; b.style.top = s.y + "%"; b.setAttribute("aria-label","Estrella " + (i+1));
  b.innerHTML = "<span>★</span><em>" + (i+1) + "</em>"; b.onclick = () => openStar(i, b); sky.appendChild(b);
});
$("stcount").textContent = "0/" + STARS.length + " estrellas encendidas";
function openStar(i, b){
  unlocked.add(i);
  document.querySelectorAll(".star").forEach(x => x.classList.remove("cur"));
  b.classList.add("on","cur");
  STARS.slice(1).forEach((s,k) => { if (unlocked.has(k) && unlocked.has(k+1)) $("ln"+k).classList.add("lit"); });
  const s = STARS[i], sc = $("scene");
  sc.style.background = s.bg; sc.classList.remove("pop"); void sc.offsetWidth; sc.classList.add("pop");
  showScene(s);
  clearTimeout(doneT);
  if (unlocked.size === STARS.length){
    $("stcount").textContent = "¡Constelación completa! 💖"; rain();
    doneT = setTimeout(() => { sc.style.background = STARDONE.bg; sc.classList.remove("pop"); void sc.offsetWidth; sc.classList.add("pop"); showScene(STARDONE); rain(); }, 3800);
  } else $("stcount").textContent = unlocked.size + "/" + STARS.length + " estrellas encendidas";
}
function showScene(s){ $("sicon").textContent = s.icon; $("stitle").textContent = s.title; typeInto($("stext"), s.text, 22); }

/* música del final (sintetizada, sin archivos) */
const AC = window.AudioContext || window.webkitAudioContext;
const CHORDS = [[220,261.63,329.63],[174.61,220,261.63],[130.81,164.81,196],[196,246.94,293.66]];
const PAT = [0,1,2,1,2,1,0,1];
let actx, mg, mtimer, mstep = 0;
function note(f, t, d, v){
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = "triangle"; o.frequency.value = f;
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + d);
  o.connect(g); g.connect(mg); o.start(t); o.stop(t + d + .05);
}
function startMusic(){
  if (!AC) return;
  clearInterval(mtimer);
  actx = actx || new AC(); actx.resume();
  mg = actx.createGain(); mg.gain.setValueAtTime(0, actx.currentTime); mg.gain.linearRampToValueAtTime(.55, actx.currentTime + 2.5);
  const dl = actx.createDelay(); dl.delayTime.value = .4; const fb = actx.createGain(); fb.gain.value = .38;
  mg.connect(actx.destination); mg.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(actx.destination);
  mstep = 0; let next = actx.currentTime + .15; const beat = .45;
  mtimer = setInterval(() => {
    while (next < actx.currentTime + .6){
      const c = CHORDS[Math.floor(mstep/8) % 4], i = mstep % 8;
      if (i === 0) note(c[0]/2, next, beat*7, .22);
      note(c[PAT[i]]*2, next, beat*2.4, .13);
      if (i === 4) note(c[2]*4, next, beat*3, .06);
      next += beat; mstep++;
    }
  }, 200);
}
function stopMusic(){
  clearInterval(mtimer);
  if (mg){ const g = mg, t = actx.currentTime; g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t); g.gain.linearRampToValueAtTime(0, t + 1.2); setTimeout(() => g.disconnect(), 1500); mg = null; }
}

/* final cinematográfico */
const fin = $("fin"); let finId = 0, finShown = false;
function makeBokeh(){
  const L = $("finlights"); if (L.dataset.ok) return; L.dataset.ok = 1;
  for (let i = 0; i < 28; i++){
    const b = document.createElement("i"), z = 20 + Math.random()*60;
    b.className = "bokeh"; b.style.width = b.style.height = z + "px"; b.style.left = Math.random()*100 + "%";
    b.style.animationDuration = (8 + Math.random()*10) + "s"; b.style.animationDelay = (-Math.random()*14) + "s"; L.appendChild(b);
  }
}
function resetFin(){
  fin.classList.remove("cine","lit"); $("fstart").classList.remove("hide"); $("fline").classList.remove("show");
  $("fcred").classList.remove("on","done"); $("fded").textContent = "";
}
function openFin(direct){
  if (fin.classList.contains("on")) return;
  finId++; closeMenu(); resetFin(); fin.classList.add("on"); document.body.style.overflow = "hidden";
  if (direct) runFinale();
}
function runFinale(){
  const id = ++finId, line = $("fline"), L = FINALE.lines; let i = 0;
  $("fstart").classList.add("hide"); $("fcred").classList.remove("on","done"); $("fded").textContent = "";
  fin.classList.add("cine","lit"); makeBokeh(); startMusic();
  (function next(){
    if (id !== finId) return;
    if (i < L.length){
      line.textContent = L[i++]; line.classList.add("show");
      setTimeout(() => { if (id !== finId) return; line.classList.remove("show"); setTimeout(next, 1400); }, 3800);
    } else credits(id);
  })();
}
function credits(id){
  const c = $("fcred"); $("fttl").textContent = MOVIE.title; $("fcast").textContent = CERT.to; c.classList.add("on"); rain();
  setTimeout(() => {
    if (id !== finId) return;
    typeInto($("fded"), FINALE.dedication, 50);
    setTimeout(() => { if (id === finId){ c.classList.add("done"); rain(); } }, FINALE.dedication.length*50 + 800);
  }, 1800);
}
function closeFin(){
  finId++; stopMusic(); fin.classList.remove("on","cine","lit"); $("fline").classList.remove("show"); document.body.style.overflow = "";
}
$("fgo").onclick = runFinale;
$("fagain").onclick = () => { stopMusic(); runFinale(); };
$("fclose").onclick = closeFin; $("finx").onclick = closeFin;
$("finalbtn").onclick = () => openFin(true);
document.addEventListener("keydown", e => { if (e.key === "Escape" && fin.classList.contains("on")) closeFin(); });

/* detectar que ya exploró toda la página */
const secs = [...document.querySelectorAll("header.hero, section")], seen = new Set(), dwell = new Map();
const eio = new IntersectionObserver(es => es.forEach(e => {
  const el = e.target;
  if (e.isIntersecting && !seen.has(el)){
    dwell.set(el, setTimeout(() => { seen.add(el); eio.unobserve(el); if (!finShown && seen.size === secs.length){ finShown = true; setTimeout(() => openFin(false), 1800); } }, 1500));
  } else clearTimeout(dwell.get(el));
}), {threshold:.2});
secs.forEach(el => eio.observe(el));

/* rompecabezas secreto (dos, en la misma fila) */
function makePuzzle(n, src, onSolve){
  const el = $("puzzle"+n); let pc = 4, pr = 3, order = [], moves = 0, sel = -1, solved = false;
  const render = () => {
    el.innerHTML = order.map((id,pos) => '<div class="pz'+(pos === sel ? ' sel' : '')+'" data-pos="'+pos+'" style="background-position:'+(pc > 1 ? (id % pc)/(pc-1)*100 : 0)+'% '+(pr > 1 ? Math.floor(id/pc)/(pr-1)*100 : 0)+'%"></div>').join("");
    $("pp"+n).textContent = order.filter((id,i) => id === i).length + "/" + order.length;
  };
  const mix = () => {
    const t = pc*pr;
    do { order = [...Array(t).keys()].sort(() => Math.random() - .5); } while (order.filter((id,i) => id === i).length > 1);
    moves = 0; sel = -1; solved = false; $("pm"+n).textContent = 0; el.classList.remove("done"); render();
  };
  el.onclick = e => {
    const c = e.target.closest(".pz");
    if (!c || solved || el.closest(".pcol").classList.contains("locked")) return;
    const pos = +c.dataset.pos;
    if (sel < 0){ sel = pos; render(); return; }
    if (sel === pos){ sel = -1; render(); return; }
    [order[sel], order[pos]] = [order[pos], order[sel]]; sel = -1; moves++; $("pm"+n).textContent = moves; render();
    if (order.every((id,i) => id === i)){ solved = true; el.classList.add("done"); onSolve(); }
  };
  const start = (img, ar) => {
    if (ar > 1.1){ pc = 4; pr = 3; } else if (ar < 0.9){ pc = 3; pr = 4; } else { pc = 3; pr = 3; }
    el.style.setProperty("--img", 'url("' + img + '")'); el.style.setProperty("--ar", ar);
    el.style.setProperty("--c", pc); el.style.setProperty("--r", pr);
    el.style.gridTemplateColumns = "repeat(" + pc + ",1fr)"; el.style.gridTemplateRows = "repeat(" + pr + ",1fr)";
    mix();
  };
  const im = new Image();
  im.onload = () => start(src, im.naturalWidth/im.naturalHeight);
  im.onerror = () => start("data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc2d1"/><stop offset="1" stop-color="#ff8fab"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="185" font-size="140" text-anchor="middle">❤</text><text x="200" y="265" font-size="26" text-anchor="middle" fill="#fff" font-family="Georgia">Foto ' + (n+7) + '</text></svg>'), 4/3);
  im.src = src;
  return { mix };
}
function showSecret(){
  const cs = getComputedStyle(document.documentElement);
  if (window.Swal){
    Swal.fire({
      title: PUZZLE.title, text: PUZZLE.text, confirmButtonText: PUZZLE.button, confirmButtonColor: "#d6336c",
      background: cs.getPropertyValue("--card").trim() || "#fff", color: cs.getPropertyValue("--ink").trim() || "#4a2330",
      customClass: {title: "swtitle", htmlContainer: "swmsg"}, width: 640
    });
  } else alert(PUZZLE.title + "\n\n" + PUZZLE.text);
}
function lockSecond(){ $("pcol2").classList.add("locked"); $("plock2").style.display = ""; }
const pzA = makePuzzle(1, PUZZLE.imgs[0], () => {
  $("pcol2").classList.remove("locked"); $("plock2").style.display = "none";
  if (window.Swal) Swal.fire({toast: true, position: "top", icon: "success", title: "¡Segundo rompecabezas desbloqueado! 🔓", timer: 3000, showConfirmButton: false});
});
const pzB = makePuzzle(2, PUZZLE.imgs[1], () => {
  const m = $("secretmsg"); m.classList.add("open"); m.querySelector(".lockico").textContent = "💌";
  $("secrettext").textContent = "¡Lo lograste! El mensaje escondido ya está desbloqueado."; $("reread").style.display = "";
  rain(); setTimeout(showSecret, 900);
});
$("reread").onclick = showSecret;
$("pmix").onclick = () => {
  pzA.mix(); pzB.mix(); lockSecond();
  const m = $("secretmsg"); m.classList.remove("open"); m.querySelector(".lockico").textContent = "🔒";
  $("secrettext").textContent = "Arma los dos rompecabezas para descubrir el mensaje escondido…"; $("reread").style.display = "none";
};

/* planes futuros */
$("plans").innerHTML = PLANS.map((p,i) => '<div class="plan" data-i="'+i+'"><span class="plic">'+p[0]+'</span><h3>'+p[1]+'</h3><p>'+p[2]+'</p><button class="ghost plbtn">Lo prometo 🤝</button></div>').join("");
function plUpdate(){
  const n = document.querySelectorAll(".plan.sealed").length;
  $("plcount").textContent = n + "/" + PLANS.length + " promesas selladas";
  $("plmsg").textContent = n === PLANS.length ? "Todas selladas. Gracias por querer construir esto conmigo, un día a la vez. 💖" : "";
  return n;
}
$("plans").onclick = e => {
  const b = e.target.closest(".plbtn"); if (!b) return;
  const c = b.closest(".plan"), on = c.classList.toggle("sealed");
  b.textContent = on ? "✓ Prometido" : "Lo prometo 🤝";
  if (plUpdate() === PLANS.length && on) rain();
};
plUpdate();
