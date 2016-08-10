'use strict';

/**
 * @ngdoc function
 * @name practice5App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practice5App
 */
angular.module('practice5App')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("about controller");
  });
