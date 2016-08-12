angular.module('practice5App')
  .service('apiService', function ($http, $q, $resource, $timeout) {
    $http.defaults.useXDomain = true;
    var baseURL = 'http://127.0.0.1:8084/';

    var api = {
      get: get,
      wait: wait
    };

    return api;

    function get(url, params) {
      var resource = $resource(baseURL + url, {}, {
        'get': {
          method: 'GET',
          cache: false
        }
      });

      return resource.get(params).$promise;
    };
    
     var serviceTimeout;

    function wait(milliseconds) {
      var defer = $q.defer();
      $timeout.cancel(serviceTimeout);
      serviceTimeout = $timeout(function () {
        defer.resolve('variable to be returned');
      }, milliseconds);
      return defer.promise;
    };
    
  });
