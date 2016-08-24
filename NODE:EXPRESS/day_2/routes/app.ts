import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


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


// we will use an array of movie objects to serve as a fake database
let movies = [
    { id: 1, title: 'Star Wars V'},
    { id: 2, title: 'Kill Bill'},
    { id: 3, title: 'Edge of Tomorrow'}
];

app.get('/api/movies', (req, res)=>{
    res.send(movies);
});

app.get('/', (req, res) => {
    res.send('<h1>Movies App</h1>');
});

app.put('/api/movies/:id', (req, res)=>{
    let movieToEdit = movies.find((value)=> value.id == req.params.id);
    movieToEdit.title = req.body.title;
    res.send(movies);
});

app.listen(PORT, function(){
    console.log('Server running on port: ' + PORT);
});
