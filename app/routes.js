Main.config([
'$stateProvider',
'$urlRouterProvider',
'$httpProvider',
'localStorageServiceProvider',
function($stateProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider) {
  
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'components/home/_index.html'
    })
  
  
  
  $stateProvider
    .state('friends', {
      url: '/friends',
      templateUrl: 'components/friends/_index.html',
      controller: 'FriendsCtrl as myFriends',
      resolve: {
        friendsPromise: function(friendsFactory) {
          return friendsFactory.ensureFriends();
        }
      }
    })


    .state('rewards', {
      url: '/rewards',
      templateUrl: 'components/rewards/_index.html',
      controller: 'RewardsCtrl as myRewards',
      resolve: {
        rewardsPromise: function(rewardsFactory) {
          return rewardsFactory.ensureRewards();
        }
      }
    })
    
    .state('trip', {
      url: '/trip',
      templateUrl: 'components/trip/_index.html',
      controller: 'TripCtrl as myTrip'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'components/auth/login/_index.html',
      controller: 'LoginCtrl as Login'
    })
    
    .state('register', {
      url: '/register',
      templateUrl: 'components/auth/register/_index.html',
      controller: 'RegisterCtrl as Register'
    })

    .state('page-not-found', {
      url: '/page-not-found',
      templateUrl: 'error.html'
    })


    $urlRouterProvider.otherwise('/page-not-found');
 
 // when authentication is working, this is used to append authentication token with every request
 // also redirects to login
    $httpProvider.interceptors.push('AuthInterceptor');
    
  localStorageServiceProvider
    .setPrefix('Main')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
}]);