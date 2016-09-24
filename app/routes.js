Agstock.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('sign-in', {
      url: '',
      views: {
        'main': {
          templateUrl: 'components/slider/_index.html',
          controller: 'SliderCtrl as slider',
        },
        '': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/reps/_index.html',
          controller: 'AboutUsCtrl as about',
          resolve: {
            repsPromise: function(aboutUs) {
              return aboutUs.ensureReps();
            }
          }
        },
      }
    })

    .state('friends', {
      url: '/companies',
      views: {
        'main': {
          templateUrl: 'components/google_map/_index.html',
          controller: 'MapAllCtrl as map',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        }
      }
    })    

    .state('rewards', {
      url: '/companies',
      views: {
        'main': {
          templateUrl: 'components/google_map/_index.html',
          controller: 'MapAllCtrl as map',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        }
      }
    })    

    .state('', {
      url: '/companies',
      views: {
        'main': {
          templateUrl: 'components/google_map/_index.html',
          controller: 'MapAllCtrl as map',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        },
        'second': {
          templateUrl: 'components/companies/_index_finished.html',
          controller: 'CompaniesCtrl as home',
          resolve: {
            companiesPromise: function(companyFactory) {
            return companyFactory.ensureCompanies();
            }
          }
        }
      }
    })    

    .state('page-not-found', {
      url: '/page-not-found',
      templateUrl: 'error.html'
    })


 $urlRouterProvider.otherwise('/page-not-found');

}]);