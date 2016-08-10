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
    .state('about.example1', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/view1.html'
          },
          aboutFooter: {
            templateUrl: 'views/view2.html'
          }
        }
      }).state('about.example2', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/view2.html'
          },
          aboutFooter: {
            templateUrl: 'views/view3.html'
          }
        }
      }).state('about.example3', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/view3.html'
          },
          aboutFooter: {
            templateUrl: 'views/view4.html'
          }
        }
      }).state('about.example4', {
        parent: 'about',
        views: {
          aboutContent: {
            templateUrl: 'views/view4.html'
          },
          aboutFooter: {
            templateUrl: 'views/view1.html'
          }
        }
      })
      .state('404', { //this will be used when none of the earlier states matches.
        url: '/*path', //regex to catch all the paths
        templateUrl: '404.html'
      });
  });
