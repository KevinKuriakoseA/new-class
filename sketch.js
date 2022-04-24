
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var ball1

function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground2 = new Ground(100,200,50,50)
  ground3 = new Ground(100,300,50,50)
  ground4 = new Ground(100,400,50,50)
  ground5 = new Ground(100,500,50,50)
  ground6 = new Ground(100,600,50,50)

  ball1 = new Ball(200,10,20,"red")
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);
console.log(ground.position.y)
  ground2.appear();
  ground3.appear();
  ground4.appear();
  ground5.appear();
  ground6.appear();
  
  ball1.show()
}

function vForce()
{
  //Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:0,y:-0.05});
}
  