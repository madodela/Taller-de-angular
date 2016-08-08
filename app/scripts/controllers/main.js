'use strict';

/**
 * @ngdoc function
 * @name practice1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practice1App
 */
angular.module('practice1App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('TestCtrl1', function() {
    this.source = 'From TestCtrl1';
  })
  .controller('TestCtrl2', function($scope){
    $scope.source = 'From TestCtrl2';
  })
    /*Trying nested scopes*/
  .controller('NestedCtrl1', function($scope){
    $scope.source = 'Grandpa!';
  })
  .controller('NestedCtrl2', function($scope){
    $scope.source = 'Dad!';
  })
  .controller('NestedCtrl3', function($scope){
    $scope.source = 'I am just a kid';
  })
    /*Nested using controller as syntax */
 .controller('NestedCtrl4', function(){
    this.source = 'Grandpa!';
  })
  .controller('NestedCtrl5', function(){
    this.source = 'Dad!';
  })
  .controller('NestedCtrl6', function(){
    this.source = 'I am just a kid';
  });
