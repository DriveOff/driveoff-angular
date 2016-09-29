function profileFactory($sessionStorage) {
  
  var localStorageService = $sessionStorage;
  
  var profile = {
    name: localStorageService.name,
    email: localStorageService.email,
    points: localStorageService.points,
    avatar: localStorageService.avatar,
    id: localStorageService.id,
    errors: []
  }
  
  var putURL = "https://driveoff.herokuapp.com/users";
  
  //TODO - add correct XHR here for updating
  
  profile.updateProfile = function() {
    
    
    
  }

  return profile;
  
}