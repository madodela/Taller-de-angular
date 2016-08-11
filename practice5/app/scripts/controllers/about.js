'use strict';

/**
 * @ngdoc function
 * @name practice5App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practice5App
 */
angular.module('practice5App')
  .controller('AboutCtrl', function ($scope) {
    $scope.noScopeDirectiveValue = 'no scope';
    $scope.withScopeDirectiveValue = 'scope';
    $scope.isolatedScopeDirectiveValue = 'isolated';
  });
