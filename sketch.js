var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=320; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=560; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=640; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=720; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,300));
  }
  
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,400));
  }


  //create particle objects
 ball1=new particle(200,200,10);
 ball2=new particle(200,210,10);
 ball3=new particle(200,220,10);
 ball4=new particle(200,230,10);
 ball5=new particle(200,240,10);
 ball6=new particle(200,250,10) ;  
 ball7=new particle(200,260,10);
 ball8=new particle(200,270,10);
 ball9=new particle(200,280,10);
 ball10=new particle(200,290,10);

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //display the paricles 
  //if(frameCount%60===0){
    //particles .push(new Particle(random(width/2-10,height/2+10),10,10));
    
  //}
  //for (var h=0;h<particles.length; h++){
    //particles[h].display();
  //} 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();

}