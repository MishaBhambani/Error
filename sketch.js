const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine;
var world;
var object1;
var object2;
var ground;
var option;
var first;
var second;
var third;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();
  world = myengine.world;

  option = {
    restitution: 1.0
  }
  object1 = Bodies.circle(400, 200, 50, option);
  World.add(world, object1);

  ground = {
    isStatic: true
  }
  object2 = Bodies.rectangle(400, 390, 800, 10, ground);
  World.add(world, object2);
  console.log(object2);

  first = new myBox(95, 75, 30, 60);
  second = new myBox(100, 95, 30, 30);
  console.log(first);
  console.log(second);
  //third = new myBox(315, 315, 20, 20);
}

function draw() {
  background("#590320");
  
  Engine.update(myengine);

  ellipseMode(RADIUS);
  ellipse(object1.position.x, object1.position.y, 50, 50);

  rectMode(CENTER);
  rect(object2.position.x, object2.position.y, 800, 10);

  first.display();
  second.display();
  //third.display();
}