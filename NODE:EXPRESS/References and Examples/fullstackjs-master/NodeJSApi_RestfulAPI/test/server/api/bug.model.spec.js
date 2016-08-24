"use strict";
let Model = require(config.server + '/api/bug.model');

describe('Bug Model:', () => {
	describe('bugs array', () => {
		it('Should exist as an exported array', () => {
			Model.bugs.should.be.an.Array();
		});
		it('Should be empty on startup', () => {
			Model.bugs.should.be.empty();
		});
	});
	describe('seedBugs()', () => {
		it('Should add 4 bugs to the array', () => {
			Model.bugs.length = 0; // clears out the array
			Model.seedBugs();
			Model.bugs.length.should.equal(4);
		});
	});
	describe('clearBugs()', () => {
		it('Should clear out the bugs array', () => {
			Model.bugs.length = 0;
			Model.bugs.push("test");
			Model.clearBugs();
			Model.bugs.should.be.empty();
		});
		it('Should set nextId to 1', () => {
			Model.nextId = 5;
			Model.clearBugs();
			Model.nextId.should.equal(1);
		});
	});
	describe('Bug()', () => {
		it('Should set the description, priority, and submittedBy properties', () => {
			let b = new Model.Bug('desc', 'prio', 'submit');
			b.description.should.equal('desc');
			b.priority.should.equal('prio');
			b.submittedBy.should.equal('submit');
		});
		it('Should set a created property to be a UTC time', () => {
			let b = new Model.Bug();
			b.created.should.be.a.Number();
		});
		it('Should set _id to equal nextId', () => {
			Model.nextId = 17;
			let b = new Model.Bug();
			b._id.should.equal(17);
		});
		it('Should increase nextId by 1 after creating the object', () => {
			Model.nextId = 1;
			let b = new Model.Bug();
			Model.nextId.should.equal(2);
		});
	});
});