"use strict";
describe("EditBugController", function() {
	var $controller, $stateParams, $state, BugService;
	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(_$controller_, _$stateParams_, _$state_, _BugService_) {
		$controller = _$controller_;
		$stateParams = _$stateParams_;
		$state = _$state_;
		BugService = _BugService_;
	}));

	it('should exist', function() {
		var ctrl = $controller('EditBugController', { });
		should.exist(ctrl);
	});
	describe('constructor()', function() {
		it('should redirect to the home state if there are no stateParams', function() {
			spyOn($state, 'go');
			var ctrl = $controller('EditBugController', { $state: $state, $stateParams: $stateParams, BugService: BugService });
			expect($state.go).toHaveBeenCalledWith('Home');
		});
		it('should call BugService.getOne(:id) if there is a stateParam, and not change states', function() {
			spyOn(BugService, 'getOne');
			spyOn($state, 'go');
			$stateParams.id = "5";
			var ctrl = $controller('EditBugController', { $state: $state, $stateParams: $stateParams, BugService: BugService });
			expect(BugService.getOne).toHaveBeenCalledWith('5');
			expect($state.go).not.toHaveBeenCalled();
		});
		it('should put the value of BugService.getOne into this.bug', function() {
			spyOn(BugService, 'getOne').and.returnValue("test");
			$stateParams.id = "5";
			var ctrl = $controller('EditBugController', { $state: $state, $stateParams: $stateParams, BugService: BugService });
			ctrl.bug.should.equal('test');
		});
	});
	describe('edit()', function() {
		var ctrl;
		beforeEach(function() {
			ctrl = $controller('EditBugController', { $state: $state, $stateParams: $stateParams, BugService: BugService });
		});
		it('should exist', function() {
			should.exist(ctrl.edit);
		});
		it('should pass this.bug into BugService.update', function() {
			ctrl.bug = "test";
			spyOn(BugService, 'update').and.returnValue({ then: function() { }});
			ctrl.edit();
			expect(BugService.update).toHaveBeenCalledWith("test");
		});
		it('should redirect to the home state', function() {
			spyOn(BugService, 'update').and.returnValue({ then: function(cb) { cb() }});
			spyOn($state, 'go');
			ctrl.edit();
			expect($state.go).toHaveBeenCalledWith('Home');
		});
	});
});