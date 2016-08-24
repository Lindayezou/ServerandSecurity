"use strict";
let express = require('express');
// var bodyParser = require('bodyParser');
let app = express();
let rand = require('./custom');

app.set('views', './views');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

app.get('/', function(req, res) {
  res.render('index');
});

let x = 0;
app.get('/counter', (req, res) => {
  res.send(`<h1>${x++} | ${rand()}</h1>`);
});

app.get('/test', (req, res) => {
  res.send('<h1>You are on the test page</h1>');
});

app.get('/foo/:bar', (req, res) => {
  let bar = req.params.bar;
  res.send(`<h1>You have entered ${req.params.bar} as the route parameters.`);
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
