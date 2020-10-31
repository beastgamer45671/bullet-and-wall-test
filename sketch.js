var wall, thickness;
var bullet, speed, weight;
var D;

function setup() {
  createCanvas(1600,400);
  thickness=random(23,83);

  speed = random(223, 321);
  weight = random(30, 52);

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = "black";

 bullet = createSprite(50, 200, 50, 50);
 //car.shapeColor = "green";
bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);

 // rect1.x = World.mouseX;
  //rect1.y = World.mouseY;
  
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {
   bullet.velocityX = 0;
   D = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
   if(D<10) {
     wall.shapeColor = "green";
   }
   
   if(D>10) {
     wall.shapeColor = "red";
   }
  }
  
  drawSprites();
}