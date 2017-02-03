'use strict';

/**
variables in this file:
                citysearch    comes from service citysearch
                find          comes from service citysearch = the value of query
                query         comes from service citysearch
                localStorage
                citiesFound
                storage


 * @ngdoc function
 * @name watts4000project02eweatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watts4000project02eweatherappApp
 */
angular.module('watts4000project02eweatherappApp')
  .controller('MainCtrl', function($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function() {
      $scope.citiesFound = citysearch.find({
        query: $scope.location
      });
      $scope.searchQuery = $scope.location;
    };
  });
