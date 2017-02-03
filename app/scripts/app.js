'use strict';

/**
 * @ngdoc overview
 * @name watts4000project02eweatherappApp
 * @description
 * # watts4000project02eweatherappApp
 *
 * Main module of the application.
 Step 1 Browser reads compiled version of index.html
 Step 2 Browser looks here.
        What kind of app is this? --angular
        What objects does it have? --ngAnimate, ngAria....
 */
 
/* this refers to angular object from index.html
      <script src="bower_components/angular/angular.js"></script> */
angular
  .module('watts4000project02eweatherappApp', [
    //'angularGrid',
    'ngAnimate',
    'ngAria',
    'ngCookies',  //Among the Angular modules we choose to use these.
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage', // added to enable localStorage features
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/current/:cityID', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      .when('/forecast/:cityID', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
