'use strict';

/**
 * @ngdoc directive
 * @name practice5App.directive:withScopeDir
 * @description
 * # withScopeDir
 */
angular.module('practice5App')
  .directive('withScopeDir', function () {
    return {
      templateUrl: 'scripts/directives/with-scope-dir/with-scope-dir.html',
      replace: true,
      scope: true,
      restrict: 'E',
      link: function (scope, element, attrs) {
        console.log('from withScopeDirective');
      }
    };
  });
