function coordFactory(localStorageService) {
  
  var factory = {
    
  }
  
  var success = function (position) {
  
         
    var a;
    //is anything in localstorage?
    if (localStorage.getItem('positions') === null) {
        a = [];
    } else {
         // Parse the serialized data back into an array of objects
         a = JSON.parse(localStorage.getItem('positions'));
     }
     // Push the new data (whether it be an object or anything else) onto the array
     a.push(position);

     // Re-serialize the array back into a string and store it in localStorage
     localStorage.setItem('positions', JSON.stringify(a));
     

  };

  var error = function () {
      console.log = "Unable to retrieve your location";
  };
  
  
  factory.getAllCoordinates = function () {
    return  JSON.parse(localStorage.getItem('positions'));
  }

  factory.getCurrentPosition()  = function() {
    navigator.geolocation.getCurrentPosition(success, error, {timeout: 10000});
  }
 
  return factory;
      
}