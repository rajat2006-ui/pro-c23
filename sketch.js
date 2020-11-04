
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var waste1;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  waste1=new Waste();

  ground1=new Ground();

  box1=new Box(750,670,200,20);
  box2=new Box(640,610,20,100);
  box3=new Box(860,610,20,100);

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);	

  background(0);

  waste1.display()
  box1.display();;
  ground1.display();
  box2.display();
  box3.display();
  
  drawSprites();
}

function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(waste1.body,waste1.body.position,{x:150,y:-85});
  }
}