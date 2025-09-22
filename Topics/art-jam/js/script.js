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
    drawEyes();
    drawBlush();
    drawHair();

    //Hand holding pizza
    drawHand();
    drawPizza();

    //Mouth opens whenever the hand with the pizza gets close
}

function drawBody() {
    //Body
    push();
    noStroke();
    fill("#AF2413");
    ellipse(470, 530, 290, 380);
}
function drawHoodie() {
    //Hoodie
    fill("#AF2413");
    ellipse(470, 340, 200, 220)
    fill("#950606")
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
function drawEyes() {
    //Eyes follow the pizza
    push();
    noStroke();
    fill("#FFFFFF");
    ellipse(435, 335, 40, 40);
    fill("#FFFFFF");
    ellipse(505, 335, 40, 40);
}