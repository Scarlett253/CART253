/**
 * Am I a Frog?
 * Scarlett Arriola Lerin <3
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

/**Start state for a title screen*/
let gameState = "title screen";

//Current score
let score = 0;
//Set Poisson Steve song
let poissonSteveSong;

//Is the game over?
// let gameOver = false;

/** Load sounds */
function preload() {
    poissonSteveSong = loadSong("assets/sounds/poissonsteve.mp3");
}

/**Frog Settings */
// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

/**Fly Settings */
// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 0, // Will be random
    size: 10,
    speed: 3
};

//Shade the background
// let background

//Start game when a key is pressed
function keyPressed() {
    if (gameState === "title screen")
        gameState = "playing"

    //Start the Poisson Steve song when a key is pressed
    if (keyPressed) {
        poissonSteveSong.stop()
    } else {
        poissonSteveSong.loop()
    }
}
/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}


//Draw the title screen 
function draw() {
    if (gameState === "title screen") {
        titleScreen();
    }
    else if (gameState === "playing") {
        // function titleScreen() {
        //Disolay the title screen 

        drawBackground();
        moveFly();
        drawFly();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueFlyOverlap();
        displayScore();
    }
    else if (gameState === "game over") {
        gameOver();
    }

}
/**Drawing title screen */
function titleScreen() {
    //Title text
    push();
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text("Am I a", width / 2, height / 2);
    text("Frog?", width / 2, width / 2);
    pop();
}

/**Draw background with color shading*/
//Background color
function drawBackground() {
    background("#0b1259ff");
    // background("#87ceeb");
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#8fa8f6ff");
    ellipse(fly.x - 3, fly.y - 7, fly.size / 2);
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    fill("#aec0f6ff");
    ellipse(fly.x + 1, fly.y - 7, fly.size / 2);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = random(0, 640)
    fly.y = random(0, 480);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}
// //Only increase score when the frog catches a fly
// if (checkTongueFlyOverlap) {
//     score = score + 0.5;
// }

//Display the score
// displayScore();

//Display the score on the screen
function displayScore() {
    push();
    textSize(40);
    textStyle(BOLD);
    textAlign(320, 100);
    text(floor(score), width / 2, height / 3);
    pop();
}

// //Display the game over on the screen
// function displayUI() {
//     if (gameOver) {

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

function gameOver() {
    push();
    textSize(40);
    textStyle(BOLD);
    textAlign(320, 100);
    text("Game Over!", width / 2, height / 3);
    pop();
}










