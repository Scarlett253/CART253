/**
* COOKIE EATER
* Yvonne Scarlett Arriola Lerin
*
* A game about avoiding being eaten by my boyfriend's cat Frijol.
* This is the cat-variation.
*
* Instructions:
* - Move the mouse to avoid Frijol
* - Avoid the obstacles
* - Collect fishes to gain points
*/

"use strict"

/** Game State */
let catModeState = "playing";

//Current score
let catScore = 0;

/**Frijol's settings */

//Frijol mage
let frijolImage;
let frijolMad;
//Cat cookie image
let fishCookieImage;

//fishes
let fishImage;

//frijol
const frijol = {
    body: {
        x: 100,
        y: 200,
        size: 100,
        speed: 3
    },
    image2: undefined,
    mouthClose: undefined,
    mouthOpen: undefined,
}

/**fish cookie settings */
//fish cookie
const fishCookie = {
    x: undefined, // mouseX
    y: undefined, // mouseY
    size: 80
};

/**fishes settings */
//fishes
const fish = {
    x: 0,
    y: 0,
    size: 40
};

/**
 * Create canvas and set up frijol and mouse positions
*/
function catSetup() {
    createCanvas(1300, 700);

    //Give the fishes random positions
    resetFish();
}

/**
 * Draw background, frijol, fish cookie, fishes and obstacles
*/
function catDraw() {
    if (catModeState === "playing") {

        catDrawBackground();
        moveFishCookie();
        drawFishCookie();
        moveFrijol();
        drawFrijol();
        checkFrijolCollision();
        drawfish();
        checkfishCollision();
        // drawObstacles();
        // checkObstaclesCollision();
        catDisplayScore();

    }
    else if (catModeState === "game over") {
        catGameOver();
    }

}

/**Draw background*/
function catDrawBackground() {
    background(300, 150, 200);
};

/** fish cookie */
function moveFishCookie() {
    fishCookie.x = mouseX;
    fishCookie.y = mouseY;
};

function drawFishCookie() {
    push();
    imageMode(CENTER);
    image(fishCookieImage, fishCookie.x, fishCookie.y, fishCookie.size, fishCookie.size);
    pop();
};

/** Frijol set up */
//Move frijol
function moveFrijol() {
    let followSpeed = 0.05;
    frijol.body.x = lerp(frijol.body.x, mouseX, followSpeed);
    frijol.body.y = lerp(frijol.body.y, mouseY, followSpeed);
};

//Draw frijol
function drawFrijol() {
    //Body
    push();
    imageMode(CENTER);
    image(frijol.image2, frijol.body.x, frijol.body.y, frijol.body.size, frijol.body.size);
    pop();
};

//Frijol collission with fish cookie
function checkFrijolCollision() {
    //distance between frijol and fish cookie
    const d = dist(frijol.body.x, frijol.body.y, fishCookie.x, fishCookie.y);
    //mad frijol
    const close = 150;
    // d < frijol.body.size;

    if (close) {
        if (frameCount % 20 === 0) {
            frijol.image2 = frijol.mouthClose;
        }
        else if (frameCount % 10 === 0) {
            frijol.image2 = frijol.mouthOpen;
        }
    }
    //eaten as soon they touch
    const eaten = (d < frijol.body.size / 2 + fishCookie.size / 2);

    if (eaten) {
        catModeState = "game over";
    }
};

//fishes
function drawfish() {
    push();
    imageMode(CENTER);
    image(fishImage, fish.x, fish.y, fish.size, fish.size);
    pop();
};

/** Reset the fishes in random positions all over the screen*/
function resetFish() {
    fish.x = random(13, 1288);
    fish.y = random(13, 688);
};

function checkfishCollision() {
    //Distance between fish cookie and fishes
    const d = dist(fishCookie.x, fishCookie.y, fish.x, fish.y);
    //Getting collect by the fish cookie
    const collect = (d < fishCookie.size / 2 + fish.size / 2);

    if (collect) {
        //Reset the fishes
        resetFish();
        //Score increases
        catScore += 1;
    }

};

//Display score
function catDisplayScore() {
    push();
    textSize(40);
    textAlign(320, 100);
    textFont(BOLD);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text(catScore, width * 0.90, height * 0.1);
    pop();
};

/**Game over set up */
function catGameOver() {
    push();
    //Game over screen
    noStroke();
    fill("#510fa1ff");
    rect(0, 0, width, height);
    pop();
    //star rotation work, drove me crazy
    push();
    translate(width / 2, height / 2);
    imageMode(CENTER);
    noTint();
    rotate(a);
    image(star, 0, 0, 450, 450);
    a = a + 0.02;
    pop();
    //Cat eating in the center
    push();
    imageMode(CENTER);
    image(catEating, width / 2, height / 2);
    pop();

    //Frijoles
    push();
    //frijol 1
    imageMode(CENTER);
    image(frijol.image2, width * 0.20, height / 2, frijol.body.size * 1.5, frijol.body.size * 1.5);
    //frijol 2
    imageMode(CENTER);
    image(frijol.image2, width * 0.80, height / 2, frijol.body.size * 1.5, frijol.body.size * 1.5);

    if (frameCount % 20 === 0) {
        frijol.image2 = frijol.mouthClose;
    } else if (frameCount % 10 === 0) {
        frijol.image2 = frijol.mouthOpen;
    }
    pop();

}


