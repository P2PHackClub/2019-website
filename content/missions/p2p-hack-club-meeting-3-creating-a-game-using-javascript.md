---
title: 'P2P Hack Club Meeting 3: Creating a game using JavaScript!'
description: Learn how to create a simple game using JavaScript!
author: 'P2P hack club team, modified from an article by MDN'
slug: simple-javascript-game
---
## Part I: Setup

Again, we're using [Pumatech](https://www.pumatech.org) today! To get started, go to <https://www.pumatech.org>. When you're there create a new HTML document and save it as "index.html". Today's game we'll be creating is a Break Breaker ball game!

## Part II: Creating the Canvas

### Creating the Canvas Base

First things first, we have to add the HTML document structure: html, head, and body. (Need a cheat sheet? Take a look at this [document](https://docs.google.com/document/d/1R0S5fqrL8e_dMbramMEKRs6elU3VSHqHOLNP3rlm9fw/edit)). Here's what your code should look like right now: 

```
<!DOCTYPE html><html><head></head><body></body></html>
```

Seems simple right? This is because your game will be rendered entirely on the `<canvas>` element. Next, add in the following code:

```
<!DOCTYPE html><html>
<head>    <meta charset="utf-8" /> <title>     </title>
 // Your title goes between the <title> elements  <style>	       * { padding: 0; margin: 0; }
	canvas { background: #eee; display: block; margin: 0 auto; }   </style></head>

<body>
<canvas id="myCanvas" width="480" height="320"></canvas>
<script>	// JavaScript code goes here
</script>
</body>
</html>
```

In our code we have a `charset` defined, `<title>` and some CSS in the `<head>`. The charset attribute specifies the character encoding for the HTML document. The body contains `<canvas>` and `<script>` elements — we'll create the game inside the canva and write the JavaScript code that controls it in the script. The `<canvas>` element has an id of myCanvas, which allows us to easily get a reference to it, and it is 480 pixels wide and 320 pixels high. All the JavaScript code we will write today will go between the opening `<script>` and closing `</script>` tags.

## Part II: Adding the Ball

### 1) Setting up

 In order to create graphics on the `<canvas>`, we first have to grab a reference to it in JavaScript. Add the following under your opening `<script>` tag:

```
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

The first line of code is storing a reference to the `<canvas>` element, while the second line of code is using a `ctx` variable to store the 2D context (The tool we can use to paint on the canvas)

Next, we'll be defining a starting point at the bottom center of our canvas by using variables called `x` and `y`, then use those to define the position the circle is drawn at. Add the following under the code you just wrote above:

```
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
```

Next, we want to add a small value to x and y after every frame has been drawn to make it appear that the ball is moving. Let's call these small values as dx and dy and set their values to 2 and -2. Add them below your x and y variable definitions:

```
var dx = 2;var dy = -2; 
```

### 2) Adding our ball

As you can see from the header above, we're now going to be adding our ball! The following code below draws out and moves our ball:

```
function drawBall() {
ctx.beginPath();
ctx.arc(x, y, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
}
```

The code below us shows the code for our paddle. It'll also tell us when it's game over. Put this right under the code above:

```
function draw() { function draw() {ctx.clearRect(0, 0, canvas.width, canvas.height);drawBall();drawPaddle(); if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {   dx = -dx; }  if(y + dy < ballRadius) {   dy = -dy; }else if(y + dy > canvas.height-ballRadius) {if(x > paddleX && x < paddleX + paddleWidth) { dy = -dy; }else {  alert("GAME OVER");  document.location.reload();  clearInterval(interval); // Needed for Chrome to end game  } }   if(rightPressed && paddleX < canvas.width-paddleWidth) {   paddleX += 7;  }  else if(leftPressed && paddleX > 0) {  paddleX -= 7;    }    x += dx;    y += dy;}var interval = setInterval(draw, 10);
```

## Part III: Adding a Paddle

So, now we need a paddle to hit the ball. Let's define a few variables for that. Add the following variables near the top of your code, under `var dy = -2;` :

```
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
```

The default value for the last two lines is false because at the beginning the control buttons are not pressed. To listen for key presses, we will set up two event listeners. Add the following lines just a few lines under the code above in your JavaScript:

```
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Now we need functions for when the keys are pressed. Add the following right under the code above:

```
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
  }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
  }
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
  }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
  }
}
```

We cant play the game if there isn't a paddle! Add the following under `function drawBall() {:`

```
function drawPaddle() {   ctx.beginPath();   ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);   ctx.fillStyle = "#0095DD";   ctx.fill();   ctx.closePath();}
```

## Part IV: Bricks

First off, we need variables for our bricks. Add these below `var leftPressed = false;`: 

```
var brickRowCount = 3;var brickColumnCount = 5;var brickWidth = 75;var brickHeight = 20;var brickPadding = 10;var brickOffsetTop = 30;var brickOffsetLeft = 30;
```

The code below loops around the rows and columns and create the new bricks

```
var bricks = [];for(var c=0; c<brickColumnCount; c++) {bricks[c] = [];for(var r=0; r<brickRowCount; r++) {bricks[c][r] = { x: 0, y: 0 }; }}
```
