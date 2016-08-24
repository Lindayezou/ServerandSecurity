let express = require ('express');
let bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json())

// app.get('/', function(req, res) {
//   res.send("Hello World!");
// })

let movies = [
    { id: 1, title: 'Star Wars V'},
    { id: 2, title: 'Kill Bill'},
    { id: 3, title: 'Edge of Tomorrow'}
];

app.get('/movies/:id', function(req, res){
  res.send(req.params.id);
});

app.post('/', function(req, res){
  res.send(req.body);
});

app.get('/movies', function(req, res) {
  res.send(req.method)
});

app.get('/', function(req, res){
  res.sendStatus(404);
});

app.get('/api/movies/:id', function(req, res){
  res.send(req.params.id);
});

app.get('/api/movies', (req, res) => {
  res.send(req.query)
})


let server = app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
