Main.controller('LoginCtrl', ['Auth', '$state', '$scope', function (Auth, $state, $scope ) {
    var vm = this;
    vm.errors = [];

    vm.login = function() {
      if ($scope.loginForm.$valid) {
        vm.errors = [];
        Auth.login(vm.user).success(function() {
          $state.go('profile');
        }).error(function(err) {
          vm.errors.push(err);
        });
      }
    };
    
    vm.validatePassword = function () {
      
    }
    
}])