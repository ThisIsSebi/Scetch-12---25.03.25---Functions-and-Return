function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);


  lollipop(100,100,50,'green');
  lollipop(300,200,150,'red');
  lollipop(500,100,50,'blue');
}

function lollipop(x,y,diameter, colour){
  fill(0,200,255);
  rect(x-10,y,20,150);

  fill(colour);
  ellipse(x,y,diameter,diameter);
}
// Imagine what you want to build 