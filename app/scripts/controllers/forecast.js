'use strict';

/**
 * @ngdoc function
 * @name watts4000project02eweatherappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the watts4000project02eweatherappApp
 */
angular.module('watts4000project02eweatherappApp')
  .controller('ForecastCtrl', function($scope, $routeParams, forecast, pics) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
      cityID: $scope.cityID
    });
 
    ///Start Weather icons//////////
    $scope.getWeatherImage = function(weatherSummary) {
      var weatherImage = 'default';

      if (weatherSummary === 'Rain') {
        weatherImage = 'rain';

      } else if (weatherSummary === 'Sunny') {
        weatherImage = 'sun';

      } else if (weatherSummary === 'Clear') {
        weatherImage = 'clear';

      } else if (weatherSummary === 'Clouds') {
        weatherImage = 'clouds';

      } else if (weatherSummary === 'Snow') {
        weatherImage = 'snow';

      } //  … etc adding else if statements until you get them all…
      return weatherImage;
    };
    ///End Weather icons//////////

    $scope.forecastData.$promise.then(function(data) {
      $scope.pics = pics.query({
        lat: data.city.coord.lat, //
        lon: data.city.coord.lon, //
        tags: data.list[3].weather.description //
      });
    });
  });
