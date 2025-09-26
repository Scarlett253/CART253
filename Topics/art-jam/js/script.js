/**
 * Me, I and myself: Art Jam Self-portrait project
 * Yvonne Scarlett Arriola Lerin
 * 
 * Draw a self-portrait (in JavaScript with p5)
 */

"use strict";

//Mouth opens whenever the hand with the pizza gets close

let x = 200;
let y = 200;

function setup() {
    //creating a canvas
    createCanvas(940, 580);
}

/**
 * Draw of myself, eating, with a mouvable hand holding a pizza
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

    //Hand holding pizza
    drawHand();
    drawPizza();
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
    //Mouth opens whenever the hand with the pizza gets close
    push();
    noStroke();
    fill("#680C07");
    ellipse(470, 385, 50, 10);
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
    //Draw the left eye
    push();
    noStroke();
    fill("#FFFFFF");
    ellipse(435, 335, 40, 40);
    fill("#000000");
    ellipse(435, 335, 30, 30);
    pop();

    //Draw the right eye
    push();
    noStroke();
    fill("#FFFFFF");
    ellipse(505, 335, 40, 40);
    fill("#000000");
    ellipse(505, 335, 30, 30);
    pop();
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

function drawPizza() {
    //Begin drawing group
    push();

    //Mouse position
    translate(mouseX, mouseY);

    //Style the pizza
    fill("#efc713ff");
    noStroke();

    //Draw pizza base

    triangle(0, 0, 0, 0, 0, 0);
    pop();



}
