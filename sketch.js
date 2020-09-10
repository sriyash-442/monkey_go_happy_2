var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;


function preload(){
  backImage=loadImage("jungle2.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  ground=createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  
  //make ground sprite here and make the monkey collide the ground
 
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
 
}

function draw() {
  
  background(255);
  
    if(backgr.x<0){
 backgr.x=backgr.width/2;
    }   
  
  
  if(ground.x<0){
 ground.x=ground.width/2;
    }   
  if(FoodGroup.isTouching(player)){
    FoodGroup.destroyEach();
    score=score+2
    
  }
  switch(score){
   
      
      
      case 10:player.scale=0.12;
      break;
      case 20:player.scale=0.14;
      break;
       case 30:player.scale=0.16;
      break;
       case 40:player.scale=0.18;
      break;
  }
    if(obstaclesGroup.isTouching(player)){ 
      player.scale=0.08
    }
  
  if(keyDown("space")){
   player.velocityY=-10 ;
    
  }
  player.velocityY=player.velocityY+0.8;
  
  player.collide(ground );
   spawnFood();
  spawnObstacles();
  drawSprites();
  textSize(20);
 fill("white");
  text("score"+score,500,50);

}

function spawnFood() {
 if(frameCount%80===0){
   var banana=createSprite(600,270,10,10);
   banana.y=random(120,200);
   banana.addImage(bananaImage);
   banana.scale=0.05;
   banana.velocityX=-5;
   banana.lifetime=120;
   
     FoodGroup.add(banana);
   
 }
  
  
}

function spawnObstacles() {
  
  if(frameCount % 300 === 0) {
   var stone=createSprite(800,330,10,40);
    stone.addImage(obstacle_img);
    stone.velocityX=-5
    stone.lifetime=160;
    stone.scale=0.2;
    obstaclesGroup.add(stone);
    
    
    
    
  }
}


  
