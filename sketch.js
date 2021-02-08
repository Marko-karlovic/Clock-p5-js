function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200)
  rotate(-90);
  
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  
  stroke(120);
  strokeWeight(6);
  noFill();
  ellipse(0, 0, 300, 300);
  
  
  stroke(255, 204, 0)
  strokeWeight(7)
  let end = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end)
  
  let minpoint = map(minutes, 0, 60, 0, 360); 
  
  push();
  rotate(minpoint);
  stroke(0,255, 100);
  strokeWeight(6);
  
  line(0, 0, 143, 0)
  pop();
  
  let hpoint = map(hours % 12, 0, 12, 0, 360);
  
  push();
  rotate(hpoint);
  stroke(255,204,0);
  strokeWeight(5);

  line(0, 0, 100, 0);
  pop();
  
  
  fill(255);
  noStroke();
  let min = 15;
  text( min, -10, 140);
  
  
  fill(255);
  noStroke();
  let min2 = 30;
  rotate(90)
  text( min2, -5, 140);
  
  
  fill(255);
  noStroke();
  let min3 = 45;
  rotate(90)
  text( min3, -5, 140);
  
  
  fill(255);
  noStroke();
  let min4 = 0;
  rotate(90)
  text( min4, -5, 140);
  
  stroke(255);
  point(0,0);
  
  
  
  
  
  
  
}