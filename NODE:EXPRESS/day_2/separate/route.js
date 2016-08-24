"use strict";
var express = require('express');
var router = express.Router();
router.use('/', function (req, res, next) {
    console.log(req.method + " " + req.path);
});
router.get('/secret', function (req, res) {
    res.send('You have reached the secret api!');
});
router.post('/secret', function (req, res) {
    res.send('You are posting to a secret api.');
});
module.exports = router;
