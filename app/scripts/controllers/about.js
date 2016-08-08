/*'use strict';*/

/**
 * @ngdoc function
 * @name practice1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practice1App
 */
angular.module('practice1App')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.name = 'Loli';
    
    this.clickParent = function(e) {
        e.stopImmediatePropagation();
        alert('Parent clicked');
    };
    
    this.clickChild = function(e) {
        e.stopImmediatePropagation();
        alert('child clicked: '+ this.name);
    };
    
    /*ng-change example*/
    this.removeSpaces = function(){
        this.url = $scope.url.replace(/\s+/g,'-');
    };

    /* ng-options example*/
    this.people=[{id:1, name: "Luis"},{id:2, name: "María"}];
    
    this.selectedPerson = this.people[0].id;
    
    $scope.test = 'test';
    global = $scope;
  });

/*Outside angular environment*/
function onClickNotWork(event){
  event.stopImmediatePropagation();
  alert(typeof $scope);
}

function onClickFromOutside(event){
  event.stopImmediatePropagation();
  global.$apply(function(){
    alert(global.test);
  });
}