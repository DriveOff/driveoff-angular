// Controller for the Friends page
Main.controller('FriendsCtrl', ['friendsPromise', function (friendsPromise) {
  this.test = "Hello World!";
  this.friends = friendsPromise.data;
  // this.findFriends = findFriendsFactory.findFriends;
}])