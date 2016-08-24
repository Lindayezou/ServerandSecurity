describe('HomeController', function() {
	var BugService, $controller, ctrl;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(_$controller_, _BugService_) {
		BugService = _BugService_;
		$controller = _$controller_;

		spyOn(BugService, 'getAll').and.returnValue(["red", "blue"]);

		ctrl = $controller('HomeController', { BugService: BugService });
	}));

	it('should exist', function() {
		should.exist(ctrl);
	});

	describe('contructor', function() {
		it('should have called BugService.getAll() on load', function() {
			expect(BugService.getAll).toHaveBeenCalled();
		});
		it('should attach bugs to this.bugs', function() {
			ctrl.bugs.should.eql(['red', 'blue']);
		});
	});

	describe('deleteBug()', function() {
		beforeEach(function() {})

		it('should exist', function() {
			should.exist(ctrl.deleteBug);
		});
		it('should pass the ._id into BugService.remove', function() {
			var o = { _id: 3 };
			spyOn(BugService, 'remove').and.returnValue({ then: function() { }});
			ctrl.deleteBug(o);
			expect(BugService.remove).toHaveBeenCalledWith(3);
		});
		it('should remove the bug from the bugs array', function() {
			var o = { _id: 3 };
			ctrl.bugs = [ o ];
			spyOn(BugService, 'remove').and.returnValue({ then: function(cb) { cb() }});
			ctrl.deleteBug(o);
			ctrl.bugs.length.should.equal(0);
		});
	});
});