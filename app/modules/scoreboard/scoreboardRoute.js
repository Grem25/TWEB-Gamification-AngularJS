'use strict';

/**
 * @ngdoc function
 * @name app.route:scoreboardRoute
 * @description
 * # scoreboardRoute
 * Route of the app
 */

angular.module('scoreboard')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.scoreboard', {
				url:'/scoreboard',
				templateUrl: 'app/modules/scoreboard/scoreboard.html',
				controller: 'ScoreboardCtrl',
				controllerAs: 'vm'
			});

		
	}]);
