var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400, 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	//to create box
	wall1=new wall(400,660,200,20);
	
	wall2=new wall(310,600,20,100);
	
	wall3=new wall(490,600,20,100);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  wall1.display();
  wall2.display();
  wall3.display();

 

  drawSprites();
 
}

function keyPressed() {
	
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
  if(keyCode===LEFT_ARROW&&packageBody.position.y===200){
	helicopterSprite.x=helicopterSprite.x-20;
	Body.translate(packageBody,{x:-20,y:0});
 }

  if(keyCode===RIGHT_ARROW&&packageBody.position.y===200){
	helicopterSprite.x=helicopterSprite.x+20;
	Body.translate(packageBody,{x:20,y:0});
 }
}