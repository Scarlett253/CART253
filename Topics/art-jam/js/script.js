/**
 * Me, I and myself: Art Jam Self-portrait project
 * Yvonne Scarlett Arriola Lerin
 * 
 * Draw a self-portrait (in JavaScript with p5)
 */

"use strict";

function setup() {
    //creating a canvas
    createCanvas(940, 580);

    //Slow frame rate
    frameRate(10);

    //Text
    textSize(50);

}
describe('The cookie follows the mouse as the user moves. Mouth opens whenever the cookie comes close')

/**
 * Draw of myself, eating, with a floating mouse/cookie
*/
function draw() {
    //Adding some color on the back
    background(250, 200, 200);

    //Me, I, and Myself
    drawBody();
    drawHoodie();
    drawFace();
    drawMouth();
    drawBlush();
    drawEyes();
    drawHair();

    //Bugs
    drawBee();
    drawBees();

    //Cookie
    drawCookie();
}

function drawBody() {
    //Body
    push();
    noStroke();
    fill("#AF2413");
    ellipse(470, 530, 290, 380);
    pop();

    //Heart
    push();
    noStroke();
    fill("#f2eb17ff");
    circle(440, 570, 110);
    fill("#f2eb17ff");
    circle(500, 570, 110);
    pop();
}

function drawHoodie() {
    //Hoodie
    push();
    noStroke();
    fill("#AF2413");
    ellipse(470, 340, 200, 220);
    pop();

    //Inside the Hoodie
    push();
    noStroke();
    fill("#950606");
    ellipse(470, 355, 150, 160);
    pop();

    //Antennas
    push();
    noStroke();
    fill("#AF2413");
    rect(425, 180, 5, 70);
    fill("#AF2413");
    rect(515, 180, 5, 70);
    pop();

    //Antennas puffs
    push();
    noStroke();
    fill("#f2eb17ff");
    circle(425, 170, 40);
    fill("#f2eb17ff");
    circle(515, 170, 40);
    pop();

}

function drawFace() {
    //Face
    push();
    noStroke();
    fill("#FFDFC4");
    ellipse(470, 355, 140, 150);
    pop();
}

function drawMouth() {
    //Mouth opens whenever the cookie gets close
    push();
    noStroke();
    fill("#680C07");
    // d = distance between the mouse and the center of the mouth
    let d = dist(mouseX, mouseY, 470, 385);
    let mouthSize = map(d, 0, 385, 50, 10);
    mouthSize = constrain(mouthSize, 10, 50);
    ellipse(470, 385, mouthSize, mouthSize);
    pop();

}

function drawBlush() {
    //Blush in cheek one
    push();
    noStroke();
    fill("#e3bcd8ff");
    ellipse(420, 360, 30, 30);
    pop();

    //Blush in cheek two
    push();
    noStroke();
    fill("#e3bcd8ff");
    ellipse(520, 360, 30, 30);
    pop();
}

function drawEyes() {
    //Draw white part of the eyes
    push();
    noStroke();
    fill("#FFFFFF");
    ellipse(435, 335, 40, 40);
    fill("#FFFFFF");
    ellipse(505, 335, 40, 40);
    pop();

    //Draw pupils
    push();
    noStroke();
    fill("#000000");
    ellipse(435, 335, 30, 30);
    fill("#000000");
    ellipse(505, 335, 30, 30);
    pop();
}

function drawHair() {
    //Draw toupet one
    // push();
    // noStroke();
    // fill("#482828ff");
    // ellipse(438, 285, 50, 20);
    // pop();

    // //Draw toupet two
    // push();
    // noStroke();
    // fill("#482828ff");
    // ellipse(470, 280, 20, 50);
    // pop();

    // //Draw toupet three
    // push();
    // noStroke();
    // fill("#482828ff");
    // ellipse(497, 285, 50, 20);
    // pop();

    drawToupet(438, 285, 50, 20);
    drawToupet(470, 280, 20, 50);
    drawToupet(497, 285, 50, 20);
}

function drawToupet(x_pos, y_pos, width, height) {
    push();
    noStroke();
    fill("#482828ff");
    ellipse(x_pos, y_pos, width, height);
    pop();
}

function drawBee() {
    //Wings
    push();
    noStroke();
    fill("#75c3f0ff");
    ellipse(90, 60, 15, 45);
    fill("#69bae8ff");
    ellipse(100, 60, 15, 40);
    pop();

    //Body
    push();
    noStroke();
    fill("#e4e00fff");
    ellipse(100, 100, 80, 50);
    fill("#1b0303ff");
    ellipse(100, 100, 10, 50);
    fill("#1b0303ff");
    ellipse(80, 100, 10, 40);
    fill("#1b0303ff");
    ellipse(118, 100, 10, 42);
    pop();

    //Antennas
    push();
    noStroke();
    fill("#1b0303ff");
    ellipse(124, 70, 5, 30);
    fill("#1b0303ff");
    ellipse(138, 70, 5, 30);
    pop();

    //Antennas' antennas
    push();
    noStroke();
    fill("#1b0303ff");
    ellipse(124, 60, 10, 3);
    fill("#1b0303ff");
    ellipse(138, 60, 10, 3);
    pop();

    //Head
    push();
    noStroke();
    fill("#1b0303ff");
    ellipse(132, 100, 30, 40);
    pop();

    //Sting
    push();
    noStroke();
    fill("#1b0303ff");
    ellipse(60, 100, 10, 20);
    fill("#1b0303ff");
    ellipse(50, 100, 20, 5);
    pop();

    //Draw white part of the bee's eyes
    push();
    noStroke();
    fill("#FFFFFF");
    ellipse(125, 90, 12, 12);
    fill("#FFFFFF");
    ellipse(140, 90, 12, 12);
    pop();

    //Draw pupils
    push();
    noStroke();
    fill("#000000");
    ellipse(125, 90, 9, 9);
    fill("#000000");
    ellipse(140, 90, 9, 9);
    pop();

    //Mouth
    push();
    noStroke();
    fill("#ef5ba7ff");
    // d = distance between the mouse and the center of the bee's mouth
    let d = dist(mouseX, mouseY, 133, 108);
    let mouthSize = map(d, 0, 108, 30, 12);
    mouthSize = constrain(mouthSize, 12, 30);
    ellipse(133, 108, mouthSize, mouthSize);
    pop();
}
function drawBees() {
    let x = random(0, 940);
    let y = random(0, 580);
    text('🐝', x, y);
}

function drawCookie() {
    //Cookie
    push();
    noStroke();
    noCursor();
    fill("#efc713ff");
    circle(mouseX, mouseY, 40);
    pop();

    //Cookie eaten
    if (mouseIsPressed) {
        circle(mouseX, mouseY, 40);
    } else {
        fill("#efc713ff");
    }
    {
        circle(mouseX, mouseY, 40);
    }
    { noStroke(); }

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


