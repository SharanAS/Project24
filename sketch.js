
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbinBottom,dustbinLeft,dustbinRight,ground;

function preload(){
	
}

function setup() {
   createCanvas(800, 700);
   
   var ground_options ={
	   isStatic:true,
	   density:0.1
   }
   var dustbin_options={
   isStatic:true
   }
   var paper_options={
	   //isStatic:true,
	   restitution:0.3,
	   density:1.2,
	   friction:0.5
   }
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=Bodies.rectangle(400,700,width,1,ground_options);
  World.add(world,ground);
   paper=Bodies.circle(200,685,30,paper_options);
   World.add(world,paper);
   dustbinBottom=Bodies.rectangle(600,685,150,20,dustbin_options);
   World.add(world,dustbinBottom);
   dustbinLeft=Bodies.rectangle(535,595,20,100,dustbin_options);
   World.add(world,dustbinLeft);
   dustbinRight=Bodies.rectangle(665,595,20,100,dustbin_options);
   World.add(world,dustbinRight);
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  EllipseMode=(RADIUS);
  background("lightgreen");
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  fill("purple");
  circle(paper.position.x,paper.position.y,30);
  fill("white");
  rect(dustbinBottom.position.x,dustbinBottom.position.y,150,20);
  rect(dustbinLeft.position.x,dustbinLeft.position.y,20,200);
  rect(dustbinRight.position.x,dustbinRight.position.y,20,200);
 //keyPressed();
 //console.log(paper.position.y);
   drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
    Body.applyForce(paper,paper.position,{x:85,y:-180});
	}
}



