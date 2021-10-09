const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var engine, world;
var backgroundImg, ground;
var bg, Hour;
var snow = []
var snow1;
var maxSnow = 100;

function preload()
{
  getbackgroundImg()
}
function setup() {
  createCanvas(900,600);

  engine = Engine.create();
  world = engine.world;  

  ground = new Ground(450,500,900,20)
  
  // for(var i = 0; i < maxSnow; i++)
  // {
   
  //}
  //createSprite(400, 200, 50, 50);
}

function draw() {
  //background(255,255,255);
  if (backgroundImg)
  background(backgroundImg)
//ground.display()
var snow2;
   Engine.update(engine)

   if(frameCount%50===0){
 
   snow2 = new Snowfall(random(100,500), random(0,500))
   console.log(frameCount,snow2.body.position)
  
   }
   if(snow2)
   {
    snow2.display()
    console.log("dis",frameCount, snow2.body.position)
   }
 

  // for (var i = 0; i < maxSnow; i++)
  // {
  //   if(frameCount%30===0)
  //   {
  //     snow[i].display()
  //     snow[i].update()
  //   }
   
  // }

  drawSprites();
}

async function getbackgroundImg()
{
  var response = await fetch("http://worldclockapi.com/api/json/est/now")
  console.log(response)

  var responseJSON = await response.json()
  console.log(responseJSON)

  currentdatetime = responseJSON.currentDateTime; 
  Hour = currentdatetime.slice(11,13)
  console.log(Hour)   

  if(Hour >= 20 && Hour < 4)
  {
    bg = "snow2.jpg"
    console.log(bg)
  }else if(Hour >= 4 && Hour < 12)
  {
    bg = "snow1.jpg"
  }else if(Hour >= 12 && Hour < 20)
  {
    bg = "snow3.jpg"
  }

   backgroundImg = loadImage(bg)
} 