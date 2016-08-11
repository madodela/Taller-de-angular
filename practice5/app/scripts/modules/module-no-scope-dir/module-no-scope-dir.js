'use strict';

/**
 * @ngdoc directive
 * @name practice5App.directive:moduleNoScopeDir
 * @description
 * # moduleNoScopeDir
 */
angular.module('moduleNoScopeDir', [])
  .directive('moduleNoScopeDir', function () {
    return {
      templateUrl: 'scripts/modules/module-no-scope-dir/module-no-scope-dir.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log('from moduleNoScopeDirective');
      }
    };
  });
