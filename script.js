// Creazione di un pulsante che, quando viene cliccato, crea una casella di testo nell'elemento body del documento HTML
const bottone = document.createElement('button');

bottone.innerHTML = 'Crea casella di testo';
bottone.onclick = creaCasellaDiTesto;

document.body.appendChild(bottone);

// Funzione che crea una casella di testo e la aggiunge all'elemento body del documento HTML
function creaCasellaDiTesto() {
  const input = document.createElement('input');
  input.type = 'text';
  document.body.appendChild(input);
}
// Gestione del ridimensionamento di un elemento con classi "item" e "resizer"
const el = document.querySelector(".item");
let isResizing = false;


// Aggiunta di un event listener per l'evento "mousedown" dell'elemento "item"
el.addEventListener("mousedown", mousedown);

// Funzione che gestisce l'evento "mousedown" dell'elemento "item"
function mousedown(e) {

  // Aggiunta di event listener per gli eventi "mousemove" e "mouseup" della finestra del browser
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  // Salvataggio della posizione del mouse al momento del click
  let prevX = e.clientX;
  let prevY = e.clientY;
  // Funzione che gestisce l'evento "mousemove" della finestra del browser
  function mousemove(e) {
    // Controllo se l'utente sta effettivamente ridimensionando l'elemento
    if (!isResizing) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

       // Ottengo le dimensioni e la posizione dell'elemento
      const rect = el.getBoundingClientRect();

      // Sposto l'elemento in base allo spostamento del mouse
      el.style.left = rect.left - newX + "px";
      el.style.top = rect.top - newY + "px";

      // Salvo la posizione del mouse attuale
      prevX = e.clientX;
      prevY = e.clientY;
    }
  }
// Funzione che gestisce l'evento "mouseup" della finestra del browser
  function mouseup() {
    // Rimozione degli event listener per gli eventi "mousemove" e "mouseup" della finestra del browser
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}
// Gestione del ridimensionamento dell'elemento "item" tramite i resizer
const resizers = document.querySelectorAll(".resizer");
let currentResizer;

// Ciclo attraverso i resizer e aggiungo l'event listener per l'evento "mousedown"
for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

// Funzione che gestisce l'evento "mousedown" di un resizer
  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    // Salvo la posizione del mouse al momento del click
    let prevX = e.clientX;
    let prevY = e.clientY;
 // Aggiunta degli event listener per gli eventi "mousemove" e "mouseup" della finestra del browser
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

     // funzione che viene chiamata durante il movimento del mouse
    function mousemove(e) {
      const rect = el.getBoundingClientRect();

      // se il resizer cliccato ha la classe 'se' (sud est)
      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {// se il resizer cliccato ha la classe 'sw' (sud ovest)
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("ne")) {// se il resizer cliccato ha la classe 'ne' (nord est)
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {// se il resizer cliccato ha la classe 'ne' (nord ovest)
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }
    // funzione che viene chiamata al rilascio del tasto del mouse
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}/*
const loop = function() {
  const t = document.querySelector("textarea");
  console.log(`${t.clientHeight},${t.clientWidth}`);
  requestAnimationFrame(loop);
};

loop();*/