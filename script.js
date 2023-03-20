$(function() {
  // make elements with class "movable" draggable
  $('.movable').draggable({
    // disable text selection during dragging
    start: function(event, ui) {
      $(this).find('input').attr('readonly', 'readonly');
    },
    stop: function(event, ui) {
      $(this).find('input').removeAttr('readonly');
    }
  });
});

const loop = function() {
  const t = document.querySelector("textarea");
  console.log(`${t.clientHeight},${t.clientWidth}`);
  requestAnimationFrame(loop);
};

loop();
/*
$('#btnEdit').on('click', function() {
  // get selected element
  var selected = $('.movable.ui-selected');
  
  // check if exactly one element is selected
  if (selected.length === 1) {
    // make element resizable
    selected.resizable({
      handles: "n, e, s, w, ne, se, sw, nw",
      stop: function(event, ui) {
        // save new dimensions of element
        $(this).css({
          width: ui.size.width + 'px',
          height: ui.size.height + 'px'
        });
      }
    });
  } else {
    // show error message
    alert('Select exactly one element to resize.');
  }
});
*/
