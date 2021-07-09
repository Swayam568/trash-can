
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball
var radius = 40

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 670, 1600,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	var balloptions = {
		restitution: 0.3,
		friction: 0,
		density: 1.2,
		isStatic: false,
	}

	ball = Bodies.circle(250,100,radius/2,balloptions);

	World.add(world,ball)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW){
		Matter . Body . applyForce (ball,ball.position,{x:85,y:-85})
	}
}

