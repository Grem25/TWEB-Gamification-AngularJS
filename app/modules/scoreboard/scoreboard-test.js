(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:scoreboardTest
	 * @description
	 * # scoreboardTest
	 * Test of the app
	 */

	describe('scoreboard test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('gamification');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ScoreboardCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
