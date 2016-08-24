var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send("Hello World!");
});
var server = app.listen(port, function () {
    console.log("Server is running on port " + port);
});
