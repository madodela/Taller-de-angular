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
  })
  .controller('Practice4', function ($scope, $filter) {
    $scope.filterArray = [
      { id: 1, name: "Luis" }, 
      { id: 2, name: "María" },
      { id: 3, name: "Lucia" }, 
      { id: 4, name: "Juan" }, 
      { id: 5, name: "Sofía" }
    ];
  
    $scope.filteredArray = $filter('filter')($scope.filterArray,{name:'lu'});
  })
  .filter('bytesFormat', function () {
    return function (size) {
      if (isNaN(size))
        size = 0;
      if (size < 1024)
        return size + ' Bytes';

      size /= 1024;

      if (size < 1024)
        return size.toFixed(2) + ' Kb';

      size /= 1024;

      if (size < 1024)
        return size.toFixed(2) + ' Mb';

      size /= 1024;

      if (size < 1024)
        return size.toFixed(2) + ' Gb';

      size /= 1024;

      return size.toFixed(2) + ' Tb';
    };
  });
