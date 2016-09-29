Main.config([
'$stateProvider',
'$urlRouterProvider',
'$httpProvider',
function($stateProvider, $urlRouterProvider, $httpProvider) {
  
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'components/home/_index.html'
    })
  
  $stateProvider
    .state('profile', {
      url: '/profile',
      templateUrl: 'components/auth/profile/_index.html',
      controller: 'ProfileCtrl as myProfile'
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
      controller: 'LoginCtrl as loginCtrl'
    })
    
    .state('logout', {
      url:  '/logout',
      controller: 'LogoutCtrl as logout',
    }
    
    .state('register', {
      url: '/register',
      templateUrl: 'components/auth/register/_index.html',
      controller: 'RegisterCtrl as registerCtrl'
    })

    .state('page-not-found', {
      url: '/page-not-found',
      templateUrl: 'error.html'
    })


    $urlRouterProvider.otherwise('/page-not-found');
 
 // when authentication is working, this is used to append authentication token with every request
 // also redirects to login
    $httpProvider.interceptors.push('AuthInterceptor');
    
}]).
  run(function($rootScope, $location) {
    $rootScope.$watch(function() {
      console.log("works");
    /* Add class to body */
      var page = $location.path();
      if (page == '') {
        var state_name = 'home';
      } else {
        var state_name = page.replace(/\//g, '');
      }
      $('body').removeAttr('class');
      $('body').addClass(state_name);
  
      /* Sticky footer */
      var $window = $(window),
          $main = $('.main-section'),
          $footer = $('#footer');
  
      var pushFooterDown = function() {
        $main.css('min-height', '');

        windowHeight = $window.height();
        mainHeight = $main.outerHeight();
        mainTop = $main.offset().top;
        footerHeight = $footer.outerHeight();

        mainMinHeight = windowHeight - mainTop - footerHeight;

        if (mainHeight < mainMinHeight) {
          $main.css('min-height', mainMinHeight);
        }
      }

      pushFooterDown();
      $window.resize(pushFooterDown);
  })
});;