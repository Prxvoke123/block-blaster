

function setup() {
  createCanvas(displayWidth,displayHeight);
  blockGroup=createGroup()
  for(var i=30;i<displayWidth;i+=55){
    block1=createSprite(i,50,50,50)
    block2=createSprite(i,105,50,50)
    block3=createSprite(i,160,50,50)
    block4=createSprite(i,215,50,50)
    blockGroup.add(block1)
    blockGroup.add(block2)
    blockGroup.add(block3)
    blockGroup.add(block4) 
    block1.shapeColor='red'
    block2.shapeColor='blue'
    block3.shapeColor='green'
    block4.shapeColor='purple'
  }
  paddle=createSprite(displayWidth/2,displayHeight-150,100,20)
  paddle.shapeColor='cyan'
  ball=createSprite(displayWidth/2,displayHeight-250,20,20)
  ball.shapeColor='gold'
  ball.velocityX=8
  ball.velocityY=-12
  edges=createEdgeSprites()
  count=blockGroup.length
}

function draw() {
  background(255,255,255); 
     
  paddle.x=mouseX
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2])
  ball.bounceOff(paddle)
  for(var i=0;i<blockGroup.length;i++){
if(ball.isTouching(blockGroup.get(i))){
ball.bounceOff(blockGroup.get(i))
blockGroup.get(i).destroy()
count--
}

  }
  if(ball.y>displayHeight-140){
    textSize(40)
    text('GAME OVER',displayWidth/2-100,displayHeight/2)

  }

 if(count<=0){
  ball.velocityX=0
  ball.velocityY=0
    textSize(40)
  text('YOU WIN',displayWidth/2-100,displayHeight/2)
 }


  
  drawSprites();
}