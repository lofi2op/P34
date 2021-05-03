const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var MyEngine, myWorld;

function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(800, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  hero = new Superhero(100,100);
  monster = new Monster(700,100);
  ground = new Ground(400,190,1000,10);

  block1 = new Block(400,100,20,30);
  block2 = new Block(400,170,20,30);
  block3 = new Block(400,150,20,30);
  block4 = new Block(400,120,20,30);

  block5 = new Block(440,180,20,30);
  block6 = new Block(440,170,20,30);
  block7 = new Block(440,160,20,30);

  block8 = new Block(480,150,20,30);
  block9 = new Block(480,130,20,30);

  block10 = new Block(520,180,20,30);
  block11 = new Block(520,170,20,30);
  block12 = new Block(520,160,20,30);
  


  fly = new Fly(hero.body,{x:150, y:100})
}

function draw() {
  background(bg);
  Engine.update(myEngine)

  hero.display();
  monster.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  
  fly.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY})
}
