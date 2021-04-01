var bg,bgimage
var mainplayer,mainplayerImage
var mainplayertwo,mainplayerimagetwo
var bulletfire,bulletfireimage
var bullet,bulletimage
var bullet2,bullet2image
var bulletcount=0
var start,startimage
var loadingscreen,loadingscreenimage
var next,nextimage
var gamestate="start"




function preload(){
  bgimage=loadImage("bg.jpg");
mainplayerimagetwo=loadImage("main player 2.png")
  mainplayerImage=loadImage("main player.png")
bulletfireimage=loadImage("bullet fire.png")
  bulletimage=loadImage("bullet.png")
  bullet2image=loadImage("bullet2.png")
startimage=loadImage("start.jpg")
loadingscreenimage=loadImage("loading screen.jpg")
nextimage=loadImage("next.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  mainplayer=createSprite(395,425,50,50)
  mainplayer.addImage("hero",mainplayerImage)
  mainplayer.visible=false
  mainplayertwo=createSprite(918,448,50,50)
  mainplayertwo.visible=false
  mainplayertwo.addImage("zero",mainplayerimagetwo)

  mainplayertwo.scale=0.5;
  bullet=createSprite(518,422,50,50);
  bullet.addImage("goli",bulletimage);
  bullet.visible=false
  bullet.scale=0.3;
  healthone=createSprite(335,145,200,20);
 healthone.visible=false
  healthone.shapeColor="red";
  healthtwo=createSprite(886,145,200,20);
  healthtwo.visible=false
  healthtwo.shapeColor="red";
  mainplayertwo.setCollider("circle",0,0,90)
  //mainplayertwo.debug=true;
bullet2=createSprite(802,422,50,50);
bullet2.visible=false
  bullet2.addImage("goli2",bullet2image);
  bullet2.scale=0.3;
  mainplayer.setCollider("circle",0,0,90)
  //mainplayer.debug=true;
  start=createSprite(displayWidth/2,displayHeight/2)

  start.addImage("chalu",startimage)
  start.scale=3
  loadingscreen=createSprite(displayWidth/2,displayHeight/2)
  loadingscreen.scale=5
  loadingscreen.addImage("sabarkaro",loadingscreenimage)
  loadingscreen.visible=false
next=createSprite(1436,725)
next.addImage("doosra",nextimage)
//next2=createSprite(1436,725)
//next2.addImage("doosra",nextimage)


//next.visible=false
}

function draw() {
  if (gamestate=="start"){
    background(0);

  }
  
  text(mouseX+","+mouseY, mouseX, mouseY);
  if(keyDown("SPACE")){ 
    bullet.velocityX=5;
    //bullet.addImage("goli",bulletfireimage);  
    }
  if(bullet.collide(mainplayertwo)){

  healthtwo.width=healthtwo.width-40;
  }
  if(keyDown("ENTER")){ 
    bullet2.velocityX=-5;
    //bullet.addImage("goli2",bullet2fireimage);  
    }
    if(bullet2.collide(mainplayer)){

      healthone.width=healthone.width-40;
      }
      if(mousePressedOver(next)){
start.visible=false
//loadingscreen.visible=true
next.visible=false
gamestate="play"


      }
      if(gamestate=="play"){

        background(bgimage)
        mainplayer.visible=true
        mainplayertwo.visible=true
        bullet.visible=true

        bullet2.visible=true
        healthone.visible=true
        healthtwo.visible=true
        
      }
  drawSprites();
  
}


  
  
    
  


