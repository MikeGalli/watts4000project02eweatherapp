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
/*
    EXPLAINATION OF HOW THE FUNCTION BELOW WORKS
getWeatherImage is a function that ends up returning 1 value, weatherSummary.
  Then, it uses that value to decide the value of weatherImage.
What is weatherSummary?
Right now, it's an unknown value.
Only after applying this function in the HTML, is it possible to get an idea of
what the value/s may be.
The HTML reads:  <img ng-src= "images/{{getWeatherImage(prediction.weather[0].main)}}" style="width:80px;">
Look at the function below. First we're looking for what's in the parenthesis ()
    weatherSummary

The function isn't going to do anything till we call it and we do that in the HTML
Look at the HTML. What's inside the(), is code that will return data values that we know
are descriptions of weather: Rain, Clear....

getWeatherImage is looking for a value inside the parenthesis ()
    So... What's in here now? - (prediction.weather[0].main)
    If you look at data from OWM, this value will be Rain or Clear or....
    So... weatherSummary = a single word: Rain, or Clear ...
    The rest of the function says Once you know the value of weatherSummary:
      Go through the if else statments and find a value for weatherImage,
      then go to the HTML and replace all of this: {{getWeatherImage(prediction.weather[0].main)}}
        with the name of that image.
*/
///Start Weather icons//////////
$scope.getWeatherImage = function(weatherSummary){
    var weatherImage = "default.gif";
    if(weatherSummary == "Rain"){
        weatherImage = "rain.gif";
    } else if (weatherSummary == "Sunny"){
        weatherImage = "sun.gif";

      } else if (weatherSummary == "Snow"){
          weatherImage = "snow.gif";

        } else if (weatherSummary == "Clouds"){
            weatherImage = "cloud.gif";
    } //  … etc adding else if statements until you get them all…
    return weatherImage;
}
///End Weather icons//////////


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
