<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
        }
        canvas {
            background-color: #000;
            display: block;
            margin: 20px auto;
        }
    </style>
</head>
<body>

<h1>Snake Game</h1>
<canvas id="gameCanvas" width="400" height="400"></canvas>

<script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    let snake = [{ x: 160, y: 160 }];
    let dx = gridSize;
    let dy = 0;
    let food = { x: 320, y: 320 };
    let score = 0;

    function randomFoodPosition() {
        return {
            x: Math.floor(Math.random() * canvas.width / gridSize) * gridSize,
            y: Math.floor(Math.random() * canvas.height / gridSize) * gridSize,
        };
    }

    function drawSnake() {
        snake.forEach(part => {
            ctx.fillStyle = "lime";
            ctx.fillRect(part.x, part.y, gridSize, gridSize);
        });
    }

    function drawFood() {
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, gridSize, gridSize);
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score += 10;
            food = randomFoodPosition();
        } else {
            snake.pop();
        }
    }

    function detectCollision() {
        const head = snake[0];
        // Check collision with walls
        if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
            return true;
        }
        // Check collision with itself
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    function changeDirection(event) {
        const keyPressed = event.keyCode;
        const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

        if (keyPressed === LEFT && dx === 0) {
            dx = -gridSize;
            dy = 0;
        }
        if (keyPressed === UP && dy === 0) {
            dx = 0;
            dy = -gridSize;
        }
        if (keyPressed === RIGHT && dx === 0) {
            dx = gridSize;
            dy = 0;
        }
        if (keyPressed === DOWN && dy === 0) {
            dx = 0;
            dy = gridSize;
        }
    }

    function gameLoop() {
        if (detectCollision()) {
            alert("Game Over! Score: " + score);
            document.location.reload();
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveSnake();
            drawSnake();
            drawFood();
        }
    }

    document.addEventListener("keydown", changeDirection);
    setInterval(gameLoop, 100);
</script>

</body>
</html>
