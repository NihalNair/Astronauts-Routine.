var sceneImg,scene,brushing,cleaning,eating,exercise,floating,sleeping;

function preload(){

sceneImg = loadImage("background.png");
brushing = loadAnimation("Brushing.png");
cleaning = loadAnimation("clean.png");
eating = loadAnimation("eating.png");
exercising = loadAnimation("exercise.png");
floating = loadAnimation("floating.png");
sleeping = loadAnimation("sleeping.png");

}

function setup(){
  createCanvas(807,460);

  scene = createSprite(400, 230, 50, 50);
  scene.addImage(sceneImg);
  scene.scale = 1.3;

  astronaut = createSprite(400, 230, 50, 50);
  astronaut.addAnimation("sleep", sleeping);
  astronaut.scale = 0.8;




  //createSprite(400, 200, 50, 50);
}

function draw(){
  background("blue");  

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brush", brushing);
  astronaut.changeAnimation("brush");
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("exercise", exercising);
  astronaut.changeAnimation("exercise");
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;  
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eat", eating);
  astronaut.changeAnimation("eat");
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("clean", cleaning);
  astronaut.changeAnimation("clean");
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("float", floating);
  astronaut.changeAnimation("float");
  astronaut.x = 400;
  astronaut.y = 230;
  astronaut.velocityX = -4;
  astronaut.velocityY = 2; 
}

if(astronaut.x < 0){
  astronaut.x = 807;
  astronaut.y = 0;
}

  drawSprites();

}