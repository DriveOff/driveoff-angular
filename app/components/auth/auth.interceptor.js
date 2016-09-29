function AuthInterceptor($q, $injector, $sessionStorage) {
   
    return {
      request: function(config) {
      
        var token;

        if ($sessionStorage.auth_token) {
          token = $sessionStorage.auth_token;
        }

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      },
      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          delete $sessionStorage.auth_token;
          $injector.get('$state').go('login');
        }

        return $q.reject(response);
      }
    }
  }
