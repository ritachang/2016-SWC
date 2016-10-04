var canvas = document.getElementById('canvas');
    var drawingPad = canvas.getContext('2d');
    drawingPad.fillStyle = "hsla(1,10%,10%,1)";
  
  var my_gradient=drawingPad.createLinearGradient(0,0,0,80);
       
    my_gradient.addColorStop(1,"white"); 
    my_gradient.addColorStop(0,"black");
   drawingPad.fillStyle=my_gradient;
      drawingPad.fillRect(0, 0, 80, 80);
        
 
    var canvas = document.getElementById('canvas');
    var drawingPad = canvas.getContext('2d');
    drawingPad.strokeRect(60, 60, 90, 90);  
    drawingPad.lineWidth=1;
 



    var canvas = document.getElementById('canvas');
    var drawingPad = canvas.getContext('2d');
    drawingPad.fillStyle = "hsla(1,1%,10%,1)";
   
  

    drawingPad.fillRect(150, 150, 350, 350);


   

    var canvas = document.getElementById('canvas');
    var drawingPad = canvas.getContext('2d');
   drawingPad.fillStyle = "hsla(1,1%,10%,1)";
   var my_gradient=drawingPad.createLinearGradient(0,0,0,310);
       
    
    drawingPad.clearRect(170, 170, 310, 310);
    
  
