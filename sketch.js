
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1360, 619);
	rectMode(CENTER);

	var options={
		isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Ball(30,260,20,20);
	box1 = new Box(1050,570,150,20);
	box2 = new Box(975,500,20,150);
	box3 = new Box(1125,500,20,150);
	
	Engine.run(engine);
  
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	ground.shapeColor=(0,255,0);
 	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  paperObject.display();
  box1.display();
  box2.display();
  box3.display();

  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-15})
	}
}