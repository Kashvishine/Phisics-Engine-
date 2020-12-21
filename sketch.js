const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var object
var ball


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var option={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,200,20,option)
  World.add(world,object)
  console.log(object)
  var ball_option={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,200,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}