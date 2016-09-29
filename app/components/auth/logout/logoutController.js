Main.controller('LogoutCtrl', ['Auth', '$state', function (Auth, $state ) {
    
  Auth.logout();
  $state.go('home');
}])