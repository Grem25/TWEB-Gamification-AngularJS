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
		.controller('ScoreboardCtrl', Scoreboard)
		.directive('donut', function () {
			return {
				restrict: 'E',
				controller: Scoreboard,
        controllerAs: 'vm',
				link: function (scope, element) {
					//custom colors          
					var color = d3.scaleOrdinal()
						.range(["red", "blue"]);
					var width = 300;
					var height = 300;
					var pie = d3.pie().sort(null);
					var arc = d3.arc()
						.outerRadius(width / 2 * 0.9)
						.innerRadius(width / 2 * 0.5)
					var svg = d3.select(element[0]).append('svg')
						.attr("width", width)
						.attr("height", height)
						.append("g")
						.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
					
					// Remove the possibly already-existing paths of the chart, then draw the new ones based
					// on the given parameter.
					function buildPaths(data) {
						svg.selectAll('path').remove();
						svg.selectAll('path').data(pie(data))
						.enter().append('path')
						.style('stroke', 'white')
						.attr('d', arc)
						.attr('fill', function (d, i) { return color(i) });
					}

					// Watch the controller's context in order to trigger when on of its attributes changes.
					scope.$watchCollection('vm', (newVm, oldVm) => {
						// Redraw the chart's paths if the number of wins or defeats changed.
						if (newVm.nbWin !== oldVm.nbWin || newVm.nbLoose !== oldVm.nbLoose) {
							// add the <path>s for each arc slice
							buildPaths([newVm.nbWin, newVm.nbLoose]);
						}
					});
				}
			}

		});

	Scoreboard.$inject = ['$scope', '$mdDialog', 'scoreboardService'];

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
		vm.nbWin = 40;
		vm.nbLoose = 40;
		vm.username = '';

		vm.fetchUsers = function () {
			scoreboardService.getUserScoreboard()
				.then((data) => {
					vm.usersScores = data;
					$scope.$apply();
				});
		}

		vm.fightLauncher = function (username) {
			scoreboardService.postFight(username)
				.then((data) => {
					vm.fetchUsers();
					$scope.$apply();
				});
		}

		vm.fightInfo = function (ev, username) {
			scoreboardService.postFightInfo(username)
				.then((data) => {
					vm.nbLoose = 0;
					vm.nbWin = 0;
					data.data.forEach(fight => {
						if (fight.winner === username) {
							vm.nbWin++;
						} else if (fight.looser === username) {
							vm.nbLoose++;
						}
					});
					$scope.$apply();
					vm.username = username;

					$mdDialog.show({
						contentElement: '#myDialog',
						parent: angular.element(document.body),
						targetEvent: ev,
						clickOutsideToClose: true
					});

					/*
					$mdDialog.show(
						$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.clickOutsideToClose(true)
							.title(username +'\'s stats')
							.textContent("<code>Win: " + nbWin + " Loose: " + nbLoose + "</code>\n" )
							.ok('Got it!')
							.targetEvent(ev)
					);*/


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
