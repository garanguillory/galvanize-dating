app.service('membersService',[ '$http', function($http){

	return {

		getTenMembers: function(){
			return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members?limit=10')
		},
		getAllMembers: function(){
			return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members')
		}

	}

}]);