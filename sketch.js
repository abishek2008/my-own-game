var champion,ground,sceneimg,sanitizer,maskimg,sanitizerimg,manimg1,manimg2,manimg3,manimg4,manimg5,manimg6,manimg7;

function preload(){
sceneimg=loadImage("road.jpg");
maskimg=loadImage("mask1.png");
sanitizerimg=loadImage("sanitizer.gif")
manimg=loadAnimation("sprite1.png","sprite2.png","sprite3.png","sprite4.png","sprite5.png","sprite6.png","sprite7.png")
}


function setup() {
  createCanvas(1000,600);
   scene=createSprite(0,0,1300,600);
   scene.x=scene.width/2;
   scene.addImage(sceneimg);
   scene.scale=1.7;
   scene.velocityX=-5;
   
  champion=createSprite(200,480,50,50);
  champion.addAnimation("m1",manimg)
  ground=createSprite(600,550,10000,10);
 // mask=createSprite(220,400);
 // mask.addImage(maskimg);
  ground.visible=false;
}

function draw() {
  background("black"); 
  if(keyDown("space")&& champion.y>470){
    
    champion.velocityY=-26;
    }
    champion.velocityY=champion.velocityY+1;
    //champion.collide(ground);
    if(scene.x<0){
      scene.x=scene.width/2;
    }
    console.log(champion.y)
    spawnMask();
    spawnSanitizer();
    edges = createEdgeSprites();
    champion.collide(edges[3])

  drawSprites();
}


function spawnMask() {
  if(frameCount % 350 === 0) {
   var mask =createSprite(1000,100,50,50);
   mask.y = Math.round(random(100,300));
   mask.addImage(maskimg);
    mask.scale = 0.3;
    mask.velocityX = -3;
    
  }
}

function spawnSanitizer(){
  if(frameCount % 230 === 0) {
    var sanitizer =createSprite(1000,700,50,50);
   sanitizer.y = Math.round(random(80,120));
    sanitizer.addImage(sanitizerimg);
     sanitizer.scale = 0.2;
     sanitizer.velocityX =- 3;
     
   }
}