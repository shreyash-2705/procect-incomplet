const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var ball;
var ground2;
var ground;
 var ball2;
var ball3;
var ball4;
var ball5;
var ball6;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
ground2=new Ground();
ground=new Ground();
ball=new Box(100,200,100);
ball2=new Box(300,100,100);
ball3=new Box(500,100,100);
ball4=new Box(400,100,100);
ball5=new Box(200,100,100);
ball6=new Box(600,100,100);
}

function draw() {
  background(250,220,255); 
  Engine.update(engine);

ball6.display();
ball5.display();
ball3.display();
ball4.display();
ball2.display(); 
ball.display();
ground.display(); 
ground2.display();
}

