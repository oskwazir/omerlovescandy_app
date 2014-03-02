angular.module('candyApp').factory('candyAuth', function($http,candyIdentity,$q){
	return {
		authenticateUser: function(username,password){
			var dfd = $q.defer();
	        $http.post('/login', {username:username, password:password}).then(function(response){
	            if(response.data.success){
	            	candyIdentity.currentUser = response.data.user; 	
	            	dfd.resolve(true);
	            } else {
	            	dfd.resolve(false);
	            }
	    	});

    		return dfd.promise;
    	}
	}
});