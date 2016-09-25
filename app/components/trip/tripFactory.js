// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function tripFactory($http, $q, coordFactory, calculateDistanceFactory, profileFactory) {
  var trip = {
    miles: 0,
    minutes: 0,
    startTime: 0,
    endTime: 0,
    posted: false,
    user_id: 0
  }
  
  var getCurrentTime() {
    var d = new Date();
    return d.getTime();
  }
  
  var postTripURL = 'https://driveoff.herokuapp.com/trips';
  
  //processes the miles and minutes for the trip
  //
  // returns nothing
  var processTrip = function() {
    //get positions from local storage
    var positions = coordFactory.getAllCoordinates();
    
    //calculate miles from all locations
    var len = positions.length;
    for (var i = 1; i < len; i++ ){
      miles+= calculateDistanceFactory.getDistance(positions[i-1].coords.latitude, positions[i-1].coords.latitude, positions[i].coords.latitude, positions[i].coords.latitude);
    }
    
    // calculate minutes from start and end time
    trip.minutes = endTime - startTime;
    
    // set user id
    trip.user_id = profileFactory.id;
  
  }
  
  // gets the location and adds it to the array
  //
  // returns nothing
  trip.checkLocation = function(){
    coordFactory.getCurrentPosition();
  }
  
  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns the promise
  trip.endTrip = function() {
    trip.endTime = getCurrentTime();
    processTrip();
    return $http.post(postTripURL, trip).success(function(data) {
      if (!data.error){
        trip.posted = true;
      }
    });
  }
  
  
  // begins the trip by getting the original location
  //
  // returns nothing
  trip.beginTrip = function(){
    trip.startTime = getCurrenTime();
    trip.checkLocation();
  }
  
  
  trip.sleep = function () {
    return setTimeout(function(){ }, 3000);
  }

  return trip;
}