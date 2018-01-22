// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('button').click(function() {
  makeGrid();
});

function makeGrid() {
  // removes previous table rows if already existing
  $('tr').remove();
  // variables
  var table = $('#pixel_canvas');
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  var color = $('#colorPicker').val();
  // generates rows
  for (var e = 0; e < height; e++) {
    table.prepend("<tr></tr>");
  }
  // generates cells
  for (var i = 0; i < width; i++) {
    $('tr').prepend("<td></td>");
  }
  // adds color when clicked
  $('td').on('click', function() {
    $(this).css("background-color", color);
  });
}