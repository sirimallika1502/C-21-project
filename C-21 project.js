var whitebox, yellowbox, redbox, pinkbox, greenbox

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  whitebox= createSprite(200,200);
  whitebox.velocityY = 1;
  pinkbox = createSprite(380,320);
  redbox = createSprite(380,340);
  yellowbox = createSprite(380,360);
  greenbox = createSprite(380,380);
}

function draw() {
  background(255,255,255); 
  
  pinkbox.shapeColor = "pink";
  redbox.shapeColor = "red";
  yellowbox.shapeColor = "yellow";
  greenbox.shapeColor = "green";
  createEdgeSprites();
  whitebox.bounceOff(bottomedge);
  whitebox.bounceOff(leftEdge);
  whitebox.bounceOff(rightEdge);
  whitebox.bounceOff(topEdge);
  whitebox.bounceOff(pinkbox);
  whitebox.bounceOff(redbox);
  whitebox.bounceOff(greenbox);
  whitebox.bounceOff(yellowbox);

  if(redbox.isTouching(whitebox)&&box.bounceOff(redbox)){
    whitebox.shapecolor="red";
  }

  if(yellowbox.isTouching(whitebox)&&box.bounceOff(yellowbox)){
    whitebox.shapecolor="yellow";
  }

  if(pinkbox.isTouching(whitebox)&&box.bounceOff(pinkbox)){
    whitebox.shapecolor="pink";
  }

  if(greenbox.isTouching(whitebox)&&box.bounceOff(greenbox)){
    whitebox.shapecolor="green";
  }

  drawSprites();
}
