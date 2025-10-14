/**
 * My Mod-Jam
 * Yvonne Scarlett Arriola Lerin <3
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const frog = {}
const fly = {}
const sound = {}

function preload() { }

/**
 * Only at the beginning of the program
*/
function setup() {
    //Creating a canvas
    createCanvas(500, 800);

    //reset scoring system
    resetScoringSystem();

    //reset frog and fly positions
    resetFrog();
    resetFly();

}


/**
 *For every frame
*/
function draw() {
    //Setting background color
    background(150, 200, 300);

    //Adding a title and instructions page
    function title() {

    }
    instructions();

    //Adding an ending
    ending();

    //Adding a scoring system
    scoringSystem();

    //Adding a timer
    timer();



}


