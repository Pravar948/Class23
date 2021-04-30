const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1 = new Ground(200,380,400,20)
    box2 = new Box(240,100,50,100)
    box3 = new Box(200,50,50,50)
    box4 = new Box(100,30,50,50)
    box5 = new Box(50,50,50,50)
    box6 = new Box(100,100,10,10)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.Display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
}
