import express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let server = app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});


let monthArray = require('./months');
let jan = monthArray[0];
let randInt = require('./randomNumber');
let num = randInt(50, 100);
console.log(jan, num)

let quote = require('./quotes')
let quoteArray = quote.quotes;
quote.addQuote("Today is an awesome day.")
let randQuote = quote.randomQuotes();
console.log("This is a RANDOMQUOTE", randQuote);

console.log("this is ALL THE QUOTES", quoteArray);
