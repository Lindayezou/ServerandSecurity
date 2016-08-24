"use strict";
var express = require('express');
var app = express();
var port = 8080;
app.get('/', function (req, res) {
    console.log(req);
    res.send("Hello World!");
});
var server = app.listen(port, function () {
    console.log("Server is running on port " + port);
});
