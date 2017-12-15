(function() {
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

		Scoreboard.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Scoreboard() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
