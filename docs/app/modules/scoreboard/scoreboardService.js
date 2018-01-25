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
					$http.get("https://fierce-sierra-52540.herokuapp.com/scoreboard")
						.then(function (response) {
							userScore = response.data;
							// send back userScore
							resolve(userScore);
						});


				});

			},

			postFight: function (username) {
				return new Promise((resolve) => {
					
					$http({
						method: 'POST',
						url: 'https://fierce-sierra-52540.herokuapp.com/battle',
						headers: {
							'Content-Type': 'application/json'
						},
						data: {
							user1:username
						}
					}).then((res) => {
						resolve(res);
					});	


				});

			},

			postFightInfo: function (username) {
				return new Promise((resolve) => {
					
					$http({
						method: 'POST',
						url: 'https://fierce-sierra-52540.herokuapp.com/historyfights',
						headers: {
							'Content-Type': 'application/json'
						},
						data: {
							username
						}
					}).then((res) => {
						resolve(res);
					});	


				});

			}
		}
	}

})();
