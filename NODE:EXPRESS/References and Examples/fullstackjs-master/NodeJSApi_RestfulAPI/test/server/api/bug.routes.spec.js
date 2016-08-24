"use strict";
let proxyquire = require('proxyquire')
  .noPreserveCache();


let controlStub = {
	getAllBugs: 'controller.getAllBugs',
	getOneBug: 'controller.getOneBug',
	findBug: 'controller.findBug',
	createBug: 'controller.createBug',
	editBug: 'controller.editBug',
	removeBug: 'controller.removeBug'
};

let routerStub = {
  get: sinon.spy(),
  post: sinon.spy(),
  put: sinon.spy(),
  delete: sinon.spy()
};

let router = proxyquire(config.server + '/api/bug.routes', {
  'express': {
    Router() {
	  	return routerStub
		}
  },
  './bug.controller': controlStub
});

describe('Bug Router:', () => {
	it('Should return an express router instance', function() {
		router.should.equal(routerStub);
	});
	describe('GET: /api/bugs', () => {
		it('Should route to controller.getAllBugs', () => {
		  router.get.withArgs('/', controlStub.getAllBugs).should.be.calledOnce();
		});
	});
	describe('GET: /api/bugs/:id', () => {
		it('Should route to controller.findBug, and then controller.getOneBug', () => {
		  router.get.withArgs('/:id', 'controller.findBug', 'controller.getOneBug').should.be.calledOnce();
		});
	});
	describe('POST: /api/bugs', () => {
		it('Should route to controller.createBug', () => {
			router.post.withArgs('/', 'controller.createBug').should.be.calledOnce();
		});
	});
	describe('PUT: /api/bugs/:id', () => {
		it('Should route to controller.findBug, and then controller.editBug', () => {
			router.put.withArgs('/:id', 'controller.findBug', 'controller.editBug').should.be.calledOnce();
		});
	});
		describe('DELETE: /api/bugs/:id', () => {
		it('Should route to controller.findBug, and then controller.removeBug', () => {
			router.delete.withArgs('/:id', 'controller.findBug', 'controller.removeBug').should.be.calledOnce();
		});
	});
});
