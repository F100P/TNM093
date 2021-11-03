graph();

function graph() {
  var canvas = document.getElementById("myCanvas");
  var theContext = canvas.getContext("2d");
  var sales = [52, 48, 74, 31, 47, 25, 67, 78, 45, 15, 85];
  var width = 300;
  var height = 100;
  var uSpacing = 10;
  var border = 20;
  var scalar = 100;
  var offset = (1 / (sales.length - 1)) * width;

  theContext.strokeRect(0, 0, width, height)

  theContext.beginPath();
  theContext.moveTo(0, sales[0]);
  for (var x = 1; x < sales.length; x++) {
    theContext.lineTo(x * offset, 100 - sales[x]);
  }
  theContext.stroke();
}