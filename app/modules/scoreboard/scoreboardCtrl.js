(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:scoreboardCtrl
	* @description
	* # scoreboardCtrl
	* Controller of the app
	*/

	angular
		.module('scoreboard')
		.controller('ScoreboardCtrl', Scoreboard);

	Scoreboard.$inject = ['$scope', 'scoreboardService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Scoreboard($scope, scoreboardService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = 'Scoreboard';
		vm.reverseSort = true;
		vm.sortColumn = "currentXP";

		vm.fetchUsers = function () {
			scoreboardService.getUserScoreboard()
				.then((data) => {
					vm.usersScores = data;
					$scope.$apply();
				});
		}

		vm.fightLauncher = function(username) {
		
			scoreboardService.postFight(username)
					.then((data) => {
						vm.fetchUsers();
						$scope.$apply();
					});
		}

		vm.sortData = function (column) {
			vm.reverseSort = vm.sortColumn === column ? !vm.reverseSort : false;
			vm.sortColumn = column;
		}

		vm.getSortClass = function (column) {
			return vm.sortColumn === column ? 
			(vm.reverseSort ? 'fa-caret-up' : 'fa-caret-down') : '';
		}


		vm.fetchUsers();


	}

})();
