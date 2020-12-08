

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,paper1;
var dustbinImage,paperImage
var Bin
function preload()
{
 dustbinImage = loadImage("Images/dustbingreen.png");

}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new Paper(150,320,25);
  bin = createSprite(964,520,20,20);
  bin.scale = 0.45;
  bin.addImage(dustbinImage);

  
  dustbin1=new Dustbin(800,335,15,100);
  dustbin2=new Dustbin(900,380,200,15);
  dustbin3=new Dustbin(1000,335,15,100);
  ground1=new Ground(600,392.5,1200,15);
	
  
}


function draw() {
  
  background(0);

  Engine.update(engine);
  

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:115,y:-115});
  }
}


