function Auth($http, $sessionStorage) {
  
  var API_URL = 'https://driveoff.herokuapp.com'

  return {
    isAuthenticated: function() {
      return $sessionStorage.auth_token;
    },
    
    login: function(credentials) {
      var login = $http.post(API_URL + '/login', credentials);
        login.success(function(result) {
          $sessionStorage.auth_token = result.token;
          var user = { 
            id: result.id, 
            name: result.name,
            avatar: result.avatar,
            points: result.points,
            email: result.email
          }
          $sessionStorage.user = JSON.stringify(user); 
        });

        return login;
    },
    
    logout: function(){
      delete $sessionStorage.auth_token;
      delete $sessionStorage.user;
    },

    register: function(formData) {
      delete $sessionStorage.auth_token;
      var register = $http.post(API_URL + '/users', formData);
      register.success(function(result) {
        $sessionStorage.auth_token = result.token;
      });

      return register;
    }
  }
}