'use strict';

/**
 * @ngdoc function
 * @name practice5App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practice5App
 */
angular.module('practice5App')
  .controller('MainCtrl', function ($scope, taxesFactory) {
    
    $scope.getAmountWithTaxes = function(){
        return taxesFactory.getAmountWithTaxes($scope.factoryValue);
    };
    
  });
