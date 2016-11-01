




function draw(event){
	var canvas= document.getElementById('canvas');
var ctx= canvas.getContext('2d');

var posx=event.clientX;
var posy=event.clientY;
if (posx>500){
	posx=undefined 
}
else{posx=event.clientX}
if(posy>500){
	posy=undefined
}
else{
	posy=event.clientY
}
// content.fillstyle="#000000";
// content.fillRect(posx,posy,4,4);

 	for (var i= 0; i<50; i++) {

    ctx.beginPath();
    ctx.moveTo(posx,posy);
    ctx.lineTo(canvas.width*Math.random(),canvas.height*Math.random());
    ctx.strokeStyle= "rgb(" +
    Math.round(200*Math.random()) + "," + 
    Math.round(200*Math.random()) + "," + 
    Math.round(200*Math.random()) + ")";
    ctx.stroke();
 }
 }



// // Draw at startup
// window.onload= function () { drawlines(); }





document.addEventListener('mousemove',draw);