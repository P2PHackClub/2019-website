---
title: 'P2P Hack Club Meeting 3: Creating a game using JavaScript!'
description: Learn how to create a simple game using JavaScript!
author: 'P2P hack club team, modified from an article by MDN'
slug: words words words xD
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
<!DOCTYPE html><html><head>    <meta charset="utf-8" />    <title></title> // Your title goes between the <title> elements  <style>	* { padding: 0; margin: 0; }	canvas { background: #eee; display: block; margin: 0 auto; }  </style></head><body><canvas id="myCanvas" width="480" height="320"></canvas><script>	// JavaScript code goes here</script></body></html>
```

In our code we have a `charset` defined, `<title>` and some CSS in the `<head>`. The charset attribute specifies the character encoding for the HTML document. The body contains `<canvas>` and `<script>` elements — we'll create the game inside the canva and write the JavaScript code that controls it in the script. The `<canvas>` element has an id of myCanvas, which allows us to easily get a reference to it, and it is 480 pixels wide and 320 pixels high. All the JavaScript code we will write today will go between the opening `<script>` and closing `</script>` tags.

## Part II: Adding the Ball 

### 1) Setting up

 In order to create graphics on the `<canvas>`, we first have to grab a reference to it in JavaScript. Add the following under your opening `<script>` tag:

```
var canvas = document.getElementById("myCanvas");var ctx = canvas.getContext("2d");
```

The first line of code is storing a reference to the `<canvas>` element, while the second line of code is using a `ctx` variable to store the 2D context (The tool we can use to paint on the canvas)

Next, we'll be defining a starting point at the bottom center of our canvas by using variables called `x` and `y`, then use those to define the position the circle is drawn at. Add the following under the code you just wrote above:

```
var x = canvas.width/2;var y = canvas.height-30;
```



### 2) Adding our ball

As you can see from the header above, we're now going to be adding our ball! The following code below draws out our ball:

```
function drawBall() {ctx.beginPath();ctx.arc(x, y, 10, 0, Math.PI*2);ctx.fillStyle = "#0095DD";ctx.fill();ctx.closePath();}
```



```
function draw() {ctx.clearRect(0, 0, canvas.width, canvas.height);drawBall();x += dx;y += dy;}
```
