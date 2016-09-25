// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function rewardsFactory($http, $q){
  var me = {
    rewards: []
  }

  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns either the data or the promise
  me.ensureRewards = function() {
    if (me.rewards.length == 0){
      return me.fetchRewards();
    }else {
      return $q.when(me.rewards);
    }
  }
  // actually goes to fetch the rewards with an $http AJAX request
  //
  // returns the promise
  me.fetchRewards = function(){
    return $http.get('data/rewards.json').success(function(data) {
      if (!data.error){
        me.rewards = data;
      }
    }); 
  }

  return me;
}