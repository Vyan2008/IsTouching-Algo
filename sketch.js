var fixedRect, movingRect;

function setup() {
  createCanvas(1200,1200);
  fixedRect = createSprite(400, 200, 50, 150);
  fixedRect.shapeColor = "green"; 
  movingRect = createSprite(550, 200, 150, 50);
  movingRect.shapeColor="green";
  fixedRect.debug = true;
 movingRect.debug = true;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 &&
  movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2) {
  fixedRect.shapeColor = "red"; 
  movingRect.shapeColor="red";
  
}
else{
  fixedRect.shapeColor = "green"; 
  movingRect.shapeColor="green";
  
}


  drawSprites();
}