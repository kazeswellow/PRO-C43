function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function perload(){
  loadImage("")
}

function draw() {
  background(spacebg.jpg);  
  drawSprites();
}