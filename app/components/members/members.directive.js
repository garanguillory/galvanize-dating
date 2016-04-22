
app.directive("member",['$http', '$window', 'membersService', function($http, $window, membersService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/members/members.view.html",
			controller: function($scope){

				membersService.getTenMembers()
				.then(function(data){
					$scope.members = data.data.data;
				})
				.catch(function(error){
					console.log = error;
				})

				$scope.showMember = function(){ 
					$scope.currentMember = this.member;
					console.log("currentMember: ",this.member);
				};

			}
		};
}]);

