function profileFactory(localStorageService) {
  
  var profile = {
    name: localStorageService.get("name"),
    email: localStorageService.get("email"),
    points: localStorageService.get("points"),
    avatar: localStorageService.get("avatar"),
    id: localStorageService.get("id")
  }

  return profile;
  
}