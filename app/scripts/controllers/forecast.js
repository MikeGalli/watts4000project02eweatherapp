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

///Start Weather icons//////////
$scope.getWeatherImage = function(weatherSummary){
    var weatherImage = 'default';

    if(weatherSummary === 'Rain'){
        weatherImage = 'rain';

    } else if (weatherSummary === 'Sunny'){
        weatherImage = 'sun';

      } else if (weatherSummary === 'Clear'){
          weatherImage = 'clear';

        } else if (weatherSummary === 'Clouds'){
            weatherImage = 'clouds';

      } else if (weatherSummary === 'Snow'){
          weatherImage = 'snow';


    } //  … etc adding else if statements until you get them all…
    return weatherImage;
};
///End Weather icons//////////$("input[name*='nation']")   <img ng-src= "images/{{getWeatherImage(prediction.weather[0].main)}}" style="width:80px;">


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
