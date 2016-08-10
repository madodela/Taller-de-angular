'use strict';

/**
 * @ngdoc overview
 * @name practice5App
 * @description
 * # practice5App
 *
 * Main module of the application.
 */
angular
  .module('practice5App', [
    'ngResource',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // Default location
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('404', { //this will be used when none of the earlier states matches.
        url: '/*path', //regex to catch all the paths
        templateUrl: '404.html'
      });
  });
