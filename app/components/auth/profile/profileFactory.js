function profileFactory(localStorageService) {
  
  
  
  var profile = {
    name: localStorageService.get("name"),
    email: localStorageService.get("email"),
    points: localStorageService.get("points"),
    avatar: localStorageService.get("avatar"),
    id: localStorageService.get("id")
  }
  
  var putURL = "https://driveoff.herokuapp.com/users";
  
  //TODO - add correct XHR here for updating
  
  profile.updateProfile = function() {
    
    
    
  }

  return profile;
  
}