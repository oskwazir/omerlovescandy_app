angular.module('candyApp').factory('candyIdentity', function($window, candyUser){
    var currentUser;
    if(!!$window.bootstrappedUserObject){
        currentUser = new candyUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
	return {
		currentUser: currentUser,
		isAuthenticated: function(){
			return !!this.currentUser;
		},
        isAuthorized: function(role){
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
	}
})