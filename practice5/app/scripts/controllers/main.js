'use strict';

/**
 * @ngdoc function
 * @name practice5App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practice5App
 */
angular.module('practice5App')
  .controller('MainCtrl', function ($scope, taxesFactory, apiService) {
    
    $scope.getAmountWithTaxes = function(){
        return taxesFactory.getAmountWithTaxes($scope.factoryValue);
    };
    
    apiService.get('users/', {}).then(function(response){
        $scope.users = response.data;
    });
    
  });
