const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

 var ballopt={
   restitution: 1
 }

  ground = Bodies.rectangle(200, 380, 600, 20, options);

  ball=Bodies.circle(200,100,20,ballopt);
  World.add(world,ball);
  
  World.add(world,ground);
 console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,400,20) ;

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
}