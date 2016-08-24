describe('Bug Service', function() {
	var BugService, $httpBackend;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function($injector) {
		BugService = $injector.get('BugService');
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend.whenGET(/templates.*/).respond(200, '');
	}));

	it('should exist', function() {
		should.exist(BugService)
	});
	describe('getAll()', function() {
		it('should exist', function() {
			should.exist(BugService.getAll)
		});
		it('should make a GET to /api/bugs', function() {
			$httpBackend.expect('GET', '/api/bugs').respond(200);
			var result = BugService.getAll();

			$httpBackend.flush();
		});
		it('should return the result', function() {
			$httpBackend.expect('GET', '/api/bugs').respond(200, ['red', 'blue']);
			var result = BugService.getAll();

			$httpBackend.flush();

			result.length.should.equal(2);
			result[0].should.equal('red');
			result[1].should.equal('blue');
		});
	});
	describe('getOne()', function() {
		it('should exist', function() {
			should.exist(BugService.getOne)
		});
		it('should make a GET to /api/bugs/:id', function() {
			$httpBackend.expect('GET', '/api/bugs').respond(200);
			var result = BugService.getOne();
			$httpBackend.flush();
		});
		it('should pass the param into /:id', function() {
			$httpBackend.expect('GET', '/api/bugs/5').respond(200);
			var result = BugService.getOne(5);
			$httpBackend.flush();
		});
		it('should return the result', function() {
			$httpBackend.expect('GET', '/api/bugs/3').respond(200, { name: 'test' });
			var result = BugService.getOne(3);
			$httpBackend.flush();
			should.exist(result.name);
			result.name.should.equal('test');
		});
	});
	describe('create()', function() {
		it('should exist', function() {
			should.exist(BugService.create)
		});
		it('should make a post to /api/bugs', function() {
			$httpBackend.expect('POST', '/api/bugs').respond(200);
			var result = BugService.create({ });
			$httpBackend.flush();
		});
		it('should pass the param into the body', function() {
			$httpBackend.expect('POST', '/api/bugs', { name: 'Jeremy' }).respond(200);
			var result = BugService.create({ name: 'Jeremy' });
			$httpBackend.flush();
		});
		it('should make a POST to /api/bugs, pass the parameter into the body, and then return a promise', function() {
			$httpBackend.expect('POST', '/api/bugs').respond(200);
			var result = BugService.create({  });
			$httpBackend.flush();

			should.exist(result.then);
		});
	});
	describe('update()', function() {
		it('should exist', function() {
			should.exist(BugService.update)
		});
		it('should make a PUT to /api/bugs', function() {
			$httpBackend.expect('PUT', '/api/bugs').respond(200);
			var result = BugService.update({});
			$httpBackend.flush();
		});
		it('should pass param._id into /:id', function() {
			$httpBackend.expect('PUT', '/api/bugs/5').respond(200);
			var result = BugService.update({ _id: 5 });
			$httpBackend.flush();
		});
		it('should pass the param into the body', function() {
			$httpBackend.expect('PUT', '/api/bugs/3', { _id: 3, name: 'test'}).respond(200);
			var result = BugService.update({ _id: 3, name: 'test' });
			$httpBackend.flush();
		});
		it('should return a promise', function() {
			$httpBackend.expect('PUT', '/api/bugs/3').respond(200);
			var result = BugService.update({ _id: 3 });
			$httpBackend.flush();
			should.exist(result.then);
		});
	});
	describe('remove()', function() {
		it('should exist', function() {
			should.exist(BugService.remove)
		});
		it('should make a DELETE to /api/bugs', function() {
			$httpBackend.expect('DELETE', '/api/bugs').respond(200);
			var result = BugService.remove();
			$httpBackend.flush();
		});
		it('should pass a number param into /:id', function() {
			$httpBackend.expect('DELETE', '/api/bugs/4').respond(200);
			var result = BugService.remove(4);
			$httpBackend.flush();
		});
		it('should return a promise', function() {
			$httpBackend.expect('DELETE', '/api/bugs/4').respond(200);
			var result = BugService.remove(4);
			$httpBackend.flush();
			should.exist(result.then);
		});
	});
});
