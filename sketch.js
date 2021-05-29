
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papers = []; 
var ground;
var papersHeight;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,height,width,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
	for (var k = 0; k <=width; k = k + 80) {      
		papers.push(new Paper(k, height-papersHeight/2, 10, papersHeight));    
	  }
	  
	  if(frameCount%60===0){
		papers.push(new Paper(random(width/2-10, width/2+10),10,10));    
	  }
	  
	  
	  for (var j = 0; j < papers.length; j++){
		papers[j].display();
	  }
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display(); 

  for (var k = 0; k < papers.length; k++) {            
    papers[k].display();    
  }
  
  drawSprites();
 
}



