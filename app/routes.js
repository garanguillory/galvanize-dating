
(function () {

  'use strict';

  app.config(appConfig).run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];


  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<dating></dating>',
      restricted: false,
      preventLoggedIn: false
    })
    .when('/register',{
      template: '<register></register>',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/login', {
      template: '<login></login>',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/member', {
      template: '<member></member>',
      restricted: true,
      requiresLogin: true
    })
    .when('/profile', {
      template: '<profile></profile>',
      restricted: true,
      requiresLogin: true
    })
    .when('/search', {
      template: '<search></search>',
      restricted: true,
      requiresLogin: true
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserInfo();
          $location.path('/login');
        }
      }
    })
    .otherwise({redirectTo: '/login'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/'); // changed path to the home page
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/');
      }
    });
  }

})();