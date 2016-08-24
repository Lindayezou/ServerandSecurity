"use strict";
var quotes = {
    quotes: ["I'm gonna make him an offer he can't refuse.", "Toto, I've a feeling we're not in Kansas anymore.", "Here's looking at you, kid."],
    randomQuotes: function () {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    },
    addQuote: function (quote) {
        this.quotes.push(quote);
    }
};
module.exports = quotes;
