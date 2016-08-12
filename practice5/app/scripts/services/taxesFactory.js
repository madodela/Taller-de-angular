'use strict';

/**
 * @ngdoc service
 * @name practice5App.taxesFactory
 * @description
 * # taxesFactory
 * Factory in the practice5App.
 */
angular.module('practice5App')
  .factory('taxesFactory', function () {
    var percentOfTaxes = 16;

    function getAmountWithTaxes(amount) {
      if (isNaN(amount)) {
        return 0;
      }
      return amount * (1 + (percentOfTaxes / 100));
    }

    return {
      getAmountWithTaxes: getAmountWithTaxes
    };
  });
