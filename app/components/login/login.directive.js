
app.directive("login",['navbarService', function(navbarService){
		return {
			restrict: 'AE',
			controller: function($scope){

				

			},
			templateUrl: "app/components/login/login.view.html"
		};
}]);