// Controller for the About Us page
Main.controller('FriendsCtrl', ['friendsPromise', function (friendsPromise) {
  this.test = "Hello World!";
  this.friends = friendsPromise;
}])