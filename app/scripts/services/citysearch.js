'use strict';

/**
 * @ngdoc service
 * @name watts4000project02eweatherappApp.citysearch
 * @description
 * # citysearch
 * Factory in the watts4000project02eweatherappApp.
 */
angular.module('watts4000project02eweatherappApp')
.factory('citysearch', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f', {}, {
    find: {
      method: 'GET',
      params: {
        query: 'seattle'
      },
      isArray: false
    }
  });
});
