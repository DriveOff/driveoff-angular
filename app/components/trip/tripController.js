// Controller for the Trip component
// Trip does not require any data, except to know how to collect and send the data from the user to the back end
Main.controller('TripCtrl', ['tripFactory', function (tripFactory) {
  this.test = "Hello World!";
  this.endTrip = tripFactory.endTrip;
  this.beginTrip = tripFactory.beginTrip;
  this.checkLocation = tripFactory.checkLocation;
  this.sleep = tripFactory.sleep;
  this.service = tripFactory;

  
}])
