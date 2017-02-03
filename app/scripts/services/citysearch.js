'use strict';

/**
variables in this file:
                find = the value of query
                query
                citysearch
                $resource=resource object=the value of query?
 * @ngdoc service
 * @name watts4000project02eweatherappApp.citysearch
 * @description
 * # citysearch
 * Factory in the watts4000project02eweatherappApp.
 */
angular.module('watts4000project02eweatherappApp')
  .factory('citysearch', function($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f', {}, {
      find: {         //find is a variable placeholder for:  find?q=:query
        method: 'GET',
        params: {
          query: 'seattle' //query is a variable placeholder for: find?q=:query
        },
        isArray: false
      }
    });
  });
