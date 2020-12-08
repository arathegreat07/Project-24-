
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(200, 450);
	ground = new Ground(400, 600, 800, 15);
	dustbin = new Dustbin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin.display();

}

function keyPressed() {

	 if(keyCode === 32) {

		 Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85});
	 }
}



