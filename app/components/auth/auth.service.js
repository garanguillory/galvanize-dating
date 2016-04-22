
  app.service('authService',[ '$http', '$window', function($http, $window){

    var user = {}; 

    return {
      login: function(user) {
        return $http.post('http://galvanize-student-apis.herokuapp.com/gdating/auth/login', user);
      },
      logout: function(user) {
        user = null;
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post('http://galvanize-student-apis.herokuapp.com/gdating/auth/register', user);
      },
      setUserInfo: function(userData) {
          // what to stringify for 'user' and 'token'
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user.email));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      setRegisterUserInfo: function(userData) {
          // what to stringify for 'user' and 'token'
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.data.email));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      getUserInfo: function(userData) {
        return $window.localStorage.getItem('user');
      }
    }

  }]);

