namespace app {
  angular.module('app', ['ui.router', 'ngResource'])
    .config((
      $locationProvider: ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $stateProvider: ng.ui.IStateProvider
    ) => {
      $stateProvider
  			.state('Create Bug', {
  				url: '/bug/create',
  				templateUrl: '/client/templates/create.bug.html',
  				controller: 'CreateBugController as vm'
  			})
  			.state('Update Bug', {
  				url: '/bug/edit/:id',
  				templateUrl: '/client/templates/edit.bug.html',
  				controller: 'EditBugController as vm'
  			})
        .state('Home', {
    			url: '/',
    			templateUrl: '/client/templates/home.html',
    			controller: 'HomeController as vm'
    		})

      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
    })
}
