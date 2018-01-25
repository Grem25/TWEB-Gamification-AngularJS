(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:newuserCtrl
	* @description
	* # newuserCtrl
	* Controller of the app
	*/

  	angular
		.module('newuser')
		.controller('NewuserCtrl', Newuser);

		Newuser.$inject = ['$scope', 'newuserService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Newuser($scope, newuserService) {
			/*jshint validthis: true */
			var vm = this;

			vm.error = null;
			vm.successMessage = null;

			vm.resetError = function() {
				vm.error = null;
			}

			vm.addUserToDB = function() {
				vm.resetError();
				vm.successMessage = null;

				if (vm.newUsername && vm.newUsername.length < 35) {
					newuserService.postNewUsername(vm.newUsername)
						.then((data) => {
							console.log(data);
							if(data.data === "already stored"){
								vm.error = "Username already created";
							}else {
								vm.successMessage =  "New user added successfully";
							}
							
							$scope.$apply();
						});

					vm.newUsername = null;
				} else {
					vm.error = 'Please enter a valid username.';
				}
			}

		}

})();
