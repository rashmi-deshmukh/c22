const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine, world;
var ground;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

  var ball_options= {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,10,ball_options);
  World.add(world,ground)
  console.log(ground)

}

function draw() {
  background(0); 
  Engine.update(engine) 
  rectMode(CENTER)

  rect( ground.position.x , ground.position.y ,400,10);

  
  drawSprites();
}