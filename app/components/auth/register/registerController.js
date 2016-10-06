Main.controller('RegisterCtrl', ['Auth', '$state', '$scope', function (Auth, $state, $scope ) {
    var vm = this;
    vm.errors = [];

    vm.register = function() {
      // if ($scope.registerForm.$valid) {
        Auth.register(vm.user).then(function() {
          $state.go('profile');
        }, function(err) {
          vm.errors.push(err.data);
        });
      // }
    };
    
    vm.validatePassword = function() {
      return vm.password == vm.password_confirmation;
    };
    
}])