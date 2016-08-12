'use strict';

/**
 * @ngdoc directive
 * @name practice5App.directive:moduleNoScopeDir
 * @description
 * # moduleNoScopeDir
 * Compile & link cannot coexists, it should be only one
 * The order of run is:
 *   1. Compile
 *   2. Controller
 *   2. Link (preLink, postLink)
 */
angular.module('moduleNoScopeDir', [])
  .directive('moduleNoScopeDir', function () {
    return {
      templateUrl: 'scripts/modules/module-no-scope-dir/module-no-scope-dir.html',
      replace: true,
      restrict: 'E',
      controller: function () {
        console.log('directive controller');
      },
      compile: function compile() {
        console.log('directive compile');
          return {
            pre: function prelink(scope, elem, attr) {
              console.log('directive compile pre');
            },
            post: function postlink(scope, elem, attr) {
              console.log('directive compile post');
            }
          }
        },
       /* link: function link() {
            console.log('directive link');
        }*/
    };
  });
