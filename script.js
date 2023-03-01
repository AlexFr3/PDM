function btnEdit(btnEdit) {
  // istruzioni
  }
$(function() {
  // rendi l'elemento con classe "movable" spostabile
  $('.movable').draggable({
    // disabilita la selezione del testo durante il trascinamento
    start: function(event, ui) {
      $(this).find('input').attr('readonly', 'readonly');
    },
    stop: function(event, ui) {
      $(this).find('input').removeAttr('readonly');
    }
  });
});
