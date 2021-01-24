const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var polygon1;
var ground1;
var slingshot;
var base1,base2;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(width/2,400,width,20);
    polygon1 = new polygon(50,200,20)

    slingshot = new Slingshot(polygon1.body,{x:50,y:200});

    base1 = new ground(390,300,250,10);
    base2 = new ground(700,200,200,10);
    
   //level one
   block1 = new Block(300,275,30,40);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);

   //set 2 for second stand
   //level one
   blocks1 = new Block(640,175,30,40);
   blocks2 = new Block(670,175,30,40);
   blocks3 = new Block(700,175,30,40);
   blocks4 = new Block(730,175,30,40);
   blocks5 = new Block(760,175,30,40);
   //level two
   blocks6 = new Block(670,135,30,40);
   blocks7 = new Block(700,135,30,40);
   blocks8 = new Block(730,135,30,40);
   //top
   blocks9 = new Block(700,95,30,40);

    Engine.run(engine);
}

function draw(){
    background(60,46,46);
    textSize(20);
    fill("yellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground1.display();
  slingshot.display();
  polygon1.display();
  base1.display();
  base2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");

    //console.log(mouseX);
    //console.log(mouseY);


}
    function mouseDragged(){
        Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
    }
    
    function mouseReleased(){
        slingshot.fly();
    }