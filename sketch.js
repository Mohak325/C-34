const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
 var wreckingBall,b1,b2,b3,b4,b5,chain,ground

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,400);
  ground = new Ground(500,350);
  b1 = new Building(500,100);
  b2 = new Building(500,100);
  b3 = new Building(500,100);
  b4 = new Building(800,100);
  b5 = new Building(800,100);
  b6 = new Building(800,100);
  wreckingBall = new WreckingBall(200,200);
  chain = new Chain(wreckingBall.body,{x:300,y:50})

}

function draw() {
  Engine.update(engine);
  background(255,255,255);
  ground.display();
  b1.display();  
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  wreckingBall.display();
  chain.display();


  
}
function mouseDragged(){
  Matter.Body.setPosition(wreckingBall.body,{x:mouseX,y:mouseY});
}