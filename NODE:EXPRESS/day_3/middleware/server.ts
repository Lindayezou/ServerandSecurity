let express = require ('express');
let bodyParser = require('body-parser');

const app = express();
const port = 8080;

let router = express.Router();

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json())

// app.get('/', function(req, res) {
//   res.send("Hello World!");
// })

// // General example of middleware
// app.use(function(req, res, next) {
//   console.log("Hello from Middleware function #1");
//   next();
// }, function(req, res, next){
//   console.log("Hello from Middleware function #2");
//   next();
// });
//
// app.get('/', function(req, res){
//   res.send("Hello World!")
// });

// //An example of implementing middleware with express.router
// router.use(function(req, res, next) {
//   console.log(req.method, req.path);
//   next();
// });
//
// router.get('/:id', function(req, res, next) {
//   res.send(req.params.id);
// });
//
// app.use('/movies', router);

// //Example of middleware that is manipulating the request object
//  app.use(function(req, res, next) {
//    req["requestTime"] = Date.now();
//    next();
//  }, function(req, res, next){
//    req['message'] = 'Time requested: ' + new Date(req.requestTime).toLocaleString();
//    next();
//  });
//
 // app.get('/', function(req, res){
 //   res.sendStatus(404);
 // });

// Error handling using middleware

// app.use(function(err, req, res, next) {
//   if (err) {
//     res.status(500).send("Something broke D=")
//   } else {
//     res.send('hello World')
//   }
// });

// // Error handling using middleware EXAMPLE 2
// app.use(function(req, res, next){
//   req['message'] = null;
//   next();
// });
//
// app.get('/', function(req, res, next) {
//   if (req.message) {
//     res.send(req.message);
//   } else {
//     next({errorMessage: "req.message is null"})
//   }
// });
//
// app.use(function(err, req, res, next) {
//   console.log(err)
//   res.status(500).send(err.errorMessage)
// });

// Practice
app.get('/:id' function(){})
//if id is 0, res.send("id we got is zero")
// if the id is not zero, we call the next function that res.send("id is not zero")



let server = app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
