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
		vm.sortColumn = "alltime";

		vm.fetchUsers = function () {
			scoreboardService.getUserScoreboard()
				.then((data) => {
					vm.usersScores = data;
					$scope.$apply();
				});
		}

		vm.sortData = function (column) {
			$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
			$scope.sortColumn = column;
		}

		vm.getSortClass = function (column) {
			if ($scope.sortColumn == column) {
				return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
			}
			return '';
		}


		vm.fetchUsers();


	}

})();
