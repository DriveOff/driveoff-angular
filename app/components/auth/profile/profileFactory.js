function profileFactory($injector) {
  
  var localStorageService = $injector.get('localStorageService');
  
  var profile = {
    name: localStorageService.get("name"),
    email: localStorageService.get("email"),
    points: localStorageService.get("points"),
    avatar: localStorageService.get("avatar"),
    id: localStorageService.get("id"),
    errors: []
  }
  
  var putURL = "https://driveoff.herokuapp.com/users";
  
  //TODO - add correct XHR here for updating
  
  profile.updateProfile = function() {
    
    
    
  }

  return profile;
  
}