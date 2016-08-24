var express = require('express');
var app = express();
app.get('/', function (req, res, next) {
    res.send('You have reach the home page!');
});
var secretRoute = require('./route');
app.use('/api', secretRoute);
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
