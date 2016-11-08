


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x  = 250;
var y  = 250;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,100%,0.6)";
  ctx.fillRect(0, 0, 500, 500);
};

var drawDot = function() {
  clearScreen();

  ctx.lineWidth = 0;
  ctx.fillStyle = "rgb(" +
    Math.round(200*Math.random()) + "," + 
    Math.round(200*Math.random()) + "," + 
    Math.round(200*Math.random()) + ")";

  var r = Math.floor(Math.random() * 4);
  if (r === 0) {
    x += 21;
    y += 0;
  }
  if (r == 1) {
    x += 0;
    y += 21;
  }
  if (r == 2) {
    x -= 21;
    y += 0;
  }
  if (r == 3) {
    x -= 0;
    y -= 21;
  }
  ctx.fillRect(x * 1, y * 1, 20, 20);
};

setInterval(drawDot,300);

