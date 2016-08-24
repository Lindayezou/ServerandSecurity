"use strict";

let path = require('path');

module.exports = {
	root: path.normalize(__dirname + '/..'),
	public: path.normalize(__dirname + '/../public'),
	client: path.normalize(__dirname + '/../public/client'),
	server: __dirname
}
