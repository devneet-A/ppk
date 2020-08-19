var runner,energyboost
var ground,invisiground;
var ready,running;

function preload(){
 
  //running =loadImage('images/running1.png');
}
function setup(){
  createCanvas(400,400)
  
  runner = createSprite(20,355,30,30);

 //runner.addImage('run',running);
  //runner.scale = 0.25
 
ground = createSprite(20,375,4000,10);
  invisiground = createSprite(20,385,400,10)
  invisiground.visible = true;
}
function draw(){
  background('with');
 
   runner.velocityX = 3; 
  invisiground.velocityX = 5;
  ground.velocityX = 5;
  drawSprites();

}