// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function rewardsFactory($http, $q, $filter, profileFactory){
  var me = {
    rewards: [],
    points: profileFactory.points
  }
  
  var postURL = 'https://driveoff.herokuapp.com/redemptions';
  // var getURL = 'https://driveoff.herokuapp.com/rewards'
  
  var getURL = 'https://driveoff.herokuapp.com/rewards'
  // var getURL = 'data/rewards.json';
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
    return $http.get(getURL).success(function(data) {
      if (!data.error){
        me.rewards = data;
      }
    }); 
  }
  
  // NOTE: never call this method unless you have already ensured that the data exists
  // sends post request and updates rewards array to remove the award redeemed
  //
  // object id
  //
  // returns the JSON object
  me.chooseReward = function(id){
    var reward = $filter('filter')(me.rewards, function(obj) {return obj.id === id;})[0];
    return $http.post(postURL, reward).success(function(data) {
      if (!data.error){
        me.rewards = me.rewards.splice(id, 1);
        profileFactory.points = profileFactory.points - reward.c;
        me.points = profileFactory.points;
      }
    })
      
  }

  return me;
}