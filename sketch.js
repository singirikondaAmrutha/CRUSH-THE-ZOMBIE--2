const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var  ground;
var zombie1,zombie2,zombie3,zombie4;

function preload(){
  zombie1 = loadImage("zombie.png");
  zombie2 = loadImage("zombie.png");
  zombie3 = loadImage("zombie.png");
  zombie4 = loadImage("zombie.png");
  
  backgroundImage = loadImage("backgroung.png");
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new ground(200,690,600,20);



 zombie = createSprite(width/2,height-110);
 zombie.addAnimation("lefttoright",zombie1,zombie2,zombie1);
 zombie.addAnimation("righttolift",zombie3,zombie4,zombie3);
 zombie.scale=0.1;
 zombie.velocityX = 10

 breakButton = createButton("");
 breakButton.position(width - 200,height/2-50);
 breakButton.class("breakbutton");
 breakButton.mousePressed(handleButtonPress);


}

function draw() {
  background(51);
  Engine.update(engine);
 drawSprite();
}

function handleButtonPress(){
  joinpointLink.detach();
  setTimeout(()=>{
   bridge.break();
  },1500);
}