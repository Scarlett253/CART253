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

//Shade the background
let dogBackgroundShade = 10;
//Day and night cycle
let dogBackgroundDirection = 1;

//Current score
let dogScore = 0;

/**Xula's settings */

//Xula image
let xulaImage;
let xulaMadImage;

//dog cookie 
let dogCookieImage;

//bones
let bonesImage;

//star end screen
let star;
var a = 0;

/**xula settings */
const xula = {
    body: {
        x: 100,
        y: 200,
        size: 150,
        speed: 3
    },
    image: undefined,
    closeImage: undefined,
    openImage: undefined,
};

/**Dog cookie settings */
//cookie
const dogCookie = {
    x: undefined, // mouseX
    y: undefined, // mouseY
    size: 50
};

/**Bones settings */
//bones
const bones = {
    x: 0,
    y: 0,
    size: 20
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

        dogDrawBackground();
        moveDogCookie();
        drawDogCookie();
        moveXula();
        drawXula();
        checkXulaCollision();
        drawBones();
        checkBonesCollision();
        // drawObstacles();
        // checkObstaclesCollision();
        dogDisplayScore();

    }
    else if (dogModeState === "game over") {
        dogGameOver();
    }

}

/**Draw background*/
function dogDrawBackground() {
    //Make the background darker and lighter
    dogBackgroundShade += 0.3 * dogBackgroundDirection;
    if (dogBackgroundShade >= 100) {
        dogBackgroundDirection = -1;
    }
    if (dogBackgroundShade <= 0) {
        dogBackgroundDirection = 1;
    }
    let r = 130 - dogBackgroundShade;
    let g = 150 - dogBackgroundShade;
    let b = 230 - dogBackgroundShade;

    background(r, g, b);
    // background(300, 150, 200);
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
    let followSpeed = 0.08;
    xula.body.x = lerp(xula.body.x, mouseX, followSpeed);
    xula.body.y = lerp(xula.body.y, mouseY, followSpeed);
};

//Draw xula
function drawXula() {
    //Body
    push();
    imageMode(CENTER);
    image(xula.image, xula.body.x, xula.body.y, xula.body.size, xula.body.size);
    pop();
};

//Xula collission with dog cookie
function checkXulaCollision() {
    //distance between xula and dog cookie
    const d = dist(xula.body.x, xula.body.y, dogCookie.x, dogCookie.y);
    //mad xula
    const close = 150;
    // d < xula.body.size;
    if (close) {
        if (frameCount % 10 === 0) {
            xula.image = xula.closeImage;
        }
        else if (frameCount % 5 === 0) {
            xula.image = xula.openImage;
        }
    }
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
        dogScore += 1;
    }

};

//Display score
function dogDisplayScore() {
    push();
    textSize(40);
    textAlign(320, 100);
    textFont(BOLD);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text(dogScore, width * 0.90, height * 0.1);
    pop();
};

/**Game over set up */
function dogGameOver() {
    push();
    //Game over screen
    noStroke();
    fill("#08519C");
    rect(0, 0, width, height);
    pop();

    //star rotation work, drove me crazy
    push();
    translate(width / 2, height / 2);
    imageMode(CENTER);
    noTint();
    rotate(a);
    image(star, 0, 0, 450, 450);
    pop();
    a = a + 0.02;
    pop();

    //Xula in the center
    push();
    imageMode(CENTER);
    image(xula.image, width / 2, height / 2, xula.body.size * 2, xula.body.size * 2);

    if (frameCount % 10 === 0) {
        xula.image = xula.closeImage;
    } else if (frameCount % 5 === 0) {
        xula.image = xula.openImage;
    }
    pop();

    //Dog cookies rotation
    push();
    //cookie 1
    translate(width * 0.15, height / 2);
    imageMode(CENTER);
    noTint();
    rotate(a);
    image(dogCookieImage, 0, 0, 130, 100);
    pop();
    a = a + 0.02;
    //cookie 2
    translate(width * 0.85, height / 2);
    imageMode(CENTER);
    noTint();
    rotate(a);
    image(dogCookieImage, 0, 0, 130, 100);
    pop();
    a = a + 0.02;
    pop();
}

