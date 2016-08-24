describe('NavbarController', function() { 
	var ctrl;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function($controller) {
		ctrl = $controller('NavbarController', { })
	}));

	it('should exist', function() {
		should.exist(ctrl);
	});
});