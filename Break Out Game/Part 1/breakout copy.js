/* ..:: B R E A K O U T   G A M E ::..
 *
 * breakout.js
 * Author: Rylee Leavitt
 * Date: 12/11/24
 * Project for COSC 1350
 *
 */

// get the canvas element from the DOM.
const canvas = document.getElementById("myCanvas");

/*  create a "2d rendering context".
 *  I suggest looking up and reading about the canvas.getContext function.
 *  You don't have to understand everything about canvas rendering contexts,
 *  but it help you get to know what the ctx object can and can't draw.
 */

const ctx = canvas.getContext("2d");

//drawing a ball requires the x position, y position, and radius
let ballRadius = 15, xPos = canvas.width / 2, yPos = canvas.height / 2;

//xy move distance. These values are used to move the ball around.
let xMoveDist = 3, yMoveDist = 3;

//function that draws the ball on the canvas
ballRender=()=>{
  ctx.beginPath();
  //arc creates circular arc starting at 0, ending at 2pi (360 degrees)
  ctx.arc(xPos, yPos, ballRadius, 0, Math.PI * 2);
  //fill in the circular path with default color
  ctx.fill();
  ctx.closePath();
}

/*
* draw() can be thought of as our main function.
* We execute draw every few milliseconds to give our
* canvas the appearance of being animated. Notice how in the draw function
* the first thing done is ctx.clearRect(), which clears the whole canvas
* before drawing the next frame of animation.
*
* Right now, it only calls ballRender() over and over again.
* Changing the xPos and yPos will cause the ball to be drawn somewhere else
* next time the function is called.
*/
draw=()=> {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballRender();
  drawRectangle(); //added drawRectangle inside the draw function : RL

  //uncomment when you're ready to send the ball flying!
  xPos += xMoveDist;
  yPos += yMoveDist;

  // Bounce the ball off the right and left walls
  if (xPos > canvas.width - ballRadius || xPos < ballRadius) {
    xMoveDist = -xMoveDist;
  }

  // Bounce the ball off the top and bottom walls
  if (yPos > canvas.height - ballRadius || yPos < ballRadius) {
    yMoveDist = -yMoveDist;
  }
  // After this step, the ball should be infinitely bouncing off the walls
  
};

/*
 * setInterval(func, delay)
 * this built-in global JavaScript function executes 'func' function every
 * 'delay' milliseconds, and returns an interval ID. We won't really use intervalID
 * so don't worry to much about that for now.
 *
 * Try playing around with the refreshRate value.
 */
const refreshRate = 40;
const intervalID = setInterval(draw, refreshRate);

//______________________ADDED______________________


/*Create a new function that draws a 100x15px rectangle at the bottom center of the canvas. 
Feel free to use ctx.fillStyle to color your paddle and ball differently! *instructions* */

// Function that draws a rectangle at the bottom center of the canvas
drawRectangle = () => {

  // Calculate the position for the bottom center
  const rectWidth = 100;
  const rectHeight = 15;
  const x = (canvas.width / 2) - (rectWidth / 2);
  const y = canvas.height - rectHeight;

  // Draw the rectangle
  ctx.fillStyle = "#a64dff"; // Color the paddle and ball
  ctx.fillRect(x, y, rectWidth, rectHeight);

/*Add keydown and keyup event listeners to the DOM, and create two new listener functions for each event. 
Create two boolean variables called moveLeft and moveRight that are true when their respective key is down, and false when it is up.

Change the paddle's drawn x position to be a variable instead of a hard-coded value. Name this variable xPaddle, 
and in the draw function check if moveLeft or moveRight is true, and adjust the xPaddle by 3 in the appropriate direction.*/

// Boolean variables to track paddle movement
let moveLeft = false;
let moveRight = false;

// Paddle's x position
let xPaddle = 200; // initial position, you can change it as needed

// Event listeners for keydown and keyup
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveLeft = true;
  } else if (event.key === 'ArrowRight') {
    moveRight = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowLeft') {
    moveLeft = false;
  } else if (event.key === 'ArrowRight') {
    moveRight = false;
  }
});

// Paddle draw function
function drawPaddle(context) {
  if (moveLeft) {
    xPaddle -= 3; // Move left
  } else if (moveRight) {
    xPaddle += 3; // Move right
  }

  // Code to draw the paddle
  context.fillStyle = "#0095DD";
  context.fillRect(xPaddle, canvas.height - 10, 75, 10); // Adjust paddle dimensions as needed
}

// Game loop to continually draw the paddle
function gameLoop() {
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  
  context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  drawPaddle(context);

  requestAnimationFrame(gameLoop); // Loop the game
}

// Start the game loop
gameLoop();

}