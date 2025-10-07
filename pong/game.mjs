// CONSTANTS ------------------------------------------------------------------
const FPS = 1000 / 60;

// Game variables -------------------------------------------------------------
const scene = document.getElementById("scene");
const brush = getBrush();
let interval;

let playerScore = 0;
let AIScore = 0;

const maxDurationInSeconds = 90;
const startTime = Date.now();
let currentTime = Date.now();
let isGameOver = false;

let maxAISpeed = 4;

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
  yVelocity:
    (Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1),
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
  playerScore = 0;
  AIScore = 0;
  isGameOver = false;
  interval = setInterval(update, FPS);
}

function update() {
  updateCurrentTime();
  keepBallOnPitch(ball);
  bounceOnPlayerPaddle(ball);
  bounceOnAIPaddle(ball);
  checkBallPosition(ball);
  moveBall(ball);
  moveAIPaddle();
  draw();
  endGame(startTime);
}

function draw() {
  if (isGameOver === false) {
    clearScreen();
    drawPaddle(background);
    drawPaddle(middleLine);
    drawBall(ball);
    drawPaddle(playerPaddle);
    drawPaddle(AIPaddle);
    drawScores();
    drawTimer(currentTime);
  } else {
    clearScreen();
    drawPaddle(background);
  }
}

function keepBallOnPitch(ball) {
  if (
    isInBounds(
      ball.x,
      BORDER.LEFT + ball.radius,
      BORDER.LEFT + ball.radius + playerPaddle.x
    )
  ) {
    AIScore++;
    resetBall(ball);
  } else if (
    isInBounds(
      ball.x,
      BORDER.RIGHT - ball.radius - 10,
      BORDER.RIGHT - ball.radius
    )
  ) {
    playerScore++;
    resetBall(ball);
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
  ball.x = BORDER.RIGHT / 2 - ball.radius;
  ball.xVelocity =
    (Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1);
  ball.y = BORDER.BOTTOM / 2 - ball.radius;
  ball.yVelocity =
    (Math.round(Math.random() * 4) + 2) * (Math.random() > 0.5 ? 1 : -1);
}

function checkBallPosition(ball) {
  if (ball.x < BORDER.LEFT) {
    ball.x = ball.x * -1 + 30;
  } else if (ball.x > BORDER.RIGHT) {
    ball.x = ball.x - (ball.x % 610);
  } else if (ball.y < BORDER.TOP) {
    ball.y = ball.y * -1;
  } else if (ball.y > BORDER.BOTTOM) {
    ball.y = ball.y - (ball.y % 480);
  }
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
    if (ball.xVelocity < 10 && ball.yVelocity < 10) {
      ball.xVelocity = ball.xVelocity * -1.1;
      let collisionPoint = ball.y - playerPaddle.y;
      ball.yVelocity =
        ball.yVelocity * (0.5 + Math.abs(20 - collisionPoint) / 20);
    }
  }
}

function moveAIPaddle() {
  const paddleCenter = AIPaddle.y + AIPaddle.height / 2;
  const reactionOffset = Math.random() * 30 - 15;

  if (ball.y + reactionOffset < paddleCenter - 10) {
    AIPaddle.y -= maxAISpeed;
  } else if (ball.y + reactionOffset > paddleCenter + 10) {
    AIPaddle.y += maxAISpeed;
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
    if (ball.xVelocity < 10 && ball.yVelocity < 10) {
      ball.xVelocity = ball.xVelocity * -1.1;
      let collisionPoint = ball.y - AIPaddle.y;
      ball.yVelocity =
        ball.yVelocity * (0.5 + Math.abs(20 - collisionPoint) / 20);
    }
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

window.addEventListener("keydown", activateCheat);
function activateCheat(e) {
  let key = e.key;
  if (key == "l") {
    maxAISpeed = 0;
    setTimeout(resetAISpeed, 2000);
    function resetAISpeed() {
      maxAISpeed = 4;
    }
  } else if (key == "c") {
    playerPaddle.y = ball.y - playerPaddle.height / 2;
  } else if (key == "+") {
    ball.radius += 2.5;
  } else if (key == "-" && ball.radius >= 5) {
    ball.radius -= 2.5;
  }
}

function drawScores() {
  brush.fillStyle = "white";
  brush.font = "24px Copperplate";
  brush.textAlign = "center";

  brush.fillText(playerScore, scene.width / 2 - 20, 40);

  brush.fillText(AIScore, scene.width / 2 + 20, 40);
}

function updateCurrentTime() {
  currentTime = Date.now();
}

function drawTimer(currentTime) {
  let countdown =
    maxDurationInSeconds - Math.ceil((currentTime - startTime) / 1000);
  brush.fillText(
    "Time: " + countdown + "s",
    BORDER.RIGHT - 100,
    BORDER.TOP + 50
  );
}

function endGame(startTime) {
  if (currentTime >= startTime + maxDurationInSeconds * 1000) {
    isGameOver = true;
  }
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
