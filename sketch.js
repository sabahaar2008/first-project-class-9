var box
//box.shapeColor="red"

function setup() {
  createCanvas(800,800);
}

function draw() 
{
  background(255);
  box=createSprite(200,200,50,50)
  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-5
  }
  if(keyIsDown(UP_ARROW)){
    box.y=box.y+5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+5
  }
drawSprites()
}




