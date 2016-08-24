import * as express from 'express';

const app = express();
const PORT = 3000;

function CustomError(message: string, status?: number, extra?: any) {
	Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.status = status;
	if (extra) this.extra = extra;
}

let pets = [
	{ id: 1, name: 'mittens', age: 2, type: 'cat' },
	{ id: 2, name: 'Rex', age: 12, type: 'dog' },
	{ id: 3, name: 'rocky', age: 8, type: 'dog' },
	{ id: 4, name: 'socks', age: 3, type: 'snake' },
	{ id: 5, name: 'barry', age: 5, type: 'cat' }
];

app.get('/', function(req, res, next) {
	let elemString = '';
	pets.forEach((p) => {
		elemString += `<h1><a href="/${p.id}">${p.name}</a></h1>`;
	});
	elemString += `<h1><a href="/10">Does Not Exist</a></h1>`
	res.send(elemString);
});

app.get('/:id', function(req, res, next) {
	let pet = pets.filter((pet) => pet.id === parseInt(req.params.id))[0];
	if (!pet) return next(new CustomError(`Could not find a pet with an id of ${req.params.id}`, 400));
	res.json(pet);
});

// Send back a full error when developing the application
if (process.env.NODE_ENV === 'development') {
	app.use(function(err:any, req, res, next) {
		// Log the stack trace if it exists, otherwise log the error object
		(err.stack) ? console.log(err.stack) : console.log(err);
		res.status(err.status || 500).send(err);
	});
}

// Don't leak the stack trace in production
app.use(function(err:any, req, res, next) {
	res.status(err.status || 500).send({ message: err.message });
});

export let server = app.listen(PORT, function() {
	console.log(`Server listening on localhost:${PORT}`);
});
