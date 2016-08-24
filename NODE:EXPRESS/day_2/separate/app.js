"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res, next) {
    res.send('You have reached the home page');
});
var secretRoute = require('./route');
app.use('/api', secretRoute);
app.use(function (req, res, next) {
    res.status(404);
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
    res.type('txt').send('Not found');
});
app.listen(3000, function () {
    console.log('Node server has started');
});
