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
//Title image
let cookieEaterText;

//Gameover screen
let gameOver;

//You win screen
let youWin;

//Current score
let score = 0;

/** Load sounds and images */
function preload() {
    cookieEaterText = loadImage("assets/images/cookieEaterText.png");
}

//Start game when ENTER is pressed
// function enterPressed(event) {
//     if (gameState === "title screen" && event.keyCode === 78) {
//         gameState = "playing"
//     }
// }



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
    image(cookieEaterText, width / 2, height - 550, 900, 150);
    //Instructions text
    textSize(18);
    text("- Move the frog with your mouse", width / 2, height / 2 - 10);
    text("- Click to launch the tongue", width / 2, height / 2 + 20);
    text("- Eating ladybugs eliminates your strikes,", width / 2, height / 2 + 50);
    text("but lowers your score", width / 2, height / 2 + 80);
    text("- You lose if the score is -5", width / 2, height / 2 + 110);
    text("- You lose if you get 3 strikes ", width / 2, height / 2 + 140);
    text("- CATCH THE FLIES!!!", width / 2, height / 2 + 170);
    pop();


}

// /**Draw background*/
// function drawBackground() {
//     background(300, 250, 200);
// }

// /** Monster set up */

// //Draw monster
// function drawMonster() {
// }

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
// function drawCookie() {
//     //Cookie
//     push();
//     noStroke();
//     noCursor();
//     fill("#efc713ff");
//     circle(mouseX, mouseY, 40);
//     pop();

//     //Chocolate chips
//     fill("#680C07");
//     let chips = [
//         [-12, -8], [10, -6], [-5, 6],
//         [14, 4], [-15, 5], [2, -14],
//         [6, 12]
//     ];

//     for (let i = 0; i < chips.length; i++) {
//         let dx = chips[i][0];
//         let dy = chips[i][1];
//         circle(mouseX + dx, mouseY + dy, 6);
//     }
// }

// //Display score
// function displayScore() {

// }

// /**Game over and You win set up */

// //Game over screen
// function gameOver() {

// }
// //You win screen
// function youWin() {

// }
