(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:newuserTest
	 * @description
	 * # newuserTest
	 * Test of the app
	 */

	describe('newuser test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('gamification');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('NewuserCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
