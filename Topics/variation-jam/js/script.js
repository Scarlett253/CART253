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
//Title screen
let gameState = "title screen";

//Gameover screen
let gameOver;

//You win screen
let youWin;

//Current score
let score = 0;
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

    if (gameState === "title screen") {
        titleScreen();
    }
    else if (gameState === "playing") {

        drawBackground();
        moveMonster();
        drawMonster();
        drawCookie();
        displayScore();
        checkMonsterCollision();
        drawObstacles();
        drawDoors();
        checkObstaclesCollision();
        checkDoorCollision();

    }
    else if (gameState === "game over") {
        gameOver();
    }
    else if (gameState === "you win") {
        youWin();
    }
}

/**Draw title screen*/
function titleScreen() {

}

/**Draw background*/
function drawBackground() {
    background(300, 250, 200);
}

/** Monster set up */

//Move monster
function moveMonster() {

}
//Draw monster
function drawMonster() {
}

/** Cookie */
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
