'use strict';

/**
 * @ngdoc function
 * @name watts4000project02eweatherappApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the watts4000project02eweatherappApp
 */
angular.module('watts4000project02eweatherappApp')
.controller('CurrentCtrl', function ($scope, $routeParams, current) {
  $scope.cityID = $routeParams.cityID;

  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
  });
});
