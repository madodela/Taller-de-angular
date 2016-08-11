'use strict';

/**
 * @ngdoc directive
 * @name practice5App.directive:noScopeDir
 * @description
 * # noScopeDir
 */
angular.module('practice5App')
  .directive('noScopeDir', function () {
    return {
      templateUrl: 'scripts/directives/no-scope-dir/no-scope-dir.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log('from noScopeDirective');
      }
    };
  });
