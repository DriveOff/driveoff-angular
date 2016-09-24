// Controller for the About Us page
Nav.controller('NavCtrl', ['$location', function NavCtrl($location) {
  this.page = $location.path();
 }])