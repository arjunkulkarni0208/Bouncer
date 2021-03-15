const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;
function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,50,ground_options);
  World.add(world,ground)

  var ball_options ={
    restitution:1.0
  }
  ball = Bodies.rectangle(200,100,25,25,ball_options);
  World.add(world,ball)

}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);

    rect(ground.position.x,ground.position.y,400,50);
    rect(ball.position.x,ball.position.y,25,25);
  
}
