// Controller for the Rewards page
Main.controller('ProfileCtrl', ['profileFactory', function (profileFactory) {
  this.test = "Hello World!";
  this.profile = profileFactory;
}])