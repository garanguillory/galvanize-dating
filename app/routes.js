app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<dating></dating>'
        // homePage: 'homePage'
      })
      .when('/login', {
        template: '<login></login>',
        page: 'loginPage'
      })
      .when('/register', {
        template: '<register></register>',
        page: 'registerPage'
      })
      .when('/member', {
        template: '<member></member>',
        page: 'memberPage'
      })
      .when('/login', {
        template: '<login></login>',
        page: 'loginPage'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
