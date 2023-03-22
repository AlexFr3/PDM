const bottone = document.createElement('button');

bottone.innerHTML = 'Crea casella di testo';
bottone.onclick = creaCasellaDiTesto;

document.body.appendChild(bottone);

function creaCasellaDiTesto() {
  const input = document.createElement('input');
  input.type = 'text';
  document.body.appendChild(input);
}
let el = document.querySelector("div");

el.addEventListener("mousedown", mousedown);
el.addEventListener("mouseup", mouseup);

let prevX;
let prevY;

function mousedown(e){
    window.addEventListener("mousemove", mousemove);
    prevX = e.clientX;
    prevY = e.clientY;
}

function mousemove(e){
    if (e.buttons === 0) return;
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;

    const rect = el.getBoundingClientRect();

    el.style.left = rect.left - newX + "px";
    el.style.top = rect.top - newY + "px";

    prevX = e.clientX;
    prevY = e.clientY;
}

function mouseup(){
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
}

const loop = function() {
  const t = document.querySelector("textarea");
  console.log(`${t.clientHeight},${t.clientWidth}`);
  requestAnimationFrame(loop);
};

loop();