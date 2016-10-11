var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');
//drawingPad.fillStyle = "hsla(300, 100%, 75%, 0.3)";



//for(int i =  0 ; i < 33; i++){
// drawingPad.beginPath();
// drawingPad.arc(50,50,5*i,0,2*Math.PI);
// drawingPad.stroke();


for(var i =  0 ; i < 33; i++){
	var a = i*i/3+1;
drawingPad.beginPath();
drawingPad.arc(0,500,a,5,2*Math.PI);
drawingPad.stroke();
}
