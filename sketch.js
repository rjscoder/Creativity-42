var hr, min, sec;
var hourangle, minuteangle, secondsangle;
var time;
var time1;
var time2;
var time3;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}



function draw() {
  background("black"); 
  translate(200, 200);
  rotate(-90);
  hr = hour(); 
  min = minute();
  sec = second ();
 
  secondsangle = map(sec,0,60,0,360);
  minuteangle = map(min,0,60,0,360);
  hourangle = map(hr%12, 0, 12, 0, 360);

  //this is for 1 hour complition
  time=createSprite(78, 01, 20, 04);
  time.shapecolor="white";

  //this is for 30 minutes complition
  time1=createSprite(-78, 01, 20, 04);
  time1.shapecolor="white";

  //this is for 15 minutes complition
  time2=createSprite(01, 78, 04, 20);
  time2.shapecolor="white";

  //this is for 45 minutes complition
  time3=createSprite(-01, -78, 04, 20);
  time3.shapecolor="white";

  fill("black");
  stroke("white");
  strokeWeight(6);
  ellipse(0,0,180,180);
  

  push();
  rotate(secondsangle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  push();
  rotate(minuteangle);
  stroke("green");
  strokeWeight(5);
  line(0,0,68,0);
  pop();

  push();
  rotate(hourangle);
  stroke("yellow");
  strokeWeight(5);
  line(0,0,48,0);
  pop();

 
 //fill("transparent");

  drawSprites();
}