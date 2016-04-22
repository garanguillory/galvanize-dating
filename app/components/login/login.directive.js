
app.directive("login",
	['$rootScope', '$location', 'authService', 'navbarService', 
		function($rootScope, $location, authService, navbarService){
		return {
			restrict: 'AE',
			controller: function($scope){

				$scope.user = {};
				$scope.login = function() {
					console.log($scope.user);
				  authService.login($scope.user)
				    .then(function(user) {
				      authService.setUserInfo(user);
				      $location.path('/members');
				      $rootScope.currentUser = authService.getUserInfo();
				      console.log($rootScope.currentUser);
				    })
				    .catch(function(err) {
				      // check status code, send appropriate message
				      console.log(err);
				    });
				};

			},
			templateUrl: "app/components/login/login.view.html"
		};
}]);



// username: ardith_dibbert115030
// email: Ardith_Dibbert1137@yahoo.com
// password: V6VYg7Oe9pe90H7TV_ET