const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World =Matter.World;

var maxsnowfl=100;
var snowObj=[];

function preload(){
  bgimg = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 // snowObj = new Snow(400,300)

} 

function draw() {
  Engine.update(engine);
  background(bgimg);  


  if(frameCount % 2 ===0){
        snowObj.push(new Snow(random(0,1200), 30));

  }
  
  for(var i = 0; i<snowObj.length ; i=i+1){
    snowObj[i].display();
  
  }

//  snowObj.display();
  drawSprites();
}