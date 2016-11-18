'use strict';

/**
 * @ngdoc service
 * @name watts4000project02eweatherappApp.current
 * @description
 * # current
 * Factory in the watts4000project02eweatherappApp.
 */
angular.module('watts4000project02eweatherappApp')
.factory('current', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});
