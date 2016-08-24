let express = require ('express');
let app = express();

app.get('/', function(req, res, next) {
  res.send('You have reach the home page!')
});

let secretRoute = require('./route');
app.use('/api', secretRoute);

app.listen(3000, function() {
  console.log("Listening on port 3000")
})
