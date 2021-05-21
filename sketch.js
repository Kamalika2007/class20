var a ,b;

function setup() {
  createCanvas(800,800);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(400, 200, 50, 100);
  a.shapeColor = "green"
  b.shapeColor = "red"
}

function draw() {
  background("black"); 
  
  a.x = mouseX
  a.y = mouseY

  if(a.x-b.x<a.width/2+b.width/2
    &&  b.x-a.x<b.width/2+a.width/2
    && a.y-b.y<a.height/2+b.height/2
    && b.y-a.y<b.height/2+a.height/2){
    a.shapeColor = "yellow"
  }
else{
  a.shapeColor = "green"
}
  drawSprites();
}