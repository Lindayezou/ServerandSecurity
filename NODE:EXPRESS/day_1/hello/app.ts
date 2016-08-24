// import http = require('http');
// const port = 3000;
//
// let server = http.createServer((request, response) => {
//   console.log("This is the request object", request);
//   response.end(`It Works! =D ${request.url}`)
// });
//
// server.listen(port, function () {
//   console.log(`Server is listening on port ${port}.`);
// });

import express = require ('express');
const app = express();
const port = 8080;

app.get('/', function(req, res) {
  console.log(req)
  res.send("Hello World!");
})

let server = app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
