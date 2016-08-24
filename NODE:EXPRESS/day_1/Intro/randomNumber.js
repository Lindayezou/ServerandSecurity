"use strict";
function randomNumber(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
module.exports = randomNumber;
