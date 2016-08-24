import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
const config = require('./config');

app.use('/client', express.static('client'));
app.use('/lib', express.static('bower_components'));

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.sendFile(path.normalize(config.public + '/index.html'));
});

app.use('/api/bugs', require('./api/bug.routes'));

app.get(/(client|lib|api)/, (req, res, next) => {
	return next({ status: 404, message: `Could not find ${req.method}: ${req.path} on the server` });
});

app.get('/*', function(req, res) {
	res.sendFile(path.normalize(config.public + '/index.html'));
});

app.use((req, res, next) => {
	return next({ status: 404, message: `Could not find ${req.method}: ${req.path} on the server` });
});

// Show full stack trace when developing
if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production') {
	app.use((err: any, req, res, next) => {
		console.log(err);
		res.status(err.status || 500).send(err);
	});
}

// Don't show the stack trace in production mode
// Don't show a console.log when testing
app.use((err: any, req, res, next) => {
	res.status(err.status).send(err.message);
});

require('./api/bug.model').seedBugs();

export = app.listen(PORT, () => {
	console.log('Example app listening at http://localhost:' + PORT);
});
