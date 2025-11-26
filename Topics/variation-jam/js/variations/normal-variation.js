/**
* COOKIE EATER
* Yvonne Scarlett Arriola Lerin
* 
* A game about avoiding being eaten by a cookie monster.
* This is the normal variation.
* 
* Instructions:
* - Move the mouse to avoid the cookie monster
* - Avoid the obstacles
* - Collect chips to gain points
*/

"use strict"

/** Game State */
let normalModeState = "playing";

//Gameover screen
let gameOver;

//Current score
let score = 0;
let chip = 0;

/**Monster's settings */

//Image
let monsterImage;
//monster
const monster = {
    body: {
        x: 100,
        y: 200,
        size: 100,
        speed: 3
    },

    //Eyes and pupils
    eyes: {
        globes: {
            fill: "#FFFFFF",
        },
        pupils: {
            y: undefined,
            fill: "#000000",
            left: {
                x: undefined,
            },
            right: {
                x: undefined,
            }
        },
        left: {
            x: undefined,
        },
        right: {
            x: undefined,
        }
    }
};
/**Cookie settings */
//cookie
const cookie = {
    x: undefined, // mouseX
    y: undefined, // mouseY
    size: 40
};

/**Chips settings */
//chips
const chips = {
    x: 0,
    y: 0,
    size: 8
};

/**
 * Create canvas and set up monster and mouse positions
*/
function normalSetup() {
    createCanvas(1300, 700);

    //Give the chips random positions
    resetChips();
}

/**
 * Draw background, monster, cookie, chips and obstacles
*/
function normalDraw() {
    if (normalModeState === "playing") {

        drawBackground();
        moveCookie();
        drawCookie();
        moveMonster();
        drawMonster();
        checkMonsterCollision();
        drawChips();
        checkChipsCollision();
        chipCollected();
        // drawObstacles();
        // checkObstaclesCollision();
        displayScore();

    }
    else if (normalModeState === "game over") {
        gameOver();
    }

}

/**Draw background*/
function drawBackground() {
    background(300, 150, 200);
};

/** Cookie */
function moveCookie() {
    cookie.x = mouseX;
    cookie.y = mouseY;
};

function drawCookie() {
    //Cookie
    push();
    noStroke();
    fill("#efc713ff");
    ellipse(cookie.x, cookie.y, cookie.size);
};

/** Monster set up */
//Move monster
function moveMonster() {
    let followSpeed = 0.05;
    monster.body.x = lerp(monster.body.x, mouseX, followSpeed);
    monster.body.y = lerp(monster.body.y, mouseY, followSpeed);
};

//Draw monster
function drawMonster() {
    //Body
    push();
    imageMode(CENTER);
    image(monsterImage, monster.body.x, monster.body.y, monster.body.size, monster.body.size);
    pop();

    //Eyes
    push();
    noStroke();
    fill(monster.eyes.globes.fill);
    monster.eyes.y = monster.body.y - 10;
    ellipse(monster.body.x - 10, monster.body.y - 40, 30, 30);
    ellipse(monster.body.x + 10, monster.body.y - 40, 30, 30);
    pop();

    //Pupils
    push();
    fill(monster.eyes.pupils.fill);
    // Make left pupil follow mouse X and mouse Y inside globe
    monster.eyes.pupils.left.x = map(mouseX, 0, width, monster.body.x - 15, monster.body.x - 5);
    monster.eyes.pupils.left.y = map(mouseY, 0, height, monster.body.y - 45, monster.body.y - 35);
    ellipse(monster.eyes.pupils.left.x, monster.eyes.pupils.left.y, 15);
    // Make right pupil follow mouse X and mouse Y inside globe
    monster.eyes.pupils.right.x = map(mouseX, 0, width, monster.body.x + 5, monster.body.x + 15);
    monster.eyes.pupils.right.y = map(mouseY, 0, height, monster.body.y - 45, monster.body.y - 35);
    ellipse(monster.eyes.pupils.right.x, monster.eyes.pupils.right.y, 15);
    pop();

    //Mouth
    push();
    noStroke();
    fill("#680C07");
    // d = distance between the mouse and the center of the monster's mouth
    let d = dist(mouseX, mouseY, monster.body.x, monster.body.y);
    let mouthSize = map(d, 0, 200, 60, 15);
    mouthSize = constrain(mouthSize, 15, 60);
    ellipse(monster.body.x, monster.body.y, mouthSize);
    pop();
};

//Monster collission with cookie
function checkMonsterCollision() {
    //distance between monster and cookie
    const d = dist(monster.body.x, monster.body.y, cookie.x, cookie.y);
    //eaten as soon they touch
    const eaten = (d < monster.body.size / 2 + cookie.size / 2);

    if (eaten) {
        normalModeState = "game over";
    }
};

//Chocolate chips
function drawChips() {
    push();
    noStroke();
    fill("#680C07");
    ellipse(chips.x, chips.y, chips.size);
    pop();
};

/** Reset the chips in random positions all over the screen*/
function resetChips() {
    chips.x = random(13, 1288);
    chips.y = random(13, 688);
};

function checkChipsCollision() {
    //Distance between cookie and chips
    const d = dist(cookie.x, cookie.y, chips.x, chips.y);
    //Getting collect by the cookie
    const collect = (d < cookie.size / 2 + chips.size / 2);

    if (collect) {
        //Reset the chip
        resetChips();
        //Score increases and a chip is added to the cookie
        score += 1;
        chip += 1;

    }

}

function chipCollected() {
    push();
    noStroke();
    fill("#680C07");
    // ellipse(cookie.x, cookie.y, cookie.size);
    pop();

}
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
//     pop();
// }
// /** Obstacles set up */
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

//Display score
function displayScore() {
    push();
    textSize(40);
    textAlign(320, 100);
    textFont(BOLD);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text(score, width * 0.90, height * 0.1);
    pop();
}

// /**Game over set up */
// function gameOver() {
//     push();
//     //Game over screen
//     noStroke();
//     fill("#08519C");
//     rect(0, 0, width, height);
// }

