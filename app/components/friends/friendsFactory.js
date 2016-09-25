// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function friendsFactory($http, $q){
  var me = {
    friends: []
  }

  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns either the reps or the promise
  me.ensureFriends = function() {
    if (me.friends.length == 0){
      return me.fetchFriends();
    }else {
      return $q.when(me.friends);
    }
  }
  // actually goes to fetch the reps with an $http AJAX request
  //
  // returns the promies
  me.fetchFriends = function(){
    return $http.get('data/friends.json').success(function(data) {
      if (!data.error){
        me.friends = data;
      }
    }); 
  }

  return me;
}