'use strict';

/**
 * @ngdoc service
 * @name watts4000project02eweatherappApp.forecast
 * @description
 * # forecast
 * Factory in the watts4000project02eweatherappApp.
 */
angular.module('watts4000project02eweatherappApp')
  .factory('forecast', function($resource) {
    // Service logic
    // ... 
    // 16 day forecast:http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f
    //forecast API call withOUT variables:.....
    //                http://api.openweathermap.org/data/2.5/forecast/daily?id=4717560&cnt=5&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f
    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f', {}, {
      query: {
        method: 'GET',
        params: {
          cityID: '4717560' // Paris, France ID
        },
        isArray: false
      }
    });
  });
