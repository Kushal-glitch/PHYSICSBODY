const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine,myWorld,object1,ground,ball;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
 
  var options = {
    isStatic:true
  }

 ground = Bodies.rectangle(200,390,400,20,options);
 World.add(myWorld,ground);

 var ball_options = {
   restitution:0.8
 }
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(myWorld,ball);
 console.log(ball);
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}