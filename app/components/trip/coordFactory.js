function coordFactory() {
  
  var factory = {
    positions: []
  }
  
  var success = function (position) {
     // Push the new data (whether it be an object or anything else) onto the array
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var timestamp = position.coords.timestamp;
    
    
    factory.positions.push({"latitude": latitude, "longitude": longitude, "timestamp": timestamp});
     // Re-serialize the array back into a string and store it in localStorage
     

  };

  var error = function () {
      console.log = "Unable to retrieve your location";
  };
  
  
  factory.getAllCoordinates = function () {
    return factory.positions;
  }

  factory.getCurrentPosition = function (callback) {
    navigator.geolocation.getCurrentPosition(success, error, callback);
  }
 
  return factory;
      
}