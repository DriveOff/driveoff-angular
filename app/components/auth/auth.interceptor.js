function AuthInterceptor($q, $injector) {
    return {
      request: function(config) {
        var localStorageService = $injector.get('localStorageService');
        var token;

        if (localStorageService.get('auth_token')) {
          token = localStorageService.get('auth_token');
        }

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      },
      responseError: function(response) {
        var localStorageService = $injector.get('localStorageService');
        // TODO: revisit for the 403
        if (response.status === 401 || response.status === 403) {
          localStorageService.unset('auth_token');
          $injector.get('$state').go('login');
        }

        return $q.reject(response);
      }
    }
  }
