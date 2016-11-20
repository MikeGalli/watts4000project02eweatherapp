'use strict';

/**
 * @ngdoc function
 * @name watts4000project02eweatherappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the watts4000project02eweatherappApp
 */
angular.module('watts4000project02eweatherappApp')
.controller('ForecastCtrl', function ($scope, $routeParams, forecast, pics) {
  $scope.cityID = $routeParams.cityID;


    $scope.forecastData = forecast.query({
        cityID: $scope.cityID
    });




  ////////////////////////////////////////////
  $scope.forecastData.$promise.then(function(data){
      $scope.pics = pics.query({
          lat: data.city.coord.lat, // Note: this reference to data.lat is probably wrong and should refer to the lat value in the forecast data object.
          lon: data.city.coord.lon, // Note: see note above re: path to this data in the forecastData results
          tags: data.list[3].weather.description // Note: This will also need to be pathed correctly in the forecastData
      });
  });
  /////////////////////////////////////////////
});
