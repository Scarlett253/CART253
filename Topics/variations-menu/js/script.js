/**
 * Variation Menu
 * Yvonne Scarlett Arriola Lerin
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(1300, 700);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "normal-variation":
            normalDraw();
            break
        case "dog-variation":
            dogDraw();
            break;
        case "cat-variation":
            catDraw();
            break;
    }
}


/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    // ESC → go back to main menu
    if (event.keyCode === 27) {
        window.location.reload();
    }

    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
    }
}