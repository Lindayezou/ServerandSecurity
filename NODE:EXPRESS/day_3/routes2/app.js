var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send("Hello World!");
});
var famousDogs = [
    { id: 1, name: 'Old Yeller' },
    { id: 2, name: 'Brian Griffin' },
    { id: 3, name: 'Air Bud' }
];
app.get('/api/movies', function (req, res) {
    res.send(movies);
});
app.get('/api/movies/:id', function (req, res) {
    var movieId = req.params.id;
    var movie = movies.find(function (value) {
        return value.id == movieId;
    });
    res.send(movie);
});
app.put('/api/movies/:id', function (req, res) {
    var movieToEdit = movies.find(function (value) { return value.id == req.params.id; });
    movieToEdit.title = req.body.title;
    res.send(movies);
});
app.post('/api/movies', function (req, res) {
    movies.push(req.body);
    res.send(movies);
});
app.delete('/api/movies/:id', function (req, res) {
    var movieToDelete = movies.find(function (value) { return value.id == req.params.id; });
    movies.splice(movies.indexOf(movieToDelete), 1);
    res.send(movies);
});
var server = app.listen(port, function () {
    console.log("Server is running on port " + port);
});
