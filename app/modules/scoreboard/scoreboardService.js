(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:scoreboardService
	 * @description
	 * # scoreboardService
	 * Service of the app
	 */

  	angular
		.module('scoreboard')
		.factory('ScoreboardService', Scoreboard);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Scoreboard.$inject = ['$http'];

		function Scoreboard ($http) {

		}

})();
