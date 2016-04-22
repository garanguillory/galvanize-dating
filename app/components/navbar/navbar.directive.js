
app.directive("navbar",['$route', '$window', 'navbarService', 'authService', 'membersService', function($route, $window, navbarService, authService, membersService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/navbar/navbar.view.html",
			controller: function($scope){

				$scope.$route = $route;
				$scope.logout = authService.logout;

				$scope.userID = JSON.parse(authService.userID());

				$scope.hasToken = $window.localStorage.getItem('token') ? true : false;
				console.log("hasToken: ", $scope.hasToken);

			}
			
		};
}]);