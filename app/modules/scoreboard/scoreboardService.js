(function () {
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
		.factory('scoreboardService', Scoreboard);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Scoreboard.$inject = ['$http'];

	function Scoreboard($http) {
		let userScore = [];

		return {
			getUserScoreboard: function () {
				return new Promise((resolve) => {

					// fetch userScore from our API
					$http.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
						.then(function (response) {
							userScore = response.data;
							// send back userScore
							resolve(userScore);
						});


				});

			}
		}
	}

})();
