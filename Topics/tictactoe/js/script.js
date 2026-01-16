/**
 * TicTacToe variation
 * Yvonne Scarlett Arriola Lerin
 * 
 * A TicTacToe variation using my pets 
 */

"use strict";

/**
*/

let coordinatesX = [50, 200, 350];
let coordinatesY = [50, 200, 350];
function setup() {
    createCanvas(800, 500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // set a color 
    background("#5d9be2ff");

    /**
     * Grid settings
     */

    //style lines
    stroke("black");
    strokeWeight(5);

    //draw grid
    line(coordinatesX[1], 50, coordinatesX[1], 450);
    line(coordinatesX[2], 50, coordinatesX[2], 450);
    line(50, coordinatesY[1], 500, coordinatesY[1]);
    line(50, coordinatesY[2], 500, coordinatesY[2]);
}

function score() {

}