'use strict';

/**
 * @ngdoc directive
 * @name practice5App.directive:isolatedScopeDir
 * @description
 * # isolatedScopeDir
 */
angular.module('practice5App')
  .directive('isolatedScopeDir', function () {
    return {
      templateUrl: 'scripts/directives/isolated-scope-dir/isolated-scope-dir.html',
      replace: true,
      scope: {
        'isolatedValue': '&'
      },
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.isolatedValue = scope.isolatedValue();
      }
    };
  });
