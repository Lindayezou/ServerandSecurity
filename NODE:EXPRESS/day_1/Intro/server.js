"use strict";
var express = require('express');
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var server = app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
var monthArray = require('./months');
var jan = monthArray[0];
var randInt = require('./randomNumber');
var num = randInt(50, 100);
console.log(jan, num);
var quote = require('./quotes');
var quoteArray = quote.quotes;
quote.addQuote("Today is an awesome day.");
var randQuote = quote.randomQuotes();
console.log("This is a RANDOMQUOTE", randQuote);
console.log("this is ALL THE QUOTES", quoteArray);
