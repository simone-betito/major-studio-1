var x, y, speedX, speedY;
var score = 0;
var quantity = 10;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  y = random(400);
  speedX = -1.6;
  speedY = 2;
  rectMode(CENTER);
}

function draw() {
    background(212,134,134);
  // noStroke();
  fill("#f6e6e6");
  // noFill();
  ellipse(x, y, 10, 10);
  x = x + speedX; // x += speedX;
  y = y + speedY; // y += speedY;
  // // right wall
  // if (x >= 400) {
  //   speedX *= -1; // speedX = speedX * -1
  // }
  // // left wall
  // if (x <= 0) {
  //   speedX *= -1; // speedX = speedX * -1
  // }
  //right wall and left wall
  if (x >= 400 || x <= 0) {
    speedX *= -1; // speedX = speedX * -1`
  }
  // top wall and bottom wall
  if (y <= 0) {
    speedY *= -1; // speedY = speedY * -1`
  }
  // paddle bounce
  if (x <= mouseX + 35 && x >= mouseX - 35 && y >= 365 && y <= 375) {
      speedY *= -1;
      score++; // score += 1; score = score + 1;
      speedX*=1.1;
      speedY*=1.1;
  }

  //paddle
  rect(mouseX, 370, 70, 10);
  fill("black");
  text(score, mouseX, 370+5);
}

function mouseReleased() {
  setup();
  score = 0;
}
