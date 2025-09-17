// CONSTANTS ------------------------------------------------------------------
const FPS = 1000 / 60;

// Game variables -------------------------------------------------------------
const scene = document.getElementById("scene");
const brush = getBrush();
let interval;

let playerScore = 0;
let AIScore = 0;

const BORDER = {
  LEFT: 0,
  TOP: 0,
  RIGHT: 640,
  BOTTOM: 480,
};

const ball = {
  color: "#f97f04d4",
  radius: 10,
  x: 310,
  //xVelocity: (Math.round(Math.random() * 4) + 2) * Math.random() > 0.5 ? 1 : -1,
  xVelocity: 5,
  y: 230,
  yVelocity: 3,
  //yVelocity: (Math.round(Math.random() * 2) + 1) * Math.random() > 0.5 ? 1 : -1,
};

const paddle = {
  color: "Red",
  width: 20,
  height: 75,
  x: 10,
  y: 200,
};

const background = {
  x: 0,
  y: 0,
  width: 640,
  height: 480,
  color: "#000000",
};

const middleLine = {
  x: 318,
  y: 0,
  width: 4,
  height: 480,
  color: "#FFFFFF",
};

// Game engine ----------------------------------------------------------------

function init() {
  // Do any initialization that is needed before the game starts.
  playerScore = 0;
  AIScore = 0;
  interval = setInterval(update, FPS);
}

function update() {
  // Update to game logic.
  moveBall(ball);
  keepBallOnPitch(ball);
  bounceOnPaddle(ball);
  draw();
}

function draw() {
  clearScreen();
  // Draw the current game state.
  drawPaddle(background);
  drawPaddle(middleLine);
  drawBall(ball);
  drawPaddle(paddle);
}

function keepBallOnPitch(ball) {
  if (
    isInBounds(ball.x, BORDER.LEFT + ball.radius, BORDER.RIGHT - ball.radius) ==
    false
  ) {
    ball.xVelocity = ball.xVelocity * -1;
  }

  if (
    isInBounds(ball.y, BORDER.TOP + ball.radius, BORDER.BOTTOM - ball.radius) ==
    false
  ) {
    ball.yVelocity = ball.yVelocity * -1;
  }
}

function moveBall(ball) {
  ball.x = ball.x + ball.xVelocity;
  ball.y = ball.y + ball.yVelocity;
}

function bounceOnPaddle(ball) {
  if (
    isInBounds(
      ball.x,
      paddle.x + paddle.width,
      paddle.x + paddle.width + ball.radius
    ) &&
    isInBounds(ball.y, paddle.y - ball.radius, paddle.y + paddle.height)
  ) {
    ball.xVelocity = ball.xVelocity * -1;
  }
}

function drawBall(ball) {
  fillCircle(ball);
}

function drawPaddle(paddle) {
  brush.fillStyle = paddle.color;
  brush.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

scene.addEventListener("mousemove", movePaddle);
function movePaddle(e) {
  paddle.y = e.offsetY;
}

init(); // Start the game

// Utility functions ----------------------------------------------------------

function isInBounds(value, min, max) {
  return value >= min && value <= max;
}

function fillCircle(circle) {
  brush.beginPath();
  brush.fillStyle = circle.color;
  brush.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  brush.fill();
}

function getBrush() {
  return scene.getContext("2d");
}

function clearScreen() {
  if (brush) {
    brush.clearRect(0, 0, scene.width, scene.height);
  }
}
