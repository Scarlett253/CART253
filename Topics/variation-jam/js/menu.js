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
let avoidObstacles;
let enterDoors;
let escapeMonster;

/** Load sounds and images */
function preload() {
    //images
    cookieEaterText = loadImage("assets/images/cookieEaterText.png");
    instructions = loadImage("assets/images/instructions.png");
    useMouse = loadImage("assets/images/useMouse.png");
    avoidObstacles = loadImage("assets/images/avoidObstacles.png");
    enterDoors = loadImage("assets/images/enterDoors.png");
    escapeMonster = loadImage("assets/images/escapeMonster.png");
    monsterImage = loadImage("assets/images/monster.png");
    xulaImage = loadImage("assets/images/xulaPose1.png");
    xulaMad = loadImage("assets/images/xulaPose2.png");
    dogCookieImage = loadImage("assets/images/dogCookie.png");
    bonesImage = loadImage("assets/images/bone.png");
    frijolImage = loadImage("assets/images/frijolPose2.png");
    frijolMad = loadImage("assets/images/frijolPose1.png");
    fishCookie = loadImage("assets/images/fishCookie.png");
    fish = loadImage("assets/images/fish.png");
    //sounds
    song = loadSound('assets/sounds/soniditos.mp3');
    sniff = loadSound('assets/sounds/sniff.wav');
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
    image(cookieEaterText, width / 2, height - 600, 900, 150);
    //Instructions
    image(instructions, width / 2, height - 490, 400, 50);
    image(useMouse, width / 2, height - 420, 390, 20);
    image(avoidObstacles, width / 2, height - 370, 275, 17);
    image(enterDoors, width / 2, height - 320, 380, 30);
    image(escapeMonster, width / 2, height - 260, 230, 20);
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
            break;

        case 68:
            state = "dog-variation";
            dogSetup();
            break;

        case 67:
            state = "cat-variation";
            catSetup();
            break;
    }
}
