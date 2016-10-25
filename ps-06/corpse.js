var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

var ritachang = {};


ritachang.drawTop=function(drawingPad){

	drawingPad.beginPath();
drawingPad.ellipse(200, 140, 120, 120, 180 * Math.PI/180, 0, 2 * Math.PI);
drawingPad.stroke();


drawingPad.fillStyle = '#556b2f';
drawingPad.fill();
  drawingPad.lineWidth = 5;
   drawingPad.strokeStyle = 'black';
     drawingPad.stroke();



drawingPad.beginPath();
drawingPad.moveTo(150,200)
drawingPad.lineTo(200,170)
drawingPad.lineTo(250,200)
drawingPad.stroke();

drawingPad.lineWidth = 7;
   drawingPad.strokeStyle = 'red';
     drawingPad.stroke();



drawingPad.beginPath();
drawingPad.moveTo(150,200)
drawingPad.lineTo(200,230)
drawingPad.lineTo(250,200)
drawingPad.stroke();
drawingPad.lineWidth = 7;
   drawingPad.strokeStyle = 'red';
     drawingPad.stroke();

drawingPad.beginPath();
drawingPad.ellipse(200, 200, 30, 50, 90 * Math.PI/180, 0, 2 * Math.PI);
drawingPad.stroke();

drawingPad.fillStyle = 'yellow';
drawingPad.fill();
  drawingPad.lineWidth = 5;
   drawingPad.strokeStyle = 'black';
     drawingPad.stroke();





drawingPad.beginPath();
drawingPad.arc(150,95,20,0.3,1.2*Math.PI);
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.arc(130,85,20,0.45,1.3*Math.PI);
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.arc(180,100,22,0.2,1*Math.PI);
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.arc(210,100,22,-0.1,0.9*Math.PI);
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.arc(240,95,20,-0.6,0.9*Math.PI);
drawingPad.stroke();

drawingPad.beginPath();
drawingPad.arc(266,78,20,-0.95,0.8*Math.PI);
drawingPad.stroke();





drawingPad.beginPath();
drawingPad.lineJoin="round";
drawingPad.moveTo(120,130)
drawingPad.lineTo(135,115)
drawingPad.lineTo(180,130)

drawingPad.stroke();

drawingPad.beginPath();
drawingPad.lineJoin="round";
drawingPad.moveTo(215,130)
drawingPad.lineTo(260,115)
drawingPad.lineTo(275,130)
drawingPad.stroke();



 




drawingPad.beginPath();
drawingPad.ellipse(250, 150, 15, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
drawingPad.stroke();
drawingPad.fillStyle = 'white';
drawingPad.fill();
  drawingPad.lineWidth = 1;
   drawingPad.strokeStyle = 'black';
     drawingPad.stroke();

drawingPad.beginPath();
drawingPad.ellipse(150, 150, 15, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
drawingPad.stroke();
drawingPad.fillStyle = 'white';
drawingPad.fill();
  drawingPad.lineWidth = 1;
   drawingPad.strokeStyle = 'black';
     drawingPad.stroke();

drawingPad.beginPath();
drawingPad.arc(155, 150, 12, 0, 2 * Math.PI);
 drawingPad.fillStyle = 'black';
 drawingPad.fill();

 drawingPad.beginPath();
drawingPad.arc(245, 150, 12, 0, 2 * Math.PI);
 drawingPad.fillStyle = 'black';
 drawingPad.fill();











 drawingPad.beginPath();
 drawingPad.ellipse(200, 65, 85, 40, 360 * Math.PI/180, 0, 2 * Math.PI);
 drawingPad.stroke();

 drawingPad.fillStyle = '#ff8c00';
drawingPad.fill();
drawingPad.lineWidth = 10;
   drawingPad.strokeStyle = 'black';
     drawingPad.stroke();

 }

// /////////////////////////////////////////////////

var canvas2 = document.getElementById('canvas2');
var drawingPad2 = canvas2.getContext('2d');

//var ritachang = {};

ritachang.drawMiddle=function(drawingPad2){
	// drawingPad2.beginPath();
	// drawingPad2.moveTo(180,0)
	// drawingPad2.lineTo(180,15)
	// drawingPad2.stroke();

	// drawingPad2.beginPath();
	// drawingPad2.moveTo(220,0)
	// drawingPad2.lineTo(220,15)
	// drawingPad2.stroke();
	drawingPad2.fillRect(180, 0, 45, 40);



	drawingPad2.beginPath();
drawingPad2.ellipse(200, 140, 100, 130, 360 * Math.PI/180, -1.35, 1.45 * Math.PI);
drawingPad2.stroke();

drawingPad2.fillStyle = '#556b2f';
drawingPad2.fill();
drawingPad2.lineWidth = 10;
   drawingPad2.strokeStyle = 'black';
     drawingPad2.stroke();


drawingPad2.beginPath();
drawingPad2.ellipse(200, 120, 75, 120, 360 * Math.PI/180, -0.9, 1.3 * Math.PI);
drawingPad2.stroke();

drawingPad2.fillStyle = 'yellow';
drawingPad2.fill();
drawingPad2.lineWidth = 10;
   drawingPad2.strokeStyle = 'black';
     drawingPad2.stroke();






drawingPad2.beginPath();
drawingPad2.moveTo(128,55);
drawingPad2.lineTo(55,85);
drawingPad2.arcTo(20,130,120,130,10);
drawingPad2.stroke();

drawingPad2.beginPath();
drawingPad2.moveTo(128,55);
drawingPad2.lineTo(55,85);
drawingPad2.arcTo(20,120,130,110,20);
drawingPad2.stroke();


drawingPad2.beginPath();
drawingPad2.moveTo(128,55);
drawingPad2.lineTo(55,85);
drawingPad2.arcTo(50,140,100,140,20);
drawingPad2.stroke();


drawingPad2.beginPath();
drawingPad2.moveTo(115,80);
drawingPad2.lineTo(55,85);
drawingPad2.stroke();

drawingPad2.beginPath();
drawingPad2.moveTo(278,65);
drawingPad2.lineTo(350,110);
drawingPad2.stroke();




drawingPad2.beginPath();
drawingPad2.moveTo(350,110);
drawingPad2.lineTo(290,90);
drawingPad2.stroke();

drawingPad2.beginPath();
drawingPad2.moveTo(290,90);
drawingPad2.lineTo(350,110);
drawingPad2.arcTo(380,120,380,130,20);
drawingPad2.stroke();

drawingPad2.beginPath();
drawingPad2.moveTo(290,90);
drawingPad2.lineTo(350,110)
drawingPad2.arcTo(380,130,380,140,20);
drawingPad2.stroke();


drawingPad2.beginPath();
drawingPad2.moveTo(290,90);
drawingPad2.lineTo(350,110);
 drawingPad2.arcTo(375,100,390,120,20);
drawingPad2.stroke();

}
/////////////////////////////////////////////////////////////////////////////

var canvas3 = document.getElementById('canvas3');
var drawingPad3 = canvas3.getContext('2d');
ritachang.drawBottom=function(drawingPad3){





 drawingPad3.beginPath();
drawingPad3.moveTo(180,0)
drawingPad3.lineTo(160,100)
drawingPad3.lineTo(140,120)
drawingPad3.lineTo(170,115)
drawingPad3.stroke();

drawingPad3.fill();
drawingPad3.lineWidth = 20;
   drawingPad3.strokeStyle = 'black';
     drawingPad3.stroke();


drawingPad3.beginPath();
drawingPad3.moveTo(180,0)
drawingPad3.lineTo(160,100)
drawingPad3.lineTo(140,120)
drawingPad3.lineTo(170,115)
drawingPad3.stroke();


drawingPad3.beginPath();
drawingPad3.moveTo(240,0)
drawingPad3.lineTo(260,100)
drawingPad3.lineTo(270,120)
drawingPad3.lineTo(250,115)
drawingPad3.stroke();


drawingPad3.beginPath();
drawingPad3.arc(168, 145, 10, 0, 2 * Math.PI);
 drawingPad3.fillStyle = 'black';
 drawingPad3.fill();

 drawingPad3.beginPath();
drawingPad3.arc(140, 156, 10, 0, 2 * Math.PI);
 drawingPad3.fillStyle = 'black';
 drawingPad3.fill();


 drawingPad3.beginPath();
drawingPad3.arc(120, 128, 10, 0, 2 * Math.PI);
 drawingPad3.fillStyle = 'black';
 drawingPad3.fill();




drawingPad3.beginPath();
drawingPad3.arc(270, 140, 10, 0, 2 * Math.PI);
 drawingPad3.fillStyle = 'black';
 drawingPad3.fill();

 drawingPad3.beginPath();
drawingPad3.arc(300, 130, 10, 0, 2 * Math.PI);
 drawingPad3.fillStyle = 'black';
 drawingPad3.fill();


 drawingPad3.beginPath();
drawingPad3.arc(290, 110, 10, 0, 2 * Math.PI);
 drawingPad3.fillStyle = 'black';
 drawingPad3.fill();
}
































ritachang.drawCorpse = function(drawingPad) {
 ritachang.drawTop(drawingPad);
 ritachang.drawMiddle(drawingPad2);
 ritachang.drawBottom(drawingPad3);
 
}


 window.ritachang = ritachang;