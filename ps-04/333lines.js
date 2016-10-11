var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

drawingPad.moveTo(200,300);
	drawingPad.lineTo(200,450);
	drawingPad.stroke();


for(var i = 0 ; i < 6; i ++){
	drawingPad.moveTo(200,300);
	drawingPad.lineTo(195-20*i,200+10*i);
	drawingPad.stroke();
}

for(var i = 0 ; i < 6; i ++){
	drawingPad.moveTo(200,300);
	drawingPad.lineTo(205+20*i,200+10*i);
	drawingPad.stroke();
}


for(var i = 0; i < 20; i++){
	 var a =  20*i + 50;
	 var b = 20 *i + 60;

	drawingPad.moveTo(a,50);
	drawingPad.lineTo(b, 50);
	drawingPad.stroke();
}


for(var i = 0; i < 20; i++){
	 var a =  20*i+60;
	 var b = 20 *i +70;

	drawingPad.moveTo(a,60);
	drawingPad.lineTo(b,60);
	drawingPad.stroke();
}

for(var i = 0; i < 40; i++){
	 var a =  10*i + 50;
	// var b = 20 *i +20;

	drawingPad.moveTo(a,50);
	drawingPad.lineTo(a,60);
	drawingPad.stroke();
}


for(var i = 0; i < 20; i++){
	 var a =  20*i + 50;
	 var b = 20 *i + 60;

	drawingPad.moveTo(a,460);
	drawingPad.lineTo(b, 460);
	drawingPad.stroke();
}


for(var i = 0; i < 20; i++){
	 var a =  20*i+60;
	 var b = 20 *i +70;

	drawingPad.moveTo(a,450);
	drawingPad.lineTo(b,450);
	drawingPad.stroke();
}

for(var i = 0; i < 40; i++){
	 var a =  10*i + 50;
	// var b = 20 *i +20;

	drawingPad.moveTo(a,450);
	drawingPad.lineTo(a,460);
	drawingPad.stroke();
}
////////////-----------

for(var j = 0; j < 2; j ++){
	var k = j * 410;
	var t = j * 390;
	var m = j * 400;
for(var i = 0; i < 40; i++){
	 var a =  10*i + 60;
	// var b = 20 *i +20;

	drawingPad.moveTo(40+m,a);
	drawingPad.lineTo(50+m,a);
	drawingPad.stroke();
}

for(var i = 0; i < 20; i++){
	 var a =  20*i+60;
	 var b = 20 *i +70;

	drawingPad.moveTo(40+k,a);
	drawingPad.lineTo(40+k,b);
	drawingPad.stroke();
}

for(var i = 0; i < 20; i++){
	 var a =  20*i+70;
	 var b = 20 *i +80;

	drawingPad.moveTo(50+t,a);
	drawingPad.lineTo(50+t,b);
	drawingPad.stroke();
}
}
///------------------------------