angular.module('candyApp').factory('candyAuth', function($http,$q,candyIdentity,candyUser){
	return {
		authenticateUser: function(username,password){
			var dfd = $q.defer();
	        $http.post('/login', {username:username, password:password}).then(function(response){
	            if(response.data.success){
                    var user = new candyUser();
                    angular.extend(user, response.data.user);
	            	candyIdentity.currentUser = user; 	
	            	dfd.resolve(true);
	            } else {
	            	dfd.resolve(false);
	            }
	    	});

    		return dfd.promise;
    	},

        createUser: function(newUserData){
            var newUser = new candyUser(newUserData);
            var dfd = $q.defer();

            newUser.$save().then(function(){
                candyIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

    	logoutUser: function(){
    		var dfd = $q.defer();
    		$http.post('/logout', {logout:true}).then(function(){
    			candyIdentity.currentUser = undefined;
    			dfd.resolve();
    		})

    		return dfd.promise;
    	},

        authorizeCurrentUserForRoute: function(role){
            if(candyIdentity.isAuthorized(role)){
                return true;
            } else {
                return $q.reject('not authorized'); 
            }
        },
        authorizeAuthenticatedUserForRoute: function(){
            if(candyIdentity.isAuthenticated()){
                return true;
            } else {
                return $q.reject('not authenticated');
            }
        }
	}
});