// Controller for the Friends page
Main.controller('FriendsCtrl', ['friendsFactory', 'findFriendsFactory', function (friendsFactory, findFriendsFactory) {
  this.test = "Hello World!";
  this.friends = friendsFactory.friends;
  this.findFriends = findFriendsFactory.findFriends;
  this.pointsAll = false;
  this.points = "points_all_time"
  this.togglePoints = function () {
    this.pointsAll = !this.pointsAll;
    if (this.points == 'points_all_time') {
    this.points = "points_this_week"
    } else {
      this.points = "points_all_time"      
    }
  };  
}])