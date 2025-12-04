/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(N) Normal
(D) Dog 
(C) Cat`

//Title text and instructions images
let cookieEaterText;
let instructions;
let useMouse;
let toControl;
let collectTreats;
let avoidObstacles;
let escapeMonster;
let clickHere;

//Variations text images
let variationsText;
let og;
let pressN;
let xulaText;
let pressD;
let frijolText;
let pressC;

//Game overs text images
let gameOverText;
let xulaAteYou;
let frijolCookedYou;
let mainMenuText;
let pressEsc;

//Sounds normal variation
let mySound;
let hasSoundPlayed = false;

//sounds dog variation
let wisdomDog;
let hasWisdomDogPlayed = false;

//sounds cat variation
let purring;
let hasPurringPlayed = false;

/** Load sounds and images */
function preload() {
    //Text images
    cookieEaterText = loadImage("assets/images/cookieEaterText.png");
    instructions = loadImage("assets/images/instructions.png");
    useMouse = loadImage("assets/images/useMouse.png");
    toControl = loadImage("assets/images/toControlTheCookie.png");
    collectTreats = loadImage("assets/images/collectTreats.png");
    avoidObstacles = loadImage("assets/images/avoidObstacles.png");
    escapeMonster = loadImage("assets/images/escapeMonster.png");
    variationsText = loadImage("assets/images/variations.png");
    og = loadImage("assets/images/og.png");
    pressN = loadImage("assets/images/pressN.png");
    xulaText = loadImage("assets/images/xula.png");
    pressD = loadImage("assets/images/pressD.png");
    frijolText = loadImage("assets/images/frijol.png");
    pressC = loadImage("assets/images/pressC.png");
    clickHere = loadImage("assets/images/clickHere.png");
    gameOverText = loadImage("assets/images/gameOver.png");
    xulaAteYou = loadImage("assets/images/xulaAteYou.png");
    frijolCookedYou = loadImage("assets/images/frijolCookedYou.png");
    mainMenuText = loadImage("assets/images/mainMenu.png");
    pressEsc = loadImage("assets/images/pressEsc.png");

    //Monster image
    monsterImage = loadImage("assets/images/monster.png");

    //Dog variation images
    xula.closeImage = loadImage("assets/images/xulaPose1.png");
    xula.openImage = loadImage("assets/images/xulaPose2.png");
    xula.image = xula.closeImage;
    dogCookieImage = loadImage("assets/images/dogCookie.png");
    bonesImage = loadImage("assets/images/bone.png");

    //Cat variation images
    frijol.mouthClose = loadImage("assets/images/frijolPose2.png");
    frijol.mouthOpen = loadImage("assets/images/frijolPose1.png");
    frijol.image2 = frijol.mouthClose;
    fishCookieImage = loadImage("assets/images/fishCookie.png");
    fishImage = loadImage("assets/images/fish.png");

    //Game over images
    star = loadImage("assets/images/star.png");
    dogSmile = loadImage("assets/images/dogSmile.gif");
    catEating = loadImage("assets/images/catEating.gif");

    //sounds
    mySound = loadSound('assets/sounds/soniditos.mp3');
    wisdomDog = loadSound('assets/sounds/wisdomDogSong.mp3');
    purring = loadSound('assets/sounds/purring.wav');
}

/**Draw menu screen*/
function menuDraw() {
    push();
    //Add background color
    noStroke();
    fill(300, 250, 200);
    rect(0, 0, width, height);
    //Title text
    imageMode(CENTER);
    image(cookieEaterText, width / 2, height - 600, 1100, 150);
    //Instructions
    image(instructions, width / 2, height - 480, 300, 35);
    image(useMouse, width * 0.40, height - 440, 300, 15);
    image(toControl, width * 0.64, height - 440, 300, 15);
    image(collectTreats, width / 2, height - 400, 300, 15);
    image(avoidObstacles, width / 2, height - 360, 300, 15);
    image(escapeMonster, width / 2, height - 320, 300, 20);
    //Variations text
    image(variationsText, width / 2, height - 280, 300, 35);
    image(og, width * 0.20, height - 205, 60, 25);
    image(pressN, width * 0.20, height - 180, 100, 15);
    image(xulaText, width / 2, height - 180, 60, 25);
    image(pressD, width / 2, height - 155, 100, 15);
    image(frijolText, width * 0.80, height - 205, 60, 25);
    image(pressC, width * 0.80, height - 180, 100, 15);
    image(clickHere, width / 2, height - 100, 350, 30);
    pop();
};

/**
 * Listen to the keyboard
 */

function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 78:
            state = "normal-variation";
            normalSetup();
            if (!mySound.isPlaying() && !hasSoundPlayed) {
                mySound.loop();
                hasSoundPlayed = true;
            }
            break;

        case 68:
            state = "dog-variation";
            dogSetup();
            if (!wisdomDog.isPlaying() && !hasWisdomDogPlayed) {
                wisdomDog.loop();
                hasWisdomDogPlayed = true;
            }
            break;

        case 67:
            state = "cat-variation";
            catSetup();
            if (!purring.isPlaying() && !hasPurringPlayed) {
                purring.loop();
                hasPurringPlayed = true;
            }
            break;
    }

}
