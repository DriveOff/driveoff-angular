// Controller for the Friends page
Main.controller('FriendsCtrl', ['friendsPromise', 'findFriendsFactory', function (friendsPromise, findFriendsFactory) {
  this.test = "Hello World!";
  this.friends = friendsPromise.data;
  this.findFriends = findFriendsFactory.findFriends;
}])