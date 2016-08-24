let express = require ('express');
let router = express.Router();

router.use('/', function(req, res, next) {
  console.log(req.method, req.path);
});

router.get('/secret', function(req, res) {
  console.log("Something is happening")
  res.send('secret - please show up')
});

router.post('/secret', function(req, res) {
  res.send("You posting to this secret api! =D")
});

export = router;
















// const app = express();
// const port = 8080;

// app.use(bodyParser.urlencoded({extend:true}));
// app.use(bodyParser.json())

// app.get('/', function(req, res) {
//   res.send("Hello World!");
// })




// let server = app.listen(port, function() {
//   console.log(`Server is running on port ${port}`);
// });
