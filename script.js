window.addEventListener("load", function() {
  var tabella = document.querySelector("#tabella-spostabile");
  var posizioneInizialeX;
  var posizioneInizialeY;
  var posizioneAttualeX;
  var posizioneAttualeY;
  var offsetX;
  var offsetY;

  var riquadri = document.querySelectorAll(".col-md-3");

for (var i = 0; i < riquadri.length; i++) {
  riquadri[i].addEventListener("drop", function(event) {
    event.preventDefault();
    this.appendChild(tabella);
  });

  riquadri[i].addEventListener("dragover", function(event) {
    event.preventDefault();
  });
}

tabella.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", this.id);
});
  tabella.addEventListener("mousedown", function(event) {
    posizioneInizialeX = event.clientX;
    posizioneInizialeY = event.clientY;
    offsetX = tabella.offsetLeft - posizioneInizialeX;
    offsetY = tabella.offsetTop - posizioneInizialeY;

    document.addEventListener("mouseup", function() {
      document.removeEventListener("mousemove", spostaTabella);
    });

    document.addEventListener("mousemove", spostaTabella);
  });

  function spostaTabella(event) {
    posizioneAttualeX = event.clientX;
    posizioneAttualeY = event.clientY;
    tabella.style.left = (posizioneAttualeX + offsetX) + "px";
    tabella.style.top = (posizioneAttualeY + offsetY) + "px";
  }
});
