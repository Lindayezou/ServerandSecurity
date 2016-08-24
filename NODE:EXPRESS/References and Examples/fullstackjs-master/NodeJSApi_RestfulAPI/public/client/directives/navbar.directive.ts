namespace app.directives {
	angular.module('app').directive('navbar', () => {
		return {
			templateUrl: '/client/templates/navbar.html',
			controller: 'NavbarController as nav'
		}
	});
}