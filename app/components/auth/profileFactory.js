function profileFactory($http, $q) {
  
  var profile = {
    loggedIn: false,
    userName: '',
    points: 0
  }

  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns either the data or the promise
  profile.ensureProfile = function() {
    if (!profile.loggedIn){
      return profile.login();
    }else {
      return $q.when(me.rewards);
    }
  }
  // actually goes to fetch the rewards with an $http AJAX request
  //
  // returns the promise
  profile.login = function(){
    return $http.get('data/rewards.json').success(function(data) {
      if (!data.error){
        profile.loggedIn = true;
      }
    }); 
  }

  return profile;
  
}