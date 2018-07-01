// Select color input
// Select size input

var heightInput = $("#inputHeight");
var widthInput = $("#inputWidth");
var colorInput = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var heightValue = heightInput.val();
  var widthValue = widthInput.val();
  var pixelCanvas = $("#pixelCanvas");

  pixelCanvas.children().remove(); // clears previously built table if any

  // grid is built
  for (var h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");

    for (var w = 0; w < widthValue; w++) {
      $(pixelCanvas.children()[h]).append("<td></td>");
    }
  }
}
//Background color of the cell changes, with respective chosen color

$("table").on("click", "td", function() {
  $(this).css("backgroundColor", colorInput.val());
});

// When the size is submitted by the user, we call makeGrid()
form = $("#sizePicker");

form.submit(function(event) {
  event.preventDefault(); // This stops the page from refreshing upon submit
  makeGrid();
});
