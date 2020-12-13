
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new tree (650, 460,400,400);
	mango1 = new mango (600, 300, 50,50)
	mango2 = new mango (650, 350, 50,50)
	mango3 = new mango (700, 400, 50,50)
	mango4 = new mango (600, 400, 50,50)
	ground1 = new ground (width/2, 650, width, 10);
	boy1 = new boy (200,600, 200,200)
	stone1 = new stone (150,300, 50, 50)

	slingshot1 = new slingshot (stone1.body,{x:100, y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground1.display();
  stone1.display();
  boy1.display();
  slingshot1.display();    
  drawSprites();
 
}

function mouseDragged (){
    Matter.Body.setPosition (stone1.body, {x:mouseX, y:mouseY }) 
}

function mouseReleased (){
    slingshot1.fly ()
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if (distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		launcherObject.attach(stone1.body)
	}
}




