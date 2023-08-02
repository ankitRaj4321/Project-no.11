var sea,ship;
var seaImg,shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background

  sea=createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.velocityX = -3;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

if (sea.x<-300){
sea.velocityX = 0;
}


  

  

  
    
  drawSprites();
}
