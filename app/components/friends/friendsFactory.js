// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function friendsFactory($http, $q){
  var me = {
    friends: []
  }
  
  var getURL = 'https://driveoff.herokuapp.com/users';
  // var getURL = 'data/friends.json';
  
  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns either the data or the promise
  me.ensureFriends = function() {
    if (me.friends.length == 0){
      return me.fetchFriends();
    }else {
      return $q.when(me.friends);
    }
  }
  // actually goes to fetch the friends with an $http AJAX request
  //
  // returns the promise
  me.fetchFriends = function(){
    return $http.get(getURL).success(function(data) {
      if (!data.error){
        me.friends = data;
      }
    }); 
  }

  return me;
}