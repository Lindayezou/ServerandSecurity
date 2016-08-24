'use strict';
describe('CreateBugController', function() {
	var ctrl, $state, BugService;
	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function($controller, _$state_, _BugService_) {
		$state = _$state_;
		BugService = _BugService_;
		ctrl = $controller("CreateBugController", { $state: $state, BugService: BugService });
	}));

	it('should exist', function() {
		should.exist(ctrl);
	});
	it('should have a bug object that starts with a priority of "Low"', function() {
		should.exist(ctrl.bug);
		ctrl.bug.priority.should.equal('Low');
	});
	describe('createBug()', function() {
		it('should exist', function() {
			should.exist(ctrl.createBug);
		});
		it('should call BugService.create with this.bug as the param', function() {
			spyOn(BugService, 'create').and.returnValue({ then: function() { } });
			ctrl.bug.name = "test";
			ctrl.createBug();
			expect(BugService.create).toHaveBeenCalledWith({ priority: "Low", name: "test" });
		});
		it('should redirect to the "Home" state', function() {
			spyOn(BugService, 'create').and.returnValue({ then: function(cb) { cb() } });
			spyOn($state, 'go');
			ctrl.createBug();
			expect($state.go).toHaveBeenCalledWith('Home');
		});
	});
});