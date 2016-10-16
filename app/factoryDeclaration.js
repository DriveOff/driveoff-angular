Main.factory('AuthInterceptor', AuthInterceptor);
Main.factory('Auth', Auth);
Main.factory('friendsFactory', friendsFactory);
Main.factory('findFriendsFactory', findFriendsFactory);
Main.factory('rewardsFactory', rewardsFactory);
Main.factory('coordFactory', coordFactory);
Main.factory('calculateDistanceFactory', calculateDistanceFactory);
Main.factory('tripFactory', tripFactory);
Main.factory('profileFactory', profileFactory);

Main.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    // when authentication is working, this is used to append authentication token with every request
 // also redirects to login
    $httpProvider.interceptors.push('AuthInterceptor');
  }
]);