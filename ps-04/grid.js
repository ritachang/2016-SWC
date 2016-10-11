

var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');

   drawingPad.fillStyle = "hsla(133, 60%, 80%, 0.3)";
   // drawingPad.fillRect(0, 0, 20, 20);

  


   var grid = function(x,y,size) {
     drawingPad.fillRect(x * size, y * size, size , size);
      drawingPad.strokeStyle = "hsla(100, 100%, 75%, 0.3)";
     drawingPad.strokeRect(x * size, y * size, size, size);
   }


   
   for(var x = 0 ; x < 10; x++) {
     for(var y = 0 ; y < 10; y++) {
      
      
     grid(x,y,50);
     }
   }

     var grid2 = function(x,y,size) {
     drawingPad.fillRect(x * size, y * size, size , size);
      drawingPad.strokeStyle = "hsla(100, 100%, 75%, 0.3)";
     drawingPad.strokeRect(x * size, y * size, size, size);
   }

   grid2(9,0,50);
   grid2(9,1,50);
   for(i = 0; i < 9; i++){
   		grid2(i,(9-i),50);
   		grid2(i,(9-i+1),50);
   }



   grid2(9,9,50);
  
   for(i = 0; i < 9; i++){
   		grid2(i,(i),50);
   		grid2(i,(i+1),50);
    }
   

 //    var grid3 = function(x,y,size) {
 //     drawingPad.fillRect(x * size, y * size, size , size);
 //     drawingPad.strokeStyle = "hsla(133, 60%, 80%, 0.3)"
 //     drawingPad.strokeRect(x * size, y * size, size, size);
     
     

 //   }
 // grid3 (4,4,50)
 //  grid3 (4,5,50)
 // grid3 (5,5,50)
 // grid3 (5,4,50)









  