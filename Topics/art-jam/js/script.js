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

    //Bee
    drawBee();

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
    pop();

    push();
    fill("#000000");
    ellipse(505, 335, 30, 30);
    pop();
    //Eyes following cookie
}

function drawHair() {
    //Draw toupet one
    push();
    noStroke();
    fill("#482828ff");
    ellipse(438, 285, 50, 20);
    pop();

    //Draw toupet two
    push();
    noStroke();
    fill("#482828ff");
    ellipse(470, 280, 20, 50);
    pop();

    //Draw toupet three
    push();
    noStroke();
    fill("#482828ff");
    ellipse(497, 285, 50, 20);
    pop();
}

function drawBee() {
    //Body
    push();
    noStroke();
    fill("#e4e00fff");
    ellipse()
}

function drawCookie() {
    //Cookie
    push();
    noStroke();
    noCursor();
    fill("#efc713ff");
    circle(mouseX, mouseY, 40);
    pop();
    //Chocolate chips
    fill("#48280fff");
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


