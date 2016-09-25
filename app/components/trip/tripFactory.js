// Factory that returns an object with the appropriate data
//
// $http - angular Dependency so I can make an ajax call
//
// returns an object with the data
function tripFactory($http, $q) {
  var trip = {
    miles: 0,
    minutes: 0,
    posted: false,
    locations: []
  }
  
  var postTripURL = 'https://driveoff.herokuapp.com/trips'
  
  //processes the miles and minutes for the trip
  //
  // returns nothing
  var processTrip = function(thisTrip) {
    //add code here
  }
  
  //processes the miles and minutes for the trip
  //
  // returns nothing
  var getLatLng = function() {
    //add code here
    var lat = 0;
    var lng = 0;
    return {lat, lng};
  }
  
  // checks if the reps have already been fetched; if not, fetches them
  //
  // returns the promise
  trip.endTrip = function(thisTrip) {
    processTrip(thisTrip);
    return $http.post(postTripURL, thisTrip).success(function(data) {
      if (!data.error){
        trip.posted = true;
      }
    });
  }
  
  
  // begins the trip by getting the original location
  //
  // returns nothing
  trip.beginTrip = function(){
    trip.checkLocation();
  }
  
  // gets the location and adds it to the array
  //
  // returns nothing
  trip.checkLocation = function(){
    var latLng = getLatLng();
    trip.locations.push (latLng);
  }
  
  trip.sleep = function () {
    return setTimeout(function(){ }, 3000);
  }

  return trip;
}