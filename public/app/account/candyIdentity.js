angular.module('candyApp').factory('candyIdentity', function(){
	return {
		currentUser: undefined,
		isAuthenticated: function(){
			return !!this.currentUser;
		}
	}
})