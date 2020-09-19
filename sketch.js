var fr,mr
var test1

function setup() {
  createCanvas(800,400);
  fr =createSprite(400, 200, 50, 50);
  fr.shapeColor="red"
  
  mr=createSprite(200,200,50,50)
  mr.shapeColor="red"

  test1=createSprite(400,600,30,45)

}

function draw() {
  background(255,255,255);
  fr.y=mouseY
  fr.x=mouseX

 

if (isTouching(mr,test1)) 
{
  mr.shapeColor="purple"
  fr.shapeColor="purple"
  }  

else {
  fr.shapeColor="red"
  mr.shapeColor="red"

}







  drawSprites();

}

function isTouching (object1,object2){

if (object1.x - object2.x <object1.width/2 + object2.width/2 && Object1.x-object2.x<object2.width/2+object1.width/2 &&object1.y-object2.y < object2.height/2+object1.height/2 && object2.y - object1.y <object1.height/2 + object2.height/2  ) {  
 
  return true 

}

else{
return false

}

}









