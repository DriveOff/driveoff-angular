// Controller for the About Us page
Agstock.controller('FriendsCtrl', ['friendsPromise', function (friendsPromise) {
  this.test = "Hello World!";
  this.friends = friendsPromise.data;
}])