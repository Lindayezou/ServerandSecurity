"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
var movies = [
    { id: 1, title: 'Star Wars V' },
    { id: 2, title: 'Kill Bill' },
    { id: 3, title: 'Edge of Tomorrow' }
];
app.get('/api/movies', function (req, res) {
    res.send(movies);
});
app.get('/', function (req, res) {
    res.send('<h1>Movies App</h1>');
});
app.put('/api/movies/:id', function (req, res) {
    var movieToEdit = movies.find(function (value) { return value.id == req.params.id; });
    movieToEdit.title = req.body.title;
    res.send(movies);
});
app.listen(PORT, function () {
    console.log('Server running on port: ' + PORT);
});
