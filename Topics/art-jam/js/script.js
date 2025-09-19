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
    drawBlush();
    drawHair();

    //Hand holding pizza
    drawHand();
    drawPizza();

    //Mouth opens whenever the hand with the pizza gets close
}
function drawFace() {
    //Face
    push();
    noStroke();
    fill("#EDAC69");
    elipse(100, 100, 100, 100);

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
