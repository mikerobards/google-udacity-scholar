var color = $('#colorPicker').val();
var erase = false;

// generates grid
$('#submit').click(function() {
  makeGrid();
});

// enables erase button
$('#erase').click(function() {
  if (erase === true) {
    $('#erase').css("background", "white");
    erase = false;
  } else {
    $('#erase').css("background", "skyBlue");
    erase = true;
  }
});

// adds color to cells USING event listeners!
$('#pixel_canvas').on('mouseover mousedown', function(evt) {
  evt.preventDefault();
  if (evt.which === 1) {
    if (erase === false) {
      color = $('#colorPicker').val();
      $(evt.target).css("background-color", color);
    } else {
      $(evt.target).css("background-color", '#fff');
    }
  }
});

function makeGrid() {
  // removes previous table rows if already existing
  $('tr').remove();
  // variables
  var table = $('#pixel_canvas');
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  // generates rows with while loop
  var e = 0;
  while (e < height) {
    table.prepend("<tr></tr>");
    e++;
  }
  // generates cells with for loop
  for (var i = 0; i < width; i++) {
    $('tr').prepend("<td></td>");
  }
}