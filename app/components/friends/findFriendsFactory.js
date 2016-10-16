// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function findFriendsFactory($http, $q) {
  var me = {
    friends: []
  }
  
  var getURL = 'https://driveoff.herokuapp.com/users';
  
  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns either the data or the promise
  me.findFriends = function(searchParams) {
    return $http.get(getURL + searchParams).success(function(data) {
      if (!data.error){
        me.friends = data;
      }
    }); 
  }

  return me;
}