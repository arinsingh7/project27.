const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1, bob2, bob3, bob4, bob5; 
var bobObject1;
var rope1, rope2, rope3, rope3, rope4, rope5;
var world, engine;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(390, 50, 300, 20); 

	bob1 = new Bob(670, 300);
	bob2 = new Bob(720, 300);
	bob3 = new Bob(770, 300);
	bob4 = new Bob(820, 300);
	bob5 = new Bob(870, 300);
	
	Rope1 = new rope(bob1.body, roof.body, 280, 50);
	Rope2 = new rope(bob2.body, roof.body, 330, 50);
	Rope3 = new rope(bob3.body, roof.body, 380, 50);
	Rope4 = new rope(bob4.body, roof.body, 430, 50);
	Rope5 = new rope(bob5.body, roof.body, 480, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	Rope1.display();
	Rope2.display();
	Rope3.display();
	Rope4.display();
	Rope5.display();

	keyPressed();

 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -45,y : -40}); 
 }
}


