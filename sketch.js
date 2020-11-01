var paperBall,Ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}
    paperBall = Matter.Bodies.circle(400,500,20,[options]);
	Ground = createSprite(400,600,800,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Ground.bounce(paperBall);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.Body.postion,{x:85,y:-85});
	}
}

