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

	Scoreboard.$inject = ['$scope','$mdDialog', 'scoreboardService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Scoreboard($scope, $mdDialog, scoreboardService) {
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

		vm.fightInfo = function(ev,username) {
			scoreboardService.postFightInfo(username)
					.then((data) => {
						let nbWin = 0;
						let nbLoose = 0;

						data.data.forEach(fight => {
							if (fight.winner === username){
								nbWin++;
							}else if (fight.looser === username){
								nbLoose++;
							}
						});

						


						$mdDialog.show(
							$mdDialog.alert()
								.parent(angular.element(document.querySelector('#popupContainer')))
								.clickOutsideToClose(true)
								.title(username +'\'s stats')
								.textContent("Win: " + nbWin + " Loose: " + nbLoose + "\n" )
								.ok('Got it!')
								.targetEvent(ev)
						);
						$scope.$apply();
					});
		}

		vm.sortData = function (column) {
			vm.reverseSort = vm.sortColumn === column ? !vm.reverseSort : false;
			vm.sortColumn = column;
		}

		vm.fetchUsers();


	}

})();
