onst Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,bas1,bas2,bas3,paper;


function setup() {
	var canvas =createCanvas(800,300);
  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,250,800,20)
  bas1 = new Basket(700,230,100,20);
  bas2 = new Basket(760,200,20,80);
  bas3 = new Basket(640,200,20,80);
  paper = new Paper(680,180,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bas1.display();
  bas2.display();
  bas3.display();
  paper.display();
  
  drawSprites();
 
}
function keypressed(){
if (keyCode=== UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}

}


