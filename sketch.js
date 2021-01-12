var cat (30,40,15,20)
var mouse (20,30,15,10)
function preload() {
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
background("yellow")
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");
}
text(mouseX+','+ mouse.Y,10,45);
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
}
cat.changeAnimation("catLasteImg",catImg3)
cat.changeAnimation("catLastImg")



}
