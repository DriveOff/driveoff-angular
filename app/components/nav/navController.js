// Controller for the About Us page
Nav.controller('NavCtrl', ['$location', '$scope', 'profileFactory', function NavCtrl($location, $scope, profileFactory) {
  this.page = $location.path();
  
  /* Add class to body */
  if (this.page == '') {
    var state_name = 'home';
  } else {
    var state_name = this.page.replace(/\//g, '');
  }
  
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
 }])