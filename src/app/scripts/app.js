'use strict';

/**
 * @ngdoc overview
 * @name zenoyugithubioApp
 * @description
 * # zenoyugithubioApp
 *
 * Main module of the application.
 */
angular
  .module('zenoyugithubioApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
