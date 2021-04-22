var ninja,ninjaImg;
var bgImg;
var roof,roofImg;
var back;

function preload(){
ninjaImg=loadImage("ninja.png");
bgImg=loadImage("back.png");
roofImg=loadImage("chineseroof.png");
}

function setup(){
canvas=createCanvas(1200,400);

back=createSprite(-200,150);
back.addImage(bgImg);
back.scale=6.0;
back.velocity.x=back.velocity.x+1*2

ninja=createSprite(130,200);
ninja.addImage(ninjaImg);
ninja.scale=0.5;

roof=createSprite(350,200);
roof.addImage(roofImg);
roof.scale=0.5;
roof.scale=1.2;
roof

}

function draw(){
background(bgImg);

if (back.x < 600){
    back.x = back.width/2;
  }
drawSprites();
}