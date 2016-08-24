import express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

let server = app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// let months = require('/months.js');
// let randomNumber = require('/randomNumbers.js')
//
// let jan = months[0];
// let randNum = randomNumber(50, 100)
