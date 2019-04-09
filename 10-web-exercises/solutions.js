"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(x) {

   return x === true;
}



function isFalse(horse) {

    return horse === false;
}



function not(opposite) {

    return !opposite;
}

function addOne(x) {
    return parseFloat(x) + 1;
}

function not(input) {
    return !input;
}



function isEven(input) {
    return input + 1;
}

function or(a, b) {
    return a || b;
}

function and(a, b) {
    return a && b;
}

/* 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

        isEqual(3, "3")                       // true
        isEqual("abc123", "abc123")           // true
        isEqual(true, 1)                      // true
        isEqual(0, false)                     // true
        isEqual(4, -5)                        // false
        isEqual("java", "javascript")         // false
*/


function concat(a, b) {
    return a.toString() + b.toString();
}

function isIdentical(x,y) {
    if (x === y) {
        return true;
    } else {
    return false;
    }
}