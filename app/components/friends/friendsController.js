// Controller for the Friends page
Main.controller('FriendsCtrl', ['friendsPromise', 'findFriendsFactory', function (friendsPromise, findFriendsFactory) {
  this.test = "Hello World!";
  this.friends = friendsPromise.data;
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