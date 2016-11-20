'use strict';

/**
 * @ngdoc function
 * @name watts4000project02eweatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watts4000project02eweatherappApp
 */
angular.module('watts4000project02eweatherappApp')
.controller('MainCtrl', function ($scope, citysearch, $localStorage) {
  $scope.citiesFound = citysearch.find();
  $scope.storage = $localStorage;

  $scope.findCities = function(){
      $scope.citiesFound = citysearch.find({
          query: $scope.location
      });
      $scope.searchQuery = $scope.location;
  };
});
