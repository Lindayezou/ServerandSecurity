"use strict";
let proxyquire = require('proxyquire').noPreserveCache();
let should = require('should');
let assert = require('assert');
let Model = {
	bugs: [],
	Bug: function() {

	}
}
let controller = proxyquire(config.server + '/api/bug.controller', {
	'./bug.model': Model
});

describe('Bug Controller:', (done) => {
	let req, res, next;
	beforeEach(() => {
		Model.bugs.length = 0;
		req = { body: {}, params: {} };
		next = sinon.spy();
		res = {
			json: function() {
			}
		};
	});

	describe('getAllBugs()', () => {
		it('Should call res.json with the bugs array', () => {
			Model.bugs.push('red');
			let spy = sinon.spy(res, 'json');
			controller.getAllBugs(req, res, next);
			assert(spy.withArgs(['red']).calledOnce);
		})
	});
	describe('getOneBug()', () => {
		it('Should call res.json with req["bug"]', () => {
			req.bug = "blue";
			let spy = sinon.spy(res, 'json');
			controller.getOneBug(req, res, next);
			spy.withArgs('blue').calledOnce.should.equal(true);
		});
	});
	describe('createBug()', () => {
		it('Should create a new Bug()', () => {
			req.body = { description: 'test', priority: 'High', submittedBy: 'person' };
			let spy = sinon.spy(Model, 'Bug');
			controller.createBug(req, res, next);
			assert(spy.withArgs('test', 'High', 'person').calledOnce);
			assert(spy.calledWithNew());
			Model.Bug.restore();
		});
		it('Should add the new bug to the bugs array', () => {
			req.body = { description: 'test', priority: 'High', submittedBy: 'person' };
			let stub = sinon.stub(Model, 'Bug', function() { return { name: "red" } });
			controller.createBug(req, res, next);
			Model.bugs.length.should.equal(1);
			Model.bugs[0].should.eql({ name: 'red' });
			stub.restore();
		});
		it('Should call res.json with the newly created Bug', () => {
			let spy = sinon.spy(res, 'json');
			let stub = sinon.stub(Model, 'Bug', function() { return { name: "red" } });
			controller.createBug(req, res, next);
			assert(spy.withArgs({ name: 'red' }).calledOnce);
		});
	});
	describe('editBug()', () => {
		it('Should set req.body._id to equal req.params.id', () => {
			req.body = { _id: 2 };
			req.params.id = 5;
			controller.editBug(req, res, next);
			req.body._id.should.equal(5);
		});
		it('Should replace the bug in the bugs array with req.body, using req["bug"]', () => {
			req.body = { color: 'yellow' }
			req.bug = 'red';
			req.params.id = 2;
			Model.bugs.push('red');
			controller.editBug(req, res, next);
			Model.bugs[0].should.eql({ _id: 2, color: 'yellow' });
		});
		it('Should call res.json with req.body', () => {
			req.body = { color: 'yellow' }
			req.params.id = 2;
			let spy = sinon.spy(res, 'json');
			controller.editBug(req, res, next);
			assert(spy.withArgs({ _id: 2, color: 'yellow' }).calledOnce);
		});
	});
	describe('removeBug()', () => {
		it('Should splice bugs.indexOf using req["bug"]', () => {
			Model.bugs.push("red");
			req.bug = "red";
			controller.removeBug(req, res, next);
			Model.bugs.length.should.equal(0);
		});
		it('Should call res.json with { success: true }', () => {
			let spy = sinon.spy(res, 'json');
			controller.removeBug(req, res, next);
			assert(spy.withArgs({ success: true }).calledOnce);
		});
	});
	describe('findBug()', () => {
		it('Should find a bug by the filter method and req.params.id, set req.bug equal to the found bug, and call next', () => {
			Model.bugs.push({ _id: 5, name: 'Test' });
			req.params.id = "5";
			controller.findBug(req, res, next);

			next.should.be.calledOnce();
			should.exist(req.bug);
			req.bug.should.eql({ _id: 5, name: 'Test' });
		});
		it('Should call next with an error if the bug does not exist', () => {
			controller.findBug(req, res, next);
			should.not.exist(req.bug);
			assert(next.withArgs({ status: 400, message: 'Could not find the requested bug' }).calledOnce)
		});
	});
});