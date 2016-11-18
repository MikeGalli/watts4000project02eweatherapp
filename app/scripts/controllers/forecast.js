'use strict';

/**
 * @ngdoc function
 * @name watts4000project02eweatherappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the watts4000project02eweatherappApp
 */
angular.module('watts4000project02eweatherappApp')
.controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
  $scope.cityID = $routeParams.cityID;

  $scope.forecastData = forecast.query({
      cityID: $routeParams.cityID
  });
});
