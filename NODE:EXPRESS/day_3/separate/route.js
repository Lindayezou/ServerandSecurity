"use strict";
var express = require('express');
var router = express.Router();
router.use('/', function (req, res, next) {
    console.log(req.method, req.path);
});
router.get('/secret', function (req, res) {
    console.log("Something is happening");
    res.send('secret - please show up');
});
router.post('/secret', function (req, res) {
    res.send("You posting to this secret api! =D");
});
module.exports = router;
