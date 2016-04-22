
app.directive("navbar",['$route', '$window', 'navbarService', 'authService', function($route, $window, navbarService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/navbar/navbar.view.html",
			controller: function($scope){

				$scope.$route = $route;
				$scope.logout = authService.logout;

				$scope.hasToken = $window.localStorage.getItem('token') ? true : false;
				console.log("hasToken: ",$scope.hasToken);

			}
			
		};
}]);