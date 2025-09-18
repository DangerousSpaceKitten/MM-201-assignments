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
  xVelocity:
    (Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1),
  y: 230,
  yVelocity: 0,
  //(Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1),
};

const playerPaddle = {
  color: "Red",
  width: 20,
  height: 75,
  x: 10,
  y: 200,
};

const AIPaddle = {
  color: "Red",
  width: 20,
  height: 75,
  x: 610,
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
  keepBallOnPitch(ball);
  bounceOnPlayerPaddle(ball);
  bounceOnAIPaddle(ball);
  moveBall(ball);
  moveAIPaddle();
  wasGoalScored(ball);
  draw();
}

function draw() {
  clearScreen();
  // Draw the current game state.
  drawPaddle(background);
  drawPaddle(middleLine);
  drawBall(ball);
  drawPaddle(playerPaddle);
  drawPaddle(AIPaddle);
  drawScores();
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

function drawBall(ball) {
  fillCircle(ball);
}

function resetBall(ball) {
  ball.x = 310;
  ball.xVelocity =
    (Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1);
  ball.y = 230;
  ball.yVelocity =
    (Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1);
}

function bounceOnPlayerPaddle(ball) {
  if (
    isInBounds(
      ball.x,
      playerPaddle.x + playerPaddle.width,
      playerPaddle.x + playerPaddle.width + ball.radius
    ) &&
    isInBounds(
      ball.y,
      playerPaddle.y - ball.radius,
      playerPaddle.y + playerPaddle.height + ball.radius
    )
  ) {
    ball.xVelocity = ball.xVelocity * -1.1;
    ball.yVelocity = ball.yVelocity * 1.1;
  }
}

function moveAIPaddle() {
  const paddleCenter = AIPaddle.y + AIPaddle.height / 2;
  const maxSpeed = 4;
  const reactionOffset = Math.random() * 30 - 15;

  if (ball.y + reactionOffset < paddleCenter - 10) {
    AIPaddle.y -= maxSpeed;
  } else if (ball.y + reactionOffset > paddleCenter + 10) {
    AIPaddle.y += maxSpeed;
  }

  if (AIPaddle.y < BORDER.TOP) AIPaddle.y = BORDER.TOP;
  if (AIPaddle.y + AIPaddle.height > BORDER.BOTTOM)
    AIPaddle.y = BORDER.BOTTOM - AIPaddle.height;
}

function bounceOnAIPaddle(ball) {
  if (
    isInBounds(ball.x, AIPaddle.x - ball.radius, AIPaddle.x + AIPaddle.width) &&
    isInBounds(
      ball.y,
      AIPaddle.y - ball.radius,
      AIPaddle.y + AIPaddle.height + ball.radius
    )
  ) {
    ball.xVelocity = ball.xVelocity * -1.1;
    ball.yVelocity = ball.yVelocity * 1.1;
  }
}

function drawPaddle(paddle) {
  brush.fillStyle = paddle.color;
  brush.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

scene.addEventListener("mousemove", movePlayerPaddle);
function movePlayerPaddle(e) {
  playerPaddle.y = e.offsetY;
}

function wasGoalScored() {
  if (ball.x + ball.radius >= BORDER.RIGHT) {
    addPlayerScore("Player");
    resetBall(ball);
  } else if (ball.x - ball.radius <= BORDER.LEFT) {
    addPlayerScore("AI");
    resetBall(ball);
  }
}

function addPlayerScore(player) {
  if (player == "Player") {
    playerScore += 1;
    console.log("playerScore = " + playerScore);
  } else if (player == "AI") {
    AIScore += 1;
    console.log("AIScore = " + AIScore);
  }
}

function drawScores() {
  brush.fillStyle = "white";
  brush.font = "24px Arial";
  brush.textAlign = "center";

  // Player score (left side)
  brush.fillText(playerScore, scene.width / 2 - 20, 40);

  // AI score (right side)
  brush.fillText(AIScore, scene.width / 2 + 20, 40);
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
