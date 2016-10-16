function Auth($http, $sessionStorage) {
  
  // var API_URL = 'https://driveoff.herokuapp.com'
  var API_URL = 'http://localhost:3000';

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
// creates a FormData JS object with appended values from obj
  //
  // obj - JSON object
  //
  // returns FormData object
  
    register: function(formData) {
      delete $sessionStorage.auth_token;
      // var req = {
      //    method: 'POST',
      //    url: API_URL + '/users',
      //    headers: {'Content-Type': undefined},
      //    data: {
      //     "user": formData
      //    }
      // }

      //   function createFormData (obj) {
      //   var fd = new FormData();
      //   for (prop in obj) {
      //       if (obj.hasOwnProperty(prop)) {
      //           // do something with data[prop]
      //           fd.append(prop, obj[prop]);
      //       }
      //   }
      //   // fd.append("user", JSON.stringify(obj));
      //   return fd;
      // }

      
      return $http.post(API_URL + '/users', JSON.stringify({"user": formData}), 
      {
        transformRequest: angular.identity,
        headers: {'Content-Type': 'application/json'}
       }).then(function(result) {
          $sessionStorage.auth_token = result.token;
       });
    }
  }
}