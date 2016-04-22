
app.directive("profile",['profileService', 'authService', 'membersService', '$location', function(profileService, authService, membersService, $location){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			controller: function($scope){

				$scope.userID = JSON.parse(authService.userID());

				// $scope.editAccount = 

					membersService.getMemberByID($scope.userID)
						.then(function(data){
							$scope.user = data.data.data
							console.log("promise: ",data);
						})
						.catch(function(error){
							$scope.getError = error;
						})

					$scope.editAccount = function(){
						membersService.updateMember($scope.user)
							.then(function(data){
								console.log("updated member: ",data);
								$location.url('/members')
							})
							.catch(function(error){
								$scope.putError = error;
							})
					}

			}
			
		};
}]);