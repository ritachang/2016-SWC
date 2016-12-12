var rain = [];
var numOfDrops;


function setup() {
	numOfDrops = 500;

  createCanvas(windowWidth, windowHeight);
	
  for(var i = 0; i < numOfDrops; i++) {
    rain[i] = new Raindrop();
  }
}

function draw() {
	
   background(0);
  for(var i = 0; i < numOfDrops; i++) {
    rain[i].down();
    rain[i].stroke();
    if(rain[i].bottom()) {
      rain[i].splash();
      rain[i].y = 0;
    }
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function Raindrop(x,y) {
  this.x = random(windowWidth);
  this.y = random(-100, -600);

  this.z = random(1,3);
	
  this.speed = random(1, 2);
	this.gravity = random(1,2);
  this.len = random(3, 20);
	//this.rgb = [random(255), random(255), random(255)];
  this.rgb = chooseColor();
  this.down = function() {
    this.y += this.speed;
    this.y += this.gravity;
  }
  
  this.bottom = function() {
    if(this.y > windowHeight) {
			return true;
    }
		else {
			return false;
		}
  }
	
	this.splash = function() {
		strokeWeight(this.z);
    strokeWeight(5)

		line(this.x, this.y, this.x+10, this.y-10); //RIGHT
		line(this.x, this.y, this.x+10, this.y-20);

		line(this.x, this.y, this.x, this.y-10); //MIDDLE

		line(this.x, this.y, this.x-10, this.y-20);
		line(this.x, this.y, this.x-10, this.y-10); //LEFT
		
	}

  this.stroke = function() {
    strokeWeight(5);
    stroke(this.rgb[0], this.rgb[1], this.rgb[2],this.rgb[4], this.rgb[5]);
    line(this.x, this.y, this.x, this.y + this.len);		
  }
} 



function chooseColor() {
  var red = [220,20,60];
var orange = [255, 165, 0];
var yellow = [255, 255, 4];
  var green= [02,205,170];
    var blue= [173,216,230]; 
   var purple= [128,0,128]; 
 

  colorSelect = Math.floor(Math.random() * 6);

  if (colorSelect === 0) {
      return red;
   
   } else if (colorSelect ===1) {
      return orange;
 } else if (colorSelect === 2) {
      return yellow;
  } else if (colorSelect === 3) {
      return green;
  } else if (colorSelect === 4) {
      return blue;
  } else if (colorSelect === 5) {
      return purple;
  } 
  

};





