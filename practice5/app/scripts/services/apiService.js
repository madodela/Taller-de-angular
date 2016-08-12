angular.module('practice5App')
  .service('apiService', function ($http, $q, $resource) {
    $http.defaults.useXDomain = true;
    var baseURL = 'http://127.0.0.1:8084/';

    var api = {
      get: get
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
  });
