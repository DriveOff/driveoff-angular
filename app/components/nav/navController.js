// Controller for the About Us page
Nav.controller('NavCtrl', ['$location', function NavCtrl($location, $scope) {
  this.page = $location.path();
 }])