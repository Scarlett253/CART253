/**
 * Loops-challenge
 * Scarlett Arriola, Chloé Guerin, Lucie Soussana
 * 
 * A series of lines across the canvas
 */

"use strict";

let x = 0;
let y = 0;
let strokeValue = 0;


/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);

    for (let x = 0; x <= width; x++) {
        const shade = map(x, 0, width, 0, 255);

        push();
        stroke(255, 153, 204, shade);
        line(x, 0, x, height);
        pop();
    }
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {

    while (x < width) {
        line(x, 0, x, height);
        x += 50;
        stroke(strokeValue);
        strokeValue += 25;
    }

    while (y < height) {
        line(0, y, width, y);
        y += 50;
        stroke(strokeValue);
        strokeValue -= 25;
    }
}