app.service('membersService',[ '$http', '$location', 'authService',  function($http, $location, authService){


	return {

		getTenMembers: function(){
			return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members?limit=10')
		},
		getAllMembers: function(){
			return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members')
		},
		getMemberByID: function(id){
			return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members/'+id);
		},
		updateMember: function(user){
			return $http.put('https://galvanize-student-apis.herokuapp.com/gdating/members/'+user._id, user)
		}

	}

}]);