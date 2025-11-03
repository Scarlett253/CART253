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

/**Start state for a title and Game over screen*/
let gameState = "title screen";

//Game over screen
let gameOverScreen;

//You win screen
let mineFrog;

//Current score
let score = 0;

//Frog lives variables
let strikes;
let frogStrikes = 0;

//Frog
let realFrog;

//Sound variables
let mySound;
let hasSoundPlayed = false;

//Frame rate
let frameRate = 2;

//Shade the background
let backgroundShade = 10;
//Day and night cycle
let backgroundDirection = 1;

//Add some stars
let stars;

/** Load sounds and images */
function preload() {
    // scoreFrog = loadImage("assets/images/frogPixelGif.gif")
    strikes = loadImage("assets/images/pixelX.png")
    mySound = loadSound('assets/sounds/poisson-steve.mp3')
    realFrog = loadImage("assets/images/realFrog.png")
    gameOverScreen = loadImage("assets/images/deadFrog.gif")
    mineFrog = loadImage("assets/images/walkingFrog.gif")
    stars = loadImage("assets/images/stars.gif")

}

//Start game when a key is pressed
function keyPressed() {
    if (gameState === "title screen") {
        gameState = "playing"
    }
    if (!mySound.isPlaying() && !hasSoundPlayed) {
        mySound.loop();
        hasSoundPlayed = true;
    }
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
    speed: 2
};

/**Ladybug Settings */
// Our ladybug
// Has a position, size, and speed of horizontal movement
const ladybug = {
    x: 0,
    y: 0, // Will be random too
    size: 12,
    speed: 4
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
    // Give the ladybug its first random position
    resetLadybug();
}

//Draw the title, background frog and bugs depending on game state
function draw() {
    if (gameState === "title screen") {
        titleScreen();
    }
    else if (gameState === "playing") {

        drawBackground();
        moveFly();
        drawFly();
        moveLadybug();
        drawLadybug();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueFlyOverlap();
        displayScore();
        displayStrikes();

    }
    else if (gameState === "game over") {
        gameOver();
    }
    else if (gameState === "you win") {
        youWin();
    }

}
/**Drawing title screen */
function titleScreen() {
    push();
    //Draw a background with a lilypad
    //First the water
    noStroke();
    fill("#2c6bc3ff");
    rect(0, 0, width, height);

    //Leaf pad
    noStroke();
    fill("#17e867ff");
    ellipse(width / 2, height / 2, 400, 400);

    //Draw lilypad petals
    noStroke();
    fill("#dbdce8ff");
    ellipse(width / 2, height / 2, 200, 60);
    ellipse(width / 2, height / 2, 60, 200);

    //Lily pad center
    noStroke();
    fill("#efe85fff");
    ellipse(width / 2, height / 2, 50, 50);

    //Title text
    textSize(60);
    textFont("Comic Sans Ms");
    textAlign(CENTER, CENTER);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text("Am I a", width / 2, height / 2 - 130);
    text("Frog?", width / 2, height / 2 - 60);

    //Instructions text
    textSize(18);
    text("- Move the frog with your mouse", width / 2, height / 2 - 10);
    text("- Click to launch the tongue", width / 2, height / 2 + 20);
    text("- Eating ladybugs eliminates your strikes,", width / 2, height / 2 + 50);
    text("but lowers your score", width / 2, height / 2 + 80);
    text("- You lose if the score is -5", width / 2, height / 2 + 110);
    text("- You lose if you get 3 strikes ", width / 2, height / 2 + 140);
    text("- CATCH THE FLIES!!!", width / 2, height / 2 + 170);
    //Start the game text
    textSize(10);
    text("PRESS ANY KEY TO START :)", width / 2, height / 2 + 215);
    pop();
}

/**Draw background with color shading*/
function drawBackground() {

    //Make the background darker and lighter
    backgroundShade += 0.3 * backgroundDirection;
    if (backgroundShade >= 100) {
        backgroundDirection = -1;
    }
    if (backgroundShade <= 0) {
        backgroundDirection = 1;
    }
    let r = 130 - backgroundShade;
    let g = 150 - backgroundShade;
    let b = 230 - backgroundShade;

    background(r, g, b);

    //Add stars
    imageMode(CENTER);
    image(stars, width / 2, height - 400, 640, 480);
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    fly.y += fly.speed;


    // Handle the fly going off the canvas
    if (fly.x > width,
        fly.y > height
    ) {
        resetFly();
        frogStrikes += 1;
    }
}

/**
 * Draws the fly as a black circle with wings
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
    fly.x = random(0, 320);
    fly.y = random(130, 300);
}

/**
 * Moves the ladybug according to its speed
 * Resets the ladybug if it gets all the way to the right
 */
function moveLadybug() {
    // Move the ladybug
    ladybug.x += ladybug.speed;

    // Handle the ladybug going off the canvas
    if (ladybug.x > width) {
        resetLadybug();
        frogStrikes += 0;
    }
}

/**
 * Draws the ladybug as a red circle with wings
 */
function drawLadybug() {
    push();
    noStroke();
    fill("#8fa8f6ff");
    ellipse(ladybug.x - 3, ladybug.y - 7, ladybug.size / 2);
    fill("#a60606ff");
    ellipse(ladybug.x, ladybug.y, ladybug.size);
    fill("#aec0f6ff");
    ellipse(ladybug.x + 1, ladybug.y - 7, ladybug.size / 2);
    pop();
}

/**
 * Resets the ladybug to the left with a random y
 */
function resetLadybug() {
    ladybug.x = random(10, 320)
    ladybug.y = random(130, 300);
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

    // Draw the frog's body (Frog image)
    push();
    imageMode(CENTER);
    image(realFrog, frog.body.x, frog.body.y - 20, frog.body.size, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly and the ladybug
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);

    // Get distance from tongue to ladybug
    const dLadybug = dist(frog.tongue.x, frog.tongue.y, ladybug.x, ladybug.y);
    // Check if it's an overlap
    const eatenLadybug = (dLadybug < frog.tongue.size / 2 + ladybug.size / 2);

    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        //Score increases 1 point whenever the frog catches a fly
        score += 1;

    } else if (eatenLadybug) {
        resetLadybug();
        frog.tongue.state = "inbound";
        frogStrikes -= 1;
        score -= 1;
    }
}

//Strike every time the frog misses a fly
function displayStrikes() {
    if (frogStrikes >= 1 && strikes) {
        image(strikes, 200 - 150, 90 - 60, 50, 50);
    }

    if (frogStrikes >= 2 && strikes) {
        image(strikes, 200 - 100, 90 - 60, 50, 50);
    }

    if (frogStrikes >= 3 && strikes) {
        image(strikes, 200 - 50, 90 - 60, 50, 50);
    }

    //After 3 strikes game finishes
    if (frogStrikes >= 3) {
        gameState = "game over";
    }
}

// Display the score on the screen
function displayScore() {
    //Game also ends if you only eat the ladybugs
    if (score == -5) {
        gameState = "game over";
    }

    if (score == 30) {
        gameState = "you win";
    }
    push();
    textSize(40);
    textAlign(320, 100);
    textFont("Comic Sans Ms");
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text(score, width * 0.85, height * 0.1);
    pop();
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

//Display the game over on the screen
function gameOver() {
    if (gameOver) {
    }
    push();
    //Game Over screen
    imageMode(CENTER);
    image(gameOverScreen, width / 2, height / 2, 640);
    //Game Over text
    textSize(40);
    textFont("Comic Sans Ms");
    textAlign(CENTER, CENTER);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text("YOU ARE NOT A FROG!", width / 2, height / 2 - 110);
    textSize(10);
    text("Ctrl + r to restart", width / 2, height / 2 - 80);
    pop();
}

//Display the YOU WIN screen

function youWin() {
    push();
    //You win screen
    background("#d4ed91ff");
    //Images 
    imageMode(CENTER);
    image(mineFrog, width / 2, height / 2 + 20, 300, 300);
    //You win text
    textSize(40);
    textFont("Comic Sans Ms");
    textAlign(CENTER, CENTER);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text("YOU ARE A FROG!", width / 2, height / 2 - 130);
    textSize(10);
    text("Ctrl + r to restart", width / 2, height / 2 - 100);
    pop();

}













