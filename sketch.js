const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ball, ground, ball1, box1, box2, box3
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
world = engine.world


box1 = new Box ( 200, 300,70, 70 )
box2 = new Box (350, 48, 54, 65)
box3 = new Box (31, 350, 46, 78)
var options = {
  isStatic: true
}
ground = Bodies.rectangle(200, 380, 400, 57, options)
World.add(world, ground)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  

 box1.display()
box2.display()
box3.display()


  rect(ground.position.x, ground.position.y, 400, 57)
}