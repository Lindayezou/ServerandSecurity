let express = require ('express');
let bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send("Hello World!");
})

let famousDogs = [
    { id: 1, name: 'Old Yeller'},
    { id: 2, name: 'Brian Griffin'},
    { id: 3, name: 'Air Bud'}
];

app.get('/api/movies', (req, res) => {
  res.send(movies)
})

app.get('/api/movies/:id', (req, res)=> {
  let movieId = req.params.id; // id in req.params has to match the id in '/api/movies/:id';
  let movie = movies.find((value)=>{
      return value.id == movieId;
  });
  res.send(movie);
});

app.put('/api/movies/:id', (req, res)=>{
    let movieToEdit = movies.find((value)=> value.id == req.params.id);
    movieToEdit.title = req.body.title;
    res.send(movies);
});

app.post('/api/movies', (req, res)=> {
  movies.push(req.body);
  res.send(movies);
})

app.delete('/api/movies/:id', (req, res)=>{
    let movieToDelete = movies.find((value)=> value.id == req.params.id);
    movies.splice(movies.indexOf(movieToDelete), 1);
    res.send(movies);
});

let server = app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
