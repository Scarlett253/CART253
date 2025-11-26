/**
* COOKIE EATER
* Yvonne Scarlett Arriola Lerin
* 
* A game about avoiding being eaten by my dog Xula.
* This is the dog-variation.
* 
* Instructions:
* - Move the mouse to avoid Xula
* - Avoid the obstacles
* - Collect bones to gain points
*/

"use strict"

/** Game State */
let dogModeState = "playing";

//Gameover screen
let gameOver;

//Current score
let score = 0;

/**Xula's settings */

//Xula image
let xulaImage;
let xulaMad;

// //Dog cookie image
// let dogCookie;

//xula
const xula = {
    body: {
        x: 100,
        y: 200,
        size: 100,
        speed: 3
    }

    //     //Eyes and pupils
    //     eyes: {
    //         globes: {
    //             fill: "#FFFFFF",
    //         },
    //         pupils: {
    //             y: undefined,
    //             fill: "#000000",
    //             left: {
    //                 x: undefined,
    //             },
    //             right: {
    //                 x: undefined,
    //             }
    //         },
    //         left: {
    //             x: undefined,
    //         },
    //         right: {
    //             x: undefined,
    //         }
    //     }
};
/**Dog cookie settings */
//cookie
const dogCookie = {
    x: undefined, // mouseX
    y: undefined, // mouseY
    size: 40
};

/**Bones settings */
//bones
const bones = {
    x: 0,
    y: 0,
    size: 8
};

/**
 * Create canvas and set up xula and mouse positions
*/
function dogSetup() {
    createCanvas(1300, 700);

    //Give the bones random positions
    resetBones();
}

/**
 * Draw background, xula, dog cookie, bones and obstacles
*/
function dogDraw() {
    if (dogModeState === "playing") {

        drawBackground();
        moveDogCookie();
        drawDogCookie();
        moveXula();
        drawXula();
        checkXulaCollision();
        drawBones();
        checkBonesCollision();
        // drawObstacles();
        // checkObstaclesCollision();
        displayScore();

    }
    else if (dogModeState === "game over") {
        gameOver();
    }

}

/**Draw background*/
function drawBackground() {
    background(300, 150, 200);
};

/** Dog cookie */
function moveDogCookie() {
    dogCookie.x = mouseX;
    dogCookie.y = mouseY;
};

function drawDogCookie() {
    push();
    imageMode(CENTER);
    image(dogCookieImage, dogCookie.x, dogCookie.y, dogCookie.size, dogCookie.size);
    pop();
};

/** Xula set up */
//Move xula
function moveXula() {
    let followSpeed = 0.05;
    xula.body.x = lerp(xula.body.x, mouseX, followSpeed);
    xula.body.y = lerp(xula.body.y, mouseY, followSpeed);
};

//Draw xula
function drawXula() {
    //Body
    push();
    imageMode(CENTER);
    image(xulaImage, xula.body.x, xula.body.y, xula.body.size, xula.body.size);
    pop();

    // //Eyes
    // push();
    // noStroke();
    // fill(monster.eyes.globes.fill);
    // monster.eyes.y = monster.body.y - 10;
    // ellipse(monster.body.x - 10, monster.body.y - 40, 30, 30);
    // ellipse(monster.body.x + 10, monster.body.y - 40, 30, 30);
    // pop();

    // //Pupils
    // push();
    // fill(monster.eyes.pupils.fill);
    // // Make left pupil follow mouse X and mouse Y inside globe
    // monster.eyes.pupils.left.x = map(mouseX, 0, width, monster.body.x - 15, monster.body.x - 5);
    // monster.eyes.pupils.left.y = map(mouseY, 0, height, monster.body.y - 45, monster.body.y - 35);
    // ellipse(monster.eyes.pupils.left.x, monster.eyes.pupils.left.y, 15);
    // // Make right pupil follow mouse X and mouse Y inside globe
    // monster.eyes.pupils.right.x = map(mouseX, 0, width, monster.body.x + 5, monster.body.x + 15);
    // monster.eyes.pupils.right.y = map(mouseY, 0, height, monster.body.y - 45, monster.body.y - 35);
    // ellipse(monster.eyes.pupils.right.x, monster.eyes.pupils.right.y, 15);
    // pop();

    //     //Mad xula
    //     push();
    //     imageMode(CENTER);
    //     image(xulaMad, xula.body.x, xula.body.y, xula.body.size, xula.body.size);
    //     pop();
    //     // d = distance between the mouse and the center of the monster's mouth
    //     let d = dist(mouseX, mouseY, monster.body.x, monster.body.y);
    //     let mouthSize = map(d, 0, 200, 60, 15);
    //     mouthSize = constrain(mouthSize, 15, 60);
    //     ellipse(monster.body.x, monster.body.y, mouthSize);
    //     pop();
    // };

    //Xula collission with dog cookie
    function checkXulaCollision() {
        //distance between xula and dog cookie
        const d = dist(xula.body.x, xula.body.y, dogCookie.x, dogCookie.y);
        //eaten as soon they touch
        const eaten = (d < xula.body.size / 2 + dogCookie.size / 2);

        if (eaten) {
            dogModeState = "game over";
        }
    };

    //Bones
    function drawBones() {
        push();
        imageMode(CENTER);
        image(bonesImage, bones.x, bones.y, bones.size, bones.size);
        pop();
    };

    /** Reset the bones in random positions all over the screen*/
    function resetBones() {
        bones.x = random(13, 1288);
        bones.y = random(13, 688);
    };

    function checkBonesCollision() {
        //Distance between dog cookie and bones
        const d = dist(dogCookie.x, dogCookie.y, bones.x, bones.y);
        //Getting collect by the dog cookie
        const collect = (d < dogCookie.size / 2 + bones.size / 2);

        if (collect) {
            //Reset the bones
            resetBones();
            //Score increases
            score += 1;
        }

    }


    // /** Obstacles set up */
    // //Draw Obstacles
    // function drawObstacles() {

    // }

    // //Check obstacles collision
    // function checkObstaclesCollision() {

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
}
