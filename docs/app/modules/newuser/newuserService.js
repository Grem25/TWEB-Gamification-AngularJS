(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:newuserService
	 * @description
	 * # newuserService
	 * Service of the app
	 */

  	angular
		.module('newuser')
		.factory('newuserService', Newuser);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Newuser.$inject = ['$http'];

		function Newuser ($http) {

			return {
				postNewUsername: function (username) {
					return new Promise((resolve) => {
						
						$http({
							method: 'POST',
							url: 'https://fierce-sierra-52540.herokuapp.com/user',
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
