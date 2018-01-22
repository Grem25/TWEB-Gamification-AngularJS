'use strict';

/**
 * @ngdoc function
 * @name app.route:newuserRoute
 * @description
 * # newuserRoute
 * Route of the app
 */

angular.module('newuser')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.newuser', {
				url:'/newuser',
				templateUrl: 'app/modules/newuser/newuser.html',
				controller: 'NewuserCtrl',
				controllerAs: 'vm'
			});

		
	}]);
