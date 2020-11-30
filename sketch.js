

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  platform = new Ground(400, 680, 800, 40);
  paper = new Ball(100, 675, 10);
  part1 = new DustbinPart(620, 655, 140, 10);
  part2 = new DustbinPart(550, 620, 10, 80);
  part3 = new DustbinPart(690, 620, 10, 80);
  console.log(paper);
  
}
function draw() {
  background(0);
  platform.display();
  paper.display();
  part1.display();
  part2.display();
  part3.display();
  //paper.speedX = 5;
  
  //drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 15, y: -15});
  }
}



