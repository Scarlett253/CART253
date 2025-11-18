/**
 * Cookie Eater 
 * Yvonne Scarlett Arriola Lerin
 * 
 * A game about avoiding being eaten by a cookie monster
 * 
 * Instructions:
 * - Move the mouse to avoid the cookie monster
 * - Enter trought the doors to escape to the next room
 * - Collect chips to gain points
 */

"use strict";

/**Start state for a title and Game over screen*/
//Menu screen
let gameState = "menu";
//Title text and instructions images
let cookieEaterText;
let instructions;
let useMouse;
let avoidObstacles;
let enterDoors;
let escapeMonster;

//Gameover screen
let gameOver;

//You win screen
let youWin;

//Current score
let score = 0;

/** Monster settings */
//Monster position
let monsterX = 200;
let monsterY = 200;

/** Load sounds and images */
function preload() {
    cookieEaterText = loadImage("assets/images/cookieEaterText.png");
    instructions = loadImage("assets/images/instructions.png");
    useMouse = loadImage("assets/images/useMouse.png");
    avoidObstacles = loadImage("assets/images/avoidObstacles.png");
    enterDoors = loadImage("assets/images/enterDoors.png");
    escapeMonster = loadImage("assets/images/escapeMonster.png");
}

//Start game when ENTER is pressed
function keyPressed() {
    if (gameState === "menu" && key === "Enter") {
        gameState = "playing"
    }
}

/**
 * Create canvas and set up monster and mouse positions
*/
function setup() {
    createCanvas(1300, 800);

    //Give the monster a initial random position
    // resetMonster();

}

/**
 * Draw background, monster, mouse, obstacles and doors
*/
function draw() {

    if (gameState === "menu") {
        menuScreen();
    }
    else if (gameState === "playing") {

        drawBackground();
        drawMonster();
        moveMonster();
        checkMonsterCollision();
        drawObstacles();
        checkObstaclesCollision();
        drawDoors();
        checkDoorsCollision();
        drawCookie();
        displayScore();

    }
    else if (gameState === "game over") {
        gameOver();
    }
    else if (gameState === "you win") {
        youWin();
    }
}

/**Draw menu screen*/
function menuScreen() {
    push();
    //Add background color
    noStroke();
    fill(300, 250, 200);
    rect(0, 0, width, height)

    //Title text
    imageMode(CENTER);
    image(cookieEaterText, width / 2, height - 600, 900, 150);
    //Instructions
    imageMode(CENTER);
    image(instructions, width / 2, height - 490, 400, 50);
    imageMode(CENTER);
    image(useMouse, width / 2, height - 420, 390, 20);
    imageMode(CENTER);
    image(avoidObstacles, width / 2, height - 370, 275, 17);
    imageMode(CENTER);
    image(enterDoors, width / 2, height - 320, 380, 30);
    imageMode(CENTER);
    image(escapeMonster, width / 2, height - 260, 230, 20);
    pop();


}

// /**Draw background*/
function drawBackground() {
    background(300, 150, 200);
}

// /** Monster set up */

//Draw monster
function drawMonster() {
    //Body
    push();
    noStroke();
    fill("#391be1ff");
    ellipse(monsterX, monsterY, 150, 200);
    pop();

    //Eyes
    push();
    fill("#FFFFFF");
    ellipse(monsterX - 25, monsterY - 20, 40, 30);
    ellipse(monsterX + 25, monsterY - 20, 40, 30);
    pop();


}

// //Move monster
// function moveMonster() {
// }

// //Monster collision
// function checkMonsterCollision() {
// }

// /** Obstacles and doors set up */
// //Draw Obstacles
// function drawObstacles() {

// }

// //Check obstacles collision
// function checkObstaclesCollision() {

// }

// //Draw doors
// function drawDoors() {

// }

// //Check doors collision
// function checkDoorsCollision() {

// }

// /** Cookie */
function drawCookie() {
    //Cookie
    push();
    noStroke();
    noCursor();
    fill("#efc713ff");
    circle(mouseX, mouseY, 40);
    pop();

    //Chocolate chips
    fill("#680C07");
    let chips = [
        [-12, -8], [10, -6], [-5, 6],
        [14, 4], [-15, 5], [2, -14],
        [6, 12]
    ];

    for (let i = 0; i < chips.length; i++) {
        let dx = chips[i][0];
        let dy = chips[i][1];
        circle(mouseX + dx, mouseY + dy, 6);
    }
}

//Display score
function displayScore() {
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

// /**Game over and You win set up */

// //Game over screen
// function gameOver() {

// }
// //You win screen
// function youWin() {

// }
