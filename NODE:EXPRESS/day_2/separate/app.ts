import express = require('express');
let app = express();

app.get('/', function(req, res, next) {
  res.send('You have reached the home page');
});

// new code
import secretRoute = require('./route');
app.use('/api', secretRoute);
// end new code

//++++++++++++++++++++++++++++++++++
// app.use(function(req, res, next){
//   console.log("statusssss", res.status(404))
//     res.status(404).render('404_error_template', {title: "Sorry, page not found"});
// });
app.use(function(req, res, next){
  res.status(404);

  // renders a 404.html file, located in the 'views' folder
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text
  res.type('txt').send('Not found');
});
//++++++++++++++++++++++++++++++++++

app.listen(3000, function() {
  console.log('Node server has started');
});
