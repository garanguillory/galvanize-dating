
app.directive("navbar",['$route', 'navbarService', function($route, navbarService){
		return {
			restrict: 'AE',
			controller: function($scope){

				$scope.$route = $route;

			},
			templateUrl: "app/components/navbar/navbar.view.html"
		};
}]);