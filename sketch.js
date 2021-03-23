const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,390,1200,10);
    box1 = new Box(900,340,20,100);
    box2 = new Box(1100,340,20,100);
    box3 = new Box(1000,390,200,20);
    paper = new Paper(150,300,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    box3.display();
    paper.display();
   text ("press Space to move the Ball" ,500,50);
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-70})
    }
}