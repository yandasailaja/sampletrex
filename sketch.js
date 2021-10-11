
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(100,150,20,50)
  trex.addAnimation("running",trex_running)
 
}

function draw(){
  background("black")
  drawSprites()

}
