
app.directive("register",
	['$rootScope', '$location', 'authService', 'navbarService',
		function($rootScope, $location, authService, navbarService){
		return {
			restrict: 'AE',
			controller: function($scope){

				$scope.user = {};
				$scope.register = function() {
				  authService.register($scope.user)
				    .then(function(user) {
				      authService.setUserInfo(user);
				      $location.path('/');
				      $rootScope.currentUser = authService.getUserInfo();
				    })
				    .catch(function(err) {
				      // check status code, send appropriate message
				      console.log(err);
				    });
				};

			},
			templateUrl: "app/components/register/register.view.html"
		};
}]);

