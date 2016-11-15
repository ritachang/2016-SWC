var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var points = [];
var numPoints = 8;

var height = 500;
var width = 500;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,1%,0%,0.04)";
  ctx.fillRect(0, 0, 500, 500);
};

var wrap = function(point) {
  if (point.x>500) {
    point.x=0
    point.y=500  
  }

if(point.y>500){
  point.y=500
 point.x=0
}
  if(point.x<0){
    point.x=500
    point.y=0
  }
  if (point.y<0){
    point.y=500
    point.x=0
  }
   
 

};
var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.4) {  
    p.y = p.y - speed;
  } else if (direction < 0.50) {
    p.x = p.x - speed;
  } else if (direction < 0.65) {
    p.y = p.y + speed;
  } else {
    p.x = p.x + speed;
  }
};



var makeColor = function(colors) {
  var red = ["#ffc0cb","#ffb6c1","#f08080","#dc143c"];
var pink = ["#ffefd5","#ffe4b5","#fdf5e6"];
var dark = ["#eee8aa","#deb887", "#fff8dc"];
  var blue=["#add8e6", "#87cefa"]
  
  colorSelect = Math.floor(Math.random() * 4);
  
  if (colors === 0) {
      return red[colorSelect];
  // } else if (colors ===1) {
  //     return blue[colorSelect];
  // } else if (colors === 2) {
      return pink[colorSelect];
  } else if (colors === 3) {
      return dark[colorSelect];
  }  
};




var drawPoints = function() {
  clearScreen();

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
   
    move(point);
    wrap(point);
    ctx.fillStyle = makeColor(i);  
  
    ctx.strokeStyle = makeColor(i); 
   
    
    
   // var sAngle=Math.floor(Math.random()*8);
 //var eAngle=Math.floor(Math.random()*4)*Math.PI;
    var size=Math.floor(Math.random()*10)*Math.PI;
    
    ctx.beginPath();
ctx.arc(point.y-10,point.x-10,size,0.4,0.3);
     ctx.stroke();
    ctx.fillStyle = makeColor(i);
    ctx.fill();
    
   
  }
  requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
   
    
    var speed = 5;
    points.push({
      x: 250,
      y: 250,
      speed: speed      
    });
  }
};

makePoints();
requestAnimationFrame(drawPoints);