/**
* COOKIE EATER
* Yvonne Scarlett Arriola Lerin
* 
* A game about avoiding being eaten by a cookie monster.
* This is the normal variation.
* 
* Instructions:
* - Move the mouse to avoid the cookie monster
* - Collect chips to gain points
*/

"use strict"

/** Game State */
let normalModeState = "playing";

//Game overs text images
let gameOverText;

//Current score
let normalScore = 0; // The score is the chips collected
let collectedChips = [];

//Shade the background
let backgroundShade = 10;
//Day and night cycle
let backgroundDirection = 1;

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

//Monster background ending
const monsterBackground = {
    body: {
        x: 1300 / 2,
        y: 700 / 2,

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

/**
 * Create canvas and set up monster and mouse positions
*/
function normalSetup() {
    createCanvas(1300, 700);

    //Give the chips random positions
    resetChips();
}

/**
 * Draw background, monster, cookie and chips 
*/
function normalDraw() {
    if (normalModeState === "playing") {

        normalDrawBackground();
        moveCookie();
        drawCookie();
        moveMonster();
        drawMonster();
        checkMonsterCollision();
        drawChips();
        checkChipsCollision();
        normalScoreDisplay();
    }
    else if (normalModeState === "game over") {
        normalGameOver();
    }

}

/**Draw background*/
function normalDrawBackground() {
    //Make the background darker and lighter
    backgroundShade += 0.3 * backgroundDirection;
    if (backgroundShade >= 100) {
        backgroundDirection = -1;
    }
    if (backgroundShade <= 0) {
        backgroundDirection = 1;
    }
    let r = 300 - backgroundShade;
    let g = 150 - backgroundShade;
    let b = 200 - backgroundShade;

    background(r, g, b);
    // background(300, 150, 200);
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
    pop();

    //draw collected chips
    push();
    textSize(10);
    textAlign(CENTER, CENTER);
    fill(0);

    for (let i of collectedChips) {
        text("🟤", cookie.x + i.xOffset, cookie.y + i.yOffset);
    }
    pop();
};

/** Monster set up */
//Move monster
function moveMonster() {
    let followSpeed = 0.09;
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
    chips.x = random(15, 1285);
    chips.y = random(15, 685);
};

function checkChipsCollision() {
    //Distance between cookie and chips
    const d = dist(cookie.x, cookie.y, chips.x, chips.y);
    //Getting collect by the cookie
    const collect = (d < cookie.size / 2 + chips.size / 2);

    if (collect) {
        //Reset the chip
        resetChips();
        //Score increases
        normalScore += 1;
        //A chip is added to the cookie
        collectedChips.push({
            xOffset: random(-cookie.size / 4, cookie.size / 4),
            yOffset: random(-cookie.size / 4, cookie.size / 4)
        });
    }
}

//Display score
//Display score
function normalScoreDisplay() {
    push();
    textSize(40);
    textAlign(320, 100);
    textFont(BOLD);
    fill("#000000");
    stroke("#FFFFFF");
    strokeWeight(4);
    text(normalScore, width * 0.90, height * 0.1);
    pop();
};

/**Game over set up */
function normalGameOver() {
    push();
    //Game over screen
    noStroke();
    fill("#08519C");
    rect(0, 0, width, height);

    //Eyes
    push();
    noStroke();
    fill(monsterBackground.eyes.globes.fill);
    monsterBackground.eyes.y = monsterBackground.body.y;
    ellipse(monsterBackground.body.x - 300, monsterBackground.body.y - 40, 150, 150);
    ellipse(monsterBackground.body.x + 300, monsterBackground.body.y - 40, 150, 150);
    pop();

    //Pupils
    push();
    fill(monsterBackground.eyes.pupils.fill);

    // Make left pupil follow mouse X and mouse Y inside globe
    monsterBackground.eyes.pupils.left.x = constrain(
        map(mouseX, 0, width, monsterBackground.body.x - 350, monsterBackground.body.x - 250),
        monsterBackground.body.x - 350,
        monsterBackground.body.x - 250
    );
    monsterBackground.eyes.pupils.left.y = constrain(
        map(mouseY, 0, height, monsterBackground.body.y - 90, monsterBackground.body.y + 10),
        monsterBackground.body.y - 90,
        monsterBackground.body.y + 10
    );
    ellipse(monsterBackground.eyes.pupils.left.x, monsterBackground.eyes.pupils.left.y, 100, 100);

    // Make right pupil follow mouse X and mouse Y inside globe
    monsterBackground.eyes.pupils.right.x = constrain(
        map(mouseX, 0, width, monsterBackground.body.x + 250, monsterBackground.body.x + 350),
        monsterBackground.body.x + 250,
        monsterBackground.body.x + 350
    );
    monsterBackground.eyes.pupils.right.y = constrain(
        map(mouseY, 0, height, monsterBackground.body.y - 90, monsterBackground.body.y + 10),
        monsterBackground.body.y - 90,
        monsterBackground.body.y + 10
    );
    ellipse(monsterBackground.eyes.pupils.right.x, monsterBackground.eyes.pupils.right.y, 100, 100);
    pop();

    //Mouth
    push();
    noStroke();
    fill("#680C07");
    // d = distance between the mouse and the center of the monster's mouth
    let dbgs = dist(mouseX, mouseY, monsterBackground.body.x, monsterBackground.body.y);
    let mouthSizeMonsterBg = map(dbgs, 0, 200, 160, 115);
    mouthSizeMonsterBg = constrain(mouthSizeMonsterBg, 115, 160);
    ellipse(monsterBackground.body.x, monsterBackground.body.y * 1.5, mouthSizeMonsterBg);
    pop();

    //Text
    push();
    imageMode(CENTER);
    image(gameOverText, width / 2, height / 2 - 250, 550, 80);
    image(pressEsc, width / 2, height - 60, 85, 15);
    image(mainMenuText, width / 2, height - 40, 80, 10);
    pop();

}

