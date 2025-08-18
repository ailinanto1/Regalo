/* Mes a mes */
const botones = document.querySelectorAll(".mes-btn");
const galerias = document.querySelectorAll(".galeria-mes");
const descripcion = document.getElementById("descripcion-mes");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Sacar clase active de todos
    botones.forEach((b) => b.classList.remove("active"));
    // Agregar clase active al botón actual
    boton.classList.add("active");

    // Ocultar todas las galerías
    galerias.forEach((g) => (g.style.display = "none"));

    // Mostrar la galería del mes seleccionado
    const mesSeleccionado = boton.getAttribute("data-mes");
    document.getElementById(`galeria-${mesSeleccionado}`).style.display =
      "flex";

    // Cambiar descripción
    descripcion.textContent = `Mes actual: ${mesSeleccionado.charAt(0).toUpperCase() + mesSeleccionado.slice(1)
      }`;
  });
});

/*datos curiosos*/
const datos = [
  "Helado top: tramontana, menta granizada y dulche de leche granizado",
  "Serie favorita: The Walking Dead",
  "Color favorito: violeta oscuro",
  "Le encanta el vóley",
  "Es muy buen cocinero",
  "No le gusta que le toquen el pelo y la cara",
  "Toca excelentemente la guitarra",
  "Su comida fav son las empanadas",
  "No puede vivir sin la aquarius de pera",
  "Su banda favorita es Las pastillas Del Abuelo",
  "Es la persona mas fuerte que conozco",
  "Los géneros favoritos de peliculas son la commedia y el terror",
  "Es muy gracioso",
  "La paciencia no es una virtud",
  "No se levanta con la primera alarma",
  "El tema de las fechas le cuesta un poco",
  "Es muy inteligente",
  "Su postre favorito es el franui",
  "Canta muy bien",
  "Resuelve cualquier problema con la computadora",
  "Tiene un gran corazon <3",
  "Tiene una memoria impresionante",
  "Su sonrisa ilumina los días grises",
  "Es un hombre que resuelve",
  "Su superhéroe favorito es Flash",
  "Es detallista",
  "Su sonrisa es lo mas lindo del mundo",
  "Es muy pprotector con la gente que quiere",
  "Sus abrazos y besos son el mejor lugar del mundo",
  "Le gusta la soledad",
  "Su canción favorita es Crímenes Perfectos",
  "Sus ojos son los mas bellos del mundo",
  "Le gustan las caminatas",
  "Se duerme de la nada",
  "Es un pibe segundero",
  "tiene la risa mas contagiosa del mundo",
  "Se acuerda de detalles importantes",
];

let indice = 0;
const datoDiv = document.getElementById("dato");

document.getElementById("next").addEventListener("click", () => {
  cambiarDato(1);
});

document.getElementById("prev").addEventListener("click", () => {
  cambiarDato(-1);
});

function cambiarDato(direccion) {
  // animación de salida
  datoDiv.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + direccion + datos.length) % datos.length;
    datoDiv.textContent = datos[indice];

    // animación de entrada
    datoDiv.style.opacity = 1;
  }, 300); // tiempo de la animación
}

/*Dias juntos*/
// Fecha de inicio: 30/11/2024 17:00 (hora local del dispositivo)
const inicioNoviazgo = new Date(2024, 10, 30, 17, 0, 0); // Mes 10 = Noviembre

const $dias = document.getElementById("dias");
const $horas = document.getElementById("horas");
const $minutos = document.getElementById("minutos");
const $segundos = document.getElementById("segundos");

function dosDigitos(n) {
  return String(n).padStart(2, "0");
}

function actualizarContador() {
  const ahora = new Date();
  let diffMs = ahora - inicioNoviazgo;

  // Por si alguien abre la página antes de la fecha (evita negativos)
  if (diffMs < 0) diffMs = 0;

  const totalSeg = Math.floor(diffMs / 1000);
  const dias = Math.floor(totalSeg / 86400);
  const horas = Math.floor((totalSeg % 86400) / 3600);
  const minutos = Math.floor((totalSeg % 3600) / 60);
  const segundos = totalSeg % 60;

  $dias.textContent = dias;
  $horas.textContent = dosDigitos(horas);
  $minutos.textContent = dosDigitos(minutos);
  $segundos.textContent = dosDigitos(segundos);
}

// Arranca y actualiza cada segundo
actualizarContador();
setInterval(actualizarContador, 1000);

/*Objetivos juntos*/
// Lista de objetivos
const objetivos = [
  "Ser novios",
  "Viajar juntos",
  "Vivir juntos",
  "Hacer un picnic en la plaza o costa",
  "Conocer a la familia del otro",
  "Tener una mascota juntos",
  "Cumplir un aniversario especial",
  "Ver juntos todas las películas o series que tenemos pendientes.",
  "Pasar una navidad juntos",
  "Tener una tradición anual (ej: cena especial en cierta fecha)",
  "Viajar a un lugar que ninguno haya visitado",
  "Ver amanecer juntos",
  "Hacer una escapada de fin de semana",
  "Cocinar una comida especial",
  "Tener una noche de juegos de mesa o videojuegos juntos",
  "Ir juntos a un concierto o recital",
  "Armar una lista de “cosas por hacer antes de los 30/40”",
  "Hacer un álbum de fotos",
  "Hacer una maratón de nuestra saga favorita (pelis/libros)",
  "Cocinar un postre juntos",
  "Formar una familia",
];

const contenedor = document.getElementById("objetivos-container");

// Estado guardado
let objetivosEstado = JSON.parse(localStorage.getItem("objetivosEstado")) || {};

objetivos.forEach((texto, index) => {
  const card = document.createElement("div");
  card.classList.add("objetivo-card");

  const span = document.createElement("span");
  span.textContent = texto;
  span.classList.add("objetivo-text");

  const estado = document.createElement("div");
  estado.classList.add("estado");

  // Definir estado inicial
  if (objetivosEstado[index]) {
    estado.textContent = "Cumplido";
    estado.classList.add("cumplido");
  } else {
    estado.textContent = "Pendiente";
    estado.classList.add("pendiente");
  }

  // Click para cambiar estado
  card.addEventListener("click", () => {
    objetivosEstado[index] = !objetivosEstado[index];
    localStorage.setItem("objetivosEstado", JSON.stringify(objetivosEstado));

    if (objetivosEstado[index]) {
      estado.textContent = "Cumplido";
      estado.classList.remove("pendiente");
      estado.classList.add("cumplido");
    } else {
      estado.textContent = "Pendiente";
      estado.classList.remove("cumplido");
      estado.classList.add("pendiente");
    }
  });

  card.appendChild(span);
  card.appendChild(estado);
  contenedor.appendChild(card);
});



/*Playlist*/
/* tipos soportados:
  - { type: 'youtube', id: 'VIDEO_ID', title: '...' }
  - { type: 'spotify', id: 'SPOTIFY_TRACK_OR_PLAYLIST_ID', title: '...' }
*/
const PLAYLIST_KEY = 'playlistIndex';

const tracks = [
  // Reemplazá por sus canciones ❤️
  { type: 'youtube', id: 'kXYiU_JCYtU', title: 'Nuestra canción (YouTube #1)' },
  { type: 'spotify', id: '1fU2DcwVJEuUvGV3mUam8T', title: 'Tema especial (Spotify track)' },
  { type: 'youtube', id: 'dQw4w9WgXcQ', title: 'Recuerdo de viaje (YouTube #2)' },
  // También podés usar una playlist de Spotify:
  // { type: 'spotify', id: '37i9dQZF1DXcBWIGoYBM5M', title: 'Nuestra Playlist (Spotify playlist)' },
];

const embed = document.getElementById('playlist-embed');
const titleEl = document.getElementById('playlist-title');
const pillsEl = document.getElementById('playlist-pills');

let current = Number(localStorage.getItem(PLAYLIST_KEY) ?? 0);
if (current < 0 || current >= tracks.length) current = 0;

function urlFor(t) {
  if (t.type === 'youtube') return `https://www.youtube.com/embed/${t.id}?rel=0`;
  // Nota: para playlist de Spotify usar /embed/playlist/ID – para track usar /embed/track/ID
  const kind = t.id.length > 30 ? 'playlist' : 'track';
  return `https://open.spotify.com/embed/${kind}/${t.id}`;
}

function renderTrack(i) {
  const t = tracks[i];
  embed.innerHTML = `<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy" src="${urlFor(t)}"></iframe>`;
  titleEl.textContent = t.title;
  [...pillsEl.children].forEach((p, idx) => p.classList.toggle('active', idx === i));
  localStorage.setItem(PLAYLIST_KEY, String(i));
}

function buildPills() {
  pillsEl.innerHTML = '';
  tracks.forEach((t, i) => {
    const b = document.createElement('button');
    b.className = 'playlist-pill';
    b.textContent = i + 1;
    b.addEventListener('click', () => { current = i; renderTrack(current); });
    pillsEl.appendChild(b);
  });
}

document.getElementById('pl-prev').addEventListener('click', () => {
  current = (current - 1 + tracks.length) % tracks.length;
  renderTrack(current);
});
document.getElementById('pl-next').addEventListener('click', () => {
  current = (current + 1) % tracks.length;
  renderTrack(current);
});

buildPills();
renderTrack(current);



/*Juego de pareja*/
const QUIZ_KEY = 'quizUltimoScore';

// Editá las respuestas correctas para que coincidan con tu novio
const preguntas = [
  {
    q: "¿Su color favorito?",
    opciones: ["Rojo", "Azul", "Verde", "Negro"],
    correcta: "Azul",
  },
  {
    q: "¿Comida que más le gusta?",
    opciones: ["Pizza", "Hamburguesa", "Sushi", "Pasta"],
    correcta: "Pizza",
  },
  {
    q: "¿Mate, café o té?",
    opciones: ["Mate", "Café", "Té"],
    correcta: "Mate",
  },
  {
    q: "Plan perfecto de finde:",
    opciones: ["Película y helado", "Salir a caminar", "Juntada con amigos", "Dormir"],
    correcta: "Película y helado",
  },
  {
    q: "¿A qué hora suele dormirse?",
    opciones: ["Antes de las 23", "Entre 23 y 1", "Después de la 1"],
    correcta: "Entre 23 y 1",
  },
  {
    q: "¿Qué música escucha más?",
    opciones: ["Pop", "Rock", "Reggaeton", "Indie"],
    correcta: "Rock",
  },
  {
    q: "¿Dulce o salado?",
    opciones: ["Dulce", "Salado"],
    correcta: "Dulce",
  },
  {
    q: "¿Red social que usa más?",
    opciones: ["Instagram", "TikTok", "YouTube", "X/Twitter"],
    correcta: "Instagram",
  },
];

const quizEl = document.getElementById('quiz-container');
const progressEl = document.getElementById('quiz-progress');
const prevBtn = document.getElementById('quiz-prev');
const nextBtn = document.getElementById('quiz-next');
const resultEl = document.getElementById('quiz-result');
const cardEl = document.querySelector('.quiz-card');

let step = 0;
let selecciones = Array(preguntas.length).fill(null);

function buildProgress() {
  progressEl.innerHTML = '';
  preguntas.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'quiz-dot' + (i === step ? ' active' : '');
    progressEl.appendChild(d);
  });
}

function renderPregunta() {
  buildProgress();

  const p = preguntas[step];
  quizEl.innerHTML = `
    <div class="quiz-question">${p.q}</div>
    <div class="quiz-options">
      ${p.opciones.map(op => `
        <button class="quiz-option ${selecciones[step] === op ? 'selected' : ''}" data-opcion="${op}">
          ${op}
        </button>`).join('')}
    </div>
  `;

  // listeners de opción
  quizEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      selecciones[step] = btn.dataset.opcion;
      quizEl.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      nextBtn.disabled = false;
    });
  });

  prevBtn.disabled = step === 0;
  nextBtn.textContent = step === preguntas.length - 1 ? 'Finalizar' : 'Siguiente';
  nextBtn.disabled = selecciones[step] === null;
  resultEl.classList.add('hidden');
}

function puntuar() {
  let score = 0;
  preguntas.forEach((p, i) => {
    if (selecciones[i] === p.correcta) score++;
  });
  localStorage.setItem(QUIZ_KEY, String(score));

  const porcentaje = Math.round((score / preguntas.length) * 100);
  const msg = porcentaje >= 80 ? "¡Son un match perfecto! 💖"
    : porcentaje >= 50 ? "¡Muy bien! Se conocen bastante 😊"
      : "¡A seguir sumando momentos juntos! 💫";

  resultEl.innerHTML = `Resultado: <strong>${score}/${preguntas.length}</strong> – ${msg}`;
  resultEl.classList.remove('hidden');

  // corazones
  for (let i = 0; i < 12; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = '❤';
    h.style.left = (20 + Math.random() * 60) + '%';
    h.style.bottom = '10px';
    h.style.animationDelay = (Math.random() * 0.4) + 's';
    cardEl.appendChild(h);
    setTimeout(() => h.remove(), 2200);
  }
}

prevBtn.addEventListener('click', () => {
  if (step > 0) { step--; renderPregunta(); }
});
nextBtn.addEventListener('click', () => {
  if (step < preguntas.length - 1) {
    step++; renderPregunta();
  } else {
    puntuar();
  }
});

// si querés mostrar el último score guardado al cargar, descomentá:
// const last = localStorage.getItem(QUIZ_KEY);
// if (last !== null) { resultEl.textContent = `Último resultado: ${last}/${preguntas.length}`; resultEl.classList.remove('hidden'); }

renderPregunta();
