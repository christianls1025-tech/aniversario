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
  {src:"",cap:"Nuestro comienzo"},{src:"",cap:"Aquella tarde"},{src:"",cap:"Mi risa favorita"},
  {src:"",cap:"Una aventura"},{src:"",cap:"Nosotros"},{src:"",cap:"Siempre juntos"}
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
  img: "" // opcional: foto de ustedes, por ejemplo "fotos/nosotros.jpg"
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
