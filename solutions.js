"use strict";
function isTrue(x) {
    return x === true;
}
function isFalse(x) {
    return x === false;
}
function not(x) {
    return !x;
}
function addOne(x) {
    return ++x;

}
function isEven(x) { // expected 0 to be false.
    return (parseFloat(x) % 2 === 0);

}
function isIdentical(x, y) {
    return x === y;
}
function isEqual(x, y) {
    return x == y;
}
function or(x, y) {
    return (x || y); // a boolean value is assigned
}
function and(x, y) { //
    return  (x && y);

}
function concat(x, y){
    return ("" + x + y); //Empty String HAS TO BE at the beginning of the sum. This does NOT work: (x + y + "") grrrr!
}
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
